# GPUSPH

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

- 项目名称：GPUSPH
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

- 官方源码入口：[GPUSPH/gpusph](https://github.com/GPUSPH/gpusph)，仓库 README 明确为 GPUSPH 源代码。
- 官网：[gpusph.org](https://gpusph.org/)；若页面失效，以官方 GitHub 仓库 README 链接为准。
- 官方文档：官方仓库的 [README](https://github.com/GPUSPH/gpusph#readme)、[Wiki](https://github.com/GPUSPH/gpusph/wiki) 与源码内文档为当前可确认入口。
- 下载/发行页：[GitHub Releases](https://github.com/GPUSPH/gpusph/releases)；源码可直接 clone/download。
- 许可证：GPL-3.0-or-later；以[仓库 LICENSE](https://github.com/GPUSPH/gpusph/blob/master/LICENSE)为准。
- 安装与关键依赖：README 给出 make/make test 快速路径；要求 NVIDIA CUDA SDK 与兼容宿主编译器，具体版本以仓库当前说明为准。
- 社区入口（论坛/讨论/Issue/邮件列表）：[GitHub Issues](https://github.com/GPUSPH/gpusph/issues)与[贡献指南](https://github.com/GPUSPH/gpusph/blob/master/CONTRIBUTING.rst)为公开反馈/贡献入口。
- 插件、适配器与下游生态：以 CUDA 多 GPU/多节点 SPH 求解为核心；仓库提供测试问题和案例，外部耦合/前后处理适配器待后续专项检索。
- 维护组织与主要开发者：由 GitHub 的 GPUSPH 组织维护；具体核心维护者以[贡献者记录](https://github.com/GPUSPH/gpusph/graphs/contributors)为准。
- 发展沿革：仓库 README 将其定位为完整运行于 GPU 的 WCSPH 实现；具体版本年表应以 releases/tags 记录补证。
- 成熟度与维护状态（综合判断）：研究型成熟项目，当前维护活跃度待人工核验。仓库具备贡献流程、测试入口与可克隆源码，但本轮不以历史 star 或引用量判断活跃程度。

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
| D. 官方源码入口 | [GitHub 仓库](https://github.com/GPUSPH/gpusph) | 官方源码仓库 | 2026-07-25 | 已核验 | README 明确为 GPUSPH 源代码。 |
| D. 官网 | [gpusph.org](https://gpusph.org/) | 项目官网 | 2026-07-25 | 待人工核验 | 以仓库 README 链接与可访问性为后续复核点。 |
| D. 官方文档 | [README](https://github.com/GPUSPH/gpusph#readme)；[Wiki](https://github.com/GPUSPH/gpusph/wiki) | 官方源码仓库 | 2026-07-25 | 已核验 | 当前可确认的使用/文档入口。 |
| D. 下载/发行页 | [Releases](https://github.com/GPUSPH/gpusph/releases) | 官方源码平台 | 2026-07-25 | 已核验 | release 或直接克隆/下载源码。 |
| D. 许可证 | [LICENSE](https://github.com/GPUSPH/gpusph/blob/master/LICENSE) | 官方仓库 | 2026-07-25 | 已核验 | GPL-3.0-or-later。 |
| D. 安装与关键依赖 | [README](https://github.com/GPUSPH/gpusph#readme) | 官方源码仓库 | 2026-07-25 | 已核验 | make/test；NVIDIA CUDA SDK 与兼容编译器。 |
| D. 社区入口 | [Issues](https://github.com/GPUSPH/gpusph/issues)；[CONTRIBUTING](https://github.com/GPUSPH/gpusph/blob/master/CONTRIBUTING.rst) | 官方源码平台 | 2026-07-25 | 已核验 | 报告问题与贡献入口。 |
| D. 插件、适配器与下游生态 | [仓库 README](https://github.com/GPUSPH/gpusph#readme) | 官方源码仓库 | 2026-07-25 | 部分核验 | CUDA 多 GPU/多节点与案例可确认；外部适配器待补。 |
| D. 维护组织与主要开发者 | [贡献者页](https://github.com/GPUSPH/gpusph/graphs/contributors) | 官方仓库 | 2026-07-25 | 已核验 | GPUSPH 组织维护，完整贡献者可追溯。 |
| D. 发展沿革 | [Releases](https://github.com/GPUSPH/gpusph/releases) | 官方发行页 | 2026-07-25 | 部分核验 | 发行/标签可用于补全版本年表。 |
| D. 成熟度与维护状态 | [仓库](https://github.com/GPUSPH/gpusph) | 官方源码仓库 | 2026-07-25 | 综合判断，待人工核验 | 具备源码、测试与贡献流程；近期维护活跃度待专门复核。 |
| 分类归属线索 | 粒子 > SPH | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |

