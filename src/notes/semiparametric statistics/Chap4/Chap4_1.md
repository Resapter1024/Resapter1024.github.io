---
title: 从参数模型到半参数模型
category:
  - 半参数统计理论
tag:
  - 学习
  - 统计学
date: 2026-08-22
order: 1
# 禁止显示页脚
footer: false
---

在第 3 章，我们对有限维参数模型建立了估计量理论：$Z_1, \dots, Z_n$ iid，$\theta = (\beta^T, \eta^T)^T \in \mathbb{R}^p$（$p = q + r$），$\beta$ 为兴趣参数、$\eta$ 为冗余参数. 本章将其推广到 $\eta$ 无穷维的情形.

本书大部分讨论采用密度类 $p(z, \beta, \eta)$：$\beta$ 有限维（$q$ 维）、$\eta$ 无穷维，且 $\beta$ 与 $\eta$ 变分独立，即在参数真值 $(\beta_0, \eta_0)$ 的邻域内任取 $\beta, \eta$ 都给出模型中的密度.这使我们能显式定义偏导数
$$
\frac{\partial}{\partial \beta} p(z, \beta, \eta_0)\Big|_{\beta = \beta_0} = \frac{\partial p(z, \beta_0, \eta_0)}{\partial \beta}
$$

另一些模型更自然地写成 $p(z, \eta)$（$\eta$ 无穷维），兴趣参数为 $\eta$ 的光滑 $q$ 维函数 $\psi(\eta)$；何时采用哪种表示会加以说明.

第 1 章的两个例子都是半参数模型：

::: tip 两个例子

1. 限制矩模型：$Y_i = \mu(X_i, \beta) + \varepsilon_i$，$E(\varepsilon_i|X_i) = 0$（等价地 $E(Y_i|X_i) = \mu(X_i, \beta)$）.
2. 比例风险模型：$\lambda(t|X_i) = \lambda_0(t)\exp(\beta^T X_i)$.

:::

主要目标是寻找 $\beta$ 的一个较好的半参数估计量，满足对半参数模型中一切密度 $p(\cdot, \beta, \eta)$，$n^{1/2}(\hat\beta_n - \beta) \xrightarrow{D} N(0, \Sigma_{q \times q}(\beta, \eta))$，且渐近方差尽可能小.
