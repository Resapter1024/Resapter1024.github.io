---
title: CRE 中的 Neyman 推理
category:
  - 因果推断
tag:
  - 学习
  - 因果推断
date: 2025-11-26
order: 3
# 禁止显示页脚
footer: false
---

## Neyman 定理

在 CRE 中，对编号为 $1,2,\ldots,n$ 的样本，它们的潜在结果具有有限的均值，方差和协方差，分别记作
$$
\bar{Y}(1)=n^{-1}\sum_{i=1}^n Y_i(1),\quad \bar{Y}(0)=n^{-1}\sum_{i=1}^n Y_i(0)
$$
$$
S^2(1)=(n-1)^{-1}\sum_{i=1}^n (Y_i(1)-\bar{Y}(1))^2,\quad S^2(0)=(n-1)^{-1}\sum_{i=1}^n (Y_i(0)-\bar{Y}(0))^2
$$
$$
S(1,0)=(n-1)^{-1}\sum_{i=1}^n (Y_i(1)-\bar{Y}(1))(Y_i(0)-\bar{Y}(0))
$$
同时，关于因果效应，我们也有
$$
\bar{\tau}=n^{-1}\sum_{i=1}^n (Y_i(1)-Y_i(0))=\bar{Y}(1)-\bar{Y}(0)
$$
$$
S^2(\tau)=(n-1)^{-1}\sum_{i=1}^n (\tau-\bar{\tau})^2
$$

Neyman 指出，上面的几个方差和协方差具有如下的关系

::: info 引理 1

$$
2S(1,0)=S^2(1)+S^2(0)-S^2(\tau)
$$

::: details 证明

直接考虑展开 $S^2(\tau)$，即
$$
\begin{align*}
    S^2(\tau) & = (n-1)^{-1}\sum_{i=1}^n (Y_i(1)-Y_i(0)-\bar{Y}(1) + \bar{Y}(0))^2 \\
    & = (n-1)^{-1}\sum_{i=1}^n [(Y_i(1)-\bar{Y}(1))-(Y_i(0)-\bar{Y}(0))]^2 \\
    & = S^2(1)+S^2(0)-2S^2(1,0)
\end{align*}
$$
移项立刻得证.

:::

而对于观测结果，我们有样本均值和方差如下
$$
\hat{\bar{Y}}(1)=n_1^{-1}\sum_{i=1}^n Z_iY_i,\quad \hat{\bar{Y}}(0)=n_0^{-1}\sum_{i=1}^n (1-Z_i)Y_i
$$
$$
\hat{S}^2(1)=(n-1)^{-1}\sum_{i=1}^n Z_i(Y_i(1)-\hat{\bar{Y}}(1))^2,\quad \hat{S}^2(0)=(n-1)^{-1}\sum_{i=1}^n (1-Z_i)(Y_i(0)-\hat{\bar{Y}}(0))^2
$$
注意：在实际的数据中，我们无法同时观测到两个潜在结果，因此不存在观测结果版本的 $S(1,0)$ 和 $S^2(\tau)$.

Neyman 证明了下面的关于推断平均因果效应的定理.

::: info Neyman 定理

在 CRE 下，我们有

1. 样本均值之差 $\hat{\tau} = \hat{\bar{Y}}(1)-\hat{\bar{Y}}(0)$ 是平均因果效应 $\tau$ 的无偏估计，即
    $$
    E(\hat{\tau})=\tau
    $$
2. $\hat{\tau}$ 具有如下的方差
    $$
    \begin{align*}
        \mathrm{Var}(\hat{\tau}) & = \frac{S^2(1)}{n_1}+\frac{S^2(0)}{n_0}-\frac{S^2(\tau)}{n}\\
        & = \frac{n_0}{n_1n}S^2(1)+\frac{n_1}{n_0n}S^2(0)-\frac{2}{n}S^2(\tau)
    \end{align*}
    $$
3. 方差的估计量 $\hat{V}=\dfrac{\hat{S}_1}{n_1}+\dfrac{\hat{S}_0}{n_0}$ 是真实方差 $\mathrm{Var}(\hat{\tau})$ 的保守估计（这里的保守意指高估方差，即给出更宽的置信区间），即
    $$
    E(\hat{V})-\mathrm{Var}(\hat{\tau})=\dfrac{S^2(\tau)}{n}\ge 0
    $$
    等号成立当且仅当 $\tau_i=\tau$ 对所有样本都成立

::: tip 注

1. Neyman 定理仅认为处理 $Z_i$ 是随机变量，而潜在结果 $Y_i(0),Y_i(1)$ 均是已知量.
2. $\hat{\tau}$ 的方差不同于以往的两样本均值差检验统计量的方差，这是因为 Neyman 定理下不仅考察不同个体的最终结果的方差，还要考虑到个体因果效应的带来的方差，事实上后者就是式中的第三项.

:::

Neyman 定理和 FRT 都是给出某因果效应的估计量性质的定理，但它们在下面几点上有显著的不同.

1. FRT 理论上对任何统计量都成立，而 Neyman 定理只用于描述样本均值之差，尽管在其他统计量上可以用类似 Neyman 的方法得到一些结果，但从数学上都较为复杂.
2. 在 FRT 中，我们不关心 $Y_i$ 属于处理组或对照组，因为它基于强原假设，即对于任何的样本，都假设它的两个潜在结果相同；但在 Neyman 定理中则明确要将两者的结果分开.
3. FRT 中的统计量基于观测数据都是可计算的，而 Neyman 定理下由于个体因果效应的存在，其潜在结果必有一者无法被得知，从而我们只能得到统计量的分布特征，而无法计算具体真值.

概括地说，FRT 基于强原假设，因此可以绕过潜在结果无法同时被观测的特性，而 Neyman 定理则承认个体因果效应的存在. 这是两者的本质不同.

更进一步地，我们可以证明该统计量的渐进性质.

::: info Neyman 统计量的渐进性质

令 $n\to\infty, n_1\to\infty$，若 $\dfrac{n_1}{n}\to c\in(0,1), S^2(1),S^2(0),S(1,0)$ 均有限，且
$$
\max_{1\le i\le n}\dfrac{\{Y_i(1)-\bar{Y}(1)\}^2}{n}\to 0,\quad\max_{1\le i\le n}\dfrac{\{Y_i(0)-\bar{Y}(0)\}^2}{n}\to 0
$$
则
$$
\frac{\hat{\tau}-\tau}{\sqrt{\mathrm{Var}(\hat{\tau})}}\to\mathrm{N}(0,1)
$$
即 $\hat{\tau}$ 依分布收敛到正态分布，且
$$
\hat{S}^2(1)\overset{\mathbb{P}}{\to} S^2(1),\quad \hat{S}^2(0)\overset{\mathbb{P}}{\to} S^2(0)
$$

:::

该定理给出了均值差 $\hat{\tau}$ 的渐进分布，这就能进一步构造出其区间估计，即
$$
\hat{\tau}\pm z_{1-\alpha/2}\sqrt{\hat{V}}
$$
由区间估计和假设检验的对偶性，该估计天然蕴含一个假设检验，其原假设为
$$
\mathrm{H_{0N}}: \tau = 0
$$
这被称为弱原假设（Weak Null Hypothesis）. 它要求**平均**的处理效应为 $0$，即允许个体处理效应的存在，但它们最后应相互抵消，这与强原假设要求个体的处理效应也均为 $0$ 相对.

此外，该定理还给出了观测结果的方差的相合性，即 $\hat{S}^2(1),\hat{S}^2(0)$ 都是真实的结果方差 $S^2(1),S^2(0)$ 的相合估计.

## CRE 的回归分析

实践中常常使用回归分析的方法来估计平均因果效应. 常用的方法是最小二乘回归，即
$$
(\hat{\alpha},\hat{\beta})=\argmin_{a,b}\sum_{i=1}^n\{Y_i-a-bZ_i\}^2
$$
此时计算得到的 $\hat{\beta}$ 来作为 ATE 的估计，可以证明它与 Neyman 估计量等价，即 $\hat{\beta}=\hat{\tau}$.

::: details OLS 和 Neyman 统计量等价

根据 OLS，立刻得到
$$
\hat{b}=\frac{L_{YZ}}{L_{ZZ}}=\frac{\displaystyle\sum_{i=1}^n (Z_i-\bar{Z})(Y_i-\bar{Y})}{\displaystyle\sum_{i=1}^n (Z_i-\bar{Z})^2}
$$

由于 $Z_i$ 只有 $0,1$ 两种取值，因此 $\bar{Z}=\dfrac{n_1}{n}$，进而我们得到
$$
Z_i-\bar{Z}=\left\{\begin{matrix}
    \dfrac{n_0}{n}, & Z_i=1 \\
    -\dfrac{n_1}{n} & Z_i=0
\end{matrix}\right.
$$

对于分母，我们有
$$
\begin{align*}
    \sum_{i=1}^n (Z_i-\bar{Z})^2 & = n_1\left(\frac{n_0}{n}\right)^2+n_0\left(-\frac{n_1}{n}\right)^2\\
    & = \frac{n_0n_1(n_0+n_1)}{n^2} \\
    & = \frac{n_0n_1}{n}
\end{align*}
$$

对于分子，我们有
$$
\begin{align*}
    \sum_{i=1}^n (Z_i-\bar{Z})(Y_i-\bar{Y}) & = \frac{n_0}{n}\sum_{Z_i=1}(Y_i-\bar{Y})-\frac{n_1}{n}\sum_{Z_i=0}(Y_i-\bar{Y})\\
    & = \frac{n_0}{n}\sum_{Z_i=1} Y_i - \frac{n_0n_1}{n}\bar{Y} - \frac{n_1}{n}\sum_{Z_i=0}Y_i + \frac{n_0n_1}{n}\bar{Y} \\
    & = \frac{n_0}{n}\sum_{Z_i=1} Y_i - \frac{n_1}{n}\sum_{Z_i=0}Y_i
\end{align*}
$$

将上面的结果代回原式，得到
$$
\hat{b}=\frac{\displaystyle\frac{n_0}{n}\sum_{Z_i=1} Y_i - \frac{n_1}{n}\sum_{Z_i=0}Y_i}{\displaystyle\frac{n_0n_1}{n}}=\frac{1}{n_1}\sum_{Z_i=1} Y_i-\frac{1}{n_0}\sum_{Z_i=0}Y_i=\hat{\tau}
$$

:::

然而需要注意的是，$\hat{\beta}$ 的方差（直接由 OLS 计算得到）和 $\hat{\tau}$ 往往不同. 前者为
$$
\hat{V}_{\mathrm{OLS}}=\frac{n(n_1-1)}{(n-2)n_1n_0}S^2(1)+\frac{n(n_0-1)}{(n-2)n_1n_0}S^2(0)\approx\frac{S^2(1)}{n_0}+\frac{S^2(0)}{n_1}
$$
当 $n_1,n_0$ 较大时这会产生显著的差别.

::: details OLS 的方差

我们知道在 OLS 中有
$$
\hat{V}_{\mathrm{OLS}}=\frac{\sigma^2}{L_{ZZ}}
$$
前面已经计算得到 $L_{ZZ}=\frac{n_0n_1}{n}$，因此只需求 $\sigma^2$. 我们知道在回归分析中，通常使用 $\sigma^2$ 的无偏估计来代替它，即
$$
\hat{\sigma^2}=\frac{1}{n-2}\sum_{i=1}^n (Y_i-\bar{Y_i})^2=\frac{n_1-1}{n-2}\hat{S}^2(1)+\frac{n_0-1}{n-2}\hat{S}^2(0)
$$
代入原式立得
$$
\hat{V}_{\mathrm{OLS}}=\frac{n(n_1-1)}{(n-2)n_1n_0}S^2(1)+\frac{n(n_0-1)}{(n-2)n_1n_0}S^2(0)\approx\frac{S^2(1)}{n_0}+\frac{S^2(0)}{n_1}
$$

:::

实践中我们使用 Eicker–Huber–White 稳健方差，它与 $\hat{V}$ 基本一致. EHW 的矩阵形式如下所示
$$
\hat{V}_{\mathrm{EHW}}=\frac{1}{n}\left(\frac{1}{n}\sum_{i=1}^n \mathbf{x}_i\mathbf{x}_i^\top\right)^{-1} \left(\frac{1}{n}\sum_{i=1}^n \hat{\varepsilon}_i^2 \mathbf{x}_i\mathbf{x}_i^\top\right) \left(\frac{1}{n}\sum_{i=1}^n \mathbf{x}_i\mathbf{x}_i^\top\right)^{-1}
$$
其中
$$
X=\left(\begin{matrix}
    \mathbf{x}_1^\top \\
    \mathbf{x}_2^\top \\
    \vdots\\
    \mathbf{x}_n^\top
\end{matrix}\right), \quad Y = \left(\begin{matrix}
    y_1 \\
    y_2 \\
    \vdots\\
    y_n
\end{matrix}\right)
$$
$\hat{\varepsilon}_i=y_i-\hat{y}_i$ 是残差.

CRE 中结果和处理都是一元的，因此可以进行简化，即
$$
\hat{V}_{\mathrm{EHW}}=\frac{\displaystyle\sum_{i=1}^n \hat{\varepsilon}^2_i(Z_i-\bar{Z})^2}{\left(\displaystyle\sum_{i=1}^n (Z_i-\bar{Z})^2\right)^2}
$$
进一步进行代数化简，得到
$$
\hat{V}_{\mathrm{EHW}}=\frac{(n_1-1)}{n_1^2}\hat{S}^2(1)+\frac{(n_0-1)}{n_0^2}\hat{S}^2(0)
$$
大样本时，上式近似为 $\hat{V}$.
