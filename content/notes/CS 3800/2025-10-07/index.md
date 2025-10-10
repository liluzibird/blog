---
type : notes
title: 2025-10-07
date: 2025-10-07T13:06:36-07:00
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

## Network-Layer
- Transport segment from sending to receiving host 
  - Sender: encapsulates into datagrams 

Functions:
- Forwarding: move packets from router input link to appropriate router output link 
  - Implemented in Data plane 
    - Typically in hardware
- Routing: determine network route taken by packets from source dest 
  - Routing algorithms
  - Implemented in control plane 
    - Implemented in software 

Data plane:
- Local, per-router function 
  - determine how datagram arriving on router input port, is forwarded to router output port 

Control plane: 
- Network- wide logic 
  - Determines how datagram is routed among router 

### Forwarding table: 
Determines, where packets are routed 

### Per-Router Control plane
Individual routing algorithm components in each and every router interact in the control plane 

### Network Service Model 
Defines the characteristics of end too end 
No guarantees just like UDP. Best effort service

## router
- Number of ports supported by a router can range from a small number in enterprise routers to, hundreds of 10 GBps ports in a router at an ISP's edge 
- Switching fabric 
  - Connects the router's input ports to its output ports 
  - Is completely contained within the router 
  - Network inside of a network router 
- Routing processor
  - Routing processor performs control-plane functions 
- Router requirements
  - Router's input ports, output ports, and switching fabric are almost always implemented in hardware rather than software 
  - Router's dataplane operates at the nanosecond time scale 
  - Control functions operate at a millisecond or second time scale 
- Destination-Based Forwarding
  - Router uses forwarding table to look up the output port to which an arriving packet will be forwarded via switching fabric 
- Switching fabric 
  - 3 types 
    - Memory 
    - bus 
    - Interconnection network 


  
