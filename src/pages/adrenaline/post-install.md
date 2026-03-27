---
layout: "../../layouts/WikiPage.astro"
title: "Post-install"
description: "Post install instructions for Adrenaline."
style: "adrenaline"
---

Out of the box, Adrenaline should be good enough for most people. However, this page contains a few things you can do after installing Adrenaline to possibly get better performance, etc.

## Extra performance mods

There are some performance mods that Adrenaline does not come with that you may want to take a look at after installation. Typically these mods are not included because they are either too experimental, cause issues regarding mod compatibility, or break/modify Vanilla features.

### [Nvidium](https://modrinth.com/mod/nvidium)

Uses cutting edge NVIDIA features to render huge amounts of terrain geometry at much more playable framerates. Currently upstream is unmaintained and incompatible with current Sodium and Minecraft versions, so it cannot be installed with Adrenaline as of right now.

However, if you are feeling adventurous, there is a [fork of Nvidium maintained by drouarb](https://github.com/drouarb/nvidium) that works on the latest versions. You can find builds [here](https://github.com/drouarb/nvidium/releases), but **please keep in mind that it is in beta and you should use it at your own risk**.

### [C2ME](https://modrinth.com/mod/c2me-fabric)

Improves chunk performance using multi-threading. It's included in Adrenaline when installed on servers, but not on the client. The reasoning for that is because it can reduce rendering performance while also not really granting a benefit in singleplayer. You should only need to install it on the client if:

- You have multiple players on the integrated server (open to LAN)
- You are using mods such as Chunky and want faster generation
- You are using complex worldgen mods such as Terralith

_Note: C2ME does not do anything on the client when connected to multiplayer._

### [Immersive Optimization](https://modrinth.com/mod/immersive-optimization)

Entity tick scheduler that can heavily improve logic performance without affecting Vanilla functionality.

This mod is not included in Adrenaline out of the box as it has [a couple issues regarding mod incompatibilities and breaking Vanilla features](https://github.com/Luke100000/ImmersiveOptimization/issues).

### [Moonrise](https://modrinth.com/mod/moonrise-opt)

An official port of several Paper patches to Fabric, improves logic performance. Supersedes a few mods including C2ME, Fast Noise, and ScalableLux. If you add this, you will have to remove C2ME, Fast Noise, ScalableLux, and possibly other mods.

This mod is not included in Adrenaline out of the box as it is [incompatible with a wide variety of mods](https://github.com/Tuinity/Moonrise/issues).

### [TT20](https://modrinth.com/mod/tt20)

**Only recommended for servers!** This can cause issues in singleplayer.

Minecraft Java runs at 20 TPS. If your server is lagging, a lower TPS than 20 will cause the game to slow down. Things like eating food or breaking blocks will have delays and it generally can become unplayable.

TT20 is a mod that recalculates the amount of ticks that something takes, based on the TPS. So, if your server is running at 10 TPS, things will happen twice as fast, which will make lag far less visible to the player.

This mod is not included in Adrenaline out of the box as it has [a couple issues regarding breaking Vanilla features](https://github.com/snackbag/tt20/issues).

### [ThreadTweak](https://modrinth.com/mod/threadtweak)

You may want to install ThreadTweak if you notice stutters when generating chunks. Otherwise, ThreadTweak is very likely not needed and could actually reduce performance in a couple scenarios.

- Used to be shipped out of the box with Adrenaline, but [after some reasoning](https://github.com/skywardmc/adrenaline/issues/66), we have gotten rid of it.
- If you do not want to use ThreadTweak, there are other mods that do the same thing, such as [StutterFix](https://modrinth.com/mod/stutterfix), or using the `mixin.perf.thread_priorities` mixin in ModernFix.

## Other performance mods

These optimizations do not improve actual gameplay performance, rather, they speed up other parts of the game. For example, resourcepack loading times, server info loading times, etc.

These are considered out of scope for Adrenaline, as Adrenaline's main goal is to only focus on rendering/logic performance and memory usage. However, if you have opinions on expanding Adrenaline's scope to include these mods, [let us know here](https://github.com/skywardmc/adrenaline/issues/73#issuecomment-4052787021).

- [Fast IP Ping](https://modrinth.com/mod/fast-ip-ping)
- [FastQuit](https://modrinth.com/mod/fastquit)
- [Language Reload](https://modrinth.com/mod/language-reload)
- [quick pack](https://modrinth.com/mod/quick-pack)

## Setting allocated memory

Before setting your memory used by Minecraft, you should first check your system's memory.

<details>

<summary>How to check on Windows, Linux, and Mac</summary>

**If you're on a Windows system**, open up Task Manager, go to the performance tab, and under "memory" you should see the amount you have installed on your system.

![~32 GB installed (Windows screenshot)](https://user-images.githubusercontent.com/42325132/215305534-e4636441-ecb5-4f1f-9135-3ada4050fe06.png)

**If you're on a Linux system**, you can see how much memory you have installed by running `free -g -h -t`. You'll see it in column "Total" and row "Mem".

![~32 GB installed (Linux screenshot)](https://github.com/skywardmc/adrenaline/assets/42325132/7ef74258-db24-42e3-9bb6-224af03cbbf2)

**If you're on a Mac**, click the Apple menu and click "About This Mac". You'll see your installed RAM next to "Memory".

![8 GB installed (MacOS screenshot](https://github.com/skywardmc/adrenaline/assets/42325132/eb8b9d1e-8db9-4c69-9b99-cead56b3aa76)

</details>

Allocating more memory to Minecraft may reduce stutters and increase performance greatly if you are running out, but setting it too high can cause issues as well. If you have a low amount of memory installed, please make sure to keep enough memory for your system. As a general recommendation, **2-4 GB (2048-4096 MB)** is usually all you should use for unmodified Adrenaline, Additive, or Vanilla. Playing with many mods? I'd suggest **4-8 GB (4096-8192 MB)**, however you may set this lower if needed. Do what works for you. Do not set your allocated memory to the same amount as your installed memory, as you could run out of memory for the rest of your OS.

In Prism Launcher, you can set your memory by going to `Settings > Java > Maximum memory allocation`. I'd advise that you keep the `Minimum memory allocation` unchanged.

If you are severely limited on memory, you can probably run the game fine even at 1GB with unmodified Adrenaline. However, below 1GB is untested and not recommended. While I have been able to get it running even with lower than 512MB, it was nearly unplayable due to heavy stutters and sometimes crashes. If you need even more memory savings for whatever reason, you could try enabling ModernFix's `mixin.perf.deduplicate_location` at a cost of load time impact.

## Changing game settings

By default, Adrenaline does **not** change any of Minecraft's quality/graphics settings, except for simulation distance which will be explained later.

### General

Start by changing your render distance. The higher this number, the further you can see. If you are playing on multiplayer, servers usually have a cap for render distance. On low-end systems, this should be set to 4-8 chunks. Mid-range systems will usually work well with 8-16 chunks, and high-end systems should be fine with 12-32 chunks.

After this, you can change your simulation distance. This is the distance in chunks that entities, blocks, fluids, etc are ticked, meaning that things like farms outside of this distance may not work properly. You can set this to 5 for better performance, but it could affect mob spawning or farms. _This only affects singleplayer - you won't notice anything while playing on servers as they have their own setting for simulation distance._

I recommend keeping V-Sync turned off unless you notice screen tearing, which in that case, turn it on or alternatively use Adaptive V-Sync. To use Adaptive V-Sync, you will need to install the [Sodium Extra](https://modrinth.com/project/sodium-extra) mod. Adaptive V-Sync typically has less input latency than normal V-Sync.

### Quality

**On mc1.21.11 or later, it is heavily recommended that you do not turn on "Improved Transparency" unless you absolutely need it's benefits, as it can impact performance significantly. Likewise, if you are below mc1.21.11, it is not recommended that you set the graphics preset to "Fabulous" for the same reason.**

If there are a lot of entities being rendered at once, it may help to reduce "Entity Distance". This is the distance at which entities are rendered.

You may want to try lowering "Mipmap Levels". However, this only mainly affects performance when using a resourcepack that has many animated textures.

Setting particles to a lower quality setting may also help with performance at certain points.

You can hover over any other setting to see a description of what it does and it's impact.

## MacOS half resolution

If you're on a Mac with a Retina display, it is heavily recommended to install [Sodium Extra](https://modrinth.com/mod/sodium-extra) and enable the "half resolution" option under the "Extra" tab. You will have to restart the game after enabling this. Retina displays have very high native resolutions, so running Minecraft at half resolution won't affect quality noticeably while resulting in a large boost in performance and battery life.

## Other mods you may want

Adrenaline is shipped extremely bare-bones and is designed to be flexible so that the user can customize their instance however they want to. Here are some commonly installed mods:

### Sodium add-ons

One mod I recommend installing is [Sodium Extra](https://modrinth.com/mod/sodium-extra). This mod lets you configure extra graphics options and add an FPS counter in the corner of your screen.

On Minecraft versions older than mc1.21.11 you may also want to install [Reese's Sodium Options](https://modrinth.com/mod/reeses-sodium-options). This improves the layout of the Sodium menu. This is not needed on mc1.21.11 or later as Sodium has redesigned their menu.

### Shader support

To get support for shaderpacks, install the [Iris Shaders](https://modrinth.com/mod/iris) mod and then check it out in the `Video Settings` menu.

Iris does not come with built-in shaders. You can get shaders from [Modrinth](https://modrinth.com/discover/shaders), and then drop them in the `shaderpacks` folder.

### Controller support

To get controller support on Minecraft Java Edition, you can install [Controlify](https://modrinth.com/mod/controlify). This is especially handy if you are on a Steam Deck.
