const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'content', 'projects', 'index.json');
const { projects } = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
const detailsByName = {};

for (const project of projects) {
  const detailPath = path.join(root, 'content', 'projects', project.slug, 'detail.json');
  if (!fs.existsSync(detailPath)) continue;
  const detail = JSON.parse(fs.readFileSync(detailPath, 'utf8'));
  if (detail.projectId !== project.id) throw new Error(`详情项目 ID 不匹配：${project.slug}`);
  detailsByName[project.name] = {
    projectId: project.id,
    slug: project.slug,
    updatedAt: detail.updatedAt,
    details: detail.details,
  };
}

const output = [
  'window.OpenNumericalData=window.OpenNumericalData||{};',
  `window.OpenNumericalData.projectDetails=${JSON.stringify(detailsByName, null, 2)};`,
  '',
].join('\n');

fs.writeFileSync(path.join(root, 'data', 'project-details.js'), output, 'utf8');
console.log(JSON.stringify({ detailProjects: Object.keys(detailsByName).length }, null, 2));
