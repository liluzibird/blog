---
# type : docs
title: I Broke My Computer...twice
date: 2024-01-13T17:01:43-08:00
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
_image from [IT Crowd S1E5](https://www.imdb.com/title/tt0609851/)_

---


I already messaged this to my friend already, so to keep myself from coming up with a new way to reformat those words, I'll just paste that conversation here.

I don't have this blog listed on my resume or anything, so I feel like it would be kind of safe to curse on here. Albeit, if an employer is going through every repo and sees this they might be a little put off. Granted, they would have to actually skim a bit to reach this post. Hopefully this post doesn't get me disqualified of a job. It's pretty socially acceptable to curse, come the fuck on guys.

## Initial fuck up
So I was trying to delete the [Wayland](https://wayland.freedesktop.org/) display server protocol, and it just wiped my display, so everything was just command line. I think it logged me out and ProtonVPN didn't work because I have that thing on kill switch. So my internet wouldn't work without VPN, but I couldn't reconnect it.

So I was like alright, I still have my SSD I can back things up to. But my desktop environment doesn't automount drives for safety reasons. I mount things using the graphical environment and I guess I forgot how to mount using command line. So in hindsight, I guess I should've tried attempting that. So I ssh into my server and backed things up. It took fuck long, so I let the file transfer overnight. When I woke up I saw error messages going up and down the screen saying there's no space. Apparently I had a lot of shit, so it uploaded over 1 TB of stuff and my server wouldn't even function normally. So I wiped a bunch of the stuff and restarted the server to finally get it working again.


## Second fuck up
Then I reinstalled my OS and enabled disk encryption. After a while of setting things up to how I wanted it, I restarted. That restart bricked everything. It couldn't mount to my boot partition. I looked up help and guides but because everything was encrypted, nothing worked, even ram was encrypted, so I couldn't even fix things when I booted into flash drive.

## Finally got it to work
After my second install without disk encryption, it is finally working. Tried to install ZSH and configure everything. Didn't like it, but that's a story for next time.


## Moral of the story
I have no idea what the moral of the story is. Don't delete Wayland? Don't try encryption? (I have to try this again next time because I feel like maybe I did something wrong here) Encryption is a pain so try it if you really want to, but it might bung things up. I mean, at that point just use [TailsOS](https://tails.net/) on a USB or something.