# Verdant Guard

A dependency-free tower defense game built with HTML, CSS, and JavaScript.

## Run locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser.

## How to play

Choose a tower from the build deck, then click open grass to place it. Start each wave when ready. Defeat enemies to earn credits and protect the heartwood through all eight waves.

Click an active build card again to deselect it. Between waves, click any placed tower to move it or sell it for 60% of its original price.

Choose a guardian name and one of three maps before playing. Medium and Hard maps include placement-blocking obstacles. Later waves introduce runners, armored Ironbacks, regenerating Lifeblooms, splitting enemies, healers, and a final boss.

## Advanced features

- Upgrade towers to level 3 and choose First, Last, Strongest, or Weakest targeting.
- Inspect enemies for health, speed, and ability details.
- Preview each wave, pause play, or switch between normal and 2× speed.
- Build Acorn Cannons, Nightshade poison towers, Sun Totem support towers, and chain-lightning Stormspires.
- Use each map's special terrain: range-boosting sun patches, damage runes, or slowing bramble traps.
- Toggle synthesized music and sound effects with the music-note button.
- Victories, best scores, guardian name, settings, and difficulty rewards save automatically in the browser.

Choose 1, 3, 5, or 10 starting lives before a game. Every life has 100 health; leaked enemies deal different amounts of damage based on their strength. Losing all health consumes a life and restores health when another life remains. The results screen includes current-round and lifetime statistics.

Enemy names in the next-wave preview are clickable and reveal descriptions. Clicking a live enemy on the battlefield opens a moving information popup above it with its health, speed, leak damage, and special behavior.

The game also contains a hidden cheat panel. During a round, clicking the word “Guard” beside the player name 21 times opens a password prompt. The panel can customize the next wave, resources, total waves, score, health, lives, buffs, traps, invincibility, and quick round actions.

After a successful unlock, a Cheats shortcut remains beside “Guard” for the rest of that round. The controls open as a side drawer. Buffs and traps can be positioned with manual X/Y coordinates or by choosing “Pick a position on the map” and clicking the battlefield.

The Free tower placement cheat permits building and moving towers anywhere inside the battlefield, including directly on the enemy path, on obstacles, at the edges, or overlapping other towers.

The right-click upgrade cheat jumps a tower directly to the chosen target level in one click and charges the combined credit cost of every required upgrade. With unlimited levels enabled, the target accepts any number up to 1,000,000 or the word `max` as a shortcut for Level 1,000,000.

Very high tower levels keep their full gameplay range and power, but their visual range indicator is capped so it cannot cover the screen. On-field level badges abbreviate large values such as `10K`, `100K`, and `MAX`.
