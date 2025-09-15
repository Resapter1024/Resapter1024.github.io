---
title: "第三讲 赋范线性空间：定义与基本性质"
category:
  - 泛函分析
tag:
  - 学习
  - 数学
date: 2025-09-15
order: 3
footer: false
---

（本文为英文版笔记借助AI翻译得到，点击[这里](/en/notes/fucntional%20analysis/lecture3.md)查阅英文笔记）

## 范数、距离与收敛

::: info 定义 1 (范数)

考虑一个域 $\mathbb{K}$ 上的线性空间 $X$。$X$ 上的**范数**是一个函数 $N: X\to [0,+\infty)$，满足以下三条性质。

1. $N(x)\ge 0, \forall x\in X$ 且 $N(x)=0\Leftrightarrow$ $x=0$。
2. $\forall \alpha\in\mathbb{K}$ 和 $x\in X$, $N(\alpha x)=|\alpha| N(x)$。
3. $\forall x,y \in X, N(x+y)\le N(x)+N(y)$。

我们记 $N(x)$ 为 $\|x\|$。

一个赋有范数的线性空间称为**赋范线性空间**。

:::

::: tip 注意

并非每个线性空间上都能定义范数。这里有一个实分析中的例子。我们考虑

$$
L_p=\left\{f:\int |f(x)|^p\mathrm{d}x<\infty\right\}
$$

当 $p\ge1$ 时，我们可以定义范数为 $\|f\|_p=\left(\displaystyle\int |f(x)|^p\mathrm{d}x\right)^\frac{1}{p}$。然而，当 $p\in (0,1)$ 时，上述范数不满足三角不等式。事实上，可以证明对于 $p\in (0,1)$，不存在任何满足范数三条性质的函数 $f: X \to [0, +\infty)$。

如果我们放宽 $\|\alpha x\|=|\alpha|\|x\|$ 这条性质，

$$
\|f\|_p=\int |f(x)|^p\mathrm{d}x
$$

可以满足三角不等式。该函数虽然不是范数，但可用于定义一个度量，从而使该空间成为一个 **Fréchet 空间 (Fréchet space)**。

:::

直观上，线性空间中的范数类似于 $\mathbb{R}$ 或 $\mathbb{C}$ 中的“绝对值”或“模”，表示元素 $x$ 到 $0$ 的距离。因此我们有两个观察。

::: tip 观察

1. $\forall x,y\in X$,$|\|x\|-\|y\||\le \|x-y\|$。
2. $\forall x\in X, \|-x\|=\|x\|$。

:::

::: details 观察的证明

1. 根据性质 3，$\|x\|=\|x-y+y\|\le \|x-y\|+\|y\|$，即 $\|x\|-\|y\|\le \|x-y\|$。交换 $x$ 和 $y$，我们得到 $\|y\|-\|x\|\le \|x-y\|$。这表明 $|\|x\|-\|y\||\le \|x-y\|$。
2. 我们有 $\|-x\|=\|(-1)x\|=|-1|\|x\|=\|x\|$。

:::

基于范数，我们可以在线性空间中定义距离。因此我们必须首先定义一般意义上的距离。

::: info 定义 2 (距离)

$X$ 上的**距离**是一个函数 $d:X\times X\to [0,+\infty)$，满足以下三条性质。

1. $\forall x,y\in X, d(x,y)\ge 0$, 且 $d(x,y)=0\Leftrightarrow x=y$。
2. $\forall x,y\in X, d(x,y)=d(y,x)$。
3. $\forall x,y,z \in X, d(x,y)\le d(x,z)+d(z,y)$。

:::

一个赋有距离的集合 $X$ 称为**度量空间**。我们将看到，一个赋范线性空间总是一个度量空间。

::: tip 定理 1

设 $\|\cdot\|$ 是线性空间 $X$ 上的范数。则 $\forall x,y\in X$，我们定义 $d:X\times X\to[0,+\infty)$ 如下

$$
d(x,y)=\|x-y\|
$$

该函数是 $X$ 上的距离。

:::

::: details 定理 1 的证明

我们需要验证距离的三条性质。

1. $d(x,y)=\|x-y\|\ge 0$，且 $d(x,y)=0\Leftrightarrow\|x-y\|=0\Leftrightarrow x-y=0\Leftrightarrow x=y$。
2. $d(y,x)=\|y-x\|=\|x-y\|=d(x,y)$。
3. $d(x,y)=\|x-y\|=\|x-z+z-y\|\le \|x-z\|+\|z-y\|=d(x,z)+d(z,y)$。

这证明了 $d(x,y)=\|x-y\|$ 是一个距离。

:::

该定理表明范数可以导出距离。一旦有了距离，我们就可以得到一个拓扑，这意味着我们可以在 $X$ 中定义收敛序列，并进一步定义 $X$ 的拓扑结构。

::: info 定义 3 (依范数收敛)

设 $\{x_n\}$ 是线性空间 $X$ 中的一个序列。我们称 $\{x_n\}$ 收敛于 $x\in X$，当且仅当 $d(x_n,x)=\|x_n-x\|\to 0, n\to\infty$。此时，我们称 $\{x_n\}$ **依范数收敛**于 $x$，记作 $x_n\to x(n\to\infty)$。

:::

在同一个线性空间中，有时我们可以定义不同的范数。这迫使我们考虑它们之间的关系。

::: info 定义 4 (等价范数)

假设 $\|\cdot\|_1$ 和 $\|\cdot\|_2$ 是同一线性空间 $X$ 上的两个不同范数，我们称这两个范数是**等价的**，如果 $\exist 0<c<\infty$，使得对于所有 $x\in X$，

$$
c\|x\|_1\le \|x\|_2\le \frac{1}{c}\|x\|_1, \forall x\in X
$$

:::

该不等式从两侧用第一范数约束了第二范数。

::: tip 定理 2

设 $\|\cdot\|_1$ 和 $\|\cdot\|_2$ 在线性空间 $X$ 中等价。则 $\{x_n\}$ 在 $\|\cdot\|_1$ 下收敛于 $x \Leftrightarrow \{x_n\}$ 在 $\|\cdot\|_2$ 下收敛于 $x$。

该定理表明，等价范数会导出相同的拓扑结构，因此也导出相同的开集和闭集。

:::

::: details 定理 2 的证明

我们有 $\|x_n-x\|_1\to 0, n\to\infty$，即 $\forall \varepsilon>0, \exist N>0$ s.t. $\forall n>N, \|x_n-x\|_1<c\varepsilon$。

所以 $\|x_n-x\|_2<\dfrac{1}{c}\|x_n-x\|_1<\varepsilon$。这表明 $\|x_n-x\|_2\to 0, n\to\infty$。

:::

以下是一些赋范线性空间的例子。

::: tip 赋范线性空间的例子

1. 如果 $X$ 是一个赋范线性空间，$Y\subset X$ 是一个线性子空间，那么 $Y$ 也是一个赋范线性空间，其范数继承自 $X$。
2. 如果 $X_1$ 是赋有范数 $\|\cdot\|_1$ 的赋范线性空间，$X_2$ 是赋有范数 $\|\cdot\|_2$ 的赋范线性空间，那么积空间 $X_1\times X_2=\{(x_1,x_2):x_1\in X_1,x_2\in X_2\}$ 也是一个赋范线性空间。其范数可以通过以下三种方式之一来定义。
   1. $\|(x_1,x_2)\|_a=\|x_1\|_1+\|x_2\|_2$。
   2. $\|(x_1,x_2)\|_b=\max(\|x_1\|_1,\|x_2\|_2)$。
   3. $\|(x_1,x_2)\|_c=\sqrt{\|x_1\|_1^2+\|x_2\|_2^2}$。
   - 这些范数是等价的。
3. 如果 $X$ 是赋有范数 $\|\cdot\|$ 的赋范线性空间，$Y\subset X$ 是一个线性子空间，其闭包为 $\overline{Y}=\{x\in X: \exist\{y_n\}\subset Y\ \text{s.t.}\ y_n\to x(n\to\infty)\}$。则 $\overline{Y}$ 也是一个赋有范数 $\|\cdot\|$ 的线性子空间。
4. 假设 $X$ 是一个赋范线性空间，$Y$ 是 $X$ 的一个闭线性子空间，$X/Y$ 是 $X$ 模 $Y$ 的商空间。我们可以在其上定义一个范数

$$
\|[x]\|=\inf\{\|z\|,z\in [x]\}
$$

这样，$X/Y$ 就是一个赋范线性空间。

:::

::: details 例子 2 中 3 种范数等价性的证明

1. 令 $c_1 = \dfrac{1}{2}$，则

$$
\begin{align*}
  c_1\max(\|x_1\|_1,\|x_2\|_2) & \le \max(\|x_1\|_1,\|x_2\|_2) \\
  & \le \|x_1\|_1+\|x_2\|_2 \\ 
  & \le 2 \max(\|x_1\|_1,\|x_2\|_2) \\
  &=\dfrac{1}{c_1}\max(\|x_1\|_1,\|x_2\|_2)
\end{align*}
$$

这表明 $\|(x_1,x_2)\|_a$ 与 $\|(x_1,x_2)\|_b$ 等价。

2. 令 $c_2 = \dfrac{1}{\sqrt{2}}$，则

$$
\begin{align*}
  c_2 (\|x_1\|_1+\|x_2\|_2) & = \sqrt{2} \frac{\|x_1\|_1+\|x_2\|_2}{2} \\
  & \le \sqrt{\|x_1\|_1^2+\|x_2\|_2^2} \\
  & \le \|x_1\|_1+\|x_2\|_2 \\
  & \le \dfrac{1}{c_2} (\|x_1\|_1+\|x_2\|_2)
\end{align*}
$$

这表明 $\|(x_1,x_2)\|_c$ 与 $\|(x_1,x_2)\|_a$ 等价。

3. 令 $c_3 = \dfrac{1}{\sqrt{2}}$，则

$$
\begin{align*}
  c_3 \max(\|x_1\|_1,\|x_2\|_2) & \le \max(\|x_1\|_1,\|x_2\|_2) \\
  & \le \sqrt{\|x_1\|_1^2+\|x_2\|_2^2} \\
  & \le \sqrt{2} \max(\|x_1\|_1,\|x_2\|_2) \\
  & = \dfrac{1}{c_3} \max(\|x_1\|_1,\|x_2\|_2)
\end{align*}
$$

这表明 $\|(x_1,x_2)\|_b$ 与 $\|(x_1,x_2)\|_c$ 等价。
:::

::: details 商空间范数的证明

注意到 $X/Y$ 的零元是 $[0]=Y$，因为 $z\in [0]\Leftrightarrow z-0=z\in Y$。接下来我们需要验证范数的三条性质。

1. $\forall z\in [x], \|z\|\ge 0$，所以 $\|[x]\|\ge 0$。且 $\|[x]\|=0\Leftrightarrow \inf \{\|z\|: z\in [x]\}=0$，这意味着 $\exist \{z_j\}_{j\ge 1}\subset [x]$ s.t. $\|z_j\|\to 0$。所以 $z_j\to 0 (j\to \infty)$。同时，$z_j-x\in Y$，由于 $Y$ 是闭集，所以 $z_j-x\to 0-x=-x\in Y$。这表明 $x\in Y$，所以 $[x]\subset [0]$。一方面，设 $z\in [x]\Leftarrow z-x\in Y\Leftarrow z=z-x+x\in Y\Leftarrow z\in[0]$。另一方面，设 $z\in [0]=Y$，则 $z-x\in Y$，所以 $z\in[x]$。综上，$[x]=[0]$。
2. $\forall \alpha\in \mathbb{K}, \|\alpha[x]\|=\|[\alpha x]\|=\inf \{\|y\|:y\in [\alpha x]\}$。如果 $\alpha=0$，$\|\alpha[x]\|=\inf \{\|y\|:y\in [0]\}=0=0\|[x]\|$。否则，我们有 $y\in [\alpha x]\Leftrightarrow \exist z\in [x]$ s.t. $y=\alpha z$。即 $\|[\alpha x]\|=\inf \{\|y\|:y\in [\alpha x]\}=\inf \{\|\alpha z\|:z\in [x]\}=|\alpha|\inf \{\|z\|:z\in [x]\}=|\alpha|\|[x]\|$。
3. $\forall x,y\in X, \|[x]+[y]\|=\|[x+y]\|=\inf\{\|z\|:z\in[x+y]\}$。对于 $z\in [x+y]=[x]+[y], \exist z_x\in[x],z_y\in[y]$ s.t. $z=z_x+z_y$。所以 $\|z\|\le \|z_x\|+\|z_y\|$。这意味着 $\inf\{\|z\|:z\in[x+y]\}\le \inf \{\|z_x\|+\|z_y\|: z_x\in[x],z_y\in[y]\}$。而 $\inf \{\|z_x\|: z_x\in[x]\}+\inf \{\|z_y\|:z_y\in[y]\}=\|[x]\|+\|[y]\|$。所以我们需要证明 $\inf \{\|z_x\|: z_x\in[x]\}+\inf \{\|z_y\|:z_y\in[y]\}\ge \inf \{\|z_x\|+\|z_y\|: z_x\in[x],z_y\in[y]\}$。根据下确界的性质，$\forall \varepsilon>0, \exist w_1\in[x],w_2\in[y]$ s.t. 

$$
\begin{matrix}
  \inf \{\|z_x\|: z_x\in[x]\}\le \|w_1\|\le \inf \{\|z_x\|: z_x\in[x]\}+\dfrac{\varepsilon}{2} \\
  \inf \{\|z_y\|: z_y\in[y]\}\le \|w_2\|\le \inf \{\|z_y\|: z_y\in[y]\}+\dfrac{\varepsilon}{2}
\end{matrix}
$$

这表明

$$
\begin{align*}
  \inf \{\|z_x\|+\|z_y\|: z_x\in[x],z_y\in[y]\} &\le \|w_1\|+\|w_2\| \\
  &\le \inf \{\|z_x\|: z_x\in[x]\}+\inf \{\|z_y\|: z_y\in[y]\}+\varepsilon
\end{align*}
$$

令 $\varepsilon\to 0$，我们有 $\inf \{\|z_x\|: z_x\in[x]\}+\inf \{\|z_y\|:z_y\in[y]\}\ge \inf \{\|z_x\|+\|z_y\|: z_x\in[x],z_y\in[y]\}$。所以三角不等式得证。

综上所述，$\|[x]\|$ 是一个范数。

:::

## Banach 空间

在介绍 Banach 空间之前，我们需要定义基于Cauchy序列的完备性概念。

::: info 定义 5 (完备空间)

$X$ 是一个**完备空间**，当且仅当 $X$ 中的每个柯西序列都收敛到一个也在 $X$ 中的极限，这意味着 $\forall \{x_k\}\subset X$ 是一个柯西序列，$\exist x\in X$ s.t. $x_k\to x(k\to\infty)$。

::: info 定义 6 (Cauchy 序列)

设 $X$ 是一个赋范线性空间，$\{x_k\}_{k\ge 1}\subset X$ 是其中的一个序列。称 $\{x_k\}$ 是一个**Cauchy序列**，当且仅当 $\|x_m-x_n\|\to 0 (m,n\to \infty)$，即 $\forall \varepsilon>0,\exist K>0$ s.t. $\forall m,n>K, \|x_m-x_n\|<\varepsilon$。

:::

最后，我们可以定义在泛函分析中至关重要的 Banach 空间。

::: info 定义 7 ( Banach 空间)

$X$ 是一个 **Banach 空间**，如果 $X$ 是一个完备的赋范线性空间。

:::