---
layout: "../../layouts/WikiPage.astro"
title: "Config changes"
description: "All of the changes that Hammer makes to mods and Vanilla configs."
style: "hammer"
---

Most mods are fine out of the box and don't typically need tweaking. They're already tuned well. However, some mods, such as ModernFix, offer nice optimizations that are disabled by default for mod compatibility, which we enable. Here's a full summary of what we change out of the box.

**If you are making a modpack, you may want to disable the ModernFix mixins to prevent possible issues with certain content mods.**

## All versions

- Minecraft
  - `simulationDistance` from `12` to `8`
- Dynamic FPS
  - `states.*.volume_multipliers` to `1.0`
  - `states.unfocused.frame_rate_target` from `1` to `2`
  - `states.invisible.run_garbage_collector` to `true`
- FerriteCore
  - `useSmallThreadingDetector` to `true`
- ModernFix
  - `mixin.perf.dynamic_entity_renderers` to `true`
  - `mixin.perf.dynamic_resources` to `true`
  - `mixin.perf.faster_item_rendering` to `true`

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
