const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));
const { projects } = readJson('content/projects/index.json');
const reviewQueue = readJson('content/mappings/review-queue.json');
const materialRoot = path.join(root, '开源项目资料', '所有项目资料');

const detailProjects = [];
const readyForSourceMigration = [];
for (const project of projects) {
  const detailPath = path.join(root, 'content', 'projects', project.slug, 'detail.json');
  if (fs.existsSync(detailPath)) detailProjects.push(project.id);
  if (fs.existsSync(detailPath) || project.mapping.status !== 'direct' || project.legacyMaterials.length !== 1) continue;
  const material = path.join(root, project.legacyMaterials[0]);
  const raw = fs.readFileSync(material, 'utf8');
  const verifiedEntries = (raw.match(/已核验/g) || []).length;
  if (verifiedEntries >= 9) readyForSourceMigration.push({ id: project.id, name: project.name, verifiedEntries });
}

const mappingStatus = projects.reduce((result, project) => {
  const status = project.mapping.status;
  result[status] = (result[status] || 0) + 1;
  return result;
}, {});
const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    projects: projects.length,
    detailProjects: detailProjects.length,
    sourceEcologyCoverage: detailProjects.length,
    materialMappedProjects: projects.filter((project) => project.legacyMaterials.length).length,
  },
  mappingStatus,
  review: {
    projectsWithoutMaterial: reviewQueue.projectsWithoutMaterial,
    candidateMappings: reviewQueue.candidateMappings,
    unreferencedMaterials: reviewQueue.unreferencedMaterials,
  },
  readyForSourceMigration,
};

const markdown = [
  '# 内容健康报告',
  '',
  `生成时间：${report.generatedAt}`,
  '',
  '## 汇总',
  '',
  `- 前台项目：${report.summary.projects}`,
  `- 已接入详情：${report.summary.detailProjects}`,
  `- 已关联旧资料：${report.summary.materialMappedProjects}`,
  `- 可优先迁入“源码与社区”资料的项目：${readyForSourceMigration.length}`,
  '',
  '## 需要人工处理',
  '',
  `- 缺少资料映射：${reviewQueue.projectsWithoutMaterial.map((item) => item.name).join('、') || '无'}`,
  `- 候选映射：${reviewQueue.candidateMappings.length}`,
  `- 未关联资料：${reviewQueue.unreferencedMaterials.map((item) => item.title).join('、') || '无'}`,
  '',
  '## 下一批建议',
  '',
  ...readyForSourceMigration.map((item) => `- ${item.name}（旧资料中含 ${item.verifiedEntries} 条已核验记录）`),
  '',
].join('\n');

fs.writeFileSync(path.join(root, 'docs', 'content-health-report.json'), `${JSON.stringify(report, null, 2)}\n`, 'utf8');
fs.writeFileSync(path.join(root, 'docs', 'content-health-report.md'), markdown, 'utf8');
console.log(JSON.stringify({
  projects: report.summary.projects,
  detailProjects: report.summary.detailProjects,
  readyForSourceMigration: readyForSourceMigration.length,
  candidateMappings: reviewQueue.candidateMappings.length,
}, null, 2));
