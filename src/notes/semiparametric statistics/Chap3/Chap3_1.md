---
title: 影响函数
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-04-14
order: 1
# 禁止显示页脚
footer: false
---

在第三章中我们暂时仅讨论有限维参数的半参数模型。设数据 $Z_1,\ldots,Z_n$ 独立同分布。单次观测的随机向量 $Z$ 服从某支配测度 $\nu_Z$ 为基准的密度族 $\{p_Z(z;\theta):\theta\in\Omega\}$。这里参数 $\theta=(\beta^\top,\eta^\top)^\top$ 仍然分为 $q$ 维的感兴趣参数和 $r$ 维的干扰参数，并记真值为 $\theta_0=(\beta_0^\top,\eta_0^\top)^\top$。

对于感兴趣参数 $\beta$，一个好的估计量应该是**渐近线性**（asymptotically linear）的，即存在一个 $q$ 维零均值随机函数 $\varphi^{q\times 1}(Z)$，满足 $E(\varphi\varphi^\top)$ 存在且非奇异，使得
$$
n^{1/2}(\hat{\beta}-\beta)=n^{-1/2}\sum_{i=1}^n \varphi^{q\times 1}(Z_i)+o_P(1) \tag{1}
$$

::: info 影响函数

$(1)$ 式中的 $\varphi(Z_i)$ 被称为估计量 $\hat{\beta}_n$ 的**第 $i$ 个影响函数**，或称为 $\hat{\beta}_n$ 的第 $i$ 个观测值的影响函数。

:::

::: tip 正态参数 MLE 的影响函数

设 $Z_1,\ldots,Z_n\overset{\mathrm{i.i.d}}{\sim}N(\mu,\sigma^2)$，$\mu$ 和 $\sigma^2$ 的极大似然估计分别为
$$
\begin{matrix}
  \hat{\mu}_n=n^{-1}\displaystyle\sum_{i=1}^nZ_i \\
  \hat{\sigma}_n^2=n^{-1}\displaystyle\sum_{i=1}^n(Z_i-\hat{\mu}_n)^2
\end{matrix}
$$
此时立刻得到 $\hat{\mu}_n$ 满足
$$
n^{1/2}(\hat{\mu}_n-\mu)=n^{-1/2}\sum_{i=1}^n(Z_i-\mu_0)
$$
从而 $\varphi(Z_i)=Z_i-\mu_0$ 为 $\hat{\mu}_n$ 的第 $i$ 个影响函数。

类似地，可以计算得到 $\hat{\sigma}^2_n$ 满足
$$
\hat{\sigma}^2_n-\sigma^2_0=n^{-1}\sum_{i=1}^n((Z_i-\mu_0)^2-\sigma_0^2)+(\hat{\mu}_n-\mu_0)^2
$$
两端同时乘以 $n^{1/2}$ 得到
$$
n^{1/2}(\hat{\sigma}^2_n-\sigma^2_0)=n^{-1/2}\sum_{i=1}^n((Z_i-\mu_0)^2-\sigma_0^2)+n^{1/2}(\hat{\mu}_n-\mu_0)^2
$$
而由于 $n^{1/2}(\hat{\mu}_n-\mu_0)^2=o_P(1)$，我们有 $\varphi(Z_i)=(Z_i-\mu_0)^2-\sigma_0^2$ 为 $\hat{\sigma}^2_n$ 的影响函数。

:::

由于中心极限定理，当把估计量写成渐近线性形式时
$$
n^{1/2}(\hat{\beta}_n-\beta)=n^{-1/2}\sum_{i=1}^n \varphi(Z_i)+o_P(1)
$$
我们有
$$
n^{-1/2}\sum_{i=1}^n\varphi(Z_i)\overset{\mathcal{D}}{\to} N(0^{q\times 1},E(\varphi\varphi^\top))
$$
进而由 Slutsky 定理
$$
n^{1/2}(\hat{\beta}_n-\beta)\overset{\mathcal{D}}{\to} N(0^{q\times 1},E(\varphi\varphi^\top))
$$
这说明渐近线性的统计量的影响函数决定了它们的渐近性质。从而渐近线性统计量可以通过其影响函数来识别。

::: info 定理 3.1

任何渐近线性估计量都存在唯一（$\mathrm{a.s.}$）的影响函数。

::: details 证明

若对于渐近线性估计量 $\hat{\beta}_n$，存在另一函数 $\varphi^*(Z)$ 满足
$$
E(\varphi^*(Z))=0
$$
且 $\hat{\beta}_n$ 可被表示为
$$
n^{1/2}(\hat{\beta}_n-\beta)=n^{-1/2}\sum_{i=1}^n \varphi^*(Z_i)+o_P(1)
$$
同时，也有
$$
n^{1/2}(\hat{\beta}_n-\beta)=n^{-1/2}\sum_{i=1}^n \varphi(Z_i)+o_P(1)
$$
从而
$$
n^{-1/2}\sum_{i=1}^n (\varphi^*(Z_i)-\varphi(Z_i))=o_P(1)
$$
然而，由 CLT 得到
$$
n^{-1/2}\sum_{i=1}^n (\varphi^*(Z_i)-\varphi(Z_i)) \overset{\mathcal{D}}{\to} N(0, E(\varphi^*-\varphi)(\varphi^*-\varphi)^\top)
$$
从而方差 $E(\varphi^*-\varphi)(\varphi^*-\varphi)^\top=0^{q\times 1}$，这直接导出 $\varphi^*\overset{\mathrm{a.s.}}{=}\varphi$。

:::
