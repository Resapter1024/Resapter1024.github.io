---
title: 限制矩模型上的 GEE 统计量
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-08-22
order: 2
# 禁止显示页脚
footer: false
---

## GEE 估计量

在经典的参数模型中，通常假定给定协变量 $X$ 下响应变量 $Y$ 的条件分布 $p(y \mid x; \theta)$，从而可以基于似然函数构建 MLE 并推导渐近有效界. 然而在限制矩模型中，我们仅对条件期望的形式作出设定，而对误差的分布形式不作任何参数化假定.

由于不存在显式的似然函数，第 3 章的参数 MLE 理论无法直接应用. 本节首先引入该模型下最自然、最通用的矩估计方法——**广义估计方程**（Generalized Estimating Equations, GEE）. 其影响函数与渐近方差不仅为实际推断提供了基准，更是后文探讨半参数效率界的具体参照对象.

::: info GEE 估计量

考虑限制矩模型，其条件期望设定为：
$$
E(Y \mid X) = \mu(X, \beta)
$$
其中 $Y$ 为 $d \times 1$ 维响应变量（$d > 1$ 时可处理多元或纵向数据），$X$ 为协变量向量，$\beta \in \mathbb{R}^q$ 为待估参数.

**广义估计方程（GEE）估计量** $\hat\beta_n$ 定义为如下向量估计方程的解（Liang & Zeger, 1986）：
$$
\sum_{i=1}^n A(X_i, \hat\beta_n)\big\{ Y_i - \mu(X_i, \hat\beta_n) \big\} = 0_{q \times 1}
$$
其中 $A(X, \beta)$ 为任意选取的 $q \times d$ 维权重函数矩阵. GEE 估计量本质上属于第 3 章所讨论的 M-估计量（Z-估计量）的特例.

:::

::: details GEE 的构造动机与权重矩阵 $A$ 的角色

限制矩模型对扰动项 $\varepsilon = Y - \mu(X, \beta)$ 的分布形态完全未知，我们唯一可利用的总体信息是残差在真值 $\beta_0$ 处的条件期望为零，即 $E[Y - \mu(X, \beta_0) \mid X] = 0$.

将残差转化为可求解的参数估计量时，权重矩阵 $A(X, \beta)$ 起到了一下三个作用：

1. 响应变量残差 $Y - \mu$ 是 $d$ 维的，而待估参数 $\beta$ 是 $q$ 维的. 乘以 $q \times d$ 维的矩阵 $A(X, \beta)$ 可以将残差压缩为 $q$ 个标量方程，从而与待估参数的维数恰好相符.
2. 对**任意**仅依赖于协变量 $X$ 的权重矩阵 $A(X)$，在真值 $\beta_0$ 处恒有：
   $$
   E\big[ A(X)\{Y - \mu(X, \beta_0)\} \big] = E\Big( A(X)\, \underbrace{E\big[Y - \mu(X, \beta_0) \mid X\big]}_{=0} \Big) = 0
   $$
   这意味着无论权重矩阵 $A$ 具体取何种形式，估计量 $\hat\beta_n$ 始终关于 $\beta_0$ 相合.
3. 虽然权重矩阵 $A$ 的选取不影响相合性，但不同的 $A$ 会直接导致估计量具有不同的渐近方差. 例如：
   * 在经典线性模型中，取 $A(X) = X^\top$ 对应普通最小二乘法（OLS）；
   * 取 $A(X) = X^\top V^{-1}(X)$ 对应加权最小二乘法（WLS）；
   * 在后面我们将证明，半参数效率理论将严格证明最优的权重矩阵选择为 $A^*(X) = D^\top(X, \beta_0) V^{-1}(X)$（其中 $V(X) = \operatorname{Var}(Y \mid X)$）.

:::

## 影响函数与渐近方差

记条件均值函数关于参数的梯度矩阵为 $D(X, \beta) = \dfrac{\partial \mu(X, \beta)}{\partial \beta^\top}$（$d \times q$ 维矩阵）. 下述定理给出了 GEE 估计量的渐近线性展开及其渐近协方差矩阵.

::: info GEE 估计量的渐近性质

设数据 $Z_i = (X_i^\top, Y_i^\top)^\top$ 独立同分布. 在标准正则性条件下，GEE 估计量 $\hat\beta_n$ 是渐近线性的，其影响函数为：
$$
\varphi(Z) = \big\{ E(AD) \big\}^{-1} A(X, \beta_0)\big\{ Y - \mu(X, \beta_0) \big\}
$$
其中 $E(AD) = E\big[ A(X, \beta_0) D(X, \beta_0) \big]$ 为 $q \times q$ 维常数矩阵.

进而，$\hat\beta_n$ 具备渐近正态性 $n^{1/2}(\hat\beta_n - \beta_0) \xrightarrow{\mathcal{D}} N(0, \operatorname{Var}(\varphi(Z)))$，其渐近方差矩阵具有三明治（Sandwich）形式：
$$
\operatorname{Var}(\varphi(Z)) = \big\{ E(AD) \big\}^{-1} E\Big[ A(X, \beta_0) V(X) A^\top(X, \beta_0) \Big] \big\{ E(AD) \big\}^{-\top}
$$
其中 $V(X) = \operatorname{Var}(Y \mid X)$ 为 $d \times d$ 维条件协方差矩阵，上标 $-\top$ 表示逆矩阵的转置.

:::

::: details 定理证明

将经验估计方程在真实参数 $\beta_0$ 处作一阶 Taylor 展开：
$$
0 = \frac{1}{\sqrt{n}}\sum_{i=1}^n A(X_i, \beta_0)\big\{ Y_i - \mu(X_i, \beta_0) \big\} + \left[ \frac{1}{n}\sum_{i=1}^n \left. \frac{\partial}{\partial \beta^\top}\Big( A(X_i, \beta)\{Y_i - \mu(X_i, \beta)\} \Big) \right|_{\beta_0} \right] n^{1/2}(\hat\beta_n - \beta_0) + o_P(1)
$$
利用乘积求导法则，方括号中的经验 Jacobian 矩阵可拆解为两项：
$$
\frac{\partial}{\partial \beta^\top}\Big( A(X, \beta)\{Y - \mu(X, \beta)\} \Big) = -A(X, \beta) \frac{\partial \mu(X, \beta)}{\partial \beta^\top} + \frac{\partial A(X, \beta)}{\partial \beta^\top} \{Y - \mu(X, \beta)\}
$$
由大数定律，第二项的样本均值在概率上收敛到其总体期望：
$$
E\left[ \frac{\partial A(X, \beta_0)}{\partial \beta^\top} \{Y - \mu(X, \beta_0)\} \right] = E\left[ \frac{\partial A(X, \beta_0)}{\partial \beta^\top} \underbrace{E\{Y - \mu(X, \beta_0) \mid X\}}_{=0} \right] = 0
$$
而第一项的期望为 $-E[A(X, \beta_0) D(X, \beta_0)] = -E(AD)$.

因此，整个经验 Jacobian 矩阵依概率收敛于 $-E(AD)$，代回展开式即得渐近线性表示：
$$
n^{1/2}(\hat\beta_n - \beta_0) = \frac{1}{\sqrt{n}}\sum_{i=1}^n \big\{ E(AD) \big\}^{-1} A(X_i, \beta_0)\big\{ Y_i - \mu(X_i, \beta_0) \big\} + o_P(1)
$$
从而证实了影响函数 $\varphi(Z) = \{E(AD)\}^{-1} A(X, \beta_0)\{Y - \mu(X, \beta_0)\}$.

最后计算影响函数的方差矩阵. 利用全方差公式与条件方差定义：
$$
\begin{aligned}
E\Big[ A(X, \beta_0)\{Y - \mu(X, \beta_0)\}\{Y - \mu(X, \beta_0)\}^\top A^\top(X, \beta_0) \Big] &= E\Big[ A(X, \beta_0) E\big(\{Y-\mu\}\{Y-\mu\}^\top \mid X\big) A^\top(X, \beta_0) \Big] \\
&= E\Big[ A(X, \beta_0) V(X) A^\top(X, \beta_0) \Big]
\end{aligned}
$$
结合常数矩阵的二次型乘法，直接给出渐近方差表达式. $\square$

:::

从影响函数的形式 $\varphi(Z) = C \cdot A(X)\varepsilon$ 可以看出，前置常数矩阵 $C = \{E(AD)\}^{-1}$ 起到了归一因子的作用，确保了影响函数满足正则性必要条件 $E[\varphi S_\beta^\top] = I_{q \times q}$. 这一结构形式在后文 4.5 节中将被证明是限制矩模型下所有半参数 RAL 影响函数的通式.

## 三明治方差估计量

在实际数据分析中，总体的条件方差函数 $V(X)$ 通常是未知的. 通过用样本均值代替总体期望，并用估计量 $\hat\beta_n$ 代替真值 $\beta_0$，可以直接构造渐近方差的三明治相合估计量：
$$
\widehat{\operatorname{Var}}(\hat\beta_n) = \big\{ \widehat{E}(AD) \big\}^{-1} \widehat{E}\big( A V A^\top \big) \big\{ \widehat{E}(AD) \big\}^{-\top}
$$
其中各经验样本均值项具体为：
$$
\begin{aligned}
\widehat{E}(AD) &= \frac{1}{n}\sum_{i=1}^n A(X_i, \hat\beta_n) D(X_i, \hat\beta_n) \\
\widehat{E}\big( A V A^\top \big) &= \frac{1}{n}\sum_{i=1}^n A(X_i, \hat\beta_n)\big\{ Y_i - \mu(X_i, \hat\beta_n) \big\}\big\{ Y_i - \mu(X_i, \hat\beta_n) \big\}^\top A^\top(X_i, \hat\beta_n)
\end{aligned}
$$

三明治方差估计量的巨大优势在于其模型无关性（Model-free / Robustness）：无论真实的条件方差 $V(X)$ 是同方差还是复杂的异方差结构，该估计量均能给出渐近正确的标准误推断.

::: tip 实例：对数线性模型 (Log-linear Model)

设响应变量 $Y > 0$（如医学研究中的细胞计数），协变量向量记为 $X = (X_1, \dots, X_{q-1})^\top$. 考虑对数线性均值模型：
$$
\log E(Y \mid X) = \alpha + \beta_1 X_1 + \dots + \beta_{q-1} X_{q-1} \implies E(Y \mid X) = \mu(X, \beta) = \exp(\alpha + \beta^\top X)
$$
由于指数变换保证了条件均值恒正，参数无需任何有界性约束. 此时响应变量为一维（$d=1$），若我们选择经典线性权重矩阵 $A(X) = (1, X^\top)^\top$，则 GEE 估计量解如下方程：
$$
\sum_{i=1}^n \begin{pmatrix} 1 \\ X_i \end{pmatrix} \Big\{ Y_i - \exp(\alpha + \beta^\top X_i) \Big\} = 0_{q \times 1}
$$
其条件均值梯度向量为 $D(X, \beta) = \mu(X, \beta)(1, X^\top)$，渐近方差直接通过三明治公式进行稳健估计.

::: details 一些评注

此处直接选取 $A(X) = (1, X^\top)^\top$ 虽能保证相合性，但一般不是最优的；在后面的小节中我们将看到，当真实的条件方差与条件均值成正比（即具备准泊松特征 $V(X) \propto \mu(X)$）时，该估计方程恰好达到了半参数最优效率界.

:::

## 半参数模型的两个核心问题

由上述 GEE 的讨论，自然引出了整个半参数统计理论的核心问题：

::: tip 两个问题

1. 在仅有矩限制且缺乏显式似然函数的情况下，如何系统性地**构造**出相合的半参数估计量？
2. 在所有相合的半参数估计量中（对应所有可能的权重矩阵 $A(X)$），是否存在一个**渐近方差矩阵最小**的最优估计量？如何显式确定其最优权重与有效影响函数？

:::
