---
title: 概率论（一）：概率与概率空间
category:
  - 概率论
tag:
  - 学习
  - 数学
date: 2025-09-12
order: 1
# 禁止显示页脚
footer: false
---

在开始研究概率之前，我们必须明确什么是概率. 这引出了以下两个目标

1. 概率的定义应当是一些简单概率模型在性质上的直观推广，这是为了保证我们的定义在大多情形下合乎逻辑和直观，并具有普适性.
2. 概率的定义应该在数学意义上严格，这使得我们可以放心使用数学工具来描述和研究概率.

本文从上面的两个目标出发，将给出概率以及概率空间的一般定义，并探讨一系列与之相关的基本概念和性质.

## 我们想要的概率

### 用频率近似概率

::: info 定义 1（频率）
设随机事件 $A$ 在 $N$ 次试验中出现了 $n$ 次，则称 $F_N(A)=\dfrac{n}{N}$ 为 $A$ 在 $N$ 次试验中出现的**频率**.
:::

频率具有下面的性质：

::: info 频率的性质

1. **非负性**：$F_N(A)\ge 0$.
2. **规范性**：设 $\Omega$ 为必然事件，则 $F_N(\Omega)=1$.
3. **有限可加性**：对随机事件列 $\{A_i\}_{i=1}^n$，记 $\displaystyle\sum_{i=1}^n A_i$ 为事件：诸 $A_i$ 至少出现其一，则

$$
F_N\left(\displaystyle\sum_{i=1}^n A_i\right)=\displaystyle\sum_{i=1}^n F_N(A_i)
$$

:::

随机事件 $A$ 发生的**概率** $P(A)$ 描述的是 $A$ 发生的可能性，直观上和多次实验后事件 $A$ 的频率有相似之处（事实上多次试验下的频率确实将逼近事件发生的概率，只是目前我们无法严格地宣称这一点）. 因此我们也希望概率的定义应该使得随机事件的概率也满足上述频率的性质.

### 样本空间与事件运算

为了更严格地定义概率，我们首先要严格地定义样本空间.

::: info 定义 2（样本空间）
对随机事件（trial），其可能的结果称为**样本点**，记作 $\omega$；全体样本点的集合称为**样本空间**（Sample Space），记作 $\Omega$.
:::

在样本空间的基础上，就可以定义事件.

::: info 定义 3（事件）
事件 $A$ 是 $\Omega$ 的一个子集，是某些样本点的集合. 称一次试验中事件 $A$ **发生** 当且仅当该试验的结果 $\omega\in A$.
:::

::: tip 特殊的事件

1. $\Omega$ 在每次试验中必然发生，称为**必然事件**；
2. $\varnothing$ 在任何试验中都不可能发生，称为**不可能事件**.

:::

可以看到，事件的本质实际上就是集合，进而我们可以引入事件的运算，它将对未来引入概率的定义、事件概率的计算和一系列概率等式和不等式起到相当重要的作用.

#### 二元运算

和集合类似，可以定义一系列事件间的运算.

::: info 定义 4（二元运算）
对事件 $A,B$，

1. 称 $A$ 包含于 $B$，当且仅当 $\forall \omega\in A,\omega\in B$，记作 $A\subset B$.
   - 显然对任意的事件 $A$，总有 $\varnothing\subset A\subset \Omega$.
2. 称 $A=B$ 当且仅当 $A\subset B$ 且 $B\subset A$.
3. 称 $A\cup B=\{\omega:\omega\in A\ \text{or}\ \omega\in B\}$ 为 $A$ 和 $B$ 的**并**，$A\cup B$ 发生表明 $A,B$ 至少有一个发生.
4. 称 $A\cap B=\{\omega:\omega\in A\ \text{and}\ \omega\in B\}$ 为 $A$ 和 $B$ 的**交**，$A\cap B$ 发生表明 $A,B$ 同时发生.
5. 称 $A\setminus B=\{\omega: \omega\in A\ \text{and}\ \omega\notin B\}$ 为 $A$ 与 $B$ 的**差**，表示在 $A$ 中却不在 $B$ 中的全体样本点集合.
6. 称 $\overline{A}=\Omega-A$ 为 $A$ 的**补**或对立事件.
   - 若 $B\subset A$，则 $A-B=A\cap \overline{B}$.

:::

其中，如果 $A\cap B=\varnothing$，则称 $A,B$ 不相容. 此时可以记 $A\cup B=A+B$.

上面的并和交可以自然推广到 $n$ 个事件的场合.

::: info 定义 4'（$n$ 元运算）
对事件 $A_1,\ldots,A_n$，

1. $\displaystyle\bigcup_{i=1}^nA_i=A_1\cup A_2\cup \ldots\cup A_n$，该事件发生表示事件 $A_1,\ldots,A_n$ 至少有一个发生.
2. $\displaystyle\bigcap_{i=1}^nA_i=A_1\cap A_2\cap \ldots\cap A_n$，该事件发生表示事件 $A_1,\ldots,A_n$ 同时发生.

:::

这些运算和集合的运算一样，服从以下运算律：

::: info 事件运算的性质

1. **交换律**：$A\cap B=B\cap A,A\cup B=B\cup A$.
2. **结合律**：$(A\cap B)\cap C=A\cap(B\cap C),(A\cup B)\cup C=A\cup(B\cup C)$
3. **分配律**：$(A\cap B)\cup C=(A\cup C)\cap (A\cup C), (A\cup B)\cap C=(A\cap C)\cup (A\cap C)$
4. **De Morgan律**：$\overline{A\cap B}=\overline{A}\cup\overline{B},\overline{A\cup B}=\overline{A}\cap\overline{B}$
   - 更常使用的是De Morgan律的 $n$ 元版本，即 $\overline{\displaystyle\bigcap_{i=1}^nA_i}=\displaystyle\bigcup_{i=1}^n\overline{A_i},\overline{\displaystyle\bigcup_{i=1}^nA_i}=\displaystyle\bigcap_{i=1}^n\overline{A_i}$.

:::

#### 事件的极限

二元运算涉及到的只有有限个事件，而在概率论中我们常常要处理可列无穷多个事件，此时需要引入极限工具进行分析. 为此，我们先将集合的并和交推广到可列无穷个事件的场合.

::: info 定义 4''（可列无穷事件的交和并）
对事件列 $\{A_n\}_{n=1}^\infty$，

1. $\displaystyle\bigcup_{n=1}^\infty A_n$ 为该事件列所有事件的并，该事件发生表示事件事件列 $\{A_n\}_{n=1}^\infty$ 中至少有一个事件发生.
2. $\displaystyle\bigcap_{n=1}^\infty A_n$ 为该事件列所有事件的交，该事件发生表示事件列 $\{A_n\}_{n=1}^\infty$ 的所有事件同时发生.

:::

::: tip 注意
事实上，可列无穷集合列的运算语言可以和逻辑中的全称量词和特称量词相互转化.

1. $\omega\in\displaystyle\bigcup_{n=1}^\infty A_n\Leftrightarrow\exist n_0\in\mathbb{N}^*$ 使得 $\omega\in A_{n_0}$.
2. $\omega\in\displaystyle\bigcap_{n=1}^\infty A_n\Leftrightarrow\forall n\in\mathbb{N}^*$ 使得 $\omega\in A_{n}$.

:::

我们先考虑一类特殊的事件列以及它的极限.

::: info 定义 5（单调事件列及其极限）

1. 对事件列 $\{A_n\}$，若满足 $A_1\subset A_2\subset \ldots\subset A_n\subset \ldots$，则称 $\{A_n\}$ 为**递增事件列**，并记其极限为

$$
\displaystyle\lim_{n\to\infty}A_n=\bigcup_{n=1}^\infty A_n
$$

2. 对事件列 $\{B_n\}$，若满足 $B_1\supset B_2\supset \ldots\supset B_n\supset \ldots$，则称 $\{A_n\}$ 为**递减事件列**，并记其极限为

$$
\displaystyle\lim_{n\to\infty}B_n=\bigcap_{n=1}^\infty B_n
$$

:::

这是符合直观的，对递增事件列，极限事件都代表了事件中不断加入新样本点，不断扩张的最终结果；而对递减事件列，极限事件代表了事件中的样本点不断减少，不断收缩的最终结果.

然而，对于任意的事件列 $\{A_n\}$，它并不存在一个变化趋势，因此我们无法像单调事件列一样给出一个直观定义. 此时，我们考虑事件列 $B_n=\displaystyle\bigcap_{k=n}^\infty A_k$ 和事件列 $C_n=\displaystyle\bigcup_{k=n}^\infty A_k$，显然有前者是递增事件列，而后者是递减事件列，对这两个序列我们可以定义极限，这就衍生出了下面的定义.

::: info 定义 6（事件列的上、下极限）
对任意的事件列 $\{A_n\}$，

1. 称 $\displaystyle\overline{\lim_{n\to\infty}}A_n=\bigcap_{n=1}^\infty C_n=\bigcap_{n=1}^\infty\bigcup_{k=n}^\infty A_k$ 为 $\{A_n\}$ 的**上极限**.
2. 称 $\displaystyle\underset{n\to\infty}{\underline{\lim}}A_n=\bigcup_{n=1}^\infty B_n=\bigcup_{n=1}^\infty\bigcap_{k=n}^\infty A_k$ 为 $\{A_n\}$ 的**下极限**.
3. 若 $\displaystyle\overline{\lim_{n\to\infty}}A_n=\underset{n\to\infty}{\underline{\lim}}A_n$，则称其为$\{A_n\}$ 的**极限**，记作 $\displaystyle\lim_{n\to\infty}A_n$.

:::

::: tip 事件上、下极限的性质
正如前文所述，可以将这一系列的可列交、并改为逻辑语言.

1. $\omega\in\displaystyle\overline{\lim_{n\to\infty}}A_n\Leftrightarrow \forall n\in\mathbb{N}^*,\exist k>n\ \text{s.t.}\ \omega\in A_k$，即上极限中的样本点一定属于原事件列中的无数个事件.
2. $\omega\in\displaystyle\underset{n\to\infty}{\underline{\lim}}A_n\Leftrightarrow \exist n_0\in\mathbb{N}^*\ \text{s.t.}\ \forall k>n_0,\omega\in A_k$，即下极限中的样本点一定仅不属于原事件列中的有限个事件.
3. 由上立得 $\displaystyle\underset{n\to\infty}{\underline{\lim}}A_n\subset \overline{\lim_{n\to\infty}}A_n$.

:::

## 概率空间

### 特殊概率空间中的概率

我们需要定义的概率 $P(\cdot)$ 实质上是一个将事件映射到 $[0,1]$ 上的一个特定实数的函数. 为此，我们可以先观察几个特殊的概率空间.

#### 古典概型

::: info 定义 7（古典概型）

在有限样本空间 $\Omega=\{\omega_1,\ldots,\omega_n\}$ 上，设事件 $E_1=\{\omega_1\},\ldots,E_n=\{\omega_n\}$ 两两不相容，且每次试验中 $\omega_1,\ldots,\omega_n$ 等可能地发生，则称该概率模型为**古典概型**.

:::

在古典概型上，我们可以如下定义概率：对事件 $A\subset \Omega$，有 $P(A)=\dfrac{|A|}{n}$. 这样定义的概率满足下面的几个基本性质：

::: tip 古典概型的性质

1. **非负性**：$P(A)\ge 0$.
2. **规范性**：$P(\Omega)=1$.
3. **有限可加性**：对随机事件列 $\{A_i\}_{i=1}^n$，若诸 $A_i$ 互不相容，则

$$
P\left(\displaystyle\sum_{i=1}^n A_i\right)=\displaystyle\sum_{i=1}^n P(A_i)
$$

:::

古典概型虽然是一种较为简单的概率模型，但其应用兼具广泛性和深度，将在后面的文章中进一步展开介绍.

#### 几何概型

几何概型的样本空间是一个 $d$ 维Euclid空间中的正测集 $\Omega$. 对事件 $A_g$：在 $\Omega$ 中随机选择一点，落在了子区域 $g$，定义它发生的概率 $P(A_g)=\dfrac{m(g)}{m(\Omega)}$ 为几何概型中的概率，这里的 $m$ 是Lebesgue测度.

由Lebesgue测度的性质，我们也可以给出几何概型中概率的性质.

::: tip 几何概型的性质

1. **非负性**：$P(A)\ge 0$.
2. **规范性**：$P(\Omega)=1$.
3. **可列可加性**：对随机事件列 $\{A_n\}_{n=1}^\infty$，若诸 $A_n$ 互不相容，则

$$
P\left(\displaystyle\sum_{n=1}^\infty A_n\right)=\displaystyle\sum_{n=1}^\infty P(A_n)
$$

:::

然而，几何概型揭示了一个困境：我们可以用*选择公理*构造出Lebesgue意义下不可测的集合，此时它在几何概型下的概率是无法度量的. 为了良好地定义概率，我们必须对研究的事件加以限制.

### 事件域

直观上，我们会认为任何 $A\in 2^\Omega$ 都可以是事件，但正如几何概型告诉我们的：这实际上是不可行的. 由此我们需要引入事件域的定义.

::: info 定义 8（事件域）

对 $\mathcal{F}\subset 2^\Omega$，若满足

1. $\Omega\in\mathcal{F}$;
2. 若 $A\in\mathcal{F}$，则 $\overline{A}\in\mathcal{F}$;
3. 若 $A_n\in\mathcal{F},n=1,2,\ldots$，则 $\displaystyle\bigcup_{n=1}^\infty A_n\in\mathcal{F}$.

则称 $\mathcal{F}$ 为 $\Omega$ 上的**事件域**，也可以称 $\mathcal{F}$ 为 $\Omega$ 上的 $\sigma$ 代数. 此时称 $A\in\mathcal{F}$ 是事件.

:::

::: tip 事件域的性质

1. 空集在事件域中：$\varnothing\in\mathcal{F}$.
2. 对有限并封闭：$A_i\in\mathcal{F},i=1,2,\ldots,n\Rightarrow\displaystyle\bigcup_{i=1}^n A_i\in\mathcal{F}$.
3. 对可列交封闭：$A_n\in\mathcal{F},n=1,2,\ldots\Rightarrow\displaystyle\bigcap_{n=1}^\infty A_n\in\mathcal{F}$

:::

::: details 证明

(1) $\Omega\in\mathcal{F}\Rightarrow \varnothing=\overline{\Omega}\in\mathcal{F}$.

(2) 令 $A_{n+k}=\varnothing\in\mathcal{F},k=1,2,\ldots$，则 $\displaystyle\bigcup_{i=1}^n A_i=\bigcup_{i=1}^\infty A_i\in\mathcal{F}$.

(3) 由 De Morgan 律，$\displaystyle\bigcap_{n=1}^\infty A_n=\displaystyle\overline{\bigcup_{n=1}^\infty \overline{A_n}}\in\mathcal{F}$

:::

### 概率的定义

通过严格定义所有可计算概率的事件，我们可以严格地定义样本空间 $\Omega$ 上的概率.

::: info 定义 9（概率）

设集合函数 $P$ 定义在事件域 $\mathcal{F}$ 上，若满足

1. **非负性**：$\forall A\in \mathcal{F}, P(A)\ge 0$;
2. **规范性**：$P(\Omega=1)$;
3. **可列可加性**：若 $A_n\in\mathcal{F},n=1,2,\ldots$ 两两不相容，则

$$
P(\sum_{n=1}^\infty A_n)=\sum_{n=1}^\infty P(A_n)
$$

则称 $P$ 为概率.
:::

下面给出概率的几个性质.

::: tip 概率的性质

1. 不可能事件的概率为 $0$：$P(\varnothing)=0$.
2. 有限可加性：若 $A_i\in\mathcal{F},i=1,2,\ldots,n$ 两两不相容，则

$$
P(\sum_{i=1}^n A_i)=\sum_{i=1}^n P(A_i)
$$

3. 补的概率：$P(\overline{A})=1-P(A)$.
4. 单调性：若 $A\subset B$，则 $P(A)\le P(B)$.
   - 若 $A\subset B$，则 $P(B-A)=P(B)-P(A)$.
5. 容斥原理：$P(A\cup B)=P(A)+P(B)-P(A\cap B)$.
   1. 可以得知 $P(A)+P(B)-1\le P(A\cup B)\le P(A)+P(B)$
   2. 可以推广为**一般加法公式**：

$$
P(A_1\cup\ldots\cup A_n)=\sum_i P(A_i)-\sum_{i<j}P(A_i\cap A_j)+\ldots+(-1)^{n-1}P(A_1\cap\ldots\cap A_n)
$$

:::

::: details 一般加法公式的证明

有 $n=2$ 时成立.

若 $n=k$ 时一般加法公式成立，考虑 $n=k+1$，此时

$$
\begin{align*}{l}
   \displaystyle P\left(\bigcup_{i=1}^{k+1}A_i\right) &= P\left(\displaystyle\bigcup_{i=1}^{k}A_i\right)+P(A_{k+1})-P\left(\displaystyle\bigcup_{i=1}^{k}(A_i\cap A_{k+1})\right) \\
   &=\sum_i P(A_i)-\sum_{i<j}P(A_i\cap A_j)+\ldots+(-1)^{n-1}P(A_1\cap\ldots\cap A_n)
\end{align*}
$$

:::

注意到，可列可加性自然蕴含有限可加性，但若要从有限可加性推出可列可加性，则需要概率函数的连续性.

::: info 定义 10（上连续和下连续）

1. 对于集合列 $\{S_n\}$ 满足 $S_n\subset S_{n+1}$，有 $\displaystyle\lim_{n\to\infty} P(S_n)=P(\lim_{n\to\infty}S_n)$，则称 $P$ 下连续.
2. 对于集合列 $\{S_n\}$ 满足 $S_n\supset S_{n+1}$，有 $\displaystyle\lim_{n\to\infty} P(S_n)=P(\lim_{n\to\infty}S_n)$，则称 $P$ 上连续.

:::

概率函数也一定同时具备下连续性和上连续性.

::: details 由有限可加性推出可列可加性

有 $\displaystyle P\left(\sum_{i=1}^n A_i\right)=\sum_{i=1}^n P(A_i)$，从而 $\displaystyle\lim_{n\to\infty}P\left(\sum_{i=1}^n A_i\right)=\lim_{n\to\infty}\sum_{i=1}^n P(A_i)=\sum_{i=1}^\infty P(A_i)$.

由连续性得到 $\displaystyle\sum_{i=1}^\infty P(A_i)=\lim_{n\to\infty}P\left(\sum_{i=1}^n A_i\right)=P\left(\lim_{n\to\infty}\sum_{i=1}^n A_i\right)=P\left(\sum_{i=1}^\infty A_i\right)$.

:::

### 概率空间的严格定义

::: info 定义 11（概率空间）

对样本空间 $\Omega$，连同其上定义的事件域 $\mathcal{F}$ 和 概率 $P$，构成的三元组 $(\Omega,\mathcal{F},P)$ 称为**概率空间**.

:::

至此我们严格地定义了概率和概率空间，明确了我们需要研究的目标. 事实上，借由测度的语言，我们还可以将概率空间的定义进一步严格化和拓展化，从而运用测度的语言来研究概率，但那已经超过了初等概率论所需的知识.
