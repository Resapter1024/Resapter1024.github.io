---
title: 参数模型的影响函数的几何学
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-04-19
order: 4
# 禁止显示页脚
footer: false
---

## 切空间

考虑由所有均值为零、方差有限的关于 $Z$ 的 $q$ 维可测函数构成的 Hillbert 空间 $\mathcal{H}$，并赋予内积 $\langle h_1, h_2 \rangle = E(h_1^T h_2)$。正如之前讨论的，在适当的条件下，得分向量 $S_\theta(Z, \theta_0)$ 的均值为零（即 $E\{S_\theta(Z, \theta_0)\} = 0^{p \times 1}$）。

我们可以定义由 $p$ 维得分向量 $S_\theta(Z, \theta_0)$ 张成的有限维线性子空间 $\mathscr{T} \subset \mathcal{H}$，定义为：
$$
\mathscr{T} = \{B^{q \times p} S_\theta(Z, \theta_0): B^{q \times p}\in\mathbb{R}^{q\times p} \} $$
该线性子空间称为**切空间**（Tangent Space）。

在 $\theta=(\beta^\top,\eta^\top)^\top$ 的场合下，定义 $S_\eta(Z,\theta_0)$ 张成的线性子空间为**干扰切空间**（Nuisance Tangent Space），记作 $\Lambda$。事实上，[推论 3.1](/notes/semiparametric%20statistics/Chap3/Chap3_2.md#corollary1)所述等价于影响函数 $\varphi_{\hat{\beta}_n}$ 与 $\Lambda$ 正交。

尽管 $\beta$ 的 RAL 估计量的影响函数必须满足推论 3.1，但我们自然会想到反过来，对于 Hillbert 空间中任何一个满足推论 3.1 的元素，是否必定存在一个 $\beta$ 的 RAL 估计量，以该元素作为其影响函数？

::: details 注记

这实际上是一个极为困难的问题，通常需要假设十分严格的正则化条件。虽然不能保证存在性，但对于大多数的，性质相对良好的影响函数而言，我们可以尝试直接来**构造**对应的 RAL 估计。

:::

## 构造 RAL

设 $\varphi(Z)$ 为一个满足推论 3.1 的均值为 $0$，方差有限的 $q$ 维可测函数。定义：
$$
m(Z, \beta, \eta) = \varphi(Z) - E_{\beta, \eta}\{\varphi(Z)\}
$$
我们下面证明，方程
$$
\sum_{i=1}^n m\{Z_i, \beta, \hat{\eta}_n(\beta)\} = 0
$$
的解（记作 $\hat{\beta}_n$）将是一个以 $\varphi(Z)$ 为影响函数的渐近线性估计量。

根据构造，我们有 $E_{\beta_0, \eta_0}\{m(Z, \beta_0, \eta_0)\} = 0$，即
$$
\int m(z, \beta_0, \eta) p(z, \beta_0, \eta) d\nu(z) = 0
$$
因此，在 $\eta = \eta_0$ 处对 $\eta^T$ 求导：
$$
\begin{align*}
    \int & \frac{\partial m(z, \beta_0, \eta_0)}{\partial \eta^T} p(z, \beta_0, \eta_0) d\nu(z) \\
    & + \int m(z, \beta_0, \eta_0) S_\eta^T(z, \beta_0, \eta_0) p(z, \beta_0, \eta_0) d\nu(z) = 0
\end{align*}
$$
由于 $\varphi(Z) = m(Z, \beta_0, \eta_0)$ 必须满足 $E\{\varphi(Z) S_\eta^T(Z, \theta_0)\} = 0$，从而
$$
E\left\{ \frac{\partial m(Z, \beta_0, \eta_0)}{\partial \eta^T} \right\} = 0
$$
类似地，通过在 $\beta = \beta_0$ 处对 $\beta^T$ 求导可以证明：
$$
E\left\{ \frac{\partial m(Z, \beta_0, \eta_0)}{\partial \beta^T} \right\} = -I^{q \times q}$$

对估计方程在 $\beta=\beta_0$ 处进行 Taylor 展开得出：
$$
0 = \sum m\{Z_i, \beta_0, \hat{\eta}_n(\beta_n)\} + \left[ \sum \frac{\partial m}{\partial \beta^T} \{Z_i, \beta_n^*, \hat{\eta}_n(\beta_n)\} \right] (\hat{\beta}_n - \beta_0)
$$
因此，
$$
n^{1/2}(\hat{\beta}_n - \beta_0) = - \left[ n^{-1} \sum \frac{\partial m}{\partial \beta^T} \right]^{-1} \left[ n^{-1/2} \sum m\{Z_i, \beta_0, \hat{\eta}_n(\beta_n)\} \right]
$$
由于弱大数定律，乘积的第一项依概率收敛于 $-I^{q \times q}$。

现在考虑第二项，对其关于 $\eta$ 进行展开：
$$
\begin{align*}
    n^{-1/2} \sum m\{Z_i, \beta_0, \hat{\eta}_n\} = n^{-1/2} \sum m\{Z_i, \beta_0, \eta_0\} \\ + \left[ n^{-1} \sum \frac{\partial m(Z_i, \beta_0, \eta_n^*)}{\partial \eta^T} \right] [n^{1/2}(\hat{\eta}_n - \eta_0)]
\end{align*}
$$
对于这里的第二项，由于 $E\{\partial m / \partial \eta^T\} = 0$，且 $n^{1/2}(\hat{\eta}_n - \eta_0)$ 依概率有界，从而其依概率收敛于 $0$。

因此，我们得到：
$$
n^{1/2}(\hat{\beta}_n - \beta_0) = n^{-1/2} \sum \varphi(Z_i) + o_p(1)
$$
这说明 $\varphi(Z_i)$ 确实是估计量 $\hat{\beta}_n$ 的影响函数。

::: details 一些注记

我们要明确，这里构造出的估计量**仅用于理论目的，不具有实际用途**。出发点是选择一个满足条件的函数。如果要用这个估计量来做估计，我们必须能够计算 $E_{\beta, \eta}\{\varphi(Z)\}$，换句话说，我们完全已知数据的分布。但这根本不可能，即使可能，为什么我们不用它来做 MLE 呢？

因此，这个构造实际上是为了说明，不仅所有 RAL 估计量的影响函数都属于满足以下条件的 Hillbert 空间子空间：(1) $E\{\varphi(Z)S_\beta^T\} = I$ 且 (2) $E\{\varphi(Z)S_\eta^T\} = 0$；并且，反过来，该子空间中的任何元素都是某个 RAL 估计量的影响函数。

在后面，我们会尝试找到合适的影响函数，使得我们可以在不已知数据分布的情形下，通过这个影响函数来构造出 RAL 估计量。事实上这就是所谓的**有效影响函数**（Efficient Influence Function, EIF）。

:::

## RAL 的优劣

我们已经说明了对于 RAL 估计量 $\hat{\beta}_n$ 及其影响函数 $\varphi$，我们有渐近正态性
$$
n^{1/2}(\hat{\beta}_n-\beta_n)\overset{\mathcal{D}}{\to} N(0, E(\varphi\varphi^\top))
$$
因此，对同一个参数的不同的 RAL 估计量，我们很自然地认为渐近方差最小的 RAL 就是最优的 RAL，进而我们只要寻找方差最小的影响函数即可。

同时，我们知道影响函数可以视为 Hillbert 空间中的元素，此时 $\varphi$ 的方差也就是其内积诱导的范数
$$
E(\varphi\varphi^\top) = \|\varphi\|^2
$$
因此，寻找最佳估计量（即渐近方差最小的估计量）等价于在影响函数的子空间中寻找**距离原点最短的元素**。同时，这也说明了通过影响函数找到对应的 RAL 的重要性。
