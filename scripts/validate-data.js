const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const context = vm.createContext({ window: {} });
const files = [
  'data/taxonomy.js',
  'data/card-descriptions.js',
  'data/project-profiles.js',
];

for (const file of files) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}

const { sections, cardDescriptions, projectProfiles } = context.window.OpenNumericalData || {};
const errors = [];

if (!Array.isArray(sections) || sections.length === 0) errors.push('分类数据未加载。');
if (!cardDescriptions || typeof cardDescriptions !== 'object') errors.push('卡片描述数据未加载。');
if (!projectProfiles || typeof projectProfiles !== 'object') errors.push('项目档案数据未加载。');

const placements = [];
for (const section of sections || []) {
  if (!section.id || !section.title || !Array.isArray(section.items)) {
    errors.push(`一级分类格式不完整：${section.title || section.id || '未知分类'}`);
    continue;
  }
  for (const item of section.items) {
    if (!item.title || !Array.isArray(item.projects)) {
      errors.push(`二级分类格式不完整：${section.title}`);
      continue;
    }
    for (const project of item.projects) {
      placements.push(project);
      if (!project.name || !project.url) errors.push(`项目缺少名称或源码入口：${item.title}`);
    }
  }
}

const projects = [...new Set(placements.map((project) => project.name))];
for (const name of projects) {
  if (!cardDescriptions[name]) errors.push(`缺少卡片描述：${name}`);
  if (!projectProfiles[name]) errors.push(`缺少项目档案：${name}`);
}

const report = {
  categories: (sections || []).length,
  subcategories: (sections || []).reduce((count, section) => count + (section.items || []).length, 0),
  placements: placements.length,
  uniqueProjects: projects.length,
  cardDescriptions: Object.keys(cardDescriptions || {}).length,
  projectProfiles: Object.keys(projectProfiles || {}).length,
};

console.log(JSON.stringify(report, null, 2));
if (errors.length) {
  console.error(`数据校验失败：\n- ${errors.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log('数据校验通过。');
}
