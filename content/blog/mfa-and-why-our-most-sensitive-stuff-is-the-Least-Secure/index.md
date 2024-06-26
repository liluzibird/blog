---
# type : docs
title: Mfa and Why Our Most Sensitive Stuff Is the Least Secure
date: 2024-01-23T21:17:26-08:00
featured: false
draft: false
comment: true
toc: true
reward: true
pinned: false
carousel: false
series:
categories: [blog]
tags: [blog, MFA, 2FA]
images: []
---
_Image stolen from https://cyberintro.net/what-is-sim-swapping-and-how-it-works/_


## Gaming Services Are More Secure Than Financial Institutions
I recently realized the terrible insecure state of our online accounts. Whenever somebody brings up something about bank security, I always have to bring up that my gaming accounts are actually probably safer than my life's savings. Steam, Itch, and Epic Games are all gaming accounts that I use frequently. What do they have in common? They all use 2FA. Now, to be frank, I am absolutely disheartened by Steam's sorry excuse to not use industry standard TOTP and/or HOTP, but instead use their proprietary app. However, you can still verify using the Steam app and/or email so pick your poison. Fortunately, Itch and Epic both use industry standard TOTP algorithms, so not all hope is lost. I believe GOG is still stuck in email only 2FA so that sucks. However, these options are still miles better than the options that are offered in our modern (US) banking systems. I can't speak for other countries, so this will be pretty much US, centric.

## List of 2FA/MFA Methods (or lack thereof) of Banks
I have found this open source project, [twofactorauth](https://github.com/2factorauth/twofactorauth) and they made this amazing website: https://2fa.directory/. Going through the [list of banks](https://2fa.directory/us/#banking) in the U.S., I found that too many of them have lax security measures. Many of the banks only have SMS 2FA and a good 16 don't have 2FA at all, or it's not required. I was looking at a specific one, SchoolsFirst, and they don't have 2FA, one of my friends uses them and said it's OPT IN. Opt in? Why in the world would you have an opt-in security measure? Go all in. SchoolsFirst is a bank for people who work at school, Professors, Teachers, Student Assistants, and many of these people have their life's savings stored in SchoolsFirst. Too many of these banks are taking FDIC for granted, using that as assurance that the money will be recovered anyway, if people's funds are stolen.

## Sim Swapping and Why You Should Never Use Phone Number to Protect Your Assets
Many instances of phone number [Sim Swapping](https://blog.mozilla.org/en/privacy-security/mozilla-explains-sim-swapping/) are on the rise and every, so often you hear of somebody's entire bitcoin wallet or some other cryptocurrency wallet getting stolen because of some inevitable data leak on another service. (Facebook, Twitter, etc.) Most recently, the SEC's Twitter account just got hacked due to Sim Swapping and the attacker was able to impersonate the SEC and influenced global trading for some time and profit from it. Whatever the service is, it will get data breached. Some of these people aren't using a password manager like Bitwarden, so they're reusing the same password each time, if they do use a password manager, it's the one baked into the browser, which is highly insecure, attackers are known to rip those passwords in seconds (I have done it to my own account in the past). So basically people are trusting 2FA to secure their accounts for them as the passwords are already given out to attackers. These people probably also reuse the same email and not using an email proxy like [SimpleLogin](https://simplelogin.io) or [AnonAddy](https://addy.io/), so if an attacker gains access to both the passwords, email, phone number (via Sim Swapping) they are functionally stealing most people's entire life.

## Phone 2FA, Better Than Nothing
Now, if the bank doesn't offer [2FA methods](https://www.howtogeek.com/232598/5-different-two-step-authentication-methods-to-secure-your-online-accounts/) like TOTP keys (that 60 sec code that generates every time you log in), push notification 2FA, (Microsoft, Duo, and Google's notifications to your phones) hardware keys (YubiKey or some similar device you plug into your computer), then you might want to use phone number 2FA. A weak lock is better than no lock at all.

## What You Can Do

### Use Whatever Security Tools that are Provided to You
Whatever security measures you are offered use, them, on top of maybe separating your online identity with email aliases like with SimpleLogin (what I use), AnonAddy, Firefox Relay, or whatever else is offered by a trusted, open source, and audited company out there. The services listed above all offer plans that offer your custom domains so if you're ever afraid that the service is going to go down, and you'll lose your address, there's nothing to worry. In the case of SimpleLogin, they are under ProtonMail which is a huge service and I have their Proton Unlimited subscription which gives access to SimpleLogin premium for free, so I trust and love their services and integration.

### Use a Password Manager and Email Aliasing
The advantage of a password manager like Bitwarden on top of an email aliasing service like Simplelogin is that on top of making very long and complex passwords, you'll also have a unique email for every service (or every category of service depending on how many emails you are offered). So if an attacker gets your email and password from your Twitter account, they will go to your bank and find that your email isn't matching and password isn't matching so they don't even know which account to hit.

### Use a Second Phone Number
[Rob Braxman](https://youtube.com/channel/UCYVU6rModlGxvJbszCclGGw) is an amazing cybersecurity professional, and he made a video on this a long time ago. But basically, you should have a second phone number for your important financial stuff. One that isn't tracked by social media or other services. One that isn't known to anybody except you. Your family, friends, strangers, shouldn't know this number. I recommend buying RedPocket's cheap [$30/year prepaid plan](https://www.ebay.com/itm/133196831828) with the cheapest GSMT dumbphone you can find with a removable battery. I found a cheap Alcatel flip phone for $20. It's a pretty good deal if you want good privacy and security for protecting your life's savings. Now, if an attacker manages to get your unique password, unique email, they'll also have to find some way to find your phone number, one which is never used on any service except your bank and maybe government documents. Your personal life online will never be tied to your important stuff if you do it this way. If you're like me and signed up for Facebook, Instagram, Snapchat, etc. in the past and know your phone number is leaked online and trashed, this is absolutely essential. This phone number will rarely be used maybe of the bank sends SMS 2FA, or you need it for calling the bank or the bank calls you through voicemail.

### Complain to your Bank for Being so Trash and Insecure
I guess you can tell the workers at your bank that whatever is currently offered is not sufficient. I was pleasantly surprised to learn that the bank I use was one of the very few to offer Hardware keys, so I bought 2 YubiKeys just for that bank and I still complained that there was no Software 2FA secret key that I can use in [Aegis](https://github.com/beemdevelopment/Aegis) or [Raivo](https://github.com/raivo-otp/ios-application). 
