---
title: "Lec. 4 Completing a normed linear space"
category:
  - Functional Analysis
tag:
  - Study
  - Math
date: 2025-09-17
order: 4
footer: false
---

[Read this article in Chinese](/notes/fucntional%20analysis/lec4.md)

## Incomplete Space

Banach Space is a complete normed linear space. However, many spaces of interest are not complete. Here is an example.

::: tip Example of Incomplete Normed Linear Space

Let $X=C(\mathbb{R})$ be the space containing all continuous function defined on $\mathbb{R}$. Consider the $L_1$ norm on $X$, defined by

$$
\|f\|_1=\int_\mathbb{R} |f|\mathrm{d}x
$$

Now we define a function sequence $\{f_n\}$ as follows.

$$
f_n(x)=\left\{\begin{matrix}
  0 & x\le 0 \\
  nx & 0<x\le\dfrac{1}{n}\\
  1 & x>\dfrac{1}{n}
\end{matrix}\right.
$$

Firstly, we can prove the sequence is a Cauchy sequence. So we need to show $\|f_m-f_n\|_1\to 0(m,n\to \infty)$. Without loss of generality, we assume that $m>n$, then $\dfrac{1}{m}<\dfrac{1}{n}$. So

$$
\begin{align*}
\|f_m-f_n\|_1 &= \int_0^{1/m} (m-n)x dx + \int_{1/m}^{1/n} (1-nx) dx \\
&= \frac{m-n}{2m^2} + \left[x - \frac{n}{2}x^2\right]_{1/m}^{1/n} \\
&= \frac{m-n}{2m^2} + \left(\frac{1}{n} - \frac{1}{2n}\right) - \left(\frac{1}{m} - \frac{n}{2m^2}\right) \\
&= \frac{m-n+n}{2m^2} + \frac{1}{2n} - \frac{1}{m} = \frac{1}{2m} + \frac{1}{2n} - \frac{1}{m} \\
&= \frac{1}{2n} - \frac{1}{2m} = \frac{m-n}{2mn} \to 0
\end{align*}
$$

This shows that the sequence is a Cauchy sequence. However, we see the sequence will converge to this function

$$
f(x)=\left\{\begin{matrix}
  0 & x\le 0 \\
  1 & x>0
\end{matrix}\right.
$$

It's obvious that $f\notin C(\mathbb{R})$, which means $C(\mathbb{R})$ is not a complete space.

:::

From this example, we see that the reason a Cauchy sequence may not converge is that the space is too 'small'; that is, the limit of the sequence exists (in a larger context) but is not contained in the space itself. Therefore, completing a space means to add all the 'missing' limit points to make it complete.

## Completing NLS

### Completion via Quotient Space

We adopt a roundabout way to complete a normed linear space $X$. Before that, we need to introduce some assistant spaces.

::: info Definition of the Auxiliary Spaces

1. Let $Z=\{\mathbf{x}_j=\{x_j\}_{j\ge 1}: x_j\in X, \{x_j\}\ \text{is a Cauchy sequence}\}$ be the set containing all Cauchy sequences in $X$.
2. Let $Y=\{\mathbf{x}_j=\{x_j\}_{j\ge 1}: x_j\in X, x_j\to 0(j\to\infty)\}$ be the set containing all sequences which converge to $0$ in $X$.
3. we define the equivalence relation based on $Y$ in the space as $\{x_j\}\sim \{z_j\} \Leftrightarrow \{z_j-x_j\}\in Y\Leftrightarrow z_j-x_j\to 0(j\to\infty)$, so $[\mathbf{x}]=\{\{z_j\}_{j\ge 1}: z_j-x_j\to 0(j\to\infty)\}$. Then we have $\overline{X}=Z/Y=\{[\mathbf{x}]: \mathbf{x}\in Z\}$ which is the quotient space of $Z$ modulo $Y$.

It's obvious that $Y\subset Z$ is a linear subspace of $Z$.

:::

We construct $X_0=\{\{x,x,\ldots\}: x\in X\}$ as the set of constant sequences formed by elements of $X$. This set essentially constitutes an embedding of $X$ into $Z$.

Firstly, we can prove that $\overline{X}$ is a normed linear space.

::: info Theorem 1 (the Norm on $\overline{X}$)

For $\overline{X}=\{[\mathbf{x}]: \mathbf{x}\in Z\}$, we define

$$
\|[\mathbf{x}]\|=\lim_{j\to\infty}\|x_j\|
$$

as a norm of the space.

:::

::: details Proof of Theorem 1

First of all, we need to prove that the limit exists.

Notice that $\mathbf{x}=\{x_j\}_{j\ge 1}$ is a Cauchy sequence. So $\forall \varepsilon>0, \exist N>0$ s.t. $\forall m,n>N, \|x_m-x_n\|<\varepsilon$. So $|\|x_m\|-\|x_n\||\le \|x_m-x_n\|<\varepsilon$, which means $\{\|x_j\|\}$ is also a Cauchy sequence in $\mathbb{R}$. But it is known that $\mathbb{R}$ is a complete space. So $\displaystyle\lim_{j\to\infty}\|x_j\|$ exists.

Then we have to prove the norm is well-defined, which means the norm does not rely on the choice of representative element. Specifically, consider two sequences $\mathbf{x}, \mathbf{y}$ such that $[\mathbf{x}]=[\mathbf{y}]$. We need to prove $\displaystyle\lim_{j\to\infty}\|x_j\|=\lim_{j\to\infty}\|y_j\|$. With the definition of $\mathbf{x},\mathbf{y}$, we have $\|x_j-y_j\|\to 0(j\to\infty)$. So

$$
|\|y_j\|-\|x_j\|| \le \|y_j-x_j\|
$$

Let $j\to \infty$, we immediately obtain $\displaystyle\lim_{j\to\infty}\|x_j\|=\lim_{j\to\infty}\|y_j\|$.

Finally, we need to verify three properties of the norm.

1. Because $X$ is a normed linear space, $\forall x\in X, \|x\|\ge 0$. This implies $\displaystyle\|[\mathbf{x}]\|=\lim_{j\to\infty}\|x_j\|\ge 0$. If $\|[\mathbf{x}]\|=0$, $\lim_{j\to\infty}\|x_j\|=0$, which means $x_j\to 0(j\to \infty)$. That is $\mathbf{x}\in Y$. So $[\mathbf{x}]=[\mathbf{0}]$.
2. $\forall \alpha\in\mathbb{K}, \|\alpha[\mathbf{x}]\|=\|[\alpha\mathbf{x}]\|=\displaystyle\lim_{j\to\infty}\|\alpha x_j\|=|\alpha|\lim_{j\to\infty}\|x_j\|=|\alpha|\|[\mathbf{x}]\|$.
3. $\|[\mathbf{x}]+[\mathbf{y}_j]\|=\|[\mathbf{x}+\mathbf{y}]\|=\displaystyle\lim_{j\to\infty}\|x_j+y_j\|\le \lim_{j\to\infty}(\|x_j\|+y_j\|)=\lim_{j\to\infty}\|x_j\|+\lim_{j\to\infty}\|y_j\|=\|[\mathbf{x}]\|+\|[\mathbf{y}]\|$.

In conclusion, $\|[\mathbf{x}]\|$ is a norm of $\overline{X}$.

:::

::: tip Notice

Actually, we introduce the space $Z/Y$ is because we hope $\|[\mathbf{x}]\|=\displaystyle\lim_{n\to\infty}\|x_j\|$ is a norm, rather than considering the structure of $Y$ and $Z/Y$ at the beginning. Only in this situation, $\|[\mathbf{x}]\|=\displaystyle\lim_{n\to\infty}\|x_j\|$ can be a norm.

:::

::: tip Theorem 2

$\overline{X}$ is a complete normed linear space.

:::

::: details Proof of Theorem 2

To prove $\overline{X}$ is complete, we consider $\{[\mathbf{x}^n]\}$ a Cauchy sequence of equivalent classes. We need to prove $\exist [\mathbf{x}]\in \overline{X}$ s.t. $[\mathbf{x}^n]\to [\mathbf{x}](n\to \infty)$. Because $\{[\mathbf{x}^n]\}$ is a Cauchy sequence, we have $\forall \varepsilon>0,\exist N>0$ s.t. $\forall m,n>N, \|[\mathbf{x}^m]-[\mathbf{x}^n]\|\le \varepsilon$. which means

$$
\|[\mathbf{x}^m]-[\mathbf{x}^n]\|=\|[\mathbf{x}^m-\mathbf{x}^n]\|=\lim_{j\to\infty} \|x_j^m-x_j^n\|<\varepsilon \tag{1}
$$

**Firstly**, we need to construct the limit sequence $[\mathbf{x}]$.

Since $\{[\mathbf{x}^n]\}$ is a Cauchy sequence, for each fixed integer $k\in\mathbb{N}^*$, let $\varepsilon_k=\dfrac{1}{2^{k}}, \exist n_k>0$ s.t.

$$
\forall m,n\ge n_k, \lim_{j\to\infty} \|x_j^m-x_j^n\|<\dfrac{1}{2^{k}}
$$

Let $n=n_k, m=n_{k+1}$. So $\displaystyle\lim_{j\to\infty} \|x_j^{n_{k+1}}-x_j^{n_k}\|<\dfrac{1}{2^{k}}$. This implies that $\exist j_k>0$ s.t. 

$$
\forall j\ge S_k, \|x_{j}^{n_{k+1}} - x_{j}^{n_k}\| < \frac{1}{2^k}
$$

Without loss of generality, we assume that $\{n_k\}$ and $\{S_k\}$ is a strictly increasing sequence.

Knowing that $\forall n\in \mathbb{N}^*$, $\mathbf{x}^{n}$ is also a Cauchy sequence. So for $\exist R_k>0$ s.t.

$$
\forall i,j>R_k, \|x_i^{n_k}-x_j^{n_k}\|<\dfrac{1}{2^{k}}
$$

With two results above, let $T_k=\max(S_k,R_k)$. Similarly, we can assume $\{T_k\}$ is strictly increased. Let $j_k=T_k+1$, we define $x_k=x_{j_k}^{n_k}$ as a **diagonal sequence**. We can prove that $\mathbf{x}=\{x_k\}_{k\ge 1}$ will be the convergent sequence we need. It's obvious that $\mathbf{x}$ is a Cauchy sequence. Because for $k<m$

$$
\begin{align*}
  \|x_m-x_k\| & = \|x_{j_m}^{n_m}-x_{j_k}^{n_k}\| \\
  & \le \|x_{j_m}^{n_m}-x_{j_m}^{n_{m-1}}\|+\|x_{j_m}^{n_{m-1}}-x_{j_m}^{n_{m-2}}\|+\ldots+\|x_{j_m}^{n_{k+1}}-x_{j_m}^{n_k}\|+\|x_{j_m}^{n_k}-x_{j_k}^{n_k}\| \\
  & \le \sum_{i=k}^{m-1}\frac{1}{2^i}+\dfrac{1}{2^{k}} \\
  & \le \frac{3}{2^{k}}\to 0
\end{align*}
$$

That completes the construction.

**Secondly**, we need to prove that $[\mathbf{x}]$ is the limit of $\{[\mathbf{x}^n]\}$. This is equivalent to proving $\displaystyle\lim_{n\to\infty}\|[\mathbf{x}^n]-[\mathbf{x}]\|=0$.

We will prove that the subsequence $\{[\mathbf{x}^{n_k}]\}$ converges to $[\mathbf{x}]$. Since $\{[\mathbf{x}^n]\}$ is a Cauchy sequence, this implies the entire sequence converges to $[\mathbf{x}]$. Our goal is to show $\displaystyle\lim_{k\to\infty} \|[\mathbf{x}^{n_k}] - [\mathbf{x}]\| = 0$.

For any $m > k$, we use the triangle inequality:
$$
\|[\mathbf{x}^{n_k}] - [\mathbf{x}]\| \le \|[\mathbf{x}^{n_k}] - [\mathbf{x}^{n_m}]\| + \|[\mathbf{x}^{n_m}] - [\mathbf{x}]\|
$$

1. **Bounding the first term:** By construction of the subsequence $\{n_k\}$, since $m > k$, we have $n_m \ge n_k$. Thus:
    $$
    \|[\mathbf{x}^{n_k}] - [\mathbf{x}^{n_m}]\| < \frac{1}{2^k}
    $$
2. **Bounding the second term:** We estimate $\|[\mathbf{x}^{n_m}] - [\mathbf{x}]\| = \lim_{p\to\infty} \|x_p^{n_m} - x_p\|$. For any $p > m$, we have:
    $$
    \|x_p^{n_m} - x_p\| = \|x_{j_p}^{n_m} - x_{j_p}^{n_p}\| \le \sum_{i=m}^{p-1} \|x_{j_p}^{n_{i+1}} - x_{j_p}^{n_i}\| < \sum_{i=m}^{p-1} \frac{1}{2^i} < \frac{1}{2^{m-1}}
    $$
    Taking the limit as $p\to\infty$, we get:
    $$
    \|[\mathbf{x}^{n_m}] - [\mathbf{x}]\| \le \frac{1}{2^{m-1}}
    $$

Combining these results, we have for any $m > k$:
$$
\|[\mathbf{x}^{n_k}] - [\mathbf{x}]\| < \frac{1}{2^k} + \frac{1}{2^{m-1}}
$$
Since the left side is independent of $m$, we can let $m \to \infty$, which gives:
$$
\|[\mathbf{x}^{n_k}] - [\mathbf{x}]\| \le \frac{1}{2^k}
$$
As $k \to \infty$, the right side goes to 0. This proves that the subsequence converges, and thus the entire sequence $\{[\mathbf{x}^n]\}$ converges to $[\mathbf{x}]$. The proof is complete.

This proves that the subsequence converges, and thus the entire sequence $\{[\mathbf{x}^n]\}$ converges to $[\mathbf{x}]$. The proof is complete.
:::

### Completion of the Original Space

The structure of $Z,Y,X_0$ and $\overline{X}$ is great because of two observations as follows.

::: tip Observations

1. Consider $\mathbf{x}=(x,x,\ldots)\in X_0$, we have the norm of the sequence $\|\mathbf{x}\|=\displaystyle\lim_{n\to\infty} \|x\|=\|x\|$ is equal to the norm of its original image of $X$. This means the embedding contains the topological structure of the original space $X$.
2. $\overline{X_0/Y}=\overline{X}$. This means $X_0/Y$ is dense in $\overline{X}$.

:::

::: details Proof of the Observation 2

Actually, we have $X_0\subset Z$, so $X_0/Y\subset Z/Y=\overline{X}$. Then we have $\overline{X_0/Y}\subset \overline{X}$ naturally. We only need to prove $\overline{X}\subset \overline{X_0/Y}$.

Consider [\mathbf{x}]\in\overline{X}, where \mathbf{x}=\{x_1,x_2,\ldots\}$. For each $p\in\mathbb{N}^*$, define a constant sequence $\mathbf{z}^p=\{x_p,x_p,\ldots\}$. Then $[\mathbf{z}^p]\in X_0/Y$. We show that the sequence of equivalence classes $\{[\mathbf{z}^p]\}_{p\ge 1}$ converges to $[\mathbf{x}]$:

$$
\lim_{p\to\infty} |[\mathbf{z}^p]-[\mathbf{x}]|=\lim_{p\to\infty}\lim_{j\to\infty} |z_j^p-x_j|=\lim_{p\to\infty}\lim_{j\to\infty} |x_p-x_j|=0
$$

This implies $[\mathbf{x}]\in\overline{X_0/Y}$.

:::

Finally, we get a Banach space $\overline{X}=Z/Y$ as a completion of $X$. But what does this abstract process truly mean? We use an example to illustrate why this process of introducing a quotient space serves as a completion of the original space.

::: tip Completion of $\mathbb{Q}$

It is well-known that the space of rational numbers, $\mathbb{Q}$, is not complete. Let Z_Q be the set of all Cauchy sequences in \mathbb{Q}, and Y_Q be the set of all sequences in \mathbb{Q} that converge to 0. From Theorem 2, $\overline{\mathbb{Q}}=Z_\mathbb{Q}/Y_\mathbb{Q}$ is the completion of $\mathbb{Q}$.

Each element $[\mathbf{x}]\in \overline{\mathbb{Q}}$ falls into one of two cases:

1. The equivalence class $[\mathbf{x}]$ contains a constant sequence $\{y,y,\ldots\}$ for some $y \in \mathbb{Q}$. This class corresponds to the rational number $y$ itself. We identify $[\{y,y,\ldots\}]$ with $y$.
2. The equivalence class $[\mathbf{x}]$ does not contain any constant sequence. This class defines a new, irrational number. For example, the number $\sqrt{2}$ is defined as the equivalence class containing the sequence $\{1, 1.4, 1.414, \ldots\}$.

This newly constructed complete space, $Z_\mathbb{Q}/Y_\mathbb{Q}$, is precisely what we call the set of real numbers, $\mathbb{R}$.
:::

This example illustrates the general strategy. The completion of a normed linear space $X$ is a process of formally "adding" the missing limit points. These new points are defined as equivalence classes of Cauchy sequences. This construction elegantly achieves two goals: it embeds the original space $X$ into a larger space without altering its structure, and it guarantees that this new space is complete.
