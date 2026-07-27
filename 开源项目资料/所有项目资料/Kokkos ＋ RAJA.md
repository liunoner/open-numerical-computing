# Kokkos / RAJA

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

- 项目名称：Kokkos / RAJA
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

- 官方源码入口：[Kokkos](https://github.com/kokkos/kokkos) 与 [LLNL/RAJA](https://github.com/LLNL/RAJA)，为两个独立的性能可移植项目。
- 官网：[Kokkos](https://kokkos.org/)；RAJA 以 [LLNL 项目页](https://software.llnl.gov/raja/)和 GitHub 为主要入口。
- 官方文档：[Kokkos Docs](https://kokkos.org/kokkos-core-wiki/)；[RAJA Docs](https://raja.readthedocs.io/en/main/)。
- 下载/发行页：[Kokkos Releases](https://github.com/kokkos/kokkos/releases)；[RAJA Releases](https://github.com/LLNL/RAJA/releases)。
- 许可证：Kokkos 为 Apache-2.0 with LLVM Exceptions；RAJA 为 BSD-3-Clause；分别以[Kokkos 许可页](https://kokkos.org/kokkos-core-wiki/license.html)和[RAJA LICENSE](https://github.com/LLNL/RAJA/blob/develop/LICENSE)为准。
- 安装与关键依赖：Kokkos 官方 [Get Started](https://kokkos.org/kokkos-core-wiki/get-started.html)说明 CMake、兼容 C++ 编译器及后端选择；RAJA [Getting Started](https://raja.readthedocs.io/en/main/sphinx/user_guide/getting_started.html)说明递归克隆、CMake 及 CUDA/HIP 等工具链。
- 社区入口（论坛/讨论/Issue/邮件列表）：[Kokkos Issues](https://github.com/kokkos/kokkos/issues)、[Kokkos Discussions](https://github.com/kokkos/kokkos/discussions)、[RAJA Issues](https://github.com/LLNL/RAJA/issues)；社区聊天/邮件入口以两项目文档为准。
- 插件、适配器与下游生态：Kokkos 有 Kokkos Kernels、Tools、KokkosKernels/Trilinos 等生态；RAJA 属 LLNL RADIUSS 生态，与 Umpire、CHAI、camp 等协作，二者均服务多 CPU/GPU 后端。
- 维护组织与主要开发者：Kokkos 由 Sandia/ORNL 等 Kokkos Project 维护；RAJA 由 LLNL 维护。个人维护者名单应以各仓库维护文件和贡献者页为准。
- 发展沿革：两项目 Releases/Tags 均保留版本历史；RAJA 属 RADIUSS 项目族，详细初始年份待后续以官方项目页补充。
- 成熟度与维护状态（综合判断）：均为成熟、活跃维护的性能可移植基础库；依据为当前官方文档、发行页和机构维护入口。

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
| D. 官方源码入口 | [Kokkos](https://github.com/kokkos/kokkos)；[RAJA](https://github.com/LLNL/RAJA) | 官方源码仓库 | 2026-07-25 | 已核验 | 两个独立项目，均可克隆源码。 |
| D. 官网 | [Kokkos](https://kokkos.org/)；[RAJA/LLNL](https://software.llnl.gov/raja/) | 官方官网/机构页 | 2026-07-25 | 已核验 | 分别对应项目入口。 |
| D. 官方文档 | [Kokkos Docs](https://kokkos.org/kokkos-core-wiki/)；[RAJA Docs](https://raja.readthedocs.io/en/main/) | 官方文档 | 2026-07-25 | 已核验 | 两套独立文档。 |
| D. 下载/发行页 | [Kokkos Releases](https://github.com/kokkos/kokkos/releases)；[RAJA Releases](https://github.com/LLNL/RAJA/releases) | 官方发行页 | 2026-07-25 | 已核验 | 源码版本入口。 |
| D. 许可证 | [Kokkos License](https://kokkos.org/kokkos-core-wiki/license.html)；[RAJA LICENSE](https://github.com/LLNL/RAJA/blob/develop/LICENSE) | 官方文档/仓库 | 2026-07-25 | 已核验 | Kokkos Apache-2.0+LLVM exception；RAJA BSD-3-Clause。 |
| D. 安装与关键依赖 | [Kokkos Get Started](https://kokkos.org/kokkos-core-wiki/get-started.html)；[RAJA Getting Started](https://raja.readthedocs.io/en/main/sphinx/user_guide/getting_started.html) | 官方文档 | 2026-07-25 | 已核验 | CMake/C++ 与 CPU/GPU 后端工具链。 |
| D. 社区入口 | [Kokkos Issues](https://github.com/kokkos/kokkos/issues)；[Discussions](https://github.com/kokkos/kokkos/discussions)；[RAJA Issues](https://github.com/LLNL/RAJA/issues) | 官方源码平台 | 2026-07-25 | 已核验 | 公开协作入口。 |
| D. 插件、适配器与下游生态 | [Kokkos Docs](https://kokkos.org/kokkos-core-wiki/)；[RADIUSS](https://software.llnl.gov/radiuss/) | 官方文档/机构页 | 2026-07-25 | 已核验 | Kokkos Kernels/Tools 与 RAJA-RADIUSS 生态。 |
| D. 维护组织与主要开发者 | [Kokkos](https://kokkos.org/)；[RAJA/LLNL](https://software.llnl.gov/raja/) | 官方/机构页 | 2026-07-25 | 已核验 | Kokkos Project、LLNL 的维护归属可确认。 |
| D. 发展沿革 | [Kokkos Releases](https://github.com/kokkos/kokkos/releases)；[RAJA Releases](https://github.com/LLNL/RAJA/releases) | 官方发行页 | 2026-07-25 | 部分核验 | 版本线可追溯。 |
| D. 成熟度与维护状态 | [Kokkos Docs](https://kokkos.org/kokkos-core-wiki/)；[RAJA Docs](https://raja.readthedocs.io/en/main/) | 官方文档 | 2026-07-25 | 综合判断 | 文档、发行和机构维护均持续，判为成熟、活跃。 |
| 分类归属线索 | 高性能 > GPU 与异构加速；高性能 > 性能可移植 | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |

