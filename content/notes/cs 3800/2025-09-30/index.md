---
type : notes
title: 2025-09-30
date: 2025-09-30T13:02:38-07:00
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
## TCP round trip time, timeout
Seq and Ack #s cover error to cover packet loss we need a timer.

```math
EstimatedRTT = (1-\alpha)*EstimatedRTT + \alpha*SampleRTT
```


## Explicit congestion notification (ECN)
TCP deployments often implement network-assisted congestion control:
  - two bits in IP header marked *by network router* to indicate congestion
    - *policy* to determine marking chosen by network operator
  - congestion indication carried to destination
...

