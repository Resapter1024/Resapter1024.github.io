---
title: 半参数 RAL 估计量的影响函数
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-08-22
order: 3
# 禁止显示页脚
footer: false
---

## 参数子模型

在半参数模型中，由于干扰参数 $\eta(\cdot)$ 通常是无限维的未知函数或未指定分布，第 3 章针对有限维参数空间建立的局部渐近正态（LAN）理论与 Cramér-Rao 下界无法直接套用.

解决这一困难的标准数学策略是先讨论有限维，然后取极限逼近：首先在无限维半参数模型中构造一系列有限维的参数子模型（Parametric Submodels），在每个子模型上应用已有的有限维参数统计理论；随后通过让子模型遍历所有可能逼近真实分布的路径，取所有子模型性质的上确界（极限）得到结果.

::: info 参数子模型

设半参数模型为概率密度函数族 $\mathcal{P} = \big\{ p(z; \beta, \eta(\cdot)) \big\}$，其中 $\beta \in \mathbb{R}^q$ 为感兴趣参数，$\eta(\cdot)$ 为无限维干扰参数，真实数据生成密度为 $p_0(z) = p(z; \beta_0, \eta_0(\cdot))$.

一个**参数子模型** $\mathcal{P}_{\beta, \eta} = \big\{ p(z; \beta, \eta) \big\}$ 是由有限维参数 $(\beta^\top, \eta^\top)^\top$ 刻画的分布族（其中 $\eta \in \mathbb{R}^r$ 为 $r$ 维干扰参数），且满足以下两个条件：

1. 包含于原模型：$\mathcal{P}_{\beta, \eta} \subset \mathcal{P}$，即子模型中的每一个概率密度都属于原半参数模型；
2. 包含真实分布：$p_0(z) \in \mathcal{P}_{\beta, \eta}$，即存在某个有限维真值 $(\beta_0^\top, \eta_0^\top)^\top$ 使得 $p(z; \beta_0, \eta_0) = p_0(z)$.

:::

::: details 参数模型与参数子模型的本质区别

在概念上，必须严格区分实际数据分析中的「参数模型」与理论推导中的「参数子模型」。

参数模型是数据分析者基于先验知识或建模假设而主观设定的有限维模型（例如假设 $Y = \mu(X, \beta) + \varepsilon$，其中 $\varepsilon \sim N(0, \sigma^2)$）. 它可以直接用于数据拟合与参数估计，但若总体真值并非正态分布，该参数模型就是被错误设定的（Misspecified），因而不包含真值 $p_0(z)$，也就不是参数子模型.

参数子模型是纯粹的理论分析工具：它在定义上被强制要求必须包含未知的总体真值 $p_0(z)$（即在真值处与原模型**相切**）. 由于真实分布 $p_0(z)$ 在实际中是未知的，分析者无法在现实中将其显式写出用于拟合数据. 其存在的唯一目的是为无穷维模型提供局部的有限维可微几何路径.

:::

::: tip 实例：Cox 比例风险模型的参数子模型

考虑生存分析中的经典 Cox 比例风险模型，其危险率函数设定为 $\lambda(t \mid X) = \lambda_0(t) \exp(\beta^\top X)$，其中基线危险率函数 $\lambda_0(t)$ 为未知的无穷维干扰参数.

设 $h_1(t), \dots, h_r(t)$ 为分析者预先选取的 $r$ 个已知的正则时间函数（扰动方向）. 我们可以构造如下的有限维参数子模型：
$$
\mathcal{P}_{\beta, \eta} = \left\{\lambda(t \mid X; \beta, \eta) = \lambda_0(t) \exp\left( \sum_{j=1}^r \eta_j h_j(t) \right) \exp(\beta^\top X) \right\}
$$
其中 $\beta \in \mathbb{R}^q$，$\eta = (\eta_1, \dots, \eta_r)^\top \in \mathbb{R}^r$.

* 对任意有限维参数 $(\beta^\top, \eta^\top)^\top$，新的基线危险率 $\lambda_0(t)\exp(\sum \eta_j h_j(t))$ 仍为合法的非负危险率函数，因而属于原半参数模型；
* 当取扰动参数真值 $\eta = 0$ 且 $\beta = \beta_0$ 时，模型取到真实分布 $p_0$.

该子模型显式依赖于真实的基线函数 $\lambda_0(t)$，因此无法直接用于样本估计；但当 $r \to \infty$ 且扰动基函数族 $\{h_j(t)\}$ 充满相应的函数空间时，该类子模型便能够从各个微分方向全方位逼近整个半参数模型.

:::

## 半参数 RAL 估计量与效率界

引入参数子模型后，我们可以将第 3 章关于有限维模型中正则渐近线性（RAL）估计量与有效影响函数的结论，无缝推广至半参数模型中.

回顾第 3 章的核心结论：对任意一个给定的有限维参数子模型 $\mathcal{P}_{\beta, \eta}$，参数 $\beta$ 的任意 RAL 估计量的影响函数 $\varphi(Z)$ 必须满足：

1. 正交性：$\varphi(Z)$ 属于 Hilbert 空间 $\mathcal{H}$ 中与该子模型的干扰切空间
   $$
   \Lambda_{\beta, \eta} = \big\{ B^{q \times r} S_\eta(Z; \beta_0, \eta_0), \; \forall B \in \mathbb{R}^{q \times r} \big\}
   $$
   正交的子空间；
2. 子模型有效得分：定义为 $S_\beta$ 投影到 $\Lambda_{\beta, \eta}$ 后的残差：
   $$
   S_{\mathrm{eff}, \beta, \eta} = S_\beta - \Pi(S_\beta \mid \Lambda_{\beta, \eta})
   $$
3. 子模型效率下界：在该特定子模型中，所有 RAL 估计量所能达到的最小渐近方差矩阵为有效得分方差矩阵的逆：
   $$
   \operatorname{Var}(\varphi_{\mathrm{eff}, \beta, \eta}) = \big[ E\big( S_{\mathrm{eff}, \beta, \eta} S_{\mathrm{eff}, \beta, \eta}^\top \big) \big]^{-1}
   $$

在真正的半参数统计推断中，我们事先并不知道数据来自哪一个特定的有限维子模型，因此一个合格的半参数估计量必须对所有可能的参数子模型都保持良好性质.

::: info 半参数 RAL 估计量

设 $\hat\beta_n$ 为参数 $\beta$ 的一个估计量. 若对原半参数模型 $\mathcal{P}$ 中包含真实分布 $p_0$ 的每一个参数子模型 $\mathcal{P}_{\beta, \eta}$，$\hat\beta_n$ 都是该子模型下的正则且渐近线性（RAL）估计量，则称 $\hat\beta_n$ 为**半参数 RAL 估计量**.

因此，半参数 RAL 估计量的影响函数 $\varphi(Z)$ 必须同时属于每一个参数子模型下的 RAL 影响函数类，即存在如下包含关系：
$$
\big\{ \text{半参数 RAL 估计量的影响函数} \big\} \subseteq \bigcap_{\text{一切参数子模型 } \mathcal{P}_{\beta,\eta}} \big\{ \mathcal{P}_{\beta,\eta} \text{ 下的 RAL 影响函数} \big\}
$$

:::

上述包含关系表明：半参数模型对影响函数的要求比任何单一子模型都要严格得多. 由于估计量的方差必须在**每一个**子模型中都不小于该子模型的有效方差下界，我们自然得到了半参数模型的方差下界：

<div id="SemiEffBound">

::: info 半参数效率界 (Semiparametric Efficiency Bound)

对任意半参数 RAL 估计量，其影响函数 $\varphi(Z)$ 的渐近方差矩阵 $\operatorname{Var}(\varphi) = E(\varphi\varphi^\top)$ 在矩阵半正定意义下必然满足：
$$
\operatorname{Var}(\varphi) \ge \sup_{\{\text{一切参数子模型 } \mathcal{P}_{\beta, \eta}\}} \Big[ E\big( S_{\mathrm{eff}, \beta, \eta} S_{\mathrm{eff}, \beta, \eta}^\top \big) \Big]^{-1}
$$
上述所有子模型有效方差下界的**上确界（Supremum）**被称为该半参数模型的**半参数效率界**（或半参数 Cramér-Rao 下界）.

* 若一个半参数 RAL 估计量在真值 $p_0$ 处的渐近方差精确达到了该上确界，则称其在 $p_0$ 处是**局部半参数有效**的；
* 若对参数空间中的任意真值 $p_0 \in \mathcal{P}$ 该估计量均能达到效率界，则称其为**全局半参数有效估计量**.

:::

</div>

::: details 半参数效率界的几何直觉

从 Hilbert 空间的投影几何角度来看，这一上确界具有一定的几何直观：

1. 对于任意子模型 $\mathcal{P}_{\beta, \eta}$，有效得分 $S_{\mathrm{eff}, \beta, \eta} = S_\beta - \Pi(S_\beta \mid \Lambda_{\beta, \eta})$ 是感兴趣参数得分 $S_\beta$ 向子模型干扰切空间 $\Lambda_{\beta, \eta}$ 投影后的残差；
2. 当我们考虑更丰富、维数更高、扰动方向更复杂的参数子模型时，子模型的干扰切空间 $\Lambda_{\beta, \eta}$ 会不断变大；
3. 根据正交投影性质，投影子空间越大，向其投影后的残差向量 $S_{\mathrm{eff}}$ 就会被削减得越短（残差的范数/协方差矩阵 $E(S_{\mathrm{eff}}S_{\mathrm{eff}}^\top)$ 变小）；
4. 由于方差下界是有效得分协方差矩阵的逆 $[E(S_{\mathrm{eff}}S_{\mathrm{eff}}^\top)]^{-1}$，残差越小，对应的方差下界就越大；
5. 当子模型遍历所有可能逼近全模型的方向时，干扰切空间将扩展为其均方闭包（即原半参数模型的全干扰切空间 $\Lambda$），此时残差达到最小，其逆矩阵达到最大.

接下来，我们将利用 Hilbert 空间的闭包与投影定理，证明该上确界不必逐个遍历子模型去求，而是可以直接通过向整个半参数干扰切空间作一次正交投影直接计算出来.

:::
