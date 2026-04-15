---
title: m-统计量
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-04-14
order: 3
# 禁止显示页脚
footer: false
---

## 定义

$m$-统计量中的 $m$ 始终被认为是“极大化”（maximum）的意思，即是通过求解某个最优化问题得到的统计量。极大似然估计（MLE）就是一个经典的 MLE 统计量，我们通过介绍它来引入 $m$-统计量的一个更具普适性和应用价值的定义。

设数据 $Z_1,\ldots,Z_n$ 独立同分布，单次观测 $Z\sim p(z;\theta)$，我们得到似然函数为 $n$ 次观测密度的乘积
$$
L(\theta)=\prod_{i=1}^n p(z_i;\theta)
$$
实际我们往往利用对数函数的单调性，定义对数似然函数为
$$
\ell(\theta)=\ln L(\theta)=\sum_{i=1}^n \ln p(z_i;\theta)
$$
MLE 定义为使得（对数）似然函数最大的 $\theta$ 的值，即
$$
\hat{\theta}:=\arg\max_{\theta\in\Theta} \ell(\theta)
$$

在实践中，我们往往假设密度 $p(z;\theta)$ 可导，那么在似然函数极大值处的导数应为 $0$（事实上，正是为了方便求导才引入了对数似然函数）。即 $\hat{\theta}$ 应是下面方程的根：
$$
\sum_{i=1}^n S_\theta(z_i;\theta)=0
$$
其中 $S_\theta(z_i;\theta) = \dfrac{\partial \ln p(z_i;\theta)}{\partial \theta}$ 是此前定义的得分函数。

由此，我们给出 $m$-估计量的定义。

::: info $m$-估计量

考虑一个关于数据 $Z$ 和参数 $\theta$ 的函数 $p\times 1$ 维函数 $m(Z,\theta)$，满足
$$
\begin{matrix}
  E_\theta(m(Z,\theta))=0^{p\times 1}, \\
  E_\theta(m^\top(Z,\theta)m(Z,\theta))<\infty,
\end{matrix}
$$
且 $E_\theta(m(Z,\theta)m^\top(Z,\theta))$ 正定。其他正则化条件会在需要的时候再给出。

设 $Z_1,\ldots,Z_n\overset{\mathrm{i.i.d}}{\sim} p(z;\theta)$，$\theta\in\Omega\subset\mathbb{R}^p$。$m$-统计量 $\hat{\theta}_n$ 定义为以下方程的解（假设解存在）：
$$
\sum_{i=1}^n S(z_i,\theta)=0
$$

:::

## m-估计量的性质

下面我们来说明 $m$-估计量在一定条件下是一致且渐近正态的。
