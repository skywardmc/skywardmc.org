---
layout: "../../layouts/Layout.astro"
title: "Adrenaline/Config changes"
description: "All of the changes that Adrenaline makes to mods and Vanilla configs."
style: "adrenaline"
---

Most mods are fine out of the box and don't typically need tweaking. They're already tuned well. However, some mods, such as ModernFix, offer nice optimizations that are disabled by default for mod compatibility, which we enable. Here's a full summary of what we change out of the box.

**If you are making a modpack, you may want to disable the ModernFix mixins to prevent possible issues with certain content mods.**

## All versions

- Minecraft
  - `simulationDistance` from `12` to `8`
- Dynamic FPS
  - Volume multipliers to `1.0`
  - Out-of-focus FPS target from `1` to `2`
  - Minimize GC activation to `true`
- FerriteCore
  - `useSmallThreadingDetector` to `true`
- ModernFix
  - `mixin.perf.dynamic_entity_renderers` to `true`
  - `mixin.perf.dynamic_resources` to `true`
  - `mixin.perf.faster_item_rendering` to `true`
- Very Many Players _(server)_
  - `show_async_loading_messages` to `false`

## 1.21.1 specific

- Enhanced Block Entities
  - `*_AO` to true
- Sodium Leaf Culling
  - `leaf_culling_quality` from `"SOLID_AGGRESSIVE"` to `"SOLID"`

## 1.20.1 specific

- Cull Less Leaves
  - `randomRejection` from `0.2` to `0.0`
- Enhanced Block Entities
  - `*_AO` to true
