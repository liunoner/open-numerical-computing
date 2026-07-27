const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const contentRoot = path.join(root, 'content');
const dataContext = vm.createContext({ window: {} });

for (const file of ['data/taxonomy.js', 'data/card-descriptions.js', 'data/project-profiles.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), dataContext, { filename: file });
}

const { sections, cardDescriptions, projectProfiles } = dataContext.window.OpenNumericalData;
const materialRoot = path.join(root, '开源项目资料', '所有项目资料');

const manualMaterialMappings = {
  'CalculiX GraphiX': { files: ['CalculiX.md'], status: 'candidate', note: '名称包含图形前后处理组件，需人工确认资料是否完整覆盖。' },
  'FreeCAD FEM': { files: ['FreeCAD.md'], status: 'candidate', note: 'FreeCAD 的 FEM 工作台条目，使用主项目资料作为迁移起点。' },
  'Gmsh/ONELAB': { files: ['Gmsh.md'], status: 'candidate', note: 'ONELAB 与 Gmsh 关系需要后续补充独立资料。' },
  Gridap: { files: ['Gridap ＋ GridapEmbedded.md'], status: 'candidate', note: '现有资料合并记录 Gridap 与 GridapEmbedded。' },
  GridapEmbedded: { files: ['Gridap ＋ GridapEmbedded.md'], status: 'candidate', note: '现有资料合并记录 Gridap 与 GridapEmbedded。' },
  KINSOL: { files: ['SUNDIALS.md'], status: 'candidate', note: 'KINSOL 属于 SUNDIALS 套件，需补充组件级资料。' },
  Kokkos: { files: ['Kokkos ＋ RAJA.md'], status: 'candidate', note: '现有资料合并记录 Kokkos 与 RAJA。' },
  METIS: { files: ['METIS ＋ ParMETIS.md'], status: 'candidate', note: '现有资料合并记录 METIS 与 ParMETIS。' },
  Nek5000: { files: ['Nek5000 ＋ NekRS.md'], status: 'candidate', note: '现有资料合并记录 Nek5000 与 NekRS。' },
  NekRS: { files: ['Nek5000 ＋ NekRS.md'], status: 'candidate', note: '现有资料合并记录 Nek5000 与 NekRS。' },
  'Open CASCADE Technology': { files: ['OCCT.md'], aliases: ['OCCT'], status: 'verified_alias', note: 'OCCT 是 Open CASCADE Technology 的常用缩写。' },
  ParMETIS: { files: ['METIS ＋ ParMETIS.md'], status: 'candidate', note: '现有资料合并记录 METIS 与 ParMETIS。' },
  PeriPy: { files: [], status: 'missing', note: '尚未找到对应的单项目资料。' },
  RAJA: { files: ['Kokkos ＋ RAJA.md'], status: 'candidate', note: '现有资料合并记录 Kokkos 与 RAJA。' },
  SYCL: { files: ['SYCL-Docs.md'], status: 'candidate', note: '现有资料为 SYCL 文档线索，需确认对应项目实体。' },
  trame: { files: ['vtk.js ＋ trame.md'], status: 'candidate', note: '现有资料合并记录 vtk.js 与 trame。' },
  'vtk.js': { files: ['vtk.js ＋ trame.md'], status: 'candidate', note: '现有资料合并记录 vtk.js 与 trame。' },
};

function writeJson(relativePath, value) {
  const output = path.join(contentRoot, relativePath);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function slugify(name) {
  const base = name
    .normalize('NFKD')
    .replace(/[^A-Za-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
  return base || 'project';
}

function readMaterialIndex() {
  const entries = new Map();
  for (const file of fs.readdirSync(materialRoot, { withFileTypes: true })) {
    if (!file.isFile() || !file.name.endsWith('.md') || file.name === 'README.md') continue;
    const fullPath = path.join(materialRoot, file.name);
    const firstLine = fs.readFileSync(fullPath, 'utf8').split(/\r?\n/, 1)[0];
    const heading = firstLine.replace(/^#\s+/, '').trim() || path.basename(file.name, '.md');
    entries.set(heading, file.name);
  }
  return entries;
}

const materialIndex = readMaterialIndex();
const categories = sections.map((section, sectionIndex) => ({
  id: `category-${String(sectionIndex + 1).padStart(2, '0')}`,
  legacyId: section.id,
  legacyIndex: sectionIndex,
  title: section.title,
  topics: section.items.map((item, itemIndex) => ({
    id: `topic-${String(sectionIndex + 1).padStart(2, '0')}-${String(itemIndex + 1).padStart(2, '0')}`,
    legacyIndex: itemIndex,
    title: item.title,
  })),
}));

const topicsByLegacyLocation = new Map();
for (const category of categories) {
  for (const topic of category.topics) topicsByLegacyLocation.set(`${category.legacyId}:${topic.legacyIndex}`, topic.id);
}

const projectMap = new Map();
for (const section of sections) {
  for (const [itemIndex, item] of section.items.entries()) {
    for (const project of item.projects) {
      const key = project.name.toLocaleLowerCase('en');
      if (!projectMap.has(key)) projectMap.set(key, { name: project.name, sourceUrl: project.url, taxonomyIds: new Set() });
      projectMap.get(key).taxonomyIds.add(topicsByLegacyLocation.get(`${section.id}:${itemIndex}`));
    }
  }
}

const usedSlugs = new Set();
const records = [...projectMap.values()]
  .sort((left, right) => left.name.localeCompare(right.name, 'en', { sensitivity: 'base' }))
  .map((project) => {
    const mapping = manualMaterialMappings[project.name];
    const directMaterial = materialIndex.get(project.name);
    const files = mapping ? mapping.files : directMaterial ? [directMaterial] : [];
    const baseSlug = slugify(project.name);
    let slug = baseSlug;
    let suffix = 2;
    while (usedSlugs.has(slug)) slug = `${baseSlug}-${suffix++}`;
    usedSlugs.add(slug);
    const profile = projectProfiles[project.name] || {};
    const aliases = mapping?.aliases || [];
    return {
      id: `project-${slug}`,
      slug,
      name: project.name,
      aliases,
      sourceUrl: project.sourceUrl,
      taxonomyIds: [...project.taxonomyIds].sort(),
      card: {
        summary: cardDescriptions[project.name] || profile.summary || '',
        language: profile.language || '待核验',
        platform: profile.platform || '待核验',
        method: profile.method || '待核验',
      },
      lifecycle: {
        status: files.length ? 'legacy_material_mapped' : 'needs_material_mapping',
        detailStatus: 'pending',
      },
      details: {
        identity: { status: 'pending' },
        overview: { status: 'pending' },
        sourceEcology: { status: 'pending' },
        scope: { status: 'pending' },
        theory: { status: 'pending' },
        extensions: { status: 'pending' },
        references: { status: 'pending' },
        media: { status: 'pending' },
      },
      legacyMaterials: files.map((file) => `开源项目资料/所有项目资料/${file}`),
      mapping: mapping || (directMaterial ? { status: 'direct', note: '项目名与资料标题直接匹配。' } : { status: 'missing', note: '尚未找到对应的单项目资料。' }),
    };
  });

const referencedMaterials = new Set(records.flatMap((record) => record.legacyMaterials.map((file) => path.basename(file))));
const unreferencedMaterials = [...materialIndex.entries()]
  .filter(([, file]) => !referencedMaterials.has(file))
  .map(([title, file]) => ({ title, file: `开源项目资料/所有项目资料/${file}` }));

writeJson('taxonomy/categories.json', { schemaVersion: 1, categories });
writeJson('projects/index.json', { schemaVersion: 1, projects: records });
writeJson('mappings/legacy-materials.json', {
  schemaVersion: 1,
  mappings: records.map(({ id, name, legacyMaterials, mapping }) => ({ id, name, legacyMaterials, mapping })),
});
writeJson('mappings/aliases.json', {
  schemaVersion: 1,
  aliases: records.flatMap((record) => record.aliases.map((alias) => ({
    alias,
    projectId: record.id,
    canonicalName: record.name,
  }))),
});
writeJson('mappings/review-queue.json', {
  schemaVersion: 1,
  projectsWithoutMaterial: records.filter((record) => !record.legacyMaterials.length).map(({ id, name, mapping }) => ({ id, name, mapping })),
  candidateMappings: records.filter((record) => record.mapping.status === 'candidate').map(({ id, name, mapping }) => ({ id, name, mapping })),
  unreferencedMaterials,
});

for (const record of records) {
  writeJson(path.join('projects', record.slug, 'project.json'), record);
}

console.log(JSON.stringify({
  categories: categories.length,
  topics: categories.reduce((count, category) => count + category.topics.length, 0),
  projects: records.length,
  directOrCandidateMaterialMappings: records.filter((record) => record.legacyMaterials.length).length,
  projectsWithoutMaterial: records.filter((record) => !record.legacyMaterials.length).length,
  unreferencedMaterials: unreferencedMaterials.length,
}, null, 2));
