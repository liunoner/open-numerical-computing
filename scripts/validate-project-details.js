const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const { projects } = JSON.parse(fs.readFileSync(path.join(root, 'content', 'projects', 'index.json'), 'utf8'));
const projectIds = new Set(projects.map((project) => project.id));
const requiredSections = ['identity', 'overview', 'sourceEcology', 'scope', 'theory', 'extensions', 'references', 'media'];
const allowedStatuses = new Set(['verified', 'pending', 'not_applicable']);
const errors = [];
let count = 0;

for (const project of projects) {
  const detailPath = path.join(root, 'content', 'projects', project.slug, 'detail.json');
  if (!fs.existsSync(detailPath)) continue;
  count += 1;
  const detail = JSON.parse(fs.readFileSync(detailPath, 'utf8'));
  if (!projectIds.has(detail.projectId) || detail.projectId !== project.id) errors.push(`详情项目 ID 无效：${project.slug}`);
  for (const section of requiredSections) {
    const sectionData = detail.details?.[section];
    if (!allowedStatuses.has(sectionData?.status)) errors.push(`详情区块状态无效：${project.slug} -> ${section}`);
  }
  const source = detail.details?.sourceEcology;
  if (source?.status === 'verified') {
    if (!source.summary || !Array.isArray(source.links) || !source.links.length) errors.push(`已核验源码生态缺少摘要或链接：${project.slug}`);
    for (const link of source.links || []) {
      if (!link.label || !/^https:\/\//.test(link.url || '')) errors.push(`源码生态链接无效：${project.slug}`);
    }
  }
}

console.log(JSON.stringify({ detailProjects: count }, null, 2));
if (errors.length) {
  console.error(`项目详情校验失败：\n- ${errors.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log('项目详情校验通过。');
}
