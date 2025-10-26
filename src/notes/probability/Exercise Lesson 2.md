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

若 $f_1(x),f_2(y)$ 是分布函数，求为使 $f(x,y)=f_1(x)\times f_2(y)+h(x,y)$ 称为密度函数，$h(x,y) 必须而且只须满足什么条件$.

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
