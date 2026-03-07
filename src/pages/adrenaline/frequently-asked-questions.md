---
layout: "../../layouts/WikiPage.astro"
title: "Frequently asked questions"
description: "Frequently asked questions about Adrenaline."
style: "adrenaline"
---

## Can this cause data corruption?

Adrenaline is very unlikely to cause corruption to world data. However, I would always recommend keeping backups regardless of whether you're playing with mods.

If you want to be extra safe, you can remove ModernFix at a cost of performance and memory usage. You can also remove C2ME if you're running in a server environment, at a heavy cost of chunk generation speed.

## How can I provide feedback?

If you want to talk about the pack or have any questions, please use the [Discord server](https://discord.gg/36Tv44cYte)! However, if you are asking for a feature to be added or giving a bug report, use the [issue tracker](https://github.com/intergrav/Adrenaline/issues) instead. Thanks!

I am currently looking for viable alternatives to Discord at the moment, but right now our official support channel is on Discord.

## Aren't Config Manager and Crash Assistant QoL mods?

_Technically_, yes. However, both barely affect the game during runtime. They pretty much only do things before the game is run, or if you experience a crash.

Config Manager simply allows us to set custom defaults for config files, which prevents your configs from being overwritten with our defaults every time you update the modpack. It also lets you easily reset or overwrite your configurations with the modpack defaults in it's own config menu.

Crash Assistant helps you analyze crash logs, and also makes it easier for users to access our server for support. It also contains features such as detecting and warning you if Minecraft is using an iGPU while a dGPU is available. It's tremendously increased the amount of support posts we receive, often improving the modpack for everyone, so that's why we have it built-in.

### What about Mod Menu?

For information about why Mod Menu is included in Adrenaline, see [this comment](https://github.com/skywardmc/adrenaline/issues/71#issuecomment-4015528054).

## What's the difference from Fabulously Optimized?

Adrenaline aims to not add any extra features, while also changing very little of Vanilla's default settings. It only improves performance.

Adrenaline is more focused on user-customization and having a lighter experience out of the box. Adrenaline may be more suitable for low-end devices.

Adrenaline also actively supports more versions at once, including popular modding versions, which can make it more suitable as a base to use for modpacks.

Our alternative to Fabulously Optimized is [Additive](/additive). You can see a comparison in [Additive/Frequently asked questions](/additive/frequently-asked-questions).

## Can I make a modpack with this?

Yes, _you can_! Feel free to use this in any way you want! All I ask for is credit somewhere. You don't **have** to give credit - after all it's just a Minecraft modpack, but I spend lots of time maintaining this and it would help a ton. If you do want to give credit, just put the Modrinth page in there. Also, I would prefer you not to include this project's name (for example, something like "Adrenaline Plus") or a similar icon (like changing colors of the current icon) in the fork as it could confuse users and can make it seem like I endorse it.

**If you're building a modpack off Adrenaline and publishing it, please be sure to change the config on Crash Assistant to match your project, such as the Discord links and strings, along with the modpack creators list. Or just remove Crash Assistant entirely if you don't want to deal with updating the modlist every time you make a change.**

If you do make a fork, feel free to let me know and I can add it to the [Credits](/adrenaline/credits) page 😎
