---
title: 第二章习题
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-04-13
order: 3
# 禁止显示页脚
footer: false
---

::: info 习题 1

证明 Hillbert 空间的投影定理。

:::

::: details 证明

先说明存在性。如果 $h\in\mathcal{U}$，直接取 $u_0=h$ 即可。

下面考虑 $h\notin\mathcal{U}$，我们取
$$
\delta = \inf_{u\in\mathcal{U}}\|h-u\|,
$$
从而存在收敛于 $\delta$ 的实数列 $\{\|h-u_k\|\}_{k=1}^\infty$。由平行四边形法则，得到
$$
\|(u_m-h)+(h-u_n)\|^2+\|(u_m-h)-(h-u_n)\|^2=2\|h-u_m\|^2+2\|h-u_n\|^2
$$
由于 $\|(u_m+u_n)/2-h\|\ge \delta$ 得到
$$
\|u_m-u_n\|^2 \le 2\|h-u_m\|^2+2\|h-u_n\|^2 - 4\delta^2
$$
再令右式的 $m,n$ 趋于正无穷，得到
$$
0 \le \|u_m-u_n\|^2 \le 0
$$
进而 $\{u_k\}_{k=1}^\infty$ 也是 Cauchy 列，由于 $\mathcal{U}$ 是闭集，其极限存在且属于 $\mathcal{U}$，从而说明了存在性。

再说明几何关系。若存在 $u^*\in\mathcal{U}$ 使得 $\langle h-u_0,u^*\rangle \neq 0$，我们考虑
$$
\|h-u_0-\alpha u^*\|^2=\|h-u_0\|^2+\alpha^2\|u^*\|^2-2\alpha\langle h-u_0,u^*\rangle
$$
此时令 $\alpha=\dfrac{\langle h-u_0,u^*\rangle}{\|u^*\|^2}$，此时右式取到最小值
$$
\|h-u_0-\alpha u^*\|^2 = \|h-u_0\|^2 - \langle h-u_0,u^*\rangle^2\le \|h-u_0\|^2
$$
矛盾！进而一定有 $\forall u\in\mathcal{U},\langle h-u_0,u\rangle=0$，即 $h-u_0$ 与 $\mathcal{U}$ 正交。

最后证唯一性。如果存在 $u_1,u_2$ 使得 $\|h-u_i\|\le \|h-u\|, i=1,2$，则一定有 $\|h-u_1\|=\|h-u_2\|$，进而
$$
\begin{align*}
  \|h-u_1\|^2 & = \|h-u_2+u_2-u_1\|^2 \\
  & = \|h-u_2\|^2 + \|u_2-u_1\|^2 \\
\end{align*}
$$
从而 $\|u_2-u_1\|=0$，由正定性得到 $u_1=u_2$，唯一性得证。

:::

::: info 习题 2

设 $Z = (Z_1, \dots, Z_p)^T$ 是一个 $p$ 维多元正态分布随机向量，其均值为零，协方差矩阵为 $\Sigma^{p \times p}$。我们也将 $Z$ 写成分块向量的形式 $Z = (Y_1^T, Y_2^T)^T$，其中 $Y_1^{q \times 1} = (Z_1, \dots, Z_q)^T$ 且 $Y_2^{(p-q) \times 1} = (Z_{q+1}, \dots, Z_p)^T$，$q < p$，并且

$$
\Sigma = \begin{pmatrix} \Sigma_{11}^{q \times q} & \Sigma_{12}^{q \times (p-q)} \\ \Sigma_{21}^{(p-q) \times q} & \Sigma_{22}^{(p-q) \times (p-q)} \end{pmatrix}, \text{其中}
$$

$$
\Sigma_{11} = E(Y_1 Y_1^T), \quad \Sigma_{12} = E(Y_1 Y_2^T), \quad \Sigma_{21} = E(Y_2 Y_1^T), \quad \Sigma_{22} = E(Y_2 Y_2^T).
$$

设 $\mathcal{H}$ 为所有关于 $Z$ 的均值为零、方差有限的 $q$ 维可测函数构成的 Hillbert 空间，并赋予协方差内积。设 $\mathcal{U}$ 为由 $Y_2$ 张成的线性子空间；即，$\mathcal{U}$ 包含所有形如以下表达式的元素：

$$
\left\{ B^{q \times (p-q)}Y_2 : \quad \text{对于所有 } q \times (p-q) \text{ 的矩阵 } B \right\}.
$$

(a) 求 $Y_1$ 在 $\mathcal{U}$ 上的投影。
(b) 计算残差的范数：
$$
\|Y_1 - \Pi(Y_1|\mathcal{U})\|.
$$

:::

::: details 解

由[这一示例](/notes/semiparametric%20statistics/Chap2/Chap2.md#q-维随机函数)得到的公式，我们有投影为
$$
\Pi(Y_1\mid\mathcal{U})=E(Y_1Y_2^\top)[E(Y_2Y_2^\top)]^{-1}Y_2 = \Sigma_{12}\Sigma_{22}^{-1}Y_2
$$

进而投影残差的范数为
$$
\begin{align*}
  \|Y_1-\Pi(Y_1\mid\mathcal{U})\| & = \|E(Y_1Y_1^\top)-E(Y_1Y_2^\top)[E(Y_2Y_2^\top)]^{-1}E(Y_2Y_1^\top)\|\\
  &=\mathrm{tr}(\Sigma_{11}-\Sigma_{12}\Sigma_{22}^{-1}\Sigma_{21})
\end{align*}

$$

:::

::: info 习题 3

设 $Z = (Z_1, Z_2)^T$ 是一个二元正态分布向量，其均值为零，协方差矩阵为 $\begin{pmatrix} \sigma_1^2 & \sigma_{12} \\ \sigma_{12} & \sigma_2^2 \end{pmatrix}$。

考虑由所有关于 $Z$ 的均值为零、方差有限且赋予协方差内积的一维可测函数构成的 Hillbert 空间。令 $\mathcal{U}$ 表示由 $Z_2$ 和 $(Z_1^2 - \sigma_1^2)$ 张成的线性子空间；即，其元素形如以下表达式的空间：

$$
a_1(Z_1^2 - \sigma_1^2) + a_2Z_2 \quad \text{对于所有} \quad a_1, a_2.
$$

(a) 求 $Z_1$ 在 $\mathcal{U}$ 上的投影。
(b) 计算残差的范数：
$$
\|Z_1 - \Pi(Z_1|\mathcal{U})\|.
$$

:::

::: details 解

设投影 $\Pi(Z_1|\mathcal{U})=b_1(Z_1^2 - \sigma_1^2) + b_2Z_2$，由投影的性质得到投影残差与投影所在空间 $\mathcal{U}$ 正交，特别地，应和 $\mathcal{U}$ 的基正交，从而有
$$
\begin{align*}
  \langle Z_1 - b_1(Z_1^2 - \sigma_1^2) - b_2Z_2, Z_1^2 - \sigma_1^2 \rangle&=0 \\
  \langle Z_1 - b_1(Z_1^2 - \sigma_1^2) - b_2Z_2, Z_2 \rangle&=0
\end{align*}
$$
对于前者，根据内积的线性性质得到
$$
\begin{align*}
  \langle Z_1 - b_1(Z_1^2 - \sigma_1^2) - b_2Z_2, Z_1^2 - \sigma_1^2 \rangle & = \langle Z_1, Z_1^2 - \sigma^2 \rangle - b_1 \langle Z_1^2 - \sigma_1^2, Z_1^2 - \sigma_1^2 \rangle \\ & \quad - b_2 \langle Z_2, Z_1^2 - \sigma_1^2 \rangle \\
  & = 0 - 2b_1\sigma_1^4 - b_2\cdot 0 = 0
\end{align*}
$$
解得 $b_1 = 0$。再看后者，同样由内积的线性性质得到
$$
\begin{align*}
  \langle Z_1 - b_1(Z_1^2 - \sigma_1^2) - b_2Z_2, Z_2 \rangle = \sigma_{12}-b_2\sigma_2^2
\end{align*}
$$
解得 $b_2=\dfrac{\sigma_{12}}{\sigma_2^2}$。从而投影的表达式为
$$
\Pi(Z_1|\mathcal{U})=\dfrac{\sigma_{12}}{\sigma_2^2}Z_2
$$

再计算投影残差的范数。有
$$
\begin{align*}
  \|Z_1-\Pi(Z_1|\mathcal{U})\|^2 & = E\left(Z_1-\frac{\sigma_{12}}{\sigma_2^2}Z_2\right)^2 \\
  & = \sigma_1^{2}+\frac{\sigma_{12}^2}{\sigma_2^2}-2\frac{\sigma_{12}^2}{\sigma_{2}^2} \\
  & = \frac{\sigma_1^{2}\sigma_2^2-\sigma_{12}^2}{\sigma_2^2}
\end{align*}
$$
从而
$$
\|Z_1-\Pi(Z_1|\mathcal{U})\| = \frac{\sqrt{\sigma_1^{2}\sigma_2^2-\sigma_{12}^2}}{\sigma_2}
$$

若额外引入相关系数 $\rho = \dfrac{\sigma_{12}}{\sigma_1\sigma_2}$，则上述结果可化简为 $\sigma_1\sqrt{1-\rho^2}$，这是一个经典的结果。

:::
