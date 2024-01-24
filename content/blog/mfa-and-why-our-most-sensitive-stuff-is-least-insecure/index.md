---
# type : docs
title: Mfa and Why Our Most Sensitive Stuff Is Least Insecure
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
tags: [blog, mfa, 2fa]
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
Now, if the bank doesn't offer [2FA methods](https://www.howtogeek.com/232598/5-different-two-step-authentication-methods-to-secure-your-online-accounts/) like TOTP keys (that 60 sec code that generates every time you log in), push notification 2fa, (Microsoft, Duo, and Google's notifications to your phones) hardware keys (YubiKey or some similar device you plug into your computer), then you might want to use phone number 2FA, because a weak lock is better than no lock at all.

## What You Can Do
I guess you can tell the workers at your bank that whatever is currently offered is not sufficient. I was pleasantly surpsied to learn that the bank I use was one of the very few to offer Hardware keys so I bought 2 YubiKeys just for that bank and I still complained that there was no Software 2FA secret key that I can use in [Aegis](https://github.com/beemdevelopment/Aegis) or [Raivo](https://github.com/raivo-otp/ios-application). Whatever security measures you are offered use, them, on top of maybe separating your online identity with email aliases like with SimpleLogin (what I use), AnonAddy, Firefox Relay, or whatever else is offered by a trusted, open source, and audited company out there. The services listed above all offer plans that offer your custom domains so if you're ever afraid that the service is going to go down, and you'll lose your address, there's nothing to worry. In the case of SimpleLogin, they are under ProtonMail which is a huge service and I have their Proton Unlimited subscription which gives access to SimpleLogin premium for free, so I trust and love their services and integration.

