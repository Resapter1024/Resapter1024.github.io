---
title: 概率论（四）：随机变量
category:
  - 概率论
tag:
  - 学习
  - 数学
date: 2025-09-26
order: 4
# 禁止显示页脚
footer: false
---

## 基本概念

::: info 定义 1（随机变量）

在概率空间 $(\Omega,\mathcal{F},P)$ 上，定义函数 $X:\Omega\to\mathbb{R}$，若 $\forall x\in\mathbb{R}, \{\omega:X(\omega)\le x\}\in\mathcal{F}$，则称 $X$ 为该概率空间上的**随机变量**.

:::

随机变量的实质就是概率空间上的实值可测函数.

::: info 定义 2（随机变量的分布）

称 $P(X(\omega)\in A)$ 为随机变量 $X$ 的概率分布.

:::

对随机变量的分布，可以用（累积）分布函数来刻画.

::: info 定义 3（累积分布函数）

称 $F(x)=P(X\le x),x\in\mathbb{R}$ 为随机变量 $X$ 的**累积分布函数**（CDF）. 记作 $X\sim F(x)$，称 $X$ 服从分布 $F$.

:::

分布函数具有如下的一系列性质：

::: tip 分布函数的性质

1. 单调递增：若 $x<y$，则 $F(x)\le F(y)$.
2. $\displaystyle\lim_{x\to -\infty} F(x)=0,\displaystyle\lim_{x\to +\infty} F(x)=1$.
3. 右连续性：$\displaystyle\lim_{h\to 0^+} F(x+h)=F(x)$.
4. 左极限：$\displaystyle\lim_{h\to 0^-} F(x+h)=F(x)-P(X=x)=P(X<x)$.

::: details 证明

1. $F(y)-F(x)=P(X\le y)-P(X\le x)=P(x<X\le y)\ge 0$，即证.
2. 任取 $\{a_n\}$ 递增满足 $\displaystyle\lim_{n\to\infty} a_n=+\infty$. 记 $A_n=\{X\le a_n\}\Rightarrow P(A_n)=F(a_n)$，从而有 $A_1\subset A_2\subset\ldots\subset A_n\subset\ldots$. 因此 $A_n$ 极限存在，为 $\displaystyle\bigcup_{n=1}^\infty A_n=\{X<+\infty\}$.从而
    $$
    \lim_{n\to\infty} F(a_n)=\lim_{n\to\infty}P(A_n)=P(X<\infty)=1
    $$
    这表明 $\displaystyle\lim_{x\to +\infty} F(x)=1$，类似可证 $\displaystyle\lim_{x\to -\infty} F(x)=0$
3. 任取 $\{a_n\}$ 递减满足 $\displaystyle\lim_{n\to\infty} a_n=0$. 记 $B_n=\{X\le x+a_n\}\Rightarrow P(B_n)=F(x+a_n)$，从而有 $B_1\supset B_2\supset\ldots\supset B_n\supset\ldots$. 因此 $B_n$ 极限存在，为 $\displaystyle\bigcap_{n=1}^\infty B_n=\{X\le x\}$.从而
    $$
    \lim_{n\to\infty} F(x+a_n)=\lim_{n\to\infty}P(B_n)=P(X\le x)=F(x)
    $$
    这表明 $\displaystyle\lim_{h\to 0^+} F(x+h)=F(x)$
4. 类似性质 3，任取 $\{a_n\}$ 递增满足 $\displaystyle\lim_{n\to\infty} a_n=0$. 记 $C_n=\{x+a_n< X\le x\}\Rightarrow P(B_n)+P(C_n)=F(x)$. 又 $C_1\supset C_2\supset \ldots\supset C_n\supset\ldots$. 因此 $C_n$ 极限存在，为 $\displaystyle\bigcap_{n=1}^\infty C_n=\{X=x\}$. 从而
    $$
    F(x)=\lim_{n\to\infty} F(x+a_n)+\lim_{n\to\infty} P(C_n)=F(x-)+P(X=x)
    $$
    这表明 $\displaystyle\lim_{h\to 0^-} F(x+h)=F(x)-P(X=x)=P(X<x)$.

:::

## 离散型随机变量

### 离散型随机变量的定义

离散型随机变量只有至多可数个取值，因此其分布列可以写成 $P(X=x_i)=p_i, i\in I$ 的形式，其中 $I$ 为至多可数的指标集.

::: info 定义 4（概率质量函数）

设 $\{x_i\}$ 为离散型随机变量 $X$ 的所有可能取值，记 $P(X=x_i)=p_i,i=1,2,\ldots$，则
$$
\{p(x_i),i=1,2.\ldots,\}
$$
称为 $X$ 的**概率质量函数**（PMF，Probability Mass Function）.

:::

自然有 $p(x_i)\ge 0,i=1,2,\ldots$ 且 $\displaystyle\sum_{i=1}^\infty p(x_i)=1$. 同时也可以导出其分布函数：

::: tip 离散型随机变量的分布函数

对具有分布列 $\{p(x_i),i=1,2.\ldots,\}$ 的离散型随机变量 $X$, 其分布函数为
$$
F(x)=P(X\le x)=\sum_{x_k\le x}p(x_k)
$$

:::

### 典型的离散分布

::: info I. 单点分布

随机变量 $X$ 只在一点 $x=C$ 上取值，分布列为 $P(X=C)=1$.

:::

::: info II. 离散均匀分布

给定有限点集 $C=\{c_1,\ldots,c_k\},|C|=k$，随机变量 $X$ 在 $C$ 上等可能取值，此时称 $X$ 服从离散均匀分布，记作 $X\sim \mathrm{DUnif}(C)$. 其分布列为
$$
P(X=c_k)=\frac{1}{|C|}=\frac{1}{k}
$$
这和有限可能的古典概型非常类似，事实上，也有若 $A\subset C$，则 $P(X\in A)=\dfrac{|A|}{|C|}$.

:::

::: info III. Bernoulli 分布（两点分布）

设随机事件 $A$ 发生的概率为 $p$，随机变量 $X=\mathbb{I}_A$ 为 $A$ 发生的示性，此时称 $X$ 服从 Bernoulli 分布，记作 $X\sim b(1,p)$. 其分布列为
$$
\left\{\begin{align*}
    P(X=0)=1-p \\
    P(X=1)=p
\end{align*}\right.
$$

:::

::: info IV. 二项分布

设在一次试验中，随机事件 $A$ 发生的概率为 $p$，现考虑进行 $n$ 次试验，记 $X$ 为其中 $A$ 发生的次数，则 $X$ 服从二项分布，记作 $X\sim \mathrm{Bin}(n,p)$，其分布列为
$$
P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}
$$

::: tip 注

1. 若 $X\sim \mathrm{Bin}(n,p)$，则 $(n-X)\sim \mathrm{Bin}(n,1-p)$.
2. 设 $n$ 次试验中，每次实验都对应一个服从两点分布的随机变量 $X_i,i=1,2,\ldots,n$，则
    $$
    X=X_1+X_2+\ldots+X_n
    $$

:::

::: info V. 超几何分布

设 $N$ 件产品中有 $M$ 件次品，无放回地从 $N$ 件产品中随机抽取 $n$ 件，其中次品的个数为随机变量 $X$，则 $X$ 服从超几何分布，记作 $X\sim \mathrm{HGeo}(N,M,n)$，其分布列为
$$
P(X=k)=\frac{\displaystyle\binom{M}{k}\binom{N-M}{n-k}}{\displaystyle\binom{N}{n}}
$$

::: tip 注

这里，可以将“被抽取”和“次品”仅仅视为两种属性，考虑随机变量 $X$ 为同时抽中两种属性的产品个数，从而可以得到分布 $\mathrm{HGeo}(N,M,n)$ 和 $\mathrm{HGeo}(N,n,M)$ 是完全等价的.

:::

::: info VI. 几何分布

考虑不断进行的 Bernoulli 试验，其成功概率为 $p$，记 $X$ 为这一系列试验中**首次成功**时试验进行的次数，则称 $X$ 服从几何分布，记作 $X\sim\mathrm{Geo}(p)$，其分布列为
$$
P(X=k)=(1-p)^{k-1}p
$$

::: tip 无记忆性

设 $X$ 服从几何分布，设前 $m$ 次试验均未成功，从第 $m+1$ 次开始**重新计数**，此时首次成功时试验进行的次数 $X'$ 仍然服从几何分布.

::: details 证明

事实上有
$$
P(X=k|\text{前}m\text{次失败})=\dfrac{q^{k-1}p}{q^m}=q^{k-m-1}p=P(X=k-m)
$$
这就证明了 $X'\sim \mathrm{Geo}(p)$.

:::

::: info VII. Pascal 分布

考虑不断进行的 Bernoulli 试验，其成功概率为 $p$，记 $X$ 为这一系列试验中第 $r$ 次成功时试验进行的次数，则称 $X$ 服从 Pascal 分布，记作 $X\sim\mathrm{Pa}(r,p)$，其分布列为
$$
P(X=k)=\binom{k-1}{r-1}p^r(1-p)^{k-r}
$$

::: tip 注

1. $\mathrm{Pa}(1,p)=\mathrm{Geo}(p)$.
2. 考虑第 $i-1$ 次成功至第 $i$ 次成功中进行的试验次数 $X_i$，有 $X_i\sim\mathrm{Geo}(p)$ 且 $X=X_1+\ldots+X_r$.

:::

::: info VIII. 负二项分布

考虑不断进行的 Bernoulli 试验，其成功概率为 $p$，记 $X$ 为这一系列试验中第 $r$ 次成功时的**失败次数**，则称 $X$ 服从负二项分布，记作 $X\sim\mathrm{NB}(r,p)$，其分布列为
$$
P(X=k)=\binom{r+k-1}{k}p^r(1-p)^{l}
$$
实际上 $X+r\sim\mathrm{Pa}(r,p)$，因此负二项分布和 Pascal 分布只差一个常数.

:::

::: info IX. 负超几何分布

设 $N$ 件产品中有 $M$ 件次品，无放回地从 $N$ 件产品中随机抽取 $X$ 件，其中恰含 $r$ 件次品，则称 $X$ 服从负超几何分布分布，$X\sim\mathrm{NHG}(N,M,r)$，其分布列为
$$
P(X=x)=\frac{\displaystyle\binom{M}{r-1}\binom{N-M}{x-r}}{\displaystyle\binom{N}{x-1}}\cdot\frac{M-(r-1)}{N-(x-1)}=\frac{\displaystyle\binom{x-1}{r-1}\binom{N-x}{M-r}}{\displaystyle\binom{N}{M}}
$$
其中 $x=r,r+1,\ldots,N-M+r$.

:::

::: info X. 多项分布

考虑进行 $n$ 次独立重复实验，试验有 $r$ 种结果，分别记作 $A_1,\ldots,A_r$，其中 $P(A_i)=p_i,\displaystyle\sum_{i=1}^r p_i=1$. 考虑随机向量 $X=(X_1,\ldots,X_r)$，其中 $X_i$ 为 $A_i$ 出现的次数，则称 $X$ 服从多项分布，其分布列为
$$
P(X_1=x_1,\ldots,X_r=x_r)=\dfrac{n!}{x_1!\ldots x_r!}p_1^{x_1}\ldots p_{r}^{x_r}
$$
其中 $\displaystyle\sum_{i=1}^r x_i=n$.

:::

::: info XI. Poisson 分布

若随机变量 $X$ 可取一些非负整数值，且 $P(X=k)=\dfrac{\lambda^k}{k!}e^{-\lambda}$，则称 $X$ 服从参数为 $\lambda$ 的 Poisson 分布，记作 $X\sim\mathrm{Poi}(\lambda)$.

::: tip 注

Poisson 分布在随机过程中是一个很重要的分布，它正是由 Poisson 过程导出的分布.

:::

## 连续型随机变量

### 连续型随机变量的定义

::: info 定义 5

随机变量 $X$ 的取值为某区间 $[c,d]$ 或 $(-\infty,+\infty)$ 时，分布函数 $F(x)$ 为一<u>绝对连续函数</u>，即存在非负可积函数 $p(x)$ 使得
$$
F(x)=\int_{-\infty}^x p(y)\mathrm{d}y
$$
称 $X$ 为连续型随机变量，并称 $p(x)$ 为 $X$ 的**概率密度函数**.

:::

概率密度函数**不是概率**. 它和分布函数具有下面的性质

::: tip 性质

1. （密度函数和分布函数的关系）$p(x)=F'(x)$.
2. （非负性与规范性）$p(x)\ge 0,\int_{-\infty}^{+\infty} p(x)\mathrm{d}x=1$.
3. （正测集的概率）$P(a< X\le b)=F(b)-F(a)=\int_a^b p(x)\mathrm{d}x$.
   进一步地，对任意 Borel 集 $B$，有 $P(X\in B)=\int_B p(x)\mathrm{d}x$.
4. （零测集的概率）$\forall c\in\mathbb{R},P(X=c)=0$.

:::

### 典型的连续分布

::: info I. 均匀分布

设 $a,b\in\mathbb{R},a<b$，则由下列密度函数定义的分布称为 $[a,b]$ 上的均匀分布.
$$
p(x)=\left{\begin{matrix}
    \dfrac{1}{b-a}, & a\le x\le b \\
    0, & \text{otherwise}
\end{matrix}\right.
$$
对应的分布函数为
$$
F(x)=\left{\begin{matrix}
    0, & x<a \\
    \dfrac{x-a}{b-a}, & a\le x<b \\
    1, & x\ge b
\end{matrix}\right.
$$
记作 $X\sim U[a,b]$.

:::

::: tip 给定区间下均匀分布的条件分布

设 $X\sim U(a,b),(c,d)\subset(a,b)$，则给定 $X\in(c,d)$ 时，$X$ 的条件分布为 $U(c,d)$.

::: details

$$
P(X\le u\mid X\in(c,d))=\frac{P(X\le u, c<X<d)}{P(c<X<d)}=\dfrac{c<X\le u}{P(c<X<d)}=\frac{u-c}{d-c}
$$
而 $u\le c$ 时 $P(X\le u\mid X\in(c,d))=0$；$u>d$ 时 $P(X\le u\mid X\in(c,d))=1$. 即证

:::

均匀分布在数理统计中具有重要的地位，这是由如下的定理导出的.

::: tip 定理 1

对任意的连续型随机变量 $X$，记 $F(x)$ 为其分布函数，若 $F$ 严格单调递增，则 $F(X)\sim U(0,1)$.

::: details 证明

由于 $F$ 严格单调递增，其存在唯一严格单调递增的反函数 $F^{-1}$，从而
$$
P(F(x)\le u)=P(X\le F^{-1}(u))=F(F^{-1}(u))=u, 0\le u\le 1
$$
这就说明了 $F(X)\sim U(0,1)$.

:::

::: info II. 正态分布

若连续型随机变量 $Z$ 的密度函数为
$$
p(x)=\frac{1}{\sqrt{2\pi}\sigma}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right),x\in\mathbb{R}
$$
其中 $\sigma>0,\mu\in\mathbb{R}$ 为常数，则称 $Z$ 服从正态分布，记作 $Z\sim N(\mu,sigma^2)$. 并称 $\mu$ 为该正态分布的均值，$\sigma^2$ 为方差.

若 $\mu=0,\sigma^2=1$，则称其为标准正态分布，记作 $N(0,1)$. 并记标准正态分布的密度函数为 $\varphi(x)$，分布函数为 $\Phi(x)$.

:::

正态分布具有如下的性质.

::: tip 正态分布的性质

1. $\varphi(x)=\varphi(-x)$.
2. $\Phi(z)=1-\Phi(-z)$.
3. $Z\sim N(0,1)\Rightarrow -Z\sim N(0,1)$.
4. 若 $Z\sim N(\mu,sigma^2)$，则 $\dfrac{Z-\mu}{\sigma}\sim N(0,1)$.

:::

正态分布在概率论与数理统计中具有极高的地位，几乎任何讨论随机变量渐进性质的定理都绕不开正态分布.

::: tip De Moive-Laplae 中心极限定理

设 $S_n$ 为 $n$ 重 Bernoulli 试验的成功次数，每次试验成功的概率为 $p$，则
$$
P\left(a<\frac{S_n-np}{\sqrt{np(1-p)}}\le b\right)\to \Phi(b)-\Phi(a), n\to \infty
$$

:::

::: info III. 指数分布

若随机变量 $X$ 的概率密度函数为
$$
p(x)=\left\{\begin{matrix}
    \lambda\mathrm{e}^{-\lambda x}, & x\ge 0 \\
    0, & x<0
\end{matrix}\right.
$$
则称 $X$ 服从指数分布，记作 $X\sim \mathrm{Exp}(\lambda)$. 其累积分布函数为
$$
F(x)=\left\{\begin{matrix}
    1-\mathrm{e}^{-\lambda x}, & x\ge 0 \\
    0, & x<0
\end{matrix}\right.
$$

:::

由累积分布函数可以直接导出 $P(X>x)=\mathrm{e}^{-\lambda x}$.

下面的定理证明，在所有的连续分布中，指数分布是唯一具有无记忆性的分布.

::: tip 定理 2

$X\sim\mathrm{Exp}(\lambda)$，当且仅当 $\forall s>0,t>0$，有
$$
P(X> s+t\mid X> s)=P(X>t)
$$

::: details 证明

先证必要性. 若 $X\sim\mathrm{Exp}(\lambda)$，则
$$
P(X> s+t\mid X> s)=\frac{P(X>s+t,X>s)}{P(X>s)}=\frac{P(X>s+t)}{P(X>s)}=\frac{\mathrm{e}^{-\lambda(s+t)}}{\mathrm{e}^{-\lambda s}}=\mathrm{e}^{-\lambda t}P(X>t)
$$

再证充分性. 设 $G(s)=P(X>s)$，则由于 $\dfrac{P(X>s+t)}{P(X>s)}=P(X> s+t\mid X> s)=P(X>t)$，有
$$
G(s+t)=G(s)G(t)
$$
这是一个积性 Cauchy 方程，知道其连续时一定有 $G(x)=a^x$. 由 $G(x)\in(0,1)$，一定有 $\exist \lambda>0$ 使得 $G(x)=^{\mathrm{e}-\lambda x}$，即 $X\sim\mathrm{Exp}(\lambda)$.

:::

## 随机变量的函数
