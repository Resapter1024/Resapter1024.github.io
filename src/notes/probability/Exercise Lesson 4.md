---
title: 概率论第八次习题课
author: 林尚仪
date: 2025-12-26
# 禁止显示页脚
footer: false
---

## 习题解答

### 12.15

::: info （课本 5.11）

设 $\{X_k\}$ 是独立随机变量序列，且 $X_k$ 服从 $N(0,2^{-k})$，试证明序列：

1. 中心极限定理成立；
2. 不满足费勒条件；
3. 不满足林德伯格条件.

:::

【解】

1. 记 $S_n = \sum_{k=1}^n X_k$，其方差为 $B_n^2 = \text{Var}(S_n)$. 由于 $\{X_k\}$ 相互独立，且 $X_k \sim N(0, 2^{-k})$，则
    $$
    B_n^2 = \sum_{k=1}^n \text{Var}(X_k) = \sum_{k=1}^n \frac{1}{2^k} = \frac{\dfrac{1}{2}(1 - \dfrac{1}{2^n})}{1 - \dfrac{1}{2}} = 1 - \frac{1}{2^n}
    $$
    当 $n \to \infty$ 时，$B_n^2 \to 1$. 由于独立正态变量之和仍服从正态分布，故 $S_n \sim N(0, B_n^2)$. 进而其标准化变量
    $$
    Z_n = \dfrac{S_n}{B_n}\sim N(0, 1)
    $$
    因此，对于任意 $x$，其分布函数 $F_n(x) = P(\frac{S_n}{B_n} \le x) = \Phi(x)$ 显然收敛于标准正态分布函数 $\Phi(x)$. 故中心极限定理成立.
2. Feller 条件要求
    $$
    \lim_{n\to\infty}\frac{1}{B_n^2} \max_{1\le k\le n} \sigma_k^2 = 0
    $$
    本题中 $\sigma_k^2 = 2^{-k}$ 单调递减，故
    $$
    \max_{1 \le k \le n} \sigma_k^2 = \sigma_1^2 = \frac{1}{2}
    $$
    进而
    $$
    \lim_{n \to \infty} \frac{\displaystyle\max_{1 \le k \le n} \sigma_k^2}{B_n^2} = \lim_{n \to \infty} \frac{1/2}{1 - 2^{-n}} = \frac{1}{2} \neq 0
    $$
    所以，费勒条件不满足.
3. 我们有
    $$
    \text{Lindeberg 条件成立} \Leftrightarrow \text{Feller 条件成立且 CLT 成立}
    $$
    由上述可知 Feller 条件不成立但中心极限定理成立，因此该序列必然不满足 Lindeberg 条件.

::: info （课本 5.12）

用概率方法证明：当 $n\to\infty$ 时，有
$$
e^{-n}\sum_{k=0}^{n}\frac{n^k}{k!}\to\frac{1}{2}
$$

:::

【解】

待证式中的求和部分
$$
\sum_{k=0}^{n} \frac{n^k}{k!} e^{-n}
$$
正是参数为 $\lambda = n$ 的泊松分布的累积概率. 设独立同分布随机变量序列 $X_1, X_2, \dots, X_n$ 均服从参数为 $1$ 的泊松分布 $P(1)$. 由泊松分布的可加性，它们的和 $S_n = \displaystyle\sum_{i=1}^n X_i$ 服从参数为 $n$ 的泊松分布 $P(n)$.

于是，待求极限可转化为随机变量 $S_n$ 的概率形式：
$$
e^{-n} \sum_{k=0}^{n} \frac{n^k}{k!} = P(S_n \le n)
$$

对于 $X_i \sim P(1)$，其期望和方差为
$$
E[X_i] = 1, \text{Var}(X_i) = 1
$$
因此 $S_n$ 的期望和方差为
$$
E[S_n] = n, \text{Var}(S_n) = n
$$
根据独立同分布的中心极限定理，当 $n \to \infty$ 时，$\displaystyle\frac{S_n - n}{\sqrt{n}}$ 依分布收敛于标准正态分布 $N(0, 1)$.

从而运用标准正态分布的分布函数，有
$$
\lim_{n \to \infty} P(S_n \le n) = \lim_{n \to \infty} P\left( \frac{S_n - n}{\sqrt{n}} \le \frac{n - n}{\sqrt{n}} \right) = \lim_{n \to \infty} P\left( \frac{S_n - n}{\sqrt{n}} \le 0 \right)
$$

由于极限分布为标准正态分布，故该极限等于 $\Phi(0)= \dfrac{1}{2}$. 即
$$
\lim_{n \to \infty} e^{-n} \sum_{k=0}^{n} \frac{n^k}{k!} = \frac{1}{2}
$$
得证.

::: info （课本 5.14）

CBA 联赛中辽宁队一个赛季要打 $44$ 场比赛，其中 $26$ 场对阵甲级战队，$18$ 场对阵乙级战队. 假设对阵甲级战队时每场赢的概率是 $0.4$，对阵乙级战队时每场赢的概率是 $0.7$，假设每场比赛的结果是独立的，应用中心极限定理近似计算以下事件的概率：

1. 该队能赢 $25$ 场以上的比赛；
2. 该队赢甲级战队的场数超过赢乙级战队的场数.

:::

【解】

设 $X$ 表示辽宁队赢得甲级战队的场数，$Y$ 表示赢得乙级战队的场数. 根据题意，
$$
X\sim B(26, 0.4),Y\sim B(18, 0.7)
$$
且 $X$ 与 $Y$ 相互独立.

首先计算 $X$ 和 $Y$ 的期望与方差：
$$
E(X) = 26 \times 0.4 = 10.4
$$
$$
D(X) = 26 \times 0.4 \times (1 - 0.4) = 6.24
$$
$$
E(Y) = 18 \times 0.7 = 12.6
$$
$$
D(Y) = 18 \times 0.7 \times (1 - 0.7) = 3.78
$$

1. 记总获胜场数为 $S = X + Y$. 由期望和方差的性质可得：
    $$
    E(S) = E(X) + E(Y) = 10.4 + 12.6 = 23
    $$
    $$
    D(S) = D(X) + D(Y) = 6.24 + 3.78 = 10.02
    $$
    根据中心极限定理，随机变量 $S$ 近似服从正态分布 $N(23, 10.02)$. 我们将所求概率转化为标准正态分布概率进行计算：
    $$
    \begin{align*}
        P(S > 25) & = P\left( \frac{S - 23}{\sqrt{10.02}} > \frac{25 - 23}{\sqrt{10.02}} \right) \\
        & = P\left( Z > \frac{2}{3.165} \right) \\
        & \approx P(Z > 0.63) \\
        & = 1 - \Phi(0.63)
    \end{align*}
    $$
    查标准正态分布表可知 $\Phi(0.63) \approx 0.7357$，故：
    $$
    P(S > 25) \approx 1 - 0.7357 = 0.2643
    $$
2. 计算该队赢甲级战队的场数超过赢乙级战队场数的概率
    题目即求 $P(X > Y)$，等价于 $P(X - Y > 0)$. 记 $W = X - Y$. 计算 $W$ 的期望与方差如下：
    $$
    E(W) = E(X) - E(Y) = 10.4 - 12.6 = -2.2
    $$
    $$
    D(W) = D(X) + (-1)^2 D(Y) = 6.24 + 3.78 = 10.02
    $$
    根据中心极限定理，$W$ 近似服从正态分布 $N(-2.2, 10.02)$.
    $$
    \begin{align*}
        P(X > Y) & = P(W > 0) = P\left( \frac{W - (-2.2)}{\sqrt{10.02}} > \frac{0 - (-2.2)}{\sqrt{10.02}} \right) \\
        & = P\left( Z > \frac{2.2}{3.165} \right) \\
        & \approx P(Z > 0.70) \\
        & = 1 - \Phi(0.70)
    \end{align*}
    $$
    查表可知 $\Phi(0.70) \approx 0.7580$，故：
    $$
    P(X > Y) \approx 1 - 0.7580 = 0.2420
    $$

::: info （课本 5.15）

设有一列口袋，在第 $k$ 个口袋中放 $1$ 个白球和 $k-1$ 个黑球. 自前 $n$ 个口袋中各取一个球，以 $\zeta_n$ 表示所取出的球中白球的个数. 证明：

1. 当 $r>1/2$ 时，$\dfrac{\zeta_n-E(\zeta_n)}{\ln^r(n)}\overset{P}{\to} 0$. （提示：$\displaystyle\sum_{k=1}^n\frac{1}{k}\le C\ln n$）
2. $\displaystyle\lim_{n\to\infty}P\left(\frac{\zeta_n-E(\zeta_n)}{\sqrt{D(\zeta_n)}}<x\right)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{x}\mathrm{e}^{-t^2/2}\mathrm{d}t$

:::

【解】

设 $X_k$ 为第 $k$ 个口袋中取出的球的颜色指示变量，若取出白球记 $X_k = 1$，取出黑球记 $X_k = 0$. 第 $k$ 个口袋中有 $1$ 个白球和 $k-1$ 个黑球，共 $k$ 个球. 因此 $X_k$ 服从参数为 $p_k = \dfrac{1}{k}$ 的伯努利分布. 各口袋取球结果相互独立，故 $\{X_k\}$ 为独立随机变量序列. 计算 $X_k$ 的期望与方差如下：
$$
E(X_k) = \frac{1}{k}
$$
$$
D(X_k) = \frac{1}{k} \left( 1 - \frac{1}{k} \right) = \frac{1}{k} - \frac{1}{k^2}
$$

总白球数 $\zeta_n = \sum_{k=1}^n X_k$.
其方差
$$
D(\zeta_n) = \sum_{k=1}^n \left( \frac{1}{k} - \frac{1}{k^2} \right) = \sum_{k=1}^n \frac{1}{k} - \sum_{k=1}^n \frac{1}{k^2}
$$
当 $n \to \infty$ 时，级数 $\displaystyle\sum_{k=1}^\infty \frac{1}{k^2}$ 收敛，而调和级数 $\displaystyle\sum_{k=1}^n \frac{1}{k}$ 发散且与 $\ln n$ 同阶.
因此，存在常数 $C_1, C_2$ 使得对于充分大的 $n$，有 $C_1 \ln n \le D(\zeta_n) \le C_2 \ln n$.

1. 利用 Chebyshev 不等式，对于任意 $\epsilon > 0$：
    $$
    \begin{align*}
    P\left( \left| \frac{\zeta_n - E(\zeta_n)}{\ln^r n} \right| \ge \epsilon \right) & = P\left( |\zeta_n - E(\zeta_n)| \ge \epsilon \ln^r n \right) \le \frac{D(\zeta_n)}{(\epsilon \ln^r n)^2} \\
    & \le \frac{\displaystyle\sum_{k=1}^n \frac{1}{k}}{\epsilon^2 \ln^{2r} n}
    \end{align*}
    $$
    我们知道 $\displaystyle\sum_{k=1}^n \frac{1}{k} \le C \ln n$，代入上式得：
    $$
    \le \frac{C \ln n}{\epsilon^2 \ln^{2r} n} = \frac{C}{\epsilon^2 \ln^{2r-1} n}
    $$
    因为 $r > 1/2$，所以 $2r - 1 > 0$. 当 $n \to \infty$ 时，$\ln^{2r-1} n \to \infty$，故上述概率上界趋于 $0$.
    即
    $$
    \frac{\zeta_n - E(\zeta_n)}{\ln^r n} \xrightarrow{P} 0
    $$
    得证.
2. 即证 $\dfrac{\zeta_n - E(\zeta_n)}{\sqrt{D(\zeta_n)}}$ 依分布收敛于标准正态分布. 这里使用 Lyapunov 条件进行验证. 令 $B_n = \sqrt{D(\zeta_n)}$. 由于 $X_k$ 是有界随机变量（取值 $0$ 或 $1$），也就是 $|X_k - E(X_k)| \le 1$.
考虑选择 $\delta = 1$，因此其三阶中心矩满足
    $$
    E|X_k - E(X_k)|^3 \le E|X_k - E(X_k)|^2 = D(X_k)
    $$
    从而 $\displaystyle\sum_{k=1}^n E|X_k - E(X_k)|^3 \le \sum_{k=1}^n D(X_k) = B_n^2$.
    下面计算 Lyapunov 比率：
    $$
    \dfrac{\sum_{k=1}^n E|X_k - E(X_k)|^3}{B_n^3} \le \frac{B_n^2}{B_n^3} = \frac{1}{B_n}
    $$
    此前已分析 $D(\zeta_n)$ 与 $\ln n$ 同阶，故当 $n \to \infty$ 时，$B_n = \sqrt{D(\zeta_n)} \to \infty$. 所以
    $$
    \lim_{n \to \infty} \frac{1}{B_n} = 0
    $$
    Lyapunov 条件满足. 根据中心极限定理：
    $$
    \lim_{n \to \infty} P\left( \frac{\zeta_n - E(\zeta_n)}{\sqrt{D(\zeta_n)}} < x \right) = \Phi(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^x e^{-t^2/2} \mathrm{d}t
    $$
    证毕.

::: info （李贤平 5.38）

设 $\{X_n\}$ 独立同分布，$P\{X_n=2^{k-2\ln k}\}=2^{-k}(k=1,2,\ldots)$，则大数定律成立.

:::

【解】

根据题意，$\{X_n\}$ 是独立同分布（i.i.d.）的随机变量序列.
由于它们同分布，记 $X$ 为具有该共同分布的随机变量. 根据题目给出的概率分布律，随机变量 $X$ 取值为 $x_k = 2^{k - 2\ln k}$，对应的概率为 $p_k = 2^{-k}$，其中 $k = 1, 2, \dots$.

我们考虑应用辛钦大数定律，因此需要验证随机变量的数学期望存在.

首先计算 $E[|X|]$：

$$
\begin{aligned}
E[|X|] &= \sum_{k=1}^{\infty} |x_k| \cdot p_k \\
&= \sum_{k=1}^{\infty} 2^{k - 2\ln k} \cdot 2^{-k} \\
&= \sum_{k=1}^{\infty} 2^k \cdot 2^{-2\ln k} \cdot 2^{-k} \\
&= \sum_{k=1}^{\infty} 2^{-2\ln k}
\end{aligned}
$$

为了判断该级数的敛散性，对一般项 $2^{-2\ln k}$ 将底数变换为 $\mathrm{e}$：

$$
\begin{align*}
2^{-2\ln k} &= (\mathrm{e}^{\ln 2})^{-2\ln k} \\
&= \mathrm{e}^{-2 (\ln 2)(\ln k)} \\
&= \mathrm{e}^{\ln(k^{-2\ln 2})} \\
&= k^{-2\ln 2} \\
&= \frac{1}{k^{2\ln 2}}
\end{align*}
$$

这是一个 $p$-级数 $\displaystyle\sum_{k=1}^{\infty} \frac{1}{k^p}$，其中 $p = 2\ln 2=\ln 4>1$，故级数 $\displaystyle\sum_{k=1}^{\infty} \frac{1}{k^{\ln 4}}$ 收敛，即 $E[|X|] < \infty$.

根据辛钦大数定律，对于独立同分布且期望存在的随机变量序列 $\{X_n\}$，有：
$$
\frac{1}{n} \sum_{i=1}^{n} X_i \xrightarrow{P} E[X]
$$
故大数定律成立.

::: info （李贤平 5.49）

设 $\{X_n\}$ 是相互独立且具有有限方差的随机变量序列，若
$$
\sum_{n=1}^\infty\frac{DX_n}{n^2}<\infty
$$
则必有
$$
\lim_{n\to\infty}\frac{1}{n^2}\sum_{k=1}^n DX_k=0
$$

:::

【解】

因 $\displaystyle\sum_{n=1}^\infty \frac{DX_n}{n^2} < \infty$，则对任意 $\varepsilon > 0$，存在正整数 $N$，有

$$ \sum_{k=N+1}^\infty \frac{DX_k}{k^2} < \varepsilon $$

当 $n > N$，

$$
\begin{aligned}
0 &\le \frac{1}{n^2} \sum_{k=1}^n DX_k \\
&= \frac{1}{n^2} \sum_{k=1}^N DX_k + \frac{1}{n^2} \sum_{k=N+1}^n DX_k \\
&\le \frac{1}{n^2} \sum_{k=1}^N DX_k + \sum_{k=N+1}^n \frac{DX_k}{k^2} \quad (\text{此处因 } k \le n \text{ 故 } \frac{1}{n^2} \le \frac{1}{k^2}) \\
&\le \frac{1}{n^2} \sum_{k=1}^N DX_k + \sum_{k=N+1}^\infty \frac{DX_k}{k^2} \\
&< \frac{1}{n^2} \sum_{k=1}^N DX_k + \varepsilon
\end{aligned}
$$

令 $n\to\infty$，得到
$$
0\le \lim_{n \to \infty}\frac{1}{n^2} \sum_{k=1}^n DX_k \le \varepsilon
$$
又由 $\varepsilon$ 的任意性，得到
$$
\lim_{n \to \infty} \frac{1}{n^2} \sum_{k=1}^n DX_k = 0
$$

证毕.
