---
type : notes
title: 2025-10-14
date: 2025-10-14T13:01:09-07:00
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

## IPV4
- Overhead
  - 20 bytes of TCP 
  - 20 bytes of IP 
  - = 40 bytes + app layer message 
- 32 bit source IP address 
- 32 bit dest IP address 
- Payload 
  - max: 64K bytes 
  - typically: <= 1500 bytes

## CIDR
Classless Inter-Domain Routing
- a.b.c.d/x
  - x is **network prefix**

## IP address
- In Unix, can be hardcoded ip address in rc.config


## DHCP
also does this stuff:
- address of first-hop router for client 
- name & IP address of DNS server 
- network mask (indicating network versus host portion of address)

## IP addressing
- ICANN: Internet Corporation for Assigned Names and Numbers 
- Allocates IP addresses 
- Manages DNS root 
- Allocating protocol numbers 

## IPV6 
- Tunneling: IPv6 datagram carried as *payload* in IPv4 datagram in IPv4 routers

## Flow Table Abstraction
- flow: defined by header field values 
- generalized forwarding: simple packet-handling rules 
  - match: pattern values in packet header fields
  - actions:
    - for matched packet: drop (firewall), forward, modify (NAT), send matched packet to SDN controller 
  - priority: disambiguate overlapping patterns
  - counters: #bytes and #packets

## OpenFlow: Flow Table Entries 
- Software-defined networking (SDN) standard to allow controller to communicate with network devices to manage and control them. 
- OpenFlow can emulate router, firewall, switch, NAT 

## Middlebox
> "any intermediary box performing functions apart from normal, standard functions of an IP router on the data path between a source host and destination host" 

- standard functions: destination forwarding
- On the path: data plane network core (not a host)


