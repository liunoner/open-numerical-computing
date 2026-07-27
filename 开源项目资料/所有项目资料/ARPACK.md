# ARPACK

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

- 项目名称：ARPACK
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

- 官方源码入口：[ARPACK-NG 官方 GitHub 仓库](https://github.com/opencollab/arpack-ng)
- 官网：未发现独立官网；以 [ARPACK-NG GitHub 仓库](https://github.com/opencollab/arpack-ng) 为主入口。
- 官方文档：[官方 DOCUMENTS 目录](https://github.com/opencollab/arpack-ng/tree/master/DOCUMENTS) 与 [README](https://github.com/opencollab/arpack-ng)
- 下载/发行页：[GitHub Releases](https://github.com/opencollab/arpack-ng/releases)
- 许可证：BSD-style；以 [官方 COPYING](https://github.com/opencollab/arpack-ng/blob/master/COPYING) 为准，SPDX 名称待人工复核。
- 安装与关键依赖：Autotools/CMake 源码构建；必须依赖 BLAS、LAPACK，MPI、Eigen3、Boost.Python 为按需依赖，见 [README](https://github.com/opencollab/arpack-ng)
- 社区入口（论坛/讨论/Issue/邮件列表）：[GitHub Issues](https://github.com/opencollab/arpack-ng/issues)、Pull Requests；未发现独立官方论坛。
- 插件、适配器与下游生态：包含 PARPACK 并行组件、示例和文档目录；作为 Octave、Scilab、Debian 等共同维护的 ARPACK 发行源。
- 维护组织与主要开发者：ARPACK-NG 社区志愿者；README 说明项目由 Debian、Octave、Scilab 的共同维护诉求发起。
- 发展沿革：ARPACK-NG 用于汇集长期分散的 ARPACK 修改并提供共同维护版本；详见 [README](https://github.com/opencollab/arpack-ng)
- 成熟度与维护状态（综合判断）：综合判断：维护型基础库。公开发行、测试和社区协作持续存在；应按最新标签与提交活动复核。

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
| D. 官方源码入口 | [ARPACK-NG GitHub](https://github.com/opencollab/arpack-ng) | 官方仓库 | 2026-07-25 | 已核验 | 公开主仓库可访问。 |
| D. 官网 | [GitHub 仓库](https://github.com/opencollab/arpack-ng) | 官方仓库 | 2026-07-25 | 已核验 | 未发现独立官网。 |
| D. 官方文档 | [DOCUMENTS](https://github.com/opencollab/arpack-ng/tree/master/DOCUMENTS) | 官方仓库 | 2026-07-25 | 已核验 | 仓库 README 指明计算模式文档所在位置。 |
| D. 下载/发行页 | [GitHub Releases](https://github.com/opencollab/arpack-ng/releases) | 官方发行页 | 2026-07-25 | 已核验 | 官方发布入口。 |
| D. 许可证 | [COPYING](https://github.com/opencollab/arpack-ng/blob/master/COPYING) | 官方仓库 | 2026-07-25 | 待人工核验 | BSD-style 结论需按 COPYING 的精确文本复核。 |
| D. 安装与依赖 | [README](https://github.com/opencollab/arpack-ng) | 官方仓库 | 2026-07-25 | 已核验 | 列出 BLAS、LAPACK 及可选依赖。 |
| D. 社区入口 | [GitHub Issues](https://github.com/opencollab/arpack-ng/issues) | 官方社区 | 2026-07-25 | 已核验 | Issues/PR 是公开协作渠道。 |
| D. 生态 | [README](https://github.com/opencollab/arpack-ng) | 官方仓库 | 2026-07-25 | 已核验 | 确认 PARPACK、示例及共同维护来源。 |
| D. 维护组织 | [README](https://github.com/opencollab/arpack-ng) | 官方仓库 | 2026-07-25 | 已核验 | 项目说明为志愿者社区维护。 |
| D. 发展沿革 | [README](https://github.com/opencollab/arpack-ng) | 官方仓库 | 2026-07-25 | 已核验 | 记录从 ARPACK 分支整合而来的背景。 |
| D. 成熟度与维护状态 | [GitHub Releases](https://github.com/opencollab/arpack-ng/releases) | 官方发行页 | 2026-07-25 | 待人工核验 | 基于公开发行和协作入口的保守判断。 |
| 分类归属线索 | 高性能 > 特征值与模态分析求解器 | 调研目录 | 2026-07-25 | 待人工核验 | 仅作搜索起点，不可替代项目级技术核验。 |
