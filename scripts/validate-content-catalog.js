const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));
const { categories } = readJson('content/taxonomy/categories.json');
const { projects } = readJson('content/projects/index.json');
const { aliases } = readJson('content/mappings/aliases.json');
const errors = [];
const topicIds = new Set(categories.flatMap((category) => category.topics.map((topic) => topic.id)));
const ids = new Set();
const slugs = new Set();
const projectIds = new Set(projects.map((project) => project.id));
const aliasKeys = new Set();
const requiredDetailSections = ['identity', 'overview', 'sourceEcology', 'scope', 'theory', 'extensions', 'references', 'media'];

for (const project of projects) {
  if (!project.id || ids.has(project.id)) errors.push(`重复或缺失项目 ID：${project.id || project.name}`);
  ids.add(project.id);
  if (!project.slug || slugs.has(project.slug)) errors.push(`重复或缺失项目 slug：${project.slug || project.name}`);
  slugs.add(project.slug);
  if (!project.name || !project.sourceUrl || !project.card?.summary) errors.push(`项目基础信息不完整：${project.id}`);
  for (const section of requiredDetailSections) {
    if (!['verified', 'pending', 'not_applicable'].includes(project.details?.[section]?.status)) {
      errors.push(`项目详情区块状态无效：${project.id} -> ${section}`);
    }
  }
  for (const topicId of project.taxonomyIds || []) {
    if (!topicIds.has(topicId)) errors.push(`项目引用未知二级分类：${project.id} -> ${topicId}`);
  }
  const projectFile = path.join(root, 'content', 'projects', project.slug, 'project.json');
  if (!fs.existsSync(projectFile)) errors.push(`缺少项目内容目录：${project.id}`);
  else {
    const individualProject = JSON.parse(fs.readFileSync(projectFile, 'utf8'));
    if (individualProject.id !== project.id || individualProject.slug !== project.slug) {
      errors.push(`项目索引与单项目文件不一致：${project.id}`);
    }
  }
  for (const material of project.legacyMaterials || []) {
    if (!fs.existsSync(path.join(root, material))) errors.push(`旧资料路径不存在：${project.id} -> ${material}`);
  }
}

for (const alias of aliases) {
  const key = alias.alias.toLocaleLowerCase('en');
  if (!alias.alias || aliasKeys.has(key)) errors.push(`重复或缺失别名：${alias.alias || '未知别名'}`);
  aliasKeys.add(key);
  if (!projectIds.has(alias.projectId)) errors.push(`别名引用未知项目：${alias.alias} -> ${alias.projectId}`);
}

console.log(JSON.stringify({ categories: categories.length, topics: topicIds.size, projects: projects.length, aliases: aliases.length }, null, 2));
if (errors.length) {
  console.error(`内容目录校验失败：\n- ${errors.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log('内容目录校验通过。');
}
