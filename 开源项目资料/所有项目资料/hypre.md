# hypre

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

- 项目名称：hypre
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

- 官方源码入口：[hypre-space/hypre](https://github.com/hypre-space/hypre)。
- 官网：[LLNL hypre 项目页](https://computing.llnl.gov/projects/hypre-scalable-linear-solvers-multigrid-methods)。
- 官方文档：[hypre Documentation](https://hypre.readthedocs.io/en/stable/index.html)。
- 下载/发行页：[GitHub Releases](https://github.com/hypre-space/hypre/releases)，官方文档也给出源码 clone/发行包路径。
- 许可证：Apache-2.0 OR MIT；以[官方文档许可标识](https://hypre.readthedocs.io/en/stable/index.html)和仓库 LICENSE/COPYRIGHT 为准。
- 安装与关键依赖：[General Information](https://hypre.readthedocs.io/en/stable/ch-misc.html)说明 Autotools/CMake 构建；并行运行需 MPI，可选 CUDA、OpenMP、HIP/SYCL 等后端依构建配置启用。
- 社区入口（论坛/讨论/Issue/邮件列表）：[GitHub Issues](https://github.com/hypre-space/hypre/issues)为问题入口；官方文档保留 `hypre-announce` 发布邮件列表说明。
- 插件、适配器与下游生态：提供 Struct、SStruct、IJ 等接口和多重网格/预条件器；与 PETSc、Trilinos、AMReX 等生态的具体集成需按各自项目核验。
- 维护组织与主要开发者：HYPRE Project Developers，版权信息标明 Lawrence Livermore National Security, LLC 等；LLNL 项目页为机构入口。
- 发展沿革：官方文档版权从 1998 起，GitHub Releases 保存现代版本线；早期项目史待引用官方档案补充。
- 成熟度与维护状态（综合判断）：基础设施级、活跃维护。官方文档已至 3.1.0 并有近期源码发行；判断依据为官方文档与仓库。

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
| D. 官方源码入口 | [GitHub](https://github.com/hypre-space/hypre) | 官方源码仓库 | 2026-07-25 | 已核验 | HYPRE 项目主仓库。 |
| D. 官网 | [LLNL 项目页](https://computing.llnl.gov/projects/hypre-scalable-linear-solvers-multigrid-methods) | 机构官方页 | 2026-07-25 | 已核验 | 官方机构入口。 |
| D. 官方文档 | [Documentation](https://hypre.readthedocs.io/en/stable/index.html) | 官方文档 | 2026-07-25 | 已核验 | 用户/接口/构建文档。 |
| D. 下载/发行页 | [Releases](https://github.com/hypre-space/hypre/releases) | 官方发行页 | 2026-07-25 | 已核验 | 源码发行与标签。 |
| D. 许可证 | [文档](https://hypre.readthedocs.io/en/stable/index.html) | 官方文档 | 2026-07-25 | 已核验 | Apache-2.0 OR MIT。 |
| D. 安装与关键依赖 | [General Information](https://hypre.readthedocs.io/en/stable/ch-misc.html) | 官方文档 | 2026-07-25 | 已核验 | Autotools/CMake；MPI 与可选加速后端。 |
| D. 社区入口 | [Issues](https://github.com/hypre-space/hypre/issues)；[文档](https://hypre.readthedocs.io/en/stable/ch-intro.html) | 官方源码平台/文档 | 2026-07-25 | 已核验 | Issues 与发布邮件列表说明。 |
| D. 插件、适配器与下游生态 | [文档](https://hypre.readthedocs.io/en/stable/index.html) | 官方文档 | 2026-07-25 | 已核验 | Struct/SStruct/IJ 与多重网格/预条件器接口。 |
| D. 维护组织与主要开发者 | [文档](https://hypre.readthedocs.io/en/stable/index.html) | 官方文档 | 2026-07-25 | 已核验 | HYPRE Project Developers、LLNL 版权主体可确认。 |
| D. 发展沿革 | [Releases](https://github.com/hypre-space/hypre/releases) | 官方发行页 | 2026-07-25 | 部分核验 | 1998 起版权与当前版本线可确认。 |
| D. 成熟度与维护状态 | [文档](https://hypre.readthedocs.io/en/stable/index.html)；[仓库](https://github.com/hypre-space/hypre) | 官方文档/仓库 | 2026-07-25 | 综合判断 | 近期文档/发行存在，判为基础设施级、活跃维护。 |
| 分类归属线索 | 高性能 > 预条件；高性能 > 多重网格 | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |

