---
title: m-统计量
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-04-19
order: 3
# 禁止显示页脚
footer: false
---

## 定义

$m$-统计量中的 $m$ 始终被认为是“极大化”（maximum）的意思，即是通过求解某个最优化问题得到的统计量。极大似然估计（MLE）就是一个经典的 MLE 统计量，我们通过介绍它来引入 $m$-统计量的一个更具普适性和应用价值的定义。

设数据 $Z_1,\ldots,Z_n$ 独立同分布，单次观测 $Z\sim p(z;\theta)$，我们得到似然函数为 $n$ 次观测密度的乘积
$$
L(\theta)=\prod_{i=1}^n p(z_i;\theta)
$$
实际我们往往利用对数函数的单调性，定义对数似然函数为
$$
\ell(\theta)=\ln L(\theta)=\sum_{i=1}^n \ln p(z_i;\theta)
$$
MLE 定义为使得（对数）似然函数最大的 $\theta$ 的值，即
$$
\hat{\theta}:=\arg\max_{\theta\in\Theta} \ell(\theta)
$$

在实践中，我们往往假设密度 $p(z;\theta)$ 可导，那么在似然函数极大值处的导数应为 $0$（事实上，正是为了方便求导才引入了对数似然函数）。即 $\hat{\theta}$ 应是下面方程的根：
$$
\sum_{i=1}^n S_\theta(z_i;\theta)=0
$$
其中 $S_\theta(z_i;\theta) = \dfrac{\partial \ln p(z_i;\theta)}{\partial \theta}$ 是此前定义的得分函数。

由此，我们给出 $m$-估计量的定义。

::: info $m$-估计量

考虑一个关于数据 $Z$ 和参数 $\theta$ 的函数 $p\times 1$ 维函数 $m(Z,\theta)$，满足
$$
\begin{matrix}
  E_\theta(m(Z,\theta))=0^{p\times 1}, \\
  E_\theta(m^\top(Z,\theta)m(Z,\theta))<\infty,
\end{matrix}
$$
且 $E_\theta(m(Z,\theta)m^\top(Z,\theta))$ 正定。其他正则化条件会在需要的时候再给出。

设 $Z_1,\ldots,Z_n\overset{\mathrm{i.i.d}}{\sim} p(z;\theta)$，$\theta\in\Omega\subset\mathbb{R}^p$。$m$-统计量 $\hat{\theta}_n$ 定义为以下方程的解（假设解存在）：
$$
\sum_{i=1}^n m(Z_i,\theta)=0
$$

:::

## m-估计量的性质

### 一致性与渐近正态性

下面我们来说明 $m$-估计量在一定条件下是一致且渐近正态的。为此我们需要假设一些正则性条件。

::: tip 一些条件

1. 设 $m(Z;\theta)$ 满足其在真实值 $\theta$ 处的期望为 $0$，即 $E(m(Z;\theta_0))=0$。
2. 其关于 $\theta$ 的偏导数矩阵 $E\left(\dfrac{\partial m(Z;\theta)}{\partial \theta^\top}\right)$ 非奇异，且在 $\theta_0$ 的某个邻域 $\mathcal{N}(\theta_0)$ 内，样本偏导数矩阵一致收敛到总体，即
    $$
    \sup_{\theta\in\mathcal{N}(\theta_0)} \left|n^{-1}\sum_{i=1}^n \frac{\partial m(Z_i;\theta)}{\partial \theta^\top} - E\left(\dfrac{\partial m(Z;\theta)}{\partial \theta^\top}\right)\right|\overset{P}{\to}0
    $$

:::

对于一致收敛性，很多时候较难验证。在证明中往往假设一个更强的条件：设 $\dfrac{\partial m(Z;\theta)}{\partial \theta^\top}$ 关于 $\theta$ 在 $\mathcal{N}(\theta_0)$ 上几乎处处连续，且存在 $g(Z)>0$ 使得
$$
\sup_{\theta\in\mathcal{N}(\theta_0)}\left|\dfrac{\partial m(Z;\theta)}{\partial \theta^\top}\right|<g(Z), \quad E(g(Z))<+\infty,
$$
这一组条件是一致收敛的充分条件。

::: info 一致性

在上述正则性假设成立时，设 $\hat{\theta}_n$ 是方程
$$
\sum_{i=1}^n m(Z_i,\theta)=0
$$
的解，则 $\hat{\theta}_n\overset{P}{\to}\theta_0$。

::: details 证明

为方便起见，记 $M(\theta)=E(m(Z,\theta)), \hat{M}_n(\theta)=\displaystyle\sum_{i=1}^n m(Z_i,\theta)$，同时设偏导数矩阵为 $J(Z,\theta)=\dfrac{\partial m(Z;\theta)}{\partial \theta^\top}$，其期望为 $\Gamma = E(J(Z,\theta))$。

考虑一个向量函数 $F_n(\theta)$，定义为：
$$
F_n(\theta) = \theta - \Gamma^{-1} \hat{M}_n(\theta)
$$

接下来，我们要在以 $\theta_0$ 为圆心、半径为 $\epsilon$ 的闭球 $B_\epsilon(\theta_0)$ 内研究这个 $F_n(\theta)$。

对于任意 $\theta \in B_\epsilon(\theta_0)$，我们对 $\hat{M}_n(\theta)$ 在 $\theta_0$ 处进行一阶泰勒展开：
$$
\hat{M}_n(\theta) = \hat{M}_n(\theta_0) + \hat{J}_n(\theta^*) (\theta - \theta_0)
$$
其中 $\hat{J}_n(\theta^*) = \displaystyle\frac{1}{n}\sum_{i=1}^n J(Z_i, \theta^*)$，且 $\theta^*$ 在 $\theta$ 和 $\theta_0$ 之间。

把这个泰勒展开代入 $F_n(\theta)$ 中，我们计算 $F_n(\theta)$ 距离中心 $\theta_0$ 有多远：
$$
\begin{align*}
F_n(\theta) - \theta_0 &= (\theta - \theta_0) - \Gamma^{-1} \left[ \hat{M}_n(\theta_0) + \hat{J}_n(\theta^*) (\theta - \theta_0) \right] \\
&= - \Gamma^{-1} \hat{M}_n(\theta_0) + (\theta - \theta_0) - \Gamma^{-1} \hat{J}_n(\theta^*) (\theta - \theta_0) \\
&= - \Gamma^{-1} \hat{M}_n(\theta_0) + \left[ I - \Gamma^{-1} \hat{J}_n(\theta^*) \right] (\theta - \theta_0)
\end{align*}
$$
由于 $I = \Gamma^{-1}\Gamma$，所以方括号里可以写成 $\Gamma^{-1}[\Gamma - \hat{J}_n(\theta^*)]$。

现在我们对两边取范数，并利用三角不等式：
$$
\|F_n(\theta) - \theta_0\| \le \|\Gamma^{-1}\| \cdot \|\hat{M}_n(\theta_0)\| + \|\Gamma^{-1}\| \cdot \|\Gamma - \hat{J}_n(\theta^*)\| \cdot \|\theta - \theta_0\|.
$$

因为 $\theta \in B_\epsilon(\theta_0)$，所以 $\|\theta - \theta_0\| \le \epsilon$。

考察 $\|\Gamma - \hat{J}_n(\theta^*)\|$。我们可以把它拆成两部分：
$$
\|\Gamma - \hat{J}_n(\theta^*)\| \le \|\Gamma - E[J(Z, \theta^*)]\| + \|E[J(Z, \theta^*)] - \hat{J}_n(\theta^*)\|,
$$
因为 $E(J(Z,\theta))$ 在 $\mathcal{N}(\theta_0)$ 上几乎处处连续，从而只要 $\epsilon$ 取得很小，第一项可以任意小。又由一致收敛性，当 $n$ 足够大时，以趋近于 1 的概率，第二项可以任意小。因此当 $n$ 很大时，以极高的概率，有
$\|\Gamma - \hat{J}_n(\theta^*)\| \le \dfrac{1}{2\|\Gamma^{-1}\|}$，代回原式，第二项被控制在：
$$
\|\Gamma^{-1}\| \cdot \dfrac{1}{2\|\Gamma^{-1}\|} \cdot \epsilon = \dfrac{\epsilon}{2}.
$$

考察 $\|\Gamma^{-1}\| \cdot \|\hat{M}_n(\theta_0)\|$。根据条件 1，我们知道在真值处 $\hat{M}_n(\theta_0) \xrightarrow{P} 0$。

因此，当 $n$ 足够大时，以极高的概率，我们可以使得 $\|\hat{M}_n(\theta_0)\| \le \dfrac{\epsilon}{2\|\Gamma^{-1}\|}$。代回原式，第一项被控制在：
$$
\|\Gamma^{-1}\| \cdot \dfrac{\epsilon}{2\|\Gamma^{-1}\|} = \dfrac{\epsilon}{2}.
$$

因此，对于任意一个在闭球 $B_\epsilon(\theta_0)$ 里的 $\theta$，当样本量 $n$ 足够大时，以趋近于 1 的概率，有：
$$
\|F_n(\theta) - \theta_0\| \le \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon
$$

根据 Brouwer 不动点定理，任何将紧凸集映射到其自身的连续函数，必至少存在一个不动点。因此，在这个半径为 $\epsilon$ 的闭球内，存在一个点 $\hat{\theta}_n$ 满足 $F_n(\hat{\theta}_n) = \hat{\theta}_n$ 的概率趋于 $1$。此时由 $F_n$ 的定义得知 $\hat{M}_n(\hat{\theta}_n) = 0$。

我们定义估计量序列 $\hat{\theta}_n$：如果在 $B_\epsilon(\theta_0)$ 内有根，我们就取其中一个作为 $\hat{\theta}_n$；如果没有根，我们就随便给它赋一个值。
由前分析立刻得到
$$
\lim_{n \to \infty} P(\|\hat{\theta}_n - \theta_0\| \le \epsilon) = 1
$$

:::

下面我们来推导 $\hat{\theta}_n$ 的影响函数。对 $m(Z,\theta)$ 在 $\theta_0$ 处作一阶 Taylor 展开
$$
0=\sum_{i=1}^n m(Z_i,\theta)=\sum_{i=1}^n m(Z_i,\theta_0)+\left(\sum_{i=1}^n \frac{\partial m(Z_i,\theta^*)}{\partial \theta^\top}\right)(\hat{\theta}_n-\theta_0)
$$
由于 $\hat{\theta}_n\overset{P}{\to}\theta_0$，有
$$
n^{-1}\sum_{i=1}^n \frac{\partial m(Z_i,\theta^*)}{\partial \theta^\top} \overset{P}{\to} E\left(\frac{\partial m(Z,\theta_0)}{\partial \theta^\top}\right)
$$
又由于偏导数矩阵非奇异，得到
$$
\left\{n^{-1}\sum_{i=1}^n \frac{\partial m(Z_i,\theta^*)}{\partial \theta^\top}\right\}^{-1} \overset{P}{\to} \left[E\left(\frac{\partial m(Z,\theta_0)}{\partial \theta^\top}\right)\right]^{-1}
$$
从而解上述方程，得到
$$
n^{1/2}(\hat{\theta}_n-\theta_0)=-\left[E\left(\frac{\partial m(Z,\theta_0)}{\partial \theta^\top}\right)\right]^{-1}\left\{n^{-1/2}\sum_{i=1}^n m(Z_i,\theta_0)\right\}+o_P(1)
$$
由于 $E(m(Z,\theta_0))=0$，这个形式立刻推得 $m$-估计量的影响函数为
$$
\varphi(Z_i,\theta)=-\left[E\left(\frac{\partial m(Z,\theta_0)}{\partial \theta^\top}\right)\right]^{-1}m(Z_i,\theta_0)
$$
且 $\hat{\theta}_n$ 满足渐近正态性，即

::: info 渐近正态性

在上述正则性假设成立时，$m$-估计量 $\hat{\theta}_n$ 满足渐近正态性
$$
n^{1/2}(\hat{\theta}_n-\theta_0)\overset{\mathcal{D}}{\to} N\left(0, \left[E\left(\frac{\partial m(Z,\theta_0)}{\partial \theta^\top}\right)\right]^{-1} \mathrm{var}(m(Z,\theta_0))\left[E\left(\frac{\partial m(Z,\theta_0)}{\partial \theta^\top}\right)\right]^{-1}\right)
$$
其中 $\mathrm{var}(m(Z,\theta_0)) = E(m(Z,\theta_0)m(Z,\theta_0)^\top)$。

:::

### 渐近方差

一致性和渐近正态性考察的是 $m$-估计量的点估计性质。为了进行区间估计和统计推断，我们还需要计算，从而通过样本方差替代未知的总体方差来得到置信区间。

一般而言，我们直接将总体期望和方差替换为样本期望和方差，并将参数真值替换为点估计，得到 $m$-估计量的渐近方差为
$$
\hat{\sigma}^2_n = \left[\hat{E}\left(\frac{\partial m(Z,\hat{\theta}_n)}{\partial \theta^\top}\right)\right]^{-1} \hat{\mathrm{var}}(m(Z,\hat{\theta}_n))\left[E\left(\frac{\partial m(Z,\hat{\theta}_n)}{\partial \theta^\top}\right)\right]^{-1}
$$
其中
$$
\hat{E}\left(\frac{\partial m(Z,\hat{\theta}_n)}{\partial \theta^\top}\right) = \frac{1}{n}\sum_{i=1}^n \frac{\partial m(Z_i,\hat{\theta}_n)}{\partial \theta^\top}
$$
$$
\hat{\mathrm{var}}(m(Z,\hat{\theta}_n)) = \frac{1}{n-1}\sum_{i=1}^n m(Z_i,\hat{\theta}_n)m^\top(Z_i,\hat{\theta}_n)
$$

然而，用样本方差替代总体方差不总是合法的，我们此时还需要证明渐近方差的一致性，即
$$
\hat{\sigma}^2_n = \sigma^2 + o_P(1)
$$

事实上，我们有如下的定理

::: info $m$-估计量渐近方差的一致性

设 $Z_1, Z_2, \dots, Z_n$ 为独立同分布 (i.i.d.) 的随机向量。设 $\hat{\theta}_n$ 为 $m$-估计量，即满足估计方程 $\frac{1}{n}\sum_{i=1}^n m(Z_i, \hat{\theta}_n) = 0$ 的解。记真实的参数值为 $\theta_0$。假设在真实参数 $\theta_0$ 的某个紧邻域 $\mathcal{N}(\theta_0)$ 内，以下条件成立：

1. 矩阵 $\Gamma(\theta_0)=E(J(Z,\theta_0))$ 存在且非奇异。
2. 函数 $\dfrac{\partial m(Z, \theta)}{\partial \theta^T}$ 和矩阵函数 $m(Z, \theta)m^T(Z, \theta)$ 关于 $\theta$ 在 $\mathcal{N}(\theta_0)$ 上以概率 1 连续。
3. 存在可积的 $d_1(Z)$ 和 $d_2(Z)$，使得对所有 $\theta \in \mathcal{N}(\theta_0)$，有 (1) $\left\| \dfrac{\partial m(Z, \theta)}{\partial \theta^T} \right\| \le d_1(Z)$，且 $E[d_1(Z)] < \infty$；(2) $\left\| m(Z, \theta)m^T(Z, \theta) \right\| \le d_2(Z)$，且 $E[d_2(Z)] < \infty$。

则基于样本构造的方差估计量 $\hat{\sigma}^2_n$ 依概率收敛于真实的渐近方差 $\sigma^2$。即：
$$ \hat{\sigma}^2_n \xrightarrow{P} \sigma^2 $$

:::

该定理的证明细节略去，思路主要是分别证明样本期望和样本方差分别依概率收敛到总体期望和总体方差，再用连续映射定理得到结果。

特别地，对于 MLE，我们推导它的渐近方差。MLE 满足方程
$$
\sum_{i=1}^n S_\theta(Z_i,\theta)=0
$$
其 $m(Z,\theta)=S_\theta(Z_i,\theta)$，从而
$$
-E\left(\frac{\partial m(Z,\theta)}{\partial \theta^\top}\right) = -E\left(\frac{\partial^2\ln p_Z(Z,\theta)}{\partial \theta\partial\theta^\top}\right) = I(\theta)
$$
为 $\theta$ 的 Fisher 信息矩阵。另一方面，我们也有
$$
E(m(Z,\theta)m^\top(Z,\theta))=E\left(\frac{\partial\ln p_Z(Z,\theta)}{\partial\theta^\top}\right)\left(\frac{\partial\ln p_Z(Z,\theta)}{\partial\theta^\top}\right)^\top = I(\theta)
$$
因此 MLE 满足
$$
\sqrt{n}(\hat{\theta}_n-\theta_0)\overset{\mathcal{D}}{\sim} N(0,I^{-1}(\theta_0))
$$
即其渐近方差为 Fisher 信息矩阵的逆，这是数理统计的一个经典结论。

### 影响函数的正交性

和之前一样，我们考虑 $\theta=(\beta^\top, \eta^\top)^\top$，前者为我们感兴趣的参数，后者为干扰参数。下面我们来证明，对 $m$-估计量 $\hat{\theta}_n$ 而言，在适当的条件下，[该推论](/src/notes/semiparametric%20statistics/Chap3/Chap3_2.md#corollary1)也成立，即
$$
\begin{matrix}
  E(\varphi(Z)S^\top_\beta(z;\theta_0))=I^{q\times q} \\
  E(\varphi(Z)S^\top_\eta(z;\theta_0))=0^{q\times r}
\end{matrix}
$$

我们有 $E_\theta(m(Z,\theta))=0^{p\times 1}$，即
$$
\int m(z,\theta)p(z,\theta)\mathrm{d}\theta=0,\quad \forall \theta
$$
对两侧关于 $\theta$ 求导，这里假设一定的条件使得求导和积分可交换顺序，从而
$$
\int \frac{\partial m(z,\theta)}{\partial\theta^\top}p(z,\theta)\mathrm{d}\theta +\int \frac{\partial p(z,\theta)}{\partial\theta^\top}m(z,\theta)\mathrm{d}\theta =0
$$
这里作一个代换
$$
\frac{\partial p(z,\theta)}{\partial\theta^\top} = \frac{\partial p(z,\theta)}{\partial\theta^\top}\cdot\frac{1}{p(z,\theta)}\cdot p(z,\theta) = \frac{\partial \ln p(z,\theta)}{\partial\theta^\top} p(z,\theta)
$$
代入得到
$$
E\left(\frac{\partial m(z,\theta)}{\partial\theta^\top}\right) + E(m(z,\theta)S_\theta^\top(z,\theta))=0
$$
在真实参数 $\theta=\theta_0$ 处，得到
$$
E\left(\frac{\partial m(z,\theta_0)}{\partial\theta^\top}\right) = - E(m(z,\theta_0)S_\theta^\top(z,\theta_0))
$$
假设等号左边可逆，从而
$$
\begin{align*}
  I^{p\times p} & = -\left[E\left(\frac{\partial m(z,\theta_0)}{\partial\theta^\top}\right)\right]^{-1} E(m(z,\theta_0)S_\theta^\top(z,\theta_0)) \\
  & = E\left[\left[E\left(\frac{\partial m(z,\theta_0)}{\partial\theta^\top}\right)\right]^{-1}m(z,\theta_0) S_\theta^\top(z,\theta_0)\right] \\
  & = E\left[\varphi_{\hat{\theta}_n}(z,\theta_0) S_\theta^\top(z,\theta_0))\right]
\end{align*}
$$
将上面的等式写成分块矩阵的形式，如下所示
$$
\left[\begin{matrix}
  I^{q\times q} & 0^{q\times r} \\
  0^{q\times r} & I^{r\times r}
\end{matrix}\right] = E\left[\begin{matrix}
  \varphi_{\hat{\beta}_n}(z,\theta_0) S_\beta^\top(z,\theta_0)) & \varphi_{\hat{\beta}_n}(z,\theta_0) S_\eta^\top(z,\theta_0)) \\
  \varphi_{\hat{\eta}_n}(z,\theta_0) S_\theta^\top(z,\beta_0)) & \varphi_{\hat{\eta}_n}(z,\theta_0) S_\eta^\top(z,\theta_0))
\end{matrix}\right]
$$
这直接导出了上面的结论。

这个结论虽然不能判定 $m$-估计量是 RAL，但其影响函数也具备“感兴趣参数的影响函数同干扰函数的得分函数正交”这一性质，这意味着，后面我们研究的所有具有这一性质的估计量的性质也可以用在 $m$-估计量上。
