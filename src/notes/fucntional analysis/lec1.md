---
title: "第一讲 线性空间：定义、例子与线性张成"
category:
  - 泛函分析
tag:
  - 学习
  - 数学
date: 2025-09-13
order: 1
footer: false
---

（本文为英文版笔记借助AI翻译得到，点击[这里](/src/en/notes/fucntional%20analysis/lecture1.md)查阅英文笔记）

## 线性空间

### 定义

::: info 定义 1 (线性空间)

$X$ 是一个在域 $\mathbb{K}$ (通常是 $\mathbb{R}$ 或 $\mathbb{C}$) 上的**线性空间**，如果 $X$ 是一个集合，其上定义了 $+$ (加法) 和 $\cdot$ (数乘) 两种运算，且满足以下性质。

1. $+$ (加法)：对于 $x,y,z\in X$，
   1. (封闭性) $x+y\in X$。
   2. (交换律) $x+y=y+x$。
   3. (结合律) $(x+y)+z=x+(y+z)$。
   4. $X$ 关于加法 $+$ 构成一个群。
      1. 存在一个单位元 $0\in X$，使得 $0+x=x+0=x$。
      2. 对于任意 $x\in X$，存在 $(-x)\in X$ 使得 $(-x)+x=x+(-x)=0$。
2. $\cdot$ (数乘)：对于 $x\in X,\alpha,\beta\in\mathbb{K}$，
   1. (结合律) $(\alpha\beta)\cdot x=\alpha\cdot(\beta \cdot x)$。
   2. (分配律) $(\alpha+\beta)\cdot x=\alpha\cdot x+\beta\cdot x,\alpha\cdot(x+y)=\alpha\cdot x+\alpha\cdot y$。
   3. 域 $\mathbb{K}$ 中存在单位元 $1$，使得 $1\cdot x=x$。
   - 为了方便，我们将 $\alpha\cdot x$ 记为 $\alpha x$。

:::

线性空间具有一些基本性质。

::: tip 线性空间的性质

1. 对于 $0\in \mathbb{K}$（即 $\mathbb{K}$ 的加法单位元）和 $x\in X$，我们有 $0 x=0\in X$。
2. $\forall x\in X$，我们有 $(-1)x=-x$，即 $x$ 的加法逆元。

:::

::: details 性质的证明

1. $0x=(0+0)x=0x+0x\Rightarrow 0x=0\in X$。
2. $0=0x=(1+(-1)) x=1x+(-1)x=x+(-1)x$，这意味着 $(-1)x=-x$。

:::

以下是一些关于线性空间的例子。

::: tip 例子

1. 对于 $K=\mathbb{R}$，$X=\{ p(t): p \text{ 是关于 } t\in \mathbb{R} \text{ 的多项式}\}$ 是一个线性空间。
2. $X_{n}=\{ p(t_{1},\ldots,t_{n}): p \text{ 是关于 } (t_{1},\ldots,t_{n})\in \mathbb{R}^n \text{ 的多项式}\}$ 也是一个线性空间。
3. $C(\mathbb{R}^n)$，即定义在 $\mathbb{R}^n$ 上的所有连续函数的空间，是一个线性空间。
4. $S=\{ (a_{j})_{j>1}:(a_{j})=(a_{1},a_{2},\ldots),a_{j}\in K\}$，即 $K$ 上所有序列构成的空间，是一个线性空间。
5. 考虑测度空间 $(\Omega, \mathcal{F}, \mu)$，则

$$
X=L_{p}=\left\{  f:\Omega\to \mathbb{R}:\int_{\Omega}|f|^p\mathrm{d}\mu<\infty  \right\}
$$

是一个线性空间。

:::

### 线性子空间

::: info 定义 2 (线性子空间)

$Y\subset X$ 是 $X$ 的一个**线性子空间**，如果 $\forall x,y\in Y,\alpha \in \mathbb{K}, \alpha x+y\in Y$。

:::

该定义意味着线性子空间对于原线性空间中的加法和数乘运算是封闭的。

::: tip 线性子空间的性质

1. $Y=\{0\}$ 是一个线性子空间。
2. 如果 $Y_1,Y_2$ 是 $X$ 的线性子空间，则 $Y_1+Y_2=\{y_1+y_2:y_1\in Y_1,y_2\in Y_2\}$ 也是 $X$ 的线性子空间。
3. 如果 $\{Y_\theta:\theta\in I\}$ 是一族线性子空间，那么

$$
Y=\bigcap_{\theta\in I}Y_\theta
$$

也是一个线性子空间。

:::

::: details 性质的证明

1. $\forall \alpha\in\mathbb{K}, \alpha 0+0=0\in Y$。
2. $\forall x_1,x_2\in Y_1+Y_2,\exist y_{11},y_{21}\in Y_1, y_{12},y_{22}\in Y_2$ 使得 $x_1=y_{11}+y_{12},x_2=y_{21}+y_{22}$。
所以 $\forall \alpha\in\mathbb{K}$，我们有 $\alpha y_{11}+y_{21}\in Y_1,\alpha y_{12}+y_{22}\in Y_2$，这意味着

$$
\alpha x_1+x_2=\alpha (y_{11}+y_{12})+ (y_{21}+y_{22})=(\alpha y_{11}+y_{21})+(\alpha y_{12}+y_{22})\in Y_1+Y_2
$$

3. $\forall x,y\in Y$，我们有 $\forall \theta\in I, x,y\in Y_\theta$。因为 $Y_\theta$ 是一个线性子空间，所以 $\forall \alpha\in\mathbb{K}$，

$$
\alpha x+y\in Y_\theta, \forall \theta\in I
$$

这意味着 $\alpha x+y\in \displaystyle\bigcap_{\theta\in I}Y_\theta=Y$。因此 $Y$ 也是一个线性子空间。

- 注意：此证明不要求 $I$ 是可数集。

:::

为了介绍线性子空间的第四个性质，我们必须先引入全序的概念。

::: info 定义 3 (全序的)

一个集合族 $\{Y_\theta:\theta\in I\}$ 是**全序的**，如果 $\forall \theta_1,\theta_2\in I$，我们有 $Y_{\theta_1}\subset Y_{\theta_2}$ 或 $Y_{\theta_2}\subset Y_{\theta_1}$。

:::

::: tip 线性子空间的性质

4. 如果一族线性子空间 $\{Y_\theta: \theta\in I\}$ 是全序的，那么

$$
Y=\bigcup_{\theta\in I}Y_\theta
$$

也是 $X$ 的一个线性子空间。

:::

::: details 性质的证明

4. $\forall x,y\in Y,\exist \theta_x,\theta_y$ 使得 $x\in Y_{\theta_x},y\in Y_{\theta_y}$。因为该集合族是全序的，我们不失一般性地假设 $Y_{\theta_x}\subset Y_{\theta_y}$。这意味着 $x, y\in Y_{\theta_y}$。所以 $\forall \alpha\in\mathbb{K}$，我们有 $\alpha x+y\in Y_{\theta_y}\subset Y$，这表明 Y 是一个线性子空间。

:::

### 线性张成

::: info 定义 4 (线性张成)

对于 $S\subset X$，考虑由所有包含 $S$ 的线性子空间 $Y_\theta$ 构成的集合族 $\{Y_\theta: \theta\in I\}$。我们称

$$
\mathrm{LS}(S)=\bigcap_{\theta\in I}Y_\theta
$$

为 S 的**线性张成**。

:::

以下关于线性张成的性质将给出 $\mathrm{LS}(S)$ 的不同描述。第一个性质显示了 $\mathrm{LS}(S)$ 的最小性。

::: tip 线性张成的性质 1
S 的线性张成是包含 S 的最小线性子空间。
:::

::: details 性质 1 的证明
一方面，$\mathrm{LS}(S)$ 是一个线性子空间，因为它是线性子空间的交集。

另一方面，对于任何包含 $S$ 的线性子空间 $Y$，我们有 $Y\in \{Y_\theta: \theta\in I\}$。
所以 $\displaystyle\mathrm{LS}(S)=\bigcap_{\theta\in I}Y_\theta\subset Y$，这正是 $\mathrm{LS}(S)$ 的最小性。
:::

第二个性质描述了 $\mathrm{LS}(S)$ 的元素构成。

::: tip 线性张成的性质 2

$$
\mathrm{LS}(S)=\{\sum_{j=1}^n a_jx_j: a_j\in\mathbb{K}, x_j\in S, n\in\mathbb{N^*}\}
$$

这意味着 $\mathrm{LS}(S)$ 由 $S$ 中元素的所有（有限）线性组合构成。

:::

::: details 性质 2 的证明

我们分两步证明这个性质。

(1) 我们需要证明 $Z=\displaystyle\{\sum_{j=1}^n a_jx_j: a_j\in\mathbb{K}, x_j\in S, n\in\mathbb{N^*}\}$ 是一个线性子空间。根据最小性，我们便有 $Z\supset \mathrm{LS}(S)$。

$\forall x,y\in Z, \exist x_1,\ldots x_n, y_1,\ldots, y_m\in S,\beta_1,\ldots,\beta_n,\gamma_1,\ldots,\gamma_m\in\mathbb{K}$ 使得

$$
x=\sum_{i=1}^n \beta_i x_i, y=\sum_{j=1}^m \gamma_j y_j
$$

所以 $\forall \alpha\in\mathbb{K}, \alpha x+y=\displaystyle\sum_{i=1}^n \alpha\beta_i x_i+\sum_{j=1}^m \gamma_j y_j$ 也是 $S$ 中元素的线性组合，这意味着 $\alpha x+y\in Z$。所以 $Z$ 是一个线性子空间。

(2) 接下来我们需证明 $Z\subset \mathrm{LS}(S)$。我们使用数学归纳法来证明。

当 $n=1$ 时，$\alpha_1x_1\in Z$ 且 $\alpha_1x_1=\alpha_1x_1+0\in \mathrm{LS}(S)$。

假设当 $n=k$ 时，$\displaystyle\sum_{j=1}^k a_jx_j\in \mathrm{LS}(S)$。我们考虑 $n=k+1$ 的情况。如果 $a_{k+1}=0$，则 $\displaystyle\sum_{j=1}^{k+1} a_jx_j=\sum_{j=1}^{k} a_jx_j\in\mathrm{LS}(S)$。否则，我们有

$$
\sum_{j=1}^{k+1} a_jx_j=\sum_{j=1}^k a_jx_j+a_{k+1}x_{k+1}\in\mathrm{LS}(S)
$$
因为归纳假设的第一项在 $\mathrm{LS}(S)$ 中，第二项也在 $\mathrm{LS}(S)$ 中，而 $\mathrm{LS}(S)$ 是线性子空间，所以它们的和也在其中。

所以 $\forall n\in\mathbb{N^*}$，我们有 $\displaystyle\sum_{j=1}^n a_jx_j\in\mathrm{LS}(S)$。这意味着 $Z\subset \mathrm{LS}(S)$。

综上所述，我们有 $Z\supset \mathrm{LS}(S)$ 和 $Z\subset \mathrm{LS}(S)$，这意味着 $Z=\mathrm{LS}(S)$。
:::