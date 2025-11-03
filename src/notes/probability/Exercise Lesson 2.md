---
title: 概率论第四次习题课
category:
  - 概率论
tag:
  - 学习
  - 数学
date: 2025-11-09
# 禁止显示页脚
footer: false
---

## 习题解答

### 10.20

::: info （李贤平 3.12）

定义二元函数
$$
F(x,y)=\left\{\begin{matrix}
    1, & x+y>0 \\
    0, & x+y\le 0
\end{matrix}\right.
$$
验证此函数对每个变元非降，左连续，且满足分布函数性质(ii)，但无法使(3.2.5)保持非负

::: tip 注

分布函数的性质(ii)：
$$
\begin{matrix}
    F(x_1,x_2,\ldots,-\infty,\ldots,x_n)=0 \\
    F(+\infty,+\infty,\ldots,+\infty)=1
\end{matrix}
$$

式(3.2.5)：
$$
P(a_1\le X<b_1, a_2\le Y<b_2)=F(b_1,b_2)-F(a_1,b_2)-F(b_1,a_2)+F(a_1,a_2)
$$

:::

【解】

任取非负实数 $c\in[0,+\infty)$，若 $x+y\le 0$，则 $(x+c)+y$ 小于等于 $0$ 或大于 $0$，不论如何，
$$
F(x+c,y)\ge F(x,y)=0
$$
若 $x+y>0$，则一定有 $(x+c)+y>0$，从而也有
$$
F(x+c,y)\ge F(x,y)=1
$$
而由于 $x,y$ 地位对称，这就相当于证明了该函数对每个变元的非降性.

固定 $y$，考虑
$$
\lim_{x\to x_0^-}F(x,y)
$$
若 $x_0+y\le 0$，则对 $x<x_0$，总有 $x+y\le 0$，即 $F(x,y)=0$，因此
$$
\lim_{x\to x_0^-}F(x,y)=0=F(x_0,y)
$$
另一方面，若 $x_0+y>0$，则 $\exist \delta>0$ 满足 $x_0+y>\delta$. 因此在 $x_0$ 的左邻域 $(x_0-\delta,x_0)$ 中，我们有若 $x\in(x_0-\delta,x_0)$，$x+y>x_0+y-\delta>0$，这就意味着 $F(x,y)=1$，因此
$$
\lim_{x\to x_0^-}F(x,y)=1=F(x_0,y)
$$
这就证明了 $F$ 对 $x$ 的左连续性，由于 $x,y$ 地位对称，这就相当于证明了该函数对每个变元的左连续性.

考虑
$$
F(-\infty,y)=\lim_{x\to -\infty}F(x,y)
$$
可知对任意的 $y\in\mathbb{R},x<-y$ 时总有 $x+y<0$，从而
$$\lim_{x\to -\infty}F(x,y)=0
$$
即 $F(-\infty,y)=0$，同理 $F(x,-\infty)=0$. 再考虑
$$
F(+\infty,+\infty)=\lim_{(x,y)\to (+\infty,+\infty)} F(x,y)
$$
知 $(x,y)\to +\infty$ 时，有 $x,y\to +\infty$，从而 $x+y\to +\infty$，因此
$$
\lim_{(x,y)\to (+\infty,+\infty)}F(x,y)=1
$$
即 $F(+\infty,+\infty)=1$，这就证明了分布函数的性质(ii).

然而，当我们考察 $P(0\le X<1,0\le Y<1)$，有
$$
F(1,1)-F(0,1)-F(1,0)+F(0,0)=1-1-1+0=-1
$$
这表明该函数不满足(3.2.5).

::: info （李贤平 3.13）

若 $f_1(x),f_2(y)$ 是分布函数，求为使 $f(x,y)=f_1(x)\times f_2(y)+h(x,y)$ 称为密度函数，$h(x,y)$ 必须而且只须满足什么条件.

:::

【解】

两端在 $\mathbb{R}^2$ 上做积分，得到
$$
\iint\limits_{\mathbb{R}^2} f(x,y)\mathrm{d}x\mathrm{d}y= \int_{\mathbb{R}}f_1(x)\mathrm{d}x\int_{\mathbb{R}}f_2(y)\mathrm{d}y+\iint\limits_{\mathbb{R}^2}h(x,y) \mathrm{d}x\mathrm{d}y
$$
即
$$
1=1+\iint\limits_{\mathbb{R}^2}h(x,y) \mathrm{d}x\mathrm{d}y
$$
这就是在说 $\displaystyle\iint\limits_{\mathbb{R}^2}h(x,y) \mathrm{d}x\mathrm{d}y=0$.

同时，密度函数具有非负性，因此 $f(x,y)\ge 0$，这就要求 $h(x,y)\ge -f_1(x)f_2(y)$.

::: info （李贤平 3.14）

若 $f_1(x),f_2(x),f_3(x)$ 是对应于分布函数 $F_1(x),F_2(x),F_3(x)$ 的密度函数，证明对于一切 $\alpha(-1<\alpha<1)$，下列函数是密度函数，且具有相同的边际密度函数 $f_1(x),f_2(x),f_3(x)$:
$$
f_\alpha(x_1,x_2,x_3)=f_1(x_1)f_2(x_2)f_3(x_3)\{1+\alpha[2F_1(x_1)-1][2F_2(x_2)-1][2F_3(x_3)-1]\}
$$

:::

【解】

首先验证非负性，我们有 $F_i(x_i)\in[0,1]$，从而 $-1\le 2F_i(x_i)-1\le 1$，这就是
$$
-1\le [2F_1(x_1)-1][2F_2(x_2)-1][2F_3(x_3)-1]\le 1
$$
由于 $\alpha\in(-1,1)$，就有
$$
-1\le \alpha[2F_1(x_1)-1][2F_2(x_2)-1][2F_3(x_3)-1]\le 1
$$
因此 $f_\alpha(x_1,x_2,x_3)\ge 0$.

接下来验证在整个空间上积分为 $1$. 注意到
$$
\begin{align*}
    \int_{-\infty}^{+\infty}[2F_i(x_i)-1]f_i(x_i)\mathrm{d}x & = \int_{-\infty}^{+\infty}[2F_i(x_i)-1]\mathrm{d}F_i(x_i) \\
    & = [F_i^2(x_i)-F_i(x_i)]|_{-\infty}^{+\infty}=0
\end{align*}
$$
因此
$$
\iiint_{\mathbb{R}^3}f_\alpha(x_1,x_2,x_3)\mathrm{d}x_1\mathrm{d}x_2\mathrm{d}x_3=\int_{-\infty}^{+\infty}f_1(x_1)\mathrm{d}x_1\int_{-\infty}^{+\infty}f_2(x_2)\mathrm{d}x_2\int_{-\infty}^{+\infty}f_3(x_3)\mathrm{d}x_3=1
$$
这就证明了 $f_\alpha(x_1,x_2,x_3)$ 是密度函数. 在上面的式子中只积分两个变量就可以得到对应的边际密度分别为 $f_1(x),f_2(x),f_3(x)$.

::: info （李贤平 3.15）

若 $(\xi,\eta)$ 的联合概率分布为

<div class="table-container" style="display: flex; justify-content: center;">

| $\eta \setminus \xi$ | $-1$  | $0$ | $1$ |
| :------------------: | :-: | :-: | :-: |
|         $-1$         | $a$ | $0$   | $0.2$ |
|          $0$         | $0.1$ | $b$ | $0.1$ |
|          $1$         | $0$   | $0.2$ | $c$ |

</div>

且 $P(\xi\eta\neq 0)=0.4$，$P(\eta\le 0\mid\xi\le 0)=\dfrac{2}{3}$，试求：

1. $a,b,c$之值；
2. $\xi$ 及 $\eta$ 的边际概率分布；
3. $\xi+\eta$ 的概率分布.

:::

【解】

1. 该表等同于给出了一个多元离散随机向量的分布列，因此表中所有数据应满足
    $$
    a+0.2+0.1+b+0.1+0.2+c=1 \Rightarrow a+b+c=0.4
    $$
    由 $P(\xi\eta\neq 0)=0.4$ 知
    $$
    a+0.2+0+c=0.4 \Rightarrow a+c=0.2
    $$
    由 $P(\eta\le 0\mid\xi\le 0)=\dfrac{2}{3}$ 知
    $$
    P(\eta\le 0\mid\xi\le 0)=\dfrac{P(\eta\le 0,\xi\le 0)}{P(\xi\le 0)}=\dfrac{a+b+0.1}{a+0.1+b+0.2}=\dfrac{2}{3} \Rightarrow a+b=0.3
    $$
    因此解得
    $$
    (a,b,c)=(0.1,0.2,0.1)
    $$
2. 由 1，将表中按列累加得到 $\xi$ 的分布列
   <div class="table-container" style="display: flex; justify-content: center;">

    | $\xi$ | $-1$  |   $0$   |  $1$  |
    | :---: | :---: |  :---:  | :---: |
    |  $P$  | $0.2$ |  $0.4$  | $0.4$ |

    </div>

    将表中按行累加得到 $\eta$ 的分布列

    <div class="table-container" style="display: flex; justify-content: center;">

    | $\eta$ | $-1$  |   $0$   |  $1$  |
    | :---:  | :---: |  :---:  | :---: |
    |  $P$   | $0.3$ |  $0.4$  | $0.3$ |

    </div>
3. 可知 $\xi+\eta$ 的取值集合为 $\{-2,-1,0,1,2\}$. 由 1 得到
    <div class="table-container" style="display: flex; justify-content: center;">

    | $\xi+\eta$ | $-2$  | $-1$  |   $0$   |  $1$  |  $2$ |
    | :---: | :---: | :---: |  :---:  | :---: |  :-: |
    | $P$  | $0.1$ | $0.1$ |  $0.4$  | $0.3$ | $0.1$|

    </div>

### 10.24

::: info （课本 3.4）

若 $X$ 和 $Y$ 是相互独立的随机变量，均服从泊松分布，参数分别是 $\lambda_1$ 和 $\lambda_2$，试证明：

1. $X+Y$ 服从泊松分布，参数是 $\lambda_1+\lambda_2$.
2. $P(X=k\mid X+Y=n)=\displaystyle\binom{n}{k}\left(\dfrac{\lambda_1}{\lambda_1+\lambda_2}\right)^k\left(\dfrac{\lambda_2}{\lambda_1+\lambda_2}\right)^{n-k}$.

:::

【解】

1. 考虑直接求 $Z=X+Y$ 的分布列. 我们有
    $$
    \begin{align*}
        P(Z=k) & = \sum_{i=0}^k P(X=i,Y=k-i) \\
        & = \sum_{i=0}^k P(X=i)P(Y=k-i) \\
        & = \sum_{i=0}^k \displaystyle \dfrac{\lambda_1^i}{i!}e^{-\lambda_1}\dfrac{\lambda_2^{k-i}}{(k-i)!}e^{-\lambda_2} \\
        & = \frac{1}{k!}e^{-(\lambda_1+\lambda_2)}\cdot\sum_{i=0}^k \frac{k!}{i!(k-i)!}\lambda_1^i\lambda_2^{k-i} \\
        & = \frac{1}{k!}e^{-(\lambda_1+\lambda_2)}\cdot\left(\lambda_1+\lambda_2\right)^k
    \end{align*}
    $$
    这表明 $Z=X+Y$ 服从参数为 $\lambda_1+\lambda_2$ 的泊松分布.
2. 直接使用条件概率的定义，有
    $$
    \begin{align*}
        P(X=k\mid X+Y=n) & = \frac{P(X=k, X+Y=n)}{P(X+Y=n)} \\
        & = \frac{P(X=k, Y=n-k)}{P(X+Y=n)} \\
        & = \frac{P(X=k)P(Y=n-k)}{P(X+Y=n)} \\
        & = \frac{\dfrac{\lambda_1^k}{k!}e^{-\lambda_1}\dfrac{\lambda_2^{n-k}}{(n-k)!}e^{-\lambda_2}}{\dfrac{1}{n!}e^{-(\lambda_1+\lambda_2)}\cdot\left(\lambda_1+\lambda_2\right)^n} \\
        & = \frac{n!}{k!(n-k)!}\left(\dfrac{\lambda_1}{\lambda_1+\lambda_2}\right)^k\left(\dfrac{\lambda_2}{\lambda_1+\lambda_2}\right)^{n-k}
    \end{align*}
    $$
    这正是我们要证的.

::: info （课本 3.12）

假设 $X,Y$ 是整数取值的随机变量，令
$$
p(i\mid j)=P(X=i\mid Y=j)
$$
$$
q(j\mid i)=P(Y=j\mid X=i)
$$
证明：
$$
P(X=i,Y=j)=\frac{p(i\mid j)}{\displaystyle\sum_i \dfrac{p(i\mid j)}{q(j\mid i)}}
$$

:::

【解】

利用条件概率的定义，有
$$
P(X=i,Y=j) = p(i\mid j)P(Y=j)
$$
因此我们只要说明
$$
P(Y=j)=\frac{1}{\displaystyle\sum_i \dfrac{p(i\mid j)}{q(j\mid i)}}
$$
这等价于说明
$$
P(Y=j)\sum_i \dfrac{p(i\mid j)}{q(j\mid i)}=1 \tag{1}
$$
事实上我们有
$$
\begin{align*}
    \mathrm{LHS} & = \sum_i \dfrac{p(i\mid j)P(Y=j)}{q(j\mid i)} \\
    & = \sum_i \dfrac{P(X=i,Y=j)}{P(Y=j\mid X=i)} \\
    & = \sum_i P(X=i) = 1 = \mathrm{RHS}
\end{align*}
$$
$(1)$ 得证，这就证明了原结论.

::: info （课本 3.14）

设 $X,Y$ 为两个独立的标准正态分布随机变量，求：
$$
U=X,\qquad V=\frac{X}{Y}
$$
的联合分布，并证明 $V$ 服从标准柯西分布.

::: tip 柯西分布

我们称随机变量 $X$ 服从**标准柯西分布**，如果它的密度函数具有如下形式
$$
f(x)=\frac{1}{\pi\left(1+x^2\right)}
$$
它是柯西分布在位置参数为 $0$，尺度参数为 $1$ 时的特例. 其常常作为<u>随机变量不存在一阶矩</u>的一个实例.

:::

【解】

该变换的 Jacobi 行列式的逆为
$$
J^{-1}=\begin{vmatrix}
  1 & 0 \\
  \dfrac{1}{y} & -\dfrac{x}{y^2}
\end{vmatrix}=-\dfrac{x}{y^2}
$$
因此 $|J|=\dfrac{1}{|J^{-1}|}=\dfrac{y^2}{|x|}=\dfrac{|u|}{v^2}$. 而 $X,Y$ 的联合分布为
$$
p(x,y)=\dfrac{1}{2\pi}\exp\left\{-\dfrac{x^2+y^2}{2}\right\}
$$
因此 $U,V$ 的联合分布为
$$
q(u,v)=p(x,y)|J|=\dfrac{1}{2\pi}\exp\left\{-\dfrac{u^2}{2}\left(1+\dfrac{1}{v^2}\right)\right\}\dfrac{|u|}{v^2}
$$

接下来通过积分 $U$ 来求得 $V$ 的密度. 我们先求如下积分
$$
I(a)=\int_{-\infty}^{+\infty}|u|\exp\left\{-au^2\right\}\mathrm{d}u, a\in\mathbb{R}
$$
我们有
$$
\begin{align*}
    I(a) & = 2\int_{0}^{+\infty}u\exp\left\{-au^2\right\}\mathrm{d}u \\
    & = \int_{0}^{+\infty} \exp\left\{-au^2\right\}\mathrm{d}u^2 \\
    & = \left. \left(-\dfrac{1}{a}\exp\left\{-au^2\right\}\right)\right|_0^{+\infty} \\
    & = \dfrac{1}{a}
\end{align*}
$$
从而
$$
q(v)=\dfrac{1}{2\pi}\dfrac{1}{v^2}I\left(\frac{1}{2}\left(1+\dfrac{1}{v^2}\right)\right)=\dfrac{1}{2\pi v^2}\frac{2v^2}{1+v^2}=\frac{1}{\pi\left(1+v^2\right)}
$$
这表明 $V$ 服从标准柯西分布.

【注】想要推出两独立标准正态分布随机变量的商服从柯西分布，也可以应用「随机变量商的分布」公式求解，具体而言，记标准正态分布的密度为 $\varphi(x)$，则 $V$ 的密度为
$$
\begin{align*}
    q(v) & = \int_{-\infty}^{+\infty}|z|p(zx,z)\mathrm{d}z \\
    & = \int_{-\infty}^{+\infty}|z|\varphi(zx)\varphi(z)\mathrm{d}z \\
    & = \int_{-\infty}^{+\infty}|z|\frac{1}{\sqrt{2\pi}}\exp\left(-\frac{z^2x^2}{2}\right)\frac{1}{\sqrt{2\pi}}\exp\left(-\frac{z^2}{2}\right)\mathrm{d}z \\
    & = 2\cdot\frac{1}{2\pi}\int_{-\infty}^{+\infty}z\exp\left(-\frac{z^2(x^2+1)}{2}\right)\mathrm{d}z \\
    & = \frac{1}{\pi}\left. \left(-\frac{1}{x^2+1}\exp\left(-\frac{z^2(x^2+1)}{2}\right)\right)\right|_0^{+\infty} \\
    & = \frac{1}{\pi(1+x^2)}
\end{align*}
$$
然而该公式的解题实用价值极低. 在本题的常规推导中，通常使用以下变量替换
$$
S=Y,\qquad T=\frac{X}{Y}
$$
这个变量替换的计算更不易出错，请读者自行验证.

::: info （李贤平 3.17）

若 $P(\mu=m,\nu=n)=\dfrac{(\lambda p)^m(\lambda-\lambda p)^{n-m}}{m!(n-m)!}e^{-\lambda}, \begin{array}{l}
    m=0,1,2,\ldots,n \\
    n=0,1,2,\ldots
\end{array}$
试求：

1. $P(\nu=n)$;
2. $P(\mu=m)$;
3. $P(\mu=m\mid \nu=n)$;
4. $P(\nu-\mu=k)$

:::

【解】

注意到
$$
P(\mu=m,\nu=n)=\dfrac{\lambda^n}{n!}e^{-\lambda}\cdot\frac{n!}{m!(n-m)!}p^m(1-p)^{n-m}
$$
据此可以利用已知的二项分布和泊松分布的知识简化计算.

1. $P(\nu=n)=\displaystyle\sum_{m=0}^n P(\mu=m,\nu=n)=\dfrac{\lambda^n}{n!}e^{-\lambda}, n=0,1,\ldots$.
2. 注意到这里 $n\ge m$，因此
    $$
    \begin{align*}
        P(\mu=m) & =\displaystyle\sum_{n=m}^\infty P(\mu=m,\nu=n) \\
        & = \dfrac{(\lambda p)^m}{m!}e^{-\lambda}\sum_{n=m}^\infty\dfrac{(\lambda-\lambda p)^{n-m}}{(n-m)!} \\
        & = \dfrac{(\lambda p)^m}{m!}e^{-\lambda}\cdot e^{\lambda-\lambda p} \\
        & = \dfrac{(\lambda p)^m}{m!}e^{-\lambda p}, m=0,1,\ldots
    \end{align*}
    $$
3. $P(\mu=m\mid \nu=n)=\dfrac{P(\mu=m,\nu=n)}{P(\nu=n)}=\dfrac{n!}{m!(n-m)!}p^m(1-p)^{n-m}, m=0,1,\ldots,n$.
4. 有 $P(\nu-\mu=k)=\sum_{j=0}^\infty P(\mu=j,\nu=k+j)=\sum_{j=0}^\infty P(\nu=k+j)P(\mu=m\mid \nu=n)$，而这两者在前面都已求得，从而
    $$
    \begin{align*}
        P(\nu-\mu=k) & = \sum_{j=0}^\infty P(\nu=k+j)P(\mu=j\mid \nu=k+j) \\
        & = \sum_{j=0}^\infty \dfrac{\lambda^{k+j}}{(k+j)!}e^{-\lambda}\dfrac{(k+j)!}{j!k!}p^j(1-p)^k \\
        & = \dfrac{(\lambda-\lambda p)^k}{k!}e^{-\lambda+\lambda p}\sum_{j=0}^\infty\dfrac{(\lambda p)^j}{j!}e^{-\lambda p} \\
        & = \dfrac{(\lambda-\lambda p)^k}{k!}e^{-\lambda+\lambda p}, k=0,1,\ldots
    \end{align*}
    $$

::: info （李贤平 3.18）

设二维随机变量 $(\xi,\eta)$ 的联合密度为
$$
p(x,y)=\frac{1}{\Gamma(k_1)\Gamma(k_2)}x^{k_1-1}(y-x)^{k_2-1}e^{y}
$$
$k_1>0,k_2>0,0<x\le y<\infty$. 试求 $\xi$ 与 $\eta$ 的边际分布密度.

:::

【解】

先求 $\xi$ 的边际密度，只需对 $y$ 积分
$$
\begin{align*}
    p_\xi(x)&=\dfrac{1}{\Gamma(k_1)\Gamma(k_2)}x^{k_1-1}\int_{x}^\infty (y-x)^{k_2-1}e^{y}\mathrm{d}y \\
    &=\dfrac{1}{\Gamma(k_1)\Gamma(k_2)}x^{k_1-1}\int_0^\infty t^{k_2-1}e^{t+x}\mathrm{d}(t+x) \\
    &=\dfrac{1}{\Gamma(k_1)\Gamma(k_2)}x^{k_1-1}e^{x}\int_0^\infty t^{k_2-1}e^{t}\mathrm{d}t \\
    &=\dfrac{1}{\Gamma(k_1)\Gamma(k_2)}x^{k_1-1}e^{x}\cdot\Gamma(k_2) \\
    &=\dfrac{x^{k_1-1}}{\Gamma(k_1)}e^{x}, x>0
\end{align*}
$$

对于 $\eta$ 的密度，我们使用以下技巧. 注意到
$$
p(x,y)=\frac{\Gamma(k_1+k_2)}{\Gamma(k_1)\Gamma(k_2)}\left(\frac{x}{y}\right)^{k_1-1}\left(1-\frac{x}{y}\right)^{k_2-1}\cdot\dfrac{y^{k_1+k_2-2}}{\Gamma(k_1+k_2)}e^{y}
$$
此时对 $x$ 积分，有
$$
\begin{align*}
    p_{\eta}(y)&=\dfrac{y^{k_1+k_2-2}}{\Gamma(k_1+k_2)}e^{y}\int_{0}^y\frac{\Gamma(k_1+k_2)}{\Gamma(k_1)\Gamma(k_2)}\left(\frac{x}{y}\right)^{k_1-1}\left(1-\frac{x}{y}\right)^{k_2-1}\mathrm{d}x \\
    &=\dfrac{y^{k_1+k_2-2}}{\Gamma(k_1+k_2)}e^{y}\cdot y\int_{0}^y\frac{\Gamma(k_1+k_2)}{\Gamma(k_1)\Gamma(k_2)}\left(\frac{x}{y}\right)^{k_1-1}\left(1-\frac{x}{y}\right)^{k_2-1}\mathrm{d}\frac{x}{y} \\
    &=\dfrac{y^{k_1+k_2-1}}{\Gamma(k_1+k_2)}e^{y}\cdot \int_{0}^1\frac{\Gamma(k_1+k_2)}{\Gamma(k_1)\Gamma(k_2)}t^{k_1-1}\left(1-t\right)^{k_2-1}\mathrm{d}t
\end{align*}
$$
由 $\mathrm{Beta}$ 函数的定义，立刻得到上式最后的积分值为 $1$，因此 $p_{\eta}(y)=\dfrac{y^{k_1+k_2-1}}{\Gamma(k_1+k_2)}e^{y}, y>0$.

【注】求解 $\eta$ 的密度过程中，通过提出 $y^{k_1+k_2+2}$，将积分区间转换至 $[0,1]$，且得到 $\mathrm{Beta}$ 函数形式，这一技巧将在《数理统计》课程中多次见到，将和 $\mathrm{Beta}$ 分布有着深刻的联系.

### 10.27

::: info （课本 3.15）

设随机变量 $X$ 和 $Y$ 相互独立，$X\sim\mathrm{Bin}(n,p)$，而 $Y$ 服从 $(0,1)$ 上的均匀分布，试求 $X+Y$ 的分布函数和密度函数.

:::

【解】

注意到对于任意的 $x\in\mathbb{R},\exist !k_x\in\mathbb{Z}$ 使得 $x-k_x\in[0,1)$. 我们记 $k_x=[x]$.

由于这样的分解是唯一的，有对于 $x\ge 0$，
$$
F(x)=P(X+Y\le x)=\sum_{i=0}^{[x]-1}P(X=i)+P(X=[x],0\le Y\le x-[x])
$$
为书写方便，记 $b_k=\displaystyle\binom{n}{k}p^k(1-p)^{n-k}$，从而
$$
F(x)=\sum_{i=0}^{[x]-1}b_i+b_{[x]}(x-[x]), 0\le x<n+1
$$
更完整而言，我们有
$$
F(x)=
\left\{\begin{matrix}
    0, & x<0 \\
    \displaystyle\sum_{i=0}^{[x]-1}b_i+b_{[x]}(x-[x]), & 0\le x<n+1 \\
    1, & x\ge n+1
\end{matrix}\right.
$$
求导得到密度函数
$$
p(x)=
\left\{\begin{matrix}
    \displaystyle\binom{n}{k}p^{[x]}(1-p)^{n-[x]}, & 0\le x < n+1 \\
    0, & \text{otherwise}
\end{matrix}\right.
$$

::: info （课本 3.16）

某银行有两个柜台，假设张伟走进银行时，他发现两个柜台正在接待吕布和曾贤. 张伟被告知一旦处理完吕布或曾贤的事情，就开始接待他. 如果每个柜台为每位服务的时间都服从参数为 $\lambda$ 的指数分布，那么三个人中，张伟是最后一个办完事情的概率是多大？

:::

【解】

借由本题我们讨论一个关于指数分布的经典结论.

::: tip 引理

设 $X,Y$ 分别独立地服从参数为 $\lambda_1,\lambda_2$ 的指数分布，则
$$
P(X<Y)=\frac{\lambda_1}{\lambda_1+\lambda_2}
$$

【证明】

直接计算
$$
\begin{align*}
    P(X<Y) & = \int_0^{+\infty}\int_0^y \lambda_1\mathrm{e}^{-\lambda_1 x}\cdot\lambda_2\mathrm{e}^{-\lambda_2 y}\mathrm{d}x\mathrm{d}y \\
    & = \int_0^{+\infty} \lambda_2\mathrm{e}^{-\lambda_2 y}\left[\mathrm{e}^{-\lambda_1 x}\right]\mid_{0}^y\mathrm{d}y \\
    & = \int_0^{+\infty} \lambda_2\mathrm{e}^{-\lambda_2 y}(1-\mathrm{e}^{-\lambda_1 y})\mathrm{d}y \\
    & = \int_0^{+\infty} \lambda_2\mathrm{e}^{-\lambda_2 y}\mathrm{d}y - \int_0^{+\infty} \lambda_2\mathrm{e}^{-(\lambda_1+\lambda_2) y}\mathrm{d}y \\
    & = 1 - \frac{\lambda_2}{\lambda_1+\lambda_2}\\
    & = \frac{\lambda_1}{\lambda_1+\lambda_2}

\end{align*}
$$

:::

容易知道吕布和曾贤的地位完全对称，不妨假设吕布先办完事情. 由指数分布的无记忆性，张伟开始服务时，曾贤办完事情的剩余时间仍然服从参数为 $\lambda$ 的指数分布. 设从此时开始，张伟办完事情的时间为 $X$，曾贤办完事情的时间为 $Y$，因此张伟最后一个办完事情的概率即为 $P(X>Y)=\dfrac{\lambda}{\lambda+\lambda}=\dfrac{1}{2}$.

【注】这个结论揭示了指数分布中的参数被称为「速率」的原因.

::: info （课本 3.17）

如果 $X$ 服从 $(a,b)$ 上的均匀分布，那么和 $X$ 有线性关系且服从 $(0,1)$ 上的均匀分布的随机变量是什么？

:::

【解】

一个容易的想法是反过来考虑，即若 $Y\sim U(0,1)$，应当如何施加线性变换使得 $cY+d\sim U(a,b)$.

置 $x\in(a,b)$，则
$$
P(cY+d\le x)=\frac{x-a}{b-a}
$$
而
$$
P(cY+d\le x)=P\left(Y\le \frac{x-d}{c}\right)=\frac{x-d}{c}
$$
这就得到
$$
    c=b-a,\quad d=a
$$
因此
$$
X=(b-a)Y+a \Rightarrow Y=\frac{X-a}{b-a}\sim U(0,1)
$$
这个结果是直观的.

::: info （课本 3.18）

设 $X$ 服从参数为 $\lambda$ 的指数分布，$Y=\left\{\begin{matrix}
X-K,  & X\ge 1 \\
-X^2,  & X<1
\end{matrix}\right.$，当 $K$ 的取值分别为 $0,2,4$ 时，求 $Y$ 的密度函数.

:::

【解】

有该变换分段单调，下面逐个情形讨论.

1. 若 $K=0$，则该变换是一个双射，且
    $$
    \frac{\mathrm{d}x}{\mathrm{d}y}=\left\{\begin{matrix}
        1,  & y\ge 1 \\
        -\dfrac{1}{2\sqrt{-y}},  & -1<y<0
    \end{matrix}\right.
    $$
    从而 $Y$ 的密度为
    $$
        q(y)=p(x)\left|\frac{\mathrm{d}x}{\mathrm{d}y}\right|=\left\{\begin{matrix}
        \lambda\mathrm{e}^{-\lambda y},  & y\ge 1 \\
        \dfrac{\lambda\mathrm{e}^{-\lambda \sqrt{-y}}}{2\sqrt{-y}},  & -1<y<0 \\
        0, & \text{otherwise}
        \end{matrix}\right.
    $$
2. 若 $K=2$，则有
    $$
    \frac{\mathrm{d}x}{\mathrm{d}y}=\left\{\begin{matrix}
        -\dfrac{1}{2\sqrt{-y}}, & 0<x<1 \\
        1, & x\ge 1
    \end{matrix}\right.
    $$
    从而 $-1\le y<0$ 时，有 $(0,1),[1,3)$ 均映射到该区间，从而密度计算如下
    $$
    q(y)=p(\sqrt{-y})\cdot|\dfrac{1}{2\sqrt{-y}}|+p(y+2)\cdot 1=\dfrac{\lambda\mathrm{e}^{-\lambda\sqrt{-y}}}{2\sqrt{-y}}+\lambda\mathrm{e}^{-\lambda(y+2)}
    $$
    而 $y\ge 0$ 时，仅有 $[2,+\infty)$ 映射到该区间，从而密度为
    $$
    q(y)=p(y+2)\cdot 1=\lambda\mathrm{e}^{-\lambda(y+2)}
    $$
    综上有
    $$
    q(y)=\left\{\begin{matrix}
        \dfrac{\lambda\mathrm{e}^{-\lambda\sqrt{-y}}}{2\sqrt{-y}}+\lambda\mathrm{e}^{-\lambda(y+2)}, & -1\le y<0 \\
        \lambda\mathrm{e}^{-\lambda(y+2)}, & y\ge 0 \\
        0, & \text{otherwise}
    \end{matrix}\right.
    $$
3. 若 $K=4$，则有
    $$
    \frac{\mathrm{d}x}{\mathrm{d}y}=\left\{\begin{matrix}
        -\dfrac{1}{2\sqrt{-y}}, & 0<x<1 \\
        1, & x\ge 1
    \end{matrix}\right.
    $$
    若 $-3\le y<-1$ 或 $y\ge 0$，只有 $[1,3)$ 或 $[4,+\infty)$ 映射到该区间，从而密度为
    $$
    q(y)=p(y+4)\cdot 1=\lambda\mathrm{e}^{-\lambda(y+4)}
    $$
    若 $-1\le y<0$，则 $[0,1),[3,4)$ 均映射到该区间，从而密度为
    $$
    q(y)=q(y)=p(\sqrt{-y})\cdot|-\dfrac{1}{2\sqrt{-y}}|+p(y+4)\cdot 1=\dfrac{\lambda\mathrm{e}^{-\lambda\sqrt{-y}}}{2\sqrt{-y}}+\lambda\mathrm{e}^{-\lambda(y+4)}
    $$
    综上有
    $$
    q(y)=\left\{\begin{matrix}
        \dfrac{\lambda\mathrm{e}^{-\lambda\sqrt{-y}}}{2\sqrt{-y}}+\lambda\mathrm{e}^{-\lambda(y+4)}, & -1\le y<0 \\
        \lambda\mathrm{e}^{-\lambda(y+4)}, & -3\le y<-1\quad \text{or}\quad y\ge 0 \\
        0, & \text{otherwise}
    \end{matrix}\right.
    $$

::: info （李贤平 3.20）

(1) 若 $(\xi,\eta)$ 的联合密度函数为
$$
f(x,y) = \left\{\begin{matrix}
    4xy, & 0\le x\le 1, 0\le y\le 1 \\
    0, & \text{其他}
\end{matrix}\right.
$$
问 $\xi$ 和 $\eta$ 是否相互独立？

(2) 若 $(\xi,\eta)$ 的联合密度函数为
$$
f(x,y) = \left\{\begin{matrix}
    8xy, & 0\le x\le y, 0\le y\le 1 \\
    0, & \text{其他}
\end{matrix}\right.
$$
问 $\xi$ 和 $\eta$ 是否相互独立？

:::

【解】

(1) 积分 $y$ 得到 $\xi$ 的边缘分布为 $p_\xi(x)=2x\displaystyle\int_0^1 2y\mathrm{d}y=2x$. 同理积分 $x$ 得到 $\eta$ 的边缘分布为 $p_\eta(y)=2y$. 从而 $f(x,y)=p_\xi(x)p_\eta(y)$，从而 $\xi$ 和 $\eta$ 相互独立.

(2) 积分 $y$ 得到 $\xi$ 的边缘分布为
$$
p_\xi(x)=2x\int_x^1 2y\mathrm{d}y=2x(1-x^2)
$$
积分 $x$ 得到 $\eta$ 的边缘分布为
$$
p_\eta(y)=2y\int_0^y 2x\mathrm{d}x=2y^3
$$
显然 $f(x,y)\neq p_\xi(x)p_\eta(y)$，从而 $\xi$ 和 $\eta$ 不相互独立.

【注】本题可以导出一个更常用的结论：若 $\xi,\eta$ 的取值集合不相互依赖，且可以将联合密度分解为 $f(x,y)=g(x)h(y)$，其中 $g,h$ 均为密度函数，则 $\xi,\eta$ 相互独立，且 $g(x),h(y)$ 正是它们的边缘密度.

::: info （李贤平 3.21）

若 $\xi,\eta$ 相互独立且皆以概率 $\dfrac{1}{2}$ 取值 $+1$ 及 $-1$，令 $\zeta=\xi\eta$，试证 $\xi,\eta,\zeta$ 两两独立但不相互独立.

:::

已经知道 $\xi,\eta$ 相互独立且地位相等，下面只需验证 $\xi$ 与 $\zeta$ 独立. 有 $P(\zeta=1)=P(\xi=1,\eta=1)+P(\xi=-1,\eta=-1)=\dfrac{1}{2}$，$P(\zeta=-1)=\dfrac{1}{2}$. 因此考虑任意的 $a,b\in\{-1,1\}$，从而 $\dfrac{a}{b}\in\{-1,1\}$，这就导出
$$
P(\zeta=a,\xi=b)=P\left(\eta=\dfrac{a}{b},\xi=b\right)=P\left(\eta=\dfrac{a}{b}\right)P(\xi=b)=\frac{1}{2}\cdot\frac{1}{2}=P(\zeta=a)\cdot P(\xi=b)
$$
这就说明了 $\xi$ 与 $\zeta$ 独立，从而 $\eta$ 与 $\zeta$ 独立.

然而，我们有
$$
P(\zeta=1,\xi=1,\eta=1)=1\neq P(\zeta=1)P(\xi=1)P(\eta=1)
$$
这说明它们不相互独立.

::: info （李贤平 3.22）

设 $(\xi,\eta)$ 具有联合密度函数
$$
p(x,y)=\left\{\begin{matrix}
    \dfrac{1+xy}{4}, & |x|<1,|y|<1 \\
    0, & \text{其他}
\end{matrix}\right.
$$
试证 $\xi,\eta$ 不独立，但 $\xi^2,\eta^2$ 是相互独立的.

:::

【解】

积分 $y$ 得到
$$
p_\xi(x)=\int_{-1}^1 \dfrac{1+xy}{4}\mathrm{d}y=\frac{1}{2}
$$
同理
$$
p_\eta(y)=\int_{-1}^1 \dfrac{1+xy}{4}\mathrm{d}d=\frac{1}{2}
$$
显然 $p(x,y)\neq\dfrac{1}{4}=p_\xi(x)p_\eta(y)$.

接下来考察 $\xi^2$ 和 $\eta^2$ 的联合分布. 我们有
$$
\begin{align*}
    P(\xi^2\le u,\eta^2\le v) & = \iint\limits_{\substack{x^2\le u \\ y^2\le v}}p(x,y)\mathrm{d}x\mathrm{d}y \\
    & = \int_{-\sqrt{u}}^{\sqrt{u}}\int_{-\sqrt{v}}^{\sqrt{v}}\frac{1}{4}\mathrm{d}y\mathrm{d}x+\int_{-\sqrt{u}}^{\sqrt{u}}\int_{-\sqrt{v}}^{\sqrt{v}}\frac{xy}{4}\mathrm{d}y\mathrm{d}x \\
    & = \sqrt{u}\cdot\sqrt{v}, \quad 0\le u<1,0\le v<1
\end{align*}
$$
而 $\xi^2$ 的分布为
$$
P(\xi^2\le u)=\int_{-\sqrt{u}}^{\sqrt{u}}\frac{1}{2}\mathrm{d}x=\sqrt{u}
$$
同理，$\eta^2$ 的分布为
$$
P(\eta^2\le v)=\int_{-\sqrt{v}}^{\sqrt{v}}\frac{1}{2}\mathrm{d}y=\sqrt{v}
$$
从而 $P(\xi^2\le u,\eta^2\le v)=P(\xi^2\le u)\cdot P(\eta^2\le v)$，即 $\xi^2,\eta^2$ 相互独立.

::: info （李贤平 3.25）

若 $\xi_1$ 与 $\xi_2$ 是独立随机变量，且 $\xi_1\sim B(n_1,p),\xi_2\sim B(n_2,p)$，试直接证明

(1) $\xi_1+\xi_2\sim B(n_1+n_2,p)$；

(2) $P(\xi_1=k|\xi_1+\xi_2=n)=\dfrac{\displaystyle\binom{n_1}{k}\binom{n_2}{n-k}}{\displaystyle\binom{n_1+n_2}{n}}$

:::

【解】

(1) 直接计算
$$
\begin{align*}
    P(\xi_1+\xi_2=k) & = \sum_{l=0}^k P(\xi_1=l)P(\xi_2=k-l) \\
    & = \sum_{l=0}^k\binom{n_1}{l}p^{l}(1-p)^{n_1-l}\cdot \binom{n_2}{k-l}p^{k-l}(1-p)^{n_2-k+l} \\
    & = p^k(1-p)^{n_1+n_2-k}\cdot\sum_{l=0}^k\binom{n_1}{l}\binom{n_2}{k-l} \\
    & = \binom{n_1+n_2}{k}p^k(1-p)^{n_1+n_2-k}
\end{align*}
$$
这正说明了 $\xi_1+\xi_2\sim B(n_1+n_2,p)$.

(2) 直接计算
$$
\begin{align*}
    P(\xi_1=k|\xi_1+\xi_2=n) & = \frac{P(\xi_1=k,\xi_2=n-k)}{P(\xi_1+\xi_2=n)} \\
    & = \frac{P(\xi_1=k)P(\xi_2=n-k)}{P(\xi_1+\xi_2=n)} \\
    & = \frac{\displaystyle\binom{n_1}{k}p^k(1-p)^{n_1-k}\cdot\binom{n_2}{k}p^{n-k}(1-p)^{n_2-n+k}}{\displaystyle\binom{n_1+n_2}{n}p^n(1-p)^{n_1+n_2-n}} \\
    & = \dfrac{\displaystyle\binom{n_1}{k}\binom{n_2}{n-k}}{\displaystyle\binom{n_1+n_2}{n}}
\end{align*}
$$

::: info （李贤平 3.27）

设 $\xi$ 的密度函数为 $p(x)$，求下列随机变量的分布密度函数：(1) $\eta=\xi^{-1}$；(2) $\eta=\tg\xi$；(3) $\eta=|\xi|$.

:::

(1) 反变换为 $\xi=\eta^{-1}$，从而
$$
p_1(y)=p(x)\left|\frac{\mathrm{d}x}{\mathrm{d}y}\right|=\frac{1}{y^2}p\left(\frac{1}{y}\right)
$$

(2) 反变换为 $\xi=\arctan \eta$，从而
$$
p_2(y)=p(x)\left|\frac{\mathrm{d}x}{\mathrm{d}y}\right|=\frac{1}{y^2+1}p\left(\arctan \eta\right)
$$

(3) 该变换不是单调变换，有
$$
x=\left\{\begin{matrix}
    y, & x\ge 0
    -y, & x<0
\end{matrix}\right.
$$
因此
$$
p_3(y)=p(y)\cdot 1+p(-y)\cdot|-1|=p(y)+p(-y)
$$

### 10.31

::: info （李贤平 3.34）

通称下列分布为**韦布尔分布**：
$$
F(x)=\left\{\begin{matrix}
    1-\mathrm{e}^{-\lambda x^\alpha}, & x> 0 \\
    0, & x\le 0
\end{matrix}\right.
$$
这是韦布尔（Weibull）在研究金属材料的疲劳寿命中导出的，在可靠性研究中有广泛应用.

若 $\xi_1,\xi_2,\ldots,\xi_n$ 相互独立、相同分布，并以 $\xi_1^*$ 记它们的最小值，(1) 当 $\xi_i\sim F(x)$ 时，试求 $\xi_1^*$ 的分布函数. (2) 若 $\xi_1^*\sim F(x)$，试导出 $\xi_i$ 的分布函数.

链条的寿命取决于最弱环节，试说明上述概率结论的实际含义.

:::

【解】

(1)
$$
P(\xi_1^* \le x) = 1 - P(\xi_1^*> x)=1-\prod_{i=1}^n P(\xi_i>x)=1-\mathrm{e}^{\lambda nx^\alpha}
$$
即 $\xi_1^*$ 服从参数为 $n\lambda$ 和 $\alpha$ 的韦布尔分布.

(2)
$$
1-\mathrm{e}^{\lambda x^\alpha}=P(\xi_1^* \le x) = 1 - P(\xi_1^*> x)=1-\prod_{i=1}^n P(\xi_i>x)=1-[1-P(\xi_i\le x)]^n
$$
从而
$$
1-P(\xi_i\le x)=\mathrm{e}^{\frac{\lambda x^\alpha}{n}} \Rightarrow P(\xi_i\le x)=1-\mathrm{e}^{\frac{\lambda x^\alpha}{n}}
$$
即 $\xi_1$ 服从参数为 $\dfrac{\lambda}{n}$ 和 $\alpha$ 的韦布尔分布.

这两个结论告诉我们，随着系统中部件数的增加，系统的整体寿命将进一步减少.

::: info （李贤平 3.37）

若 $\xi_1,\xi_2,\ldots,\xi_n$ 相互独立，均服从 $\mathrm{N}(0,1)$，试用 $(3.3.18)$ 式，化为 $n$ 维极坐标，证明 $\eta=\xi_1^2+\xi_2^2+\ldots+\xi_n^2$ 服从 $\chi^2$ 分布.

::: tip 随机向量函数的密度

若 $\eta=g(x_1,\ldots,x_n)$，而 $(x_1,\ldots,x_n)$ 的密度函数为 $p(x_1,\ldots,x_n)$，则

$$
G(y)=P(\eta<y)=\underset{g(x_1,\ldots,x_n)<y}{\int\ldots\int} p(x_1,\ldots,x_n)\mathrm{d}x_1\ldots\mathrm{d}x_n  \tag{3.3.18}
$$

:::

【解】

作变换
$$
\left\{\begin{align*}
    & \xi_1=r\cos\theta_1\cos\theta_2\ldots\cos\theta_{n-2}\cos\theta_{n-1} \\
    & \xi_2=r\cos\theta_1\cos\theta_2\ldots\cos\theta_{n-2}\sin\theta_{n-1} \\
    & \xi_3=r\cos\theta_1\cos\theta_2\ldots\sin\theta_{n-2} \\
    & \ldots \\
    & \xi_{n-1}=r\cos\theta_1\sin\theta_2 \\
    & \xi_n=r\sin\theta_1
\end{align*}\right.
$$
该变换的特性在于 $\eta=\xi_1^2+\xi_2^2+\ldots+\xi_n^2=r^2$.

记 $F(\boldsymbol{\theta})$ 为一个任意的关于 $\boldsymbol{\theta}=(\theta_1,\ldots,\theta_{n-1})$ 的函数. 从而该变换的 Jacobi 行列式为
$$
J=\left|\begin{matrix}
    F(\boldsymbol{\theta}) & r\cdot F(\boldsymbol{\theta}) & \ldots & r\cdot F(\boldsymbol{\theta}) \\
    F(\boldsymbol{\theta}) & r\cdot F(\boldsymbol{\theta}) & \ldots & r\cdot F(\boldsymbol{\theta}) \\
    \vdots & \vdots & & \vdots \\
    F(\boldsymbol{\theta}) & r\cdot F(\boldsymbol{\theta}) & \ldots & r\cdot F(\boldsymbol{\theta})
\end{matrix}\right| = r^{n-1}\cdot F(\boldsymbol{\theta})
$$

由式 $(3.3.18)$ 得
$$
\begin{align*}
    F_\eta(x) & = P(\eta\le x) \\
    & = \underset{\xi_1^2+\ldots+x_n^2<x}{\int\ldots\int} \dfrac{1}{(2\pi)^{n/2}}\exp\left(-\dfrac{x_1^2+\ldots+x_n^2}{2}\right)\mathrm{d}x_1\ldots\mathrm{d}x_n \\
    & = \dfrac{1}{(2\pi)^{n/2}} \int_0^{\sqrt{x}}r^{n-1}\mathrm{e}^{-r^2/2}\mathrm{d}r\cdot\int_0^\pi\ldots\int_0^\pi\int_0^{2\pi}F(\boldsymbol{\theta})\mathrm{d}\theta_1\ldots\mathrm{d}\theta_{n-1} \\
    & = C_n \int_0^{\sqrt{x}}r^{n-1}\mathrm{e}^{-r^2/2}\mathrm{d}r
\end{align*}
$$
这里 $C_n=\displaystyle\frac{1}{(2\pi)^{n/2}}\int_0^\pi\ldots\int_0^\pi\int_0^{2\pi}F(\boldsymbol{\theta})\mathrm{d}\theta_1\ldots\mathrm{d}\theta_{n-1}$.

作变换 $t=\sqrt{x}$，得到
$$
F_\eta(x)=C_n \frac{1}{2}
$$
令 $x\to \infty$，得到
$$
1 = C_n\cdot\frac{1}{2}\int_0^{+\infty} t^{\frac{n}{2}-1}\mathrm{e}^{-\frac{t}{2}}\mathrm{d}t=C_n\cdot\frac{1}{2}\cdot \frac{\Gamma(n/2)}{(1/2)^\frac{n}{2}}
$$
这就得到了 $C_n=\dfrac{1}{\displaystyle 2^{\frac{n}{2}-1}\Gamma(\frac{n}{2})}$. 因此
$$
F(x)=\dfrac{1}{\displaystyle 2^{\frac{n}{2}}\Gamma(\frac{n}{2})} \int_0^x t^{\frac{n}{2}-1}\mathrm{e}^{-\frac{t}{2}}\mathrm{d}t, x>0
$$
两端求导得到密度函数
$$
p(x)=\dfrac{1}{\displaystyle 2^{\frac{n}{2}}\Gamma(\frac{n}{2})} e^{-\frac{x}{2}}x^{\frac{n}{2}-1}, x>0
$$
这正是 $\chi^2$ 分布的密度.

::: info （李贤平 3.39）

若 $\xi,\eta$ 独立，且均服从 $\mathrm{N}(0,1)$，试求 $U=\xi^2+\eta^2$ 与 $V=\dfrac{\xi}{\eta}$ 的密度函数，并证明它们是独立的.

:::

【解】

该变换不易求逆变换，因此先求 $J^{-1}$.
$$
J^{-1}=\left|\begin{matrix}
    2x & 2y \\
    \dfrac{1}{y} & -\dfrac{x}{y^2}
\end{matrix}\right|=-\frac{2(x^2+y^2)}{y^2}=-2(v^2+1)
$$
因此 $|J|=\dfrac{1}{|J^{-1}|}=\dfrac{1}{2(v^2+1)}$.

注意到该变换是「二对一」的，因此 $U,V$ 的联合密度需要累加两部分. 记 $A=\{(x,y)\mid x\in\mathbb{R},y\le 0\}, B=\{(x,y)\mid x\in\mathbb{R},y>0\}$
$$
\begin{align*}
    q(u,v) & = p(x,y)|J|_A+p(x,y)|J|_B \\
    & = 2\cdot \frac{1}{2\pi} e^{-\frac{u}{2}} \frac{1}{2(1+v^2)} \\
    & = \dfrac{1}{2}e^{-\frac{u}{2}}\cdot \frac{1}{\pi(1+v^2)}
\end{align*}
$$
这就表明 $U\sim\mathrm{Exp}\left(\dfrac{1}{2}\right), V\sim\mathrm{Cauchy}(0,1)$，且它们相互独立. 它们的密度为
$$
p_U(u)=\dfrac{1}{2}e^{-\frac{u}{2}}, u>0
$$
$$
p_V(v)=\frac{1}{\pi(1+v^2)}, v\in\mathbb{R}
$$

::: info （李贤平 3.41）

对二元正态密度函数
$$
p(x,y)=\frac{1}{2\pi}\exp\left\{-\frac{1}{2}\left(2x^2+y^2+2xy-22x-14y+65\right)\right\}
$$

(1) 把它化为标准形式(3.2.22)；

(2) 指出 $\mu_1,\mu_2,\sigma_1,\sigma_2,\rho$；

(3) 求 $p_1(x)$；

(4) 求 $p(x\mid y)$.

::: tip 二元正态分布密度的标准形式

设 $(X,Y)$ 服从二元正态分布 $\mathrm{N}(\mu_1,\mu_2,\sigma_1^2,\sigma_2^2,\rho)$，则 $(X,Y)$ 的密度为
$$
\begin{align*}
    p(x,y) & = \frac{1}{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}}\exp\left\{-\frac{1}{2(1-\rho^2)}\times\right. \\
    & = \left. \left[\frac{(x-\mu_1)^2}{\sigma_1^2}-2\rho\frac{(x-\mu_1)(y-\mu_2)}{\sigma_1\sigma_2}+\frac{(y-\mu_2)^2}{\sigma_2^2}\right] \right\}
\end{align*} \tag{3.2.22}
$$

:::

【解】

(1) 整理如下
$$
\begin{align*}
    p(x,y) & = \dfrac{1}{2\pi\cdot 1\cdot \sqrt{2}\sqrt{1-\dfrac{1}{2}}} \\
    & \cdot \exp\left\{\frac{1}{2\left(1-\dfrac{1}{2}\right)}\left[(x-4)^2+2\frac{1}{\sqrt{2}}\dfrac{(x-4)(y-3)}{1\cdot\sqrt{2}}+\dfrac{(y-3)^2}{2}\right]\right\}
\end{align*}
$$

(2) 由 $(1)$ 得 $\mu_1=4,\mu_2=3,\sigma_1=1,\sigma_2=\sqrt{2},\rho=-\dfrac{1}{\sqrt{2}}$.

(3) 二元正态分布的边缘分布仍然是正态分布，从而据 (2) 得 $X$ 的边缘分布为
$$
p_1(x)=\dfrac{1}{\sqrt{2\pi}}\exp\left(-\frac{(x-4)^2}{2}\right)
$$

(4) 对于二元正态分布而言，其条件分布也是正态分布，从而可以通过求条件分布的均值和方差直接给出条件分布. 有条件均值和条件方差的计算公式为
$$
E(X\mid Y=y)=\mu_1+ \rho \cdot \left(\frac{\sigma_1}{\sigma_2}\right) \cdot (y - \mu_2)
$$
$$
\mathrm{Var}(X | Y=y) = \sigma_1^2 (1 - \rho^2)
$$
代入计算得到
$$
\mu_{X\mid Y=y}= 4 + \left(-\frac{1}{\sqrt{2}}\right)\cdot \left(\frac{1}{\sqrt{2}}\right) \cdot (y - 3)=\frac{11}{2} - \frac{y}{2}
$$
$$
\sigma_{x|y}^2 = 1^2 * (1 - \left(-\frac{1}{\sqrt{2}}\right)²) = 1 * \left(1 - \frac{1}{2}\right) = \frac{1}{2}
$$
因此
$$
p(x\mid y)=\frac{1}{\sqrt{\pi}}\exp\left\{-\left[x-\left(\frac{11}{2} - \frac{y}{2}\right)\right]^2\right\}
$$

## 期中考试

::: info 1

一个新闻社团有 $10$ 名骨干成员组成，如果每日分工是 $6$ 人负责外出采访，$2$ 人负责排版，$2$ 人负责审校. 那么一共有多少种分工方式可以对成员进行任务分配.

:::

【解】

$$
N=\binom{10}{6}\binom{4}{2}\binom{2}{2}=1260
$$

::: info 2

$A,B$ 是任意事件，证明：
$$
P(A\overline{B}\cup B\overline{A})=P(A)+P(B)-2P(AB)
$$

:::

【解】

显然 $A\overline{B}\subset\overline{B}$ 与 $B\overline{A}\subset\overline{A}$ 互斥，从而
$$
\begin{align*}
    P(A\overline{B}\cup B\overline{A}) & = P(A\overline{B})+P(B\overline{A}) \\
    & = P(A)-P(AB)+P(B)-P(AB) \\
    & = P(A)+P(B)-2P(AB)
\end{align*}
$$

::: info 3

现在有一副扑克牌（$54$ 张，含大小王），现在无放回地一张一张摸牌，问第二张 $\text{K}$ （一共有四种花色的 $\text{K}$）恰好摸出来时的摸牌数服从什么分布？请给出分布列表达式（包括变量取值范围）

:::

【解】

设第二张 $\text{K}$ 恰好摸出来时的摸牌数为 $X$，容易知道 $X\in\{2,3,\ldots,52\}$. 我们有

$$
\begin{align*}
    P(X=k) & = \frac{\displaystyle\binom{4}{1}\binom{50}{k-2}}{\displaystyle\binom{54}{k-1}}\cdot\frac{3}{54-(k-1)} \\
    & = \frac{12(k-1)(54-k)(53-k)}{54 \cdot 53 \cdot 52 \cdot 51}
\end{align*}
$$

这是**负超几何分布**.

【注】本题还可以用一个更简洁的思路思考：考虑 $\text{K}$ 的位置，此时共有 $\displaystyle\binom{54}{4}$ 种方法放置四张 $\text{K}$. 此时第 $k$ 个位置正好是第二张 $\text{K}$ 的情况数为
$$
\binom{k-1}{1}\binom{54-k}{2}
$$
从而所求概率为
$$
P(X=k) = \frac{\displaystyle\binom{k-1}{1}\binom{54-k}{2}}{\displaystyle\binom{54}{4}}
$$
这和前面求得的结果实际上是一致的.

::: info 4

某网络游戏公司为了检测玩家是否使用外挂，引入了一套 AI 检测系统. 已知：在全服玩家中，使用外挂的玩家约占 $1\%$. 当一名玩家使用外挂时，AI 系统有 $95\%$ 的几率能正确检测并报警. 当一名玩家没有使用外挂时，AI 系统有 $3\%$ 的几率会误报警（即“假阳性”）. 现在，随机抽取一名玩家，AI 系统对其发出了报警. 请回答以下问题

1. 定义相关事件，并写出题目中给出的所有已知概率.
2. 求该玩家确实使用了外挂的概率.（写出计算过程）
3. 尽管 AI 系统的准确率看起来很高，但你计算出的概率可能并不高. 请用通俗的语言解释为什么会出现这种现象.

:::

1. 在全服中随机抽取一个玩家，它使用外挂为事件 $M$；全服中随机抽取一个玩家，AI 系统对其发出报警为事件 $N$. 从而
    $$
    P(M)=0.01,\quad P(N\mid M)=0.95,\quad P(N\mid \overline{M})=0.03
    $$
2. 所求概率为 $P(M\mid N)$. 由 Bayes 公式为
    $$
    \begin{align*}
        P(M\mid N) & = \frac{P(N\mid M)P(M)}{P(N)} \\
        & = \frac{0.95\times 0.01}{0.95\times 0.01+0.03\times 0.99} \\
        & = \frac{95}{392}
    \end{align*}
    $$
3. 因为没用外挂的玩家基数过于庞大，即使误报率很低，产生的误报总人数也远远超过了被正确被 AI 系统识别出来的外挂玩家人数。

::: info 5

设随机变量 $\xi\sim N(\mu,\sigma^2)$，求常数 $a$ 满足 $P(\xi\ge a)=0.05$（用标准正态分布函数 $\Phi$ 或者 $\Phi^{-1}$ 表示）

:::

【解】

$$
P(\xi\ge a)=P\left(\frac{\xi-\mu}{\sigma}\ge \frac{a-\mu}{\sigma}\right)=1-\Phi\left(\frac{a-\mu}{\sigma}\right)=0.05
$$
从而
$$
a=\mu+\sigma\Phi^{-1}(0.95)
$$

::: info 6

甲乙两个饭店，一周七天，甲七天中每天都有 $\dfrac{1}{2}$ 的概率营业，乙是前六天每天都有 $\dfrac{1}{2}$ 的概率营业，周日一定休息. 求一周内甲比乙营业天数多的概率.

:::

【解】

（法一）记前六天甲和乙营业天数相同为事件A；前六天甲营业天数多于乙为事件B；前六天甲营业天数少于乙为事件C；前七天甲营业天数多于乙为事件M. 由于甲和乙在前六天的地位完全对称，从而
$$
P(A)=P(C)=\frac{1}{2}(1-P(B))
$$
现考虑第七天，考虑对前六天的状态取条件，由全概率公式得
$$
\begin{align*}
    P(M) & = P(M\mid A)P(A)+P(M\mid B)P(B)+P(M\mid C)P(C) \\
    & = 1\cdot P(A) + \frac{1}{2}\cdot P(B) + 0\cdot P(C) \\
    & = \frac{1}{2}(1-P(B)) + \frac{1}{2}P(B) \\
    & = \frac{1}{2}
\end{align*}
$$

（法二）设这七天中甲的营业天数为 $X$，乙的营业天数为 $Y$. 从而 $X\sim\mathrm{Bin}\left(7,\dfrac{1}{2}\right),Y\sim\mathrm{Bin}\left(6,\dfrac{1}{2}\right)$，因此对所有情况枚举如下

1. 当 $Y=0$ 时，需要 $X > 0$。有 $P(X>0) = 1 - P(X=0) = 1 - 1/128 = 127/128$，从而
    $$
    P_0=\frac{1}{64} \times \frac{127}{128} = \frac{127}{8192}
    $$
2. 当 $Y=1$ 时，需要 $X > 1$。有 $P(X>1) = 1 - P(X=0) - P(X=1) = 1 - 8/128 = 120/128$，从而
    $$
    P_1=\frac{6}{64} \times \frac{120}{128} = \frac{720}{8192}
    $$
3. 当 $Y=2$ 时，需要 $X > 2$。有 $P(X>2) = 1 - P(X\le2) = 1 - (1+7+21)/128 = 99/128$，从而
    $$
    P_2=\frac{15}{64} \times \frac{99}{128} = \frac{1485}{8192}
    $$
4. 当 $Y=3$ 时，需要 $X > 3$。有 $P(X>3) = P(X=4)+...+P(X=7) = (35+21+7+1)/128 = 64/128$，从而
    $$
    P_3=\frac{20}{64} \times \frac{64}{128} = \frac{1280}{8192}
    $$
5. 当 $Y=4$ 时，需要 $X > 4$。有 $P(X>4) = P(X=5)+P(X=6)+P(X=7) = (21+7+1)/128 = 29/128$，从而
    $$
    P_4=\frac{15}{64} \times \frac{29}{128} = \frac{435}{8192}
    $$
6. 当 $Y=5$ 时，需要 $X > 5$。有 $P(X>5) = P(X=6)+P(X=7) = (7+1)/128 = 8/128$，从而
    $$
    P_5=\frac{6}{64} \times \frac{8}{128} = \frac{48}{8192}
    $$
7. 当 $Y=6$ 时，需要 $X > 6$。有 $P(X>6) = P(X=7) = 1/128$，从而
    $$
    P_6=\frac{1}{64} \times \frac{1}{128} = \frac{1}{8192}
    $$

进而
$$
P(X>Y)=\sum_{i=0}^6 P_i=\frac{127+720+1485+1280+435+48+1}{8192}=\frac{4096}{8192}=\frac{1}{2}
$$

::: info 7

设随机变量 $\xi$ 和 $\eta$ 是两个相互独立的泊松分布，即 $\xi\sim\mathrm{Poi}(\lambda_1),\eta\sim\mathrm{Poi}(\lambda_2)$，求给定 $\xi+\eta$ 下 $\eta$ 的条件分布.

:::

【解】

由 Poisson 分布的可加性，得到 $\xi+\eta\sim\mathrm{Poi}(\lambda_1+\lambda_2)$. 从而
$$
\begin{align*}
    P(\eta=k\mid \xi+\eta=n) & = \frac{P(\eta=k, \xi+\eta=n)}{P(\xi+\eta=n)} \\
    & = \frac{P(\eta=k, \xi=n-k)}{P(\xi+\eta=n)} \\
    & = \frac{\dfrac{\lambda_2^k}{k!}\mathrm{e}^{-\lambda_2}\dfrac{\lambda_1^{n-k}}{(n-k)!}\mathrm{e}^{-\lambda_1}}{\dfrac{(\lambda_1+\lambda_2)^n}{n!}\mathrm{e}^{-(\lambda_1+\lambda_2)}} \\
    & = \binom{n}{k}\left(\frac{\lambda_2}{\lambda_1+\lambda_2}\right)^k\left(\frac{\lambda_1}{\lambda_1+\lambda_2}\right)^{n-k},\quad k=0,1,\ldots, n
\end{align*}
$$
这意味着给定 $\xi+\eta$ 下 $\eta$ 服从二项分布.

::: info 8

设相互独立的两个随机变量 $\xi_1$ 和 $\xi_2$ 都服从尺度参数相同的伽马分布，但形状参数不必相同. 即 $\xi_1\sim\mathrm{Ga}(\alpha_1,\lambda),\xi_2\sim\mathrm{Ga}(\alpha_2,\lambda)$. 求 $\dfrac{\xi_1}{\xi_1+\xi_2}$ 的分布. 已知伽马随机变量的密度为
$$
\mathrm{Ga}(x;\alpha,\lambda)=\dfrac{\lambda^\alpha}{\Gamma(\alpha)}x^{\alpha-1}\mathrm{e}^{-\lambda x}, x>0
$$

:::

【解】

$\xi_1,\xi_2$ 的联合密度为
$$
\begin{align*}
    p(x_1,x_2)&=\dfrac{\lambda^{\alpha_1}}{\Gamma(\alpha_1)}x_1^{\alpha_1-1}\mathrm{e}^{-\lambda x_1}\cdot \dfrac{\lambda^{\alpha_2}}{\Gamma(\alpha_2)}x_2^{\alpha_2-1}\mathrm{e}^{-\lambda x_2}\\
    &=\dfrac{\lambda^{\alpha_1+\alpha_2}}{\Gamma(\alpha_1)\Gamma(\alpha_2)}x_1^{\alpha_1-1}x_2^{\alpha_2-1}\mathrm{e}^{-\lambda (x_1+x_2)}
\end{align*}
$$

考虑变量替换 $S=\dfrac{\xi_1}{\xi_1+\xi_2},T=\xi_1+\xi_2$，其反变换为 $\xi_1=ST,\xi_2=T-ST=T(1-S)$，从而 Jacobi 行列式为
$$
J=\left|\begin{matrix}
    t & s \\
    -t & 1-s
\end{matrix}\right|=t
$$
进而 $|J|=t$. 从而 $S,T$ 的联合分布为
$$
\begin{align*}
    q(s,t)=p(x_1,x_2)|J|&=\dfrac{\lambda^{\alpha_1+\alpha_2}}{\Gamma(\alpha_1)\Gamma(\alpha_2)}(st)^{\alpha_1-1}(t-st)^{\alpha_2-1}\mathrm{e}^{-\lambda t}\cdot t\\
    &=\dfrac{\lambda^{\alpha_1+\alpha_2}}{\Gamma(\alpha_1)\Gamma(\alpha_2)} t^{\alpha_1+\alpha_2-1} \mathrm{e}^{-\lambda t} \cdot s^{\alpha_1-1}(1-s)^{\alpha_2-1}
\end{align*}
$$
最后通过积分 $T$ 得到 $S$ 的边缘分布
$$
\begin{align*}
    q_S(s) & = s^{\alpha_1-1}(1-s)^{\alpha_2-1}\int_0^\infty \dfrac{\lambda^{\alpha_1+\alpha_2}}{\Gamma(\alpha_1)\Gamma(\alpha_2)} t^{\alpha_1+\alpha_2-1} \mathrm{e}^{-\lambda t} \mathrm{d}t \\
    & = \dfrac{\Gamma(\alpha_1+\alpha_2)}{\Gamma(\alpha_1)\Gamma(\alpha_2)}s^{\alpha_1-1}(1-s)^{\alpha_2-1}
\end{align*}
$$
这便是 $\dfrac{\xi_1}{\xi_1+\xi_2}$ 的分布，事实上它正是 $\mathrm{Be}(\alpha_1,\alpha_2)$.

## 拓展内容

::: tip 次序统计量

对于一组独立同分布的随机变量 $X_1,\ldots,X_n\sim F(x)$，将它们从小到大排成如下的一列如下
$$
X_{(1)}\le X_{(2)}\le \ldots X_{(n)}
$$
其中排在第 $k$ 个位置的记作 $X_{(k)}$，称为这组随机变量的第 $k$ 次序统计量. 特别地，$X_{(1)}$ 称为最小次序统计量，而 $X_{(n)}$ 称为最大次序统计量.

:::

次序统计量的密度由如下式子给出
$$
p_k(x)=\frac{n!}{(k-1)!(n-k)!}[F(x)]^{k-1}[1-F(x)]^{n-k}p(x)
$$
特别地，最小次序统计量的密度为 $p_1(x)=np(x) [1-F(x)]^{n-1}$，而最大次序统计量的密度为 $p_n(x)=np(x) [F(x)]^{n-1}$.

【证明】

使用概率元进行证明，即考虑一个极小区间 $[x,x+\Delta x)$ 上的概率，此时概率转化为一个多项分布，即共有 $k-1$ 个随机变量的值落在 $(-\infty,x)$ 内，而有 $n-k$ 个随机变量的值落在 $[x+\Delta x,+\infty)$ 内，而**只有一个**随机变量的值落在 $[x,x+\Delta x)$ 中，这可以通过取足够小的 $\Delta x$ 来做到. 从而
$$
\begin{align*}
    P(x\le X_{(k)}<x+\Delta x) = & \frac{n!}{(k-1)!\cdot 1!\cdot (n-k)!}\cdot [F(x)]^{k-1} \\
     & \cdot [F(x+\Delta x)-F(x)]^1 \cdot [1-F(x+\Delta x)]^{n-k}
\end{align*}
$$
从而由密度函数的定义，有
$$
\begin{align*}
    p_k(x) & = \lim_{\Delta x\to 0}\frac{F_k(x+\Delta x)-F_k(x)}{\Delta x} \\
    & = \lim_{\Delta x\to 0}\frac{P(x\le X_{(k)}<x+\Delta x)}{\Delta x} \\
    & = \frac{n!}{(k-1)!\cdot 1!\cdot (n-k)!}[F(x)]^{k-1}\cdot \lim_{\Delta x\to 0}\frac{F(x+\Delta x)-F(x)}{\Delta x}\cdot \lim_{\Delta x\to 0} [1-F(x+\Delta x)]^{n-k} \\
    & = \frac{n!}{(k-1)!\cdot 1!\cdot (n-k)!}[F(x)]^{k-1}[1-F(x)]^{n-k}p(x)
\end{align*}
$$
令 $k=1,n$ 就可以得到最小，最大次序统计量的分布.

更进一步地，我们可以求得任意两个次序统计量的联合分布.
$$
p_{i,j}(x_i,x_j)=\frac{n!}{(i-1)!(j-i-1)!(n-j)!}[F(x_i)]^{i-1}[F(x_j)-F(x_i)]^{j-i-1}[1-F(x_j)]^{n-j}p(x_i)p(x_j)
$$
同样利用概率元求解，这里留给读者推导. 这个式子说明任意两个次序统计量都是不独立的.

最后，我们可以求得所有的 $n$ 个次序统计量的联合分布如下
$$
p(x_1,\ldots,x_n)=n!\prod_{i=1}^n p(x_i)
$$
