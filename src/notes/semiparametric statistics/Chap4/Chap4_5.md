---
title: 限制矩模型的干扰切空间
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-08-24
order: 5
# 禁止显示页脚
footer: false
---

## 限制矩模型上干扰切空间的结构

本节深入研究限制矩模型的切空间几何结构. 设 $Y$ 为 $d$ 维响应变量，$X$ 为协变量向量，限制矩模型假定条件期望满足
$$
E(Y \mid X) = \mu(X, \beta)
$$
即 $Y = \mu(X, \beta) + \varepsilon$，其中扰动项满足条件均值为零 $E(\varepsilon \mid X) = 0$. 由此，联合概率密度函数可表示为
$$
p_{Y,X}(y, x) = p_{\varepsilon, X}\{y - \mu(x, \beta), x\} = \pi_1\{y - \mu(x, \beta), x\} \pi_2(x)
$$
其中 $\pi_1(\varepsilon, x) = p_{\varepsilon \mid X}(\varepsilon \mid x)$ 为误差项的条件密度，$\pi_2(x) = p_X(x)$ 为协变量的边缘密度. 这里的干扰参数为无穷维函数对 $(\pi_1, \pi_2)$，满足约束条件 $\int \pi_1 \mathrm{d}\varepsilon = 1$、$\int \varepsilon \pi_1 \mathrm{d}\varepsilon = 0$ 以及 $\int \pi_2 \mathrm{d}\mu_X = 1$.

我们的目标是利用 4.4 节建立的几何框架，显式推导出限制矩模型的干扰切空间 $\Lambda$ 与正交补空间 $\Lambda^\perp$. 由于条件密度 $\pi_1$ 与边缘密度 $\pi_2$ 在变分意义上相互独立，我们首先证明二者诱导的切空间相互正交，进而分别刻画各自的几何结构.

考虑有限维参数子模型 $p_{\varepsilon \mid X}(\varepsilon \mid x, \eta_1)$ 与 $p_X(x, \eta_2)$，令 $\eta = (\eta_1^\top, \eta_2^\top)^\top \in \mathbb{R}^{r_1 + r_2}$. 对应的子模型干扰得分向量为 $S_\eta = (S_{\eta_1}^\top, S_{\eta_2}^\top)^\top$，其中
$$
S_{\eta_1}(\varepsilon, x) = \frac{\partial \ln p_{\varepsilon \mid X}(\varepsilon \mid x, \eta_1)}{\partial \eta_1}, \qquad S_{\eta_2}(x) = \frac{\partial \ln p_X(x, \eta_2)}{\partial \eta_2}
$$
子模型的干扰切空间可拆解为 $\Lambda_\eta = \Lambda_1 \oplus \Lambda_2$，其中 $\Lambda_1 = \{B_1 S_{\eta_1} : B_1 \in \mathbb{R}^{q \times r_1}\}$，$\Lambda_2 = \{B_2 S_{\eta_2} : B_2 \in \mathbb{R}^{q \times r_2}\}$.

::: info 引理 4.1：子模型干扰得分的正交性

在任意参数子模型下，条件分布切空间与边缘分布切空间正交，即 $\Lambda_1 \perp \Lambda_2$.

::: details 证明

只需证明得分函数的交叉协方差为零，即 $E[S_{\eta_1} S_{\eta_2}^\top] = 0_{r_1 \times r_2}$.

由于条件概率密度满足归一化条件 $\int p_{\varepsilon \mid X}(\varepsilon \mid x, \eta_1) \mathrm{d}\varepsilon = 1$，两边对 $\eta_1$ 求导并在积分号下交换求导与积分次序，可得 $E[S_{\eta_1} \mid X] = 0_{r_1 \times 1}$.

利用重期望法则，并将仅依赖于 $X$ 的得分项 $S_{\eta_2}(X)$ 提出条件期望：
$$
E\big[ S_{\eta_1} S_{\eta_2}^\top \big] = E\Big( E\big[ S_{\eta_1} \mid X \big] S_{\eta_2}^\top(X) \Big) = E\big[ 0 \cdot S_{\eta_2}^\top(X) \big] = 0_{r_1 \times r_2}
$$
因此 $\Lambda_1 \perp \Lambda_2$. $\square$

:::

由于 $\eta_1$ 与 $\eta_2$ 变分独立，整个半参数模型的干扰切空间可以表示为直和 $\Lambda = \Lambda_{1s} \oplus \Lambda_{2s}$，其中 $\Lambda_{1s}$ 和 $\Lambda_{2s}$ 分别为所有参数子模型空间 $\Lambda_1$ 和 $\Lambda_2$ 的均方闭包.

## 空间 $\Lambda_{2s}$ 的结构

$\Lambda_{2s}$ 来自协变量的边缘密度 $p_X$. 由于模型对 $X$ 的边际分布除了密度积分为 1 外不作任何假设，直觉上它可以张出所有以 $X$ 为自变量的零均值平方可积函数.

::: info 定理 4.6：边缘分布干扰切空间

半参数干扰切空间分量 $\Lambda_{2s}$ 等于一切以 $X$ 为自变量的 $q$ 维零均值、有限方差随机函数构成的闭子空间：
$$
\Lambda_{2s} = \big\{ \zeta(X) \in \mathcal{H} : E[\zeta(X)] = 0_{q \times 1} \big\}
$$

::: details 定理证明

记目标空间为 $\mathcal{C} = \{\zeta(X) \in \mathcal{H} : E[\zeta(X)] = 0\}$.

首先证明 $\Lambda_{2s} \subseteq \mathcal{C}$. 任意子模型干扰得分 $S_{\eta_2}(X)$ 仅依赖于 $X$，且由 $\int p_X(x, \eta_2)\mathrm{d}\mu_X = 1$ 对 $\eta_2$ 求导可知 $E[S_{\eta_2}(X)] = 0$，故任何子模型元素 $B_2 S_{\eta_2} \in \mathcal{C}$. 由于 $\mathcal{C}$ 在均方范数下是闭子空间，故其闭包满足 $\Lambda_{2s} \subseteq \mathcal{C}$.

再证明 $\mathcal{C} \subseteq \Lambda_{2s}$. 对任意有界元素 $\zeta \in \mathcal{C}$（满足 $E(\zeta) = 0$ 且 $\|\zeta\| \le M$），构造边缘密度子模型 $p_X(x, \eta_2) = p_0(x)\{1 + \eta_2^\top \zeta(x)\}$. 当 $\|\eta_2\| \le 1/(2M)$ 时，密度恒正且满足积分归一化条件，在 $\eta_2 = 0$ 处还原为真值 $p_0(x)$. 计算该子模型在真值处的得分函数为 $S_{\eta_2}(x) = \zeta(x)$，故 $\zeta$ 属于某个子模型切空间，进而 $\zeta \in \Lambda_{2s}$. 对于无界元素，利用标准截断逼近并结合 $\Lambda_{2s}$ 的闭性即可得到 $\zeta \in \Lambda_{2s}$.

结合以上两步，即证得 $\Lambda_{2s} = \mathcal{C}$. $\square$

:::

## 空间 $\Lambda_{1s}$ 的结构

$\Lambda_{1s}$ 来自条件误差密度 $p_{\varepsilon \mid X}$，它受到两个约束的牵制：密度积分归一化与矩条件 $E(\varepsilon \mid X) = 0$.

::: info 定理 4.7：条件分布干扰切空间

半参数干扰切空间分量 $\Lambda_{1s}$ 等于满足下述两个条件的一切 $(\varepsilon, X)$ 的 $q$ 维平方可积函数 $a(\varepsilon, X)$ 构成的闭子空间：

1. 条件均值为零：$E[a(\varepsilon, X) \mid X] = 0_{q \times 1}$；
2. 条件交叉协方差为零：$E[a(\varepsilon, X)\varepsilon^\top \mid X] = 0_{q \times d}$.

::: details 定理证明

记满足上述两条件的函数集合为 $\mathcal{C} = \{a(\varepsilon, X) \in \mathcal{H} : E[a \mid X] = 0, \; E[a\varepsilon^\top \mid X] = 0\}$.

首先证明 $\Lambda_{1s} \subseteq \mathcal{C}$. 对条件概率密度归一化约束 $\int p_{\varepsilon \mid X}(\varepsilon \mid x, \eta_1)\mathrm{d}\varepsilon = 1$ 与矩约束 $\int \varepsilon p_{\varepsilon \mid X}(\varepsilon \mid x, \eta_1)\mathrm{d}\varepsilon = 0$ 分别在积分号下对 $\eta_1$ 求导，直接得到 $E[S_{\eta_1} \mid X] = 0$ 以及 $E[S_{\eta_1}\varepsilon^\top \mid X] = 0$. 因此任意子模型得分线性组合 $B_1 S_{\eta_1}$ 均属于 $\mathcal{C}$，由闭性可知 $\Lambda_{1s} \subseteq \mathcal{C}$.

再证明 $\mathcal{C} \subseteq \Lambda_{1s}$. 对任意有界元素 $a \in \mathcal{C}$（$\|a\| \le M$），构造如下条件密度参数子模型：
$$
p_{\varepsilon \mid X}(\varepsilon \mid x, \eta_1) = p_{0\varepsilon \mid X}(\varepsilon \mid x)\big\{ 1 + \eta_1^\top a(\varepsilon, x) \big\}
$$
取 $\|\eta_1\| \le 1/(2M)$ 保证密度非负. 此时，条件积分满足
$$
\int p_{\varepsilon \mid X}(\varepsilon \mid x, \eta_1) \mathrm{d}\varepsilon = 1 + \eta_1^\top E\big[a(\varepsilon, X) \mid X=x\big] = 1 + 0 = 1
$$
条件期望满足
$$
\int \varepsilon p_{\varepsilon \mid X}(\varepsilon \mid x, \eta_1) \mathrm{d}\varepsilon = E(\varepsilon \mid X=x) + \eta_1^\top E\big[a(\varepsilon, X)\varepsilon^\top \mid X=x\big] = 0 + 0 = 0
$$
该子模型在真值处的得分函数即为 $a(\varepsilon, x)$，故 $a \in \Lambda_{1s}$. 一般无界情形经截断逼近同理可证，故 $\mathcal{C} \subseteq \Lambda_{1s}$.

结合以上两步，即证得 $\Lambda_{1s} = \mathcal{C}$. $\square$

:::

记如下两个约束空间：
$$
\Lambda_{1sa} = \big\{ a(\varepsilon, X) \in \mathcal{H} : E[a \mid X] = 0 \big\}, \qquad \Lambda_{1sb} = \big\{ a(\varepsilon, X) \in \mathcal{H} : E[a\varepsilon^\top \mid X] = 0 \big\}
$$
显然有 $\Lambda_{1s} = \Lambda_{1sa} \cap \Lambda_{1sb}$，从而全干扰切空间具有形式 $\Lambda = \Lambda_{2s} \oplus (\Lambda_{1sa} \cap \Lambda_{1sb})$.

---

## 干扰切空间的代数简化

虽然全干扰切空间的初等形式为 $\Lambda = \Lambda_{2s} \oplus (\Lambda_{1sa} \cap \Lambda_{1sb})$，但借助以下引理，我们可以将这一繁琐的直和与交集形式极大地化简为一个极其干净的单一条件空间.

::: info 引理 4.2：干扰切空间的等价简化

上述定义的子空间满足以下性质：

1. $\Lambda_{1sa} = \Lambda_{2s}^\perp$；
2. $\Lambda_{2s} \subseteq \Lambda_{1sb}$；
3. 半参数干扰切空间精确等于：
   $$
   \Lambda = \Lambda_{2s} \oplus (\Lambda_{1sa} \cap \Lambda_{1sb}) = \Lambda_{1sb} = \big\{ h(\varepsilon, X) \in \mathcal{H} : E[h(\varepsilon, X)\varepsilon^\top \mid X] = 0_{q \times d} \big\}
   $$

::: details 证明

首先证明第一项 $\Lambda_{1sa} = \Lambda_{2s}^\perp$. 对任意 $\zeta \in \Lambda_{2s}$ 和 $a \in \Lambda_{1sa}$，由于 $\zeta(X)$ 是 $X$ 的函数，有 $E[\zeta^\top a] = E[\zeta^\top E(a \mid X)] = 0$，故 $\Lambda_{1sa} \subseteq \Lambda_{2s}^\perp$. 另一方面，任意 $h \in \mathcal{H}$ 均可分解为 $h = E(h \mid X) + \{h - E(h \mid X)\}$，其中第一项属于 $\Lambda_{2s}$，第二项满足条件均值为零故属于 $\Lambda_{1sa}$. 这说明 $\mathcal{H} = \Lambda_{2s} \oplus \Lambda_{1sa}$，因此正交补空间必为 $\Lambda_{1sa} = \Lambda_{2s}^\perp$.

再证明第二项 $\Lambda_{2s} \subseteq \Lambda_{1sb}$. 对任意 $\zeta(X) \in \Lambda_{2s}$，由于模型假定 $E(\varepsilon \mid X) = 0$，直接计算条件交叉矩：
$$
E\big[ \zeta(X)\varepsilon^\top \mid X \big] = \zeta(X) E\big[\varepsilon^\top \mid X\big] = 0
$$
故 $\zeta \in \Lambda_{1sb}$.

最后证明第三项 $\Lambda = \Lambda_{1sb}$. 记 $W = \Lambda_{2s} \oplus (\Lambda_{1sa} \cap \Lambda_{1sb})$. 由于 $\Lambda_{2s} \subseteq \Lambda_{1sb}$ 且交空间自然包含于 $\Lambda_{1sb}$，由线性空间的封闭性立即可得 $W \subseteq \Lambda_{1sb}$. 反之，任取 $h \in \Lambda_{1sb}$，将其正交分解为 $h = E(h \mid X) + \{h - E(h \mid X)\}$. 第一项属于 $\Lambda_{2s}$；对于第二项，由 $h \in \Lambda_{1sb}$ 及 $E(h \mid X) \in \Lambda_{2s} \subseteq \Lambda_{1sb}$ 可知 $h - E(h \mid X) \in \Lambda_{1sb}$，同时该项满足条件期望为零故属于 $\Lambda_{1sa}$，因此第二项属于 $\Lambda_{1sa} \cap \Lambda_{1sb}$. 这说明 $h \in W$，从而 $\Lambda_{1sb} \subseteq W$.

结合以上讨论，证得 $\Lambda = \Lambda_{1sb}$. $\square$

:::

这一化简非常关键：它表明在限制矩模型中，**干扰切空间仅受“与误差项 $\varepsilon$ 条件正交”这一个矩条件约束**，密度的归一化约束完全被矩结构所吸收.

---

## 干扰切空间的正交补与影响函数族

利用 $\Lambda = \Lambda_{1sb}$ 的精炼形式，我们能够显式求出其正交补空间 $\Lambda^\perp$.

::: info 定理 4.8：干扰切空间的正交补与投影公式

在限制矩模型中，假设条件协方差矩阵 $V(X) = \operatorname{Var}(Y \mid X) = E(\varepsilon\varepsilon^\top \mid X)$ 处处正定，则：

1. 干扰切空间的正交补空间为：
   $$
   \Lambda^\perp = \big\{ A(X)\varepsilon : A(X) \text{ 为任意 } q \times d \text{ 维函数矩阵} \big\}
   $$
2. 任意元素 $h(\varepsilon, X) \in \mathcal{H}$ 向干扰切空间 $\Lambda$ 的正交投影及其残差分别为：
   $$
   \begin{aligned}
   \Pi(h \mid \Lambda) &= h - E\big(h\varepsilon^\top \mid X\big) V^{-1}(X)\varepsilon \\
   h - \Pi(h \mid \Lambda) &= E\big(h\varepsilon^\top \mid X\big) V^{-1}(X)\varepsilon
   \end{aligned}
   $$

::: details 定理证明

记函数族 $\mathcal{A} = \{A(X)\varepsilon : A(X) \text{ 为 } q \times d \text{ 维矩阵}\}$.

首先证明 $\mathcal{A} \perp \Lambda_{1sb}$. 任取 $A(X)\varepsilon \in \mathcal{A}$ 以及 $a \in \Lambda_{1sb}$，利用重期望法则：
$$
E\big[ a^\top A(X)\varepsilon \big] = E\Big( \operatorname{tr}\big\{ A^\top(X) E(a\varepsilon^\top \mid X) \big\} \Big)
$$
由于 $a \in \Lambda_{1sb}$ 意味着 $E(a\varepsilon^\top \mid X) = 0$，上述期望恒等于 0，因此 $\mathcal{A} \perp \Lambda_{1sb}$，即 $\mathcal{A} \subseteq \Lambda_{1sb}^\perp$.

再证明 $\Lambda_{1sb}^\perp \subseteq \mathcal{A}$. 任取 $h \in \mathcal{H}$，我们希望寻找一个权重矩阵 $g(X)$ 使得差值 $h - g(X)\varepsilon \in \Lambda_{1sb}$，即满足
$$
E\big[ \{h - g(X)\varepsilon\}\varepsilon^\top \mid X \big] = E(h\varepsilon^\top \mid X) - g(X)E(\varepsilon\varepsilon^\top \mid X) = 0
$$
由于 $V(X) = E(\varepsilon\varepsilon^\top \mid X)$ 正定可逆，唯一解得 $g(X) = E(h\varepsilon^\top \mid X) V^{-1}(X)$. 此时定义 $h_1 = g(X)\varepsilon \in \mathcal{A}$ 以及 $h_2 = h - h_1$，则 $h_2 \in \Lambda_{1sb}$，由此得到正交直和分解 $h = h_1 + h_2$.

结合第一步，证得 $\Lambda_{1sb}^\perp = \mathcal{A}$，且 $h$ 在 $\Lambda^\perp$ 上的投影残差为 $h - \Pi(h \mid \Lambda) = g(X)\varepsilon = E(h\varepsilon^\top \mid X) V^{-1}(X)\varepsilon$. $\square$

:::

定理 4.8 揭示了限制矩模型的核心本质：**所有与干扰切空间正交的合法方向必须具备 $A(X)\varepsilon$ 的形式**.

结合 RAL 估计量的归一化要求 $E[\varphi S_\beta^\top] = I_{q \times q}$，任何合法的半参数影响函数必须形如
$$
\varphi(Z) = C A(X)\varepsilon = C A(X)\big\{ Y - \mu(X, \beta_0) \big\}
$$
其中归一化常数矩阵满足 $C = [E(A(X) S_\beta^\top)]^{-1} = [E(A(X) D(X))]^{-1}$. 这从几何上完美解释了为何我们在 4.1 节中构造的 GEE 估计方程是半参数模型下的必然选择.

## 有效影响函数与最优 GEE

利用向干扰切空间 $\Lambda$ 的投影公式，我们可以直接求得半参数有效得分以及达到效率界的最优估计量.

::: info 定理 4.9：限制矩模型的有效影响函数与半参数效率界

在限制矩模型中，记均值函数的梯度矩阵为 $D(X) = \left.\frac{\partial \mu(X, \beta)}{\partial \beta^\top}\right|_{\beta_0}$（$d \times q$ 维矩阵），则：

1. **半参数有效得分**为：
   $$
   S_{\mathrm{eff}}(\varepsilon, X) = D^\top(X) V^{-1}(X)\varepsilon = D^\top(X) V^{-1}(X)\big\{ Y - \mu(X, \beta_0) \big\}
   $$
2. **半参数有效影响函数**为：
   $$
   \varphi_{\mathrm{eff}}(Z) = \big[ E\big( D^\top(X) V^{-1}(X) D(X) \big) \big]^{-1} D^\top(X) V^{-1}(X)\big\{ Y - \mu(X, \beta_0) \big\}
   $$
3. **半参数效率界**为：
   $$
   \operatorname{Var}(\varphi_{\mathrm{eff}}) = \big[ E\big( D^\top(X) V^{-1}(X) D(X) \big) \big]^{-1}
   $$
4. 达到该效率界的最优半参数估计量为解如下**最优 GEE 方程**的估计量 $\hat\beta_n$：
   $$
   \sum_{i=1}^n D^\top(X_i, \hat\beta_n) V^{-1}(X_i)\big\{ Y_i - \mu(X_i, \hat\beta_n) \big\} = 0
   $$

::: details 定理证明

首先推导有效得分的显式形式. 根据定义 $S_{\mathrm{eff}} = S_\beta - \Pi(S_\beta \mid \Lambda)$，利用定理 4.8 中的残差投影公式（取 $h = S_\beta$），有
$$
S_{\mathrm{eff}} = E\big(S_\beta \varepsilon^\top \mid X\big) V^{-1}(X)\varepsilon
$$
对模型矩约束恒等式 $\int \{y - \mu(x, \beta)\} p_{Y \mid X}(y \mid x, \beta)\mathrm{d}\mu_Y = 0$ 两端关于 $\beta$ 求导，在积分号下交换微分与积分次序：
$$
-\frac{\partial \mu(x, \beta)}{\partial \beta^\top} + \int \{y - \mu(x, \beta)\} \frac{\partial \ln p_{Y \mid X}(y \mid x, \beta)}{\partial \beta^\top} p_{Y \mid X}(y \mid x, \beta)\mathrm{d}\mu_Y = 0
$$
由于上式第二项即为条件协方差期望 $E(\varepsilon S_\beta^\top \mid X)$，代入在真值 $\beta_0$ 处的定义，可得矩阵等式
$$
-D(X) + E\big( \varepsilon S_\beta^\top \mid X \big) = 0 \implies E\big( S_\beta \varepsilon^\top \mid X \big) = D^\top(X)
$$
将该等式代回有效得分表达式，即证得 $S_{\mathrm{eff}} = D^\top(X) V^{-1}(X)\varepsilon$.

再验证有效影响函数与效率界. 根据定理 4.2，有效影响函数具有形式 $\varphi_{\mathrm{eff}} = \{E(S_{\mathrm{eff}}S_{\mathrm{eff}}^\top)\}^{-1} S_{\mathrm{eff}}$. 直接计算有效得分的方差矩阵：
$$
\begin{aligned}
E\big[ S_{\mathrm{eff}} S_{\mathrm{eff}}^\top \big] &= E\Big[ D^\top(X) V^{-1}(X) \varepsilon \varepsilon^\top V^{-1}(X) D(X) \Big] \\
&= E\Big( D^\top(X) V^{-1}(X) \underbrace{E(\varepsilon\varepsilon^\top \mid X)}_{=V(X)} V^{-1}(X) D(X) \Big) \\
&= E\big[ D^\top(X) V^{-1}(X) D(X) \big]
\end{aligned}
$$
求逆后立即得到半参数效率界以及有效影响函数 $\varphi_{\mathrm{eff}}(Z)$.

最后，对比 4.1 节 GEE 估计量的影响函数公式，可知当且仅当选取最优权重矩阵 $A^*(X) = D^\top(X) V^{-1}(X)$ 时，GEE 的影响函数恰好与有效影响函数 $\varphi_{\mathrm{eff}}(Z)$ 重合，对应的估计量方差达到半参数效率界. $\square$

:::

这一结论非常优美：最优权重矩阵 $A^*(X) = D^\top(X) V^{-1}(X)$ 包含两重直观含义——$V^{-1}(X)$ 对观测进行精度加权（方差较小的高精度观测被赋予更高权重），而 $D^\top(X)$ 则将信号投影到均值函数关于参数变化最敏感的方向上.

## 离散与非连续响应变量的推广

上述推导中假定 $\varepsilon$ 具有关于 Lebesgue 测度的概率密度. 当响应变量 $Y$ 为离散分布（例如二值分类或计数数据）时，$\varepsilon = Y - \mu(X, \beta)$ 不存在通常意义下的连续密度. 此时我们直接在联合分布 $p(y, x) = p(y \mid x) p(x)$ 上开展推导.

定义离散情况下的干扰切空间为 $\Lambda = \{a(Y, X) : E[a(Y, X)\{Y - \mu(X, \beta_0)\} \mid X] = 0\}$. 重复上述正交分解论证，有效得分同样满足
$$
\begin{aligned}
S_{\mathrm{eff}}(Y, X) &= E\Big[ S_\beta(Y, X)\big\{Y - \mu(X, \beta_0)\big\}^\top \;\Big|\; X \Big] V^{-1}(X)\big\{ Y - \mu(X, \beta_0) \big\} \\
&= D^\top(X) V^{-1}(X)\big\{ Y - \mu(X, \beta_0) \big\}
\end{aligned}
$$
这说明无论响应变量是连续型、离散型还是混合型，只要满足条件矩约束 $E(Y \mid X) = \mu(X, \beta)$，有效得分与最优 GEE 的形式均完全保持一致.


## 参数子模型的存在性保证

在上述理论推导中，我们隐含假定了对真值 $\beta_0$ 邻域内的任意 $\beta$，都存在满足矩约束 $E_\beta(Y \mid X) = \mu(X, \beta)$ 的合法条件分布族. 这里利用**指数倾斜**（Exponential Tilting）方法给出构造性的存在性证明.

对任意参数 $\beta$，构造如下条件概率密度族：
$$
p(y \mid x, \beta) = \frac{p_0(y \mid x) \exp\big\{ c^\top(x, \beta) y \big\}}{E_0\big[ \exp\{c^\top(x, \beta) Y\} \;\big|\; X = x \big]}
$$
其中函数 $c(x, \beta)$ 的选取旨在强制满足矩约束 $E_\beta(Y \mid X) = \mu(X, \beta)$，并在真值处满足 $c(x, \beta_0) = 0$.

定义向量映射 $m(c) = \dfrac{E_0[Y \exp(c^\top Y) \mid X]}{E_0[\exp(c^\top Y) \mid X]}$. 其对 $c$ 的导数矩阵为在倾斜分布下的条件协方差矩阵：
$$
\frac{\partial m(c)}{\partial c^\top} = \operatorname{Var}_c(Y \mid X)
$$
只要条件方差矩阵严格正定，该映射在 $c=0$ 处即为严格局部单射. 根据反函数定理，在 $\beta_0$ 的某个开邻域内，存在唯一的函数解 $c(x, \beta)$ 使得条件均值精确等于 $\mu(X, \beta)$. 这在数学上完备保证了满足矩约束的参数子模型的局部存在性.
