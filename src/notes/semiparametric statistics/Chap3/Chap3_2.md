---
title: 超有效估计量
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-04-15
order: 2
# 禁止显示页脚
footer: false
---

## Hodges 的构造

经典的统计理论中，在一定条件下，对于无偏估计，其方差不可能小于 Cramér-Rao 下界，其具体公式由下面的定理给出。

::: info C-R 下界

设 $\mathcal{P}=\{p(x;\theta):\theta\in\Theta\}$ 为 C-R 正则分布族，可估参数 $g(\theta)$ 是 $\Theta$ 上的可微函数，又设 $X=(X_1,\ldots,X_n)$ 是取自总体分布 $P\in\mathcal{P}$ 的一个样本，假如 $\hat{g}(X)$ 是 $g(\theta)$ 的无偏估计，且满足积分
$$
\int\dots\int\hat{g}(x_1,\ldots,x_n)\cdot p(x_1,\ldots,x_n;\theta)\mathrm{d}x_1\ldots\mathrm{d}x_n
$$
可以在积分号内对 $\theta$ 求导，则有
$$
\mathrm{Var}_\theta(\hat{g}(x))\ge \frac{[g'(\theta)]^2}{n I(\theta)}
$$
其中 $I(\theta)$ 为该分布族的 Fisher 信息量。

::: details 一些说明

该定义摘抄自《数据科学统计基础》2.5 节。

C-R 正则分布族是一个非常宽泛的条件，总体上大部分的分布都满足正则要求。其最核心的要求在于，首先 Fisher 信息量需要存在；其次 分布的支撑和参数 $\theta$ 无关。其余还有一些正则性条件不再赘述。最经典的不属于 C-R 正则分布族的分布是均匀分布 $U(0,\theta)$。

如果参数 $g(\theta)$ 存在无偏估计，则称其为可估参数。

:::

如果一个无偏估计的方差达到了 C-R 下界，那么就称其为有效估计。对于渐进无偏估计而言，大部分的估计量方差也无法超过 C-R 下界。同样地，将渐近方差趋于 C-R 下界的渐近无偏估计量称为渐近有效估计。然而，Hodges 给出了一个示例，通过一些特定的构造，可以使得一些渐近无偏估计量的方差低于 C-R 下界，这样的估计称为**超有效估计量**（Super Efficient Estimator）。

Hodges 的构造从 $Z_1,\ldots,Z_n\overset{\mathrm{i.i.d}}{\sim}N(\mu,1)$ 出发。显然均值 $\mu$ 的 MLE 是
$$
\bar{Z}_n=n^{-1}\sum_{i=1}^n Z_i
$$
它是渐近正态的，即
$$
n^{1/2}(\bar{Z}_n-\mu)\overset{\mathcal{D(\mu)}}{\to}N(0,1)
$$
现在我们考虑对这个估计进行一个小调整
$$
\hat{\mu}_n=\left\{\begin{align*}
    \bar{Z}_n, & \quad |\bar{Z}_n|> n^{-1/4} \\
    0, & \quad |\bar{Z}_n|\le n^{-1/4}
\end{align*}\right.
$$
即在包含原点的一个小区间里，直接将估计量的值当作 $0$。

下面我们分成两类来讨论 $\hat{\mu}_n$ 的渐近性质。首先对 $\mu\neq 0$，由于 $\bar{Z}\sim N(\mu,n^{-1})$，有
$$
\begin{align*}
  P(\hat{\mu}_n\neq \bar{Z}_n) & = P(|\bar{Z}_n|\le n^{-1/4}) \\
  & = P\left(-\frac{n^{-1/4}+\mu}{n^{-1/2}}\le n^{1/2}(\bar{Z}_n-\mu) \le \frac{n^{-1/4}-\mu}{n^{-1/2}}\right) \\
  & = P(-n^{1/4}-n^{1/2}\mu\le n^{1/2}(\bar{Z}_n-\mu) \le n^{1/4}-n^{1/2}\mu)
\end{align*}
$$
不妨设 $\mu>0$，有 $n^{1/4}-n^{1/2}\mu=n^{1/4}(1-n^{1/4}\mu)\to -\infty(n\to\infty)$，从而上述概率收敛到 $0$，即 $\hat{\mu}_n\overset{P}{\to}\bar{Z}_n$。下面我们进一步讨论该概率的收敛速度。事实上我们可以进行一个粗略的估计：当 $n$ 充分大时，
$$
\begin{align*}
  & \quad n^{1/2} P(-n^{1/4}-n^{1/2}\mu\le n^{1/2}(\bar{Z}_n-\mu) \le n^{1/4}-n^{1/2}\mu) \\
  & \le 2n^{3/4}\left(\frac{1}{\sqrt{2\pi}}\exp\left(-\frac{(n^{1/4}-n^{1/2}\mu)^2}{2}\right)\right) \\
  & = \sqrt{\frac{2}{\pi}}n^{3/4}\exp\left(-\frac{n^{1/2}+n\mu^2-2n^{3/4}\mu}{2}\right) \to 0
\end{align*}
$$
最后一行是由于指数函数的收敛速度远快于任意多项式函数。从而我们说明了
$$
\hat{\mu}_n-\bar{Z}_n=o_P(n^{-1/2})
$$
进而 $n^{1/2}(\bar{Z}_n-\mu)=n^{1/2}(\hat{\mu}_n-\mu)+o_P(1)$，因此
$$
n^{1/2}(\hat{\mu}_n-\mu)\overset{\mathcal{D}}{\to} N(0,1)
$$
因此当 $\mu\neq 0$ 时，Hodges 估计量和 MLE 在渐进意义上没有区别。

而当 $\mu=0$ 时，有一些事情变得不同了：我们可以说明 $\hat{\mu}_n\overset{P}{\to} 0$。我们有 $\forall \varepsilon>0$，
$$
\begin{align*}
  P(|\hat{\mu}_n|>\varepsilon) & = P(|\bar{Z}_n|>n^{-1/4},|\bar{Z}_n|>\varepsilon) \\
  & \le P(|\bar{Z}_n|>n^{-1/4}) \\
  & = P(n^{1/2}|\bar{Z}_n|>n^{1/4}) \to 0
\end{align*}
$$
从而 $\hat{\mu}_n\overset{P}{\to} 0$，进而 $\hat{\mu}_n\overset{\mathcal{D}(0)}{\to} 0$，即 $\hat{\mu}_n\overset{\mathcal{D}(0)}{\to} N(0,0)$。这就说明了 $\mu=0$ 时 Hodges 统计量的超有效性。

超有效估计量虽然的确在某些点上具有更小的渐近方差，但其并不直观，局部性质也较差。因此我们需要做的并不是使用超有效估计量，而是通过某些方法来**避免使用**这些估计量。

## 正则估计量

### 定义

::: info 正则估计量

考虑一个局部数据生成过程（Local Data Generating Process, LDGP）：对任意样本量 $n$，数据服从参数为 $\theta_n$ 的分布
$$
Z_{1n}, Z_{2n}, \ldots, Z_{nn}\overset{\mathrm{i.i.d}}{\sim} p(z;\theta_n)
$$
其中 $n^{1/2}(\theta_n-\theta^*)$ 收敛于某个常数（即 $\theta_n$ 充分靠近 $\theta^*$）。令 $\theta_n=(\beta_n^\top,\eta_n^\top)^\top, \theta^*=(\beta^{*\top},\eta^{*\top})^\top$。我们称 $\beta^{*}$ 的估计量 $\hat{\beta}_n(Z_{1n}, Z_{2n}, \ldots, Z_{nn})$ 是**正则估计量**，如果 $n^{1/2}(\hat{\beta}_n-\beta^*)$ 存在不依赖于 LDGP 的极限分布。

:::

从定义中我们可以看出，对正态分布 $N(\mu,1)$ 而言，MLE 是正则估计量（$n^{1/2}(\hat{\mu}_{\mathrm{MLE}}-\mu)\overset{\mathcal{D}}{\to}N(0,1)$），而 Hodges 估计量不是正则的（$\mu$ 不同则估计量的极限分布不同）。

在接下来的内容中，我们只考虑**正则且渐近线性**（Regular and Asymptotically Linear, RAL）的估计量。事实上，绝大多数的正则估计量是渐近线性的。

### RAL 的影响函数

接下来我们尝试建立 RAL 的影响函数几何。首先定义单次观测 $Z$ 的得分向量 $S_\theta(z;\theta_0)$
$$
S_\theta(z;\theta_0)=\left.\frac{\partial \ln p_Z(z;\theta)}{\partial \theta}\right|_{\theta=\theta_0}
$$
其中 $p_Z(z;\theta)$ 是 $Z$ 的密度，$\theta=(\beta^\top,\eta^\top)^\top$，$\theta_0$ 是 $\theta$ 的真值。

可以将 $S_\theta$ 划分成对感兴趣参数的导数和对干扰参数的导数，即
$$
S_\beta(z;\theta_0)=\left.\frac{\partial \ln p_Z(z;\theta)}{\partial \beta}\right|_{\theta=\theta_0}^{q\times 1}, \quad S_\eta(z;\theta_0)=\left.\frac{\partial \ln p_Z(z;\theta)}{\partial \eta}\right|_{\theta=\theta_0}^{r\times 1},
$$

<div id="theorem">

::: info 正则估计量的必要条件

设感兴趣参数 $\beta(\theta)$ 是 $p$ 维参数 $\theta$ 的 $q$ 维函数，其 $q\times p$ 维偏导数矩阵 $\Gamma(\theta)=\dfrac{\partial \beta(\theta)}{\partial\theta^\top}$ 存在，秩为 $q$ 且在 $\theta_0$ 的某个邻域内关于 $\theta$ 连续。设 $\hat{\beta}_n$ 是一个 RAL，其影响函数 $\varphi(Z)$ 满足 $E_\theta(\varphi\varphi^\top)$ 存在且在 $\theta_0$ 的某个邻域内关于 $\theta$ 连续。

那么，如果 $\hat{\beta}_n$ 是正则估计量，则必有
$$
E(\varphi(Z)S^\top_\theta(z;\theta_0))=\Gamma(\theta_0)
$$

:::

</div>

若 $\theta$ 可被显式地分成 $\theta=(\beta^\top,\eta^\top)^\top$，则该定理有以下推论

<div id="corollary1">

::: info 推论 3.1

若 $\theta$ 可被显式地分成 $\theta=(\beta^\top,\eta^\top)^\top$，则正则估计量 $\hat{\beta}_n$ 满足

1. $E(\varphi(Z)S^\top_\beta(z;\theta_0))=I^{q\times q}$；
2. $E(\varphi(Z)S^\top_\eta(z;\theta_0))=0^{q\times r}$；

:::

</div>

一方面，这个定理可以用来判定 RAL 的正则性：如果这个式子不被满足，则 RAL 就不正则。另一方面，RAL 的正则就说明其**影响函数和得分函数正交**，这为描述得分函数在 Hillbert 空间中的几何关系提供了一个基础。

### 定理证明

占位，之后补充。
