---
date: 2024-02-05T22:32:05-08:00
title: I Bought a New Router
linkTitle: I Bought a New Router
series: 
  - Docs
categories:
  - networking
tags:
  - networking
  - openwrt
  - router
---

## Intro
Over the past week I have been looking at the project OpenWRT and checking out which routers to buy. How could I do this without consulting the home networking subreddit. Though, those people said I would need to spend like $400 or something buying ubiquiti unifi WAP, build a small pc for the router, build a pc for a firewall, etc. The task is daunting and even though I would love to do all of that. It just seems too expensive and unnecessary. I don't live in an extremely large area, nor do I have lots of members spread out over the place. It would be unnecessary to do all that work, crawling through the house and pulling cat 6 wires everywhere. I already had that wiring done to my room and that's it for my PC.

I decided I would just buy a new router to upgrade my old one (it's like 10 years old). When it arrived home my dad actually yelled at me asking how I could justify such an expense when the one we've been using works fine. I didn't think it would need explaining but I told him that the router was too old but he didn't buy it. I open up ports to access my storage server remotely so I think the $60 open box Asus router I got on eBay was alright. Given that I put OpenWrt on it, I could see it lasting indefinitely, as long as the community updates it every year or so.

Anyway, where was I? Ah, yes bought router and decide to put OpenWrt on it after hearing some stuff about it when I was on Reddit before the enshitification happened. However, even on Lemmy, OpenWrt is unsurprisingly still revered as one of the best firmware one could put on their routers. It's open source and it's GPL, what more could you ask for? It's supported very well by the community and the support is amazing on the [forum](https://forum.openwrt.org/).

## Installing OpenWrt
If you're looking to get a router and planning to put openwrt on it, check the [table of hardware](https://openwrt.org/toh/start) and use the [firmware selector](https://firmware-selector.openwrt.org/).

I had massive issues with the initial process of putting OpenWrt on my router, however the forum is so amazing and within a few minutes I got someone to hop on my post. I was honestly shocked, I was expecting a few days maybe, but everything was an amazing experience.

This [first post](https://forum.openwrt.org/t/solved-first-time-installation-help-asus-rt-ax54-asus-rt-ax54hp-asus-rt-ax1800hp-asus-rt-ax1800s/186616), I managed to solve it myself messing about but the person hopped on the thread soon after. Basically, the instructions of the installing the firmware tells you to download and upload a certain file (factory.bin) to the router, but in actuality, you had to download and upload another file to the router (kernel.bin). 

## Internet not Working
The second issue I had was with the internet not working at all. So usually, routers are plug and play and I expected that from OpenWRT as well, especially if you leave everything as default. For some reason, this did not happen after having installed the firmware onto the router. I was experienced with no internet at all. It was so strange, I couldn't think of anything to fix it. I powered off both devices and reconnected them, same thing. It was the most frustrating and peculiar thing ever. So I did some searches, found something on the OpenWrt forum about some guy who had the same issue and resolved it by turning the router off and on again. I watched some youTube tutorials installing OpenWrt and using it, it seemed like it just magically worked straight out of the box. I genuinely thought the router was defective and I dreaded the thought of packaging the router up and returning it again. As a last effort, I made a post on the OpenWrt forum detailing my problem. They told me to post some logs to confirm my configs, some guy suggested cloning the MAC address, after some time, I followed [psherman's advice](https://forum.openwrt.org/t/cant-connect-to-the-internet/186753/9): "Try unplugging both your DSL modem and the router. Then plug the DSL modem back into power and let it fully boot. Once it is up, then connect your router's power." This specific method of rebooting worked like a charm. Unplugging both and replugging I guess is not as effective.

Anyway, that wraps it for this post. Next I will go over how to install AdGuard Home on your OpenWrt router to block all those nasty ads (except youTube ads, it doesn't work for those, install [uBlock Origin](https://ublockorigin.com/) and use Firefox or a Firefox based browser ffs).