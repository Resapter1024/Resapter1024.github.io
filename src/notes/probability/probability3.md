---
title: 概率论（三）条件概率
category:
  - 概率论
tag:
  - 学习
  - 数学
date: 2025-09-22
order: 3
# 禁止显示页脚
footer: false
---

## 条件概率

### 定义

::: info 定义 1（条件概率）

设概率空间 $(\Omega,\mathcal{F},P)$ 中事件 $B\in\mathcal{F}$ 满足 $P(B)>0$，则$\forall A\in\mathcal{F}$，定义
$$
P(A|B)=\frac{P(AB)}{P(B)}
$$
为 $B$ 发生的条件下 $A$ 发生的概率.

::: tip 注意

1. $P(A|B)\neq P(B|A)$.
2. $P(AB)=P(A)P(B|A)$. 此时称 $P(AB)$ 为联合概率，$P(A)$ 为 $A$ 的边际概率.

:::

::: tip 条件概率的性质

1. 非负性：$P(A|B)\ge 0$.
2. 规范性：$P(\Omega|B)=1$.
3. 可列可加性：$P\left(\displaystyle\sum_{n=1}^\infty A_n|B\right)=\sum_{n=1}^\infty P\left(A_n|B\right)$.
在此基础上可以推导出其他的关于条件概率的性质.
4. $P(\varnothing|B)=0$.
5. $P(A|B)=1-P(\bar{A}|B)$.
6. 加法公式：$P(A_1\cup A_2|B)=P(A_1|B)+P(A_2|B)-P(A_1\cap A_2|B)=$.

:::

有了条件概率，我们可以导出如下的乘法公式：

::: info 乘法公式
$$
P(A_1\ldots A_n)=P(A_1)P(A_2|A_1)\ldots P(A_n|A_1\ldots A_{n-1})
$$
::: details 证明
$$\mathrm{RHS}=P(A_1)\frac{P(A_1A_2)}{P(A_1)}\ldots \frac{P(A_1\ldots A_{n-1}A_n)}{P(A_1\ldots A_{n-1})}=P(A_1\ldots A_n)=\mathrm{LHS}$$
:::

### 全概率公式

::: info 定义 2（完备事件组）

设 $A_1,A_2,\ldots,A_n,\ldots$ 为一个完备事件组，如果它们是 $\Omega$ 的一个分割，即 $A_n$ 互不相容且 $\displaystyle\sum_{n=1}^\infty A_n=\Omega$.

:::

此时一定有 $\{A_nB\}_{n\ge 1}$ 是一组互斥事件，且 $\displaystyle\bigcup_{n=1}^\infty A_nB=B\cap \bigcup_{n=1}^\infty A_n=B$. 因此
$$
\displaystyle P(B)=P(\bigcup_{n=1}^\infty A_nB)=\sum_{n=1}^\infty P(A_nB)
$$
将联合概率写成条件概率乘以边际的形式，即得到下面的**全概率公式**.

::: info 全概率公式
$$
P(B)=\sum_{n=1}^\infty P(A_n)P(B|A_n)
$$
::: tip 注意

上面这个公式在 $A_1,A_2,\ldots,A_n,\ldots$ 为完备事件组时一定成立. 但其实完备事件组这一条件并不必须，实际上只需要 $B\subset\displaystyle\bigcup_{n=1}^\infty A_n$ 即可.

:::

### Bayes 公式

考虑一组 $A_1,A_2,\ldots,A_n,\ldots$ 和 $B$ 满足 $B\subset\displaystyle\bigcup_{n=1}^\infty A_n$，此时 $\forall n\ge 1, P(A_n|B)=\dfrac{P(A_nB)}{P(B)}$. 此时将分子也写成条件概率的形式，而将分母用全概率公式代替，我们便得到了 **Bayes 公式**.

::: info Bayes 公式
$$
P(A_n|B)=\dfrac{P(A_n)P(B|A_n)}{\displaystyle\sum_{n=1}^\infty P(A_n)P(B|A_n)}
$$
:::

其中我们称 $P(A_n)$ 为**先验概率**，$P(A_i|B)$ 为了解了 $B$ 的信息后的**后验概率**.

## 独立

::: info 定义 3（独立）

对事件 $A,B$，若 $P(AB)=P(A)P(B)$, 则称它们**独立**，记作 $A\perp\kern-5pt\perp B$.

:::

独立事件可以直观理解为两者的发生是互不干扰的，因此也可以得到 $\bar{A}\perp\kern-5pt\perp B,A\perp\kern-5pt\perp\bar{B},\bar{A}\perp\kern-5pt\perp\perp\kern-5pt\perp\bar{B}$. 此外，其条件概率也可以简化如下.

::: info 独立事件的条件概率

设 $A\perp\kern-5pt\perp B$，若 $P(B)>0$，则 $P(A|B)=\dfrac{P(AB)}{P(B)}=P(A)$.

:::

独立的定义还可以推广到多个事件.

::: info 定义 3'（多个事件的独立）

设 $A,B,C$ 满足：
      1. $P(AB)=P(A)P(B)$;
      2. $P(AC)=P(A)P(C)$;
      3. $P(BC)=P(B)P(C)$;
      4. $P(ABC)=P(A)P(B)P(C)$.
此时称 $A,B,C$ 相互独立.

进而可以递归地定义 $n$ 个事件的相互独立. 称 $A_1,A_2,\ldots,A_n$ 相互独立，当且仅当
      1. 任取其中 $n-1$ 个事件，它们都相互独立；
      2. $P(A_1A_2\ldots A_n)=P(A_1)P(A_2)\ldots P(A_n)$.
这个定义有一个更一般的形式，即任取指标集 $I\subset \{1,2,\ldots,n\}$，都有
$$
P\left(\bigcap_{i\in I}A_i\right)=\prod_{i\in I}P(A_i)
$$

:::

这个定义向我们表明了 **相互独立** 和 **两两独立** 的区别. 相互独立是一个远强于两两独立的条件，Bernstein 反例更清晰地揭示了这一点.

::: tip Bernstein 反例

对一个正四面体的四面（记作 $1,2,3,4$ 面），随机地选取一个面为试验结果. 考虑事件 $A$ 为选到 $1,4$ 面的概率，事件 $B$ 为选到 $2,4$ 面的概率，事件 $C$ 为选到 $3,4$ 面的概率，此时我们有 $P(A)=P(B)=P(C)=\dfrac{1}{2}$，且 $P(AB)=P(BC)=P(AC)=\dfrac{1}{4}$，这表明 $A,B,C$ 两两独立. 然而
$$
P(ABC)=\frac{1}{4}\neq P(A)P(B)P(C)
$$
这表明 $A,B,C$ 不相互独立.

:::

独立性从定义上是描述事件交集的概率性质，但我们也可以借由 De Morgan 律来描述事件并集的概率性质.

::: info 独立事件并的概率
设 $A_1,A_2,\ldots,A_n$ 相互独立，则 $\bar{A_1},\bar{A_2},\ldots,\bar{A_n}$ 相互独立
$$
P\left(\bigcup_{i=1}^n A_i\right)=1-P\left(\bigcap_{i=1}^n \bar{A_i}\right)=1-P(\bar{A_1})P(\bar{A_2})\ldots P(\bar{A_n})
$$
:::

最后，独立性的定义可以进一步扩展到可列个事件.

::: info 定义 3''（可列个事件的独立）

对事件列 $\{A_n\}_{n=1}^\infty$，称该事件列中所有事件相互独立，当且仅当对任一**有限**的指标集 $I=\{i_1,\ldots,i_k\}\subset\{1,2,\ldots,n,\ldots\}$，总有
$$
P\left(\bigcap_{i\in I}A_i\right)=\prod_{i\in I}P(A_i)
$$

:::
