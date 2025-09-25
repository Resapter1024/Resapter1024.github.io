---
title: "Lec. 5 Finite dimensional linear space"
category:
  - Functional Analysis
tag:
  - Study
  - Math
date: 2025-09-18
order: 5
footer: false
---

## Linearly Independent

For finite dimensional linear space, it is important to introduce its dimension.

::: info Definition 1 (Linearly Independent)

For a normed linear space $X$ defined over $\mathbb{K}$, let $z_1,z_2,\ldots, z_n\in X$. They are **linearly independent** if for $\alpha_1,\alpha_2,\ldots,\alpha_n\in\mathbb{K}$,
$$
\sum_{j=1}^n \alpha_jz_j=0\Leftrightarrow \alpha_1=\alpha_2=\ldots=\alpha_n=0
$$

:::

::: tip Property of Linear Independence

Suppose $z_1,z_2,\ldots, z_n\in X$ are linearly independent. If $x\in X$ can be linearly expressed by $z_1,z_2,\ldots, z_n$ in two different ways such as
$$
x=\sum_{j=1}^n \alpha_jz_j=\sum_{j=1}^n \beta_jz_j
$$
We have $\alpha_j=\beta_j$, which is denoted by $\alpha_j(x)$. This property means that if $x$ can be linearly expressed by linearly independent elements, the expression is unique.

:::

It is natural to consider how much linearly independent elements can linearly express all elements in $X$.

::: info Definition 2 (Maximal Linearly Independent System)

A group of linearly independent elements $z_1,z_2,\ldots, z_n\in X$ is **maximal** if $\forall x\in X, \exist \alpha_1,\ldots,\alpha_n\in\mathbb{K}$ s.t.
$$
x=\displaystyle\sum_{j=1}^n \alpha_jz_j
$$

:::

::: tip Observation

If $z_1,z_2,\ldots, z_n$ and $w_1,w_2,\ldots,w_m$ are maximal in $X$, $n=m$. This observation shows that the maximal linearly independent system of the same space have the same cardinality.

::: details Proof of the Observation

We have $\forall k\in\{1,2,\ldots, m\}, \exist a_{k1},\ldots,a_{kn}$ s.t.
$$
w_k=\sum_{j=1}^n a_{kj}z_j
$$
And similarly, $forall j\in\{1,2,\ldots, n\}, \exist b_{j1},\ldots,b_{jm}$ s.t.
$$
z_j=\sum_{l=1}^m b_{jl}w_l
$$

Combining the two equations above, we can obtain
$$
w_k=\sum_{j=1}^n a_{kj}\sum_{l=1}^m b_{jl}w_l
$$
We introduce matrices $\mathbf{A}=(a_{kj})$ and $\mathbf{B}=(b_{jl})$. Then we have
$$
w_k=\sum_{l=1}^m (\mathbf{AB})_{kl} w_l
$$
Rearranging the terms yields
$$
0=\sum_{l=1}^m [(\mathbf{AB})_{kl}-\delta_{kl}] w_l
$$

Because $w_1,\ldots, w_m$ is linearly independent, we have $(\mathbf{AB})_{kl}-\delta_{kl}=0$, that is
$$
\mathbf{AB}=\mathbf{I}
$$
We know $\mathbf{A}$ is $m\times n$ matrix and $\mathbf{B}$ is $n\times m$ matrix. So we can also write the formula as $\mathbf{AB}=\mathbf{I}_{m}$. That implies $m\le \mathrm{rank}(\mathbf{A})\le n$

By symmetry, we also have $\mathbf{BA} = \mathbf{I}_n$. That implies $n\le \mathrm{rank}(\mathbf{A})\le m$. We therefore conclude that $m = n$.
:::

The observation tell us that the number of elements of the maximal linearly independent system of a space is determined by the space itself.

::: info Definition 3 (Dimension)

The **dimension** of a linear space $X$ is the number of elements of the maximal linearly independent system, denoted as $\mathrm{Dim}(X)$.

We say $X$ have infinite dimension if $\forall k\ge 1$, there exists a set of linearly independent elements with $z_1,\ldots,z_k$, denoted as $\mathrm{Dim}(X)=+\infty$.

:::

## Properties of Finite Dimension NLS

::: info Theorem 1

Consider a normed linear space $X$, which satisfy $\mathrm{Dim}(X)=n<+\infty$, and one of its maximal linearly independent system is $\{z_1,\ldots,z_n\}$. $\forall x\in X, \exist a_1(x),\ldots,a_n(x)\in\mathbb{K}$, s.t. $x=\sum_{j=1}^n \alpha_j(x) z_j$. We have $\exist c_0<\infty$, s.t.

$$
\sum_{j=1}^n |\alpha_j|\le c_0\|x\|
$$

::: details Proof of Theorem 1

We use contradiction to prove the theorem. Suppose $\forall p>0, \exist x_p\in X$ s.t. $\sum_{j=1}^n |\alpha_j(x_p)|>p\|x_p\|$.

Let $y_p=\dfrac{x_p}{\displaystyle\sum_{j=1}^n |\alpha_j(x_p)|}$, then $\alpha_j(y_p)=\dfrac{\alpha_j(x_p)}{\displaystyle\sum_{k=1}^n |\alpha_k(x_p)|}$. So
$$
\sum_{j=1}^n|\alpha_j(y_p)|=\sum_{j=1}^n\dfrac{|\alpha_j(x_p)|}{\displaystyle\sum_{k=1}^n |\alpha_k(x_p)|}=1
$$
which implies that $\forall j$

:::
