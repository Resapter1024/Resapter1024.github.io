---
title: 概率论第二次习题课
category:
  - 概率论
tag:
  - 学习
  - 数学
date: 2025-10-12
# 禁止显示页脚
footer: false
---

## 习题解答

### 9.15

::: info （李贤平 1.12）

袋中装有 $1,2,\ldots,N$ 号的球各一只，采用 (1) 有放回；(2) 不放回方式摸球，试求在第 $k$ 次摸球时首次摸到 $1$ 号球的概率.

:::

【解】

(1) 有放回场合下，每一次抽球抽到 $1$ 号球的概率均为 $\dfrac{1}{N}$，因此首次摸到 $1$ 号球的概率为
$$
P_k=\frac{1}{N}\cdot\left(\frac{N-1}{N}\right)^{k-1}=\frac{(N-1)^{k-1}}{N^k}
$$
事实上这就是参数 $p=\dfrac{1}{N}$ 的**几何分布**的分布列.

(2) 无放回场合下，有两种思路来计算这个概率.

1. 此时题目等价于**开锁模型**，即求从若干把不同的钥匙中依次尝试，第 $k$ 次打开锁的概率. 这个概率可以如下求得：
    $$
    P_k=\frac{N-1}{N}\cdot\frac{N-2}{N-1}\cdot\ldots\cdot\frac{N-k+1}{N-k+2}\cdot\frac{1}{N-k+1}=\frac{1}{N}
    $$
    上面这个等式的实质是乘法公式. 这表明无放回场合下在第 $k$ 次摸球时首次摸到 $1$ 号球的概率总是 $\frac{1}{N}$，与 $k$ 无关.
2. 我们考虑将所有球按顺序取出，此时的取法总数为一个全排列，即 $N!$；而第 $k$ 次摸球首次摸到 $1$ 号球表明其余的球的取法均是自由的，即共有 $(N-1)!$ 种取法. 因此所求的概率为
    $$
    P_k=\frac{(N-1)!}{N!}=\frac{1}{N}
    $$

::: info （李贤平 1.13）

从 $6$ 双不同的手套中任选 $4$ 只，问其中恰有一双配对的概率是多少.

:::

【解】

本题是典型的古典概型内容. $6$ 双手套共 $12$ 只，故总样本点数量为 $\displaystyle\binom{12}{4}$；需要恰好取得一双，可以认为先从 $6$ 双手套中取出 $1$ 双，再从其余的 $5$ 双袜子中取两只，且它们不能来自同一双袜子. 因此可以先取两双袜子，再从每双中的两只各取一只，因此符合条件的样本点数共有 $\displaystyle\binom{6}{1}\binom{5}{2}\binom{2}{1}\binom{2}{1}$. 综上，所求概率为
$$
\frac{\displaystyle\binom{6}{1}\binom{5}{2}\binom{2}{1}\binom{2}{1}}{\displaystyle\binom{12}{4}}=\frac{16}{33}
$$

::: info （李贤平 1.14）

从 $n$ 双不同的鞋子中任取 $2r(2r<n)$ 只，求下列事件发生的概率：(1) 没有成对的鞋子；(2) 只有一对鞋子；(3) 恰有两对鞋子；(4) 有 $r$ 对鞋子.

:::

【解】

本题是 1.13 的推广，核心思想仍为：先取出成对的鞋子，再取出单个的鞋子. 总样本点数量为 $\displaystyle\binom{2n}{2r}$

(1) 没有成对的鞋子，即每只鞋子都来自不同的一对，因此需要先在 $n$ 对鞋子中取 $2r$ 对鞋子，再在每对鞋子中的两只中任取一只. 因此满足条件的样本点数量为 $\displaystyle\binom{n}{2r}2^{2r}$，从而所求概率为
$$
P_0=\frac{\displaystyle\binom{n}{2r}2^{2r}}{\displaystyle\binom{2n}{2r}}
$$

(2) 只有一对鞋子，因此先取出它，取法有 $\displaystyle\binom{n}{1}$ 种. 再从其余的 $n-1$ 对鞋子种取出 $2r-2$ 只鞋子，且它们不成对，这就转化为了 (1) 的问题，此时共有 $\displaystyle\binom{n-1}{2r-2}2^{2r-2}$ 种取法. 从而所求概率为
$$
P_1=\frac{\displaystyle\binom{n}{1}\binom{n-1}{2r-2}2^{2r-2}}{\displaystyle\binom{2n}{2r}}
$$

(3) 恰有两对鞋子，因此先取出它们，取法有 $\displaystyle\binom{n}{2}$ 种. 再从其余的 $n-2$ 对鞋子种取出 $2r-4$ 只鞋子，且它们不成对，这也转化为了 (1) 的问题，此时共有 $\displaystyle\binom{n-2}{2r-4}2^{2r-4}$ 种取法. 从而所求概率为
$$
P_2=\frac{\displaystyle\binom{n}{2}\binom{n-2}{2r-4}2^{2r-4}}{\displaystyle\binom{2n}{2r}}
$$

(4) 有 $r$ 对鞋子，因此只需要取出它们，取法有 $\displaystyle\binom{n}{r}$ 种. 从而所求概率为
$$
P_r=\frac{\displaystyle\binom{n}{r}}{\displaystyle\binom{2n}{2r}}
$$

::: info （李贤平 1.15）

$m$ 个男孩和 $n$ 个女孩 $n\le m$ 随机沿圆桌坐下，试求任意两个女孩都不相邻的概率.

:::

【解】

本题涉及到圆排列. 如果是 $n$ 个人排成一条直线，排列总数为 $n!$；但由于圆具有旋转对称性，将一个圆上的排列进行旋转，得到的排列和之前的排列等价. 因此 $n$ 个人的圆排列总数为 $\dfrac{n!}{n}=(n-1)!$.

具体在本题中，共有 $m+n$ 人参与排列，因此样本点总数为 $(m+n-1)!$. 此时先考虑男生落座，共有 $(m-1)!$ 种排列，再考虑将 $n$ 个女生安排在男生落座后产生的 $m$ 个空位中，因此选出这 $n$ 个座位共有 $\displaystyle\binom{m}{n}$ 种取法. 需要注意，由于男生落座后，产生的 $m$ 个空位不再像普通的圆排列一样具有旋转对称性了，所以在这 $n$ 个座位中安排女生落座共有 $n!$ 中方法. 因此符合要求的样本点总数为 $(m-1)!n!\displaystyle\binom{m}{n}$. 从而所求概率为
$$
P=\frac{(m-1)!n!\displaystyle\binom{m}{n}}{(m+n-1)!}=\frac{\displaystyle\binom{m}{n}}{\displaystyle\binom{m+n-1}{n}}
$$

::: info （李贤平 1.16）

甲、乙二人各出赌注 $a$，约定谁先胜三局则赢得全部赌注，现已赌三局，甲二胜一负，这时因故终止赌博，若二人赌技相同，问应如何分配赌注，才算公平合理.

:::

【解】

二人赌技相同说明两人在一次赌局中的胜利概率均为 $\dfrac{1}{2}$. 此时应当按照如果赌局继续进行，两人最终获胜的概率来分配赌注. 甲最终获胜只需赢下第四局，或输掉第四局后赢下第五局即可. 因此甲获胜的概率为
$$
P_{\text{甲}}=\dfrac{1}{2}+\dfrac{1}{2}\cdot\dfrac{1}{2}=\dfrac{3}{4}
$$
注意总赌注为 $2a$，从而甲应当分得 $\dfrac{3}{2}a$，而乙应分得 $\dfrac{1}{2}a$.

::: info （李贤平 1.17）

从 $52$ 张扑克牌中任意取出 $13$ 张，求：

(1) 有 $5$ 张黑桃，$3$ 张红心，$3$ 张方块，$2$ 张草花的概率；

(2) 牌型分布为 $7$-$3$-$2$-$1$（最长花色有 $7$ 张，最短花色有 $1$ 张，其余二花色分别有 $3$ 张及 $2$ 张）的概率.

:::

【解】

本题是经典的古典概型问题. 样本点总数为 $\displaystyle\binom{52}{13}$.

(1) 这实际上就是从每类牌中取出对应数量的牌，由于分步取得所以可以使用乘法原理得到符合条件的样本点总数为
$$
\binom{13}{5}\binom{13}{3}\binom{13}{3}\binom{13}{2}
$$
因此所求概率为
$$
P_1=\frac{\displaystyle\binom{13}{5}\binom{13}{3}\binom{13}{3}\binom{13}{2}}{\displaystyle\binom{52}{13}}
$$
这个概率计算的实质是一个**多变量超几何分布**.

(2) 本题条件下每种牌中取出的数量都不一样，这实际上简化了我们的思维量：只需要考虑一个特定情况（如取出 $7$ 张黑桃，$3$ 张红心，$2$ 张方块，$1$ 张草花）的概率，再乘以所有的花色的排列数即可. 因此符合条件的样本点总数为
$$
4!\cdot \binom{13}{7}\binom{13}{3}\binom{13}{2}\binom{13}{1}
$$
因此所求概率为
$$
P_2=\frac{4!\cdot \displaystyle\binom{13}{7}\binom{13}{3}\binom{13}{2}\binom{13}{1}}{\displaystyle\binom{52}{13}}
$$

【思考】(3) 求牌型分布为 $5$-$3$-$3$-$2$ 的概率.

### 9.19

::: info （李贤平 1.20）

从装有号码 $1,2,\ldots,N$ 的球的箱子中有放回地摸了 $n$ 次球，依次记下其号码，试求这些号码按严格上升次序排列的概率.

:::

【解】

本题为有放回摸球，因此样本点总数为 $N^n$. 由于需要取出 $n$ 次球的号码**严格**上升，我们首先需要取出 $n$ 个完全不同的球. 考虑它们的顺序，取出 $n$ 个不同球的总取法为 $\dfrac{N!}{(N-n)!}$. 其中，只有唯一一种取法可以让取出的号码严格上升，因此符合题意的总取法为
$$
\dfrac{N!}{(N-n)!}\cdot \frac{1}{n!}=\binom{N}{n}
$$
因此所求概率为
$$
P=\frac{\displaystyle\binom{N}{n}}{N^n}
$$

::: info （李贤平 1.22）

任意从数列 $1,2,\ldots,N$ 中不放回地取出 $n$ 个数并按大小排列成 $x_1<x_2<\ldots<x_m<\ldots<x_n$，试求 $x_m=M$ 的概率，这里 $1\le M\le N$.

:::

【解】

可以证明，不放回地取出 $n$ 个数并按大小排列它们得到的排列实质上和不放回取出 $n$ 个数的组合之间存在一一对应. 因此可以从组合的视角来解决这个排列问题. 在组合视角下，样本点总数为 $\displaystyle\binom{N}{n}$. 为了使 $x_m=M$，我们必须从前 $M-1$ 个数中取出 $m-1$ 个，而从后 $N-M$ 个数中取出 $n-m$ 个，因此符合题意的样本点总数为
$$
\binom{M-1}{m-1}\binom{1}{1}\binom{N-M}{n-m}
$$
从而所求概率为
$$
P=\frac{\displaystyle\binom{M-1}{m-1}\binom{1}{1}\binom{N-M}{n-m}}{\displaystyle\binom{N}{n}}
$$

::: info （李贤平 1.24）

从 $(0,1)$ 中随机地取两个数，求下列概率：

(1) 两数之和小于 $1.2$；

(2) 两数之积小于 $\dfrac{1}{4}$；

(3) 以上两个要求同时满足.

:::

【解】

这是一个经典的几何概型问题. 由于是从 $(0,1)$ 中随机地取两个数，记两个数分别为 $x,y$，则样本空间为平面直角坐标系上的一个单位正方形.

(1) 需要 $x+y< 1.2$，即求单位正方形在直线 $x+y=1.2$ 下方的面积.

![两数之和小于 $1.2$](/assets/images/exercise%20lesson/geo-prob1.svg#center)

计算得到 $x+y=1.2$ 与单位正方形的边相交于 $(0.2,1)$ 和 $(1,0.2)$，因此所求面积为
$$
S_1=1-\frac{1}{2}\times (1-0.2)^2=0.68
$$
从而所求概率为
$$
P_1=\frac{S_1}{S_\Omega}=\frac{0.68}{1}=0.68
$$

(2) 需要 $xy<\dfrac{1}{4}$，即求单位正方形在双曲线 $xy=\dfrac{1}{4}(x>0)$ 下方的面积. 联立 $xy=\dfrac{1}{4}$ 和 $y=1$ 得到 $(x,y)=\left(\dfrac{1}{4},1\right)$.

![两数之积小于 $\dfrac{1}{4}$](/assets/images/exercise%20lesson/geo-prob2.svg#center)

因此所求面积为
$$
S_2=1\times\frac{1}{4}+\int_{1/4}^1 \frac{1}{4x}\mathrm{d}x=\frac{1}{4}+\frac{1}{2}\ln 2
$$
从而所求概率为
$$
P_2=\frac{S_2}{S_\Omega}=\frac{S_2}{1}=\frac{1}{4}+\frac{1}{2}\ln 2
$$

(3) 在以上两个条件同时满足时，我们必须确定图形的画法. 联立 $xy=\dfrac{1}{4}$ 和 $x+y=1.2$，解得 $x=\dfrac{6\pm\sqrt{11}}{10}$. 因此，目标图形可以看作 (1) 中求解的多边形中挖去 $xy=\dfrac{1}{4}$ 和 $x+y=1.2$ 围成的图形.

![两个条件同时满足](/assets/images/exercise%20lesson/geo-prob3.svg#center)

先求 $xy=\dfrac{1}{4}$ 和 $x+y=1.2$ 围成图形的面积. 记 $x_1=\dfrac{6-\sqrt{11}}{10}, x_2=\dfrac{6+\sqrt{11}}{10}$, 则该面积为
$$
\begin{align*}
  S & = \int_{x_1}^{x_2} \left((1.2-x)-\frac{1}{4x}\right)\mathrm{d}x \\
  & = 1.2(x_2-x_1)-\frac{1}{2}(x_2^2-x_1^2)-\frac{1}{4}(\ln x_2-\ln x_1) \\
  & = \frac{3\sqrt{11}}{25} - \frac{1}{2}\ln\left(\frac{6+\sqrt{11}}{5}\right)
\end{align*}
$$
因此所求图形的面积为
$$
\begin{align*}
  S_3 & = S_1-S \\
  & =0.68-\frac{3\sqrt{11}}{25} - \frac{1}{2}\ln\left(\frac{6+\sqrt{11}}{5}\right) \\
  &=\dfrac{17 - 3\sqrt{11}}{25} + \dfrac{1}{2}\ln\left(\dfrac{6+\sqrt{11}}{5}\right)
\end{align*}
$$
从而所求概率为
$$
P_3=\frac{S_3}{S_\Omega}=\frac{S_3}{1}=\dfrac{17 - 3\sqrt{11}}{25} + \dfrac{1}{2}\ln\left(\dfrac{6+\sqrt{11}}{5}\right)\approx 0.5932
$$

::: info （李贤平 1.26）

在一张打上方格的纸上投一枚直径为 $1$ 的硬币，方格要多小才能使硬币与线不相交的概率小于 $1\%$.

:::

【解】

设方格的边长为 $a$，我们可以将硬币简化为它的中心，考虑该中心点距离所有网格线的的距离都大于 $\dfrac{1}{2}$ 的概率. 由于对称性，我们可以只考虑在一个正方形内的情形. 设该方格的左下角顶点为 $(0,0)$，硬币中心的坐标为 $(x,y)$，由此确定了一个样本空间 $\Omega=[0,a]\times[0,a]$. 由于该中心点离正方形的四边距离均大于 $1$，可以得到下面的不等式
$$
\dfrac{1}{2}<x<a-\dfrac{1}{2}
$$
$$
\dfrac{1}{2}<y<a-\dfrac{1}{2}
$$
它确定了我们的目标区域，其面积为 $S=(a-1)^2$，因此硬币中心落到该区域的概率为
$$
P=\frac{S}{S_\Omega}=\frac{(a-1)^2}{a^2}=(1-\frac{1}{a})^2<1\%
$$
解得 $a<\dfrac{10}{9}$.

::: info （李贤平 1.42）

父，母，子三人举行比赛，每局总有一人胜一人负（没有和局），每局的优胜者就与未参加此局的人再进行比赛，如果某人首先胜了两局，则他就是整个比赛的优胜者，由父决定第一局由哪两个人参加，其中儿子实力最强，所以父为了使自己得胜的概率达到最大，就决定第一局由他与妻子先比赛，试证父的决策为最优策略（任何一对选手中一人胜对方的概率在整个比赛中是不变的.

:::

【解】

注意到比赛至多进行4局，下面分析三种不同开局下父亲获胜的概率 $P_{k}$. 为方便分别用 $1,2,3$ 表示父、母和子，且用 $p_{ij}$ 记 $i$ 战胜 $j(i,j\in\{1,2,3\})$.

1. 题设的情况，即父先与母比赛. 此时 $P_1=p_{12}p_{13}+p_{12}p_{31}p_{23}p_{12}+p_{21}p_{32}p_{13}p_{12}=p_{12}p_{13}+p_{12}^2 p_{31}p_{23}+p_{21}p_{32}p_{13}p_{12}$;
2. 若父先与子比赛，此时 $P_2=p_{13}p_{12}+p_{13}^2 p_{21}p_{32}+p_{31}p_{23}p_{12}p_{13}$.
3. 若母先与子比赛，则父亲必须连续赢下母和子，与第一局谁赢下无关，所以 $P_3=p_{12}p_{13}$.

此时显然有 $P_1>P_3$，所以只需要证明 $P_1>P_2$. 下面计算 $P_1-P_2$.
$$
\begin{align*}
  P_1-P_2&=p_{21}p_{32}p_{13}(p_{12}-p_{13})+p_{31}p_{23}p_{12}(p_{12}-p_{13})\\
  &=(p_{12}-p_{13})(p_{21}p_{32}p_{13}+p_{31}p_{23}p_{12})
\end{align*}
$$
注意到后一项一定为正，所以整个式子的正负仅取决于第一项的正负. 已知儿子实力最强，因此父亲战胜儿子的概率将小于父亲战胜母亲的概率，因此有 $P_1>P_2$. 这就证明了父亲的策略是最优的.

::: info （李贤平 1.45）

证明：$|P(AB)-P(A)P(B)|\le\dfrac{1}{4}$，并讨论等号成立的条件.

:::

【解】

这里提供两种做法.

（法一）一方面，使用全概率公式
$$
\begin{align*}
  P(A)P(B)-P(AB) & = P(A) [P(AB)+P(\bar{A} B)]-P(AB) \\
  &=P(A)P(\bar{A}B)-P(AB) [1-P(A)] \\
  &\le P(A)P(\bar{A}B) \\
  &\le P(A) [1-P(A)]\le \dfrac{1}{4}
\end{align*}
$$
另一方面，不妨设 $P(A)\ge P(B)$，则
$$
P(AB)-P(A)P(B)\le P(B)-P(B)^2\le \dfrac{1}{4}
$$
这就证明了结论.

可以看出，上面不等式当且仅当 $P(A)=P(B)=\dfrac{1}{2}$，且 $A=B$ 或 $A=\bar{B}$ 几乎处处成立时等号成立.

（法二）考虑事件 $A,B$ 的示性 $I_A,I_B$, 事件的概率即期望的示性，从而
$$
|P(AB)-P(A)P(B)|=|E(I_AI_B)-E(I_A)E(I_B)|=|\mathrm{Cov}(I_A,I_B)|
$$
考虑 Cauchy-Schwarz 不等式，得到 $|\mathrm{Cov}(I_A,I_B)|\le \sqrt{\mathrm{Var}(I_A)\mathrm{Var}(I_B)}$.

又
$$
\mathrm{Var}(I_A)=E(I_A^2)-E(I_A)^2=E(I_A)-E(I_A)^2=P(A)(1-P(A))\le\dfrac{1}{4}
$$
同理 $\mathrm{Var}(I_B)\le\dfrac{1}{4}$. 这两个不等式的取等条件为 $P(A)=P(B)=\dfrac{1}{2}$.

这就得到了 $|P(AB)-P(A)P(B)|\le \sqrt{\dfrac{1}{4}\cdot \dfrac{1}{4}}=\dfrac{1}{4}$.

Cauchy-Schwarz 不等式取等的条件为 $I_B=aI_A+b$ 几乎处处成立，即两个随机变量几乎处处成线性关系. 由于示性函数只能取 $0,1$，从而 $b$ 一定是 $0$ 或 $1$. 若 $b=0$，则一定有 $a=1$，此时表明 $A=B$ 几乎处处成立；若 $b=1$，则一定有 $a=-1$，这表明 $A=\bar{B}$ 几乎处处成立. 因此原不等式的取等条件为 $P(A)=P(B)=\dfrac{1}{2}$，且 $A=B$ 或 $A=\bar{B}$ 几乎处处成立.

::: info 有限可加性和上连续性可推出可列可加性

在概率空间 $(\Omega,\mathcal{F},P)$ 中，若概率 $P$ 满足：

1. **有限可加性**：对有限个事件 $A_1,\ldots,A_n\in\mathcal{F}$，有
    $$
    P\left(\bigcup_{i=1}^n A_i\right)=\sigma_{i=1}^n P(A_i)
    $$
2. **上连续性**：对事件列 $\{C_n\}\subset\mathcal{F}$ 满足 $C_n\supset C_{n+1}$，有
    $$
    P\left(\bigcap_{n=1}^\infty C_n\right)=\lim_{n\to\infty} P(C_n)
    $$

则 $P$ 满足**可列可加性**，即对事件列 $\{A_n\}\subset\mathcal{F}$
$$
P\left(\bigcup_{n=1}^\infty A_n\right)=\sigma_{n=1}^\infty P(A_n)
$$

:::

【解】

由有限可加性，可以得到
$$
\lim_{n\to\infty} P\left(\bigcup_{i=1}^n A_i\right)=\lim_{n\to\infty} \Sigma_{i=1}^n P(A_i)=\Sigma_{n=1}^\infty P(A_n)
$$
所以只需要证明 $\displaystyle\lim_{n\to\infty} P\left(\bigcup_{i=1}^n A_i\right)=P\left(\bigcup_{n=1}^\infty A_n\right)$，这就涉及到使用概率函数连续性的性质.

为了使用上连续性，我们需要构造一个单调不增的集列. 这里考虑一个经典的构造：令 $B_n=\displaystyle\bigcup_{i=1}^n A_i, B=\displaystyle\bigcup_{n=1}^\infty A_n$，从而
$$
C_n=B\setminus B_n=B=\bigcup_{i=n+1}^\infty A_n
$$
是一个单调不增的集列，从而可以对它使用上连续性：
$$
\lim_{n\to\infty} P(C_n)=P\left(\bigcap_{n=1}^\infty C_n\right)=P(\varnothing)=0
$$
而由于 $B_n\subset B$，我们有 $P(C_n)=P(B)-P(B_n)$，因此
$$
\lim_{n\to\infty} P(B_n)=P(B)
$$
即
$$
\lim_{n\to\infty} P\left(\bigcup_{i=1}^n A_i\right)=P\left(\bigcup_{n=1}^\infty A_n\right)
$$
这就证明了可列可加性.

### 9.22

::: info （课本 2.1）

口袋中有 $a$ 个白球、$b$ 个黑球和 $n$ 个红球，先从中逐个不放回地取球，试证白球比黑球出现得早的概率为 $\dfrac{a}{a+b}$，与 $n$ 无关.

:::

【解】

对于一个对任意 $n$ 总成立的问题，可以考虑使用数学归纳法.

若 $n=0$，白球比黑球出现得早的概率显然为第一次就取出白球的概率，即 $\dfrac{a}{a+b}$.

若 $n=k$ 的场合中，白球比黑球出现得早的概率为 $\dfrac{a}{a+b}$. 考虑 $n=k+1$. 此时记事件 $A$ 为白球比黑球出现得早，事件 $B_1,B_2,B_3$ 分别为**第一次**摸出白、黑、红球. 容易看出 $B_1,B_2,B_3$ 是完备事件组，此时使用全概率公式.
$$
\begin{align*}
  P(A)&=P(A|B_1)P(B_1)+P(A|B_2)P(B_2)+P(A|B_3)P(B_3)\\
  &=1\times\frac{a}{a+b+n}+0\times\frac{b}{a+b+n}+\dfrac{a}{a+b}\times\frac{n}{a+b+n}\\
  &=\frac{a}{a+b}
\end{align*}
$$

由数学归纳法即证.

::: info （课本 2.2）

甲、乙两袋中都有一个白球和一个黑球，从两个袋中各取一个球相互交换并放入另一个袋中，这样进行了若干次. $p_n,q_n,r_n$ 分别表示在第 $n$ 次交换后甲袋中有两个白球、一个白球和一个黑球、两个黑球的概率. 试写出 $p_{n+1},q_{n+1},r_{n+1}$ 用 $p_n,q_n,r_n$ 表示的表达式，并讨论 $n\to\infty$ 的情况.

:::

【解】

容易看出甲袋中有两个白球、一个白球和一个黑球、两个黑球这三种情况构成一个完备事件组，因此可以应用全概率公式.
$$
\begin{matrix}
  \displaystyle p_{n+1}=p_n\times 0+q_n\times \frac{1}{4}+r_n\times 0=\frac{1}{4}q_n \\
  \displaystyle q_{n+1}=p_n\times 1+q_n\times \frac{1}{2}+r_n\times 1=p_n+\frac{1}{2}q_n+r_n \\
  \displaystyle r_{n+1}=p_n\times 0+q_n\times \frac{1}{4}+r_n\times 0=\frac{1}{4}q_n
\end{matrix}
$$

注意到 $\forall n\in\mathbb{N}^*$，有 $p_n+q_n+r_n=1$，从而 $q_{n+1}=p_n+\frac{1}{2}q_n+r_n=1-\frac{1}{2}q_n$. 有
$$
q_{n+1}-\frac{2}{3}=-\frac{1}{2}\left(q_n-\frac{2}{3}\right)\Rightarrow q_n=(-\frac{1}{2})^n\times\frac{1}{3}+\frac{2}{3}
$$
这就得到了
$$
\lim_{n\to\infty}q_n=\frac{2}{3}
$$
进而
$$
\lim_{n\to\infty}p_n=\lim_{n\to\infty}r_n=\frac{1}{4}\lim_{n\to\infty}q_n=\frac{1}{6}
$$

【注】本题的背景实际上是求马尔科夫链的转移概率矩阵及其平稳分布，是随机过程的重要内容.

::: info （课本 2.3）

若 $0<P(B)<1$，试证：

1. $P(A|B)=P(A|\bar{B})$
2. $P(A|B)+P(\bar{A}|\bar{B})=1$

均是 $A$ 与 $B$ 相互独立的充要条件.

:::

【解】

先证明1，2等价. 有
$$
P(A|B)+P(\bar{A}|\bar{B})=1\Leftrightarrow P(A|B)=1-P(\bar{A}|\bar{B})=P(A|\bar{B})
$$
因此下面只需要证明条件1和 $A,B$ 独立等价.

若 $A,B$ 独立，则 $P(AB)=P(A)P(B)$，即
$$
P(A|B)=P(A)
$$
同时 $A,\bar{B}$ 也独立，从而
$$
P(A\bar{B})=P(A)P(\bar{B})
$$
即 $P(A|\bar{B})=P(A)$，这正是 $P(A|B)=P(A|\bar{B})$.

反过来，若 $P(A|B)=P(A|\bar{B})$. 由全概率公式得
$$
P(A)=P(B)P(A|B)+P(\bar{B})P(A|\bar{B})=P(A|B)(P(B)+P(\bar{B}))=P(A|B)
$$
立刻可以得到 $P(AB)=P(A)P(B)$，即 $A,B$ 独立. 这就完成了证明.

::: info （李贤平 2.4）

设一个家庭中有 $n$ 个小孩的概率为
$$
p_n=\left\{\begin{array}{l}
\alpha p^n & n\ge 1 \\
1-\dfrac{\alpha p}{1-p} & n=0  
\end{array}\right.
$$

这里 $0<p<1,0<\alpha<\dfrac{1-p}{p}$，若认为生一个小孩为男孩或女孩是等可能的，求证这个家庭有 $k(k\ge 1)$ 个男孩的概率为 $2\alpha p^k/(2-p)^{k+1}$.

:::

【解】

记事件“家中有 $n$ 个小孩”为 $A_n$，“家中有 $k$ 个男孩”为 $B_k$. 从而 $P(B_k|A_n)=\displaystyle\binom{n}{k}\left(\frac{1}{2}\right)^n$. 进而由全概率公式得
$$
\begin{align*}
  P(B_k) & = \sum_{n=k}^\infty P(B_k|A_n)P(A_n) \\
  & = \sum_{n=k}^\infty \alpha p^n \binom{n}{k}\left(\dfrac{1}{2}\right)^n \\
  & = \alpha \sum_{n=k}^\infty \binom{n}{k}\left(\dfrac{p}{2}\right)^{n}
\end{align*}
$$

这里遇到一个级数 $\displaystyle\sum_{n=k}^\infty \binom{n}{k}\left(\dfrac{p}{2}\right)^{n}=\sum_{n=k}^\infty \dfrac{n!}{k!(n-k)!}\left(\dfrac{p}{2}\right)^{n}$. 我们考虑逐项积分来计算这个级数，即先计算幂级数
$$
f(x)=\sum_{n=k}^\infty \dfrac{n!}{k!(n-k)!}x^{n-k}
$$
其中为了使用逐项积分，我们分离了 $x^k$ 以降低次数，即原式应为 $\left(\dfrac{p}{2}\right)^k f\left(\dfrac{p}{2}\right)$. 积分 $k+1$ 次可以得到
$$
\int\ldots\int f(x)\mathrm{d}x\ldots\mathrm{d}x=\frac{1}{k!} \sum_{n=0}^\infty x^n +C= \frac{1}{k!}\cdot\frac{1}{1-x}+C
$$
这里特意写成这种形式是为了方便求和. 可以验证低于 $k$ 次的项在之后的求导都会消掉.

对上式再求导 $k+1$ 次，得到
$$
f(x)=\frac{1}{(1-x)^{k+1}}
$$
因此我们所求的级数为 $\displaystyle\sum_{n=k}^\infty \dfrac{n!}{k!(n-k)!}\left(\dfrac{p}{2}\right)^{n}=\left(\dfrac{p}{2}\right)^{k}\frac{1}{(1-(p/2))^{k+1}}$，进而
$$
\begin{align*}
  P(B_k) & = \alpha \sum_{n=k}^\infty \binom{n}{k}\left(\dfrac{p}{2}\right)^{n} \\
  & = \alpha \left(\dfrac{p}{2}\right)^{k}\frac{1}{(1-(p/2))^{k+1}} \\
  & = \frac{2\alpha p^k}{(2-p)^{k+1}}
\end{align*}
$$

这正是所求的结论.

::: info （李贤平 2.7）

炮战中，若在距目标 $250$ 米，$200$ 米，$150$ 米处射击的概率分别为 $0.1,0.7,0.2$，而在各该处射击时命中目标的概率分别为 $0.05,0.1,0.2$，现在已知目标被击毁，求击毁目标的炮弹是由距目标 $250$ 米处射出的概率.

:::

【解】

分别使用 $A,B,C$ 表示事件“在距目标 $250$ 米，$200$ 米，$150$ 米处射击”，用 $N$ 表示事件“目标被击毁”. 从而由 Bayes 公式得
$$
\begin{align*}
  P(A|N)&=\frac{P(N|A)P(A)}{P(N)}\\
  &=\frac{0.1\times 0.05}{0.1\times 0.05+0.7\times 0.1+0.2\times 0.2}\\
  &=\frac{1}{23}
\end{align*}
$$

::: info （李贤平 2.8）

飞机坠落在 A,B,C 三个区域之一，营救部门判断其概率分别为 $0.7,0.2,0.1$；用直升机搜索这些区域，若有残骸，被发现的概率分别为 $0.3,0.4,0.5$，若已用直升机搜索过 A 区域和 B 区域，没有发现残骸，在这种情况下，试计算飞机坠落在 C 区域的概率.

:::

【解】

分别使用 $A,B,C$ 表示事件“飞机坠落在 A,B,C 区域”，用 $N$ 表示事件“搜索过 A 区域和 B 区域，没有发现残骸”. 可以由全概率公式得到
$$
\begin{align*}
  P(N)&=P(N|A)P(A)+P(N|B)P(B)+P(N|C)P(C)\\
  &=0.7\times(1-0.3)+0.2\times(1-0.4)+0.1\\
  &=0.71
\end{align*}
$$

从而由 Bayes 公式得
$$
P(C|N)=\frac{P(N|C)P(C)}{P(N)}=\frac{1\times 0.1}{0.71}=\frac{10}{71}
$$

### 9.26

::: info （课本 2.9）

某大学中有 $52\%$ 的学生是女生，$5\%$ 的学生是计算机科学专业，$2\%$ 的学生是计算机科学专业的女生. 如果随机抽取一名学生，求下列条件概率：

1. 给定一名学生主修计算机的条件下，这名学生为女生的概率.
2. 给定一名学生是女生的条件下，这名学生主修计算机的概率.

:::

【解】

设这名学生主修计算机为事件 $A$，是女生为事件 $B$. 从而
$$
P(B|A)=\dfrac{P(AB)}{P(A)}=\dfrac{2\%}{5\%}=\dfrac{2}{5}
$$
$$
P(A|B)=\dfrac{P(AB)}{P(B)}=\dfrac{2\%}{52\%}=\dfrac{1}{26}
$$

::: info （课本 2.13）

考虑一个有 $m$ 个家庭的社区，其中，家里有 $i$ 个孩子的家庭个数记作 $n_i,i=1,2,\ldots,k$，$\displaystyle\sum_{i=1}^k n_i=m$. 考虑下列两种抽取一个孩子的方法：

1. 随机从 $m$ 个家庭中抽取一个家庭，再从这个家庭中随机抽取一个孩子.
2. 随机从所有 $\displaystyle\sum_{i=1}^k in_i$ 个孩子中抽取一个孩子.

证明：第一种方法相比于第二种方法，更容易使得选中的孩子是长子.

:::

【解】

设第一、二种方法抽中长子的概率分别为 $p_1,p_2$.

对于第一种方法，可以使用全概率公式求解. 其中设抽到有 $i$ 个孩子的家庭为事件 $A_i$，抽到长子为事件 $B$. 从而
$$
p_1=P(B)=\sum_{i=1}^k P(B|A_i)P(A_i)=\sum_{i=1}^k \frac{1}{i}\cdot\frac{n_i}{m}
$$

对于第二种方法，我们知道共有 $m$ 个家庭，因此有 $m$ 个长子，从而
$$
p_2=\dfrac{m}{\displaystyle\sum_{i=1}^k in_i}
$$

考虑两者之比
$$
\begin{align*}
  \dfrac{p_1}{p_2} & = \frac{1}{m^2} \left(\sum_{i=1}^k \frac{n_i}{i}\right)\left(\sum_{i=1}^k in_i\right) & \\
  & \ge \frac{1}{m^2}\left(\sum_{i=1}^k \sqrt{\frac{n_i}{i}}\cdot \sqrt{in_i}\right)^2 & \text{(Cauchy-Schwarz)} \\
  & = \frac{m^2}{m^2} = 1
\end{align*}
$$
这就说明了 $p_1\ge p_2$，即第一种方法更容易选中长子.

::: info （李贤平 2.12）

飞机有三个不同的部分遭到射击，在第一部分被击中一弹或第二部分被击中两弹，或第三部分被击中三弹时，飞机才能被击落，其命中率与每一部分的面积成正比. 设三个部分的面积的百分比为 $0.1,0.2,0.7$. 若已击中两弹，求击落飞机的概率.

:::

【解】

这题存在一定的误解，我们需要认为这两弹是同时击中飞机的，这样才能得到正确的答案. 此时共有如下几种情况：此时记击落飞机为事件 $M$.

1. 有一颗子弹击中了第一部分，此时无论另一弹击中哪里，均将击落飞机，概率为 $0.1$.
2. 有一颗子弹击中了第二部分，此时另一弹只有击中第一、二部分，才能击落飞机，概率为 $0.2\times 0.3=0.06$.
3. 有一颗子弹击中了第三部分，此时另一弹只有击中第一部分才能击落飞机，概率为 $0.7\times 0.1=0.07$.

综上有 $P(M)=0.1+0.06+0.07=0.23$.

然而，题目也可以理解为两枚子弹先后击中飞机，即若第一弹击中第一部分，就不可能有第二弹，因此也可以有 $P(M)=0.13$. 作业中两种理解均算正确.

::: info （李贤平 2.13）

证明：对于事件 $A,B$，关系式
$$
P^2(AB)+P^2(\overline{A}B)+P^2(A\overline{B})+P^2(\overline{AB})=\frac{1}{4}
$$
成立的充要条件为
$$
P(A)=P(B)=\frac{1}{2}, P(AB)=\frac{1}{4}
$$

:::

【解】

这是一个平方和的形式，考虑配成 Cauchy-Schwarz 不等式的形式.
$$
\begin{matrix}
  [P^2(AB)+P^2(\overline{A}B)+P^2(A\overline{B})+P^2(\overline{AB})] (1^2+1^2+1^2+1^2)\\ \ge [P(AB)+P(\overline{A}B)+P(A\overline{B})+P(\overline{AB})]^2
\end{matrix}
$$
又注意到 $P(AB)+P(\overline{A}B)+P(A\overline{B})+P(\overline{AB})=1$，从而有
$$
P^2(AB)+P^2(\overline{A}B)+P^2(A\overline{B})+P^2(\overline{AB})\ge \dfrac{1}{4}
$$
题设中上述不等式取等号，而 Cauchy-Schwarz 不等式取等的充要条件为 $P(AB)=P(\overline{A}B)=P(A\overline{B})=P(\overline{AB})=\dfrac{1}{4}$.于是有
$$
P(A)=P(B)=\frac{1}{2}
$$
这正是我们要证的.

::: info （李贤平 2.17）

事件 $A,B,C$ 两两独立，$ABC=\varnothing,P(A)=P(B)=P(C)$，且已知 $P(A\cup B\cup C)=\dfrac{9}{16}$，试求 $P(A)$.

:::

【解】

由一般加法公式，有
$$
\begin{align*}
  P(A\cup B\cup C) & = P(A)+P(B)+P(C) \\
  & \quad -P(AB)-P(BC)-P(AC)+P(ABC) \\
  & = 3P(A)-3P(A)^2 =\frac{9}{16}.
\end{align*}
$$
解得 $P(A)=\dfrac{1}{4}$ 或 $\dfrac{3}{4}$. 然而，由于 $ABC=\varnothing$，若 $P(A)=\dfrac{3}{4}$，有 $P(BC)=\dfrac{9}{16}$，从而
$$
P(ABC)\ge P(A)+P(BC)-1=\dfrac{5}{16}>0
$$
矛盾！因此一定有 $P(A)=\dfrac{1}{4}$.

## 补充拓展

::: info 拓展 1 （简化 Chung-Erdős 界）

对任意两个事件 $A_1,A_2$，证明：
$$
P(A_1\cup A_2)\ge \frac{[P(A_1)+P(A_2)]^2}{P(A_1)+P(A_2)+2P(A_1\cap A_2)}
$$

:::

【解】

注意到 $P(A_1\cup A_2)=P(A_1)+P(A_2)-P(A_1\cap A_2)$. 因此只要证
$$
[P(A_1)+P(A_2)-P(A_1\cap A_2)][P(A_1)+P(A_2)+2P(A_1\cap A_2)]\ge [P(A_1)+P(A_2)]^2
$$
即
$$
P(A_1\cap A_2) [P(A_1)+P(A_2)]-2 [P(A_1\cap A_2))]^2\ge 0
$$

若 $P(A_1\cap A_2)=0$，上式自然成立. 否则 $P(A_1\cap A_2)>0$，此时上式等价于
$$
P(A_1)+P(A_2)-2 [P(A_1\cap A_2)]\ge 0
$$
而事实上，$A_1\supset A_1\cap A_2, A_2\supset A_1\cap A_2$，从而
$$
P(A_1)\ge P(A_1\cap A_2), P(A_2)\ge P(P(A_1\cap A_2))
$$
故上式成立，即原不等式成立.

【推广】可以将上述的界推广到 $n$ 个事件的情况. 即
$$
P\left(\bigcup_{i=1}^n A_i\right)\ge\frac{\displaystyle\left(\sum_{i=1}^n P(A_i)\right)^2}{\displaystyle\sum_{i=1}^n P(A_i)+2\sum_{1\le i<j\le n}P(A_i\cap A_j)}
$$

::: info 拓展 2 （可列个事件的相互独立）

对事件列 $\{A_n\}_{n=1}^\infty$，称该事件列中所有事件相互独立，当且仅当对任一**有限**的指标集 $I=\{i_1,\ldots,i_k\}\subset\{1,2,\ldots,n,\ldots\}$，总有
$$
P\left(\bigcap_{i\in I}A_i\right)=\prod_{i\in I}P(A_i)
$$

:::

::: info 拓展 3 （Borel-Cantelli 引理）

对事件列$\{A_n\}$，记 $A=\displaystyle\overline{\lim_{n\to\infty}}A_n=\bigcap_{n=1}^\infty\bigcup_{k=n}^\infty A_k$ 为 $\{A_n\}$ 的上极限，下面两个结论成立

1. 若 $\{A_n\}$ 满足 $\displaystyle\sum_{n=1}^\infty P(A_n)<\infty$，则 $P(A)=0$.
2. 若 $\{A_n\}$ 相互**独立**，且满足 $\displaystyle\sum_{n=1}^\infty P(A_n)=\infty$，则 $P(A)=1$.

:::

【解】

先证结论 1. 有 $A=\displaystyle\bigcap_{n=1}^\infty\bigcup_{k=n}^\infty A_k\subset \bigcup_{k=n}^\infty A_k$，从而由概率的次可加性，
$$
P(A)\le P\left(\bigcup_{k=n}^\infty A_k\right)\le \sum_{k=n}^\infty P(A_k), \forall n\in\mathbb{N}^*
$$
由于级数收敛，我们有级数的余和收敛至 $0$，即 $\displaystyle\lim_{n\to\infty}\sum_{k=n}^\infty P(A_k)=0$.

进而由 $n$ 的任意性我们得到 $P(A)=0$.

再证结论 2. 要证 $P(A)=1$，只要证 $P(\overline{A})=\displaystyle P\left(\bigcup_{n=1}^\infty\bigcap_{k=n}^\infty \overline{A_k}\right)=0$. 由概率的次可加性得到
$$
P\left(\bigcup_{n=1}^\infty\bigcap_{k=n}^\infty \overline{A_k}\right)\le \sum_{n=1}^\infty P\left(\bigcap_{k=n}^\infty \overline{A_k}\right)
$$
由于这可列个事件是独立的，对固定的 $n$，考虑 $M>n$，从而
$$
\begin{align*}
  P\left(\displaystyle\bigcap_{k=n}^M \overline{A_k}\right)&=\displaystyle\prod_{k=n}^M [1-P(A_k)] \\
  & \le \displaystyle\prod_{k=n}^M \exp(-P(A_k)) \\
  & = \exp\left(-\displaystyle\sum_{k=n}^M P(A_k)\right)
\end{align*}
$$
令不等式两端 $M\to\infty$，由 $P$ 的连续性得到
$$
P\left(\displaystyle\bigcap_{k=n}^\infty \overline{A_k}\right)=\lim_{M\to\infty} P\left(\displaystyle\bigcap_{k=n}^M \overline{A_k}\right)\le \lim_{M\to\infty}\exp\left(-\displaystyle\sum_{k=n}^M P(A_k)\right)=\exp\left(-\displaystyle\sum_{k=n}^\infty P(A_k)\right)
$$
由于级数发散，所以级数的余和同样发散，即 $\displaystyle\sum_{k=n}^\infty P(A_k)=\infty$. 这就是说
$$
0\le P\left(\displaystyle\bigcap_{k=n}^\infty \overline{A_k}\right)\le \exp\left(-\displaystyle\sum_{k=n}^\infty P(A_k)\right)=0
$$
因此 $P\left(\displaystyle\bigcap_{k=n}^\infty \overline{A_k}\right)=0$，从而
$$
P(\overline{A})=P\left(\bigcup_{n=1}^\infty\bigcap_{k=n}^\infty \overline{A_k}\right)\le \sum_{n=1}^\infty P\left(\bigcap_{k=n}^\infty \overline{A_k}\right)=0
$$
这就证明了 $P(A)=1$.

【注】这个结论将在第五章讨论随机变量列收敛的时候再被提及.
