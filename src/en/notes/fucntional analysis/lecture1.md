---
title: "Lec. 1 Linear Space: definition, examples and linear span"
category:
  - Functional Analysis
tag:
  - Study
  - Math
date: 2025-09-13
order: 1
footer: false
---

[Read this article in Chinese](/notes/fucntional%20analysis/lec1.md)

## Linear Space

### Definition

::: info Definition 1 (Linear Space)

$X$ is a **linear space** over a field $\mathbb{K}$ (usually $\mathbb{R}$ or $\mathbb{C}$), if $X$ is a set with $+$ (addition) and $\cdot$ (scalar multiplication), which satisfy the properties as follows.

1. $+$ (addition): for $x,y,z\in X$,
   1. (closure) $x+y\in X$.
   2. (commutative) $x+y=y+x$.
   3. (associative) $(x+y)+z=x+(y+z)$.
   4. $X$ is a group with $+$.
      1. There is a neutral element $0\in X$, s.t. $0+x=x+0=x$.
      2. For $x\in X$, $\exist (-x)\in X$ s.t. $(-x)+x=x+(-x)=0$.
2. $\cdot$ (scalar multiplication): for $x\in X,\alpha,\beta\in\mathbb{K}$,
   1. (associative) $(\alpha\beta)\cdot x=\alpha\cdot(\beta \cdot x)$.
   2. (distributive) $(\alpha+\beta)\cdot x=\alpha\cdot x+\beta\cdot x,\alpha\cdot(x+y)=\alpha\cdot x+\alpha\cdot y$.
   3. There is a neutral element $1\in \mathbb{K}$, s.t. $1\cdot x=x$.
   - For the sake of convenience, we denote $\alpha\cdot x$ as $\alpha x$.

:::

There are some basic properties of a Linear Space.

::: tip Properties of Linear Space

1. For $0\in \mathbb{K}$, which is the neutral element of $\mathbb{K}$'s $+$, and $x\in X$, we have $0 x=0\in X$.
2. $\forall x\in X$, we have $(-1)x=-x$, which is the additive inverse of $x$.

:::

::: details Proof of the properties

1. $0x=(0+0)x=0x+0x\Rightarrow 0x=0\in X$.
2. $0=0x=(1+(-1)) x=1x+(-1)x=x+(-1)x$, this implies $(-1)x=-x$.

:::

There are some examples about the Linear Space.

::: tip Examples

1. $X=\{ p(t): p \text{ is the polynomial about } t\in \mathbb{R}\}$ for $K=\mathbb{R}$ is a linear space.
2. $X_{n}=\{ p(t_{1},\ldots,t_{n}): p \text{ is the polynomial about } (t_{1},\ldots,t_{n})\in \mathbb{R}^n\}$ is also a linear space.
3. $C(\mathbb{R}^n)$, which is the space of all continuous functions defined on $\mathbb{R}^n$, is a linear space.
4. $S=\{ (a_{j})_{j>1}:(a_{j})=(a_{1},a_{2},\ldots),a_{j}\in K\}$, which is the space of all sequences on $K$, is a linear space. 
5. Consider the measure space $(\Omega, \mathcal{F}, \mu)$, then 

$$
X=L_{p}=\left\{  f:\Omega\to \mathbb{R}:\int_{\Omega}|f|^p\mathrm{d}\mu<\infty  \right\}
$$

is the linear space.

:::

### Linear Subspace

::: info Definition 2 (Linear Subspace)

$Y\subset X$ is a **Linear Subspace** of $X$, if $\forall x,y\in Y,\alpha \in \mathbb{K}, \alpha x+y\in Y$.

:::

This definition means that the Linear Subspace should be closed under addition and multiplication by scales in the original linear space.

::: tip Properties of Linear Subspace

1. $Y=\{0\}$ is a linear subspace.
2. If $Y_1,Y_2$ are linear subspaces of $X$, $Y_1+Y_2=\{y_1+y_2:y_1\in Y_1,y_2\in Y_2\}$ is also the linear subspace of $X$.
3. If $\{Y_\theta:\theta\in I\}$ is a family of linear subspaces,

$$
Y=\bigcap_{\theta\in I}Y_\theta
$$

is also a linear subspace.

:::

::: details Proof of the properties

1. $\forall \alpha\in\mathbb{K}, \alpha 0+0=0\in Y$.
2. $\forall x_1,x_2\in Y,\exist y_{11},y_{21}\in Y_1, y_{12},y_{22}\in Y_2$ s.t. $x_1=y_{11}+y_{12},x_2=y_{21}+y_{22}$.
So $\forall \alpha\in\mathbb{K}$, we have $\alpha y_{11}+y_{21}\in Y_1,\alpha y_{12}+y_{22}\in Y_2$, this implies that

$$
\alpha x_1+x_2=\alpha (y_{11}+y_{12})+ (y_{21}+y_{22})=(\alpha y_{11}+y_{21})+(\alpha y_{12}+y_{22})\in Y_1+Y_2
$$

3. $\forall x,y\in Y$, we have $\forall \theta\in I, x,y\in Y_\theta$. Because $Y_\theta$ is a linear subspace, $\forall \alpha\in\mathbb{K}$,

$$
\alpha x+y\in Y_\theta, \forall \theta\in I
$$

which means $\alpha x+y\in \displaystyle\bigcap_{\theta\in I}Y_\theta=Y$. This implies that $Y$ is also a linear subspace.

- Notice: this proof doesn't have to assume that $I$ is a countable set.

:::

To introduce the 4th property of the linear subspace, we must introduce the concept of total order.

::: info Definition 3 (Totally Ordered)

A family of set $\{Y_\theta:\theta\in I\}$ is **totally ordered** if $\forall \theta_1,\theta_2\in I$, we have $Y_{\theta_1}\subset Y_{\theta_2}$ or $Y_{\theta_2}\subset Y_{\theta_1}$.

:::

::: tip Properties of linear subspace

4. If a family of linear subspace $\{Y_\theta: \theta\in I\}$ is totally ordered, we have 

$$
Y=\bigcup_{\theta\in I}Y_\theta
$$

is also a linear subspace of $X$.

:::

::: details Proof of the properties

4. $\forall x,y\in Y,\exist \theta_x,\theta_y$ s.t. $x\in Y_{\theta_x},y\in Y_{\theta_y}$. Because the family is totally ordered, we assume without loss of generality that $Y_{\theta_x}\subset Y_{\theta_y}$. That means $x, y\in Y_{\theta_y}$. So $\forall \alpha\in\mathbb{K}$, we have $\alpha x+y\in Y_{\theta_y}\subset Y$, which implies that Y is a linear subspace.

:::

### Linear Span

::: info Definition 4 (Linear Span)

For $S\subset X$, consider a family of linear subspace $\{Y_\theta: \theta\in I\}$ which includes all sets $Y_\theta$ that contain $S$. We say 

$$
\mathrm{LS}(S)=\bigcap_{\theta\in I}Y_\theta
$$

is the **linear span** of S.

:::

The following properties of linear span will give different descriptions of $\mathrm{LS}(S)$. The first property shows the mimimality of $\mathrm{LS}(S)$

::: tip Property 1 of linear span
The linear span of $S$ is the smallest linear subspace which contains $S$.
:::

::: details Proof of Property 1
On the one hand, $\mathrm{LS}(S)$ is a linear subspace, because it is an intersection of linear subspaces.

On the other hand, $\forall Y$ is the linear subspace which contains $S$, we have $Y\in \{Y_\theta: \theta\in I\}$. 
So $\displaystyle\mathrm{LS}(S)=\bigcap_{\theta\in I}Y_\theta\subset Y$, that is the minimality of $\mathrm{LS}(S)$.
:::

The second property describes the element structure of $\mathrm{LS}(S)$.

::: tip Property 2 of linear span

$$
\mathrm{LS}(S)=\{\sum_{j=1}^n a_jx_j: a_j\in\mathbb{K}, x_j\in S, n\in\mathbb{N^*}\}
$$

This means $\mathrm{LS}(S)$ is formed by all linear combinations of elements of $S$.

:::

::: details Proof of Property 2

We prove this property for two steps.

(1) We have to show that $Z=\displaystyle\{\sum_{j=1}^n a_jx_j: a_j\in\mathbb{K}, x_j\in S, n\in\mathbb{N^*}\}$ is a linear subspace, then we have $Z\supset \mathrm{LS}(S)$ with the minimality.

$\forall x,y\in Z, \exist x_1,\ldots x_n, y_1,\ldots, y_m\in S,\beta_1,\ldots,\beta_n,\gamma_1,\ldots,\gamma_m\in\mathbb{K}$ s.t. 

$$
x=\sum_{i=1}^n \beta_i x_i, y=\sum_{j=1}^m \gamma_j y_j
$$

So $\forall \alpha\in\mathbb{K}, \alpha x+y=\displaystyle\sum_{i=1}^n \alpha\beta_i x_i+\sum_{j=1}^m \gamma_j y_j$ is also a linear combination of elements of $S$, which implies $\alpha x+y\in Z$. So $Z$ is a linear subspace.

(2) Then we have to prove $Z\subset \mathrm{LS}(S)$. We use Mathematical Induction to prove it.

For $n=1$, $\alpha_1x_1\in Z$ and $\alpha_1x_1=\alpha_1x_1+0\in \mathrm{LS}(S)$.

Assuming that when $n=k$, $\displaystyle\sum_{j=1}^k a_jx_j\in \mathrm{LS}(S)$. We consider that $n=k+1$. If $a_{k+1}=0$, $\displaystyle\sum_{j=1}^{k+1} a_jx_j=\sum_{j=1}^{k} a_jx_j\in\mathrm{LS}(S)$. Otherwise, we have

$$
\sum_{j=1}^{k+1} a_jx_j=\sum_{j=1}^k a_jx_j+a_{k+1}x_{k+1}\in\mathrm{LS}(S)
$$

So $\forall n\in\mathbb{N^*}$, we have $\displaystyle\sum_{j=1}^n a_jx_j\in\mathrm{LS}(S)$. This implies $Z\subset \mathrm{LS}(S)$.

In conclusion, we have $Z\supset \mathrm{LS}(S)$ and $Z\subset \mathrm{LS}(S)$, which means $Z=\mathrm{LS}(S)$.
:::
