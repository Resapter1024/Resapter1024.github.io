---
title: "Lec. 2 Linear Space: quotient space and convex sets"
category:
  - Functional Analysis
tag:
  - Study
  - Math
date: 2025-09-13
order: 2
footer: false
---

[Read this article in Chinese](/notes/fucntional%20analysis/lec2.md)

## Quotient Space

To discuss quotient space, we first need to introduce an equivalence relation on a linear space.

::: info Definition 1 (A Relation)

Let $X$ be a linear space, $Y\subset X$ be a linear subspace and $x,y\in X$. $x$ is related to $y$ if and only if $x-y\in Y$, which is denoted as $x\sim Y$.

:::

This relation is an equivalence relation.

::: details Proof of Equivalence

1. $x-x=0\in Y\Rightarrow x\sim x$.
2. $x\sim y\Leftrightarrow x-y\in Y\Leftrightarrow y-x\in Y\Leftrightarrow y\sim x$.
3. $x\sim y\Leftrightarrow x-y\in Y$, $y\sim z\Leftrightarrow y-z\in Y$, so $x-z=x-y+y-z\in Y,\Rightarrow x\sim z$.
So the relation is an equivalence relation.

:::

We usually use the symbol $[x]=\{y\in X:y\sim x\}$ to describe the equivalence class of $x$, which is a set containing all elements related to $x$ in $X$. Given $X$ and $Y$, all equivalence classes form a new space defined as follows.

::: info Definition 2 (Quotient Space)

The **quotient space** of $X$ modulo $Y$ is $\{[x]: x\in X\}$, denoted as $X/Y$.

:::

We call the quotient space as a "space", so we define a special addition and scalar multiplication to make it a linear space.

::: info Definition 3 (Addition and Scalar Multiplication over Quotient Space)

1. For $[x], [y]\in X|Y$, take arbitrary representatives $x_1\in [x],y_1\in [y]$. we define addition as $[x]+[y]=[x_1+y_1]$.
2. For $[x]\in X|Y$ and $\alpha\in\mathbb{K}$, take an arbitrary $x_1\in [x]$, we define scalar multiplication as $\alpha\cdot[x]=[\alpha x_1]$

::: details Proof of well-definedness

1. Obviously that $[x],[y]$ is not empty set. We must check that this definition of addition is independent of the choice of representatives. Consider $x_1,x_2\in[x], y_1,y_2\in[y]$, we have
    $$
    x-x_1,x_2-x, y-y_1,y_2-y\in Y
    $$
    because $Y$ is a linear subspace, we have
    $$
    x_2-x_1, y_2-y_1\in Y \Rightarrow (x_2+y_2)-(x_1+y_1)\in Y
    $$
    which means $x_1+y_1\sim x_2+y_2$. $\forall z\in [x_1+y_1]$, we have $z\sim x_1+y_1\Rightarrow z\sim [x_2+y_2]\Rightarrow z\in [x_2+y_2]$. That is $[x_1+y_1]\subset [x_2+y_2]$. Similarly, we have $[x_1+y_1]\supset [x_2+y_2]$. This implies $[x_1+y_1]=[x_2+y_2]$, so the uniqueness is proven.
2. With the same argument, we can prove the scalar multiplication is well-defined.

:::

::: tip Notion

I think the definition can be shown as a more simple version.

1. $[x]+[y]=[x+y]$;
2. $\alpha\cdot[x]=[\alpha x]$

This is valid because $x$ is a representative of $[x]$ (i.e., $x\in[x]$).

:::

## Linear Maps

::: info Definition 4 (Linear Map)

For two linear spaces $X$ and $X^*$ over the same field $\mathbb{K}$, $T:X\to X^*$ is a **linear map** if

1. $T(x+y)=T(x)+T(y)$;
2. $T(\alpha x)=\alpha T(x)$.

:::

::: info Definition 5 (Isomorphic)

Two linear spaces $X$ and $X^*$ are **isomorphic** if there exists a linear map $T:X\to X^*$ which is a bijection.

:::

Linear map has two great properties as follows.

::: tip Properties of linear map

1. Let $Y$ be a linear subspace of $X$ and $T$ is a linear map from $X$ to $X^*$. Then $T(Y)={T(y):y\in Y}$ is also a linear subspace of $X^*$.
2. Let $Y^*$ is the linear subspace of $X^*$. We have the inverse image of $Y^*$, which is denoted as $T^{-1}(Y^*)=\{x\in X:T(x)\in Y^*\}$, is also a linear subspace of $X$.

::: details Proof of the properties

1. $\forall z_1,z_2\in T(Y),\exist y_1,y_2$ s.t. $T(y_1)=z_1,T(y_2)=z_2$. So $\forall\alpha\in\mathbb{K}, \alpha z_1+z_2=\alpha T(y_1)+T(y_2)=T(\alpha y_1+y_2)\in T(Y)$, that proves $T(Y)$ is a linear subspace.
2. $\forall x_1,x_2\in T^{-1}(Y^*), y_1=T(x_1),y_2=T(x_2)\in Y^*$. So $\forall\alpha\in\mathbb{K}, T(\alpha x_1+x_2)=\alpha T(x_1)+T(x_2)=\alpha y_1+y_2\in Y^*$, that is $\alpha x_1+x_2\in T^{-1}(Y^*)$. So $T^{-1}(Y^*)$ is a linear subspace.

:::

### Convex sets

#### Definition and Properties

::: info Definition 6 (Convex set)

A subset $V\subset X$ is said to be **convex** if $\forall x, y\in V$ and $\alpha\in[0,1]$, $\alpha x+(1-\alpha)y\in V$.

When we talk about the convex set, we usually consider X is defined over $\mathbb{R}$.

:::

<div id="thm-1">

::: tip Theorem 1 (Convex Combination)

For a convex set $V$, let $x_1, \dots, x_n \in V$, $\alpha_1, \dots, \alpha_n \in [0, 1]$ and $\displaystyle\sum_{i=1}^n \alpha_i = 1$, then
$$
\sum_{i=1}^n \alpha_i x_i \in V
$$

This sum's called a **convex combination** of $x_1, \dots, x_n$.

::: details Proof of Theorem 1

When $n=1,2$, the conclusion is obvious.

Suppose when $n=k$, $\displaystyle\sum_{i=1}^k \alpha_ix_i\in V$, let's consider the case $n=k+1$. If $\alpha_{k+1}=1$, the convex combination is simply $x_{k+1}\in V$. Otherwise, we have $\alpha_1+\ldots+\alpha_k\neq 0$. That implies

$$
\begin{align*}
    \sum_{i=1}^{k+1} \alpha_ix_i &=\sum_{i=1}^k \alpha_i x_i+\alpha_{k+1}x_{k+1}\\
    &= (\alpha_1+\ldots+\alpha_k)\left(\sum_{i=1}^k \frac{\alpha_i}{\alpha_1+\ldots+\alpha_k} x_i\right)+\alpha_{k+1}x_{k+1}
\end{align*}
$$

By the inductive hypothesis, we have $\displaystyle\left(\sum_{i=1}^k \frac{\alpha_i}{\alpha_1+\ldots+\alpha_k} x_i\right)\in V$. And $(\alpha_1+\ldots+\alpha_k)+\alpha_{k+1}=1$. So $\displaystyle\sum_{i=1}^{k+1} \alpha_ix_i\in V$ with the definition of convex set.

By Mathematical Induction, Theorem 1 is proven.
:::

</div>

Convex sets have many great properties as follows.

::: tip Properties of convex sets

1. If $Y$ is a linear subspace, $Y$ is convex.
2. Let $Y_1,Y_2$ are convex, then $Y_1+Y_2$ is convex.
3. Let $\{V_\theta:\theta\in I\}$ is a family of convex sets, then
    $$
    V=\bigcap_{\theta\in I}V_\theta
    $$
    is also convex.
4. Let $\{V_\theta:\theta\in I\}$ is a totally ordered family of convex sets, then
    $$
    V=\bigcup_{\theta\in I}V_\theta
    $$
    is also convex.

::: details Proof of property 1-4

1. It's obvious that $\forall x_1,x_2\in Y,\alpha\in[0,1],\alpha x_1+(1-\alpha)x_2\in Y$.
2. Suppose $z_1=y_{11}+y_{12},z_2=y_{21}+y_{22}\in Y_1+Y_2$ with $y_{11},y_{21}\in Y_1,y_{12},y_{22}\in Y_2$. $\forall \alpha\in[0,1]$, we have
    $$
    \begin{align*}
        \alpha z_1+(1-\alpha)z_2 &=\alpha (y_{11}+y_{12})+(1-\alpha)(y_{21}+y_{22})\\
        &=(\alpha y_{11}+(1-\alpha)y_{21})+(\alpha y_{12}+(1-\alpha)y_{22})\in Y_1+Y_2
    \end{align*}
    $$
    So $Y_1+Y_2$ is convex.
3. $\forall \alpha\in[0,1]$ and $x,y\in V$, we have $\forall \theta\in I, x,y\in V_\theta$. With the definition of convex, we have
    $$
    \alpha x+(1-\alpha)y\in V_\theta, \forall \theta\in I
    $$
    So $\alpha x+(1-\alpha)y\in V$, which means $V$ is convex.
4. $\forall \alpha\in[0,1]$ and $x,y\in V$, there exist $\theta_x,\theta_y$ s.t. $x\in V_{\theta_x}, Y\in V_{\theta_y}$. Because the family is totally ordered, we assume without loss of generality that $V_{\theta_x}\subset V_{\theta_y}$. So $x,y\in V_{\theta_y}$. This implies
    $$
    \alpha x+(1-\alpha)y\in V_{\theta_y}\subset V
    $$
    which means $V$ is convex.

:::

The properties of convex sets and their proofs above show that convex sets are similar to the linear subspaces.

::: tip Linear maps and convex sets

5. Let $V\subset X$ is convex and $T:X\to Y$ is a linear map. Then $T(V)$ is also convex.
   - The property means the linear maps send convex sets to convex sets.
6. Let $V\subset Y$ is convex and $T:X\to Y$ is a linear map. Then $T^{-1}(V)$ is also convex.

::: details Proof of Property 5-6

5. $\forall \alpha\in[0,1]$ and $z_x,z_y\in T(V)$, $\exist x,y\in V$ s.t. $z_x=T(x),z_y=T(y)$. So $\alpha z_x+(1-\alpha) z_y=\alpha T(x)+(1-\alpha) T(y)=T(\alpha x+(1-\alpha)y)\in T(V)$, which means $T(V)$ is convex.
6. $\forall \alpha\in[0,1]$ and $x,y\in T^{-1}(V)$, $\exist z_x, z_y\in V$ s.t. $z_x=T(x),z_y=T(y)$. So $\alpha z_x+(1-\alpha)z_y=\alpha T(x)+(1-\alpha)T(y)=T(\alpha x+(1-\alpha)y)\in V$, which means $\alpha x+(1-\alpha)y\in T^{-1}(V)$

:::

#### Convex Hull

::: info Definition 7 (Convex Hull)

Let $S\subset X$, and let $\{V_\theta:\theta\in I\}$ be the family of all convex sets containing $S$. We say

$$
\mathrm{CV}(S)=\bigcap_{\theta\in I}V_\theta
$$

is the **convex hull** of S.

:::

Notice that the set $\{V_\theta:\theta\in I\}$ is not an empty set because $X$ is a convex set (as a linear space) contains $S$. We see that it's very similar to Linear Span.

Obviously, $\mathrm{CV}(S)$ is a convex set, because it's an intersection of convex sets.

::: tip Properties of Convex Hull

1. $\mathrm{CV}(S)$ is the smallest convex set which contains $S$.

::: details Proof of Property 1
On the one hand, $\mathrm{CV}(S)$ is a convex set.

On the other hand, $\forall V$ is a convex set which contains $S$, we have $V\in \{V_\theta: \theta\in I\}$.
So $\displaystyle\mathrm{CV}(S)=\bigcap_{\theta\in I}V_\theta\subset V$, that is the minimality of $\mathrm{CV}(S)$.
:::

The second property describes the element structure of $\mathrm{CV}(S)$.

::: tip Property 2 of convex hull

$$
\mathrm{CV}(S)=\{\sum_{j=1}^n a_jx_j:a_j\ge 0, \sum_{j=1}^n a_j=1, x_j\in S, n\in\mathbb{N^*}\}
$$

This means $\mathrm{CV}(S)$ is the set of all convex combinations of elements of $S$.

::: details Proof of Property 2

We prove this property for two steps.

(1) Let $Z=\{\sum_{j=1}^n a_jx_j: \sum_{j=1}^n a_j=1, x_j\in S, n\in\mathbb{N^*}\}$. If $V$ is a convex set containing $S$, [we have shown](#thm-1) the convex conbination of elements in $V$ will be in $V$. These convex combinations include the convex combinations of elements in $S$. So $Z\subset V$. Let $V=\mathrm{CV}(S)$, we have $Z\subset \mathrm{CV}(S)$.

(2) It's obvious that $Z$ is a convex set. So $Z\supset \mathrm{CV}(S)$ is proven by the minimality of $\mathrm{CV}(S)$.

In conclusion, we have $Z\supset \mathrm{CV}(S)$ and $Z\subset \mathrm{CV}(S)$, which means $Z=\mathrm{CV}(S)$.

:::
