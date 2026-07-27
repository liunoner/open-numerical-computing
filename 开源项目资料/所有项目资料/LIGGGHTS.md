# LIGGGHTS

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

- 项目名称：LIGGGHTS
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

- 官方源码入口：[CFDEMproject/LIGGGHTS-PUBLIC](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC)，README 明确称为 DCS Computing 的官方 PUBLIC 发行。
- 官网：[CFDEM / LIGGGHTS](https://www.cfdem.com/)。
- 官方文档：仓库内 [Manual](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC/tree/master/doc) 与 README 链接的文档入口。
- 下载/发行页：[GitHub Releases](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC/releases)及仓库 clone/download。
- 许可证：GPL-2.0-or-later；以[仓库 LICENSE](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC/blob/master/LICENSE)为准。
- 安装与关键依赖：沿用 LAMMPS 风格的 C++/MPI 构建路径，具体依赖与 make/CMake 配置以仓库 README/INSTALL 为准。
- 社区入口（论坛/讨论/Issue/邮件列表）：[GitHub Issues](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC/issues)；README 指向 CFDEM 论坛/缺陷报告入口。
- 插件、适配器与下游生态：PUBLIC 版与 CFDEM coupling、OpenFOAM/CFD-DEM 工作流相关；商业替代 Aspherix 与该开源代码需明确区分。
- 维护组织与主要开发者：DCS Computing 维护公开发行；当前维护人以仓库贡献者和 CFDEM 公告为准。
- 发展沿革：README 明示 Aspherix 已替代 LIGGGHTS 的商业产品定位；PUBLIC 源码仓库保留公开版本线。
- 成熟度与维护状态（综合判断）：成熟历史 DEM 代码；公开版本仍可得，但主力商业产品已转向 Aspherix，开源仓库维护状态需人工复核。

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
| D. 官方源码入口 | [GitHub](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC) | 官方源码仓库 | 2026-07-25 | 已核验 | README 明示官方 PUBLIC 发行。 |
| D. 官网 | [CFDEM](https://www.cfdem.com/) | 官方官网 | 2026-07-25 | 已核验 | 项目/支持入口。 |
| D. 官方文档 | [doc 目录](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC/tree/master/doc) | 官方仓库 | 2026-07-25 | 已核验 | 随源码发布的手册资料。 |
| D. 下载/发行页 | [Releases](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC/releases) | 官方发行页 | 2026-07-25 | 已核验 | 发行/源码获取入口。 |
| D. 许可证 | [LICENSE](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC/blob/master/LICENSE) | 官方仓库 | 2026-07-25 | 已核验 | GPL-2.0-or-later。 |
| D. 安装与关键依赖 | [README](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC#readme) | 官方仓库 | 2026-07-25 | 部分核验 | LAMMPS 风格构建；精确依赖待按版本核验。 |
| D. 社区入口 | [Issues](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC/issues)；[CFDEM](https://www.cfdem.com/) | 官方源码平台/官网 | 2026-07-25 | 已核验 | Issues 与官网支持线索。 |
| D. 插件、适配器与下游生态 | [README](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC#readme) | 官方仓库 | 2026-07-25 | 已核验 | CFDEM/OpenFOAM 耦合；Aspherix 需区分。 |
| D. 维护组织与主要开发者 | [README](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC#readme) | 官方仓库 | 2026-07-25 | 已核验 | DCS Computing 公开发行。 |
| D. 发展沿革 | [README](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC#readme) | 官方仓库 | 2026-07-25 | 已核验 | 商业路线已转向 Aspherix。 |
| D. 成熟度与维护状态 | [仓库](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC) | 官方仓库 | 2026-07-25 | 综合判断，待人工核验 | 成熟历史代码，公开仓库的当前维护需复核。 |
| 分类归属线索 | 粒子 > DEM | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |

