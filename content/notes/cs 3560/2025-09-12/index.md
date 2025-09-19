---
type : notes
title: 2025-09-12
date: 2025-09-12T11:00:57-07:00
featured: false
draft: false
comment: true
toc: true
reward: true
pinned: false
carousel: false
series:
categories: []
tags: []
images: []
---

Summary.

<!--more-->

## Use Case
- A response that the system has in response to input from user
- Techniques to identify use cases
    - User goal technique
    - Event decomposition technique

{{<mermaid>}}
flowchart TD
    A(["Customer thinks about geting a shirt"])
    B(["Customer drives to the mall"])
    C(["Customer tries on shirt at Sears"])
    D(["Customer goes to Walmart"])
    E(["Customer tries on a shirt at Walmart"])
    F(["Customer buys a shirt
    [Event that directly affects the system]"])
    A-->B
    B-->C
    C-->D
    D-->E
    E-->F



{{</mermaid>}}
