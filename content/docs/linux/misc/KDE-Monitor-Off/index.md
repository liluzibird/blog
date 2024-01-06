---
date: 2024-01-05T18:31:01-08:00
title: KDE Monitor Off
linkTitle: KDE Monitor Off
series: 
  - Guides
categories:
  - Linux
tags:
  - KDE
---

For some reason turning on your monitors in Linux is a bit funky, so you might need to type a few commands in the terminal for monitors to power off. I believe this method works on both X11 and Wayland.

---



__To Turn Off:__

`xset -display :0.0 dpms force off` 

__To Turn On:__

`xset -display :0.0 dpms force on` 

If your display turns off and then immediately back on then try the following which adds a delay of 1 second before turning the screen off. This give a chance for all events to be processed by the X server before turning the display off.

`sleep 1 && xset -display :0.0 dpms force off`

That's pretty much all the commands you may need. If you need more info, check out this Ubuntu thread that talks about this.

https://askubuntu.com/questions/62858/turn-off-monitor-using-command-line/116806#116806