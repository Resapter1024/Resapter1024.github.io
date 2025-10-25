---
title: "Chapter 1: Distribution Function"
category:
  - Probability Theory
tag:
  - Study
  - Math
  - Statistic
date: 2025-09-29
order: 1
footer: false
---

## 1.1 Monotone Function

::: info Exercise 1

Prove that for the $f$ in Example 2 we have
$$
f(-\infty)=0,\qquad f(+\infty)=\sum_{n=1}^\infty b_n.
$$

::: tip Example 2

For any real number $t$, we set
$$
\delta_t(x)=\left\{\begin{matrix}
    0 & \text{for}\ x<t \\
    1 & \text{for}\ x\ge t
\end{matrix}\right.
$$
Let $\{a_n, n\ge 1\}$ be any given enumeration of the set of all rational numbers, and let $\{b_n,n\ge 1\}$ be a set of positive numbers such that $\displaystyle\sum_{n=1}^\infty b_n<\infty$. Consider now
$$
f(x)=\sum_{n=1}^\infty b_n\delta_{a_n}(x).
$$

:::

**Proof**.

We have
$$
f(x)\le \sum_{n=1}^\infty b_n<\infty.
$$
With Weierstrass M-test, we know the series is uniformly convergent. That implies
$$
f(-\infty)=\lim_{x\to -\infty}f(x)=\lim_{x\to -\infty}\sum_{n=1}^\infty b_n\delta_{a_n}(x)=\sum_{n=1}^\infty \lim_{x\to -\infty}b_n\delta_{a_n}(x)=\sum_{n=1}^\infty 0=0.
$$
$$
f(+\infty)=\lim_{x\to +\infty}f(x)=\lim_{x\to +\infty}\sum_{n=1}^\infty b_n\delta_{a_n}(x)=\sum_{n=1}^\infty \lim_{x\to +\infty}b_n\delta_{a_n}(x)=\sum_{n=1}^\infty b_n.
$$

::: info Exercise 2

Construct an increasing function on $(-\infty,+\infty)$ with a jump of size one at, each integer, and constant between jumps. Such a function cannot be represented as $\displaystyle\sum_{n=1}^\infty b_n\delta_n(x)$ with $b_n=1$ for each $n$, but a slight modification will do. Spell this out.

:::

**Solution**.

A function that satisfies the given properties is the **floor function**, $f(x) = \lfloor x \rfloor$.

This function cannot be represented by the form $\displaystyle\sum_{n=1}^\infty \delta_n(x)$ because that series is always zero for any negative input $x$, which does not match the floor function.

To construct a representation for the floor function, we can make two key modifications.

1. **Extend the range of summation.** The function has jumps at all integers, not just the positive ones. Therefore, we must sum over all integers $n \in \mathbb{Z}$. Our first attempt is:
    $$
    f_1(x) = \sum_{n \in \mathbb{Z}} \delta_n(x)
    $$
    However, this series diverges for every $x \in \mathbb{R}$ and thus needs to be corrected.
2. **Ensure convergence.** The series $f_1$ diverges because for any given $x$, there are infinitely many integers $n$ such that $n \le x$, causing an infinite number of ones to be accumulated in the sum. To resolve this, we can normalize each term by subtracting its value at a fixed reference point, such as $x=0$. This leads to the following convergent series:
    $$
    f(x) = \sum_{n \in \mathbb{Z}} [\delta_n(x) - \delta_n(0)]
    $$
    This final expression can be verified to be the floor function.

::: info Exercise 3

Suppose that $f$ is increasing and that there exist real numbers $A$ and $B$ such that $\forall x: A\le f(x)\le B$. Show that for each $\varepsilon>0$, the number of jumps of size exceeding $\varepsilon$ is at most $(B-A)/\varepsilon$. Hence prove $\text{(iv)}$, first for bounded $f$ and then in general.

::: tip Property (iv)

The set of discontinuities of $f$ is countable.

:::

**Proof**.

To prove $\text{(iv)}$, we follow a constructive, step-by-step approach. This method first addresses the case of bounded functions and then generalizes the result.

First of all, we consider the bounded case. Let $f$ be a monotonic increasing function whose range is contained in the interval $[A, B]$. For any given $\varepsilon > 0$, we will show that the number of discontinuities with a jump size greater than $\varepsilon$ is finite.

The proof is by contradiction. Assume there exist $n$ distinct points, $x_1 < x_2 < \dots < x_n$, at which the jump size is greater than $\varepsilon$, where $n > (B - A) / \varepsilon$.

Because $f$ is monotonic increasing, we have $f(x_i^+) \le f(x_{i+1}^-)$. Therefore, the total increase in the function's value between the left limit at $x_1$ and the right limit at $x_n$ must be greater than or equal to the sum of these individual jumps:

$$
B - A \ge f(x_n^+) - f(x_1^-) \ge \sum_{i=1}^{n} (f(x_i^+) - f(x_i^-))
$$

By our assumption, each jump is greater than $\varepsilon$, so:

$$
\sum_{i=1}^{n} (f(x_i^+) - f(x_i^-)) > \sum_{i=1}^{n} \varepsilon = n\varepsilon
$$

Combining these inequalities gives $B - A > n\varepsilon$, which implies $n < (B - A) / \varepsilon$. This contradicts our initial assumption that $n > (B - A) / \varepsilon$. Therefore, the number of points with a jump exceeding $\varepsilon$ is at most $(B - A) / \varepsilon$.

Secondly, we can prove that the set of all discontinuities for any bounded monotonic function is countable. The key idea is to categorize all discontinuities by the size of their jump.

Let $D$ be the set of all discontinuities of $f$. For any discontinuity $x \in D$, its jump size $J(x) = f(x^+) - f(x^-)$ must be positive. We can express $D$ as a union of a series of subsets:

$$
D = \bigcup_{n=1}^{\infty} D_n \quad \text{where } D_n = \{x \in D \mid J(x) > 1/n\}
$$

As we have known, for each positive integer $n$, the set $D_n$ (the set of points with a jump greater than $1/n$) is finite. Thus, the total set of discontinuities $D$ is a countable union of finite sets, which, by definition, is a countable set.

Finally, we extend this result from bounded functions to the general case. The strategy is to decompose the unbounded problem into a countable number of bounded problems.

We can partition the domain of the function based on its range. For each integer $z \in \mathbb{Z}$, we consider the behavior of the function over the value interval $[z, z+1]$. The set of discontinuities whose jumps are contained within such an interval satisfies the conditions for a bounded function. Therefore, by Step 2, this subset of discontinuities is countable.

The entire set of discontinuities can be seen as the union of the discontinuity subsets corresponding to all such integer intervals $[z, z+1]$. Since the set of integers $\mathbb{Z}$ is countable, this means the total set of discontinuities is a countable union of countable sets.

Therefore, the set of discontinuities of any monotonic function is countable.

::: info Exercise 4

Let $f$ be an arbitrary function on $(-\infty,+\infty)$ and $L$ be the set of $x$ where $f$ is right continuous but not left continous. Prove that $L$ is a countable set.

:::
