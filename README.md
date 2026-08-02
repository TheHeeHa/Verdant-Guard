# Verdant Guard

Verdant Guard is a polished, dependency-free tower defense game built with HTML, CSS, and JavaScript. Choose your guardian, defend the Heartwood, and adapt your strategy as increasingly dangerous enemies enter the forest.

## The mission

Enemies travel along a visible path toward the Heartwood. Build towers on open terrain, earn credits by defeating enemies, and survive every wave. Escaped enemies damage your health; if it reaches zero, you lose a life and continue with restored health while another life remains.

## How to play

1. Enter a guardian name, choose a map and difficulty, and select 1, 3, 5, or 10 lives.
2. Pick a tower from the build deck and click open ground to place it.
3. Start the next wave and watch how your defenses perform.
4. Between waves, click a placed tower to move, upgrade, retarget, or sell it.
5. Defend the Heartwood through the final wave to win.

Click an active build card again to deselect it. Enemy names in the next-wave preview are clickable, and selecting a live enemy opens a moving information card showing its health, speed, leak damage, and special behavior.

## Towers and strategy

- **Acorn Cannon:** A dependable, balanced damage tower.
- **Nightshade:** Applies poison damage over time.
- **Sun Totem:** Supports nearby defenses.
- **Stormspire:** Strikes groups with chain lightning.

Upgrade towers and choose First, Last, Strongest, or Weakest targeting to control which enemies they prioritize. Towers can be sold between waves for 60% of their original price.

## Maps and enemies

Choose from three maps with different difficulty levels. Medium and Hard maps include obstacles that block normal tower placement. Special terrain can provide range boosts, damage bonuses, or slowing effects.

Early waves introduce basic enemies before runners and tougher armored units arrive. Later battles add regenerating Lifeblooms, splitting enemies, healers, and a final boss with stronger abilities. Harder enemies also deal more damage when they reach the Heartwood.

## Other features

- Clear wave previews and enemy descriptions.
- Pause and normal/2× speed controls.
- Synthesized music, projectiles, hit effects, and sound effects.
- Movable and sellable towers between waves.
- Health, lives, credits, score, and wave tracking.
- Game-over and victory screens with round and lifetime statistics.
- Guardian name, settings, victories, and best scores saved in the browser.

## Run locally

No packages or installation are required. From the project folder, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser.

## Built with

- HTML5 Canvas
- CSS
- Plain JavaScript
- Web Audio API
