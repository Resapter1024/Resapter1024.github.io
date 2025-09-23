---
title: "Lec. 3 Normed Linear Space: definition and basic properties"
category:
  - Functional Analysis
tag:
  - Study
  - Math
date: 2025-09-15
order: 3
footer: false
---

[Read this article in Chinese](/notes/fucntional%20analysis/lec3.md)

## Norm, Distance and Convergence

::: info Definition 1 (Norm)

Consider a linear space $X$ over a field $\mathbb{K}$. A **norm** on $X$ is a function $N: X\to [0,+\infty)$ satisfying three properties as follows.

1. $N(x)\ge 0, \forall x\in X$ and $N(x)=0\Leftrightarrow$ $x=0$.
2. $\forall \alpha\in\mathbb{K}$ and $x\in X$, $N(\alpha x)=|\alpha| N(x)$.
3. $\forall x,y \in X, N(x+y)\le N(x)+N(y)$.

We denote $N(x)$ as $\|x\|$.

A linear space equipped with a norm is called **normed linear space**.

:::

::: tip Notice

Not every linear space can have a norm defined on it. Here is an example in real analysis. We consider

$$
L_p=\left\{f:\int |f(x)|^p\mathrm{d}x<\infty\right\}
$$

When $p\ge1$, we can define the norm as $\|f\|_p=\left(\displaystyle\int |f(x)|^p\mathrm{d}x\right)^\frac{1}{p}$. However, when $p\in (0,1)$, the norm above cannot satisfy the triangle inequality. Actually, it can be proven that for $p\in (0,1)$, there does not exist any function $f: X \to [0, +\infty)$ satisfying the three properties of a norm.

If we relax the property $\|\alpha x\|=|\alpha|\|x\|$,

$$
\|f\|_p=\int |f(x)|^p\mathrm{d}x
$$

can satisfy the triangle inequality. This function, while not a norm, can be used to define a metric, making the space a **Fréchet space**.

:::

Intuitively, the norm in a linear space is similar to "the absolute value" or "the module", which represents the distance between $x$ and $0$ in $\mathbb{R}$ or $\mathbb{C}$. So we have two observations about it.

::: tip Observations

1. $\forall x,y\in X$,$|\|x\|-\|y\||\le \|x-y\|$.
2. $\forall x\in X, \|-x\|=\|x\|$.

::: details Proof of Observations

1. With property 3, $\|x\|=\|x-y+y\|\le \|x-y\|+\|y\|$, that is $\|x\|-\|y\|\le \|x-y\|$. By swapping $x$ and $y$, we get $\|y\|-\|x\|\le \|x-y\|$. That implies $|\|x\|-\|y\||\le \|x-y\|$.
2. We have $\|-x\|=\|(-1)x\|=|-1|\|x\|=\|x\|$.

:::

Based on the norm, we can define the distance in a linear space. So we must define the general distance firstly.

::: info Definition 2 (Distance)

The **distance** in a linear space $X$ is a function $d:X\times X\to [0,+\infty)$ which satisfies three properties as follows.

1. $\forall x,y\in X, d(x,y)\ge 0$, and $d(x,y)=0\Leftrightarrow x=y$.
2. $\forall x,y\in X, d(x,y)=d(y,x)$.
3. $\forall x,y,z \in X, d(x,y)\le d(x,z)+d(z,y)$.

:::

A set $X$ with the distance is called a **metric space**. We will see a normed linear space is always a metric space.

::: tip Theorem 1

Let $\|\cdot\|$ be the norm on a linear space $X$. Then $\forall x,y\in X$, we define $d:X\times X\to[0,+\infty)$ as

$$
d(x,y)=\|x-y\|
$$

which is the distance on $X$.

::: details Proof of Theorem 1

We need to verify three properties of the distance.

1. $d(x,y)=\|x-y\|\ge 0$, and $d(x,y)=0\Leftrightarrow\|x-y\|=0\Leftrightarrow x-y=0\Leftrightarrow x=y$.
2. $d(y,x)=\|y-x\|=\|x-y\|=d(x,y)$.
3. $d(x,y)=\|x-y\|=\|x-z+z-y\|\le \|x-z\|+\|z-y\|=d(x,z)+d(z,y)$.

That proves $d(x,y)=\|x-y\|$ is a distance.

:::

The theorem shows the norm can give the distance. And once we have a distance, we can get a topology, which means we can define converging sequences in $X$, and further the topological structure of $X$.

::: info Definition 3 (Converging In Norm)

Let $\{x_n\}$ be a sequence in the linear space $X$. We say $\{x_n\}$ converge to $x\in X$ if and only if $d(x_n,x)=\|x_n-x\|\to 0, n\to\infty$. In this case, we say $\{x_n\}$ **converges to** $x$ **in norm**, denoted as $x_n\to x(n\to\infty)$.

:::

In the same linear space, sometimes we can define different norms. It force us to consider the relationship between them.

::: info Definition 4 (Equivalent Norms)

Suppose $\|\cdot\|_1$ and $\|\cdot\|_2$ are two different norms on the same linear space $X$, we say these two norms are **equivalent**, if $\exist 0<c<\infty$, such that for all $x\in X$,

$$
c\|x\|_1\le \|x\|_2\le \frac{1}{c}\|x\|_1, \forall x\in X
$$

:::

The inequality limits the 2nd norm with the 1st norm by both of the sides.

::: tip Theorem 2

Let $\|\cdot\|_1$ and $\|\cdot\|_2$ be equivalent in the linear space $X$. Then $\{x_n\}$ converges to $x$ in $\|\cdot\|_1 \Leftrightarrow \{x_n\}$ converges to $x$ in $\|\cdot\|_2$.

The theorem shows that the equivalent norms will give rise to the same topology structures, therefore to the same open and closed sets.

::: details Proof of Theorem 2

We have $\|x_n-x\|_1\to 0, n\to\infty$, that is $\forall \varepsilon>0, \exist N>0$ s.t. $\forall n>N, \|x_n-x\|_1<c\varepsilon$.

So $\|x_n-x\|_2<\dfrac{1}{c}\|x_n-x\|_1<\varepsilon$. That implies $\|x_n-x\|_2\to 0, n\to\infty$.

:::

There is some examples of normed linear space as follows.

::: tip Examples of Normed Linear Space

1. If $X$ is a normed linear space and $Y\subset X$ is a linear subspace, $Y$ is also a normed linear space with the norm defined on $X$.
2. If $X_1$ is a normed linear space with the norm $\|\cdot\|_1$ and $X_2$ is a normed linear space with the norm $\|\cdot\|_2$, the product space $X_1\times X_2=\{(x_1,x_2):x_1\in X_1,x_2\in X_2\}$ is also a normed linear space. The norm can be defined in one of the following three ways.
   1. $\|(x_1,x_2)\|_a=\|x_1\|_1+\|x_2\|_2$.
   2. $\|(x_1,x_2)\|_b=\max(\|x_1\|_1,\|x_2\|_2)$.
   3. $\|(x_1,x_2)\|_c=\sqrt{\|x_1\|_1^2+\|x_2\|_2^2}$.
   - These norms are equivalent.
3. If $X$ is a normed linear space with the norm $\|\cdot\|$ and $Y\subset X$ is a linear subspace, the closure $\overline{Y}=\{x\in X: \exist\{y_n\}\subset Y\ \text{s.t.}\ y_n\to x(n\to\infty)\}$. Then $\overline{Y}$ is also a linear subspace with the norm $\|\cdot\|$.

::: details Proof of the Equivalence of 3 Norms in Example 2

1. Let $c_1 = \dfrac{1}{2}$, then
    $$
    \begin{align*}
      c_1\max(\|x_1\|_1,\|x_2\|_2) & \le \max(\|x_1\|_1,\|x_2\|_2) \\
      & \le \|x_1\|_1+\|x_2\|_2 \\ 
      & \le 2 \max(\|x_1\|_1,\|x_2\|_2) \\
      &=\dfrac{1}{c_1}\max(\|x_1\|_1,\|x_2\|_2)
    \end{align*}
    $$
    this implies $\|(x_1,x_2)\|_a$ is equivalent with $\|(x_1,x_2)\|_b$.
2. Let $c_2 = \dfrac{1}{\sqrt{2}}$, then
    $$
    \begin{align*}
      c_2 (\|x_1\|_1+\|x_2\|_2) & = \sqrt{2} \frac{\|x_1\|_1+\|x_2\|_2}{2} \\
      & \le \sqrt{\|x_1\|_1^2+\|x_2\|_2^2} \\
      & \le \|x_1\|_1+\|x_2\|_2 \\
      & \le \dfrac{1}{c_2} (\|x_1\|_1+\|x_2\|_2)
    \end{align*}
    $$
    this implies $\|(x_1,x_2)\|_c$ is equivalent with $\|(x_1,x_2)\|_a$.
3. Let $c_3 = \dfrac{1}{\sqrt{2}}$, then
    $$
    \begin{align*}
      c_3 \max(\|x_1\|_1,\|x_2\|_2) & \le \max(\|x_1\|_1,\|x_2\|_2) \\
      & \le \sqrt{\|x_1\|_1^2+\|x_2\|_2^2} \\
      & \le \sqrt{2} \max(\|x_1\|_1,\|x_2\|_2) \\
      & = \dfrac{1}{c_3} \max(\|x_1\|_1,\|x_2\|_2)
    \end{align*}
    $$
    this implies $\|(x_1,x_2)\|_b$ is equivalent with $\|(x_1,x_2)\|_c$.

:::

Specifically, quotient space can always be normed. Theorem 3 ensures it.

::: info Theorem 3 (the Norm of the Quotient Space)

Suppose $X$ is a normed linear space and $Y$ is a linear subspace of $X$, which is a closed set, $X/Y$ is the quotient space of $X$ modulo $Y$. We can define a norm on it as
    $$
    \|[x]\|=\inf\{\|z\|,z\in [x]\}
    $$
    So $X/Y$ is a normed linear space.

::: details Proof of Theorem 3

Notice that the zero element of $X/Y$ is $[0]=Y$, because $z\in [0]\Leftrightarrow z-0=z\in Y$. Then we need to verify three properties of the norm.

1. $\forall z\in [x], \|z\|\ge 0$, So $\|[x]\|\ge 0$. And $\|[x]\|=0\Leftrightarrow \inf \{\|z\|: z\in [x]\}=0$, which means $\exist \{z_j\}_{j\ge 1}\subset [x]$ s.t. $\|z_j\|\to 0$. So $z_j\to 0 (j\to \infty)$. Meanwhile, $z_j-x\in Y$, that is $z_j-x\to 0-x=-x\in Y$ because $Y$ is a closed set. This implies $x\in Y$, so $[x]\subset [0]$. On the one hand, let $z\in [x]\Leftarrow z-x\in Y\Leftarrow z=z-x+x\in Y\Leftarrow z\in[0]$. On the other hand, let $z\in [0]=Y$, $z-x\in Y$, so $z\in[x]$. In conclusion, $[x]=[0]$.
2. $\forall \alpha\in \mathbb{K}, \|\alpha[x]\|=\|[\alpha x]\|=\inf \{\|y\|:y\in [\alpha x]\}$. If $\alpha=0$, $\|\alpha[x]\|=\inf \{\|y\|:y\in [0]\}=0=0\|[x]\|$. Otherwise, we have $y\in [\alpha x]\Leftrightarrow \exist z\in [x]$ s.t. $y=\alpha z$. That is $\|[\alpha x]\|=\inf \{\|y\|:y\in [\alpha x]\}=\inf \{\|\alpha z\|:z\in [x]\}=|\alpha|\inf \{\|z\|:z\in [x]\}=|\alpha|\|[x]\|$.
3. $\forall x,y\in X, \|[x]+[y]\|=\|[x+y]\|=\inf\{\|z\|:z\in[x+y]\}$. For $z\in [x+y]=[x]+[y], \exist z_x\in[x],z_y\in[y]$ s.t. $z=z_x+z_y$. So $\|z\|\le \|z_x\|+\|z_y\|$. This implies $\inf\{\|z\|:z\in[x+y]\}\le \inf \{\|z_x\|+\|z_y\|: z_x\in[x],z_y\in[y]\}$. And $\inf \{\|z_x\|: z_x\in[x]\}+\inf \{\|z_y\|:z_y\in[y]\}=\|[x]\|+\|[y]\|$. So we neet to prove $\inf \{\|z_x\|: z_x\in[x]\}+\inf \{\|z_y\|:z_y\in[y]\}\ge \inf \{\|z_x\|+\|z_y\|: z_x\in[x],z_y\in[y]\}$. With the property of infimum, $\forall \varepsilon>0, \exist w_1\in[x],w_2\in[y]$ s.t.
    $$
    \inf \{\|z_x\|: z_x\in[x]\}\le \|w_1\|\le \inf \{\|z_x\|: z_x\in[x]\}+\dfrac{\varepsilon}{2}
    $$
    $$
    \inf \{\|z_y\|: z_y\in[y]\}\le \|w_2\|\le \inf \{\|z_y\|: z_y\in[y]\}+\dfrac{\varepsilon}{2}
    $$
    This implies that
    $$
    \begin{align*}
      \inf \{\|z_x\|+\|z_y\|: z_x\in[x],z_y\in[y]\} &\le \|w_1\|+\|w_2\| \\
      &\le \inf \{\|z_x\|: z_x\in[x]\}+\inf \{\|z_y\|: z_y\in[y]\}+\varepsilon
    \end{align*}
    $$
    Let $\varepsilon\to 0$, we have $\inf \{\|z_x\|: z_x\in[x]\}+\inf \{\|z_y\|:z_y\in[y]\}\ge \inf \{\|z_x\|+\|z_y\|: z_x\in[x],z_y\in[y]\}$. So the triangle inequality is proven.

In conclusion, $\|[x]\|$ is a norm.

:::

## Banach Space

Before we introduce Banach Space, we need to define define the concept of completeness which is based on Cauchy sequence.

::: info Definition 5 (Complete Space)

$X$ is a **complete space** if and only if every Cauchy sequence in $X$ converges to a limit that is also in $X$, which means $\forall \{x_k\}\subset X$ is a Cauchy sequence, $\exist x\in X$ s.t. $x_k\to x(k\to\infty)$.

::: info Definition 6 (Cauchy Sequence)

Let $X$ be a normed linear space and a sequence $\{x_k\}_{k\ge 1}\subset X$. $\{x_k\}$ is a **Cauchy sequence** if and only if $\|x_m-x_n\|\to 0 (m,n\to \infty)$, which means $\forall \varepsilon>0,\exist K>0$ s.t. $\forall m,n>K, \|x_m-x_n\|<\varepsilon$.

:::

Finally, we can define Banach Space, which is important in Functional Analysis.

::: info Definition 7 (Banach Space)

$X$ is a Banach space if $X$ is a complete normed linear space.

:::
