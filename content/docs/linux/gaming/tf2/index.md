---
date: 2024-01-05T18:23:25-08:00
title: Team Fortress 2
linkTitle: Team Fortress 2
series: 
  - Guides
categories:
  - 
tags:
  - 
---

Pretty OG game if I do say myself. Still can't access the chat for some reason, I think somebody said online that I gotta buy something from the store, so I might do that.

---

Anyway, first you have to install `lib32-gperftools`

Run this line in launch options:

```
LD_PRELOAD=$LD_PRELOAD:/usr/lib32/libtcmalloc_minimal.so %command% -secure
```

![Launch Options](image.png)