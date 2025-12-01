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
2S(1,0)=S^(1)+S^2(0)-S^2(\tau)
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
3. 方差的估计量 $$

:::
