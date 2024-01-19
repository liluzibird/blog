---
# type : docs
title: Do You Really Need a /Home Partition?
date: 2024-01-15T14:02:37-08:00
featured: false
draft: false
comment: true
toc: true
reward: true
pinned: false
carousel: false
series:
categories: [docs]
tags: []
images: []
---

So I use arch (btw), and I recently had to do a few reinstalls (wrote about in my last [blog](/blog/2024/01/i-broke-my-computer...twice/)). This last fuck up was because I was trying to install some big files, but I partitioned it wrong. I trusted the archinstall script to basically do everything for me, and it separated the home partition. When it did that, there wasn't enough space in usr/share for it to download anymore packages. So that left me like 1.8TB of storage in my home partition and almost nothing in the directory where I install files. So I reinstalled everything again and booted it back up.

My question is this; do you even need a /Home partition? I mean if you back things up like a normal person whether to another external drive or to your server somewhere like you're supposed to, there's like almost no reason to have a separate partition for /Home. It's just a pain for figuring out how much to allocate each partition. Yes, it is the noob partitioning scheme, but, for me, there's absolutely nothing wrong with this noob method. You don't have to worry about oh, how much would I need to save in my /Home directory in the end how many packages would you download in the future. What if all of a sudden you decided to just start doing AI stuff. The reason I got into this mess was because I was trying to get stable diffusion to work, but the dependencies are huuuge, so I had to download a bunch of packages, and it told me I was out of space. I got really confused because I got like 2 TB of storage. So then, I remembered that I chose that separate /Home partition scheme in the archinstall script and that fucked things up. 

![Alt text](image.png?width=300px#center)

A couple of days have passed since I've started on this blog and I tried installing Debian 12 in a VM and with the /home partition it is broken. I most likely have no idea what I'm doing, just let the installer run by itself and only messing with the size of the partition. I don't want to deal with which data block and how many bytes it stops. So it doesn't install, so I went back and installed using the noob partition scheme, and it works just fine.

To those people using a separate /home partition; why? Stop torturing yourselves. Keep It Simple Stupid (KISS).

![Alt text](image-1.png#center)

_Why is this default? If you're using archinstall, you are probably a noob, they should set it to "no" as default._