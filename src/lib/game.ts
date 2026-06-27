import { LANES } from "./chart";

export { LANES };

// Physical keys (left + right hand) and the colour for each lane, left→right.
// LANE_CODES are KeyboardEvent.code values — these match the physical key
// regardless of layout or IME state (e.g. Korean 한글 mode), so input works
// without the user having to switch back to English.
export const LANE_KEYS = ["d", "f", "j", "k"];
export const LANE_CODES = ["KeyD", "KeyF", "KeyJ", "KeyK"];
export const LANE_COLORS = ["#7c5cff", "#36e0c8", "#ffc46f", "#ff6fb5"];

// Lane geometry, matched to the keyboard width in KeyboardScene.
const HALF_SPAN = 5.4;
export const LANE_WIDTH = (HALF_SPAN * 2) / LANES;
export function laneX(i: number): number {
  return ((i + 0.5) / LANES) * 2 * HALF_SPAN - HALF_SPAN;
}

// Falling-note timing + geometry. Notes spawn LEAD seconds before their hit
// time and travel TRAVEL units in z to reach the hit bar.
export const LEAD = 1.9;
export const TRAVEL = 12;
export const HIT_Z = 1.3;
export const SPAWN_Z = HIT_Z - TRAVEL;
export const TILE_Y = 0.45;

export function tileZ(timeToHit: number): number {
  return HIT_Z - (timeToHit / LEAD) * TRAVEL;
}

// Judgement windows (seconds of absolute timing error) — kept generous so
// hits feel forgiving and satisfying rather than punishing.
export const PERFECT = 0.12;
export const GOOD = 0.28; // also the outer hit window

export type Judgement = "perfect" | "good" | "miss";

// Shared, render-loop-friendly channel between the input layer and the scene.
export type GameBus = {
  flash: Float32Array; // per-lane pulse, set to 1 on a hit, decayed in-scene
};

export function makeGameBus(): GameBus {
  return { flash: new Float32Array(LANES) };
}
