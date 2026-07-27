# Code_Aster

> 初始化日期：2026-07-25  
> 资料状态：待检索与核验  
> 本文件采用《开源项目内容检索规范.md》的“单项目完整采集模板”。下列“官方源码入口”仅为《开源数值仿真项目调研目录》提供的初始线索，后续必须逐项复核。

## A. 项目身份与主图

- 常用别名、缩写与历史名称：待核验
- 项目类型：待核验
- 当前稳定版本与发布日期：待核验
- 一句话定位：待核验
- 主图候选：
  - 图片 URL：待检索
  - 原始出处：待检索
  - 作者/机构：待检索
  - 版权或许可证：待检索
  - 网页使用状态：待确认，仅作来源线索
- 核验状态与日期：待核验

## B. 一级页面项目卡片

- 项目名称：Code_Aster
- 核心能力简介：待检索
- 源码可得性：待核验
- 源码入口：待核验
- 主要语言：待核验
- 支持平台：待核验
- 技术路线或核心能力：待核验

## C. 项目概览与问题解决能力

- 项目解决的问题：待检索
- 目标用户：待检索
- 典型应用领域：待检索
- 核心特色：待检索
- 可处理物理过程：待检索
- 分析对象与结构类型：待检索
- 分析类型与规模：待检索
- 主要输入：待检索
- 主要输出：待检索
- 典型研究与工程用途：待检索

## D. 源代码、生态与社区

- 官方源码入口：[codeaster/src](https://gitlab.com/codeaster/src)；主项目将源码分为 `src`、`validation`、`data` 等仓库，其中部分验证/材料数据受再分发限制。
- 官网：[code_aster](https://www.code-aster.org/)
- 官方文档：[code_aster Documentation](https://codeaster.readthedocs.io/en/latest/)
- 下载/发行页：官网提供 [SALOME-MECA 下载入口](https://www.code-aster.org/spip.php?rubrique2)；源码版本由 GitLab tags 与稳定/测试分支发布。
- 许可证：公开主体源码为 GNU GPL；确切版本和各分仓库例外必须以 [src/LICENSE](https://gitlab.com/codeaster/src/-/blob/main/LICENSE) 与项目说明为准。
- 安装与关键依赖：官方支持预配置 SALOME-MECA/Singularity 容器，也可用 `waf` 原生构建；完整前置条件见 [安装文档](https://codeaster.readthedocs.io/en/latest/installation.html)。
- 社区入口（论坛/讨论/Issue/邮件列表）：[GitLab Issues](https://gitlab.com/codeaster/src/-/issues) 与 GitLab 项目协作入口；独立官方论坛入口待人工确认。
- 插件、适配器与下游生态：SALOME-MECA 是官方发行/集成环境；项目可与 code_saturne 等耦合，相关多仓库/容器关系以 GitLab 项目说明为准。
- 维护组织与主要开发者：EDF 长期主导；官方版权页列出 EDF 及贡献组织，具体人员以 CONTRIBUTORS 为准。
- 发展沿革：源码分支中 `v15` 为稳定维护线、`main` 为开发线，GitLab tags 记录版本；Code_Aster 项目历史可追溯至 EDF 早期研发。
- 成熟度与维护状态（综合判断）：综合判断：成熟、活跃维护。官方 GitLab 最近提交和稳定/开发分支并存；成熟度结论基于正式分支、文档和容器发行。

## E. 理论架构与计算流程

- 物理与控制方程：待检索
- 离散与数值方法：待检索
- 几何、网格与前处理：待检索
- 单元、粒子或离散对象：待检索
- 材料、本构与模型库：待检索
- 初始、边界与载荷：待检索
- 线性与非线性求解：待检索
- 时间推进与事件处理：待检索
- 多物理场与多尺度耦合：待检索
- 并行与硬件加速：待检索
- 后处理与数据交换：待检索
- 扩展与二次开发：待检索
- 已知限制与适用边界：待检索

## F. 参考论文

### 软件/项目引用论文

1. 完整参考文献：待检索
   - DOI/链接：待检索
   - 作者与机构：待检索
   - 摘要要点：待检索
   - 与项目的关系：待检索

### 核心理论论文

1. 完整参考文献：待检索
   - DOI/链接：待检索
   - 摘要要点：待检索
   - 对理论架构的意义：待检索

### 关键算法与应用验证论文

1. 完整参考文献：待检索
   - DOI/链接：待检索
   - 摘要要点：待检索
   - 与项目的关系：待检索

## G. 来源与核验记录

| 字段或结论 | 来源 URL | 来源类型 | 核验日期 | 状态 | 备注 |
| --- | --- | --- | --- | --- | --- |
| D. 官方源码入口 | [codeaster/src](https://gitlab.com/codeaster/src) | 官方仓库 | 2026-07-25 | 已核验 | 项目说明明确该库为源码、构建脚本和多数测试。 |
| D. 官网 | [code-aster.org](https://www.code-aster.org/) | 官方主页 | 2026-07-25 | 已核验 | GitLab 项目说明列为主页。 |
| D. 官方文档 | [Read the Docs](https://codeaster.readthedocs.io/en/latest/) | 官方文档 | 2026-07-25 | 已核验 | 含构建、安装和使用说明。 |
| D. 下载/发行页 | [GitLab tags](https://gitlab.com/codeaster/src/-/tags) | 官方发行页 | 2026-07-25 | 已核验 | 项目说明定义 stable/testing 标签；SALOME-MECA 另行发行。 |
| D. 许可证 | [src/LICENSE](https://gitlab.com/codeaster/src/-/blob/main/LICENSE) | 官方仓库 | 2026-07-25 | 待人工核验 | 需连同 validation/data 的再分发说明核对。 |
| D. 安装与依赖 | [安装文档](https://codeaster.readthedocs.io/en/latest/installation.html) | 官方文档 | 2026-07-25 | 已核验 | 说明 Git、容器、waf 和测试路径。 |
| D. 社区入口 | [GitLab Issues](https://gitlab.com/codeaster/src/-/issues) | 官方仓库 | 2026-07-25 | 已核验 | 官方问题追踪入口。 |
| D. 生态 | [项目说明](https://gitlab.com/codeaster/src) | 官方仓库 | 2026-07-25 | 已核验 | 说明分仓库、容器及独立开发工具。 |
| D. 维护组织 | [版权页](https://codeaster.readthedocs.io/en/latest/copyright.html) | 官方文档 | 2026-07-25 | 已核验 | 明列 EDF 和贡献组织。 |
| D. 发展沿革 | [项目说明](https://gitlab.com/codeaster/src) | 官方仓库 | 2026-07-25 | 已核验 | 记录 v14/v15/main 与稳定标签策略。 |
| D. 成熟度与维护状态 | [main 分支](https://gitlab.com/codeaster/src/-/tree/main/code_aster) | 官方仓库 | 2026-07-25 | 已核验 | 基于近期提交、维护分支和文档的综合判断。 |
| 分类归属线索 | 相场 > 连续损伤力学；相场 > 内聚区模型；多物理 > 热—结构耦合 | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |
