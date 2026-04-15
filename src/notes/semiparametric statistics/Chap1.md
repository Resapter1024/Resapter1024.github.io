---
title: 半参数统计介绍
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-04-12
order: 1
# 禁止显示页脚
footer: false
---

## 模型

我们抽样得到的数据可以视为随机向量 $(Z_1,\ldots,Z_n)$，其中它们独立同分布（i.i.d）。数据可能属于的所有分布（或者说密度）构成的集合称为一个**模型**。通常我们用若干个参数来描述一个模型。

通过有限个参数向量来描述的模型称为**有限参数模型**，其中的密度可以写成如下形式
$$
\{p(z;\theta):\theta\in\Omega\subset\mathbb{R}^p\},
$$
这里的 $p$ 是一个有限的整数，用来描述参数的维度。

有些时候，我们只关心一个模型中的部分参数，但我们需要使用所有参数来描述密度。例如对于一个正态分布模型：
$$
X_1,\ldots,X_n\overset{i.i.d}{\sim} N(\mu,\sigma^2),\quad (\mu,\sigma^2)\in \mathbb{R}\times \mathbb{R}^+\subset\mathbb{R}^2
$$
我们可能只针对均值 $\mu$ 进行估计和推断，但我们仍需要方差 $\sigma^2$ 来描述数据的结构。针对这种问题，我们可以将参数改写为 $\theta=(\beta^\top, \eta^\top)^\top$，其中 $\beta\in\mathbb{R}^{q\times 1}$ 是我们感兴趣的参数（parameter of interest），而 $\eta\in\mathbb{R}^{r\times 1}$ 称为干扰参数（nuisance parameter）。显然有 $p=q+r$。

如果参数 $\theta$ 是无穷维的，事情就变得有些棘手。具体而言，我们仍然视我们感兴趣的参数 $\beta$ 是有限维的，而干扰参数 $\eta$ 是无穷维的。这样的模型称为**半参数模型**。由于干扰参数是无穷维的，它对概率分布的限制更少，从而使得半参数方法一般具备更好的稳健性和普适性。

## 无穷维空间

一般我们将参数空间 $\Omega$ 视作一个线性空间 $\mathcal{S}$ 的子集，因此我们必须先讨论清楚什么是线性空间的维度。对于有限维线性空间，我们定义其维度为其极大线性无关组包含的元素个数。这些元素能够张成整个空间。因此，一个自然的对无穷维线性空间的定义如下所示：

::: info 定义 1（无穷维线性空间）

对于线性空间 $\mathcal{S}$，若对任意的有限集 $S\subset\mathcal{S}, \exist \theta\in\mathcal{S}, \theta\notin\mathrm{span}(S)$，则称 $\mathcal{S}$ 为无穷维线性空间。

这个定义直观上就是在说：无穷维空间比任意有限维空间都大，不论你找到维度多高的集合，它张成的空间一定相对整个空间有遗漏。

:::

很明显地，如果一个线性空间的线性子空间是无穷维的，那么它自身也一定是无穷维的。

::: tip 实数上的连续函数空间

定义在实数上的连续函数空间 $\mathcal{C}=\{f(x):x\in\mathcal{R}, f\ \text{是连续函数}\}$ 是一个经典的无穷维线性空间。要证明这一点，我们可以尝试说明其中包含了任意维度的空间。

$p$ 阶多项式空间是一个好的入手点，因为多项式函数一定是连续函数。事实上我们以实数上的 $p$ 阶多项式空间 $\mathcal{S}_p=\mathrm{span}(1, x, x^2,\ldots, x^{p-1})$ 为例，以及多项式空间 $\mathcal{S}=\{f(x):x\in\mathcal{R}\}$，其中 $f$ 是一个多项式。可以看出首先 $\mathcal{S}_p$ 是 $p$ 维线性空间，其次 $\forall p\in\mathbb{N}^*, \mathcal{S}_p\subset\mathcal{S}$，但是对于 $f(x)=x^p\in\mathcal{C}$，一定有 $f(x)\notin \mathcal{S}_p$，这就说明了 $\mathcal{S}$ 是无穷维的，进而 $\mathcal{C}$ 也是无穷维的。

::: details

这个推理省略了一些细节，实际上，对于任意的 $p$ 维的多项式空间，我们找到其中的最高次数多项式（因为是有限维的，所以一定存在这样的多项式），我们记其次数为 $p_0$，那么一定有 $x^{p_0+1}$ 不在这个空间里，这可以通过多项式的次数比较来说明。

:::

## 半参数模型示例

### 受限矩模型（Restrict Moment Model）

可以把受限矩模型视为对参数模型下回归在半参数模型下的推广。考虑把响应变量 $Y$ 建模为协变量 $X$ 的函数。在受限矩模型中，数据 $Z=(Y,X)$ 的密度被下面的关系描述：
$$
E(Y\mid X) = \mu(X,\beta)
$$
这里 $\mu$ 是一个确定的函数，而 $\beta$ 是一个有限维参数。我们根据不同的 $\mu$ 的形式来命名模型，例如 $\mu(X,\beta)=\beta^\top X$ 就称为线性模型；而 $\mu(X,\beta)=\exp(\beta^\top X)$ 称为对数线性模型。不论如何，这样的模型被称为**受限矩模型**。它在一维响应变量的场景下可以如下建模：
$$
Y=\mu(X,\beta)+\varepsilon
$$
其中 $E(\varepsilon\mid X)=0$，这是我们对该模型进行的唯一限制，也是「受限矩」一词的由来。数据之间独立同分布，联合密度如下表示：
$$
p_{Y,X}(y,x,\beta,\eta(\cdot))
$$
这里 $\beta$ 是我们感兴趣的参数，而 $\eta$ 是一个无穷维的干扰参数，用于描述 $\varepsilon$ 和 $X$ 之间的联合分布。由于除了矩条件外，该模型不存在任何其他的概率分布限制，所以它只需要满足下面几条最基本的条件即可。
$$
\begin{align*}
  p_{\varepsilon,X}(\varepsilon,x)\ge 0, &\quad \forall\varepsilon,x \\
  \displaystyle\int p_{\varepsilon,X}(\varepsilon,x) \mathrm{d}\varepsilon = 1, &\quad \forall x \\
  \displaystyle\int \varepsilon p_{\varepsilon,X}(\varepsilon,x) \mathrm{d}\varepsilon = 0, &\quad \forall x \\
  p_X(x)\ge 0, &\quad \forall x \\
  \displaystyle\int p_X(x) \mathrm{d}\nu_X(x) = 1.
\end{align*}
$$
这里实际上除了矩条件外，就是令 $X$ 的边缘分布以及 $\varepsilon,X$ 的联合分布都是合法的。

::: details

对于第五个条件中的 $\nu_X(x)$，它是用来定义 $X$ 的密度的一个概率测度，通常我们认为它对连续随机变量而言是 Lebesgue 测度，而对于离散型随机变量是计数测度

:::

下面我们给出一个方法，来构造出满足上面条件的干扰参数 $\eta$。

::: tip 构造方法

1. 任取一个正值函数 $h^{(0)}(\varepsilon,x)>0$
2. 归一化它，即令 $h^{(1)}=\dfrac{h^{(0)}(\varepsilon,x)}{\displaystyle\int h^{(0)}(\varepsilon,x)\mathrm{d}\varepsilon}$，这是为了使它为一个合法的密度。
3. 先计算 $h^{(1)}(\varepsilon,x)$ 的均值为
    $$
    \mu(x)=\int \varepsilon' h^{(1)}(\varepsilon',x)\mathrm{d}\varepsilon',
    $$
    从而将 $\varepsilon'$ 作平移变换得到 $\varepsilon=\varepsilon'-\mu(x)$，从而 $\varepsilon$ 的密度应为
    $$
    \eta_1(\varepsilon,x)=h^{(1)}(\varepsilon+\mu(x),x)
    $$

::: details

我们可以证明，这个方法可以找到所有的干扰参数。因为我们可以把任意的干扰参数 $\eta$ 代入上面的步骤，计算得到对应的 $\eta_1=\eta$，这就说明这个构造方法是一个从任意函数空间到干扰参数空间的满射。

:::

我们也可以用一个类似的方法，从任意正函数出发，归一化后得到 $X$ 的密度 $\eta_2(x)=p_X(x)$，从而限制矩模型的干扰参数可以记作
$$
\{\beta,\eta_1(\varepsilon,x),\eta_2(x)\}
$$
此时，数据 $Z=(Y,X)$ 的联合密度如下所示：
$$
\begin{align*}
  p_{Y,X}(y,x)&=p_{Y\mid X}(y\mid x;\beta,\eta_1)p_X(x;\eta_2) \\
  & = \eta_1(y-\mu(x,\beta),x)\eta_2(x)
\end{align*}
$$

寻找干扰参数的构造方法相当重要，这实际上是一个将任意函数空间向干扰参数空间这一特定空间上的映射，这使我们能通过任意函数空间上的操作来进行对干扰参数的操作。

## 比例风险模型（Proportional Hazards Model）

该模型给出了一个对生存分析问题的半参数建模。记个体的存活时间为 $T$，其分布依赖于解释变量 $X$。考虑**瞬时死亡率**为
$$
\lambda(t\mid X)=\lim_{h\to 0}\left\{\frac{P(t\le T<t+h\mid T\ge t, X)}{h}\right\}
$$
直观上看，它刻画了个体在存活时间达到 $t$ 时立刻死亡的概率。Cox 将其建模为
$$
\lambda(t\mid X)=\lambda(t)\exp(\beta^\top X)
$$
这实际上正是一个半参数模型，因为我们感兴趣的变量即为有限维的 $\beta$，它刻画了不同协变量水平对个体瞬时死亡率的影响。而基准风险 $\lambda(t)$ 可视为一个无穷维的干扰参数。

在生存分析中，我们有存活时间 $T$ 的密度为
$$
p_T(t)=\lambda(t)\exp\left(-\int_0^t \lambda(u)\mathrm{d}u\right)
$$

::: details

这个密度是一个生存分析中的经典结论，我们如下来理解这件事情。根据定义，我们有基准风险 $\lambda(t)$ 满足
$$
\lambda(t)=\frac{p_T(t)}{S(t)}
$$
直观上，可以理解为在 $t$ 时刻去世的风险等于 $t$ 时刻死去的概率与存活时间大于 $t$ 的概率，这里 $S(t)=P(T>t)$。

显然有 $p_T(t)=-S'(t)$，从而
$$
\lambda(t)=-\frac{S'(t)}{S(t)}=-[\ln(S(t))]'
$$
从而生存函数
$$
S(t)=C_0\exp\left(\int_0^t \lambda(u)\mathrm{d}u\right)
$$
代入 $S(0)=1$ 解得 $C_0=1$，从而
$$
S(t)=\exp\left(\int_0^t \lambda(u)\mathrm{d}u\right)
$$
代回最开始的式子得到
$$
p_T(t)=\lambda(t)\exp\left(-\int_0^t \lambda(u)\mathrm{d}u\right)
$$

:::

在此基础上，该半参数模型中的数据 $Z=(T,X)$ 的联合密度可以表示为
$$
p_{T,X}(t,x;\beta,\lambda(\cdot),\eta_2(\cdot))=p_{T\mid X}(t\mid x;\beta,\lambda(\cdot))\eta_2(x)
$$
其中干扰参数 $\eta_2$ 的作用和前一个例子一样，用于描述 $X$ 的概率分布，它当然也要满足非负性和积分为 $1$ 的条件（作为概率函数）。而条件密度表示为
$$
\begin{align*}
  p_{T\mid X}(t\mid x;\beta,\lambda(\cdot)) & = \lambda(t\mid x)\exp\left(-\int_0^t \lambda(u\mid x)\mathrm{d}u\right) \\
  & \lambda(t)\exp(\beta^\top x)\exp\left(-\int_0^t \exp(\beta^\top x)\lambda(u)\mathrm{d}u\right)
\end{align*}
$$

这个方法同样具有半参数模型的优势，即相较于具有特定函数形式的参数模型更灵活。

### 非参数模型（Nonparametric Model）

在半参数模型中，我们仍然会关注一个有限维的参数 $\theta$，但是在某些场景下，尝试关注一个有限维的参数反而更加不便。下面就是一个例子。

考虑关注随机变量 $Z$ 的矩，此时除了这些矩必须存在以外，我们对 $Z$ 的分布不做任何其他限制。进而 $Z$ 的密度 $\theta(z)$ 可以是任何合法的密度函数，它所处的空间是无穷维的。

此时再尝试分离一个有限维的参数来做研究是多此一举的，更经典的方法是引入泛函的视角。我们实际关注的可能是 $\theta$ 的某个泛函 $\beta(\theta)$，此时我们是没必要也很难把感兴趣的 $\beta$ 从无穷维的 $\theta$ 上分开的。

## 半参数估计量

在半参数估计中，对我们感兴趣的参数 $\beta$，它的半参数估计量 $\hat{\beta}_n$ 通常要满足下面两条优良的性质：一致性和渐进正态性。
$$
\begin{matrix}
  (\hat{\beta}_n-\beta) \xrightarrow{P(\beta,\eta(\cdot))} 0 \\
  n^{1/2}(\hat{\beta}_n-\beta) \xrightarrow{\mathcal{D}(\beta,\eta(\cdot))}N(0,\Sigma^{q\times q}(\beta,\eta(\cdot)))
\end{matrix}
$$

在研究半参数估计量的时候，我们会面临下面两个核心问题：

1. 半参数估计量是否存在，我们如何找到感兴趣参数的半参数统计量。
2. 我们如何在半参数估计量这一类别中找到“最优”的那个。

在后面的章节中，我们主要通过引入**影响函数**这一工具来着手解决这两个问题。

在讨论影响函数时，我们总是在 Hillbert 空间中考虑其几何性质和构造。在下一章中，将介绍[随机向量的 Hillbert 空间](/notes/semiparametric%20statistics/Chap2/Chap2.md).
