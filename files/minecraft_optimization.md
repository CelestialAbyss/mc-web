A general list of NeoForge / Forge optimization mods that I use. The majority of Fabric users should already be familiar with theirs

> [!NOTE]  
> Please note that this is currently a work in progress!

> [!WARNING]
> This optimization mod list was only tested on computers with x86 CPUs with NVIDIA / AMD GPUs. I can't confirm that computers with ARM CPUs will have the same performance.

Click the dropdown menus below to see the tables.

<details>

<summary>For NeoForge / Forge 1.20 - 1.20.3 </summary>

| Mod name | Purpose | Notes | Incompatibilities |
| -------- | ------- | ----- | ----------------- |
| [FerriteCore](https://www.curseforge.com/minecraft/mc-mods/ferritecore) | Memory usage optimizations. [See here.](https://github.com/malte0811/FerriteCore/blob/main/summary.md) | N/A | Unknown |
| [ModernFix](https://www.curseforge.com/minecraft/mc-mods/modernfix) | Even more memory usage optimizations *and* significant load time reductions. [See here.](https://github.com/embeddedt/ModernFix/wiki/Summary-of-Patches) | Report any bugs to embeddedt. Thank you. | Unknown |
| [Embeddium](https://www.curseforge.com/minecraft/mc-mods/embeddium) | Embeddium is an unofficial fork of Sodium based off Rubidium, with additional changes and bugfixes to integrate it with the Forge modding ecosystem. | Report any bugs to embeddedt. Thank you. | Unknown |
| [Redirector](https://curseforge.com/mc-mods/redirector) | Reduces required memory and improves access speeds. | [Ignore a harmless warn.](https://discord.com/channels/1140803582208245810/1140807479253545001/1164164340669227051) Otherwise, report any bugs to Kasualix / pOtAto__bOy | Unkown |
| [NotEnoughRecipeBook](https://www.curseforge.com/minecraft/mc-mods/notenoughrecipebook) | Completely removes the recipe book and recipe book data from the player. | N/A | There was an incompatible mod somewhere... need to find it. |
| [ImmediatelyFast](https://www.curseforge.com/minecraft/mc-mods/immediatelyfast) | In simplified terms it optimizes UI related things, for example... the F3 menu. [See here.](https://github.com/RaphiMC/ImmediatelyFast/tree/v1.2.7#optimizations) | May break UI elements in certain situations. | Unknown |

</details>

<details>

<summary>For Forge 1.18.2 - 1.19.2</summary>

| Mod name | Purpose | Notes | Incompatibilities |
| -------- | ------- | ----- | ----------------- |
| [FerriteCore](https://www.curseforge.com/minecraft/mc-mods/ferritecore) | Memory usage optimizations. [See here.](https://github.com/malte0811/FerriteCore/blob/main/summary.md) | N/A | Unknown |
| [ModernFix](https://www.curseforge.com/minecraft/mc-mods/modernfix) | Even more memory usage optimizations *and* significant load time reductions. [See here.](https://github.com/embeddedt/ModernFix/wiki/Summary-of-Patches) | Report any bugs to embeddedt. Thank you. | Unknown |
| [Embeddium](https://www.curseforge.com/minecraft/mc-mods/embeddium) | Embeddium is an unofficial fork of Sodium based off Rubidium, with additional changes and bugfixes to integrate it with the Forge modding ecosystem. | Report any bugs to embeddedt. Thank you. | Unknown |
| [LazyDFU](https://www.curseforge.com/minecraft/mc-mods/lazy-dfu-forge) | [See here.](https://github.com/CorgiTaco/lazydfu#lazydfu) | Not needed in 1.20.x+ | Unknown |
| [Redirector](https://curseforge.com/mc-mods/redirector) | Reduces required memory and improves access speeds. | [Ignore a harmless warn.](https://discord.com/channels/1140803582208245810/1140807479253545001/1164164340669227051) Otherwise, report any bugs to Kasualix / pOtAto__bOy | Unkown |
| [NotEnoughRecipeBook](https://www.curseforge.com/minecraft/mc-mods/notenoughrecipebook) | Completely removes the recipe book and recipe book data from the player. | N/A | There was an incompatible mod somewhere... need to find it. |
| [ImmediatelyFast](https://www.curseforge.com/minecraft/mc-mods/immediatelyfast) | In simplified terms it optimizes UI related things, for example... the F3 menu. [See here.](https://github.com/RaphiMC/ImmediatelyFast/tree/v1.2.7#optimizations) | May break UI elements in certain situations. | Unknown |
| [Starlight](https://www.curseforge.com/minecraft/mc-mods/starlight-forge) | Rewrites the lighting engine in simplified terms. | Occasional chunk lighting weirdness. | Unknown |

</details>

---

## General List

- Redirector
- LazyDFU (don't use in 1.20+)
- FerriteCore (required with ModernFix)
- NotEnoughRecipeBook (this was discovered because of a funny incident in voice chat and watching server TPS die due to the vanilla recipe book and player data, thank <@930222347166818404>  for mentioning this)
- ImmediatelyFast (though it *can* definitely cause issues so use at your own risk)
- Starlight (don't use in 1.20+ but can still break lighting)
- Canary (fork of Lithium, but has bugs so **use at your own risk**)
- Better chunk loading by someaddon (Predictive chunk loading based on player movement and more)

There's others like AI Improvements... (let me find that list brb)
