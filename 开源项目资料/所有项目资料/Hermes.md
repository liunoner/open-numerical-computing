# Hermes

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

- 项目名称：Hermes
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

- 官方源码入口：[hpfem/hermes](https://github.com/hpfem/hermes)，README 将 `master-3.2` 标为最新稳定分支。
- 官网：[hp-FEM Group / Hermes](https://www.hpfem.org/hermes/)。
- 官方文档：[Hermes 用户文档](https://hpfem.org/wp-content/uploads/doc-web/doc-lib/html/html/index.html)。
- 下载/发行页：官网 [Download](https://www.hpfem.org/hermes/) 区提供主库、教程、示例、Windows 依赖及 Debian 包入口；仓库无 GitHub Releases。
- 许可证：README 声明为 LGPL；仓库同时包含 `COPYING` 与 `COPYING.LESSER`，以[许可文件](https://github.com/hpfem/hermes/tree/master-3.2)的具体适用范围为准。
- 安装与关键依赖：[安装文档](https://hpfem.org/wp-content/uploads/doc-web/doc-lib/html/html/src/installation.html)覆盖 Linux、macOS 与 Windows/MSVC；项目以 CMake 构建，可选线性求解器和网格库见官网。
- 社区入口（论坛/讨论/Issue/邮件列表）：[GitHub Issues](https://github.com/hpfem/hermes/issues)和 README 提及的 `hermes2d@googlegroups.com` 邮件组；未发现独立论坛。
- 插件、适配器与下游生态：配套 [教程](https://github.com/hpfem/hermes-tutorial)、[示例](https://github.com/hpfem/hermes-examples)；README 指出其稳定开发分支用于 Agros2D，并有 PETSc、MUMPS、UMFPACK 等求解器接口。
- 维护组织与主要开发者：hp-FEM group（University of Nevada, Reno 与 University of West Bohemia）为 README 所列原始团队；当前维护者以 GitHub 提交记录为准。
- 发展沿革：官网记录 Hermes 3.1 稳定发行；仓库保留多条稳定分支，早期版本线可由分支/提交记录追溯。
- 成熟度与维护状态（综合判断）：成熟的研究型 hp-FEM/hp-DG 库；官网与文档可用但最新稳定发行较早，近期维护活跃度待人工复核。

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
| D. 官方源码入口 | [GitHub](https://github.com/hpfem/hermes) | 官方源码仓库 | 2026-07-25 | 已核验 | README 标注最新稳定分支。 |
| D. 官网 | [hp-FEM/Hermes](https://www.hpfem.org/hermes/) | 官方官网 | 2026-07-25 | 已核验 | 项目与下载页。 |
| D. 官方文档 | [用户文档](https://hpfem.org/wp-content/uploads/doc-web/doc-lib/html/html/index.html) | 官方文档 | 2026-07-25 | 已核验 | 库、教程与 API 文档。 |
| D. 下载/发行页 | [官网 Download](https://www.hpfem.org/hermes/) | 官方官网 | 2026-07-25 | 已核验 | 源码、教程、示例及系统包入口。 |
| D. 许可证 | [仓库](https://github.com/hpfem/hermes) | 官方仓库 | 2026-07-25 | 部分核验 | README 为 LGPL；仓库含 COPYING/COPYING.LESSER，精确组合需人工复核。 |
| D. 安装与关键依赖 | [安装文档](https://hpfem.org/wp-content/uploads/doc-web/doc-lib/html/html/src/installation.html) | 官方文档 | 2026-07-25 | 已核验 | Linux/macOS/Windows 构建路径。 |
| D. 社区入口 | [Issues](https://github.com/hpfem/hermes/issues) | 官方源码平台 | 2026-07-25 | 已核验 | Issues；README 提及 Google Groups 邮件组。 |
| D. 插件、适配器与下游生态 | [README](https://github.com/hpfem/hermes#readme) | 官方仓库 | 2026-07-25 | 已核验 | 教程、示例、Agros2D 和多求解器接口。 |
| D. 维护组织与主要开发者 | [README](https://github.com/hpfem/hermes#readme) | 官方仓库 | 2026-07-25 | 已核验 | hp-FEM group 与原始所属机构可确认。 |
| D. 发展沿革 | [官网](https://www.hpfem.org/hermes/) | 官方官网 | 2026-07-25 | 部分核验 | Hermes 3.1 与稳定分支可确认。 |
| D. 成熟度与维护状态 | [官网](https://www.hpfem.org/hermes/)；[仓库](https://github.com/hpfem/hermes) | 官方官网/仓库 | 2026-07-25 | 综合判断，待人工核验 | 成熟研究库；近期活跃度未单独确认。 |
| 分类归属线索 | 离散 > 高阶与 hp 有限元法 | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |

