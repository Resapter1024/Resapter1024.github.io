---
title: CRE 与 FRT
category:
  - 因果推断
tag:
  - 学习
  - 因果推断
date: 2025-10-27
order: 2
# 禁止显示页脚
footer: false
---

## CRE

考虑在试验中存在 $n$ 个被试个体，其中令 $n_1$ 个进入处理组，而 $n_0$ 个进入对照组. 基于此我们定义完全随机化试验.

::: info 定义 1

令 $n_1,n_0$ 满足 $n=n_1+n_0$，一个**完全随机化试验**（CRE, Complete Randomized Experiment）具有如下的处理分配
$$
P(\mathbf{Z}=\mathbf{z})=1\bigg/\binom{n}{n_1}
$$
其中 $\mathbf{z}=(z_1,\ldots,z_n)$ 满足 $\displaystyle\sum_{i=1}^n z_i=n_1$.

:::

这一概率分布实际上源于我们对 CRE 的设计，即我们希望处理分配和所有被试个体的潜在结果都无关，它只应该是等可能地将个体们分配进入处理组和对照组，因此实际上 $\mathbf{z}$ 的可能取值为 $n_1$ 个 $1$ 和 $n_0$ 个 $0$ 的随机排列，因此共有 $\displaystyle\binom{n}{n_1}$ 种可能.

此外我们也可以认为，CRE 中所有潜在结果都是固定值. 即使它们是随机变量，我们也可以取条件来规避它，即
$$
P(\mathbf{Z}=\mathbf{z}\mid\mathbf{Y}(1),\mathbf{Y}(0))=1\bigg/\binom{n}{n_1}
$$
这正是由于 $\mathbf{Z}$ 应和 $\{\mathbf{Y}(1),\mathbf{Y}(0)\}$ 独立.

## FRT

### 检验原理

在 CRE 的基础上，我们可以定义 Fisher 随机化检验（FRT, Fisher Randomized Test），它用于检验因果效应的存在.

::: info 定义 2

考虑如下<u>强原假设</u>：$\mathrm{H}_{\mathrm{0F}}: \forall i\in\{1,2,\ldots,n\}, Y_i(1)=Y_i(0)$. 同时认为观测到的结果 $\mathbf{Y}$ 为定值.

对任意的关于 $\mathbf{Z},\mathbf{Y}$ 的函数 $T=T(\mathbf{Z},\mathbf{Y})$，由于 $\mathbf{Z}$ 服从一个离散均匀分布，因此 $T$ 在取值集合
$$
\{T(\mathbf{z}^1,\mathbf{Y}),\ldots,T(\mathbf{z}^M,\mathbf{Y})\}
$$
上也是等可能取值的，这里 $M=\binom{n}{n_1}$. 从而在 CRE 下，$T$ 的分布被完全确定. 称 $T$ 这种分布为**随机化分布**. 若对 $T$ 而言较大的值比较极端，则可以给出 $p$ 值的计算公式
$$
p_\text{FRT}=\frac{1}{M}\sum_{i=1}^M \mathbb{I}(T(\mathbf{z}^i,\mathbf{Y})\ge T(\mathbf{Z},\mathbf{Y}))
$$

使用上述过程定义的假设检验过程称为**Fisher 随机化检验**.

:::

FRT 适用于任何统计量. 更重要的是，在强原假设 $\mathrm{H_{0F}}$ 下，FRT 将是有限样本精确的，即满足
$$
P(p_{\text{FRT}}\le u)\le u, \forall u\in[0,1]
$$

::: details 有限样本精确（finite-sample exact）

在强原假设下，不论 $Z$ 的取值如何，$Y$ 的值都是相等的，因此设 $T$ 的分布函数为 $F(t)$. 即使它是一个阶梯函数，我们仍然不妨假设 $F$ 是连续且单调递增的，这是因为只相差有限点上的值. 因此
$$
\begin{align*}
  P(p_{\text{FRT}}\le u) & = P(1-F(T)\le u) = P(F(T)\ge 1-u)\\
  & = P(T\ge F^{-1}(1-u)) =1-F(F^{-1}(1-u))=u
\end{align*}
$$

:::

在实际计算中，$M$ 的值往往非常大，导致 $p_\text{FRT}$ 无法计算. 因此可以采用 Monte Carlo 算法来近似计算 $p_\text{FRT}$.

### 经典的统计量选择

尽管 FRT 对任意统计量都生效，但是实际中我们还是倾向于使用性质较好的统计量，来反映出样本中的更多信息.

::: info 均值差异

称一组数据中，处理组结果均值和对照组结果均值之差为<u>均值差异（Difference in Means）</u>
$$
\hat{\tau}=\hat{Y}(1)-\hat{Y}(0)
$$
其中 $\hat{Y}(1)=\displaystyle\frac{1}{n_1}\sum_{i=1}^{n}Z_iY_i,\hat{Y}(0)=\displaystyle\frac{1}{n_0}\sum_{i=1}^{n}(1-Z_i)Y_i$.

:::

我们可以进一步给出均值差异的性质. 首先可以计算其期望和方差如下
$$
E(\hat{\tau})=0
$$
$$
\mathrm{Var}(\tau)=\frac{n}{n_1n_0}s^2
$$
其中 $s^2=\displaystyle\frac{1}{n-1}\sum_{i=1}^n(Y_i-\bar{Y})^2,\bar{Y}=\frac{1}{n}\sum_{i=1}^nY_i$.
进一步地，在一定条件下，当 $n\to\infty$ 时，均值差异服从中心极限定理，即
$$
\frac{\hat{\tau}}{\displaystyle\sqrt{\frac{n}{n_1n_0}s^2}}\to \mathrm{N}(0,1)
$$
又因为在强原假设下 $s^2$ 是固定的，这就意味着当 $n$ 充分大时，我们可以用正态分布来计算 $p_\text{FRT}$.

与此同时，由于我们可以依照是否接受处理将被试个体分为处理组和对照组，所以强原假设还可以被看成一个两总体检验均值差异的问题. 因此我们也有
