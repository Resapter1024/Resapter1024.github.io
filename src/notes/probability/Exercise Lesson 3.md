---
title: 概率论第六次习题课
author: false
date: 2025-12-07
# 禁止显示页脚
footer: false
---

## 习题解答

### 11.17

::: info （课本 4.4）

令 $Z$ 是一个标准正态随机变量，对于一个固定的 $x$，令
$$
X=\left\{\begin{matrix}
    Z, & Z> x \\
    0, & \text{其他}
\end{matrix}\right.
$$
证明：$E(X)=\dfrac{1}{\sqrt{2\pi}}e^{-x^2/2}$.

:::

【解】

记 $X=g(Z)$，从而
$$
\begin{align*}
    E(X) & = E(g(Z)) = \int_{-\infty}^{+\infty} g(z)\varphi(z)\mathrm{d}z \\
    & = \int_x^{+\infty} z\cdot \dfrac{1}{\sqrt{2\pi}}e^{-z^2/2}\mathrm{d}z \\
    & = \dfrac{1}{\sqrt{2\pi}}\cdot (-e^{-z^2/2})|_x^{+\infty} \\
    & = \dfrac{1}{\sqrt{2\pi}}e^{-x^2/2}
\end{align*}
$$
即证.

::: info （课本 4.17）

掷两枚均匀的骰子，令
$$
X=\left\{\begin{matrix}
    1, & \text{两枚骰子和为} 6 \\
    0, & \text{其他}
\end{matrix}\right.
$$
令 $Y$ 为第一枚骰子抛出的点数. 计算：

1. $H(Y)$；
2. $H_Y(X)$；
3. $H(X,Y)$.

:::

【解】

设 $Z$ 为第二枚骰子抛出的点数. 从而 $X=1\Leftrightarrow Y+Z=6$，因此
$$
P(X=1)=\frac{5}{36}, P(X=0)=\frac{31}{36}
$$

1. 直接使用公式计算得到
    $$
    H(Y)=-\sum_{i=1}^6 P(Y=i)\log P(Y=i)=-\frac{1}{6}\log\frac{1}{6}\cdot 6=-\log\frac{1}{6}
    $$
2. 条件熵的计算公式为 $H_Y(X)=\displaystyle\sum_{y=1}^6P(Y=y)H(X\mid Y=y)$，因此下面先计算 $H(X\mid Y=y)$.
    有分别给定 $Y=y\in\{1,2,3,4,5\}$ 时，$P(X=1\mid Y=y)=P(Z=6-k)=\frac{1}{6}$，进而
    $$
    \begin{align*}
        H(X\mid Y=y) & =-\sum_{x=0}^1 P(X=1\mid Y=y)\log P(X=1\mid Y=y) \\
        & = -\left(\frac{1}{6}\log\frac{1}{6}+\frac{5}{6}\log\frac{5}{6}\right) \\
        & = \frac{1}{6}\log 6 + \frac{5}{6}\log\frac{6}{5}
    \end{align*}
    $$
    而 $Y=6$ 时，$P(X=1\mid Y=6)=0$，因此可以计算
    $$
    \begin{align*}
        H(X\mid Y=6) & = -\sum_{x=0}^1 P(X=1\mid Y=6)\log P(X=1\mid Y=6) \\
        & = -\left(0\cdot\log 0+1\cdot \log 1\right)=0
    \end{align*}
    $$
    将上面的结果代入原式得到
    $$
    \begin{align*}
        H_Y(X) & = \sum_{y=1}^6P(Y=y)H(X\mid Y=y) \\
        & = \frac{1}{6} \left[5\cdot\left( \frac{1}{6}\log 6 + \frac{5}{6}\log\frac{6}{5}\right) + 0\right] \\
        & = \frac{5}{6} \left( \frac{1}{6}\log 6 + \frac{5}{6}\log\frac{6}{5} \right)
    \end{align*}
    $$
3. 求联合熵可以直接使用链式法则，即
    $$
    \begin{align*}
        H(X,Y) & = H(Y) + H_Y(X) \\
        & = -\log\frac{1}{6} + \frac{5}{6} \left( \frac{1}{6}\log 6 + \frac{5}{6}\log\frac{6}{5} \right) \\
        & = \frac{11}{6}\log 6 - \frac{25}{36}\log 5
    \end{align*}
    $$

::: info （课本 4.18）

证明：对于任何离散型随机变量 $X$，以及函数 $f$，有
$$
H(f(X))\le H(X)
$$

:::

【解】

记 $Y=f(X)$. 为了说明 $H(Y)\le H(X)$，我们从联合熵的链式法则入手. 联合熵根据链式法则有如下的两种写法：
$$
H(X,Y) = H(X) + H(Y\mid X)
$$
同时，我们也可以写成：
$$
H(X,Y) = H(Y) + H(X\mid Y)
$$
因此上面两式的右边相等，即
$$
H(Y) + H(X\mid Y) = H(X) + H(Y\mid X)
$$

考察条件熵 $H(Y\mid X)$. 为方便起见我们记 $X,Y$ 的取值空间分别为 $\mathcal{X},\mathcal{Y}$. 由于当 $X=x$ 时，一定有 $Y=f(x)$. 因此
$$
H(Y\mid X)=\sum_{x\in\mathcal{X}}P(X=x)H(Y\mid X=x)
$$
而
$$
\begin{align*}
    H(Y\mid X=x) & = -\sum_{y\in\mathcal{Y}}P(Y=y\mid X=x)\log P(Y=y\mid X=x) \\
    & =-P(Y=f(x)\mid X=x)\log P(Y=f(x)\mid X=x)-0 \\
    & = -1\cdot\log 1=0
\end{align*}
$$
故 $H(Y\mid X)=\displaystyle\sum_{x\in\mathcal{X}}P(X=x)\cdot 0=0$. 这告诉我们
$$
H(Y) + H(X\mid Y) = H(X)
$$
又因为条件熵总是非负，因此我们有
$$
H(X) = H(Y) + H(X\mid Y) \ge H(Y) = H(f(X))
$$
这就证明了原结论.

【注】 直观的证明思路是，当给定 $X$ 时，$f(X)$ 不再具备随机性，因而熵也为 $0$.

::: info （李贤平 4.38）

试求二项分布的熵.

:::

【解】

二项分布 $\text{Bin}(n,p)$ 的概率质量函数为 $P(X=k)=\displaystyle\binom{n}{k}p^kq^{1-k}$，其中 $q=1-p$.

根据熵的定义，代入概率质量函数得到
$$
\begin{align*}
    H(X) & = -\sum_{k=0}^n P(X=k)\log P(X=k) \\
    & = -\sum_{k=0}^{n} \left( \binom{n}{k} p^k q^{n-k} \right) \log \left( \binom{n}{k} p^k q^{n-k} \right) \\
    & = -\left[ \sum_{k=0}^{n} P(X=k)\log\binom{n}{k} + \sum_{k=0}^{n} P(X=k)k\log p + \sum_{k=0}^{n} P(X=k)(n-k)\log q \right] \\
    & = -\left[E\left(\log\binom{n}{X}\right) + np\log p + nq\log q\right]
\end{align*}
$$

::: info （李贤平 4.39）

若以 $\alpha$ 及 $\beta$ 分别记二进位信道的输入及输出，已知 $P\{\alpha=1\}=p,P\{\alpha=0\}=1-p,P\{\beta=1\mid\alpha=1\}=q,P\{\beta=0\mid\alpha=1\}=1-q,P\{\beta=1\mid\alpha=0\}=r,P\{\beta=0\mid\alpha=0\}=1-r$，试求输出中含有输入的信息量.

:::

【解】

即求互信息 $I(\alpha,\beta)= H(\beta) - H(\beta|\alpha)$，因此只要分别求出 $H(\beta)$ 和 $H(\beta|\alpha)$ 即可.

对条件熵 $H(\beta|\alpha)$ 有
$$
H(\beta|\alpha) = \sum_{a \in \{0, 1\}} P(\alpha=a) H(\beta|\alpha=a)
$$
其中
$$
H(\beta|\alpha=0) = -r\log r  - (1-r)\log(1-r)
$$
$$
H(\beta|\alpha=1) = -q\log q - (1-q)\log(1-q)
$$
代入得到
$$
\begin{align*}
    H(\beta|\alpha) & = P(\alpha=0) H(\beta|\alpha=0) + P(\alpha=1) H(\beta|\alpha=1) \\
    & = (1-p) \big[-r\log_2(r) - (1-r)\log_2(1-r)\big] + p \big[-q\log_2(q) - (1-q)\log_2(1-q)\big]
\end{align*}
$$

接下来我们需要计算信息熵 $H(\beta)$. 因此我们需要先计算 $\beta$ 的概率分布. 由全概率公式
$$
\begin{align*}
    P(\beta=1) & = P(\beta=1|\alpha=1)P(\alpha=1)+P(\beta=1|\alpha=0)P(\alpha=0) \\
    & = pq+r(1-p) = r+p(q-r)
\end{align*}
$$
进而
$$
P(\beta=0)=1-P(\beta=1)=1-r-p(q-r)
$$
因此 $\beta$ 的信息熵为
$$
\begin{align*}
    H(\beta) & = - \left[\big(r(1-p)+qp\big) \log\big(r(1-p)+qp\big) \right.\\
    & \left. + \big(1-r(1-p)-qp\big) \log\big(1-r(1-p)-qp\big) \right]
\end{align*}
$$

两式相减，化简得到互信息的表达式. 方便起见，记 $H_b(x) = -x\log x - (1-x)\log(1-x)$，从而
$$
I(\alpha; \beta) = H_b(r(1-p)+qp) - \left[ (1-p)H_b(r) + p H_b(q) \right]
$$

::: info （李贤平 4.42）

设 $\xi$ 是一个母函数为 $P(s)$ 的随机变量，试求下列各概率所对应的母函数：

1. $P(\xi>n)$；
2. $P(\xi=2n)$.

:::

【解】

1. 要求 $q_n=P(\xi>n)$ 的母函数，实际上要求 $Q(s) = \displaystyle\sum_{n=0}^{\infty} q_n s^n = \sum_{n=0}^{\infty} P(\xi>n) s^n$. 我们知道 $P(\xi>n)=\displaystyle\sum_{k=n+1}^\infty p_k$，代入上式得到
    $$
    Q(s) = \sum_{n=0}^{\infty} \left(\sum_{k=n+1}^\infty p_k\right) s^n
    $$
    交换求和顺序得到
    $$
    \begin{align*}
        Q(s) & = \sum_{k=1}^\infty p_k\left(\sum_{n=0}^{k-1} s^n \right) \\
        & = \sum_{k=1}^\infty \left( p_k\cdot \frac{1-s^k}{1-s}\right) \\
        & = \frac{\displaystyle\sum_{k=1}^\infty p_k(1-s^k)}{1-s} \\
        & = \frac{(1-p_0)-(P(s)-p_0)}{1-s} \\
        & = \frac{1-P(s)}{1-s}
    \end{align*}
    $$
2. 要求 $u_n = P(\xi=2n) = p_{2n}$ 的母函数，实际上要求 $U(s) = \displaystyle\sum_{n=0}^{\infty} u_n s^n = \sum_{n=0}^{\infty} p_{2n} s^n$. 为了将偶数次项系数提取出来，我们考虑
    $$
    P(s)=\sum_{n=0}^\infty p_n s^n,\quad P(-s)=\sum_{n=0}^\infty p_n (-s)^n
    $$
    两式相加得到
    $$
    P(s)+P(-s) = \sum_{k=0}^\infty 2 p_{2k} s^{2k}
    $$
    代入 $s = \sqrt{t}$，得到
    $$
    P(\sqrt{t})+P(-\sqrt{t}) = \sum_{k=0}^\infty 2p_{2k} t^{k} = 2U(t)
    $$
    即 $U(s)=\dfrac{P(\sqrt{s})+P(-\sqrt{s})}{2}$.

::: info （李贤平 4.44）

设 $\{\xi_k\}$ 是一串独立的整值随机变量序列，具有相同概率分布，考虑和 $\eta=\xi_1+\xi_2+\ldots+\xi_\nu$，其中 $\nu$ 是随机变量，它与 $\{\xi_k\}$ 相互独立，试用 (1) 母函数法；(2) 直接计算证明
$$
E\eta=E\nu\cdot E\xi_k,\quad D\eta = E\nu\cdot D\xi_k + D_\nu\cdot (E\xi_k)^2
$$

:::

【解】

（法一）设 $\xi_k$ 的母函数为 $F(s$，$\nu$ 的母函数为 $G(s)$，可知 $\eta$ 的母函数为 $H(s)=G(F(s))$. 欲计算一阶矩，需要对母函数求异界导，即
$$
H'(s)=G'(F(s))F'(s)
$$
我们有 $F(1)=\displaystyle\sum_{n=0}^\infty P(\xi_k=n)=1$，因此
$$
E\eta=H'(1)=G'(F(1))F'(1)=G'(1)F'(1)=E\nu\cdot E\xi_k.
$$
类似地，欲计算二阶矩，需要对母函数求二阶导，即
$$
H''(s)=G''(F(s))[F'(s)]^2+G'(F(s))F''(s)
$$
我们有 $ E(\eta(\eta-1))=H''(1) $，从而
$$
E\eta^2=H''(1)+H'(1)
$$
因此方差计算如下
$$
\begin{align*}
    D\eta & = E\eta^2 - (E\eta)^2 \\
    & = H''(1)+H'(1) - (H'(1))^2 \\
    & = G''(F(1))[F'(1)]^2+G'(F(1))F''(1)+G'(F(1))F'(1) - [G'(F(1))F'(1)]^2 \\
    & = G'(1)\left[F''(1)+F'(1)-(F'(1))^2\right] + (F'(1))^2\left[G''(1)+G'(1)-(G'(1))^2\right] \\
    & = E\nu\cdot D\xi_k + D_\nu\cdot (E\xi_k)^2
\end{align*}
$$

（法二）最直观的思路就是利用重期望公式，对 $\nu$ 取条件来计算. 固定 $\nu$ 时，根据期望的线性性质有
$$
E(\eta|\nu=n)=nE\xi_k
$$
因此
$$
E\eta=E[E(\eta|\nu=n)]=E(\nu\cdot E\xi_k)=E\nu\cdot E\xi_k
$$
关于方差，由全方差公式 $\mathrm{Var}(Y) = E[\mathrm{Var}(Y|X)] + \mathrm{Var}(E[Y|X])$，有
$$
\mathrm{Var}(\eta) = E(\mathrm{Var}(\eta|\nu))+\mathrm{Var}(E(\eta|\nu))
$$
因此先计算条件方差 $\mathrm{Var}(\eta|\nu=n)$，由独立随机变量和的方差性质得到
$$
\mathrm{Var}(\eta|\nu=n)=n \mathrm{Var}(\xi_k)
$$
代入上式得到
$$
\begin{align*}
    \mathrm{Var}(\eta)&=E(\nu\cdot \mathrm{Var}(\xi_k))+\mathrm{Var}(\nu\cdot E\xi_k)\\
    & = E\nu \cdot \mathrm{Var}(\xi_k)+ \mathrm{Var}(\nu)\cdot (E\xi_k)^2
\end{align*}
$$
换用本题的符号，这实际上就是 $D\eta = E\nu\cdot D\xi_k + D_\nu\cdot (E\xi_k)^2$.

【注 1】这个结果被称为 Wald's Lemma，在泊松过程中有重要的应用.

【注 2】比起母函数，本题意识到加和的数目是随机变量，并通过对这个加和数取条件来简化题目是更重要的思维.

::: info （李贤平 4.45）

某公共汽车站在 $[0,t]$ 中来的乘客批数 $\mu$ 服从参数为 $\lambda t$ 的泊松分布，而每批来到的乘客数是随机变量，来 $n$ 个的概率为 $p_n， n=0,1,2,\dots$，试求 $[0,t]$ 中来到乘客数 $\eta$ 的母函数及数学期望.

:::

【解】

设第 $k$ 批来到的乘客数为 $\xi_k$，则 $\eta = \xi_1+\dots+\xi_\mu$. 我们有 $\xi_k$ 的母函数为
$$
F(s) = \sum_{n=0}^\infty p_n s^n
$$
而 $\mu$ 服从参数为 $\lambda t$ 的泊松分布，其母函数为
$$
G(s)=e^{\lambda t(s-1)}
$$
因此 $\eta$ 的母函数为
$$
H(s)=G(F(s))=\exp\left(\lambda t\left(\sum_{n=0}^\infty p_n s^n-1\right)\right)
$$
由上题知，$\eta$ 的期望为
$$
E\eta = E\mu\cdot E\xi_n = \lambda t\cdot\sum_{n=1}^\infty np_n
$$

### 11.21

::: info （课本 4.19）

设 $X_1, X_2, \ldots, X_n$ 独立同分布，都服从指数分布 $\mathrm{Exp}(\lambda)$，证明随机变量
$$
Y_1=X_{(1)}, Y_k=X_{(k)}-X_{(k-1)},\quad k=2,3,\ldots,n
$$
相互独立，且 $Y_i\sim \mathrm{Exp}((n+1-i)\lambda)$

:::

【解】

我们知道次序统计量 $X_{(1)},\ldots,X_{(n)}$ 的联合分布为
$$
p(x_1,\ldots,x_n)=n!\prod_{i=1}^n (\lambda\mathrm{e}^{-\lambda x_i})=\frac{\lambda^n}{n!}\exp\left(-\lambda\sum_{i=1}^n x_i\right)
$$

有该变换的逆变换为
$$
X_{(k)}=\sum_{i=1}^k Y_k, \quad k=1,2,\ldots, n
$$
因此变换的 Jacobi 行列式为
$$
|J|=\left|\begin{matrix}
    1 & 0 & \ldots & 0 \\
    1 & 1 & \ldots & 0 \\
    \vdots & \vdots & & \vdots \\
    1 & 1 & \ldots & 1
\end{matrix}\right|=1
$$
因此 $Y_1,\ldots,Y_n$ 的联合分布为
$$
\begin{align*}
    q(y_1,\ldots, y_n) & = p(x_1,\ldots,x_n)|J| \\
    & = n!\lambda^n\exp\left(-\lambda\sum_{i=1}^n (n+1-i)y_i\right) \\
    & = \prod_{i=1}^n (n+1-i)\lambda\exp((n+1-i)\lambda y_i)
\end{align*}
$$
这就表明 $Y_i$ 之间独立，且 $Y_i\sim \mathrm{Exp}((n+1-i)\lambda)$.

【注】这其实是《数理统计》课程中的经典习题，即求次序统计量函数的分布，上面用变量替换法给出了标准解法.

::: info （课本 4.20）

设共有 $N$ 种不同的优惠券，假定有一人在收集优惠券，每次得到一张优惠券，而得到的优惠券在这 $N$ 种优惠券种均匀分布，求当该人收集到全套 $N$ 种优惠券时，他收集的优惠券张数的期望值.

:::

【解】

考虑记 $X_i(i=1,2,\ldots,N)$ 为「已经收集到 $i-1$ 种优惠券时，收集到第 $i$ 种优惠券所需的收集张数」，因此所求的总收集张数 $Y$ 的期望为
$$
E(Y)=E\left(\sum_{i=1}^N X_i\right)=\sum_{i=1}^N E(X_i)
$$
下面分析 $X_i$. 容易知道，$X_i\sim\mathrm{Geo}\left(\frac{N-i+1}{N}\right)$，因此有 $E(X_i)=\frac{N}{N-i+1}$，从而
$$
E(Y)=N\sum_{i=1}^N \frac{1}{N-i+1}=N\sum_{i=1}^N\frac{1}{i}=NH_n
$$
其中 $H_n=\sum_{i=1}^n\frac{1}{i}$ 为调和数列.

::: info （李贤平 4.48）

试求 $[0,1]$ 均匀分布的特征函数.

:::

【解】

本题需要用到复变函数论中的重要结论.

::: tip Euler 公式

对任意 $t\in\mathbb{R}$
$$
\mathrm{e}^{\mathrm{i}t}=\cos t+\mathrm{i}\sin t
$$

:::

据此，对 $X\sim U[0,1]$，我们有 $t\neq 0$ 时
$$
\begin{align*}
    \varphi(t) & = E(\mathrm{e}^{\mathrm{i}tX}) \\
    & = E(\cos(tX)) + \mathrm{i}E(\sin(tX)) \\
    & = \int_0^1 \cos(tx)\mathrm{d}x + \mathrm{i}\int_0^1 \cos(tx)\mathrm{d}x \\
    & = \left. \frac{\sin(tx)}{t}\right|_0^1 + \mathrm{i}\left. \frac{-\cos(tx)}{t}\right|_0^1 \\
    & = \frac{\sin t - \mathrm{i}\cos t +  \mathrm{i}}{t} \\
    & = \frac{\cos t + \mathrm{i}\sin t - 1}{\mathrm{i}t} \\
    & = \frac{\mathrm{e}^{\mathrm{i}t}-1}{\mathrm{i}t}
\end{align*}
$$
而 $t=0$ 时，显然 $\varphi(0) = E(\mathrm{e}^{0})=1$. 综上，$X$ 的特征函数为
$$
\varphi(t)=\left\{\begin{matrix}
    \dfrac{\mathrm{e}^{\mathrm{i}t}-1}{\mathrm{i}t}, & t\neq 0 \\
    1, & t=0
\end{matrix}\right.
$$

::: info （李贤平 4.50）

若随机变量 $\xi$ 服从柯西分布，$\mu=0,\lambda=1$，而 $\eta=\xi$，试证关于特征函数成立
$$
f_{\xi+\eta}(t)=f_\xi(t)\cdot f_\eta(t)
$$
但是 $\xi$ 与 $\eta$ 并不独立.

:::

【解】

$\xi$ 与 $\eta$ 不独立是显然的. 因此只需要说明题中等式成立.

我们知道标准柯西分布的特征函数为 $f_\xi(t)=\mathrm{e}^{-|t|}$（这个结果的证明将在拓展部分详述）. 由特征函数的性质得到
$$
f_{\xi+\eta}(t) = f_{2\xi}(t)=f_\xi(2t)=\mathrm{e}^{-|2t|}=\mathrm{e}^{-2|t|}=f_\xi(t)\cdot f_\eta(t)
$$

::: info （李贤平 4.51）

设 $\xi_1,\xi_2,\ldots,\xi_n$ 相互独立且服从同一柯西分布，试证：$\dfrac{1}{n}(\xi_1+\xi_2+\ldots+\xi_n)$ 与 $\xi_1$ 同分布.

:::

【解】

有 $\xi_1,\xi_2,\ldots,\xi_n\overset{\mathrm{i.i.d}}{\sim}\mathrm{Cauchy}(\mu,\lambda)$，其特征函数为
$$
f(t)=\mathrm{e}^{\mathrm{i}\mu t-\lambda|t|}
$$
记 $\xi = \dfrac{1}{n}(\xi_1+\xi_2+\ldots+\xi_n)$，则其特征函数为
$$
\begin{align*}
    f_\xi(t)&=f_{\xi_1+\xi_2+\ldots+\xi_n}\left(\frac{t}{n}\right)=\left[f\left(\frac{t}{n}\right)\right]^n \\
    &=\left[\exp\left(\mathrm{i}\mu \frac{t}{n}-\lambda\left|\frac{t}{n}\right|\right)\right]^n = \exp(\mathrm{i}\mu t-\lambda|t|)
\end{align*}

$$
由于特征函数和分布函数一一对应，这就证明了两者同分布.

::: info （李贤平 4.52）

若 $\xi\sim N(\mu,\sigma^2)$，试用特征函数法求 $E(\xi-\mu)^k$.

:::

【解】

有 $\xi-\mu\sim N(0,\sigma^2)$，其特征函数为 $f(t)=\exp\left(-\dfrac{1}{2}\sigma^2t^2\right)$. 将其在 $t=0$ 处展开得到
$$
\begin{align*}
    f(t)&=\exp\left(-\dfrac{1}{2}\sigma^2t^2\right) \\
    & = \sum_{n=0}^\infty \frac{1}{n!}\left(-\dfrac{1}{2}\sigma^2t^2\right)^n \\
    & = \sum_{n=0}^\infty \frac{(-1)^n}{(2n)!!}(\sigma t)^{2n}
\end{align*}
$$

因此所求的 $k$ 阶矩为
$$
E(\xi-\mu)^k = \dfrac{f^{(k)}(0)}{\mathrm{i}^k}=\left\{\begin{matrix}
    \sigma^k(k-1)!!, & k=2n \\
    0, & k=2n-1
\end{matrix}\right. \quad (n\in\mathbb{N}^*)
$$

### 11.24

::: info （李贤平 4.56）

若随机向量 $(\xi,\eta)$ 服从二元正态分布 $N(\mu_1,\mu_2,\sigma_1^2,\sigma_2^2,\rho)$，试写出：

(1) $(\xi,\eta)$ 的特征函数；(2) $a\xi+b\eta$ 的密度函数；(3) 当 $\xi=x$ 时的条件密度函数，并讨论 $\rho=-1,\rho=1$ 及 $\rho=0$ 等特殊情况下结果的概率含意.

:::

【解】

引入向量记号，令随机向量 $\boldsymbol{X} = \begin{pmatrix} \xi \\ \eta \end{pmatrix}$. 由题意知 $\boldsymbol{X}$ 服从二维正态分布 $N_2(\boldsymbol{\mu}, \boldsymbol{\Sigma})$，其中均值向量 $\boldsymbol{\mu} = \begin{pmatrix} \mu_1 \\ \mu_2 \end{pmatrix}$，协方差矩阵 $\boldsymbol{\Sigma} = \begin{pmatrix} \sigma_1^2 & \rho\sigma_1\sigma_2 \\ \rho\sigma_1\sigma_2 & \sigma_2^2 \end{pmatrix}$.

(1) 根据多元正态分布特征函数的矩阵表达式 $\varphi_{\boldsymbol{X}}(\boldsymbol{t}) = \exp\left( i\boldsymbol{t}^T\boldsymbol{\mu} - \dfrac{1}{2}\boldsymbol{t}^T\boldsymbol{\Sigma}\boldsymbol{t} \right)$，令参数向量 $\boldsymbol{t} = (t_1, t_2)^T$，直接展开指数部分的二次型可得 $(\xi, \eta)$ 的特征函数为：
$$ \varphi(t_1, t_2) = \exp\left\{ i(\mu_1 t_1 + \mu_2 t_2) - \frac{1}{2}(\sigma_1^2 t_1^2 + 2\rho\sigma_1\sigma_2 t_1 t_2 + \sigma_2^2 t_2^2) \right\} $$

(2) 令 $Y = a\xi + b\eta$. 这可以看作是向量 $\boldsymbol{X}$ 的线性变换 $Y = \boldsymbol{C}^T \boldsymbol{X}$，其中 $\boldsymbol{C} = (a, b)^T$. 由正态分布的线性性质知 $Y$ 服从一元正态分布. 其均值为
$$
E(Y) = \boldsymbol{C}^T\boldsymbol{\mu} = a\mu_1 + b\mu_2
$$
其方差为
$$
D(Y) = \boldsymbol{C}^T\boldsymbol{\Sigma}\boldsymbol{C}
$$
计算方差二次型：
$$
D(Y) = \begin{pmatrix} a & b \end{pmatrix} \begin{pmatrix} \sigma_1^2 & \rho\sigma_1\sigma_2 \\ \rho\sigma_1\sigma_2 & \sigma_2^2 \end{pmatrix} \begin{pmatrix} a \\ b \end{pmatrix} = a^2\sigma_1^2 + 2ab\rho\sigma_1\sigma_2 + b^2\sigma_2^2
$$
记 $\mu_Y = a\mu_1 + b\mu_2$，$\sigma_Y^2 = a^2\sigma_1^2 + b^2\sigma_2^2 + 2ab\rho\sigma_1\sigma_2$，则 $a\xi + b\eta$ 的密度函数为：
$$ f(y) = \frac{1}{\sqrt{2\pi}\sigma_Y} e^{-\frac{(y-\mu_Y)^2}{2\sigma_Y^2}} $$

(3) 根据二元正态分布的条件分布公式，当 $\xi=x$ 给定时，$\eta$ 服从正态分布 $N(\mu_{\eta|\xi}, \sigma^2_{\eta|\xi})$.
条件均值为 $\mu_{\eta|\xi} = \mu_2 + \rho\dfrac{\sigma_2}{\sigma_1}(x-\mu_1)$，条件方差为 $\sigma^2_{\eta|\xi} = \sigma_2^2(1-\rho^2)$.
故条件密度函数为：
$$ f_{\eta|\xi}(y|x) = \frac{1}{\sqrt{2\pi}\sigma_2\sqrt{1-\rho^2}} \exp\left\{ -\frac{[y - (\mu_2 + \rho\dfrac{\sigma_2}{\sigma_1}(x - \mu_1))]^2}{2\sigma_2^2(1-\rho^2)} \right\} $$

从上面可以看出，若 $\rho=0$，则条件方差为 $\sigma_2^2$，条件均值为 $\mu_2$，此时条件密度等于边缘密度 $f_\eta(y)$，说明 $\xi$ 与 $\eta$ 相互独立；若 $\rho=\pm 1$，则条件方差 $\sigma_2^2(1-\rho^2) = 0$，此时分布退化. $\eta$ 关于 $\xi$ 的条件分布不再是通常意义下的密度函数，而是以概率 1 取值于直线 $y = \mu_2 \pm \dfrac{\sigma_2}{\sigma_1}(x-\mu_1)$ 上，表明 $\xi$ 与 $\eta$ 存在严格的线性函数关系.

::: info （李贤平 4.57）

若 $\xi_1,\xi_2,\ldots,\xi_n$ 相互独立，均服从 $N(0,1)$，而
$$
\eta_1=\sum_{k=1}^n a_k\xi_k,\quad \eta_2=\sum_{k=1}^n b_k\xi_k
$$
试证 $\eta_1$ 与 $\eta_2$ 独立的充要条件为 $\displaystyle\sum_{k=1}^n a_kb_k=0$.

:::

【解】

考虑矩阵 $\mathbf{A}=\left(\begin{matrix}
    a_1 & a_2 & \ldots & a_n \\
    b_1 & b_2 & \ldots & b_n
\end{matrix}\right)$，进一步记 $\boldsymbol{\xi}=(\xi_1,\xi_2,\ldots,\xi_n)^\top$，显然有 $\mathbf{A}\boldsymbol{\xi}=(\eta_1,\eta_2)^\top$，因此 $(\eta_1,\eta_2)^\top$ 服从多元正态分布. 这表明它们独立等价于它们不相关，即协方差为 $0$.

由于 $E(\eta_1)=E(\eta_2)=0$，计算得到
$$
\mathrm{Cov}(\eta_1,\eta_2) = E(\eta_1\eta_2)=E\left[ \left(\sum_{i=1}^n a_i \xi_i\right) \left(\sum_{j=1}^n b_j \xi_j\right) \right]= \sum_{i=1}^n \sum_{j=1}^n a_i b_j E[\xi_i \xi_j]
$$
若 $i\neq j$，则由于 $\xi_i,\xi_j$ 独立，它们一定不相关，从而 $E[\xi_i \xi_j]=0$. 从而上式化简得到
$$
\mathrm{Cov}(\eta_1,\eta_2)=\sum_{i=1}^n a_i b_i E[\xi_i^2]=\sum_{i=1}^n a_i b_i
$$
因此
$$
\mathrm{Cov}(\eta_1,\eta_2)=0\Leftrightarrow \displaystyle\sum_{k=1}^n a_kb_k=0
$$
即证.

::: info （李贤平 4.58）

设 $\xi_1,\xi_2,\ldots,\xi_n$ 相互独立，具有相同分布 $N(\mu,\sigma^2)$，试求 $\boldsymbol{\xi}=\left(\begin{matrix}
    \xi_1 \\
    \xi_2 \\
    \vdots \\
    \xi_n
\end{matrix}\right)$ 的分布，并写出它的数学期望及协方差矩阵，再求 $\bar{\xi}=\displaystyle\frac{1}{n}\sum_{i=1}^{n}\xi_i$ 的分布密度.

:::

【解】

由于 $\boldsymbol{\xi}$ 的各分量独立同分布，显然有其自身服从多元正态分布，且 $E(\boldsymbol{\xi})=(\mu,\mu,\ldots,\mu)^\top=\mu\mathbf{1}_n$，$\mathrm{Var}(\boldsymbol{\xi})=\sigma^2I_n$，因此
$$
\boldsymbol{\xi}\sim N(\mu\mathbf{1}_n, \sigma^2I_n)
$$

进一步，这实际上是求 $\dfrac{1}{n}\mathbf{1}_n^\top \boldsymbol{\xi}$ 的密度. 我们知道多元正态分布的线性组合仍服从正态分布，因此只需求出其期望和方差. 知
$$
E(\bar{\xi})=\frac{1}{n}\cdot n\mu=\mu
$$
$$
\mathrm{Var}(\bar{\xi})=\frac{1}{n^2}\cdot n\sigma^2=\frac{\sigma^2}{n}
$$
因此 $\bar{\xi}\sim N\left(\mu,\dfrac{\sigma^2}{n}\right)$. 进而其密度为
$$
f_{\bar{\xi}}(x) = \frac{1}{\sqrt{2\pi (\sigma^2/n)}} \exp\left\{ -\frac{(x - \mu)^2}{2(\sigma^2/n)} \right\} = \frac{\sqrt{n}}{\sqrt{2\pi}\sigma} \exp\left\{ -\frac{n(x - \mu)^2}{2\sigma^2} \right\}
$$

::: info （李贤平 4.59）

若 $(\xi,\eta)$ 服从 $N(\mu_1,\mu_2,\sigma_1^2,\sigma_2^2,\rho)$，而
$$
U=a\xi+b\eta,\quad V=c\xi+d\eta
$$

(1) 试求 $U$ 与 $V$ 的数学期望、方差及相关系数；

(2) 写出 $(U,V)$ 的分布；

(3) 讨论：何种情况下，$(U,V)$ 退化为一维分布；何种情况下，$U$ 与 $V$ 独立.

:::

【解】

令随机向量 $\boldsymbol{X} = \begin{pmatrix} \xi \\ \eta \end{pmatrix}$，其服从二元正态分布 $N_2(\boldsymbol{\mu}, \boldsymbol{\Sigma})$，其中均值向量为
$$
\boldsymbol{\mu} = \begin{pmatrix} \mu_1 \\ \mu_2 \end{pmatrix}
$$
协方差矩阵为
$$
\boldsymbol{\Sigma} = \begin{pmatrix} \sigma_1^2 & \rho\sigma_1\sigma_2 \\ \rho\sigma_1\sigma_2 & \sigma_2^2 \end{pmatrix}
$$

定义新的随机向量 $\boldsymbol{Y} = \begin{pmatrix} U \\ V \end{pmatrix} = \begin{pmatrix} a\xi + b\eta \\ c\xi + d\eta \end{pmatrix}$.
这可以写成线性变换形式 $\boldsymbol{Y} = \boldsymbol{A}\boldsymbol{X}$，其中变换矩阵 $\boldsymbol{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$.

(1) 根据多元随机变量线性变换的性质，$\boldsymbol{Y}$ 的数学期望向量为 $E(\boldsymbol{Y}) = \boldsymbol{A}E(\boldsymbol{X}) = \boldsymbol{A}\boldsymbol{\mu}$，即：
$$
\begin{pmatrix} E(U) \\ E(V) \end{pmatrix} = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} \mu_1 \\ \mu_2 \end{pmatrix} = \begin{pmatrix} a\mu_1 + b\mu_2 \\ c\mu_1 + d\mu_2 \end{pmatrix}
$$
$\boldsymbol{Y}$ 的协方差矩阵为 $\boldsymbol{\Sigma}_{\boldsymbol{Y}} = \boldsymbol{A}\boldsymbol{\Sigma}\boldsymbol{A}^T$. 直接展开矩阵乘法：
$$
\boldsymbol{\Sigma}_{\boldsymbol{Y}} = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} \sigma_1^2 & \rho\sigma_1\sigma_2 \\ \rho\sigma_1\sigma_2 & \sigma_2^2 \end{pmatrix} \begin{pmatrix} a & c \\ b & d \end{pmatrix}
$$

计算结果矩阵的主对角线元素即为方差，非对角线元素为协方差：
$$
D(U) = a^2\sigma_1^2 + 2ab\rho\sigma_1\sigma_2 + b^2\sigma_2^2
$$
$$
D(V) = c^2\sigma_1^2 + 2cd\rho\sigma_1\sigma_2 + d^2\sigma_2^2
$$
$$
\text{Cov}(U, V) = ac\sigma_1^2 + (ad+bc)\rho\sigma_1\sigma_2 + bd\sigma_2^2
$$
进而相关系数 $\rho_{UV} = \dfrac{\text{Cov}(U, V)}{\sqrt{D(U)D(V)}}$.

(2) 由于正态向量的线性变换仍为正态向量，故 $(U, V)$ 服从二元正态分布，其参数即为上面求得的均值和协方差矩阵，记为 $N_2(\boldsymbol{A}\boldsymbol{\mu}, \boldsymbol{\Sigma}_{\boldsymbol{Y}})$.

(3) $(U, V)$ 退化为一维分布意味着其协方差矩阵奇异，即行列式 $|\boldsymbol{\Sigma}_{\boldsymbol{Y}}| = 0$. 计算得到
$$
|\boldsymbol{\Sigma}_{\boldsymbol{Y}}| = |\boldsymbol{A}\boldsymbol{\Sigma}\boldsymbol{A}^T| = |\boldsymbol{A}|^2 |\boldsymbol{\Sigma}| = (ad-bc)^2 \cdot \sigma_1^2\sigma_2^2(1-\rho^2)
$$
因此，当变换矩阵不可逆 ($ad=bc$) 或原分布本身完全相关 ($\rho=\pm 1$) 时，$(U, V)$ 退化.

另外，$U$ 与 $V$ 独立等价于其协方差为 0，即满足 $ac\sigma_1^2 + (ad+bc)\rho\sigma_1\sigma_2 + bd\sigma_2^2 = 0$ 时独立.

::: info （李贤平 4.60）Fisher 引理

若 $X_1,X_2,\ldots,X_n$ 相互独立，均服从 $N(\mu,\sigma^2)$，记
$$
\bar{X}=\frac{1}{n}\sum_{i=1}^n X_i, S_n^2=\frac{1}{n}\sum_{i=1}^n(X_i-\bar{X})^2
$$
试证：(1) $\bar{X}$ 与 $S_n^2$ 相互独立；(2) $\bar{X}\sim N\left(\mu, \dfrac{\sigma^2}{n}\right)$；(3) $\dfrac{nS_n^2}{\sigma^2}\sim\chi^2_{n-1}$.

:::

【解】

(1) 记向量 $\boldsymbol{X} = (X_1, \dots, X_n)^T$. $\bar{X}$ 是 $\boldsymbol{X}$ 的线性组合，$\boldsymbol{Y} = (X_1-\bar{X}, \dots, X_n-\bar{X})^T$ 也是 $\boldsymbol{X}$ 的线性变换，故它们均服从正态分布.

考察 $\bar{X}$ 与 $X_i - \bar{X}$ 的协方差：
$$
\text{Cov}(\bar{X}, X_i - \bar{X}) = E[\bar{X}(X_i - \bar{X})] - E\bar{X}E(X_i-\bar{X}) = E(\bar{X}X_i) - E(\bar{X}^2) - \mu \cdot 0
$$
代入 $\bar{X} = \frac{1}{n}\sum X_j$：
$$
E(\bar{X}X_i) = \frac{1}{n} \sum_{j=1}^n E(X_j X_i) = \frac{1}{n} [ (n-1)\mu^2 + (\mu^2+\sigma^2) ] = \mu^2 + \frac{\sigma^2}{n}
$$
又 $E(\bar{X}^2) = D(\bar{X}) + (E\bar{X})^2 = \frac{\sigma^2}{n} + \mu^2$. 两式相减得协方差为 $0$. 对于多元正态分布，不相关与独立等价. 因此 $\bar{X}$ 与所有的 $X_i - \bar{X}$ 独立，进而与 $S_n^2 = \frac{1}{n}\sum (X_i-\bar{X})^2$ 独立.

(2) 由 $X_i \sim N(\mu, \sigma^2)$ 且相互独立，利用期望与方差的线性性质：
$$
E(\bar{X}) = \frac{1}{n}\sum_{i=1}^n E(X_i) = \mu
$$
$$
\mathrm{Var}(\bar{X}) = \frac{1}{n^2}\sum_{i=1}^n \mathrm{Var}(X_i) = \frac{n\sigma^2}{n^2} = \frac{\sigma^2}{n}
$$
故 $\bar{X} \sim N(\mu, \frac{\sigma^2}{n})$.

(3) 需证
$$
\frac{nS_n^2}{\sigma^2} = \sum_{i=1}^n \left(\frac{X_i-\bar{X}}{\sigma}\right)^2 \sim \chi_{n-1}^2
$$
令 $Z_i = \dfrac{X_i-\mu}{\sigma} \sim N(0,1)$，则原式转化为证明
$$
\sum (Z_i-\bar{Z})^2 \sim \chi_{n-1}^2
$$
下面给出两种方法来证明这个结论.

（法一）令随机向量 $\boldsymbol{Z} = (Z_1, \dots, Z_n)^T \sim N(\boldsymbol{0}, \boldsymbol{I})$. 考虑一个 $n$ 阶正交矩阵 $\boldsymbol{C}$，使其**第一行**为
$$
\left(\frac{1}{\sqrt{n}}, \dots, \frac{1}{\sqrt{n}}\right)
$$

作正交变换 $\boldsymbol{Y} = \boldsymbol{C}\boldsymbol{Z}$. 由正态分布性质，$\boldsymbol{Y} \sim N(\boldsymbol{0}, \boldsymbol{C}\boldsymbol{I}\boldsymbol{C}^T) = N(\boldsymbol{0}, \boldsymbol{I})$，即 $Y_i$ 相互独立且服从标准正态分布.

计算
$$
Y_1 = \displaystyle\sum_{j=1}^n c_{1j} Z_j = \sqrt{n}\bar{Z}
$$
故 $Y_1^2 = n\bar{Z}^2$. 同时由于正交变换保持向量模长不变，有
$$
\displaystyle\sum_{i=1}^n Z_i^2 = \sum_{i=1}^n Y_i^2
$$
将平方和分解：
$$
\sum_{i=1}^n (Z_i-\bar{Z})^2 = \sum Z_i^2 - n\bar{Z}^2 = \sum_{i=1}^n Y_i^2 - Y_1^2 = \sum_{i=2}^n Y_i^2
$$
因为 $Y_2, \dots, Y_n$ 相互独立且服从 $N(0,1)$，其平方和服从 $\chi_{n-1}^2$.

（法二）记 $Q_n = \displaystyle\sum_{i=1}^n (X_i - \bar{X}_n)^2$. 我们采用数学归纳法证明
$$
\frac{Q_n}{\sigma^2} \sim \chi_{n-1}^2
$$

当 $n=2$ 时，$Q_2 = \dfrac{1}{2}(X_1-X_2)^2$. 因 $X_1-X_2 \sim N(0, 2\sigma^2)$，故 $\dfrac{X_1-X_2}{\sqrt{2}\sigma} \sim N(0,1)$，从而
$$
\frac{Q_2}{\sigma^2} = (\frac{X_1-X_2}{\sqrt{2}\sigma})^2 \sim \chi_1^2
$$
命题成立.

假设当 $n=k$ 时命题成立. 当 $n=k+1$ 时，对 $Q_{k+1}$ 作如下分解：
$$
Q_{k+1} = \sum_{i=1}^{k+1} (X_i - \bar{X}_{k+1})^2 = \sum_{i=1}^k (X_i - \bar{X}_k)^2 + \frac{k}{k+1}(X_{k+1} - \bar{X}_k)^2
$$
即 $Q_{k+1} = Q_k + \dfrac{k}{k+1}(X_{k+1} - \bar{X}_k)^2$.

考察第二项，有 $X_{k+1} \sim N(\mu, \sigma^2)$，$\bar{X}_k \sim N\left(\mu, \dfrac{\sigma^2}{k}\right)$ 且两者独立. 从而差值
$$
X_{k+1} - \bar{X}_k \sim N(0, \sigma^2(1+\frac{1}{k})) = N(0, \frac{k+1}{k}\sigma^2)
$$
标准化后平方得到
$$
\frac{(X_{k+1} - \bar{X}_k)^2}{\frac{k+1}{k}\sigma^2} \sim \chi_1^2 \implies \frac{1}{\sigma^2} \cdot \frac{k}{k+1}(X_{k+1} - \bar{X}_k)^2 \sim \chi_1^2
$$
由第 (1) 问结论知 $Q_k$ 与 $\bar{X}_k$ 独立，而 $X_{k+1}$ 天然与 $Q_k$ 独立，故式中前后两项相互独立. 根据独立卡方分布的可加性，
$$
\frac{Q_{k+1}}{\sigma^2} \sim \chi_{k-1}^2 + \chi_1^2 = \chi_k^2
$$
由归纳法原理，原结论对任意 $n$ 成立.

### 11.28

::: info （课本 5.1）

定义随机变量 $X$ 的信噪比，$|\mu|/\sigma$，其中 $\mu=E(X), \sigma^2=\mathrm{Var}(X)$，计算下列概率分布的信噪比：

(1) 均值为 $\lambda$ 的泊松分布；

(2) 二项分布 $\mathrm{Bin}(n,p)$；

(3) 均值为 $1/p$ 的几何分布；

(4) $(a,b)$ 区间上的均匀分布；

(5) 均值为 $1/\lambda$ 的指数分布；

(6) 正态分布 $N(\mu,\sigma^2)$.

:::

【解】

记 $r=\dfrac{|\mu|}{\sigma}$ 为信噪比.

(1) 泊松分布 $P(\lambda)$ 的期望 $\mu = \lambda$，方差 $\sigma^2 = \lambda$（其中 $\lambda > 0$），进而标准差 $\sigma = \sqrt{\lambda}$.
$$ r = \frac{\lambda}{\sqrt{\lambda}} = \sqrt{\lambda} $$

(2) 二项分布 $\mathrm{Bin}(n, p)$ 的期望 $\mu = np$，方差 $\sigma^2 = np(1-p)$，进而标准差 $\sigma = \sqrt{np(1-p)}$.
$$ r = \frac{np}{\sqrt{np(1-p)}} = \sqrt{\frac{np}{1-p}} $$

(3) 几何分布 $\mathrm{Geo}(p)$ 的期望 $\mu = \dfrac{1}{p}$，方差 $\sigma^2 = \dfrac{1-p}{p^2}$，进而标准差 $\sigma = \dfrac{\sqrt{1-p}}{p}$.
$$ r = \frac{1/p}{\sqrt{1-p}/p} = \frac{1}{\sqrt{1-p}} $$

(4) 均匀分布 $U(a, b)$ 的期望 $\mu = \dfrac{a+b}{2}$，方差 $\sigma^2 = \dfrac{(b-a)^2}{12}$，进而标准差 $\sigma = \dfrac{b-a}{2\sqrt{3}}$.
$$ r = \frac{|(a+b)/2|}{(b-a)/(2\sqrt{3})} = \sqrt{3} \left| \frac{a+b}{b-a} \right| $$

(5) 指数分布 $\mathrm{Exp}(\lambda)$ 的期望 $\mu = \dfrac{1}{\lambda}$，方差 $\sigma^2 = \dfrac{1}{\lambda^2}$ 进而标准差 $\sigma = \dfrac{1}{\lambda}$.
$$ r = \frac{1/\lambda}{1/\lambda} = 1 $$

(6) 正态分布 $N(\mu, \sigma^2)$ 的期望为 $\mu$，标准差为 $\sigma$.
$$ r = \frac{|\mu|}{\sigma} $$

::: info （课本 5.5）

(1) 假设 $X$ 为离散取值随机变量，可能取值为 $1,2,3,\dots$，如果 $P(X=k)$ 关于 $k$ 非增，证明：
$$
P(X=k)\le 2\frac{E(X)}{k^2},\quad k=1,2,3,\dots
$$

(2) 假设 $X$ 为连续取值随机变量，有非增的密度函数 $f(x)$，证明
$$
f(x)\le 2\frac{E(X)}{x^2},\quad \forall x>0
$$

:::

【解】

(1) 根据数学期望的定义：
$$
E(X) = \sum_{j=1}^{\infty} j \cdot P(X=j) = \sum_{j=1}^{\infty} j p_j
$$
由于每一项均为非负，我们只取前 $k$ 项进行放缩，依然有
$$
E(X) \ge \sum_{j=1}^{k} j p_j
$$
因为序列非增，对于任意 $j \le k$，都有 $p_j \ge p_k$. 故
$$
E(X) \ge \sum_{j=1}^{k} j p_k = p_k \sum_{j=1}^{k} j = p_k \frac{k(k+1)}{2}
$$
移项整理得
$$
p_k \le \frac{2E(X)}{k(k+1)}
$$
又因为 $k \ge 1$，显然 $k(k+1) > k^2$，故
$$
P(X=k) \le \frac{2E(X)}{k^2}
$$

(2) 根据连续型随机变量期望的定义：
$$
E(X) = \int_{0}^{\infty} t f(t) \, dt
$$
由于被积函数非负（密度函数 $f(t) \ge 0$ 且 $t>0$），缩小积分区间到 $(0, x]$，不等式依然成立：
$$
E(X) \ge \int_{0}^{x} t f(t) \, dt
$$
在区间 $(0, x]$ 上，由于 $f$ 非增，对于任意 $t \in (0, x]$ 都有 $f(t) \ge f(x)$.
$$
E(X) \ge \int_{0}^{x} t f(x) \, dt = f(x) \int_{0}^{x} t \, dt = f(x) \cdot \frac{x^2}{2}
$$
整理即得
$$
f(x) \le \frac{2E(X)}{x^2}
$$

::: info （李贤平 5.1）

$\xi$ 为非负随机变量，若 $E\mathrm{e}^{a\xi}<\infty,(a>0)$，则对任意 $x>0$，
$$
P\{\xi\ge x\}\le e^{-ax}E\mathrm{e}^{a\xi}
$$

:::

【解】

由于 $a > 0$，指数函数 $y = e^{ax}$ 是单调递增函数. 因此，对于任意 $x$, 不等式 $\xi \ge x \Leftrightarrow e^{a\xi} \ge e^{ax}$. 从而
$$
P(\xi \ge x) = P(e^{a\xi} \ge e^{ax})
$$
此时，令随机变量 $Y = e^{a\xi}$，常数 $C = e^{ax} > 0$. 由于 $\xi$ 为非负随机变量，$Y$ 显然非负. 应用 Markov 不等式
$$
P(Y \ge C) \le \frac{E(Y)}{C}
$$
代入得到
$$
P(e^{a\xi} \ge e^{ax}) \le \frac{E(e^{a\xi})}{e^{ax}}
$$
即
$$
P(\xi \ge x) \le e^{-ax} E(e^{a\xi})
$$

::: info （李贤平 5.2）

若 $h(x)\ge 0$，$\xi$ 为随机变量，且 $Eh(\xi)<\infty$，则关于任何 $C>0$，
$$
P(h(\xi)\ge C)\le C^{-1}Eh(\xi)
$$

:::

【解】

引入示性函数 $I_{\{h(\xi) \ge C\}}$. 考察随机变量 $h(\xi)$. 由于已知 $h(x) \ge 0$ 且 $C > 0$，当 $h(\xi) \ge C$ 时，显然有 $h(\xi) \ge C = C \cdot 1 = C \cdot I_{\{h(\xi) \ge C\}}$；当 $h(\xi) < C$ 时，由于 $h(\xi) \ge 0$，而右边 $C \cdot 0 = 0$，故不等式 $h(\xi) \ge C \cdot I_{\{h(\xi) \ge C\}}$ 依然成立.

综上
$$
h(\xi) \ge C \cdot I_{\{h(\xi) \ge C\}}
$$
总是成立. 对不等式两边同时取数学期望. 由于期望具有单调性：
$$
E[h(\xi)] \ge E[C \cdot I_{\{h(\xi) \ge C\}}]
$$
由于示性的期望即是概率，得到
$$
E[h(\xi)] \ge C \cdot E[I_{\{h(\xi) \ge C\}}] = C \cdot P(h(\xi) \ge C)
$$
因为 $C > 0$，移项整理得
$$
P(h(\xi) \ge C) \le \frac{E[h(\xi)]}{C} = C^{-1}Eh(\xi)
$$

::: info （李贤平 5.3）单边 Chebyshev 不等式

设 $\xi$ 为随机变量，$E\xi=0, D\xi=\sigma^2<\infty$，则对任何一个 $a>0$，试证
$$
P\{\xi\ge a\}\le \frac{\sigma^2}{\sigma^2+a^2}
$$

:::

【解】

引入任意常数 $b > 0$. 事件 $\{ \xi \ge a \}$ 等价于 $\{ \xi + b \ge a + b \}$. 因为 $a > 0, b > 0$，不等式两边均为正数，平方后不等号方向不变，故上述事件**包含于**事件 $\{ (\xi + b)^2 \ge (a + b)^2 \}$ 中. 所以
$$
P(\xi \ge a) \le P((\xi + b)^2 \ge (a + b)^2)
$$
对随机变量 $Y = (\xi + b)^2$ 应用 Markov 不等式
$$
P((\xi + b)^2 \ge (a + b)^2) \le \frac{E[(\xi + b)^2]}{(a + b)^2}
$$
已知 $E\xi = 0$，$E\xi^2 = D\xi + (E\xi)^2 = \sigma^2$，从而
$$
E[(\xi + b)^2] = E[\xi^2 + 2b\xi + b^2] = E\xi^2 + 2bE\xi + b^2 = \sigma^2 + b^2
$$
代入不等式得到
$$
P(\xi \ge a) \le \frac{\sigma^2 + b^2}{(a + b)^2}
$$
上式对任意 $b > 0$ 均成立. 记 $f(b) = \dfrac{\sigma^2 + b^2}{(a + b)^2}$. 对 $b$ 求一阶导数
$$
\begin{aligned} f'(b) &= \frac{2b(a+b)^2 - (\sigma^2+b^2) \cdot 2(a+b)}{(a+b)^4} \\ &= \frac{2(a+b) [b(a+b) - (\sigma^2+b^2)]}{(a+b)^4} \\ &= \frac{2(ab + b^2 - \sigma^2 - b^2)}{(a+b)^3} \\ &= \frac{2(ab - \sigma^2)}{(a+b)^3} \end{aligned}
$$
令 $f'(b) = 0$，由于 $a+b \neq 0$，得 $ab - \sigma^2 = 0$，解得驻点 $b_0 = \dfrac{\sigma^2}{a}$.

对 $f'(b) = 2(ab - \sigma^2)(a+b)^{-3}$ 进一步求导
$$
\begin{aligned} f''(b) &= 2a(a+b)^{-3} + 2(ab - \sigma^2) \cdot [-3(a+b)^{-4}] \\ &= \frac{2a}{(a+b)^3} - \frac{6(ab - \sigma^2)}{(a+b)^4} \end{aligned}
$$
将驻点 $b_0 = \dfrac{\sigma^2}{a}$ 代入上式. 注意第二项分子中含有因子 $(ab_0 - \sigma^2)$，代入后该项为 $0$.
故
$$
f''(b_0) = \frac{2a}{\left(a + \dfrac{\sigma^2}{a}\right)^3}
$$
因为 $a > 0$ 且 $\sigma^2 > 0$，显然 $a + \dfrac{\sigma^2}{a} > 0$，所以 $f''(b_0) > 0$. 进而 $b_0 = \dfrac{\sigma^2}{a}$ 是函数 $f(b)$ 的极小值点.

将 $b_0$ 代回原不等式右端：
$$
\frac{\sigma^2 + \left(\dfrac{\sigma^2}{a}\right)^2}{\left(a + \dfrac{\sigma^2}{a}\right)^2} = \frac{\sigma^2 \left(1 + \dfrac{\sigma^2}{a^2}\right)}{a^2 \left(1 + \dfrac{\sigma^2}{a^2}\right)^2} = \frac{\sigma^2}{a^2 \left(1 + \dfrac{\sigma^2}{a^2}\right)} = \frac{\sigma^2}{a^2 + \sigma^2}
$$
综上所述
$$
P(\xi \ge a) \le \frac{\sigma^2}{\sigma^2 + a^2}
$$

### 12.1

::: info 小测

1. 求超几何分布的期望；
2. 求 $E[N(0,4)]^4$；
3. 求几何分布的矩母函数 $M_X(t)$.

:::

【解】

1. 对超几何分布 $\mathrm{HGeom}(N,M,n)$，考虑第 $k$ 次抽中次品的示性 $I_k(k=1,2,\ldots,n)$. 由开锁模型可知，不论考虑第几次抽取，抽中次品的概率一定为
    $$
    P_k = \frac{M}{N},\quad k=1,2,\ldots,n
    $$
    因此对 $X=\displaystyle\sum_{i=1}^n I_k$，其期望为
    $$
    E(X)=\sum_{i=1}^n E(I_k)=\sum_{i=1}^n P_k=\frac{nM}{N}
    $$
2. 对 $X\sim N(0,4)$，知其特征函数为 $\varphi(t)=\exp\left(-\dfrac{1}{2}\sigma^2 t^2\right)=\exp(-2t^2)$. 将其在原点处展开为幂级数，得到
    $$
    \varphi(t)=\sum_{n=0}^\infty \frac{1}{n!}(-2t^2)^n=\sum_{n=1}^\infty \frac{(-2)^n)}{n!}t^{2n}
    $$
    现考虑四次项对应的系数 $a_2=\dfrac{4}{2!}=2$. 另一方面，特征函数本身可以写成
    $$
    \varphi(t)=E(\mathrm{e}^{\mathrm{i}tX})=\sum_{n=0}^\infty \frac{(it)^n}{n!}E(X^n)
    $$
    其四次项对应的系数为 $c_4=\dfrac{1}{24}E(X^4)$. 比较系数立刻解得
    $$
    E(X^4)=24\cdot 2=48
    $$
3. 先求其概率母函数，即
    $$
    G_X(z)=\sum_{n=1}^\infty q^{n-1}p\cdot z^n=\frac{p}{q}\sum_{n=1}^\infty (qz)^n=\frac{p}{q}\cdot\frac{qz}{1-qz}=\frac{pz}{1-qz}
    $$
    这个级数仅在 $|qz|<1$ 时收敛. 代入 $z=\mathrm{e}^t$ 立刻得到矩母函数
    $$
    M_X(t)=G_X(\mathrm{e}^t)=\frac{p\mathrm{e}^t}{1-q\mathrm{e}^t}
    $$
    此时有 $|q\mathrm{e}^t|<1$，即 $t<-\ln q$ 时该矩母函数有意义.

## 拓展内容

### Laplace 积分

回顾 Cauchy 分布的特征函数，它的得来其实相当不易. 我们可以先从标准 Cauchy 分布入手，再用线性变换转化为一半的 Cauchy 分布特征函数. 我们实际上需要证明
$$
\int_{-\infty}^{+\infty} \frac{\mathrm{e}^{itx}}{\pi(1+x^2)}\mathrm{d}x=\mathrm{e}^{-|t|}
$$
使用 Euler 公式，左式可以化简为两个积分的和，即
$$
\begin{align*}
    \int_{-\infty}^{+\infty} \frac{\mathrm{e}^{itx}}{\pi(1+x^2)}\mathrm{d}x & = \int_{-\infty}^{+\infty} \frac{\cos tx +\mathrm{i}\sin tx }{\pi(1+x^2)}\mathrm{d}x \\
    & = \int_{-\infty}^{+\infty} \frac{\cos tx }{\pi(1+x^2)}\mathrm{d}x+\mathrm{i}\int_{-\infty}^{+\infty} \frac{\sin tx }{\pi(1+x^2)}\mathrm{d}x
\end{align*}
$$
其中显然后一项积分绝对收敛，因此它的值正是其 Cauchy 主值，即
$$
\int_{-\infty}^{+\infty} \frac{\sin tx}{\pi(1+x^2)}\mathrm{d}x = \lim_{A\to+\infty}\int_{-A}^{+A} \frac{\sin tx}{\pi(1+x^2)}\mathrm{d}x=0
$$
而第一项根据对称性，可以进一步化简为
$$
\int_{-\infty}^{+\infty} \frac{\cos tx}{\pi(1+x^2)}\mathrm{d}x = \frac{2}{\pi}\int_{0}^{+\infty} \frac{\cos |t|x}{1+x^2}\mathrm{d}x
$$
因此问题就转化为证明如下关于 Laplace 积分的结论.

::: tip Laplace 积分

当 $t\ge 0$ 时，有
$$
\int_{0}^{+\infty} \frac{\cos tx}{1+x^2}\mathrm{d}x=\frac{\pi}{2}\mathrm{e}^{-t}
$$

:::

这是一个经典的含参变量积分，记左式为 $I(t)$. 容易证明这个含参变量积分绝对收敛. 我们可以做一些尝试，例如关于 $t$ 求导
$$
I'(t)=-\int_{0}^{+\infty} x\frac{\sin tx}{1+x^2}\mathrm{d}x
$$
需要注意，$I'(t)$ 不再绝对收敛，因此我们无法进一步计算其导函数. 但是，$I(t)$ 关于 $t$ 积分仍然可以和该反常积分交换次序. 为此我们可以先补充定义 $t<0$ 时，该积分的值为 $0$. 因此
$$
\begin{align*}
    J(t) & = \int_{-\infty}^t I(u)\mathrm{d}u = \int_{0}^t \int_{0}^{+\infty} \frac{\cos ux}{1+x^2}\mathrm{d}x \mathrm{d}u \\
    & = \int_{0}^{+\infty} \int_0^t \frac{\cos ux}{1+x^2}\mathrm{d}u\mathrm{d}x \\
    & = \int_{0}^{+\infty} \frac{\sin tx}{x(1+x^2)} \mathrm{d}x
\end{align*}
$$
从而 $I'(t)=J''(t)$. 此时令两式相减，我们有
$$
J(t)-J''(t)=\int_{0}^{+\infty} \frac{\sin tx}{1+x^2}\left(\frac{1}{x}+x\right) \mathrm{d}x=\int_{0}^{+\infty}\frac{\sin tx}{x}\mathrm{d}x
$$
等式右端正是 Dirichlet 积分的变形.

::: tip Dirichlet 积分

当 $t>0$ 时，有
$$
\int_{0}^{+\infty}\frac{\sin x}{x}\mathrm{d}x=\frac{\pi}{2}
$$

【证明】

考虑重积分
$$
I=\int_{0}^{+\infty}\int_{0}^{+\infty}\mathrm{e}^{-st}\sin t\mathrm{d}s\mathrm{d}t
$$
先积分 $s$ 得到
$$
I = \int_{0}^{+\infty} \sin t\cdot\left. \left(-\frac{1}{t}\mathrm{e}^{-st}\right)\right|_0^\infty \mathrm{d}t=\int_{0}^{+\infty}\frac{sin t}{t}\mathrm{d}t = \mathrm{LHS}
$$
另一方面，先积分 $t$，此时由分部积分，内层积分的结果为
$$
\begin{align*}
    \int_{0}^{+\infty}\mathrm{e}^{-st}\sin t\mathrm{d}t & = -\int_{0}^{+\infty}\mathrm{e}^{-st}\mathrm{d}\cos t \\
    & = -\left. e^{-st}\cos t\right|_{t=0}^{+\infty} - s\int_{0}^{+\infty}\mathrm{e}^{-st}\cos t\mathrm{d}t \\
    & = 1 - s\left(\left.\sin t \mathrm{e}^{-st}\right|_{t=0}^{+\infty} + s \int_{0}^{+\infty}\mathrm{e}^{-st}\sin t\mathrm{d}t\right) \\
    & = 1 - s^2 \int_{0}^{+\infty}\mathrm{e}^{-st}\sin t\mathrm{d}t
\end{align*}
$$
这就得到了
$$
\int_{0}^{+\infty}\mathrm{e}^{-st}\sin t\mathrm{d}t = \frac{1}{s^2+1}
$$
因此原积分为
$$
I = \int_{0}^{+\infty}\frac{1}{s^2+1}\mathrm{d}s = \dfrac{\pi}{2}
$$
两种积分顺序得到的结果应该是相同的，因此
$$
\int_{0}^{+\infty}\frac{sin x}{x}\mathrm{d}x=\frac{\pi}{2}
$$

:::

我们有
$$
\int_{0}^{+\infty}\frac{\sin tx}{x}\mathrm{d}x = \int_{0}^{+\infty}\frac{\sin tx}{tx}\mathrm{d}(tx) = \int_{0}^{+\infty}\frac{\sin u}{u}\mathrm{d}(u)=\frac{\pi}{2}
$$
因此上面的式子转化为常微分方程 $J(t)-J''(t)=\dfrac{\pi}{2}$. 这个微分方程的特征方程为 $r^2-1=0$，解得 $r=\pm 1$. 这就意味着该微分方程有通解
$$
J(t)=C_1 \mathrm{e}^{1\cdot t}+C_2 \mathrm{e}^{-1\cdot t} + C=C_1 \mathrm{e}^{t}+C_2 \mathrm{e}^{-t}+C
$$
由于 $J(t)-J''(t)=\dfrac{\pi}{2}$，解得 $C=\dfrac{\pi}{2}$

::: info Riemann-Lebesgue 引理

若函数 $f(x)$ 在 $(-\infty, +\infty)$ 上绝对可积（即 $\displaystyle\int_{-\infty}^{+\infty} |f(x)| dx < \infty$），则有：
$$ \lim_{t \to \infty} \int_{-\infty}^{+\infty} f(x) \cos(tx) \, dx = 0 $$
$$ \lim_{t \to \infty} \int_{-\infty}^{+\infty} f(x) \sin(tx) \, dx = 0 $$

:::

考虑 $t=0$ 时，$J(t)=0$，从而 $C_1+C_2=-\dfrac{\pi}{2}$；考虑 $t\to+\infty$，由 Riemann-Lebesgue 引理，一定有 $I(t)\to 0$. 而若 $C_1\neq 0$，则 $e^{t}\to \infty(t\to \infty)$，两者矛盾，从而一定有 $C_1=0$. 进而 $C_2=-\dfrac{\pi}{2}$. 因此我们有
$$
J(t)=-\dfrac{\pi}{2} \mathrm{e}^{-t}+\dfrac{\pi}{2}
$$
因此
$$
I(t)=\dfrac{\pi}{2} \mathrm{e}^{-t}
$$
这正是我们要证的.

对一般的 Cauchy 分布 $X\sim\mathrm{Cauchy}(\mu,\lambda)$，有
$$
X=\mu+\lambda Y,\quad Y\sim\mathrm{Cauchy}(0,1)
$$
因此 $X$ 的特征函数为
$$
f(x)=\mathrm{e}^{i\mu t}\cdot \mathrm{e}^{-|\lambda t|}=\mathrm{e}^{i\mu t-\lambda|t|}
$$

### Fourier 变换的对偶性

::: info Fourier 变换的对偶性

若函数 $f(x)$ 的 Fourier 变换是 $F(t)$，即 $\mathcal{F}[f(x)] = F(t)$.

则 $F(x)$ 的 Fourier 变换为
$$
\mathcal{F}[F(x)] = 2\pi f(-t)
$$

:::

可以计算得到，双指数分布（密度为 $q(x)=\dfrac{1}{2}\mathrm{e}^{-|t|}$）的特征函数正是 $g(t)=\dfrac{1}{1+x^2}$（证明略去），因此反过来，当我们对 Cauchy 分布 $p(x)=\dfrac{1}{\pi(1+x^2)}$ 计算其特征函数时，结果就应为
$$
f(t)=2\pi\cdot \frac{1}{\pi}\cdot \frac{1}{2}\mathrm{e}^{-|-t|}=\mathrm{e}^{-|t|}
$$
因此我们可以看到，有时将特征函数直接视为对概率密度的 Fourier 变换，直接运用分析的做法和结论会更加简洁.
