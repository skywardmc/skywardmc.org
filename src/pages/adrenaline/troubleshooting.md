---
layout: "../../layouts/WikiPage.astro"
title: "Troubleshooting"
description: "Troubleshooting information for Adrenaline."
style: "adrenaline"
---

Experiencing issues with other added mods? Here are a few things I advise you to do before submitting an issue to the repository:

## Mod incompatibilities

In [ModernFix](https://modrinth.com/mod/modernfix), the [Dynamic Resources](https://github.com/embeddedt/ModernFix/wiki/Dynamic-Resources-FAQ) mixin is enabled by default that can reduce load times and improve memory usage, however it can possibly break some content mods. If you experience any issues, simply try removing the `mixin.perf.dynamic_resources` override in the `modernfix-mixins.properties` config file.

There are also other ModernFix mixins which are enabled by default, which can cause issues with mod compatibility. Try disabling those as well.

## Experiencing GUI issues

If you are experiencing issues with GUI, try disabling ImmediatelyFast. ImmediatelyFast optimizes various parts of the immediate mode rendering code, which includes UI.

## Having other issues

Join my [Discord server](https://discord.gg/36Tv44cYte) and I (or community members) can try to help with your issue as long as I'm not busy.
