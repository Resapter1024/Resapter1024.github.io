---
title: 概率论第六次习题课
category:
  - 概率论
tag:
  - 学习
  - 数学
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
    H(Y)=-\sum_{i=1}^6 P(Y=i)\log P(Y=i)=-\frac{1}{6}\log\frac{1}{6}\cdot \frac{1}{6}=-\log\frac{1}{6}
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
    & = G'(1)\left[F''(1)+F(1)-(F'(1))^2\right] + (F'(1))^2\left[G''(1)+G'(1)-(G'(1))^2\right] \\
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
关于方差，我们需要引入条件方差公式 $\mathrm{Var}(Y) = E[\mathrm{Var}(Y|X)] + \mathrm{Var}(E[Y|X])$，该公式的证明将在拓展部分提及. 因此我们有
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
Y_1=X_{(1)}, Y_k=X_{(k)}-X{(k-1)},\quad k=2,3,\ldots,n
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

## 拓展内容

### 条件方差

::: info 条件方差

类似于条件期望，定义随机变量 $Y$ 给定 $X$ 下的条件方差为
$$
\mathrm{Var}(Y|X)=E[(Y-E(Y|X))^2|X]
$$

:::

下面给出条件方差的几条性质

::: tip 线性变换的条件方差

$$
\mathrm{Var}(a(X)Y + b(X)|X) = [a(X)]^2 \mathrm{Var}(Y|X)
$$

:::

【证明】

$$
\begin{align*}
\mathrm{Var}(a(X)Y + b(X)|X) &= \mathrm{Var}(a(X)Y|X) \\
&= E[(a(X)Y)^2|X] - E^2[a(X)Y|X] \\
&= [a(X)]^2 E[Y^2|X] - E^2[a(X)Y|X] \\
&= [a(X)]^2 \mathrm{Var}(Y|X)
\end{align*}
$$

::: tip 方差分解公式

$$
\mathrm{Var}(Y) = E[\mathrm{Var}(Y|X)] + \mathrm{Var}[E(Y|X)] = E[\sigma^2(X)] + \mathrm{Var}[\mu(X)]
$$

:::

【证明】

$$
\begin{align*}
\mathrm{Var}(Y) &= E(Y^2) - E^2(Y) \\
&= E[E(Y^2|X)] - E^2(E(Y|X)) \\
&= E[E(Y^2|X)] - E[E^2(Y|X)] + E[E^2(Y|X)] - E^2(E(Y|X)) \\
&= E[E(Y^2|X) - E^2(Y|X)] + E[E^2(Y|X)] - E^2(E(Y|X)) \\
&= E[\mathrm{Var}(Y|X)] + \mathrm{Var}[E(Y|X)]
\end{align*}
$$

::: tip 方差分解公式的推广

$$
\mathrm{Var}(Y|X) = E[\mathrm{Var}(Y|X, Z)|X] + \mathrm{Var}[E(Y|X, Z)|X]
$$

:::

::: tip 增加信息将减小方差

$$
E[\mathrm{Var}(Y|X)] \geqslant E[\mathrm{Var}(Y|X, Z)]
$$

:::

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

可以计算得到，双指数分布（密度为 $q(x)=\frac{1}{2}\mathrm{e}^{-|t|}$）的特征函数正是 $g(t)=\frac{1}{1+x^2}$（证明略去），因此反过来，当我们对 Cauchy 分布 $p(x)=\frac{1}{\pi(1+x^2)}$ 计算其特征函数时，结果就应为
$$
f(t)=2\pi\cdot \frac{1}{\pi}\cdot \frac{1}{2}\mathrm{e}^{-|-t|}=\mathrm{e}^{-|t|}
$$
因此我们可以看到，有时将特征函数直接视为对概率密度的 Fourier 变换，运用分析的做法和结论会更加简洁.
