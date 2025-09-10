---
type : notes
title: 2025-09-09
date: 2025-09-09T13:00:21-07:00
featured: false
draft: false
comment: true
toc: true
reward: true
pinned: false
carousel: false
series:
categories: []
tags: [notes, cs 3800]
images: []
---

Summary.

<!--more-->

## Principles of network applications
### Client-Server Paradigm
Server:
- Always-on host
- Permanent IP
- Usually in data centers

Clients:
- Less powerful hosts that connect with server



**OSI Layer**
{{< mermaid >}}
flowchart TD
    A(["Application
    (Layer 7)"])
    B(["Presentation
    (Layer 6)"])
    C(["Session
    (Layer 5)"])
    D(["Transport
    (Layer 4)"])
    E(["Network
    (Layer 3)"])
    F(["Data
    (Layer 2)"])
    G(["Physical
    (Layer 1)"])
    A --> B
    B --> C
    C --> D
    D-->E
    E-->F
    F-->G
{{< /mermaid >}}

|**Bottom -> Up**|**Up -> Bottom**|
|:-:|:-:|
|   All         |   Please  |
|   People      |   Do      |
|   Seem        |   Not     |
|   To          |   Throw   |
|   Need        |   Sausage |
|   Data        |   Pizza   |
|   Processing  |   Away    |


**TCP**:  
\+ Connection oriented  
\+ Reliable transport  
\+ Flow control  
\+ Congestion control  
\- Doesn't provide timing, minimum, throughput guarantee, security

**UDP**:  
\+ Connection-less  
\- Unreliable data transfer  
\- Doesn't provide: reliability, flow control, congestion control, timing, throughput guarantee, or security

**Web caches/cookies**:
- Useful for storing your login information and work
- Very useful for advertisers


