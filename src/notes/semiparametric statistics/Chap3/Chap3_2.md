---
title: 超有效估计量
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-04-14
# 禁止显示页脚
footer: false
---

## Hodge 的构造

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

如果一个无偏估计的方差达到了 C-R 下界，那么就称其为有效估计。对于渐进无偏估计而言，大部分的估计量方差也无法超过 C-R 下界。同样地，将渐近方差趋于 C-R 下界的渐近无偏估计量称为渐近有效估计。然而，Hodge 给出了一个示例，通过一些特定的构造，可以使得一些渐近无偏估计量的方差低于 C-R 下界，这样的估计称为**超有效估计量**（Super Efficient Estimator）。

Hodge 的构造从 $Z_1,\ldots,Z_n\overset{\mathrm{i.i.d}}{\sim}N(\mu,1)$ 出发。显然均值 $\mu$ 的 MLE 是
$$
\bar{Z}=n^{-1}\sum_{i=1}^n Z_i
$$
它是渐近正态的，即
$$
n^{1/2}(\bar{Z}-\mu)\overset{\mathcal{D(\mu)}}{\to}N(0,1)
$$
现在我们考虑对这个估计进行一个小调整
$$
\hat{\mu}_n=\left\{\begin{align*}
    \bar{Z}, & \quad |\bar{Z}|> n^{-1/4} \\
    0, & \quad |\bar{Z}|\le n^{-1/4}
\end{align*}\right.
$$
即在包含原点的一个小区间里，直接将估计量的值当作 $0$。
