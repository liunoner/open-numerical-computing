# Nek5000 / NekRS

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

- 项目名称：Nek5000 / NekRS
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

- 官方源码入口：[Nek5000](https://github.com/Nek5000/Nek5000) 与 [NekRS](https://github.com/Nek5000/nekRS)。
- 官网：[NEK](https://nek5000.mcs.anl.gov/)；NekRS 以 GitHub/Read the Docs 为主要入口。
- 官方文档：[Nek5000 Docs](https://nek5000.github.io/NekDoc/)；[NekRS Docs](https://nekrsdoc.readthedocs.io/en/latest/)。
- 下载/发行页：两个仓库的 Releases/Tags；NekRS 当前可确认 v26.0（2026-01）。
- 许可证：Nek5000 与 NekRS 均以各自 LICENSE 为准；NekRS 已核验 BSD-3-Clause，Nek5000 许可需以仓库文件复核。
- 安装与关键依赖：Nek5000 需 C/Fortran/GNU Make、并行时 MPI；NekRS 需 Linux/macOS、C++17/C99、Fortran、MPI-3.1+、CMake。
- 社区入口（论坛/讨论/Issue/邮件列表）：[Nek5000 Issues](https://github.com/Nek5000/Nek5000/issues)、[NekRS Issues](https://github.com/Nek5000/nekRS/issues)、[NekRS Discussions](https://github.com/Nek5000/nekRS/discussions)及 NEK 用户社区。
- 插件、适配器与下游生态：NekTools/NekExamples、gslib/HYPRE/CVODE、VisIt/ParaView、OCCA/CUDA/HIP/DPC++、Ascent 和 legacy interface。
- 维护组织与主要开发者：Nek5000/NekRS 社区与 Argonne/UChicago 团队维护；NekRS README 标明 UChicago Argonne。
- 发展沿革：NekRS 于 2019 自 libParanumal 早期 fork 开始，目标是替代其前身 Nek5000；Nek5000 历史由官网/仓库记录。
- 成熟度与维护状态（综合判断）：两者均为成熟高阶 CFD 项目；NekRS 当前活跃发布，Nek5000 保持成熟社区与文档。

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
| D. 官方源码入口 | [Nek5000](https://github.com/Nek5000/Nek5000)；[NekRS](https://github.com/Nek5000/nekRS) | 官方源码仓库 | 2026-07-25 | 已核验 | 两个关联但独立项目。 |
| D. 官网 | [NEK](https://nek5000.mcs.anl.gov/) | 官方官网 | 2026-07-25 | 已核验 | Nek5000 社区入口；NekRS 以仓库/Docs 为主。 |
| D. 官方文档 | [Nek5000 Docs](https://nek5000.github.io/NekDoc/)；[NekRS Docs](https://nekrsdoc.readthedocs.io/en/latest/) | 官方文档 | 2026-07-25 | 已核验 | 两项目独立资料。 |
| D. 下载/发行页 | [Nek5000 Releases](https://github.com/Nek5000/Nek5000/releases)；[NekRS Releases](https://github.com/Nek5000/nekRS/releases) | 官方发行页 | 2026-07-25 | 已核验 | NekRS v26.0 可确认。 |
| D. 许可证 | [Nek5000 LICENSE](https://github.com/Nek5000/Nek5000/blob/master/LICENSE)；[NekRS LICENSE](https://github.com/Nek5000/nekRS/blob/master/LICENSE) | 官方仓库 | 2026-07-25 | 部分核验 | NekRS BSD-3-Clause；Nek5000 条款待人工复核。 |
| D. 安装与关键依赖 | [Nek5000 Quickstart](https://nek5000.github.io/NekDoc/quickstart.html)；[NekRS Installing](https://nekrsdoc.readthedocs.io/en/latest/user_guide/installing.html) | 官方文档 | 2026-07-25 | 已核验 | 编译器/MPI/CMake 等要求。 |
| D. 社区入口 | [Nek5000 Issues](https://github.com/Nek5000/Nek5000/issues)；[NekRS Discussions](https://github.com/Nek5000/nekRS/discussions) | 官方源码平台 | 2026-07-25 | 已核验 | 问题与讨论入口。 |
| D. 插件、适配器与下游生态 | [Quickstart](https://nek5000.github.io/NekDoc/quickstart.html)；[NekRS README](https://github.com/Nek5000/nekRS#readme) | 官方文档/仓库 | 2026-07-25 | 已核验 | Tools、可视化、OCCA/GPU、第三方库。 |
| D. 维护组织与主要开发者 | [NEK 官网](https://nek5000.mcs.anl.gov/)；[NekRS README](https://github.com/Nek5000/nekRS#readme) | 官方官网/仓库 | 2026-07-25 | 已核验 | 社区及 Argonne/UChicago 团队。 |
| D. 发展沿革 | [NekRS README](https://github.com/Nek5000/nekRS#readme) | 官方仓库 | 2026-07-25 | 已核验 | 2019 fork/替代关系。 |
| D. 成熟度与维护状态 | [NEK 官网](https://nek5000.mcs.anl.gov/)；[NekRS Releases](https://github.com/Nek5000/nekRS/releases) | 官方官网/发行页 | 2026-07-25 | 综合判断 | NekRS 当前发布、Nek5000 社区文档均在，判为成熟、活跃。 |
| 分类归属线索 | 离散 > 谱方法与谱元法；高性能 > GPU；高性能 > 矩阵自由 | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |

