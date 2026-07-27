const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const { projects } = JSON.parse(fs.readFileSync(path.join(root, 'content', 'projects', 'index.json'), 'utf8'));
const defaultBatch = ['ADIOS2', 'CadQuery', 'Code_Aster', 'Code_Saturne', 'DUNE', 'Elmer', 'Firedrake', 'FreeFEM', 'Ginkgo', 'Kratos', 'MFEM', 'MOOSE'];
const requestedNames = process.argv.slice(2);
const names = requestedNames.length ? requestedNames : defaultBatch;
const projectByName = new Map(projects.map((project) => [project.name, project]));

function detailSection(raw) {
  const match = raw.match(/## D\. 源代码、生态与社区\s*([\s\S]*?)\n## E\./);
  if (!match) throw new Error('未找到 D. 源代码、生态与社区章节。');
  return match[1];
}

function fieldValue(section, label) {
  const expression = new RegExp(`^- ${label}[：:]\\s*(.+)$`, 'm');
  const match = section.match(expression);
  return match ? match[1].replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '$1（$2）').trim() : '';
}

function linksFrom(section) {
  const seen = new Set();
  return [...section.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g)]
    .map((match) => ({ label: match[1].trim(), url: match[2].trim() }))
    .filter((link) => link.label && link.url && !seen.has(link.url) && seen.add(link.url))
    .slice(0, 10);
}

for (const name of names) {
  const project = projectByName.get(name);
  if (!project) throw new Error(`前台项目不存在：${name}`);
  if (project.mapping.status !== 'direct' || project.legacyMaterials.length !== 1) {
    throw new Error(`项目资料不是可自动迁移的一对一映射：${name}`);
  }
  const output = path.join(root, 'content', 'projects', project.slug, 'detail.json');
  if (fs.existsSync(output)) throw new Error(`详情已存在，拒绝覆盖：${name}`);
  const materialPath = path.join(root, project.legacyMaterials[0]);
  const raw = fs.readFileSync(materialPath, 'utf8');
  const verifiedEntries = (raw.match(/已核验/g) || []).length;
  if (verifiedEntries < 9) throw new Error(`已核验来源不足，拒绝自动迁移：${name}`);
  const section = detailSection(raw);
  const links = linksFrom(section);
  if (!links.length) throw new Error(`未提取到官方链接：${name}`);
  const initialDate = raw.match(/初始化日期：([0-9-]+)/)?.[1] || '';
  const detail = {
    schemaVersion: 1,
    projectId: project.id,
    updatedAt: initialDate || new Date().toISOString().slice(0, 10),
    migration: {
      source: project.legacyMaterials[0],
      method: 'automated_source_ecology_extract',
      reviewStatus: 'needs_editor_review',
    },
    details: {
      identity: { status: 'pending' },
      overview: { status: 'pending' },
      sourceEcology: {
        status: 'verified',
        summary: '已从现有资料中的官方来源记录迁入源码、文档、发行、许可证、安装、社区与生态入口；编辑复核后可继续补充项目概览和理论资料。',
        website: fieldValue(section, '官网'),
        documentation: fieldValue(section, '官方文档'),
        releases: fieldValue(section, '下载/发行页'),
        license: fieldValue(section, '许可证'),
        installation: fieldValue(section, '安装与关键依赖'),
        community: fieldValue(section, '社区入口（论坛/讨论/Issue/邮件列表）') || fieldValue(section, '社区入口'),
        ecosystem: fieldValue(section, '插件、适配器与下游生态'),
        maintenance: fieldValue(section, '成熟度与维护状态（综合判断）'),
        links,
      },
      scope: { status: 'pending' },
      theory: { status: 'pending' },
      extensions: { status: 'pending' },
      references: { status: 'pending' },
      media: { status: 'pending' },
    },
  };
  fs.writeFileSync(output, `${JSON.stringify(detail, null, 2)}\n`, 'utf8');
  console.log(`已迁移：${name}`);
}
