---
title: 半参数干扰切空间
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-08-24
order: 4
# 禁止显示页脚
footer: false
---

## 半参数干扰切空间的定义

当我们考虑越来越复杂的参数子模型时，子模型干扰切空间的范围不断扩大，对应的方差下界也在逐步抬升. 为了彻底摆脱对具体子模型的依赖，我们需要一个统一的几何对象来总揽所有可能的干扰扰动方向. 为此我们给出 **半参数干扰切空间** 的定义

::: info 半参数干扰切空间

半参数模型 $\mathcal{P}$ 的干扰切空间 $\Lambda$ 定义为所有参数子模型干扰切空间之并的均方闭包：
$$
\Lambda = \overline{\bigcup_{\mathcal{P}_{\beta,\eta}} \Lambda_{\beta, \eta}}
$$
其中每个子模型的干扰切空间为 $\Lambda_{\beta, \eta} = \big\{ B^{q \times r} S_\eta(Z; \beta_0, \eta_0) : \forall B \in \mathbb{R}^{q \times r} \big\}$，闭包在 Hilbert 空间 $\mathcal{H}$ 的均方范数 $\|h\| = \big\{ E(h^\top h) \big\}^{1/2}$ 下取定.

根据泛函分析理论，$\Lambda$ 是 Hilbert 空间 $\mathcal{H}$ 中的闭集；本书假定其构成一个闭线性子空间（以确保正交投影定理成立）.

:::

::: info 半参数有效得分

半参数模型的有效得分（Efficient Score）定义为感兴趣参数得分 $S_\beta$ 向半参数干扰切空间 $\Lambda$ 作正交投影后的残差：
$$
S_{\mathrm{eff}}(Z; \beta_0, \eta_0) = S_\beta(Z; \beta_0, \eta_0) - \Pi\big(S_\beta(Z; \beta_0, \eta_0) \;\big|\; \Lambda\big)
$$
由于 $\Lambda$ 是闭线性子空间，根据正交投影定理，该投影存在且唯一.

:::

半参数有效得分 $S_{\mathrm{eff}}$ 的统计意义非常明确：它是从总得分 $S_\beta$ 中剔除了所有能够被干扰参数的变异所解释的投影分量后所剩下的部分.

## 半参数效率界与有效得分的关系

下面的定理建立了半参数效率界与半参数有效得分之间的精确等式关系，证明了我们无需逐一计算所有子模型的方差上确界，只需计算一次向全干扰切空间 $\Lambda$ 的投影即可.

::: info 半参数效率界定理

在 [4.3 中定义的半参数效率界](/notes/semiparametric%20statistics/Chap4/Chap4_3.md#SemiEffBound)，精确等于半参数有效得分协方差矩阵的逆：
$$
\sup_{\{\text{一切参数子模型 } \mathcal{P}_{\beta, \eta}\}} \Big[ E\big( S_{\mathrm{eff}, \beta, \eta} S_{\mathrm{eff}, \beta, \eta}^\top \big) \Big]^{-1} = \big[ E\big( S_{\mathrm{eff}}(Z) S_{\mathrm{eff}}^\top(Z) \big) \big]^{-1}
$$

::: details 定理证明

为叙述清晰，我们先考虑标量参数情形（$q=1$），此时矩阵逆退化为方差的倒数（范数平方的倒数）. 记所有子模型有效方差下界之母体上确界为 $V = \sup_{\{\mathcal{P}_{\beta,\eta}\}} \|S_{\mathrm{eff},\beta,\eta}\|^{-2}$，目标是证明 $V = \|S_{\mathrm{eff}}\|^{-2}$.

证明分为两个逼近方向：

首先证明 $\|S_{\mathrm{eff}}\|^{-2} \le V$。对于任意特定的参数子模型 $\mathcal{P}_{\beta,\eta}$，其干扰切空间显然包含于全干扰切空间中，即 $\Lambda_{\beta,\eta} \subseteq \Lambda$. 根据 Hilbert 空间的投影性质，投影空间越大，正交投影后的残差范数越小，因此：
$$
   \|S_{\mathrm{eff}}\| = \|S_\beta - \Pi(S_\beta \mid \Lambda)\| \le \|S_\beta - \Pi(S_\beta \mid \Lambda_{\beta,\eta})\| = \|S_{\mathrm{eff},\beta,\eta}\|
$$
两端取 $-2$ 次幂，可得对任意子模型恒有 $\|S_{\mathrm{eff}}\|^{-2} \le \|S_{\mathrm{eff},\beta,\eta}\|^{-2}$. 对右端关于一切子模型取上确界，立即得到 $\|S_{\mathrm{eff}}\|^{-2} \le V$.

再证明 $V \le \|S_{\mathrm{eff}}\|^{-2}$。由全干扰切空间 $\Lambda$ 的闭包定义以及 $\Pi(S_\beta \mid \Lambda) \in \Lambda$，必然存在一个参数子模型序列（对应的干扰得分为 $S_j$，系数矩阵为 $B_j$），使得 $B_j S_j \in \Lambda_j$ 在均方意义下强收敛于全投影：
$$
   \|\Pi(S_\beta \mid \Lambda) - B_j S_j\| \to 0 \quad (j \to \infty)
$$
由上确界的定义可知 $V^{-1} \le \|S_{\mathrm{eff},j}\|^2$. 将向量作正交分解：
$$
   S_\beta - B_j S_j = \underbrace{\big[ S_\beta - \Pi(S_\beta \mid \Lambda) \big]}_{\in \Lambda^\perp} + \underbrace{\big[ \Pi(S_\beta \mid \Lambda) - B_j S_j \big]}_{\in \Lambda}
$$
根据勾股定理以及子模型投影残差的最小性：
$$
   \|S_{\mathrm{eff},j}\|^2 \le \|S_\beta - B_j S_j\|^2 = \|S_{\mathrm{eff}}\|^2 + \|\Pi(S_\beta \mid \Lambda) - B_j S_j\|^2
$$
令 $j \to \infty$，右端第二项趋于 0，由此得到 $V^{-1} \le \|S_{\mathrm{eff}}\|^2$，两端取倒数即得 $V \le \|S_{\mathrm{eff}}\|^{-2}$.

结合以上两步，即证得 $V = \|S_{\mathrm{eff}}\|^{-2}$. 当 $q > 1$ 时，只需利用多元勾股定理并按照 Loewner 偏序（半正定矩阵序）进行完全相同的论证即可. $\square$

:::

## 半参数有效影响函数及其特征

下面的定理给出了半参数 RAL 估计量影响函数的判定标准以及有效影响函数的构造.

::: info 半参数影响函数的充要特征与有效影响函数

1. 任何半参数 RAL 估计量的影响函数 $\varphi(Z)$ 必须同时满足以下两个几何条件：
   * 归一化：$E\big[\varphi(Z) S_\beta^\top(Z; \beta_0, \eta_0)\big] = E\big[\varphi(Z) S_{\mathrm{eff}}^\top(Z; \beta_0, \eta_0)\big] = I_{q \times q}$；
   * 干扰正交：$\Pi(\varphi \mid \Lambda) = 0$，即 $\varphi(Z)$ 与全干扰切空间 $\Lambda$ 正交（$\varphi \perp \Lambda$）.

2. 满足上述两条件且方差矩阵最小（达到半参数效率界）的元素唯一存在，被称为半参数有效影响函数，其形式为：
   $$
   \varphi_{\mathrm{eff}}(Z; \beta_0, \eta_0) = \big\{ E\big(S_{\mathrm{eff}} S_{\mathrm{eff}}^\top\big) \big\}^{-1} S_{\mathrm{eff}}(Z; \beta_0, \eta_0)
   $$

::: details 定理证明

先证必要性。

先说明 $\varphi \perp \Lambda$：对 $\Lambda$ 中的任意元素 $h$，由闭包定义存在子模型序列 $B_j S_j$ 满足 $\|h - B_j S_j\| \to 0$. 因为 $\varphi$ 是半参数 RAL 估计量的影响函数，它对每一个具体的参数子模型都是 RAL 影响函数，由 [推论 3.1](/notes/semiparametric%20statistics/Chap3/Chap3_2.md#corollary1) 知 $\langle \varphi, B_j S_j \rangle = 0$. 由 Cauchy–Schwarz 不等式：
$$
  |\langle \varphi, h \rangle| = |\langle \varphi, h - B_j S_j \rangle| \le \|\varphi\| \cdot \|h - B_j S_j\| \to 0
$$
因此 $\langle \varphi, h \rangle = 0$，即 $\varphi \perp \Lambda$.

再说明归一化条件。由于 $\varphi$ 在每一个子模型下均满足 $E[\varphi S_\beta^\top] = I_{q \times q}$，利用有效得分布局分解 $S_\beta = S_{\mathrm{eff}} + \Pi(S_\beta \mid \Lambda)$，由于 $\Pi(S_\beta \mid \Lambda) \in \Lambda$ 且已证 $\varphi \perp \Lambda$，交叉协方差项为零：
$$
  E\big[\varphi S_\beta^\top\big] = E\big[\varphi S_{\mathrm{eff}}^\top\big] + E\big[\varphi \big(\Pi(S_\beta \mid \Lambda)\big)^\top\big] = E\big[\varphi S_{\mathrm{eff}}^\top\big] + 0 = I_{q \times q}
$$

接下来，验证我们构造的 $\varphi_{\mathrm{eff}}$ 满足两个条件并达到效率界。

根据有效得分的残差定义，$S_{\mathrm{eff}} = S_\beta - \Pi(S_\beta \mid \Lambda) \in \Lambda^\perp$，因此 $\varphi_{\mathrm{eff}} \propto S_{\mathrm{eff}}$ 自然满足与 $\Lambda$ 正交；同时 $E[\varphi_{\mathrm{eff}} S_{\mathrm{eff}}^\top] = \{E(S_{\mathrm{eff}} S_{\mathrm{eff}}^\top)\}^{-1} E[S_{\mathrm{eff}} S_{\mathrm{eff}}^\top] = I_{q \times q}$；

再计算方差：
$$
  \operatorname{Var}(\varphi_{\mathrm{eff}}) = E\big[\varphi_{\mathrm{eff}} \varphi_{\mathrm{eff}}^\top\big] = \{E(S_{\mathrm{eff}} S_{\mathrm{eff}}^\top)\}^{-1} E[S_{\mathrm{eff}} S_{\mathrm{eff}}^\top] \{E(S_{\mathrm{eff}} S_{\mathrm{eff}}^\top)\}^{-1} = \big[E(S_{\mathrm{eff}} S_{\mathrm{eff}}^\top)\big]^{-1}
$$
即该方差矩阵恰好达到了半参数效率界.

最后说明该有效影响函数唯一。设 $\tilde\varphi$ 为另一个满足条件 (i)(ii) 且方差达到效率界的合法影响函数.
由于 $S_{\mathrm{eff}}$ 属于总切空间 $\mathscr{T}$，故 $\varphi_{\mathrm{eff}} \in \mathscr{T}$. 结合下文定理 4.3 的线性簇性质，差值 $\tilde\varphi - \varphi_{\mathrm{eff}}$ 必属于切空间的正交补空间 $\mathscr{T}^\perp$.
由多元勾股定理：
$$
\operatorname{Var}(\tilde\varphi) = \operatorname{Var}(\varphi_{\mathrm{eff}}) + \operatorname{Var}(\tilde\varphi - \varphi_{\mathrm{eff}})
$$
若 $\tilde\varphi$ 亦达到最小方差下界，则必有 $\operatorname{Var}(\tilde\varphi - \varphi_{\mathrm{eff}}) = 0$，即 $\tilde\varphi = \varphi_{\mathrm{eff}}$ 几乎处处成立. 唯一性得证. $\square$

:::

## 半参数影响函数的几何结构

::: info 半参数影响函数构成的线性簇

设半参数模型中存在 RAL 估计量，记 $\mathscr{T}$ 为半参数总切空间（即所有参数子模型总切空间的均方闭包）.

1. 所有半参数 RAL 估计量的影响函数集合构成了 Hilbert 空间中的一个线性簇：
   $$
   \tilde\varphi(Z) + \mathscr{T}^\perp
   $$
   其中 $\tilde\varphi(Z)$ 为任意一个已知的半参数 RAL 影响函数，$\mathscr{T}^\perp$ 为半参数总切空间的正交补空间.
2. 唯一的有效影响函数 $\varphi_{\mathrm{eff}}(Z)$ 是该线性簇中离原点最近的元素，可由任意一个影响函数向半参数总切空间 $\mathscr{T}$ 进行正交投影获得：
   $$
   \varphi_{\mathrm{eff}}(Z) = \Pi\big(\tilde\varphi(Z) \;\big|\; \mathscr{T}\big) = \tilde\varphi(Z) - \Pi\big(\tilde\varphi(Z) \;\big|\; \mathscr{T}^\perp\big)
   $$

::: details 证明与构造思路

首先说明影响函数空间是线性簇 $\tilde\varphi + \mathscr{T}^\perp$

设 $\varphi$ 为任意半参数 RAL 影响函数，写成 $\varphi = \tilde\varphi + (\varphi - \tilde\varphi)$. 对任意子模型总得分向量 $B S(Z) \in \mathscr{T}_{\mathrm{sub}}$，因为 $\varphi$ 和 $\tilde\varphi$ 在该子模型中均满足归一化条件，由第 3 章定理 3.4 知其差值与子模型切空间正交：$\langle \varphi - \tilde\varphi, B S \rangle = 0$. 取均方闭包后，该正交性推广至全切空间：$\varphi - \tilde\varphi \perp \mathscr{T}$，即 $\varphi - \tilde\varphi \in \mathscr{T}^\perp$.

反之，对任意 $l \in \mathscr{T}^\perp$，构造 $\varphi = \tilde\varphi + l$. 由于 $S_\beta \in \mathscr{T}$，有 $E[l S_\beta^\top] = 0$，故 $\varphi$ 与 $\tilde\varphi$ 满足完全相同的矩归一化条件；同时因为 $\Lambda \subseteq \mathscr{T}$，必有 $l \perp \Lambda$，结合 $\tilde\varphi \perp \Lambda$ 可知 $\varphi \perp \Lambda$. 因此 $\varphi$ 满足定理 4.2 的全部两个条件，也是一个合法的半参数 RAL 影响函数.

再说明投影可以获取有效影响函数

将基准影响函数作正交分解 $\tilde\varphi = \Pi(\tilde\varphi \mid \mathscr{T}) + \Pi(\tilde\varphi \mid \mathscr{T}^\perp)$，任意影响函数 $\varphi = \tilde\varphi + l$（其中 $l \in \mathscr{T}^\perp$）均可表示为：
$$
\varphi = \Pi(\tilde\varphi \mid \mathscr{T}) + \Big[ \Pi(\tilde\varphi \mid \mathscr{T}^\perp) + l \Big]
$$
式中第一项属于 $\mathscr{T}$，第二项属于 $\mathscr{T}^\perp$. 由多元勾股定理：
$$
\operatorname{Var}(\varphi) = \operatorname{Var}\big(\Pi(\tilde\varphi \mid \mathscr{T})\big) + \operatorname{Var}\Big(\Pi(\tilde\varphi \mid \mathscr{T}^\perp) + l\Big) \ge \operatorname{Var}\big(\Pi(\tilde\varphi \mid \mathscr{T})\big)
$$
当且仅当取 $l = -\Pi(\tilde\varphi \mid \mathscr{T}^\perp)$ 时取得最小值，此时最小方差影响函数恰好为投影落点 $\varphi_{\mathrm{eff}} = \Pi(\tilde\varphi \mid \mathscr{T})$. $\square$

:::

这一投影性质为我们在半参数模型中构造最优估计量提供了通用的方法：

1. 构造初始估计：首先通过直觉、矩条件或 GEE 构造出**任意一个**相合且渐近线性的半参数估计量，求出其影响函数 $\tilde\varphi(Z)$；
2. 切空间投影：计算 $\tilde\varphi(Z)$ 在半参数总切空间 $\mathscr{T}$ 上的正交投影 $\Pi(\tilde\varphi \mid \mathscr{T})$，所得投影即为最优的有效影响函数 $\varphi_{\mathrm{eff}}(Z)$，进而由该影响函数反推构造出最优的有效估计量.

## 非参数模型的切空间

作为半参数模型的极限情形，我们考察除了密度非负和积分为 1 外不作任何限制的**非参数模型**（Nonparametric Model）.

::: info 非参数模型的满切空间定理

对于无任何分布约束的非参数模型（仅要求 $p(z) \ge 0$ 且 $\int p(z)\mathrm{d}\mu = 1$），其半参数总切空间 $\mathscr{T}$ 就是整个零均值、方差有限的 Hilbert 空间 $\mathcal{H}$：
$$
\mathscr{T} = \mathcal{H} = \big\{ h(Z) : E[h(Z)] = 0, \; E[h^\top(Z) h(Z)] < \infty \big\}
$$

::: details 定理证明

要证 $\mathscr{T} = \mathcal{H}$，需证两方向的包含关系：

先证明 $\mathscr{T} \subseteq \mathcal{H}$。任意参数子模型的得分函数 $S(Z) = \left.\frac{\partial \ln p(z;\gamma)}{\partial \gamma}\right|_{\gamma=0}$ 均满足零期望条件 $E[S(Z)] = 0$（由 $\int p(z;\gamma)\mathrm{d}\mu = 1$ 两边求导并交换积分与微分可得），且由正则性条件其方差有限，故任何子模型切空间元素都属于 $\mathcal{H}$. 由于 $\mathcal{H}$ 自身在均方范数下完备（是闭集），其均方闭包必然满足 $\mathscr{T} \subseteq \mathcal{H}$.

再证明 $\mathcal{H} \subseteq \mathscr{T}$。任取 $\mathcal{H}$ 中的元素 $h(Z)$（满足 $E[h]=0$ 且 $E[\|h\|^2] < \infty$）. 先设 $h(Z)$ 有界（即存在常数 $M$ 使得 $\|h(z)\| \le M$ 几乎处处成立）. 引入扰动参数 $\gamma \in \mathbb{R}^q$，构造如下参数子模型：
$$
p(z; \gamma) = p_0(z)\big\{ 1 + \gamma^\top h(z) \big\}
$$
当 $\|\gamma\| \le \frac{1}{2M}$ 时，由 Cauchy–Schwarz 不等式可知 $|\gamma^\top h| \le \frac{1}{2}$，从而 $p(z;\gamma) \ge \frac{1}{2} p_0(z) > 0$（保证非负性）；同时 $\int p(z;\gamma)\mathrm{d}\mu = 1 + \gamma^\top E[h(Z)] = 1$（保证归一性）；且 $\gamma=0$ 时还原为真值 $p_0(z)$.

计算该子模型在 $\gamma=0$ 处的得分函数：
$$
S(z) = \left.\frac{\partial \ln p(z;\gamma)}{\partial \gamma}\right|_{\gamma=0} = \left.\frac{p_0(z)h(z)}{p_0(z)(1 + \gamma^\top h(z))}\right|_{\gamma=0} = h(z)
$$
因此 $h(Z)$ 恰好是该合法参数子模型的得分函数，属于子模型切空间，进而 $h \in \mathscr{T}$.

接下来将结果推广到一般的无界元素 $h(Z)$。引入截断函数序列：
$$
h^{(k)}(Z) = h(Z)\mathbf{1}\{\|h(Z)\| \le k\} - E\big[ h(Z)\mathbf{1}\{\|h(Z)\| \le k\} \big]
$$
显然 $h^{(k)}$ 是有界且均值为零的随机函数，由上一段论证知 $h^{(k)} \in \mathscr{T}$. 由控制收敛定理，$E[\|h^{(k)} - h\|^2] \to 0$（$k \to \infty$），即 $h^{(k)}$ 在均方意义下强收敛于 $h$. 因为切空间 $\mathscr{T}$ 是闭集，故极限元素必有 $h \in \mathscr{T}$.

综上所述，$\mathscr{T} = \mathcal{H}$. $\square$

:::

非参数模型的切空间为整个 Hilbert 空间这一结论意义重大：它说明在完全非参数模型下，任意零均值有限方差的随机变量都可以通过某种微小的概率扰动路径被“生成”出来.

---

## 基于变量结构的 Hilbert 空间正交直和分解

当观测数据具有多维结构（例如多阶段观测、协变量与响应变量联合分布 $Z = (Z^{(1)}, \dots, Z^{(m)})$）时，联合概率密度可以依次分解为条件密度的连乘积：
$$
p_Z(z) = p_{Z^{(1)}}(z^{(1)}) \cdot p_{Z^{(2)}\mid Z^{(1)}}(z^{(2)}\mid z^{(1)}) \cdots p_{Z^{(m)}\mid Z^{(1)},\dots,Z^{(m-1)}}(z^{(m)}\mid z^{(1)},\dots,z^{(m-1)})
$$
在非参数设定下，上述各个条件密度之间彼此不存在任何函数约束（即在变分意义上相互独立）. 这一概率分解在几何上对应着切空间的**正交直和分解**.

::: info 非参数切空间的正交直和分解

设数据向量为 $Z = (Z^{(1)}, \dots, Z^{(m)})$，非参数模型的全切空间 $\mathscr{T} = \mathcal{H}$ 可以唯一分解为 $m$ 个两两正交的闭子空间的直和：
$$
\mathcal{H} = \mathscr{T}_1 \oplus \mathscr{T}_2 \oplus \cdots \oplus \mathscr{T}_m
$$
其中各正交子空间具体定义为：
$$
\begin{aligned}
\mathscr{T}_1 &= \Big\{ h\big(Z^{(1)}\big) \in \mathcal{H} : E\big[h\big(Z^{(1)}\big)\big] = 0 \Big\} \\
\mathscr{T}_j &= \Big\{ h\big(Z^{(1)},\dots,Z^{(j)}\big) \in \mathcal{H} : E\big[h\big(Z^{(1)},\dots,Z^{(j)}\big) \;\big|\; Z^{(1)},\dots,Z^{(j-1)}\big] = 0 \Big\} \\
\end{aligned}
$$

对任意元素 $h(Z) \in \mathcal{H}$，其在各子空间上的正交投影 $\Pi(h \mid \mathscr{T}_j)$ 具有显式的**鞅差增量分解形式**：
$$
\begin{aligned}
h_1\big(Z^{(1)}\big) &= \Pi(h \mid \mathscr{T}_1) = E\big[h(Z) \;\big|\; Z^{(1)}\big] \\
h_j\big(Z^{(1)},\dots,Z^{(j)}\big) &= \Pi(h \mid \mathscr{T}_j) = E\big[h(Z) \;\big|\; Z^{(1)},\dots,Z^{(j)}\big] - E\big[h(Z) \;\big|\; Z^{(1)},\dots,Z^{(j-1)}\big]
\end{aligned}
$$
且满足恒等式 $h(Z) = \sum_{j=1}^m h_j$.

::: details 定理证明

首先说明各子空间 $\mathscr{T}_j$ 互不相交且两两正交。

设 $1 \le j < k \le m$，任取 $h_j \in \mathscr{T}_j$ 与 $h_k \in \mathscr{T}_k$.
注意 $h_j$ 仅由前 $j$ 个变量决定，在给定 $Z^{(1)}, \dots, Z^{(k-1)}$ 时为已知的条件常数. 利用重期望公式，先对前 $k-1$ 个变量取条件期望：
$$
\begin{aligned}
E\big[ h_j^\top h_k \big] &= E\Big( E\big[ h_j^\top h_k \;\big|\; Z^{(1)},\dots,Z^{(k-1)} \big] \Big) \\
&= E\Big( h_j^\top \underbrace{E\big[ h_k \;\big|\; Z^{(1)},\dots,Z^{(k-1)} \big]}_{=0 \text{ (由 } \mathscr{T}_k \text{ 的定义)}} \Big) = 0
\end{aligned}
$$
因此 $\mathscr{T}_j \perp \mathscr{T}_k$ 对所有 $j \neq k$ 均成立.

接下来，验证投影公式 $h_j = \Pi(h \mid \mathscr{T}_j)$。

定义序列 $h_1 = E[h \mid Z^{(1)}]$ 以及 $h_j = E[h \mid Z^{(1)},\dots,Z^{(j)}] - E[h \mid Z^{(1)},\dots,Z^{(j-1)}]$（$j \ge 2$）.

由条件期望的塔式法则（Tower Property），容易直接验证：
$$
E\big[h_j \;\big|\; Z^{(1)},\dots,Z^{(j-1)}\big] = E\big[h \;\big|\; Z^{(1)},\dots,Z^{(j-1)}\big] - E\big[h \;\big|\; Z^{(1)},\dots,Z^{(j-1)}\big] = 0
$$
故 $h_j \in \mathscr{T}_j$.

接下来，要证 $h_j$ 是 $h$ 在 $\mathscr{T}_j$ 上的正交投影，只需证残差 $h - h_j \perp \mathscr{T}_j$. 对任意 $\zeta_j \in \mathscr{T}_j$，计算内积：
$$
\begin{aligned}
E\big[(h - h_j)^\top \zeta_j\big] &= E\Big( \big\{ h - E(h \mid Z^{(1)},\dots,Z^{(j)}) + E(h \mid Z^{(1)},\dots,Z^{(j-1)}) \big\}^\top \zeta_j \Big) \\
&= E\Big( \underbrace{E\big[h - E(h \mid Z^{(1)},\dots,Z^{(j)}) \;\big|\; Z^{(1)},\dots,Z^{(j)}\big]^\top}_{=0} \zeta_j \Big) \\ & \quad + E\Big( E(h \mid Z^{(1)},\dots,Z^{(j-1)})^\top \zeta_j \Big)
\end{aligned}
$$
对第二项再对前 $j-1$ 个变量取条件期望，由于 $E[\zeta_j \mid Z^{(1)},\dots,Z^{(j-1)}] = 0$，第二项亦为 0. 因此 $E[(h - h_j)^\top \zeta_j] = 0$，由投影定理确定了 $h_j = \Pi(h \mid \mathscr{T}_j)$.

最后，由于逐项求和构成了望远镜和（Telescoping Sum），即
$$
\begin{align*}
    \sum_{j=1}^m h_j & = E\big[h \mid Z^{(1)}\big] + \sum_{j=2}^m \Big( E\big[h \mid Z^{(1)},\dots,Z^{(j)}\big] - E\big[h \mid Z^{(1)},\dots,Z^{(j-1)}\big] \Big) \\ & = E\big[h \mid Z^{(1)},\dots,Z^{(m)}\big] = h
\end{align*}
$$
由于 $h$ 可被分解为各正交子空间分量之和，故 $\mathcal{H} = \bigoplus_{j=1}^m \mathscr{T}_j$. $\square$

:::

该定理表明，在多维数据结构下，向非参数切空间的正交投影完全等价于**Doob 鞅差分解**——每个正交分量 $h_j$ 精确捕捉了“在已知前 $j-1$ 个变量的基础上，引入第 $j$ 个新变量所带来的独立条件信息增量”.
