# libigl

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

- 项目名称：libigl
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

- 官方源码入口：[libigl/libigl](https://github.com/libigl/libigl)。
- 官网：[libigl.github.io](https://libigl.github.io/)。
- 官方文档：[libigl Tutorial / Documentation](https://libigl.github.io/)。
- 下载/发行页：[GitHub Releases](https://github.com/libigl/libigl/releases)；也可直接 clone 或作为 CMake 依赖引入。
- 许可证：核心主要为 MPL-2.0；仓库还包含 GPL-3.0 许可的 copyleft 集成代码及不同第三方依赖许可，必须按所用头文件/模块检查[官方许可页](https://libigl.github.io/license/)。
- 安装与关键依赖：核心为 header-only；官网说明加入 include 路径即可使用，强依赖 Eigen；可选 CGAL、Boost、GMP、MPFR、OpenGL 等随模块变化。
- 社区入口（论坛/讨论/Issue/邮件列表）：[GitHub Issues](https://github.com/libigl/libigl/issues)、[Discussions](https://github.com/libigl/libigl/discussions)与 Pull Requests；官网明确建议通过 issue 排障。
- 插件、适配器与下游生态：CMake example project、Eigen、CGAL/copyleft 模块、MATLAB/外部几何库接口；部分插件受更严格的第三方许可约束。
- 维护组织与主要开发者：官网说明由 Alec Jacobson 与 Daniele Panozzo 领导的团队维护，并列出多位贡献者；以官网版权列表和仓库贡献者为准。
- 发展沿革：GitHub Releases 保留 v1/v2 版本线，官网列出 v2.5.0 的文档更新；完整项目史待论文段补充。
- 成熟度与维护状态（综合判断）：成熟、活跃维护的 C++ 几何处理库；近期 release、Doxygen 文档和公开协作入口可确认。

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
| D. 官方源码入口 | [GitHub](https://github.com/libigl/libigl) | 官方源码仓库 | 2026-07-25 | 已核验 | 项目主仓库。 |
| D. 官网 | [libigl.github.io](https://libigl.github.io/) | 官方官网 | 2026-07-25 | 已核验 | 项目、教程与安装入口。 |
| D. 官方文档 | [Tutorial/Documentation](https://libigl.github.io/) | 官方文档 | 2026-07-25 | 已核验 | 教程、Doxygen 和使用说明。 |
| D. 下载/发行页 | [Releases](https://github.com/libigl/libigl/releases) | 官方发行页 | 2026-07-25 | 已核验 | 版本源码包及 clone/CMake 入口。 |
| D. 许可证 | [License](https://libigl.github.io/license/) | 官方官网 | 2026-07-25 | 已核验 | 核心 MPL-2.0；copyleft/第三方模块另有许可。 |
| D. 安装与关键依赖 | [官网安装说明](https://libigl.github.io/) | 官方文档 | 2026-07-25 | 已核验 | header-only + Eigen；可选模块依赖各异。 |
| D. 社区入口 | [Issues](https://github.com/libigl/libigl/issues)；[Discussions](https://github.com/libigl/libigl/discussions) | 官方源码平台 | 2026-07-25 | 已核验 | 公开问题与讨论入口。 |
| D. 插件、适配器与下游生态 | [License/Modules](https://libigl.github.io/license/)；[Example Project](https://libigl.github.io/example-project/) | 官方官网 | 2026-07-25 | 已核验 | Eigen、CGAL/copyleft、MATLAB 与 CMake 示例生态。 |
| D. 维护组织与主要开发者 | [官网](https://libigl.github.io/) | 官方官网 | 2026-07-25 | 已核验 | Alec Jacobson、Daniele Panozzo 领导及贡献者列表可确认。 |
| D. 发展沿革 | [Releases](https://github.com/libigl/libigl/releases) | 官方发行页 | 2026-07-25 | 部分核验 | v1/v2 版本线可追溯。 |
| D. 成熟度与维护状态 | [仓库](https://github.com/libigl/libigl)；[官网](https://libigl.github.io/) | 官方仓库/官网 | 2026-07-25 | 综合判断 | 有近期 release、文档和协作入口，判为成熟、活跃。 |
| 分类归属线索 | 建模 > 几何内核与 CAD 二次开发 | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |

