---
layout: "../../layouts/WikiPage.astro"
title: "Post-install"
description: "Post install instructions for Additive."
style: "additive"
---

Out of the box, Additive should be good enough for most people. However, this page contains a few things you can do after installing Additive to possibly get better performance, etc.

## Performance mods to take a look at

There are some performance mods that Additive does not come with, which you may want to take a look at after installation. Typically these mods are not included because they are either too experimental, cause many issues regarding mod compatibility, break/modify Vanilla features, or other reasons.

- **[C2ME](https://modrinth.com/mod/c2me-fabric)** (included server-side): Improves chunk performance through multi-threading. Not included client-side as it's generally not needed in singleplayer and may reduce rendering performance. You may want this if you have multiple players connected to your LAN world, or are using mods to pre-generate such as Chunky, or are using complex world generation mods such as Terralith.
- **[Nvidium](https://modrinth.com/mod/nvidium)**: Replacement rendering backend for Sodium that uses Nvidia-only OpenGL extensions to increase FPS by a significant amount. There is a [fork of Nvidium maintained by drouarb](https://github.com/drouarb/nvidium) that works on current Sodium versions, but _please keep in mind that it is in beta and you should use it at your own risk_.
- **[Immersive Optimization](https://modrinth.com/mod/immersive-optimization)**: Entity tick scheduler that aims to improve logic performance without affecting Vanilla functionality. Not included out of the box as it has a couple issues regarding [mod incompatibilities and breaking Vanilla features](https://github.com/Luke100000/ImmersiveOptimization/issues).
- **[Moonrise](https://modrinth.com/mod/moonrise-opt)**: An official port of several Paper patches to Fabric. Supersedes several mods such as C2ME, ScalableLux, and Noisium. Not included out of the box as it is [incompatible with a wide variety of mods](https://github.com/Tuinity/Moonrise/issues).
- **[TT20](https://modrinth.com/mod/tt20)**: Recalculates the amount of ticks that something takes based on the TPS. Not included out of the box as it has a couple issues regarding [breaking Vanilla features](https://github.com/snackbag/tt20/issues).
- **[ThreadTweak](https://modrinth.com/mod/threadtweak)**: Only needed if you notice stutters when generating chunks. Otherwise, ThreadTweak is likely not needed and could possibly reduce performance in a couple scenarios. If you do not want to use ThreadTweak, there are other mods that do the same thing, such as [StutterFix](https://modrinth.com/mod/stutterfix), or using the `mixin.perf.thread_priorities` mixin in ModernFix.

## JVM arguments and memory allocation

Please see <https://exa.y2k.diy/garden/jvm-args> for information on JVM arguments, what Java distribution you should use for Minecraft, and how much memory you should allocate to the game.

This modpack can run with memory allocations as low as 512MB, and possibly even lower thanks to Adrenaline's memory optimizations, but it's not recommended to go below 1GB. 2-4GB is fine for most lightly modded instances such as Adrenaline and Additive.

## Important game settings to keep note of

By default, Additive does **not** change any of Minecraft's quality/graphics settings, except for simulation distance. You can hover over any setting in-game not listed here to see a description of what it does and it's impact, but these are some important settings to take note of:

- General
  - **Render Distance**: Affects how far you can see in the distance. If you are playing on multiplayer, servers have a limit. This has a high impact on render performance.
  - **Simulation Distance**: Distance at which entities, blocks, fluids, etc are ticked. Setting this below 8 may affect mob spawning behavior. This has a high impact on logic performance (singleplayer only).
- Quality
  - **Improved Transparency/Fabulous graphics**: This has a very high impact on render performance. Generally not recommended unless you really want it.
  - **Entity Distance**: How far you can see entities in the distance. This has a high impact on render performance.
- Extras
  - **Reduce Resolution on MacOS**: _Heavily recommended_ if you are on a Mac with a retina display. Will improve performance significantly at little visual cost.
