---
type : notes
title: 2025-09-22
date: 2025-09-22T10:34:04-07:00
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

Continuation with network layers

<!--more-->

Lab 5 is due soon


|TCP/IP Model|Packet Units|Acronym|
|-|-|-|
|Application|Data|Don't|
|Transport|Segment|Smoke|
|Network|Packet|Pot|
|DataLink|Frames|From|
|Physical|Bits|Bongs|

## TCP Connection Setup (3 Way Handshake)

Client --> Server
	SYN
Server --> Client
	SYN + ACK
Client --> Server
	SYN
Server --> Client

## Application Layer Protocols
- DNS
- HTTP
- Email
- SSH
- FTP

## Network Address Translation
- Basic NAT
	- Translates one IP address into another
- Port Address Translation
	- Allows multiple hosts to use a single public IP address
- Static and Dynamic
	- NAT provides dynamic IP address for each host
- Benefits
	- No need to find an open IP addresses. Allows sharing
	- Provides some security. As device IPs are constantly switching, an attacker can't only rely on an IP address to attack a specific client.
