---
title: 随机向量的 Hillbert 空间
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-04-13
# 禁止显示页脚
footer: false
---

## 零均值随机函数空间

### 定义

设数据 $Z_1,Z_2,\ldots,Z_n$ 来自随机向量 $Z$，它具有一个**底层概率空间** $(\mathcal{Z},\mathcal{A},P)$。这三者分别是样本空间、事件域和概率测度。这里我们暂时不考虑 $P\in\mathcal{P}$，而是认为 $P$ 是该随机向量生成的真实概率测度。

现在考虑函数 $h:\mathcal{Z}\to\mathbb{R}^q$ 是样本空间上的零均值可测函数，即 $h$ 可测且满足
$$
\begin{matrix}
  E(h(Z))=0 \\
  E(h^\top (Z)h(Z))<+\infty
\end{matrix}
$$

::: details 奇怪的记法

这里简单记成 $h(Z)$ 有些令人困惑：作为随机向量的函数，更为我们熟悉的定义应该是 $h:\mathbb{R}^n\to\mathbb{R}^q$，而这里写成了直接定义在样本空间上。

这么写的原因是 $Z$ 不再是初等概率论中的随机向量（是一个 $\Omega\to\mathbb{R}^q$ 的实值可测函数），而是直接和它的实现等价。$\mathcal{Z}$ 本身就是 $Z$ 的定义域。而随机向量 $Z$ 则定义为样本空间到它自身的恒等映射，即
$$
Z(z)=z,\quad z\in\mathcal{Z}
$$
这么定义的动机来源于 $Z$ 本身就是我们的观测，初等概率论中定义的样本空间 $\Omega$ 和样本点 $\omega$ 本质上都是无法观测的，我们很难也没有必要去找到它们。直接把数据的结果定义为样本空间是符合直观且更具普适性的。

相对的，这时候的 $Z$ 本身就无法携带分布的信息。此时其分布诱导的概率测度 $P_Z$ 实际上就是前面提到的底层概率空间的概率测度 $P$，从而改变数据的分布时，我们不需要更改 $Z$ 本身和样本空间，只需要更改概率测度 $P$ 即可。

:::

显然，所有满足上述条件的 $h$ 构成了一个线性空间 $\mathcal{H}$，即对任意的两个 $h_1,h_2\in\mathcal{H}$，它们的线性组合 $ah_1+bh_2\in\mathcal{H}$。

这时候，我们把这些函数视为线性空间中的点。该空间的原点为
$$
h(Z)=0^{q\times 1}
$$

### 维度

$\mathcal{H}$ 的维度和 $h$ 输出的维度 $q$ 无关，而是和 $Z$ 的分布有关。如果 $Z$ 是一个离散型的随机向量，它取值为 $z_1,\ldots,z_k$ 的概率分别为 $\pi_1,\ldots,\pi_k$，则任何一个 $h$ 都可以定义为
$$
h(Z)=\sum_{i=1}^k a_i\mathbb{I}(Z=z_i)
$$
这里可以看出 $h$ 是一个由 $k$ 个线性无关的函数张成的函数类，从而 $\mathcal{H}$ 是一个 $k$ 维线性空间。

如果我们进一步，对 $h$ 施加一些约束，例如前述的零均值，此时
$$
\sum_{i=1}^k a_i\pi_i=0 \implies a_k=-\frac{1}{\pi_k}\sum_{i=1}^{k-1}a_i\pi_i
$$
从而函数空间 $\mathcal{H}$ 变为一个 $k-1$ 维线性空间。

如果 $Z$ 的支撑集（的基数）是无限的（例如 $Z$ 是一个连续性随机向量），那么 $\mathcal{H}$ 就是一个无穷维的线性空间，这是因为连续函数类 $C$ 是可测函数类 $\mathcal{H}$ 的一个子空间，前者无穷维则后者一定也是无穷维的。

## Hillbert 空间

Hillbert 空间是一个定义了内积的 Banach 空间（即完备的赋范线性空间）。在 Hillbert 空间上，我们不仅可以计算距离，还可以通过内积计算夹角和定义正交性。

::: info 内积的定义

对线性向量空间 $\mathcal{H}$，设 $h_1,h_2,h_3\in\mathcal{H}$，定义 $\mathcal{H}$ 上的内积为 $\left \langle \cdot,\cdot \right \rangle: \mathcal{H}^2\to \mathbb{R}^+ $，且满足

1. 正定性：$\left\langle h_1, h_1\right\rangle\ge 0$ 且 $\left\langle h_1, h_1\right\rangle= 0 \Leftrightarrow h_1=0$；
2. 对称性：$\left\langle h_1, h_2\right\rangle=\left\langle h_2, h_1\right\rangle$；
3. 线性性：$\left\langle \lambda h_1+\mu h_2, h_3\right\rangle=\lambda\left\langle h_1, h_3\right\rangle+\mu\left\langle h_2, h_3\right\rangle$.

::: details 半内积

有一些 $\left \langle \cdot,\cdot \right \rangle$ 可能满足条件 2,3 以及 1 的前半条，但存在 $h\neq 0$ 使得 $\left \langle h,h \right \rangle=\|h\|^2=0$，我们称其为半内积。

这一现象在统计中非常常见，因为我们定义的范数和内积很多时候和随机向量的期望相关。但是期望本身是和函数在有限个点内的取值无关，从而存在一些函数，它在某些点处不为零，但期望却为零（$h\overset{a.e.}{=}0$）

在定义了半内积的 Banach 空间中，我们可以通过定义等价类和商空间的办法来构造出 Hillbert 空间。具体来说，我们定义零空间 $\mathcal{N}=\{h\in\mathcal{H}:\left \langle h,h \right \rangle=0\}$，并定义等价关系
$$
h_1\sim h_2\Leftrightarrow h_1-h_2\in\mathcal{N}
$$
现在我们记 $[h]=\{g\in\mathcal{H}:g\sim h\}$ 为代表元是 $h$ 的等价类，重新定义 $\mathcal{H}/\mathcal{N}=\{[h]:h\in\mathcal{H}\}$，并把这些等价类当成新的空间中的点。

这一操作从直观上来看，就是把几乎处处相等的函数视作相同的函数，这在初等概率论中是一个被广泛应用的直觉。

:::

对 $q$ 维具有零均值和有限方差的随机函数 $h_1,h_2$，定义它们之间的内积为
$$
\left \langle h_1,h_2 \right \rangle:=E(h_1^\top h_2)
$$
称其为**协方差内积**。很明显这是一个半内积，我们用前述方法，定义等价类并将其视为新的商空间中的元素，为方便起见，也称这个新的空间为 $\mathcal{H}$。

一旦定义了内积，我们可以定义相应的**范数** $\|h\|=\left \langle h,h \right \rangle^{1/2}$，直观上理解为元素到原点的距离。这实际上就是概率空间上的 $L_2$ 范数。

此外，我们还可以定义**正交**，我们称两个元素 $h_1,h_2$ 正交当且仅当 $\left\langle h_1,h_2\right\rangle=0$。

现在我们知道 $q$ 维具有零均值和有限方差的随机函数构成的空间 $\mathcal{H}$ 上可以定义内积和范数。此外，我们还可以证明其作为赋范线性空间是完备的，即每一个 Cauchy 列都收敛（参见 Lo`eve 1963, p. 161 的 $L_2$ 完备性定理）。如此，$\mathcal{H}$ 是一个 Hillbert 空间。

## Hillbert 空间的线性子空间以及投影定理
