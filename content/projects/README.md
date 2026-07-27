# 项目内容

每个项目都必须使用稳定的项目 ID 建立独立目录。项目显示名称、别名或历史名称发生变化时，不修改目录名和项目 ID。

当前已由 `scripts/build-content-catalog.js` 为每个前台项目建立 `project.json`。这些文件包含卡片字段、分类关系、旧资料映射和详情页迁移状态；它们是第二批迁移的结构化基线。

已迁入真实资料的试点项目会额外拥有人工维护的 `detail.json`；它由 `scripts/build-project-details.js` 生成前台 `data/project-details.js`。后续可在项目目录中补充 `overview.md`、`theory.md`、`sources.yaml`、`references.yaml` 和 `media.yaml`。不应直接修改生成数据中的项目 ID 或 slug。

对资料标题与项目名称直接对应、且已有充分核验记录的项目，可以使用 `scripts/migrate-source-ecology.js` 创建待编辑复核的 `detail.json`。该脚本只迁移“源码与社区”章节，拒绝覆盖既有详情，也不会自动处理合并资料、候选映射或缺资料项目。
