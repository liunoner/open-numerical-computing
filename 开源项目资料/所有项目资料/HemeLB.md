# HemeLB

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

- 项目名称：HemeLB
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

- 官方源码入口：[hemelb-codes/hemelb](https://github.com/hemelb-codes/hemelb)，组织页明确描述该仓库为复杂几何大规模流动的高性能并行格子 Boltzmann 代码。
- 官网：本轮未发现稳定、可独立核验的官方品牌官网；以 [hemelb-codes GitHub 组织页](https://github.com/hemelb-codes)和主仓库为官方入口。
- 官方文档：主仓库 [README](https://github.com/hemelb-codes/hemelb#readme)与源码内 `documentation`/构建说明为可确认入口；独立在线文档站待人工核验。
- 下载/发行页：[GitHub Releases](https://github.com/hemelb-codes/hemelb/releases)；源码可直接 clone/download。
- 许可证：LGPL-3.0-or-later；GitHub 组织页对主仓库展示 LGPL-3.0，仍以[仓库 LICENSE](https://github.com/hemelb-codes/hemelb/blob/master/LICENSE)为最终依据。
- 安装与关键依赖：按仓库 README/构建文件从源码编译；项目为并行 C++ LBM，具体 MPI、CMake、几何处理等依赖版本需按目标版本人工核验。
- 社区入口（论坛/讨论/Issue/邮件列表）：[GitHub Issues](https://github.com/hemelb-codes/hemelb/issues)和[组织页](https://github.com/hemelb-codes)为公开入口；本轮未发现独立官方论坛或邮件列表。
- 插件、适配器与下游生态：组织下可见 `hemelb-tests`、`HemePure`、`HemePure-GPU`、`hemelb-gpu`、VMTK 构建等关联/派生仓库；须注意其中部分为 fork，并非主项目官方发行分支。
- 维护组织与主要开发者：由 `hemelb-codes` GitHub 组织维护；当前核心团队/机构在本轮尚未由官方 README 完整确认，待人工核验。
- 发展沿革：组织页记录了主仓库及 GPU、HemePure 等派生仓库；精确项目起源与版本沿革待结合论文、tags 与机构页补充。
- 成熟度与维护状态（综合判断）：成熟研究软件、维护状态待人工核验。主仓库及关联组织仓库可访问，组织页显示主仓库在 2025 年仍有更新，但不足以单独断言长期活跃。

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
| D. 官方源码入口 | [hemelb-codes/hemelb](https://github.com/hemelb-codes/hemelb) | 官方组织源码仓库 | 2026-07-25 | 已核验 | 组织页列为高性能并行 LBM 主代码。 |
| D. 官网 | [hemelb-codes 组织页](https://github.com/hemelb-codes) | 官方组织页 | 2026-07-25 | 部分核验 | 未发现可独立确认的品牌官网，以组织页作官方入口。 |
| D. 官方文档 | [仓库 README](https://github.com/hemelb-codes/hemelb#readme) | 官方源码仓库 | 2026-07-25 | 部分核验 | README/源码内构建资料可确认；独立文档站待核验。 |
| D. 下载/发行页 | [Releases](https://github.com/hemelb-codes/hemelb/releases) | 官方源码平台 | 2026-07-25 | 已核验 | release 或直接 clone/download 源码。 |
| D. 许可证 | [LICENSE](https://github.com/hemelb-codes/hemelb/blob/master/LICENSE)；[组织页](https://github.com/hemelb-codes) | 官方仓库/组织页 | 2026-07-25 | 已核验 | 组织页显示主仓库 LGPL-3.0；以 LICENSE 为准。 |
| D. 安装与关键依赖 | [仓库 README](https://github.com/hemelb-codes/hemelb#readme) | 官方源码仓库 | 2026-07-25 | 待人工核验 | 从源码构建；具体 MPI/CMake/依赖版本需按版本复核。 |
| D. 社区入口 | [Issues](https://github.com/hemelb-codes/hemelb/issues)；[组织页](https://github.com/hemelb-codes) | 官方源码平台 | 2026-07-25 | 已核验 | 公开 issue 入口；未发现独立论坛/邮件列表。 |
| D. 插件、适配器与下游生态 | [组织页](https://github.com/hemelb-codes) | 官方组织页 | 2026-07-25 | 已核验 | 可见 hemelb-tests、HemePure、GPU/VMTK 等相关仓库，fork 关系已保留。 |
| D. 维护组织与主要开发者 | [组织页](https://github.com/hemelb-codes) | 官方组织页 | 2026-07-25 | 待人工核验 | `hemelb-codes` 维护；完整核心团队/机构尚未确认。 |
| D. 发展沿革 | [组织页](https://github.com/hemelb-codes)；[Releases](https://github.com/hemelb-codes/hemelb/releases) | 官方组织/发行页 | 2026-07-25 | 部分核验 | 派生关系和可用版本记录可查，完整历史待补。 |
| D. 成熟度与维护状态 | [组织页](https://github.com/hemelb-codes) | 官方组织页 | 2026-07-25 | 综合判断，待人工核验 | 研究软件主仓库及关联代码库均可访问；近期维护程度需后续查提交与发布。 |
| 分类归属线索 | 粒子 > 格子 Boltzmann 法（LBM） | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |

