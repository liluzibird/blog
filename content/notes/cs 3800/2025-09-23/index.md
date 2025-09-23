---
type : notes
title: 2025-09-23
date: 2025-09-23T13:04:15-07:00
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

Transport Layer

<!--more-->

# Transport Layer

## Transport Layer: Overview
- principles behind transport layer services:
	- Multiplexing, demultiplexing
	- Reliable data transfer
	- Flow control
	- Congestion Control
- Learn about transport layer protocols:
	- UDP: connection-less oriented
	- TCP: connection oriented
	- TCP congestion
## Transport vs. network layer services and protocols
household analogy:
12 kids in Ann's house sending letters to 12 kids in Bill's house:
- hosts = houses
- processes = kids 
- app messages = letters in envelopes
- transport protocol = Ann and Bill who demux to siblings
- network-layer protocol = postal service


Receiver:
- Receives segment from IP
- Checks header values
- extracts application layer message
- demultiplexes messages

TCP: Transmission Control Protocol
- Reliable
- Connection oriented

UDP: User Datagram Protocol
- Unreliable
- Connectionless oriented

Services not guaranteed: 
- Delay guarantees
- Bandwidth guarantees

## Multiplexing/Demultiplexing
Multiplexing at Sender:
handle data from multiple sockets, add transport header (later used for demultiplexing)

Demultiplexing at receiver:
use header info to deliver received segments to collect sockets

Demultiplexing:
- Host receives IP datagrams
	- Datagram has source and destination IP address
	- Datagram carries one transport-layer segment
- host uses ip addresses and port numbers

Connectionless Demultiplexing

Recall:
- When creating socket, programmer must specify host-local port #

Http uses tcp
- TCP socket identified by 4-tuple:
	- Source IP addr
	- Source port num
	- Dest IP addr
	- Dest port num
- Demultiplexing
	- Using 4-tuple: source and destination IP addr, and port nums
- Multiplexing/demultiplexing happens at all layers

## UDP: User Datagram Protocol
- Bare bones
- UDP is useful for multimedia apps and games
	- loss tolerant, rate sensitive
- DNS
- SNMP
- HTTP/3
- Real-Time sensor data

## Reliable data transfer
Channel with bit errors:
	- Underlying channel may flip bits in packet
		- cheksum to detect bit errors
	- How to recover from errors?
		- Acknowledgements (ACKs): tells receiver no error in packet
		- Negative acknoledgments (NAKs): tells receiver error in packet
Performance of rdt3.0 (stop-and-wait)
- U_sender: utilization - fraction of time sender busy sending
- Example: 1Gbps link, 15 ms prop. delay, 8000 bit packet
	- time to transmit packet

## Selective Repeat
- Receiver *individually* acknowledges all correctly received packets
