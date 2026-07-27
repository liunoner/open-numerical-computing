# Gerris

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

- 项目名称：Gerris
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

- 官方源码入口：[Gerris SourceForge 文件库](https://sourceforge.net/projects/gfs/files/gerris/)；旧官网 `gfs.sourceforge.net`/`gerris.dalembert.upmc.fr` 可作为历史资料线索。
- 官网：历史官网已不宜作为唯一可靠入口；以 SourceForge 项目页、源码包和归档文档为准。
- 官方文档：[SourceForge Wiki](https://sourceforge.net/p/gfs/wiki/Home/)；发行包内含 tutorial/INSTALL 文档。
- 下载/发行页：[SourceForge Files](https://sourceforge.net/projects/gfs/files/gerris/)；可下载 0.9.2（2009）及旧版源码包。
- 许可证：GNU GPL v2 或更高版本，见发行包 COPYING/README；精确文本在使用前应从下载源码包复核。
- 安装与关键依赖：历史 README 给出 Unix/Cygwin 的 `./configure && make && make install`；老旧 autotools/依赖兼容性需人工测试。
- 社区入口：SourceForge 的 Wiki、Support、Mailing Lists、CVS 页面；未发现仍活跃的官方论坛。
- 插件、适配器与下游生态：Gerris 本身含自适应多相流模块；Basilisk 是作者后续开发的独立框架，不能视为 Gerris 直接插件。
- 维护组织与主要开发者：历史 SourceForge 管理者为 Stéphane Popinet；未发现现行维护组织。
- 发展沿革：项目从早期 0.x 到 0.9.2；SourceForge 显示 0.9.2 发布于 2009-07-17。
- 成熟度与维护状态（综合判断）：综合判断：历史成熟软件、现已停止常规维护。源码仍可下载，但应优先评估后继框架与环境兼容性。

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
| D. 官方源码入口 | [SourceForge Files](https://sourceforge.net/projects/gfs/files/gerris/) | 官方历史发行页 | 2026-07-25 | 已核验 | 可下载源码包。 |
| D. 官网 | [SourceForge 项目页](https://sourceforge.net/projects/gfs/) | 官方历史项目页 | 2026-07-25 | 已核验 | 原官网已老旧，使用此入口替代。 |
| D. 官方文档 | [SourceForge Wiki](https://sourceforge.net/p/gfs/wiki/Home/) | 官方历史文档 | 2026-07-25 | 已核验 | 提供项目简介与讨论。 |
| D. 下载/发行页 | [gerris files](https://sourceforge.net/projects/gfs/files/gerris/) | 官方历史发行页 | 2026-07-25 | 已核验 | 0.9.2 及历史版本可得。 |
| D. 许可证 | [README/COPYING 线索](https://sources.debian.org/src/gerris/20131206%2Bdfsg-18/README) | 补充来源 | 2026-07-25 | 待人工核验 | 说明 GPL；最终以发行包 COPYING 为准。 |
| D. 安装与依赖 | [README](https://sources.debian.org/src/gerris/20131206%2Bdfsg-18/README) | 补充来源 | 2026-07-25 | 已核验 | 历史 autotools 安装命令。 |
| D. 社区入口 | [SourceForge Wiki](https://sourceforge.net/p/gfs/wiki/Home/) | 官方历史社区 | 2026-07-25 | 已核验 | 项目页保留 Support/Mailing Lists。 |
| D. 生态 | [Gerris Wiki](https://sourceforge.net/p/gfs/wiki/Home/) | 官方历史文档 | 2026-07-25 | 已核验 | 只记录其自身模块，Basilisk 另建档。 |
| D. 维护组织 | [项目成员](https://sourceforge.net/p/gfs/wiki/Home/) | 官方历史项目页 | 2026-07-25 | 已核验 | 标注 Stéphane Popinet 等历史成员。 |
| D. 发展沿革 | [Files 时间线](https://sourceforge.net/projects/gfs/files/gerris/) | 官方历史发行页 | 2026-07-25 | 已核验 | 最新列出版本为 0.9.2（2009）。 |
| D. 成熟度与维护状态 | [SourceForge Files](https://sourceforge.net/projects/gfs/files/gerris/) | 官方历史发行页 | 2026-07-25 | 已核验 | 基于最后发行日期的综合停更判断。 |
| 分类归属线索 | 相场 > 前沿追踪与显式界面方法 | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |

