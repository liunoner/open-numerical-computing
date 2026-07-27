# 开源项目资料库

本文件夹用于存放每个开源数值仿真项目的独立资料文件。

- 初始化项目数：180
- 项目范围：《开源数值仿真项目调研目录》的项目总索引及索引补全表去重结果。
- 内容模板：《开源项目内容检索规范.md》中的“单项目完整采集模板”。
- 初始化规则：每份项目文件已写入项目名称、调研目录中的源码线索和分类归属；其余字段均须通过后续项目级检索核验。
- 合并项目：沿用调研目录的合并写法，并作为一份资料文件维护。

## 文件索引

| 序号 | 项目 | 初始化文件 | 源码线索 | 分类归属线索 |
| --- | --- | --- | --- | --- |
| 1 | ADIOS2 | [ADIOS2.md](./ADIOS2.md) | [源码](https://github.com/ornladios/ADIOS2) | 高性能 > 并行 I/O |
| 2 | Akantu | [Akantu.md](./Akantu.md) | [源码](https://gitlab.com/akantu/akantu) | 相场 > 断裂/损伤/CZM/接触；近场 > 非局部本构/界面 |
| 3 | AMGCL | [AMGCL.md](./AMGCL.md) | [源码](https://github.com/ddemidov/amgcl) | 高性能 > Krylov 迭代求解器；高性能 > 预条件技术；高性能 > 多重网格方法 |
| 4 | AMReX | [AMReX.md](./AMReX.md) | [源码](https://github.com/AMReX-Codes/amrex) | 离散 > FVM；离散 > FDM；高性能 > 自适应网格与负载均衡 |
| 5 | ApproxFun.jl | [ApproxFun.jl.md](./ApproxFun.jl.md) | [源码](https://github.com/JuliaApproximation/ApproxFun.jl) | 粒子 > 径向基函数方法 |
| 6 | ARPACK | [ARPACK.md](./ARPACK.md) | [源码](https://github.com/opencollab/arpack-ng) | 高性能 > 特征值与模态分析求解器 |
| 7 | Basilisk | [Basilisk.md](./Basilisk.md) | [源码](https://basilisk.fr/src/) | 离散 > FVM；相场 > 相场流体；相场 > Level Set；相场 > VOF；相场 > 前沿追踪 |
| 8 | BEM++ | [BEM++.md](./BEM++.md) | [源码](https://github.com/bempp/bempp-legacy) | 离散 > 边界元法 |
| 9 | Bempp-cl | [Bempp-cl.md](./Bempp-cl.md) | [源码](https://github.com/bempp/bempp-cl) | 离散 > BEM |
| 10 | BRL-CAD | [BRL-CAD.md](./BRL-CAD.md) | [源码](https://github.com/BRL-CAD/brlcad) | 建模 > CAD 与实体几何建模 |
| 11 | CadQuery | [CadQuery.md](./CadQuery.md) | [源码](https://github.com/CadQuery/cadquery) | 建模 > 参数化与脚本化几何建模 |
| 12 | CalculiX | [CalculiX.md](./CalculiX.md) | [源码](https://github.com/Dhondtguido/CalculiX) | 相场 > 接触与摩擦计算；后处理 > 有限元与结构结果后处理 |
| 13 | Cantera | [Cantera.md](./Cantera.md) | [源码](https://github.com/Cantera/cantera) | 多物理 > 化学—热—力耦合（反应动力学/热力学/输运基础库）；其他（待分类：化学物性基础设施） |
| 14 | CB-Geo MPM | [CB-Geo MPM.md](./CB-Geo MPM.md) | [源码](https://github.com/cb-geo/mpm) | 粒子 > MPM |
| 15 | CGAL | [CGAL.md](./CGAL.md) | [源码](https://github.com/CGAL/cgal) | 建模 > 几何内核与 CAD 二次开发；网格 > 曲面网格与几何离散化 |
| 16 | Clawpack | [Clawpack.md](./Clawpack.md) | [源码](https://github.com/clawpack/clawpack) | 离散 > FDM |
| 17 | Code_Aster | [Code_Aster.md](./Code_Aster.md) | [源码](https://gitlab.com/codeaster/src) | 相场 > 连续损伤力学；相场 > 内聚区模型；多物理 > 热—结构耦合 |
| 18 | Code_Saturne | [Code_Saturne.md](./Code_Saturne.md) | [源码](https://github.com/code-saturne/code_saturne) | 离散 > FVM |
| 19 | CompuCell3D | [CompuCell3D.md](./CompuCell3D.md) | [源码](https://github.com/CompuCell3D/CompuCell3D) | 粒子 > 元胞自动机与离散格子模型 |
| 20 | CWIPI | [CWIPI.md](./CWIPI.md) | [源码](https://gitlab.com/cea-hpc/cwipi) | 多物理 > 协同仿真与求解器耦合 |
| 21 | DAMASK | [DAMASK.md](./DAMASK.md) | [源码](https://github.com/damask-multiphysics/DAMASK) | 建模 > 材料与本构模型开发；多物理 > 均匀化与代表体元；多物理 > 微观结构—性能耦合 |
| 22 | deal.II | [deal.II.md](./deal.II.md) | [源码](https://github.com/dealii/dealii) | 离散 > 连续 Galerkin FEM；离散 > 高阶与 hp FEM；离散 > DG；高性能 > 矩阵自由与算子融合 |
| 23 | Dedalus | [Dedalus.md](./Dedalus.md) | [源码](https://github.com/DedalusProject/dedalus) | 离散 > FDM；离散 > 谱方法与谱元法 |
| 24 | Devito | [Devito.md](./Devito.md) | [源码](https://github.com/devitocodes/devito) | 离散 > FDM |
| 25 | DifferentialEquations.jl | [DifferentialEquations.jl.md](./DifferentialEquations.jl.md) | [源码](https://github.com/SciML/DifferentialEquations.jl) | 高性能 > 常微分与偏微分时间积分 |
| 26 | DualSPHysics | [DualSPHysics.md](./DualSPHysics.md) | [源码](https://github.com/DualSPHysics/DualSPHysics) | 粒子 > SPH |
| 27 | DuMuX | [DuMuX.md](./DuMuX.md) | [源码](https://github.com/dumux/dumux) | 离散 > 有限体积法（FVM）；多物理 > 多尺度流动与传输/化学—热—力耦合；地下多孔介质 → 领域框架 |
| 28 | DUNE | [DUNE.md](./DUNE.md) | [源码](https://gitlab.dune-project.org/core/dune-common) | 离散 > 连续 Galerkin FEM；离散 > 混合有限元与兼容离散 |
| 29 | Elmer | [Elmer.md](./Elmer.md) | [源码](https://github.com/ElmerCSC/elmerfem) | 多物理 > 热结构/电磁热结构/声学振动 |
| 30 | ESPResSo | [ESPResSo.md](./ESPResSo.md) | [源码](https://github.com/espressomd/espresso) | 粒子 > DPD |
| 31 | F3D | [F3D.md](./F3D.md) | [源码](https://github.com/f3d-app/f3d) | 后处理 > 网格与几何查看；后处理 > Web 与远程可视化 |
| 32 | FBPIC | [FBPIC.md](./FBPIC.md) | [源码](https://github.com/fbpic/fbpic) | 粒子 > 粒子—网格法（PIC） |
| 33 | FdeSolver.jl | [FdeSolver.jl.md](./FdeSolver.jl.md) | [源码](https://github.com/SciFracX/FdeSolver.jl) | 近场 > 分数阶 PDE 与分数阶本构 |
| 34 | FEAScript | [FEAScript.md](./FEAScript.md) | [源码](https://github.com/FEAScript/FEAScript-core) | 离散 > 连续 Galerkin FEM；浏览器/教学 → FEM 开发库 |
| 35 | FEAT3 | [FEAT3.md](./FEAT3.md) | [源码](https://github.com/tudo-math-ls3/feat3) | 离散 > 高阶与 hp 有限元法 |
| 36 | FEBio | [FEBio.md](./FEBio.md) | [源码](https://github.com/febiosoftware/FEBio) | 建模 > 材料与本构模型开发；离散 > 连续 Galerkin FEM；相场 > 接触与摩擦计算；医学/生物力学 → 非线性 FEM 求解器 |
| 37 | Feel++ | [Feel++.md](./Feel++.md) | [源码](https://github.com/feelpp/feelpp) | 多物理 > FE² 与计算均匀化 |
| 38 | FEMaster | [FEMaster.md](./FEMaster.md) | [源码](https://github.com/Luecx/FEMaster) | 离散 > 连续 Galerkin FEM；结构分析 → 教学/研究求解器 |
| 39 | FEniCSx | [FEniCSx.md](./FEniCSx.md) | [源码](https://github.com/FEniCS/dolfinx) | 离散 > 连续 Galerkin FEM；离散 > 混合有限元与兼容离散；相场 > 相场断裂；多物理 > 均匀化与代表体元；多物理 > 化学—热—力耦合 |
| 40 | FiPy | [FiPy.md](./FiPy.md) | [源码](https://github.com/usnistgov/fipy) | 离散 > FVM；相场 > 微观组织演化；相场 > 相场流体 |
| 41 | Firedrake | [Firedrake.md](./Firedrake.md) | [源码](https://github.com/firedrakeproject/firedrake) | 离散 > 连续 Galerkin FEM；离散 > 混合有限元与兼容离散 |
| 42 | FLEXI | [FLEXI.md](./FLEXI.md) | [源码](https://github.com/flexi-framework/flexi) | 离散 > 不连续 Galerkin 法 |
| 43 | FractionalDiffEq.jl | [FractionalDiffEq.jl.md](./FractionalDiffEq.jl.md) | [源码](https://github.com/SciFracX/FractionalDiffEq.jl) | 近场 > 分数阶 PDE 与分数阶本构 |
| 44 | FreeCAD | [FreeCAD.md](./FreeCAD.md) | [源码](https://github.com/FreeCAD/FreeCAD) | 建模 > CAD 与实体几何建模；建模 > 参数化与脚本化几何建模；建模 > CAE 前处理与模型装配；后处理 > 网格与几何查看 |
| 45 | FreeFEM | [FreeFEM.md](./FreeFEM.md) | [源码](https://github.com/FreeFem/FreeFem-sources) | 离散 > 连续 Galerkin FEM |
| 46 | G+Smo | [G+Smo.md](./G+Smo.md) | [源码](https://github.com/gismo/gismo) | 离散 > IGA |
| 47 | GATE | [GATE.md](./GATE.md) | [源码](https://github.com/OpenGATE/opengate) | 其他（待分类）；医学物理 × 领域框架 × 蒙特卡洛成像/剂量学 |
| 48 | Geant4 | [Geant4.md](./Geant4.md) | [源码](https://github.com/Geant4/geant4) | 其他（待分类）；高能/医学物理 × 开发框架 × 蒙特卡洛粒子输运 |
| 49 | GeoPDEs | [GeoPDEs.md](./GeoPDEs.md) | [源码](https://github.com/rafavzqz/GeoPDEs) | 离散 > 等几何分析 |
| 50 | Gerris | [Gerris.md](./Gerris.md) | [源码/下载](http://gerris.dalembert.upmc.fr/) | 相场 > 前沿追踪与显式界面方法 |
| 51 | GetFEM | [GetFEM.md](./GetFEM.md) | [下载源码](https://getfem.org/download.html) | 离散 > 连续 Galerkin FEM；相场 > XFEM/GFEM |
| 52 | Ginkgo | [Ginkgo.md](./Ginkgo.md) | [源码](https://github.com/ginkgo-project/ginkgo) | 高性能 > Krylov 迭代；高性能 > GPU |
| 53 | Gmsh | [Gmsh.md](./Gmsh.md) | [源码](https://gitlab.onelab.info/gmsh/gmsh) | 建模 > CAE 前处理与模型装配；网格 > 通用非结构网格生成；网格 > 六面体与高质量体网格；网格 > 网格格式转换与数据读写；后处理 > 网格与几何查看 |
| 54 | Goma | [Goma.md](./Goma.md) | [源码](https://github.com/goma/goma) | 离散 > 连续 Galerkin FEM；多物理 > 化学—热—力耦合；高性能 > MPI 与分布式内存并行；自由边界多物理场 → 完整求解器 |
| 55 | GPUSPH | [GPUSPH.md](./GPUSPH.md) | [源码](https://github.com/GPUSPH/gpusph) | 粒子 > SPH |
| 56 | Gridap / GridapEmbedded | [Gridap ＋ GridapEmbedded.md](./Gridap ＋ GridapEmbedded.md) | [Gridap](https://github.com/gridap/Gridap.jl) / [Embedded](https://github.com/gridap/GridapEmbedded.jl) | 离散 > 嵌入式网格；相场 > CutFEM 与浸入式方法 |
| 57 | GROMACS | [GROMACS.md](./GROMACS.md) | [源码](https://github.com/gromacs/gromacs) | 粒子 > MD |
| 58 | h5py | [h5py.md](./h5py.md) | [源码](https://github.com/h5py/h5py) | 后处理 > 科学数据格式读写与转换 |
| 59 | HDF5 | [HDF5.md](./HDF5.md) | [源码](https://github.com/HDFGroup/hdf5) | 高性能 > 并行 I/O 与大规模数据处理 |
| 60 | HemeLB | [HemeLB.md](./HemeLB.md) | [源码](https://github.com/hemelb-codes/hemelb) | 粒子 > 格子 Boltzmann 法（LBM） |
| 61 | Hermes | [Hermes.md](./Hermes.md) | [源码](https://github.com/hpfem/hermes) | 离散 > 高阶与 hp 有限元法 |
| 62 | HOOMD-blue | [HOOMD-blue.md](./HOOMD-blue.md) | [源码](https://github.com/glotzerlab/hoomd-blue) | 粒子 > 分子动力学；粒子 > 耗散粒子动力学与介观粒子法 |
| 63 | HPDDM | [HPDDM.md](./HPDDM.md) | [源码](https://github.com/hpddm/hpddm) | 高性能 > 域分解方法 |
| 64 | hypre | [hypre.md](./hypre.md) | [源码](https://github.com/hypre-space/hypre) | 高性能 > 预条件；高性能 > 多重网格 |
| 65 | igatools | [igatools.md](./igatools.md) | [源码](https://github.com/igatoolsProject/igatools) | 离散 > 等几何分析 |
| 66 | Kokkos / RAJA | [Kokkos ＋ RAJA.md](./Kokkos ＋ RAJA.md) | [Kokkos](https://github.com/kokkos/kokkos) / [RAJA](https://github.com/LLNL/RAJA) | 高性能 > GPU 与异构加速；高性能 > 性能可移植 |
| 67 | Kratos | [Kratos.md](./Kratos.md) | [源码](https://github.com/KratosMultiphysics/Kratos) | 网格 > 动网格；相场 > 损伤/接触；多物理 > FSI/热结构；高性能 > 并行与求解器 |
| 68 | LAMMPS | [LAMMPS.md](./LAMMPS.md) | [源码](https://github.com/lammps/lammps) | 粒子 > DEM；粒子 > MD；粒子 > DPD；多物理 > 原子—连续体耦合 |
| 69 | libCEED | [libCEED.md](./libCEED.md) | [源码](https://github.com/CEED/libCEED) | 高性能 > GPU；高性能 > 矩阵自由 |
| 70 | libigl | [libigl.md](./libigl.md) | [源码](https://github.com/libigl/libigl) | 建模 > 几何内核与 CAD 二次开发 |
| 71 | LIGGGHTS | [LIGGGHTS.md](./LIGGGHTS.md) | [源码](https://github.com/CFDEMproject/LIGGGHTS-PUBLIC) | 粒子 > DEM |
| 72 | Matplotlib | [Matplotlib.md](./Matplotlib.md) | [源码](https://github.com/matplotlib/matplotlib) | 后处理 > 科学绘图与曲线分析 |
| 73 | Mayavi | [Mayavi.md](./Mayavi.md) | [源码](https://github.com/enthought/mayavi) | 后处理 > 体渲染、切片与等值面 |
| 74 | Medusa | [Medusa.md](./Medusa.md) | [源码](https://github.com/iamkundan/Medusa) | 粒子 > 径向基函数方法 |
| 75 | Meep | [Meep.md](./Meep.md) | [源码](https://github.com/NanoComp/meep) | 离散 > 有限差分法（FDM）；电磁/光子学 → FDTD 求解器 |
| 76 | MercuryDPM | [MercuryDPM.md](./MercuryDPM.md) | [源码](https://github.com/mercurydpm/mercurydpm) | 粒子 > DEM |
| 77 | MeshFix | [MeshFix.md](./MeshFix.md) | [源码](https://github.com/MarcoAttene/MeshFix-V2.1) | 网格 > 网格质量检测、修复与优化 |
| 78 | meshio | [meshio.md](./meshio.md) | [源码](https://github.com/nschloe/meshio) | 建模 > 几何与模型格式互操作；网格 > 网格格式转换与数据读写；后处理 > 脚本化后处理与批量出图；后处理 > 科学数据格式读写与转换 |
| 79 | MeshLab | [MeshLab.md](./MeshLab.md) | [源码](https://github.com/cnr-isti-vclab/meshlab) | 网格 > 曲面网格与几何离散化；网格 > 网格质量检测、修复与优化；后处理 > 网格与几何查看 |
| 80 | METIS / ParMETIS | [METIS ＋ ParMETIS.md](./METIS ＋ ParMETIS.md) | [源码](https://github.com/KarypisLab/ParMETIS) | 网格 > 网格分区与负载划分；高性能 > 自适应网格与负载均衡 |
| 81 | MFEM | [MFEM.md](./MFEM.md) | [源码](https://github.com/mfem/mfem) | 离散 > 连续 Galerkin FEM；离散 > 混合有限元；离散 > 高阶与 hp FEM；离散 > DG；离散 > IGA；离散 > 嵌入式网格；高性能 > 时间积分；高性能 > 预条件；高性能 > 多重网格；高性能 > GPU；高性能 > 矩阵自由 |
| 82 | MMG | [MMG.md](./MMG.md) | [源码](https://github.com/MmgTools/mmg) | 网格 > 网格质量检测、修复与优化；网格 > 网格自适应与重网格；网格 > 动网格与网格变形 |
| 83 | MoFEM | [MoFEM.md](./MoFEM.md) | [源码](https://github.com/MoFEM/MoFEM) | 相场 > 扩展有限元法（XFEM/GFEM） |
| 84 | MOOSE | [MOOSE.md](./MOOSE.md) | [源码](https://github.com/idaholab/moose) | 相场 > 相场断裂/微观组织/相场流体/CZM；近场 > FEM 耦合；多物理 > 均匀化/FE²/热结构/电磁热结构/化学热力；高性能 > 相关求解策略 |
| 85 | Morpheus | [Morpheus.md](./Morpheus.md) | [源码](https://gitlab.com/morpheus.lab/morpheus) | 粒子 > 元胞自动机与离散格子模型 |
| 86 | MPICH | [MPICH.md](./MPICH.md) | [源码](https://github.com/pmodels/mpich) | 高性能 > MPI 与分布式内存并行 |
| 87 | MUI | [MUI.md](./MUI.md) | [源码](https://github.com/MxUI/MUI) | 多物理 > 协同仿真与求解器耦合 |
| 88 | MUMPS | [MUMPS.md](./MUMPS.md) | [下载源码](https://mumps-solver.org/index.php?page=dwnld) | 高性能 > 稀疏直接求解器 |
| 89 | MuPIF | [MuPIF.md](./MuPIF.md) | [源码](https://github.com/mupif/mupif) | 多物理 > FE² 与计算均匀化；多物理 > 协同仿真与求解器耦合 |
| 90 | Nek5000 / NekRS | [Nek5000 ＋ NekRS.md](./Nek5000 ＋ NekRS.md) | [Nek5000](https://github.com/Nek5000/Nek5000) / [NekRS](https://github.com/Nek5000/nekRS) | 离散 > 谱方法与谱元法；高性能 > GPU；高性能 > 矩阵自由 |
| 91 | Nektar++ | [Nektar++.md](./Nektar++.md) | [源码](https://github.com/Nektar++/Nektar) | 离散 > DG；离散 > 谱方法与谱元法 |
| 92 | NEML | [NEML.md](./NEML.md) | [源码](https://github.com/Argonne-National-Laboratory/neml) | 建模 > 材料与本构模型开发 |
| 93 | Netgen | [Netgen.md](./Netgen.md) | [源码](https://github.com/NGSolve/netgen) | 网格 > 通用非结构网格生成；网格 > 六面体与高质量体网格 |
| 94 | NGSolve | [NGSolve.md](./NGSolve.md) | [源码](https://github.com/NGSolve/ngsolve) | 离散 > 连续 Galerkin FEM；离散 > 混合有限元；离散 > 高阶与 hp FEM；离散 > 嵌入式网格 |
| 95 | NLMech | [NLMech.md](./NLMech.md) | [源码](https://github.com/nonlocalmodels/NLMech) | 粒子 > 无网格 Galerkin 方法；近场 > 近场断裂与损伤模型；近场 > 非局部积分型 PDE；近场 > 非局部本构与梯度增强模型 |
| 96 | OBMeshfree | [OBMeshfree.md](./OBMeshfree.md) | [源码](https://github.com/NonlocalModels/OBMeshfree) | 近场 > 非局部积分型 PDE |
| 97 | OCCA | [OCCA.md](./OCCA.md) | [源码](https://github.com/libocca/occa) | 高性能 > 性能可移植与硬件抽象 |
| 98 | OCCT | [OCCT.md](./OCCT.md) | [源码](https://github.com/Open-Cascade-SAS/OCCT) | 建模 > 几何内核与 CAD 二次开发；建模 > 几何与模型格式互操作 |
| 99 | OOFEM | [OOFEM.md](./OOFEM.md) | [源码](https://github.com/oofem/oofem) | 相场 > 扩展有限元法（XFEM/GFEM） |
| 100 | openCFS | [openCFS.md](./openCFS.md) | [源码](https://gitlab.com/openCFS/cfs) | 离散 > 连续 Galerkin FEM；多物理 > 电磁—热—结构耦合/声学与振动耦合；高性能 > MPI 与分布式内存并行；多物理场 → 领域框架 |
| 101 | openEMS | [openEMS.md](./openEMS.md) | [源码](https://github.com/thliebig/openEMS) | 离散 > 有限差分法（FDM）；电磁/射频 → FDTD 求解器 |
| 102 | OpenFAST | [OpenFAST.md](./OpenFAST.md) | [源码](https://github.com/OpenFAST/openfast) | 多物理 > 流固耦合（FSI）；多物理 > 协同仿真与求解器耦合；其他（待分类：系统级耦合、风机多体与控制） |
| 103 | OpenFOAM | [OpenFOAM.md](./OpenFOAM.md) | [源码](https://github.com/OpenFOAM/OpenFOAM-dev) | 网格 > 结构化与块结构网格；网格 > 边界层与流体专用网格；网格 > 动网格与网格变形；离散 > FVM；相场 > 两相流/VOF/Level Set；多物理 > 多尺度流动；多物理 > FSI；多物理 > 化学—热—力；后处理 > 流场与传热 |
| 104 | OpenFPM | [OpenFPM.md](./OpenFPM.md) | [源码](https://github.com/mosaic-group/openfpm_pdata) | 粒子 > 无网格 Galerkin 方法 |
| 105 | OpenGeoSys | [OpenGeoSys.md](./OpenGeoSys.md) | [源码](https://gitlab.opengeosys.org/ogs/ogs) | 离散 > 连续 Galerkin FEM；相场 > 相场断裂；多物理 > 多尺度流动与传输/化学—热—力耦合；地学/地下工程 → THMC 求解器 |
| 106 | OpenKIM | [OpenKIM.md](./OpenKIM.md) | [源码](https://github.com/openkim/openkim-repository) | 多物理 > 原子—连续体耦合 |
| 107 | OpenLB | [OpenLB.md](./OpenLB.md) | [源码](https://github.com/openLB/openLB) | 粒子 > LBM；粒子 > 元胞自动机与离散格子模型 |
| 108 | OpenMC | [OpenMC.md](./OpenMC.md) | [源码](https://github.com/openmc-dev/openmc) | 其他（待分类）；核工程 × 完整求解器 × 蒙特卡洛中子/光子输运 |
| 109 | OpenMM | [OpenMM.md](./OpenMM.md) | [源码](https://github.com/openmm/openmm) | 粒子 > MD |
| 110 | OpenModelica | [OpenModelica.md](./OpenModelica.md) | [源码](https://github.com/OpenModelica/OpenModelica) | 多物理 > 协同仿真与求解器耦合；其他（待分类：系统建模语言与运行时） |
| 111 | OpenMPI | [OpenMPI.md](./OpenMPI.md) | [源码](https://github.com/open-mpi/ompi) | 高性能 > MPI 与分布式内存并行 |
| 112 | OpenPhase | [OpenPhase.md](./OpenPhase.md) | [源码/下载](https://openphase.rub.de/) | 相场 > 相场微观组织演化；多物理 > 微观结构—性能耦合 |
| 113 | OpenSCAD | [OpenSCAD.md](./OpenSCAD.md) | [源码](https://github.com/openscad/openscad) | 建模 > 参数化与脚本化几何建模 |
| 114 | OpenSees | [OpenSees.md](./OpenSees.md) | [源码](https://github.com/OpenSees/OpenSees) | 离散 > 连续 Galerkin FEM；多物理 > 声学与振动耦合；结构/岩土/地震 → 领域完整求解器 |
| 115 | OpenSim | [OpenSim.md](./OpenSim.md) | [源码](https://github.com/opensim-org/opensim-core) | 其他（待分类）；医学/生物力学 × 完整求解器 × 多体动力学 |
| 116 | OVITO | [OVITO.md](./OVITO.md) | [源码](https://github.com/ovito-org/ovito) | 后处理 > 粒子与离散体系可视化 |
| 117 | p4est | [p4est.md](./p4est.md) | [源码](https://github.com/p4est/p4est) | 网格 > 网格自适应与重网格；高性能 > 自适应网格与负载均衡 |
| 118 | Palabos | [Palabos.md](./Palabos.md) | [源码](https://gitlab.com/unigehpfs/palabos) | 粒子 > LBM |
| 119 | Palace | [Palace.md](./Palace.md) | [源码](https://github.com/awslabs/palace) | 多物理 > 电磁热结构；多物理 > 声学与振动 |
| 120 | pandas | [pandas.md](./pandas.md) | [源码](https://github.com/pandas-dev/pandas) | 后处理 > 结果比较与数据分析 |
| 121 | ParaView | [ParaView.md](./ParaView.md) | [源码](https://gitlab.kitware.com/paraview/paraview) | 后处理 > 通用/结构/流热/体渲染/脚本化/Web远程 |
| 122 | ParaView Glance | [ParaView Glance.md](./ParaView Glance.md) | [源码](https://github.com/Kitware/glance) | 后处理 > Web 与远程可视化 |
| 123 | ParMmg | [ParMmg.md](./ParMmg.md) | [源码](https://github.com/MmgTools/ParMmg) | 网格 > 网格自适应与重网格；高性能 > 自适应网格与负载均衡 |
| 124 | PaStiX | [PaStiX.md](./PaStiX.md) | [源码](https://gitlab.inria.fr/solverstack/pastix) | 高性能 > 稀疏直接求解器 |
| 125 | Peridigm | [Peridigm.md](./Peridigm.md) | [源码](https://github.com/peridigm/peridigm) | 近场 > 键基/状态基/对应型/断裂/耦合/界面 |
| 126 | PeriHPX | [PeriHPX.md](./PeriHPX.md) | [源码](https://github.com/PeriHPX/PeriHPX) | 近场 > 状态基/断裂/积分型 PDE/梯度增强 |
| 127 | PeriLab.jl | [PeriLab.jl.md](./PeriLab.jl.md) | [源码](https://github.com/PeriHub/PeriLab.jl) | 近场 > 键基/状态基/对应型/非局部本构/界面 |
| 128 | PetIGA | [PetIGA.md](./PetIGA.md) | [源码](https://github.com/dalcinl/PetIGA) | 离散 > IGA |
| 129 | PETSc | [PETSc.md](./PETSc.md) | [源码](https://gitlab.com/petsc/petsc) | 高性能 > Krylov/非线性/时间积分/预条件/域分解/MPI |
| 130 | PFLOTRAN | [PFLOTRAN.md](./PFLOTRAN.md) | [源码](https://github.com/pflotran/pflotran) | 离散 > 有限体积法（FVM）；多物理 > 多尺度流动与传输/化学—热—力耦合；高性能 > MPI 与分布式内存并行；地下反应输运 → 完整求解器 |
| 131 | PIConGPU | [PIConGPU.md](./PIConGPU.md) | [源码](https://github.com/ComputationalRadiationPhysics/picongpu) | 粒子 > PIC |
| 132 | PorePy | [PorePy.md](./PorePy.md) | [源码](https://github.com/pmgbergen/porepy) | 多物理 > 多尺度流动与传输 |
| 133 | preCICE | [preCICE.md](./preCICE.md) | [源码](https://github.com/precice/precice) | 多物理 > FSI；多物理 > 协同仿真与求解器耦合 |
| 134 | PrePoMax | [PrePoMax.md](./PrePoMax.md) | [源码](https://github.com/prepomax/PrePoMax) | 建模 > CAE 前处理与模型装配；建模 > 边界条件与初始条件构建 |
| 135 | PRISMS-PF | [PRISMS-PF.md](./PRISMS-PF.md) | [源码](https://github.com/prisms-center/phaseField) | 相场 > 相场断裂；相场 > 相场微观组织演化 |
| 136 | Project Chrono | [Project Chrono.md](./Project Chrono.md) | [源码](https://github.com/projectchrono/chrono) | 粒子 > DEM；相场 > 接触与摩擦 |
| 137 | PyFR | [PyFR.md](./PyFR.md) | [源码](https://github.com/PyFR/PyFR) | 离散 > DG |
| 138 | pyNastran | [pyNastran.md](./pyNastran.md) | [源码](https://github.com/SteveDoyle2/pyNastran) | 建模 > 几何与模型格式互操作；后处理 > 有限元与结构结果后处理 |
| 139 | PySPH | [PySPH.md](./PySPH.md) | [源码](https://github.com/pysph/pysph) | 粒子 > SPH |
| 140 | PyVista | [PyVista.md](./PyVista.md) | [源码](https://github.com/pyvista/pyvista) | 后处理 > 通用/流热/脚本化/结果比较 |
| 141 | RBF-FD-Python | [RBF-FD-Python.md](./RBF-FD-Python.md) | [源码](https://github.com/IgorTo/rbf-fd) | 粒子 > 径向基函数方法 |
| 142 | REEF3D | [REEF3D.md](./REEF3D.md) | [源码](https://github.com/REEF3D/REEF3D) | 相场 > 水平集法；相场 > 体积分数法（VOF） |
| 143 | SALOME | [SALOME.md](./SALOME.md) | [源码](https://github.com/orgs/SalomePlatform/repositories) | 建模 > CAE 前处理与模型装配；建模 > 边界条件与初始条件构建；网格 > 六面体与高质量体网格 |
| 144 | SciDAVis | [SciDAVis.md](./SciDAVis.md) | [源码](https://github.com/highperformancecoder/scidavis) | 后处理 > 科学绘图与曲线分析 |
| 145 | SCOTCH | [SCOTCH.md](./SCOTCH.md) | [源码](https://gitlab.inria.fr/scotch/scotch) | 网格 > 网格分区与负载划分 |
| 146 | SfePy | [SfePy.md](./SfePy.md) | [源码](https://github.com/sfepy/sfepy) | 离散 > 连续 Galerkin FEM |
| 147 | Simbody | [Simbody.md](./Simbody.md) | [源码](https://github.com/simbody/simbody) | 其他（待分类）；生物力学 × 开发库 × 多体动力学 |
| 148 | SimVascular | [SimVascular.md](./SimVascular.md) | [源码](https://github.com/SimVascular/SimVascular) | 建模 > CAE 前处理与模型装配；网格 > 网格格式转换与数据读写；医学/生物流体 → 领域完整流程 |
| 149 | SLEPc | [SLEPc.md](./SLEPc.md) | [源码](https://gitlab.com/slepc/slepc) | 高性能 > 特征值与模态分析 |
| 150 | Smilei | [Smilei.md](./Smilei.md) | [源码](https://github.com/SmileiPIC/Smilei) | 粒子 > PIC |
| 151 | SOFA | [SOFA.md](./SOFA.md) | [源码](https://github.com/sofa-framework/sofa) | 离散 > 连续 Galerkin FEM；相场 > 接触与摩擦计算；医学/软体机器人 → 交互式力学框架 |
| 152 | SolveSpace | [SolveSpace.md](./SolveSpace.md) | [源码](https://github.com/solvespace/solvespace) | 建模 > CAD 与实体几何建模 |
| 153 | Sparselizard | [Sparselizard.md](./Sparselizard.md) | [源码](https://github.com/halbux/sparselizard) | 离散 > 连续 Galerkin FEM/高阶与 hp FEM；多物理 > 声学与振动耦合；电磁/声学 → 多物理场开发库 |
| 154 | Spheral | [Spheral.md](./Spheral.md) | [源码](https://github.com/llnl/spheral) | 粒子 > 光滑粒子流体动力学（SPH） |
| 155 | SPHinXsys | [SPHinXsys.md](./SPHinXsys.md) | [源码](https://github.com/Xiangyu-Hu/SPHinXsys) | 粒子 > SPH；多物理 > FSI |
| 156 | SU2 | [SU2.md](./SU2.md) | [源码](https://github.com/su2code/SU2) | 离散 > FVM |
| 157 | SuiteSparse | [SuiteSparse.md](./SuiteSparse.md) | [源码](https://github.com/DrTimothyAldenDavis/SuiteSparse) | 高性能 > 稀疏直接求解器 |
| 158 | SUNDIALS | [SUNDIALS.md](./SUNDIALS.md) | [源码](https://github.com/LLNL/sundials) | 高性能 > 非线性求解器；高性能 > 时间积分 |
| 159 | SuperLU | [SuperLU.md](./SuperLU.md) | [源码](https://github.com/xiaoyeli/superlu) | 高性能 > 稀疏直接求解器 |
| 160 | svMultiPhysics | [svMultiPhysics.md](./svMultiPhysics.md) | [源码](https://github.com/SimVascular/svMultiPhysics) | 离散 > 连续 Galerkin FEM；多物理 > 流固耦合（FSI）；医学/生物流体 → 并行多物理场求解器 |
| 161 | SYCL-Docs | [SYCL-Docs.md](./SYCL-Docs.md) | [源码](https://github.com/KhronosGroup/SYCL-Docs) | 高性能 > 性能可移植与硬件抽象 |
| 162 | Taichi | [Taichi.md](./Taichi.md) | [源码](https://github.com/taichi-dev/taichi) | 粒子 > 物质点法（MPM） |
| 163 | TetGen | [TetGen.md](./TetGen.md) | [下载源码](https://wias-berlin.de/software/tetgen/) | 网格 > 通用非结构网格生成 |
| 164 | TFEL/MFront | [TFEL＋MFront.md](./TFEL＋MFront.md) | [源码](https://github.com/thelfer/tfel) | 建模 > 材料与本构模型开发 |
| 165 | Trilinos | [Trilinos.md](./Trilinos.md) | [源码](https://github.com/trilinos/Trilinos) | 高性能 > Krylov/非线性/特征值/预条件/多重网格/域分解/MPI |
| 166 | Trixi.jl | [Trixi.jl.md](./Trixi.jl.md) | [源码](https://github.com/trixi-framework/Trixi.jl) | 离散 > DG |
| 167 | Uintah | [Uintah.md](./Uintah.md) | [源码](https://github.com/Uintah/Uintah) | 粒子 > MPM |
| 168 | vedo | [vedo.md](./vedo.md) | [源码](https://github.com/marcomusy/vedo) | 后处理 > 体渲染、切片与等值面 |
| 169 | Veusz | [Veusz.md](./Veusz.md) | [源码](https://github.com/veusz/veusz) | 后处理 > 科学绘图与曲线分析 |
| 170 | VisIt | [VisIt.md](./VisIt.md) | [源码](https://github.com/visit-dav/visit) | 后处理 > 通用科学可视化；后处理 > 流场与传热 |
| 171 | VMD | [VMD.md](./VMD.md) | [源码](https://github.com/University-of-Illinois-VMD/vmd) | 后处理 > 粒子与离散体系可视化 |
| 172 | VTK | [VTK.md](./VTK.md) | [源码](https://gitlab.kitware.com/vtk/vtk) | 后处理 > 通用/体渲染/数据格式读写 |
| 173 | vtk.js / trame | [vtk.js ＋ trame.md](./vtk.js ＋ trame.md) | [vtk.js](https://github.com/Kitware/vtk-js) / [trame](https://github.com/Kitware/trame) | 后处理 > Web 与远程可视化 |
| 174 | waLBerla | [waLBerla.md](./waLBerla.md) | [源码](https://github.com/walberla/walberla) | 粒子 > LBM |
| 175 | WarpX | [WarpX.md](./WarpX.md) | [源码](https://github.com/BLAST-WarpX/warpx) | 粒子 > PIC |
| 176 | xarray | [xarray.md](./xarray.md) | [源码](https://github.com/pydata/xarray) | 后处理 > 结果比较与数据分析 |
| 177 | XDMF | [XDMF.md](./XDMF.md) | [源码](https://gitlab.kitware.com/xdmf/xdmf) | 后处理 > 科学数据格式读写与转换 |
| 178 | YADE | [YADE.md](./YADE.md) | [源码](https://github.com/yade/trunk) | 粒子 > DEM |
| 179 | yt | [yt.md](./yt.md) | [源码](https://github.com/yt-project/yt) | 后处理 > 脚本化后处理；后处理 > 结果比较与数据分析 |
| 180 | Zoltan | [Zoltan.md](./Zoltan.md) | [源码](https://github.com/sandialabs/Zoltan) | 高性能 > 自适应网格与负载均衡 |

