---
layout: "../../layouts/Layout.astro"
title: "Adrenaline/Post-install"
description: "Post install instructions for Adrenaline."
style: "adrenaline"
---

This page contains a few things you can do after installing Adrenaline to get better performance, better stability, etc.

## Improve performance

There are some ways to improve your performance past installation. Some of them are experimental and should only be used if you really want to.

### Extra mods to consider

#### Nvidium (fork)

Uses cutting edge NVIDIA features to render huge amounts of terrain geometry at much more playable framerates. Currently upstream is unmaintained and incompatible with current Sodium and Minecraft versions, so it cannot be installed with Adrenaline as of right now.

However, if you are feeling adventurous, there is a fork of Nvidium maintained by drouarb that works on the latest versions. You can find builds [here](https://github.com/drouarb/nvidium/releases), but **please keep in mind that it is in beta and you should use it at your own risk**.

#### [Ixeris](https://modrinth.com/mod/ixeris)

Implements buffered raw input and threaded event polling. Recommended if you use a mouse with a very high polling rate. Not included by default right now as I'm waiting for buffered raw input to be considered stable, but it will be added [once that time comes](https://github.com/skywardmc/adrenaline/issues/61).

#### [Concurrent Chunk Management Engine](https://modrinth.com/mod/c2me-fabric)

Improves chunk performance using multi-threading. It's included in Adrenaline when installed on servers, but not on the client. The reasoning for that is because it can reduce rendering performance while also not really granting a benefit in singleplayer. You should only need to install it on the client if:

- You have multiple players on the integrated server (open to LAN)
- You are using mods such as Chunky and want faster generation
- You are using complex worldgen mods such as Terralith

C2ME only has an impact when used on a dedicated server or in singleplayer (integrated server). It does not do anything when the client is connected to a server.

#### [Immersive Optimization](https://modrinth.com/mod/immersive-optimization)

Entity tick scheduler that improves logic performance without affecting Vanilla functionality. Not included in Adrenaline by default as it may have some rough edges. [May be implemented in the future](https://github.com/skywardmc/adrenaline/issues/53).

#### [Moonrise](https://modrinth.com/mod/moonrise-opt)

An official port of several Paper patches to Fabric, improves logic performance. Not included in Adrenaline as it is incompatible with a very large amount of mods. Supersedes a few mods including ScalableLux and C2ME. If you add this, you will have to remove ScalableLux and C2ME, and possibly other mods. See their Modrinth page for more information.

### Setting your allocated memory

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

Allocating more memory to Minecraft may reduce stutters and increase performance greatly if you are running out, but setting it too high can cause issues as well. If you have a low amount of memory installed, please make sure to keep enough memory for your system. As a general recommendation, **2-4 GB (2048-4096 MB)** is usually all you should use for unmodified Adrenaline, Additive, or Vanilla. Playing with many mods? I'd suggest **4-8 GB (4096-8192 MB)**, however you may set this lower if needed. Do what works for you. Do not set your allocated memory to the same amount as your installed memory, as you could run out of memory for the rest of your OS.\_

If you are severely limited on memory, unmodified Adrenaline can run surprisingly well even with a minimum of 768 MB because of ModernFix and FerriteCore. It can probably can be playable at even lower allocations, however I do not test with very low RAM so your mileage may vary.

In Prism Launcher, you can set your memory by going to `Settings > Java > Maximum memory allocation`. I'd advise that you keep the `Minimum memory allocation` unchanged.

### Change your Minecraft settings

By default, Adrenaline does **not** change any of Minecraft's quality/graphics settings, except for simulation distance which will be explained later.

#### General

Start by changing your render distance. The higher this number, the further you can see. If you are playing on multiplayer, servers usually have a cap for render distance. On low-end systems, this should be set to 4-8 chunks. Mid-range systems will usually work well with 8-16 chunks, and high-end systems should be fine with 12-24 chunks.

After this, you can change your simulation distance. This is the distance in chunks that entities, blocks, fluids, etc are ticked, meaning that things like farms outside of this distance may not work properly. You can set this to 5 for better performance, but it could affect mob spawning or farms. _This only affects singleplayer - you won't notice anything while playing on servers as they have their own setting for simulation distance._

I recommend keeping V-Sync turned off unless you notice screen tearing, which in that case, turn it on or use Adaptive V-Sync. To use Adaptive V-Sync, you will need to install the [Sodium Extra](https://modrinth.com/project/sodium-extra) mod. If you are using Additive, this mod is already included. Adaptive V-Sync typically has less input latency than normal V-Sync.

#### Quality

Set graphics quality to "fast" on low-end systems and "fancy" on mid-range to high-end systems. This will affect if leaves are transparent or not, weather particles, and other things. **Do not use Fabulous unless you absolutely need it's benefits, as it can have a noticeably negative impact on performance.**

Set particles to "minimal"/"decreased" on low-end systems, and "all" on other systems. For greater control over particles, install Sodium Extra.

### MacOS half resolution

If you're on a Mac with a Retina display, it is heavily recommended to install [Sodium Extra](https://modrinth.com/mod/sodium-extra) and enable the "half resolution" option under the "Extra" tab. You will have to restart the game after enabling this. Retina displays have very high native resolutions, so running Minecraft at half resolution won't affect quality noticeably while resulting in a large boost in performance and battery life. If you're using Additive, Sodium Extra is already installed.

## Improve your experience

Adrenaline is shipped extremely bare-bones and is designed to be flexible so that the user can customize their instance however they want to. Here are some commonly installed mods:

### Sodium add-ons

One mod I recommend installing is [Sodium Extra](https://modrinth.com/mod/sodium-extra). This mod lets you configure extra graphics options and add an FPS counter in the corner of your screen. If you are using Additive, this is already included by default.

On Minecraft versions older than mc1.21.11 you may also want to install [Reese's Sodium Options](https://modrinth.com/mod/reeses-sodium-options). This improves the layout of the Sodium menu. This is not needed on mc1.21.11 or later as Sodium has redesigned their menu.

### Shader support

To get support for shaderpacks, install the [Iris Shaders](https://modrinth.com/mod/iris) mod and then check it out in the `Video Settings` menu. If you are using Additive, this is already included by default.

Iris does not come with built-in shaders. You can get shaders from [Modrinth](https://modrinth.com/discover/shaders), and then drop them in the `shaderpacks` folder.

### Controller support

To get controller support on Minecraft Java Edition, you can install [Controlify](https://modrinth.com/mod/controlify). This is especially handy if you are on a Steam Deck. If you are using Additive, this is already included by default.

### Immersive VR support

If you want to play immersively on VR, the [Vivecraft](https://modrinth.com/mod/vivecraft) mod exists for that. View [vivecraft.org](https://www.vivecraft.org) for more information on how the mod works and how to use it.
