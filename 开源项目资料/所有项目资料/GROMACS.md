# GROMACS

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

- 项目名称：GROMACS
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

- 官方源码入口：[GitLab 主仓库](https://gitlab.com/gromacs/gromacs)；调研目录中的 [GitHub 仓库](https://github.com/gromacs/gromacs)已明确标注为 public/backup，代码评审和 Issue 使用 GitLab。
- 官网：[gromacs.org](https://www.gromacs.org/)。
- 官方文档：[GROMACS Manual](https://manual.gromacs.org/documentation/current/)。
- 下载/发行页：[官方 Downloads](https://www.gromacs.org/downloads.html)；源码包、二进制和版本说明由官网链接。
- 许可证：LGPL-2.1-or-later；[官网 About 页面](https://www.gromacs.org/about.html)与源码许可证说明为准。
- 安装与关键依赖：[官方安装指南](https://manual.gromacs.org/documentation/current/install-guide/index.html)要求 C/C++ 编译器、CMake，并说明 FFTW、MPI、CUDA/OpenCL/SYCL/HIP 等可选并行后端。
- 社区入口（论坛/讨论/Issue/邮件列表）：[用户论坛](https://gromacs.bioexcel.eu/)和 [GitLab Issues](https://gitlab.com/gromacs/gromacs/-/issues)为官方公开入口。
- 插件、适配器与下游生态：有 MDModules 扩展接口、gmxapi、各类分析工具和 BioExcel 教学生态；官方 About 和手册描述模块扩展。
- 维护组织与主要开发者：GROMACS Development Team 维护；[开发页面](https://www.gromacs.org/development.html)说明贡献流程，完整人员名册以 GitLab/官网为准。
- 发展沿革：官网新闻与发行说明保留版本时间线；当前 2026 系列持续发布，早期历史将于项目论文段补充。
- 成熟度与维护状态（综合判断）：成熟、活跃维护。官网仍发布 2026 系列、维护手册和 GitLab 工作流；判断来自官方发布与文档。

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
| D. 官方源码入口 | [GitLab 主仓库](https://gitlab.com/gromacs/gromacs)；[GitHub backup](https://github.com/gromacs/gromacs) | 官方源码平台 | 2026-07-25 | 已核验 | GitHub README 明示其为 backup，GitLab 用于评审/Issue。 |
| D. 官网 | [gromacs.org](https://www.gromacs.org/) | 官方官网 | 2026-07-25 | 已核验 | 项目主页。 |
| D. 官方文档 | [Manual](https://manual.gromacs.org/documentation/current/) | 官方文档 | 2026-07-25 | 已核验 | 用户、开发与安装文档。 |
| D. 下载/发行页 | [Downloads](https://www.gromacs.org/downloads.html) | 官方发行页 | 2026-07-25 | 已核验 | 官方下载和版本入口。 |
| D. 许可证 | [About/License](https://www.gromacs.org/about.html) | 官方官网 | 2026-07-25 | 已核验 | LGPL-2.1-or-later。 |
| D. 安装与关键依赖 | [安装指南](https://manual.gromacs.org/documentation/current/install-guide/index.html) | 官方文档 | 2026-07-25 | 已核验 | CMake、C/C++；可选 FFTW/MPI/GPU 后端。 |
| D. 社区入口 | [论坛](https://gromacs.bioexcel.eu/)；[GitLab Issues](https://gitlab.com/gromacs/gromacs/-/issues) | 官方社区/源码平台 | 2026-07-25 | 已核验 | 用户讨论及缺陷跟踪。 |
| D. 插件、适配器与下游生态 | [About](https://www.gromacs.org/about.html)；[开发文档](https://manual.gromacs.org/documentation/current/dev-manual/) | 官方官网/文档 | 2026-07-25 | 已核验 | MDModules、gmxapi 与分析/教学生态。 |
| D. 维护组织与主要开发者 | [Development](https://www.gromacs.org/development.html) | 官方官网 | 2026-07-25 | 已核验 | GROMACS Development Team，贡献流程可查。 |
| D. 发展沿革 | [官网新闻](https://www.gromacs.org/news.html) | 官方官网 | 2026-07-25 | 部分核验 | 近期版本历史可查，早期历史待论文段补全。 |
| D. 成熟度与维护状态 | [官网](https://www.gromacs.org/)；[GitLab](https://gitlab.com/gromacs/gromacs) | 官方官网/仓库 | 2026-07-25 | 综合判断 | 2026 系列仍发布并维护文档与开发流程，判为成熟、活跃维护。 |
| 分类归属线索 | 粒子 > MD | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |

