---
title: "第四讲 赋范线性空间的完备化"
category:
  - 泛函分析
tag:
  - 学习
  - 数学
date: 2025-09-17
order: 4
footer: false
---

（本文为英文版笔记借助AI翻译得到，点击[这里](/en/notes/fucntional%20analysis/lecture4.md)查阅英文笔记）

## 不完备空间

Banach 空间是一个完备的赋范线性空间。然而，我们感兴趣的许多空间却是不完备的。这里有一个例子。

::: tip 不完备赋范线性空间的例子

设 $X=C(\mathbb{R})$ 为定义在 $\mathbb{R}$ 上的所有连续函数构成的空间。考虑其上的 $L_1$ 范数，定义为

$$
\|f\|_1=\int_\mathbb{R} |f|\mathrm{d}x
$$

现在我们定义如下的函数序列 $\{f_n\}$。

$$
f_n(x)=\left\{\begin{matrix}
  0 & x\le 0 \\
  nx & 0<x\le\dfrac{1}{n}\\
  1 & x>\dfrac{1}{n}
\end{matrix}\right.
$$

首先，我们可以证明该序列是一个 Cauchy 序列。我们需要证明 $\|f_m-f_n\|_1\to 0(m,n\to \infty)$。不失一般性，假设 $m>n$，则 $\dfrac{1}{m}<\dfrac{1}{n}$。所以

$$
\begin{align*}
\|f_m-f_n\|_1 &= \int_0^{1/m} (m-n)x dx + \int_{1/m}^{1/n} (1-nx) dx \\
&= \frac{m-n}{2m^2} + \left[x - \frac{n}{2}x^2\right]_{1/m}^{1/n} \\
&= \frac{m-n}{2m^2} + \left(\frac{1}{n} - \frac{1}{2n}\right) - \left(\frac{1}{m} - \frac{n}{2m^2}\right) \\
&= \frac{m-n+n}{2m^2} + \frac{1}{2n} - \frac{1}{m} = \frac{1}{2m} + \frac{1}{2n} - \frac{1}{m} \\
&= \frac{1}{2n} - \frac{1}{2m} = \frac{m-n}{2mn} \to 0
\end{align*}
$$

这表明该序列是一个 Cauchy 序列。然而，我们可以看到该序列将收敛于如下函数

$$
f(x)=\left\{\begin{matrix}
  0 & x\le 0 \\
  1 & x>0
\end{matrix}\right.
$$

显然 $f\notin C(\mathbb{R})$，这意味着 $C(\mathbb{R})$ 不是一个完备空间。

:::

从这个例子中我们可以看到，一个 Cauchy 序列可能不收敛的原因是空间太“小”了；也就是说，序列的极限（在一个更大的背景下）存在，但它不被包含在空间本身之内。因此，完备化一个空间意味着添加所有“缺失”的极限点，使其变得完备。

## 完备化赋范线性空间

### 通过商空间实现完备化

我们采用一种迂回的方式来完备化一个赋范线性空间 $X$。在此之前，我们需要引入一些辅助空间。

::: info 辅助空间的定义

1. 设 $Z=\{\mathbf{x}_j=\{x_j\}_{j\ge 1}: x_j\in X, \{x_j\}\ \text{是 Cauchy 序列}\}$ 为 $X$ 中所有 Cauchy 序列构成的集合。
2. 设 $Y=\{\mathbf{x}_j=\{x_j\}_{j\ge 1}: x_j\in X, x_j\to 0(j\to\infty)\}$ 为 $X$ 中所有收敛到 $0$ 的序列构成的集合。
3. 我们基于 $Y$ 在该空间中定义等价关系：$\{x_j\}\sim \{z_j\} \Leftrightarrow \{z_j-x_j\}\in Y\Leftrightarrow z_j-x_j\to 0(j\to\infty)$，所以 $[\mathbf{x}]=\{\{z_j\}_{j\ge 1}: z_j-x_j\to 0(j\to\infty)\}$。于是我们得到商空间 $\overline{X}=Z/Y=\{[\mathbf{x}]: \mathbf{x}\in Z\}$，即 $Z$ 模 $Y$ 的商空间。

显然，$Y\subset Z$ 是 $Z$ 的一个线性子空间。

:::

我们构造 $X_0=\{\{x,x,\ldots\}: x\in X\}$ 作为由 $X$ 中元素构成的常数序列的集合。这个集合实质上构成了从 $X$ 到 $Z$ 的一个嵌入。

首先，我们可以证明 $\overline{X}$ 是一个赋范线性空间。

::: info 定理 1 ($\overline{X}$ 上的范数)

对于 $\overline{X}=\{[\mathbf{x}]: \mathbf{x}\in Z\}$，我们定义

$$
\|[\mathbf{x}]\|=\lim_{j\to\infty}\|x_j\|
$$

作为该空间上的范数。

:::

::: details 定理 1 的证明

首先，我们需要证明该极限存在。

注意到 $\mathbf{x}=\{x_j\}_{j\ge 1}$ 是一个 Cauchy 序列。所以 $\forall \varepsilon>0, \exist N>0$ s.t. $\forall m,n>N, \|x_m-x_n\|<\varepsilon$。因此 $|\|x_m\|-\|x_n\||\le \|x_m-x_n\|<\varepsilon$，这意味着 $\{\|x_j\|\}$ 也是 $\mathbb{R}$ 中的一个 Cauchy 序列。而众所周知 $\mathbb{R}$ 是一个完备空间。所以 $\displaystyle\lim_{j\to\infty}\|x_j\|$ 存在。

然后我们必须证明该范数是良定义的，即范数不依赖于代表元的选取。具体来说，考虑两个序列 $\mathbf{x}, \mathbf{y}$ 使得 $[\mathbf{x}]=[\mathbf{y}]$。我们需要证明 $\displaystyle\lim_{j\to\infty}\|x_j\|=\lim_{j\to\infty}\|y_j\|$。根据 $\mathbf{x},\mathbf{y}$ 的定义，我们有 $\|x_j-y_j\|\to 0(j\to\infty)$。所以

$$
|\|y_j\|-\|x_j\|| \le \|y_j-x_j\|
$$

令 $j\to \infty$，我们立即得到 $\displaystyle\lim_{j\to\infty}\|x_j\|=\lim_{j\to\infty}\|y_j\|$。

最后，我们需要验证范数的三条性质。

1. 因为 $X$ 是一个赋范线性空间，$\forall x\in X, \|x\|\ge 0$。这意味着 $\displaystyle\|[\mathbf{x}]\|=\lim_{j\to\infty}\|x_j\|\ge 0$。如果 $\|[\mathbf{x}]\|=0$，则 $\lim_{j\to\infty}\|x_j\|=0$，这意味着 $x_j\to 0(j\to \infty)$。即 $\mathbf{x}\in Y$。所以 $[\mathbf{x}]=[\mathbf{0}]$。
2. $\forall \alpha\in\mathbb{K}, \|\alpha[\mathbf{x}]\|=\|[\alpha\mathbf{x}]\|=\displaystyle\lim_{j\to\infty}\|\alpha x_j\|=|\alpha|\lim_{j\to\infty}\|x_j\|=|\alpha|\|[\mathbf{x}]\|$。
3. $\|[\mathbf{x}]+[\mathbf{y}]\|=\|[\mathbf{x}+\mathbf{y}]\|=\displaystyle\lim_{j\to\infty}\|x_j+y_j\|\le \lim_{j\to\infty}(\|x_j\|+\|y_j\|)=\lim_{j\to\infty}\|x_j\|+\lim_{j\to\infty}\|y_j\|=\|[\mathbf{x}]\|+\|[\mathbf{y}]\|$。

综上所述，$\|[\mathbf{x}]\|$ 是 $\overline{X}$ 上的一个范数。

:::

::: tip 注意

实际上，我们引入空间 $Z/Y$ 的原因，是我们希望 $\|[\mathbf{x}]\|=\displaystyle\lim_{n\to\infty}\|x_j\|$ 是一个范数，而不是一开始就考虑 $Y$ 和 $Z/Y$ 的结构。只有在这种情况下，$\|[\mathbf{x}]\|=\displaystyle\lim_{n\to\infty}\|x_j\|$ 才能成为一个范数。

:::

::: tip 定理 2

$\overline{X}$ 是一个完备的赋范线性空间。

:::

::: details 定理 2 的证明

为证明 $\overline{X}$ 是完备的，我们考虑一个等价类的 Cauchy 序列 $\{[\mathbf{x}^n]\}$。我们需要证明 $\exist [\mathbf{x}]\in \overline{X}$ s.t. $[\mathbf{x}^n]\to [\mathbf{x}](n\to \infty)$。因为 $\{[\mathbf{x}^n]\}$ 是一个 Cauchy 序列，所以 $\forall \varepsilon>0,\exist N>0$ s.t. $\forall m,n>N, \|[\mathbf{x}^m]-[\mathbf{x}^n]\|\le \varepsilon$。这意味着

$$
\|[\mathbf{x}^m]-[\mathbf{x}^n]\|=\|[\mathbf{x}^m-\mathbf{x}^n]\|=\lim_{j\to\infty} \|x_j^m-x_j^n\|<\varepsilon \tag{1}
$$

**首先**，我们需要构造极限序列 $[\mathbf{x}]$。

由于 $\{[\mathbf{x}^n]\}$ 是 Cauchy 序列，对于每个固定的整数 $k\in\mathbb{N}^*$, 令 $\varepsilon_k=\dfrac{1}{2^{k}}, \exist n_k>0$ s.t.
$$
\forall m,n\ge n_k, \lim_{j\to\infty} \|x_j^m-x_j^n\|<\dfrac{1}{2^{k}}
$$
令 $n=n_k, m=n_{k+1}$。则 $\displaystyle\lim_{j\to\infty} \|x_j^{n_{k+1}}-x_j^{n_k}\|<\dfrac{1}{2^{k}}$。这意味着 $\exist j_k>0$ s.t. 
$$
\forall j\ge S_k, \|x_{j}^{n_{k+1}} - x_{j}^{n_k}\| < \frac{1}{2^k}
$$
不失一般性，我们假设 $\{n_k\}$ 和 $\{S_k\}$ 是一个严格递增序列。

又知 $\forall n\in \mathbb{N}^*$, $\mathbf{x}^{n}$ 本身也是一个 Cauchy 序列。所以 $\exist R_k>0$ s.t.
$$
\forall i,j>R_k, \|x_i^{n_k}-x_j^{n_k}\|<\dfrac{1}{2^{k}}
$$
综合以上两个结果，令 $T_k=\max(S_k,R_k)$。同样，我们可以假设 $\{T_k\}$ 是严格递增的。令 $j_k=T_k+1$，我们定义 $x_k=x_{j_k}^{n_k}$ 为一个**对角序列**。可以证明 $\mathbf{x}=\{x_k\}_{k\ge 1}$ 将是我们要找的收敛序列。显然 $\mathbf{x}$ 是一个 Cauchy 序列，因为对于 $k<m$
$$
\begin{align*}
  \|x_m-x_k\| & = \|x_{j_m}^{n_m}-x_{j_k}^{n_k}\| \\
  & \le \|x_{j_m}^{n_m}-x_{j_m}^{n_{m-1}}\|+\|x_{j_m}^{n_{m-1}}-x_{j_m}^{n_{m-2}}\|+\ldots+\|x_{j_m}^{n_{k+1}}-x_{j_m}^{n_k}\|+\|x_{j_m}^{n_k}-x_{j_k}^{n_k}\| \\
  & \le \sum_{i=k}^{m-1}\frac{1}{2^i}+\dfrac{1}{2^{k}} \\
  & \le \frac{3}{2^{k}}\to 0
\end{align*}
$$
构造完成。

**其次**，我们需要证明 $[\mathbf{x}]$ 是 $\{[\mathbf{x}^n]\}$ 的极限。这等价于证明 $\displaystyle\lim_{n\to\infty}\|[\mathbf{x}^n]-[\mathbf{x}]\|=0$。

我们将证明子序列 $\{[\mathbf{x}^{n_k}]\}$ 收敛于 $[\mathbf{x}]$。由于 $\{[\mathbf{x}^n]\}$ 是 Cauchy 序列，这便意味着整个序列都收敛于 $[\mathbf{x}]$。我们的目标是证明 $\displaystyle\lim_{k\to\infty} \|[\mathbf{x}^{n_k}] - [\mathbf{x}]\| = 0$。

对于任意 $m > k$，我们使用三角不等式：
$$
\|[\mathbf{x}^{n_k}] - [\mathbf{x}]\| \le \|[\mathbf{x}^{n_k}] - [\mathbf{x}^{n_m}]\| + \|[\mathbf{x}^{n_m}] - [\mathbf{x}]\|
$$

1. **第一项的界：** 根据子序列 $\{n_k\}$ 的构造，由于 $m > k$，我们有 $n_m \ge n_k$。因此：
    $$
    \|[\mathbf{x}^{n_k}] - [\mathbf{x}^{n_m}]\| < \frac{1}{2^k}
    $$
2. **第二项的界：** 我们估计 $\|[\mathbf{x}^{n_m}] - [\mathbf{x}]\| = \lim_{p\to\infty} \|x_p^{n_m} - x_p\|$。对于任意 $p > m$，我们有：
    $$
    \|x_p^{n_m} - x_p\| = \|x_{j_p}^{n_m} - x_{j_p}^{n_p}\| \le \sum_{i=m}^{p-1} \|x_{j_p}^{n_{i+1}} - x_{j_p}^{n_i}\| < \sum_{i=m}^{p-1} \frac{1}{2^i} < \frac{1}{2^{m-1}}
    $$
    令 $p\to\infty$ 取极限，我们得到：
    $$
    \|[\mathbf{x}^{n_m}] - [\mathbf{x}]\| \le \frac{1}{2^{m-1}}
    $$

合并以上结果，对于任意 $m > k$，我们有：
$$
\|[\mathbf{x}^{n_k}] - [\mathbf{x}]\| < \frac{1}{2^k} + \frac{1}{2^{m-1}}
$$
由于不等式左侧与 $m$ 无关，我们可以令 $m \to \infty$，得到：
$$
\|[\mathbf{x}^{n_k}] - [\mathbf{x}]\| \le \frac{1}{2^k}
$$
当 $k \to \infty$ 时，不等式右侧趋于 0。这证明了子序列收敛，因此整个序列 $\{[\mathbf{x}^n]\}$ 都收敛于 $[\mathbf{x}]$。证明完毕。
:::

### 原始空间的完备化

$Z,Y,X_0$ 和 $\overline{X}$ 的结构因以下两个观察而显得十分精妙。

::: tip 观察

1. 考虑 $\mathbf{x}=(x,x,\ldots)\in X_0$，我们有该序列的范数 $\|[\mathbf{x}]\|=\displaystyle\lim_{n\to\infty} \|x\|=\|x\|$ 等于它在 $X$ 中原像的范数。这意味着该嵌入保留了原始空间 $X$ 的拓扑结构。
2. $\overline{X_0/Y}=\overline{X}$。这意味着 $X_0/Y$ 在 $\overline{X}$ 中是稠密的。

:::

::: details 观察 2 的证明

实际上，我们有 $X_0\subset Z$，所以 $X_0/Y\subset Z/Y=\overline{X}$。于是自然有 $\overline{X_0/Y}\subset \overline{X}$。我们只需证明 $\overline{X}\subset \overline{X_0/Y}$。

考虑 $[\mathbf{x}]\in\overline{X}$，其中 $\mathbf{x}=\{x_1,x_2,\ldots\}$。对于每个 $p\in\mathbb{N}^*$，定义一个常数序列 $\mathbf{z}^p=\{x_p,x_p,\ldots\}$。则 $[\mathbf{z}^p]\in X_0/Y$。我们证明等价类的序列 $\{[\mathbf{z}^p]\}_{p\ge 1}$ 收敛于 $[\mathbf{x}]$：

$$
\lim_{p\to\infty} \|[\mathbf{z}^p]-[\mathbf{x}]\|=\lim_{p\to\infty}\lim_{j\to\infty} \|z_j^p-x_j\|=\lim_{p\to\infty}\lim_{j\to\infty} \|x_p-x_j\|=0
$$

这表明 $[\mathbf{x}]\in\overline{X_0/Y}$。

:::

最终，我们得到了一个作为 $X$ 的完备化的 Banach 空间 $\overline{X}=Z/Y$。但这个抽象过程的真正含义是什么？我们用一个例子来说明为什么引入商空间的过程能作为原始空间的完备化。

::: tip $\mathbb{Q}$ 的完备化

众所周知，有理数空间 $\mathbb{Q}$ 是不完备的。设 $Z_\mathbb{Q}$ 为 $\mathbb{Q}$ 中所有 Cauchy 序列的集合，$Y_\mathbb{Q}$ 为 $\mathbb{Q}$ 中所有收敛到 0 的序列的集合。根据定理 2，$\overline{\mathbb{Q}}=Z_\mathbb{Q}/Y_\mathbb{Q}$ 是 $\mathbb{Q}$ 的完备化。

$\overline{\mathbb{Q}}$ 中的每个元素 $[\mathbf{x}]$ 可分为以下两种情况：

1. 等价类 $[\mathbf{x}]$ 包含一个由某个 $y \in \mathbb{Q}$ 构成的常数序列 $\{y,y,\ldots\}$。这个类对应于有理数 $y$ 本身。我们将 $[\{y,y,\ldots\}]$ 等同于 $y$。
2. 等价类 $[\mathbf{x}]$ 不包含任何常数序列。这个类定义了一个新的、无理的数。例如，数 $\sqrt{2}$ 被定义为包含序列 $\{1, 1.4, 1.414, \ldots\}$ 的等价类。

这个新构造的完备空间 $Z_\mathbb{Q}/Y_\mathbb{Q}$，正是我们所称的实数集 $\mathbb{R}$。
:::

这个例子阐明了通用策略。赋范线性空间 $X$ 的完备化是一个形式上“添加”缺失极限点的过程。这些新点被定义为 Cauchy 序列的等价类。这个构造巧妙地实现了两个目标：它将原始空间 $X$ 嵌入一个更大的空间而不改变其结构，并保证了这个新空间是完备的。