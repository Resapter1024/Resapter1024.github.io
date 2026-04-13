---
title: 习题
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-04-13
# 禁止显示页脚
footer: false
---

::: info 习题 1

证明希尔伯特空间的投影定理（定理 2.1）。

:::

::: info 习题 2

设 $Z = (Z_1, \dots, Z_p)^T$ 是一个 $p$ 维多元正态分布随机向量，其均值为零，协方差矩阵为 $\Sigma^{p \times p}$。我们也将 $Z$ 写成分块向量的形式 $Z = (Y_1^T, Y_2^T)^T$，其中 $Y_1^{q \times 1} = (Z_1, \dots, Z_q)^T$ 且 $Y_2^{(p-q) \times 1} = (Z_{q+1}, \dots, Z_p)^T$，$q < p$，并且

$$
\Sigma = \begin{pmatrix} \Sigma_{11}^{q \times q} & \Sigma_{12}^{q \times (p-q)} \\ \Sigma_{21}^{(p-q) \times q} & \Sigma_{22}^{(p-q) \times (p-q)} \end{pmatrix}, \text{其中}
$$

$$
\Sigma_{11} = E(Y_1 Y_1^T), \quad \Sigma_{12} = E(Y_1 Y_2^T), \quad \Sigma_{21} = E(Y_2 Y_1^T), \quad \Sigma_{22} = E(Y_2 Y_2^T).
$$

设 $\mathcal{H}$ 为所有关于 $Z$ 的均值为零、方差有限的 $q$ 维可测函数构成的希尔伯特空间，并赋予协方差内积。设 $\mathcal{U}$ 为由 $Y_2$ 张成的线性子空间；即，$\mathcal{U}$ 包含所有形如以下表达式的元素：

$$
\left\{ B^{q \times (p-q)}Y_2 : \quad \text{对于所有 } q \times (p-q) \text{ 的矩阵 } B \right\}.
$$

(a) 求 $Y_1$ 在 $\mathcal{U}$ 上的投影。
(b) 计算残差的范数：
$$
\|Y_1 - \Pi(Y_1|\mathcal{U})\|.
$$

:::

::: info 习题 3

设 $Z = (Z_1, Z_2)^T$ 是一个二元正态分布向量，其均值为零，协方差矩阵为 $\begin{pmatrix} \sigma_1^2 & \sigma_{12} \\ \sigma_{12} & \sigma_2^2 \end{pmatrix}$。

考虑由所有关于 $Z$ 的均值为零、方差有限且赋予协方差内积的一维可测函数构成的希尔伯特空间。令 $\mathcal{U}$ 表示由 $Z_2$ 和 $(Z_1^2 - \sigma_1^2)$ 张成的线性子空间；即，其元素形如以下表达式的空间：

$$
a_1(Z_1^2 - \sigma_1^2) + a_2Z_2 \quad \text{对于所有} \quad a_1, a_2.
$$

:::
