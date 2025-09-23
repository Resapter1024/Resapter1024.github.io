---
title: "第二讲 线性空间：商空间与凸集"
category:
  - 泛函分析
tag:
  - 学习
  - 数学
date: 2025-09-13
order: 2
footer: false
---

（本文为英文版笔记借助AI翻译得到，点击[这里](/en/notes/fucntional%20analysis/lecture2.md)查阅英文笔记）

## 商空间

为了讨论商空间，我们首先需要在一个线性空间上引入一个等价关系。

::: info 定义 1 (关系)

设 $X$ 是一个线性空间，$Y\subset X$ 是一个线性子空间，且 $x,y\in X$。称 $x$ 与 $y$ 有关系，当且仅当 $x-y\in Y$，记为 $x\sim Y$。

:::

此关系是一个等价关系。

::: details 等价关系的证明

1. $x-x=0\in Y\Rightarrow x\sim x$。（自反性）
2. $x\sim y\Leftrightarrow x-y\in Y\Leftrightarrow y-x\in Y\Leftrightarrow y\sim x$。（对称性）
3. $x\sim y\Leftrightarrow x-y\in Y$， $y\sim z\Leftrightarrow y-z\in Y$，所以 $x-z=x-y+y-z\in Y,\Rightarrow x\sim z$。（传递性）
因此，该关系是一个等价关系。

:::

我们通常用符号 $[x]=\{y\in X:y\sim x\}$ 来表示 $x$ 的等价类，它是一个包含 $X$ 中所有与 $x$ 有关系的元素的集合。给定 $X$ 和 $Y$，所有的等价类构成一个新的空间，定义如下。

::: info 定义 2 (商空间)

$X$ 模 $Y$ 的**商空间**是 $\{[x]: x\in X\}$，记作 $X/Y$。

:::

我们称商空间为一个“空间”，因此我们定义一种特殊的加法和数乘运算，使其成为一个线性空间。

::: info 定义 3 (商空间上的加法与数乘)

1. 对于 $[x], [y]\in X/Y$，任取代表元 $x_1\in [x],y_1\in [y]$。我们定义加法为 $[x]+[y]=[x_1+y_1]$。
2. 对于 $[x]\in X/Y$ 和 $\alpha\in\mathbb{K}$，任取代表元 $x_1\in [x]$，我们定义数乘为 $\alpha\cdot[x]=[\alpha x_1]$。

::: details 良定义性（well-definedness）的证明

1. 首先，$[x]$ 和 $[y]$ 显然不是空集。我们必须检验该加法定义不依赖于代表元的选取。考虑 $x_1,x_2\in[x], y_1,y_2\in[y]$，我们有
    $$
    x_1-x,x_2-x, y_1-y,y_2-y\in Y
    $$
    因为 $Y$ 是一个线性子空间，我们有
    $$
    x_2-x_1, y_2-y_1\in Y \Rightarrow (x_2+y_2)-(x_1+y_1)\in Y
    $$
    这意味着 $x_1+y_1\sim x_2+y_2$。对于任意 $z\in [x_1+y_1]$，我们有 $z\sim x_1+y_1$，由传递性可得 $z\sim x_2+y_2$，从而 $z\in [x_2+y_2]$。这表明 $[x_1+y_1]\subset [x_2+y_2]$。同理可得 $[x_1+y_1]\supset [x_2+y_2]$。因此 $[x_1+y_1]=[x_2+y_2]$，唯一性得证。
2. 通过同样的论证，我们可以证明数乘运算也是良定义的。

:::

::: tip 注记

我认为该定义可以表述得更简洁。

1. $[x]+[y]=[x+y]$;
2. $\alpha\cdot[x]=[\alpha x]$

这是成立的，因为 $x$ 本身就是 $[x]$ 的一个代表元（即 $x\in[x]$）。

:::

## 线性映射

::: info 定义 4 (线性映射)

对于同一数域 $\mathbb{K}$ 上的两个线性空间 $X$ 和 $X^*$，$T:X\to X^*$ 是一个**线性映射**，如果

1. $T(x+y)=T(x)+T(y)$;
2. $T(\alpha x)=\alpha T(x)$。

:::

::: info 定义 5 (同构)

如果存在一个双射的线性映射 $T:X\to X^*$，则称两个线性空间 $X$ 和 $X^*$ 是**同构的**。

:::

线性映射有如下两个重要性质。

::: tip 线性映射的性质

1. 设 $Y$ 是 $X$ 的一个线性子空间，$T$ 是一个从 $X$ 到 $X^*$ 的线性映射。则 $T(Y)={T(y):y\in Y}$ 也是 $X^*$ 的一个线性子空间。
2. 设 $Y^*$ 是 $X^*$ 的一个线性子空间。$Y^*$ 的原像，记作 $T^{-1}(Y^*)=\{x\in X:T(x)\in Y^*\}$，也是 $X$ 的一个线性子空间。

::: details 性质的证明

1. $\forall z_1,z_2\in T(Y),\exist y_1,y_2$ s.t. $T(y_1)=z_1,T(y_2)=z_2$。所以 $\forall\alpha\in\mathbb{K}, \alpha z_1+z_2=\alpha T(y_1)+T(y_2)=T(\alpha y_1+y_2)\in T(Y)$，这证明了 $T(Y)$ 是一个线性子空间。
2. $\forall x_1,x_2\in T^{-1}(Y^*), y_1=T(x_1),y_2=T(x_2)\in Y^*$。所以 $\forall\alpha\in\mathbb{K}, T(\alpha x_1+x_2)=\alpha T(x_1)+T(x_2)=\alpha y_1+y_2\in Y^*$，即 $\alpha x_1+x_2\in T^{-1}(Y^*)$。所以 $T^{-1}(Y^*)$ 是一个线性子空间。

:::

### 凸集

#### 定义与性质

::: info 定义 6 (凸集)

称一个子集 $V\subset X$ 是**凸的**，如果 $\forall x, y\in V$ 和 $\alpha\in[0,1]$，都有 $\alpha x+(1-\alpha)y\in V$。

当我们讨论凸集时，我们通常考虑 X 是定义在 $\mathbb{R}$ 上的线性空间。

:::

<div id="thm-1">

::: tip 定理 1 (凸组合)

对于一个凸集 $V$，设 $x_1, \dots, x_n \in V$，$\alpha_1, \dots, \alpha_n \in [0, 1]$ 且 $\displaystyle\sum_{i=1}^n \alpha_i = 1$，则
$$
\sum_{i=1}^n \alpha_i x_i \in V
$$

该和式称为 $x_1, \dots, x_n$ 的一个**凸组合**。

::: details 定理 1 的证明

当 $n=1,2$ 时，结论是显然的。

假设当 $n=k$ 时，$\displaystyle\sum_{i=1}^k \alpha_ix_i\in V$ 成立。我们来考虑 $n=k+1$ 的情况。如果 $\alpha_{k+1}=1$，则该凸组合就是 $x_{k+1}\in V$。否则，我们有 $\alpha_1+\ldots+\alpha_k\neq 0$。这意味着
$$
\begin{align*}
    \sum_{i=1}^{k+1} \alpha_ix_i &=\sum_{i=1}^k \alpha_i x_i+\alpha_{k+1}x_{k+1}\\
    &= (\alpha_1+\ldots+\alpha_k)\left(\sum_{i=1}^k \frac{\alpha_i}{\alpha_1+\ldots+\alpha_k} x_i\right)+\alpha_{k+1}x_{k+1}
\end{align*}
$$
根据归纳假设，我们有 $\displaystyle\left(\sum_{i=1}^k \frac{\alpha_i}{\alpha_1+\ldots+\alpha_k} x_i\right)\in V$。并且 $(\alpha_1+\ldots+\alpha_k)+\alpha_{k+1}=1$。因此，根据凸集的定义，$\displaystyle\sum_{i=1}^{k+1} \alpha_ix_i\in V$。

根据数学归纳法，定理 1 得证。
:::

</div>

凸集有许多优良的性质。

::: tip 凸集的性质

1. 如果 $Y$ 是一个线性子空间，那么 $Y$ 是凸的。
2. 设 $Y_1,Y_2$ 是凸集，则 $Y_1+Y_2$ 也是凸的。
3. 设 $\{V_\theta:\theta\in I\}$ 是一族凸集，则
    $$
    V=\bigcap_{\theta\in I}V_\theta
    $$
    也是凸的。
4. 设 $\{V_\theta:\theta\in I\}$ 是一族全序的凸集，则
    $$
    V=\bigcup_{\theta\in I}V_\theta
    $$
    也是凸的。

::: details 性质 1-4 的证明

1. 这是显然的，因为 $\forall x_1,x_2\in Y,\alpha\in[0,1],\alpha x_1+(1-\alpha)x_2\in Y$。
2. 假设 $z_1=y_{11}+y_{12},z_2=y_{21}+y_{22}\in Y_1+Y_2$，其中 $y_{11},y_{21}\in Y_1,y_{12},y_{22}\in Y_2$。$\forall \alpha\in[0,1]$，我们有
    $$
    \begin{align*}
        \alpha z_1+(1-\alpha)z_2 &=\alpha (y_{11}+y_{12})+(1-\alpha)(y_{21}+y_{22})\\
        &=(\alpha y_{11}+(1-\alpha)y_{21})+(\alpha y_{12}+(1-\alpha)y_{22})\in Y_1+Y_2
    \end{align*}
    $$
    所以 $Y_1+Y_2$ 是凸的。
3. $\forall \alpha\in[0,1]$ 和 $x,y\in V$，我们有 $\forall \theta\in I, x,y\in V_\theta$。根据凸集的定义，
    $$
    \alpha x+(1-\alpha)y\in V_\theta, \forall \theta\in I
    $$
    所以 $\alpha x+(1-\alpha)y\in V$，这意味着 $V$ 是凸的。
4. $\forall \alpha\in[0,1]$ 和 $x,y\in V$，存在 $\theta_x,\theta_y$ 使得 $x\in V_{\theta_x}, y\in V_{\theta_y}$。因为该集族是全序的，我们不失一般性地假设 $V_{\theta_x}\subset V_{\theta_y}$。所以 $x,y\in V_{\theta_y}$。这表明
    $$
    \alpha x+(1-\alpha)y\in V_{\theta_y}\subset V
    $$
    这意味着 $V$ 是凸的。

:::

上述凸集的性质及其证明表明，凸集与线性子空间有许多相似之处。

::: tip 线性映射与凸集

5. 设 $V\subset X$ 是凸集，$T:X\to Y$ 是一个线性映射。则 $T(V)$ 也是凸的。
   - 该性质意味着线性映射将凸集映为凸集。
6. 设 $V\subset Y$ 是凸集，$T:X\to Y$ 是一个线性映射。则 $T^{-1}(V)$ 也是凸的。

::: details 性质 5-6 的证明

1. $\forall \alpha\in[0,1]$ 和 $z_x,z_y\in T(V)$，$\exist x,y\in V$ s.t. $z_x=T(x),z_y=T(y)$。所以 $\alpha z_x+(1-\alpha) z_y=\alpha T(x)+(1-\alpha) T(y)=T(\alpha x+(1-\alpha)y)\in T(V)$，这意味着 $T(V)$ 是凸的。
2. $\forall \alpha\in[0,1]$ 和 $x,y\in T^{-1}(V)$，$\exist z_x, z_y\in V$ s.t. $z_x=T(x),z_y=T(y)$。所以 $\alpha z_x+(1-\alpha)z_y=\alpha T(x)+(1-\alpha)T(y)=T(\alpha x+(1-\alpha)y)\in V$，这意味着 $\alpha x+(1-\alpha)y\in T^{-1}(V)$。

:::

#### 凸包

::: info 定义 7 (凸包)

设 $S\subset X$，并设 $\{V_\theta:\theta\in I\}$ 是包含 $S$ 的所有凸集构成的集族。我们称
$$
\mathrm{CV}(S)=\bigcap_{\theta\in I}V_\theta
$$
是 S 的**凸包**。

:::

注意到集族 $\{V_\theta:\theta\in I\}$ 非空，因为 $X$ 本身就是一个包含 $S$ 的凸集（作为线性空间）。我们可以看到这与线性张成的概念非常相似。

显然，$\mathrm{CV}(S)$ 是一个凸集，因为它是凸集的交集。

::: tip 凸包的性质 1

$\mathrm{CV}(S)$ 是包含 $S$ 的最小凸集。

::: details 性质 1 的证明

一方面，$\mathrm{CV}(S)$ 是一个凸集。

另一方面，对于任何包含 $S$ 的凸集 $V$，我们有 $V\in \{V_\theta: \theta\in I\}$。
所以 $\displaystyle\mathrm{CV}(S)=\bigcap_{\theta\in I}V_\theta\subset V$，这即是 $\mathrm{CV}(S)$ 的最小性。

:::

第二个性质描述了 $\mathrm{CV}(S)$ 的元素构成。

::: tip 凸包的性质 2

$$
\mathrm{CV}(S)=\{\sum_{j=1}^n a_jx_j:a_j\ge 0, \sum_{j=1}^n a_j=1, x_j\in S, n\in\mathbb{N^*}\}
$$

这意味着 $\mathrm{CV}(S)$ 是由 $S$ 中元素的所有凸组合构成的集合。

::: details 性质 2 的证明

我们分两步证明这个性质。

(1) 设 $Z=\{\sum_{j=1}^n a_jx_j: \sum_{j=1}^n a_j=1, x_j\in S, n\in\mathbb{N^*}\}$。如果 $V$ 是一个包含 $S$ 的凸集，[我们已经证明](#thm-1) $V$ 中元素的凸组合仍在 $V$ 中。这些凸组合自然也包括 $S$ 中元素的凸组合。所以 $Z\subset V$。令 $V=\mathrm{CV}(S)$，我们有 $Z\subset \mathrm{CV}(S)$。

(2) 显然 $Z$ 是一个凸集。因此根据 $\mathrm{CV}(S)$ 的最小性，可证 $Z\supset \mathrm{CV}(S)$。

综上，我们有 $Z\supset \mathrm{CV}(S)$ 和 $Z\subset \mathrm{CV}(S)$，这意味着 $Z=\mathrm{CV}(S)$。

:::