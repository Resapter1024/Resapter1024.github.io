---
title: 第三章习题
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-08-22
order: 6
# 禁止显示页脚
footer: false
---
::: info 习题 1

证明 3.2 节给出的 [Hodges 超有效估计量](/notes/semiparametric%20statistics/Chap3/Chap3_2.md#hodges-stats) $\hat\mu_n$ 不是正则估计量.

:::

::: details 证明

考虑局部数据生成过程（LDGP）：设真实参数为 $\mu_0 = 0$，定义局部参数序列为 $\mu_n = c n^{-1/2}$（其中 $c \neq 0$ 为任意固定非零常数），显然满足 $n^{1/2}(\mu_n - \mu_0) \to c$.

在局部扰动分布 $P_{\mu_n}$ 下，样本均值满足 $\bar{Z}_n \sim N(\mu_n, n^{-1})$，即 $n^{1/2}(\bar{Z}_n - \mu_n) \sim N(0, 1)$. 我们考察 Hodges 估计量落入截断区间的概率：
$$
\begin{aligned}
P_{\mu_n}\big(\hat\mu_n = 0\big) &= P_{\mu_n}\big(|\bar{Z}_n| \le n^{-1/4}\big) \\
&= P_{\mu_n}\big(n^{1/2}|\bar{Z}_n| \le n^{1/4}\big) \\
&= P\big(|n^{1/2}(\bar{Z}_n - \mu_n) + c| \le n^{1/4}\big) \\
&= P\big(-n^{1/4} - c \le W \le n^{1/4} - c\big) \to 1 \quad (n \to \infty)
\end{aligned}
$$
其中 $W \sim N(0, 1)$. 这表明在局部测度 $P_{\mu_n}$ 下，$\hat\mu_n$ 以趋于 1 的概率等于 0.

因此，估计量围绕局部真值 $\mu_n$ 缩放后的渐近表现为：
$$
n^{1/2}(\hat\mu_n - \mu_n) = n^{1/2}(0 - \mu_n) + o_{P_{\mu_n}}(1) = -c + o_{P_{\mu_n}}(1) \xrightarrow{P_{\mu_n}} -c
$$
即在 $P_{\mu_n}$ 下，$n^{1/2}(\hat\mu_n - \mu_n)$ 依分布收敛于退化分布 $\delta_{-c}$（常数 $-c$）.

由于该极限分布显式依赖于局部漂移常数 $c$（而在真值测度 $c=0$ 下其极限为 0），估计量的局部极限分布依赖于 LDGP 序列的选择. 根据正则估计量的定义，Hodges 估计量不是正则估计量. $\square$

:::

::: info 习题 2

设样本 $Z_1, \dots, Z_n \overset{\mathrm{i.i.d.}}{\sim} p(z; \beta, \eta)$，其中 $\beta \in \mathbb{R}^q$ 为感兴趣参数，$\eta \in \mathbb{R}^r$ 为干扰参数. 在标准的正则性条件下，整个参数 $\theta = (\beta^\top, \eta^\top)^\top$ 的极大似然估计量（MLE）满足得分方程 $\sum_{i=1}^n S_\theta(Z_i; \hat\beta_{\mathrm{MLE}}, \hat\eta_{\mathrm{MLE}}) = 0$，且具备相合性与渐近正态性.

1. 证明 $\hat\beta_{\mathrm{MLE}}$ 的影响函数恰好为有效影响函数 $\varphi_{\mathrm{eff}}(Z)$；
2. 证明：对任何 $n^{1/2}$ 相合的初始估计量 $\hat\eta$，求解有效得分方程 $\sum_{i=1}^n S_{\mathrm{eff}}(Z_i; \hat\beta, \hat\eta) = 0$ 得到的估计量 $\hat\beta$ 是渐近线性的，且其影响函数同样为有效影响函数 $\varphi_{\mathrm{eff}}(Z)$（从而 $\hat\eta$ 的选取不影响 $\hat\beta$ 的渐近有效性）.

:::

::: details 解

(1) 全参数 $\theta = (\beta^\top, \eta^\top)^\top$ 的 MLE 满足一阶估计方程 $\displaystyle\frac{1}{n}\sum_{i=1}^n S_\theta(Z_i; \hat\theta_{\mathrm{MLE}}) = 0$. 在真值 $\theta_0$ 处进行标准 Taylor 展开：
$$
0 = \frac{1}{\sqrt{n}}\sum_{i=1}^n S_\theta(Z_i; \theta_0) + \left[ \frac{1}{n}\sum_{i=1}^n \left.\frac{\partial S_\theta(Z_i;\theta)}{\partial \theta^\top}\right|_{\theta_0} \right] n^{1/2}(\hat\theta_{\mathrm{MLE}} - \theta_0) + o_P(1)
$$
由于大数定律给出 $-n^{-1}\sum_{i=1}^n \frac{\partial S_\theta}{\partial \theta^\top} \xrightarrow{P} I(\theta_0)$，故有：
$$
n^{1/2}(\hat\theta_{\mathrm{MLE}} - \theta_0) = \frac{1}{\sqrt{n}}\sum_{i=1}^n I^{-1}(\theta_0) S_\theta(Z_i; \theta_0) + o_P(1)
$$
提取对应于感兴趣参数 $\beta$ 的子块，其导数矩阵为 $\Gamma(\theta_0) = [I_{q \times q}, \; 0^{q \times r}]$，因此：
$$
n^{1/2}(\hat\beta_{\mathrm{MLE}} - \beta_0) = \frac{1}{\sqrt{n}}\sum_{i=1}^n \Gamma(\theta_0) I^{-1}(\theta_0) S_\theta(Z_i; \theta_0) + o_P(1)
$$
根据定理结论，有效影响函数的显式形式正是 $\varphi_{\mathrm{eff}}(Z) = \Gamma(\theta_0) I^{-1}(\theta_0) S_\theta(Z;\theta_0)$，因此 $\hat\beta_{\mathrm{MLE}}$ 的影响函数就是有效影响函数.

(2) 记经验有效得分函数为 $U_n(\beta, \eta) = \frac{1}{n}\sum_{i=1}^n S_{\mathrm{eff}}(Z_i; \beta, \eta)$，估计量 $\hat\beta$ 满足 $U_n(\hat\beta, \hat\eta) = 0$.

将 $U_n(\hat\beta, \hat\eta)$ 在真值 $(\beta_0, \eta_0)$ 处作二元 Taylor 展开：
$$
\begin{align*}
  0 & = U_n(\hat\beta, \hat\eta) \\ & = U_n(\beta_0, \eta_0) + \frac{\partial U_n(\beta_0, \eta_0)}{\partial \beta^\top}(\hat\beta - \beta_0) + \frac{\partial U_n(\beta_0, \eta_0)}{\partial \eta^\top}(\hat\eta - \eta_0) + o_P(n^{-1/2})
\end{align*}
$$
两端同乘 $n^{1/2}$，分别考察各偏导数矩阵在大样本下的极限：

首先，根据有效得分的构造，$S_{\mathrm{eff}} \perp S_\eta$，即 $E[S_{\mathrm{eff}} S_\eta^\top] = 0$. 交换求导与积分可得：
$$
  E\left[ \left.\frac{\partial S_{\mathrm{eff}}(Z;\beta,\eta)}{\partial \eta^\top}\right|_{(\beta_0,\eta_0)} \right] = -E\big[ S_{\mathrm{eff}}(Z;\theta_0) S_\eta^\top(Z;\theta_0) \big] = 0^{q \times r}
$$
由大数定律，$\frac{\partial U_n(\beta_0, \eta_0)}{\partial \eta^\top} \xrightarrow{P} 0$. 又因为 $\hat\eta$ 是 $n^{1/2}$ 相合的（即 $n^{1/2}(\hat\eta - \eta_0) = O_P(1)$），所以干扰项的漂移渐近可忽略：
$$
  \frac{\partial U_n(\beta_0, \eta_0)}{\partial \eta^\top} n^{1/2}(\hat\eta - \eta_0) = o_P(1) O_P(1) = o_P(1)
$$

类似地，由 $E[S_{\mathrm{eff}} S_\beta^\top] = E[S_{\mathrm{eff}} S_{\mathrm{eff}}^\top]$ 有：
$$
\begin{align*}
  \frac{\partial U_n(\beta_0, \eta_0)}{\partial \beta^\top} \xrightarrow{P} E\left[ \left.\frac{\partial S_{\mathrm{eff}}}{\partial \beta^\top}\right|_{\theta_0} \right] & = -E\big[ S_{\mathrm{eff}}(Z;\theta_0) S_\beta^\top(Z;\theta_0) \big] \\ & = -E\big[ S_{\mathrm{eff}}(Z;\theta_0) S_{\mathrm{eff}}^\top(Z;\theta_0) \big]
\end{align*}
$$

代回展开式解得：
$$
n^{1/2}(\hat\beta - \beta_0) = \frac{1}{\sqrt{n}}\sum_{i=1}^n \big\{E\big(S_{\mathrm{eff}} S_{\mathrm{eff}}^\top\big)\big\}^{-1} S_{\mathrm{eff}}(Z_i; \theta_0) + o_P(1)
$$
这证明了 $\hat\beta$ 是渐近线性的，且其影响函数恰为分块模型下的有效影响函数 $\varphi_{\mathrm{eff}}(Z) = \{E(S_{\mathrm{eff}} S_{\mathrm{eff}}^\top)\}^{-1} S_{\mathrm{eff}}(Z;\theta_0)$. $\square$

:::

::: info 习题 3

设 $Y_1, \dots, Y_n \overset{\mathrm{i.i.d.}}{\sim} F(y)$，其中分布函数 $F(y)$ 处处可导，对应概率密度函数为 $f(y)$ 且 $f(\theta_0) > 0$. 总体中位数定义为 $\theta_0 = F^{-1}(1/2)$，样本中位数 $\hat\theta_n = \hat F_n^{-1}(1/2)$ 等价于近似求解估计方程 $\sum_{i=1}^n \{I(Y_i \le \hat\theta_n) - 1/2\} \approx 0$.

1. 求样本中位数 $\hat\theta_n$ 的影响函数 $\varphi(Y)$；
2. 设总体服从正态分布 $Y_1, \dots, Y_n \overset{\mathrm{i.i.d.}}{\sim} N(\mu, \sigma^2)$（感兴趣参数为中位数 $\mu$，干扰参数为方差 $\sigma^2$），直接验证该影响函数满足推论 3.1 的两个正则性条件.

:::

::: details 解

(1) 样本中位数可视为由估计方程函数 $m(Y, \theta) = I(Y \le \theta) - 1/2$ 定义的 Z-估计量. 其总体期望函数为：
$$
M(\theta) = E[m(Y, \theta)] = P(Y \le \theta) - \frac{1}{2} = F(\theta) - \frac{1}{2}
$$
在真值 $\theta_0$ 处满足 $M(\theta_0) = 0$，且 $M(\theta)$ 关于 $\theta$ 可微，导数为：
$$
\dot M(\theta_0) = \left.\frac{\mathrm{d} F(\theta)}{\mathrm{d} \theta}\right|_{\theta=\theta_0} = f(\theta_0)
$$
根据 Z-估计量渐近线性的一般理论，估计量的影响函数由 $\varphi(Y) = -[\dot M(\theta_0)]^{-1} m(Y, \theta_0)$ 给出，因此：
$$
\varphi(Y) = -\frac{I(Y \le \theta_0) - 1/2}{f(\theta_0)} = \frac{1/2 - I(Y \le \theta_0)}{f(\theta_0)}
$$

(2) 对于正态总体，真值中位数 $\theta_0 = \mu$，密度在均值处的值为 $f(\mu) = \frac{1}{\sqrt{2\pi\sigma^2}}$. 影响函数具体为：
$$
\varphi(Y) = \sqrt{2\pi\sigma^2}\left[ \frac{1}{2} - I(Y \le \mu) \right]
$$
正态分布关于均值 $\mu$ 和方差 $\sigma^2$ 的得分函数分别为：
$$
S_\mu(Y) = \frac{Y - \mu}{\sigma^2}, \qquad S_{\sigma^2}(Y) = -\frac{1}{2\sigma^2} + \frac{(Y-\mu)^2}{2\sigma^4} = \frac{(Y-\mu)^2 - \sigma^2}{2\sigma^4}
$$

先验证条件 (i)：$E[\varphi(Y) S_\mu(Y)] = 1$
$$
\begin{align*}
  \quad & E\big[\varphi(Y) S_\mu(Y)\big] \\ = & \sqrt{2\pi\sigma^2} \int_{-\infty}^\infty \left[ \frac{1}{2} - I(y \le \mu) \right] \left( \frac{y - \mu}{\sigma^2} \right) \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(y-\mu)^2}{2\sigma^2} \right) \mathrm{d}y
\end{align*}
$$
令标准正态变量 $u = (y-\mu)/\sigma$，则 $\mathrm{d}y = \sigma \mathrm{d}u$：
$$
\begin{align*}
  E\big[\varphi(Y) S_\mu(Y)\big] & = \int_{-\infty}^\infty \left[ \frac{1}{2} - I(u \le 0) \right] \frac{u}{\sigma} \frac{1}{\sqrt{2\pi}} e^{-u^2/2} (\sigma \mathrm{d}u) \\ & = \int_{-\infty}^\infty \left[ \frac{1}{2} - I(u \le 0) \right] u \frac{1}{\sqrt{2\pi}} e^{-u^2/2} \mathrm{d}u
\end{align*}
$$
由于被积函数是关于原点的偶函数，分段积分可得：
$$
\begin{align*}
  E\big[\varphi(Y) S_\mu(Y)\big] & = 2 \int_0^\infty \left(\frac{1}{2}\right) u \frac{1}{\sqrt{2\pi}} e^{-u^2/2} \mathrm{d}u \\ & = \frac{1}{\sqrt{2\pi}} \int_0^\infty u e^{-u^2/2} \mathrm{d}u \\ & = \frac{1}{\sqrt{2\pi}} \cdot 1 \times \sqrt{2\pi} = 1
\end{align*}
$$
即满足 $E[\varphi(Y) S_\mu(Y)] = I_{1 \times 1}$.

再验证条件 (ii)：$E[\varphi(Y) S_{\sigma^2}(Y)] = 0$. 观察各函数的对称性：影响函数 $\varphi(Y) \propto \left[ \frac{1}{2} - I(Y \le \mu) \right]$ 关于 $Y = \mu$ 为奇函数；方差得分函数 $S_{\sigma^2}(Y) \propto (Y-\mu)^2 - \sigma^2$ 以及正态密度函数 $p(Y;\mu,\sigma^2)$ 关于 $Y = \mu$ 为偶函数.

因此，被积函数 $\varphi(Y) S_{\sigma^2}(Y) p(Y)$ 关于对称中心 $\mu$ 是奇函数，在对称区间 $(-\infty, \infty)$ 上的全积分恒为零：
$$
E\big[\varphi(Y) S_{\sigma^2}(Y)\big] = \int_{-\infty}^\infty \varphi(y) S_{\sigma^2}(y) p(y) \mathrm{d}y = 0
$$

至此，推论 3.1 的两个条件全部得到严格验证. $\square$
