# Meep

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

- 项目名称：Meep
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

- 官方源码入口：[NanoComp/meep](https://github.com/NanoComp/meep)。
- 官网：以 [Meep Documentation](https://meep.readthedocs.io/en/latest/)和 NanoComp GitHub 组织为主要官方入口。
- 官方文档：[MEEP Documentation](https://meep.readthedocs.io/en/latest/)。
- 下载/发行页：[GitHub Releases](https://github.com/NanoComp/meep/releases)及官方 Conda 包。
- 许可证：GPL-2.0；以[仓库 LICENSE](https://github.com/NanoComp/meep/blob/master/LICENSE)为准。
- 安装与关键依赖：[Installation](https://meep.readthedocs.io/en/latest/Installation/)说明 Conda 推荐路径和源码构建；完整构建涉及 MPB、libctl、MPI、OpenMP、HDF5、Python/Guile、BLAS/LAPACK/FFTW 等。
- 社区入口（论坛/讨论/Issue/邮件列表）：[GitHub Issues](https://github.com/NanoComp/meep/issues)、[Discussions](https://github.com/NanoComp/meep/discussions)及 `meep-announce` 发布邮件列表。
- 插件、适配器与下游生态：Python、Scheme、C++ API，MPB/Harminv/Libctl 生态，MPI 并行与 HDF5 数据工作流。
- 维护组织与主要开发者：NanoComp 组织维护；完整贡献者和核心开发者以 AUTHORS/贡献者记录为准。
- 发展沿革：GitHub 有稳定发行版本，README 引用 2010 年软件论文；项目历史待论文段进一步规范化。
- 成熟度与维护状态（综合判断）：成熟、活跃维护。仓库有 2026 年正式发行、当前文档及开放协作入口。

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
| D. 官方源码入口 | [GitHub](https://github.com/NanoComp/meep) | 官方源码仓库 | 2026-07-25 | 已核验 | NanoComp 主仓库。 |
| D. 官网 | [MEEP Docs](https://meep.readthedocs.io/en/latest/) | 官方文档站 | 2026-07-25 | 已核验 | 主要官方入口。 |
| D. 官方文档 | [Documentation](https://meep.readthedocs.io/en/latest/) | 官方文档 | 2026-07-25 | 已核验 | 用户、安装和开发文档。 |
| D. 下载/发行页 | [Releases](https://github.com/NanoComp/meep/releases) | 官方发行页 | 2026-07-25 | 已核验 | 源码与 Conda 官方发行线索。 |
| D. 许可证 | [LICENSE](https://github.com/NanoComp/meep/blob/master/LICENSE) | 官方仓库 | 2026-07-25 | 已核验 | GPL-2.0。 |
| D. 安装与关键依赖 | [Installation](https://meep.readthedocs.io/en/latest/Installation/) | 官方文档 | 2026-07-25 | 已核验 | Conda/源码；依赖栈明确。 |
| D. 社区入口 | [Issues](https://github.com/NanoComp/meep/issues)；[Discussions](https://github.com/NanoComp/meep/discussions) | 官方源码平台 | 2026-07-25 | 已核验 | Issues/Discussions；文档提及 meep-announce。 |
| D. 插件、适配器与下游生态 | [文档](https://meep.readthedocs.io/en/latest/) | 官方文档 | 2026-07-25 | 已核验 | Python/Scheme/C++、MPB/Harminv/Libctl、MPI/HDF5。 |
| D. 维护组织与主要开发者 | [仓库](https://github.com/NanoComp/meep) | 官方仓库 | 2026-07-25 | 已核验 | NanoComp 组织，人员以 AUTHORS/贡献者为准。 |
| D. 发展沿革 | [Releases](https://github.com/NanoComp/meep/releases) | 官方发行页 | 2026-07-25 | 部分核验 | 版本线与 2010 软件论文线索可确认。 |
| D. 成熟度与维护状态 | [仓库](https://github.com/NanoComp/meep)；[文档](https://meep.readthedocs.io/en/latest/) | 官方仓库/文档 | 2026-07-25 | 综合判断 | 有近期发行、当前文档和社区，判为成熟、活跃。 |
| 分类归属线索 | 离散 > 有限差分法（FDM）；电磁/光子学 → FDTD 求解器 | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |

