---
title: 随机试验中的分层与后分层
category:
  - 因果推断
tag:
  - 学习
  - 因果推断
date: 2025-12-10
order: 4
# 禁止显示页脚
footer: false
---

## SRE

考虑离散的协变量 $X_i\in\{1,2,\ldots,K\}$，对 $n$ 个样本，记 $n_{[k]}=|\{i: X_i=k\}|$ 为这些样本中协变量为 $k$ 的样本个数，这些样本称为第 $k$ 层样本，进而记 $\pi_{[k]}=\dfrac{n_{[k]}}{n}$. 在随机试验中，将所有样本中的 $n_1$ 个分配给处理组，$n_0$ 个分配给对照组. 则可以进一步记
$$
n_{[k]1}=|\{i: X_i=k,Z_i=1\}|,\quad n_{[k]0}=|\{i: X_i=k,Z_i=0\}|, \quad k=1,2,\ldots,K
$$

对每一层的样本，它们全都被分配到处理组或者全都被分入对照组完全有可能发生. 即使一层样本中既有在对照组的也有在处理组的，它们的比例差
$$
\frac{n_{[k]1}}{n_1}-\frac{n_{[k]0}}{n_0}\neq 0
$$
的概率也很高，而且这个差很可能相当大.

::: tip 平均比例差

我们视 $n_{[k]1},n_{[k]0}$ 为随机变量，平均而言
$$
E\left(\frac{n_{[k]1}}{n_1}-\frac{n_{[k]0}}{n_0}\right)=0
$$
要证明这个结论，首先可以计算 $E(n_{[k]1})$. 我们知道 $n_{[k]1}$ 相当于从 $n$ 个样本中抽取 $n_1$ 个进入处理组，其中层次为 $k$ 的样本数量. 从而 $n_{[k]1}\sim \mathrm{HGeom}(n, n_[k], n_1)$，从而
$$
E(n_{[k]1})=\frac{n_1n_{[k]}}{n}
$$
同理
$$
E(n_{[k]0})=\frac{n_0n_{[k]}}{n}
$$
因此
$$
E\left(\frac{n_{[k]1}}{n_1}-\frac{n_{[k]0}}{n_0}\right)=\frac{1}{n_1}\frac{n_1n_{[k]}}{n}-\frac{1}{n_0}\frac{n_0n_{[k]}}{n}=0
$$

:::

当在某些层次，处理组和对照组的比例差别过大时，最终的试验结果将产生两个组别间的协变量不平衡，将进一步影响估计和检验的效果. 为了避免这种协变量不平衡，我们引入**分层随机试验**（Stratified Random Experiments, SRE）.

::: info SRE

固定 $n_{[k]1}$ 或 $n_{[k]0}$，依 $X_i$ 的取值，在 $K$ 个分层内分别执行独立的 CRE，最后汇总处理组和对照组. 这一随机试验称为分层随机试验.

:::

SRE 的不同分组总数为
$$
\prod_{k=1}^K \binom{n_{[k]}}{n_{[k]1}}
$$
且这每一种分组的出现概率都相等. 对于第 $k$ 层，其分配到处理组的样本比例是恒定的，可以记作
$$
e_{[k]}=\frac{n_{[k]1}}{n_{[k]}}
$$
称其为**倾向得分**.

相比 CRE，SRE 的可行分组更少，倾向得分也由随机变为固定值（在每一层上）.

进一步，我们可以在每一层上定义平均因果效应，即
$$
\tau_{[k]}=\frac{1}{n_{[k]}}\sum_{X_i=k}\tau_i
$$
而全样本的平均因果效应为
$$
\tau=\frac{1}{n}\sum_{i=1}^n\tau_i=\frac{1}{n}\sum_{k=1}^K\sum_{X_i=k}\tau_i=\sum_{k=1}^K\pi_{[k]}\tau_{[k]}
$$
即全样本 ATE 是各层 ATE 以倾向得分为权重的加权平均.

## SRE 下的 FRT

在 SRE 下，我们同样可以使用强原假设：
$$
\mathrm{H_{0F}}: Y_i(1)=Y_i(0),\quad i=1,2,\ldots n
$$

我们同样可以对任意的检验统计量 $T(\mathbf{Z},\mathbf{Y},\mathbf{X})$ 进行 FRT. 由于这是在 SRE 下，我们做随机分配时必须也严格在层内进行分配，这有时被称为**条件随机化检验**. 同时，尽管 FRT 对任意检验统计量都成立，但是我们更应该选择一些适合 SRE 特性的统计量，它们将能反映更多分层信息. 下面我们给出几个经典的统计量.

::: info 分层估计

考虑估计平均因果效应 $\tau$
$$
\hat{\tau}_S=\sum_{k=1}^K \pi_{[k]}\hat{\tau}_{[k]}
$$
其中
$$
\hat{\tau}_{[k]}=\frac{1}{n_{[k]1}}\sum_{i=1}^n \mathbb{I}(X_i=k,Z_i=1)Y_i-\frac{1}{n_{[k]0}}\sum_{i=1}^n \mathbb{I}(X_i=k,Z_i=0)Y_i

$$
是各分层内对平均因果效应的估计.

:::

::: info 学生化分层统计量

出于两总体均值差的学生化统计量的启发，可以考虑统计量
$$
t_S=\frac{\hat{\tau}_S}{\sqrt{\hat{V}_S}}
$$
其中 $\hat{\tau}_S$ 是上面提到的分层估计，而
$$
\hat{V}_S=\sum_{k=1}^K \pi_{[k]}\left(\frac{\hat{S}_{[k]}^2(1)}{n_{[k]1}}+\frac{\hat{S}_{[k]}^2(0)}{n_{[k]0}}\right)
$$
这里 $\hat{S}_{[k]}^2(1),\hat{S}_{[k]}^2(0)$ 分别是第 $k$ 层中处理组和对照组的样本方差.

:::

::: info 混合 Wilcoxon 秩和统计量

可以在各层计算 Wilcoxon 秩和统计量，再进行汇总，即
$$
W_S=\sum_{k=1}^K c_{[k]}W_{[k]}
$$

:::

基于不同的理由，有多种进行权重选择的方案，常见的方案有两种，分别为
$$
c_{[k]}=\frac{1}{n_{[k]1}n_{[k]0}}
$$
和
$$
c_{[k]}=\frac{1}{n_{[k]}+1}
$$

::: info 对齐秩统计量

该方法由 Hodges 和 Lehmann 于 1962 年提出，用于解决分层过多而每层人数过少，难以进行统计推断的问题. 首先，对所有样本在各层内进行中心化. 即若 $X_i=k$，则
$$
\tilde{Y}_i=Y_i-\bar{Y}_{[k]}
$$
接下来计算分层中心化后 $\{\tilde{Y}_1,\ldots,\tilde{Y}_n\}$ 的秩 $\tilde{R}_1,\ldots,\tilde{R}_n$，最终计算处理组的秩和得到统计量
$$
\tilde{W}=\sum_{i=1}^n Z_i\tilde{R}_i
$$

:::

如此构造的思想是，若因果效应显著，那么经过分层中心化后，处理组的秩应该显著地大于对照组的秩. 这样的构造跨层地使用了样本，使得各层信息较少的同时还能进行有效力的检验.

::: info 分层 Kolmogorov–Smirnov 统计量

考虑在各层内计算分布的距离
$$
D_{[k]}=\max_y |\hat{F}_{[k]1}(y)-\hat{F}_{[k]0}(y)|
$$
其中 $\hat{F}_{[k]1}(y),\hat{F}_{[k]0}(y)$ 分别是第 $k$ 层中处理组和对照组的经验分布函数. 可以考虑
$$
D_S=\sum_{k=1}^K c_{[k]}D_{[k]}
$$
或
$$
D_{\mathrm{max}}=\max_{k} c_{[k]}D_{[k]}
$$
这两种做法在各层的样本数均较大时是合理的选择. 另一种选择是考虑距离的加权，即
$$
D = \max_{y}\left|\sum_{k=1}^K \pi_{[k]}(\hat{F}_{[k]1}(y)-\hat{F}_{[k]0}(y))\right|
$$
这一统计量综合了所有样本的信息，当分层内部样本较小，层内的统计量效力不显著时可以使用.

:::

## SRE 下的 Neyman 推理

由于 SRE 可以看作各层内进行的独立 CRE，因此 Neyman 推理也可以被推广至 SRE 中. 具体来说，考虑各层的均值差
$$
\hat{\tau}_{[k]}=\bar{Y}_{[k]1}-\bar{Y}_{[k]0}
$$
它是层内因果效应 $\tau_{[k]}$ 的无偏估计. 其方差为
$$
\mathrm{Var}(\hat{\tau}_{[k]})=\frac{S_{[k]}^2(1)}{n_{[k]1}}+\frac{S_{[k]}^2(0)}{n_{[k]0}}-\frac{S_{[k]}^2(\tau)}{n_{[k]}}
$$
这里 $S_{[k]}^2(1),S_{[k]}^2(0),S_{[k]}^2(\tau)$ 分别是第 $k$ 层中潜在结果和个体因果效应的方差.

各层的均值差统计量是独立的，因此我们有
$$
\hat{\tau}_S=\sum_{k=1}^K \pi_{[k]}\hat{\tau}_{[k]}
$$
是 $\tau = \displaystyle\sum_{k=1}^K \pi_{[k]}\tau_{[k]}$ 的无偏估计，且具有方差
$$
\mathrm{Var}(\hat{\tau}_S)=\sum_{k=1}^K \pi_{[k]}^2 \mathrm{Var}(\hat{\tau}_{[k]})
$$

若 $n_{[k]1}, n_{[k]0}\ge 2$，则可以计算样本形式的 $\hat{S}_{[k]}^2(1),\hat{S}_{[k]}^2(0)$，进而给出一个方差的保守估计
$$
\hat{V}_S=\sum_{k=1}^K \pi_{[k]}^2\left(\frac{\hat{S}_{[k]}^2(1)}{n_{[k]1}}+\frac{\hat{S}_{[k]}^2(0)}{n_{[k]0}}\right)
$$
由于 $\hat{\tau}_S$ 的渐近正态性，可以给出 $\tau$ 的 $1-\alpha$ 置信区间为
$$
\hat{\tau}_S\pm z_{1-\alpha/2}\sqrt{\hat{V}_S}
$$

在弱原假设 $\mathrm{H_{0F}}:\tau=0$ 下，也可以构造
$$
t_S=\frac{\hat{\tau}_S}{\sqrt{\hat{V}_S}}
$$
它同样具有渐近正态性，可以用它进行假设检验.

## CRE 与 SRE 的比较

我们断言，SRE 不仅能做到平衡协变量来进行更好的估计，同时它在大部分条件下相比 CRE 还能起到降低估计方差，提升精度的作用. 为了公平性，我们假设各层的倾向得分 $e_{[k]}=e$ 为定值，这样就一定有
$$
\hat{\tau}=\hat{\tau}_S
$$

::: details 证明

我们有 $e=\dfrac{n_{[k]1}}{n_{[k]}}, k=1,2,\ldots,K$，从而
$$
e=\dfrac{n_{[1]1}+\ldots+n_{[K]1}}{n_{[1]}+\ldots+n_{[K]}}=\frac{n_1}{n}
$$
又由于 $\pi_{k}=\dfrac{n_{[k]}}{n}$，从而
$$
\begin{align*}
  \hat{\tau}_S & = \sum_{k=1}^K \pi_{[k]}\hat{\tau}_{[k]} \\
  & = \sum_{k=1}^K \pi_{[k]}\left(\frac{1}{n_{[k]1}}\sum_{i=1}^n \mathbb{I}(X_i=k,Z_i=1)Y_i-\frac{1}{n_{[k]0}}\sum_{i=1}^n \mathbb{I}(X_i=k,Z_i=0)Y_i\right) \\
  & = \sum_{k=1}^K \frac{n_{[k]}}{n}\left(\frac{1}{n_{[k]1}}\sum_{i=1}^n \mathbb{I}(X_i=k,Z_i=1)Y_i-\frac{1}{n_{[k]0}}\sum_{i=1}^n \mathbb{I}(X_i=k,Z_i=0)Y_i\right) \\
  & = \sum_{k=1}^K \frac{1}{n}\left(\frac{1}{e}\sum_{i=1}^n \mathbb{I}(X_i=k,Z_i=1)Y_i-\frac{1}{1-e}\sum_{i=1}^n \mathbb{I}(X_i=k,Z_i=0)Y_i\right) \\
  & = \sum_{k=1}^K \left(\frac{1}{n_1}\sum_{i=1}^n \mathbb{I}(X_i=k,Z_i=1)Y_i-\frac{1}{n_0}\sum_{i=1}^n \mathbb{I}(X_i=k,Z_i=0)Y_i\right) \\
  & = \left(\frac{1}{n_1}\sum_{i=1}^n \mathbb{I}(Z_i=1)Y_i-\frac{1}{n_0}\sum_{i=1}^n \mathbb{I}(Z_i=0)Y_i\right) \\
  & = \hat{\tau}
\end{align*}
$$

:::

此时两者的表达式相同，下面我们逐步来说明通常情况下，SRE 的估计量方差更小，即
$$
\mathrm{Var}(\hat{\tau}_{S})\le \mathrm{Var}(\hat{\tau})
$$

借鉴经典方差分析技术的思想，我们可以将样本方差分解为层内方差和层间方差.
$$
\begin{align*}
  S^2(1) & = (n-1)^{-1} \sum_{i=1}^n \{Y_i(1) - \bar{Y}(1)\}^2 \\
  & = (n-1)^{-1} \sum_{k=1}^K \sum_{X_i=k} \{Y_i(1) - \bar{Y}_{[k]}(1) + \bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2 \\
  & = (n-1)^{-1} \sum_{k=1}^K \sum_{X_i=k} [\{Y_i(1) - \bar{Y}_{[k]}(1)\}^2 + \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2]\\
  & = \sum_{k=1}^K \left[ \frac{n_{[k]} - 1}{n - 1} S_{[k]}^2(1) + \frac{n_{[k]}}{n - 1} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2 \right]
\end{align*}
$$
同理可得：
$$
S^2(0) = \sum_{k=1}^K \left[ \frac{n_{[k]} - 1}{n - 1} S_{[k]}^2(0) + \frac{n_{[k]}}{n - 1} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}^2 \right]
$$
$$
S^2(\tau) = \sum_{k=1}^K \left[ \frac{n_{[k]} - 1}{n - 1} S_{[k]}^2(\tau) + \frac{n_{[k]}}{n - 1} \{\tau_{[k]} - \tau\}^2 \right]
$$

在 **CRE** 下，均值差估计量的方差可以分解为：
$$
\begin{align*}
  \text{Var}_{\text{CRE}}(\hat{\tau}) & = \frac{S^2(1)}{n_1} + \frac{S^2(0)}{n_0} - \frac{S^2(\tau)}{n} \\
  & = \sum_{k=1}^K \left[ \frac{n_{[k]} - 1}{(n - 1)n_1} S_{[k]}^2(1) + \frac{n_{[k]} - 1}{(n - 1)n_0} S_{[k]}^2(0) - \frac{n_{[k]} - 1}{(n - 1)n} S_{[k]}^2(\tau) \right] \\
  & + \sum_{k=1}^K \left[ \frac{n_{[k]}}{(n - 1)n_1} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2 + \frac{n_{[k]}}{(n - 1)n_0} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}^2 \right. \\
  & \qquad \left. - \frac{n_{[k]}}{(n - 1)n} \{\tau_{[k]} - \tau\}^2 \right]
\end{align*}
$$

当 $n_{[k]}$ 较大时（大样本近似），它近似为：
$$ 
\begin{align*}
  \text{Var}_{\text{CRE}}(\hat{\tau}) & \approx \sum_{k=1}^K \left[ \frac{\pi_{[k]}}{n_1} S_{[k]}^2(1) + \frac{\pi_{[k]}}{n_0} S_{[k]}^2(0) - \frac{\pi_{[k]}}{n} S_{[k]}^2(\tau) \right] \\
  & + \sum_{k=1}^K \left[ \frac{\pi_{[k]}}{n_1} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2 + \frac{\pi_{[k]}}{n_0} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}^2 - \frac{\pi_{[k]}}{n} \{\tau_{[k]} - \tau\}^2 \right]
\end{align*}
$$

由于假设倾向得分恒定，我们有
$$
\pi_{[k]}/n_{[k]1} = \frac{1}{ne}, \quad \pi_{[k]}/n_{[k]0} = \frac{1}{n(1 - e)}, \quad \pi_{[k]}/n_{[k]} = \frac{1}{n}
$$
这允许我们将 SRE 下 $\hat{\tau}_S$ 的方差重写为：
$$
\begin{align*}
  \text{Var}_{\text{SRE}}(\hat{\tau}_S) & = \sum_{k=1}^K \pi_{[k]}^2 \left[ \frac{S_{[k]}^2(1)}{n_{[k]1}} + \frac{S_{[k]}^2(0)}{n_{[k]0}} - \frac{S_{[k]}^2(\tau)}{n_{[k]}} \right] \\
  & = \sum_{k=1}^K \left[ \frac{\pi_{[k]}}{n_1} S_{[k]}^2(1) + \frac{\pi_{[k]}}{n_0} S_{[k]}^2(0) - \frac{\pi_{[k]}}{n} S_{[k]}^2(\tau) \right]
\end{align*}
$$

在 $n_{[k]}$ 较大的情况下，$\text{var}_{\text{CRE}}(\hat{\tau})$ 和 $\text{var}_{\text{SRE}}(\hat{\tau}_S)$ 之间的差值近似为：
$$
\sum_{k=1}^K \left[ \frac{\pi_{[k]}}{n_1} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2 + \frac{\pi_{[k]}}{n_0} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}^2 - \frac{\pi_{[k]}}{n} (\tau_{[k]} - \tau)^2 \right]
$$
该差值是**非负的**，因为它可以写成
$$
\sum_{k=1}^K \frac{\pi_{[k]}}{n} \left\{ \sqrt{\frac{n_0}{n_1}} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\} + \sqrt{\frac{n_1}{n_0}} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\} \right\}^2 \geq 0
$$

::: details

我们记原式为 $I$，可以首先进行一些恒等变形
$$
\begin{align*}
  I & = \sum_{k=1}^K \frac{\pi_{[k]}}{n}\left[ \frac{n}{n_1} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2 + \frac{n}{n_0} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}^2 - (\tau_{[k]} - \tau)^2 \right] \\
  & = \sum_{k=1}^K \frac{\pi_{[k]}}{n}\left[ \frac{n_0}{n_1} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2 + \frac{n_1}{n_0} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}^2  \right. \\
  & \qquad\qquad+ \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2+\{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}^2- (\tau_{[k]} - \tau)^2\bigg]
\end{align*}
$$

因此我们只需要证明
$$
\{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2+\{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}^2- (\tau_{[k]} - \tau)^2 = \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}\{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}
$$

直接展开 $(\tau_{[k]} - \tau)^2$ 得到
$$
\begin{align*}
  (\tau_{[k]} - \tau)^2 & = \tau_{[k]}^2 + \tau^2 - 2\tau_{[k]}\tau \\
  & = (\bar{Y}_{[k]}(1) - \bar{Y}_{[k]}(0))^2 + (\bar{Y}(1) - \bar{Y}(0))^2 - 2(\bar{Y}_{[k]}(1) - \bar{Y}_{[k]}(0))(\bar{Y}(1) - \bar{Y}(0)) \\
  & = \bar{Y}_{[k]}(1)^2 + \bar{Y}_{[k]}(0)^2 - 2\bar{Y}_{[k]}(1)\bar{Y}_{[k]}(0) \\
  & \quad + \bar{Y}(1)^2 + \bar{Y}(0)^2 - 2\bar{Y}(1)\bar{Y}(0) \\
  & \quad - 2\bar{Y}_{[k]}(1)\bar{Y}(1) - 2\bar{Y}_{[k]}(0)\bar{Y}(0) + 2\bar{Y}_{[k]}(1)\bar{Y}(0) + 2\bar{Y}(1)\bar{Y}_{[k]}(0) \\
  & = \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}^2+\{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}^2 - \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\}\{\bar{Y}_{[k]}(0) - \bar{Y}(0)\}
\end{align*}
$$
移项即得到要证明的式子.

:::

上式仅在以下极端情况下为零：
$$ \sqrt{\frac{n_0}{n_1}} \{\bar{Y}_{[k]}(1) - \bar{Y}(1)\} + \sqrt{\frac{n_1}{n_0}} \{\bar{Y}_{[k]}(0) - \bar{Y}(0)\} = 0 $$
对于 $k=1, \dots, K$ 均成立.

实际中，这个结论依赖于“大层假设”（Large Strata Assumption），即各层的样本数足够多，这使我们面临一个权衡，即在增加 $K$ 以提高 SRE 精度的同时又不能使各层样本过少. 在极端情况下，若各层只有两个样本，其中一个进入处理组，另一个进入对照组，即 $n_{[k]1}=n_{[k]0}=1$，此时上述推导结果不再适用，它被称为**配对试验**，将在后面的章节详细讨论.

## 后分层

对于 CRE，其不同协变量层次的处理分配 $\mathbf{n}=\{n_{[k]1},n_{[k]0}\}_{k=1}^K$ 是不同的，但我们可以对处理分配 $\mathbf{n}$ 取条件，进而将 CRE 转化为 SRE，这被称为**后分层**（Post-Stratification）. 具体而言，若每一个层次分配到处理组和对照组的样本数均不为零（即 $0\notin\mathbf{n}$），则
$$
P_{\mathrm{CRE}}(\mathbf{Z}=\mathbf{z}\mid \mathbf{n})=\frac{P_{\mathrm{CRE}}(\mathbf{Z}=\mathbf{z}, \mathbf{n})}{P(\mathbf{n})}=\frac{1}{\displaystyle\prod_{k=1}^K\binom{n_{[k]}}{n_{[k]1}}}
$$

::: details 上式的证明

对于分子，事实上一旦 $\mathbf{Z}=\mathbf{z}$ 确定，相应的 $\mathbf{n}$ 的值也随之确定. 进而可以看作所有的处理分配有 $\displaystyle\binom{n}{n_1}$ 种，其中只有一种能和 $\mathbf{z}$ 相对应，因此分子的概率值为
$$
P_{\mathrm{CRE}}(\mathbf{Z}=\mathbf{z}, \mathbf{n})=\frac{1}{\displaystyle\binom{n}{n_1}}
$$
对于分母，实际上需要求从 $n$ 个个体中抽取 $n_1$ 个，其中有 $n_{[k]1}$ 个进入第 $k$ 层（$k=1,2,\ldots,K$）的概率. 这是一个多变量超几何分布问题，其概率为
$$
P(\mathbf{n})=\frac{\displaystyle\prod_{k=1}^K\binom{n_{[k]}}{n_{[k]1}}}{\displaystyle\binom{n}{n_1}}
$$
两式相除就证明了
$$
P_{\mathrm{CRE}}(\mathbf{Z}=\mathbf{z}\mid \mathbf{n})=\frac{P_{\mathrm{CRE}}(\mathbf{Z}=\mathbf{z}, \mathbf{n})}{P(\mathbf{n})}=\frac{1}{\displaystyle\prod_{k=1}^K\binom{n_{[k]}}{n_{[k]1}}}
$$

:::

在对 $\mathbf{n}$ 取条件后，就可以用分析 SRE 的方法分析带有离散协变量的 CRE. 同时 FRT 也变为条件 FRT，而 Neyman 推理统计量也变为
$$
\hat{\tau}_{\text{PS}}=\sum_{i=1}^K \pi_{[k]}\hat{\tau}_{[k]}
$$

后分层也使用了离散协变量带来的各层信息，所以一般而言会提高精度. 但由于 CRE 是随机的，后分层更容易出现某层的处理组或对照组中没有任何样本，此时所有的估计和推断方法都将失效.

从使用协变量信息的先后顺序上看，分层是在设计试验阶段使用协变量信息，而后分层是在分析结果阶段使用协变量信息. 这两者互为对偶关系，在大层假设下差别不大.