# MUMPS

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

- 项目名称：MUMPS
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

- 官方源码入口：[MUMPS 下载页](https://mumps-solver.org/index.php?page=dwnld)，提供源码归档。
- 官网：[mumps-solver.org](https://mumps-solver.org/)。
- 官方文档：[用户指南](https://mumps-solver.org/doc/userguide_5.8.1.pdf)及源包 README/FAQ。
- 下载/发行页：[Download](https://mumps-solver.org/index.php?page=dwnld)，当前可确认 5.9.1（2026-07）。
- 许可证：CeCILL-C；AMD、RRQR 与 PORD 等部分有例外/单独许可，以下载页和源包许可文件为准。
- 安装与关键依赖：源包 Makefile.inc/FAQ；并行版需要 MPI，且可选 METIS/SCOTCH、BLAS/LAPACK、排序库。
- 社区入口（论坛/讨论/Issue/邮件列表）：MUMPS Users' mailing list 与 README 邮箱。
- 插件、适配器与下游生态：Fortran/C 接口、Scilab/Matlab 接口，以及 PETSc、Trilinos、MOOSE 等求解器生态。
- 维护组织与主要开发者：CERFACS、CNRS、ENS Lyon、INP Toulouse、Inria、Mumps Technologies、University of Bordeaux 等。
- 发展沿革：官网版权 1991–2026，下载页提供 Changelog/历史。
- 成熟度与维护状态（综合判断）：基础设施级、活跃维护；2026-07 有 5.9.1 正式发布和邮件列表支持。

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
| D. 官方源码入口 | [Download](https://mumps-solver.org/index.php?page=dwnld) | 官方发行页 | 2026-07-25 | 已核验 | 官方源码归档入口。 |
| D. 官网 | [mumps-solver.org](https://mumps-solver.org/) | 官方官网 | 2026-07-25 | 已核验 | 项目主页。 |
| D. 官方文档 | [User guide](https://mumps-solver.org/doc/userguide_5.8.1.pdf)；[FAQ](https://mumps-solver.org/index.php?page=faq) | 官方文档 | 2026-07-25 | 已核验 | 用户、构建与常见问题资料。 |
| D. 下载/发行页 | [Download](https://mumps-solver.org/index.php?page=dwnld) | 官方发行页 | 2026-07-25 | 已核验 | 5.9.1（2026-07）与历史记录。 |
| D. 许可证 | [Download/conditions](https://mumps-solver.org/index.php?page=dwnld) | 官方发行页 | 2026-07-25 | 已核验 | CeCILL-C，含明确组件例外。 |
| D. 安装与关键依赖 | [FAQ](https://mumps-solver.org/index.php?page=faq) | 官方文档 | 2026-07-25 | 已核验 | MPI、排序库和数值库依配置。 |
| D. 社区入口 | [Download](https://mumps-solver.org/index.php?page=dwnld) | 官方官网 | 2026-07-25 | 已核验 | Users mailing list/README 邮箱。 |
| D. 插件、适配器与下游生态 | [Download](https://mumps-solver.org/index.php?page=dwnld) | 官方发行页 | 2026-07-25 | 已核验 | C/Fortran/Scilab/Matlab 接口与下游求解器。 |
| D. 维护组织与主要开发者 | [Download](https://mumps-solver.org/index.php?page=dwnld) | 官方发行页 | 2026-07-25 | 已核验 | 多机构版权主体列明。 |
| D. 发展沿革 | [Download](https://mumps-solver.org/index.php?page=dwnld) | 官方发行页 | 2026-07-25 | 已核验 | 1991–2026、Changelog 可查。 |
| D. 成熟度与维护状态 | [Download](https://mumps-solver.org/index.php?page=dwnld) | 官方发行页 | 2026-07-25 | 综合判断 | 2026 正式发行与邮件列表，判为基础设施级、活跃。 |
| 分类归属线索 | 高性能 > 稀疏直接求解器 | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |

