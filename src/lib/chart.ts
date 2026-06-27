// Offline beatmap generation. We decode a song once, run it through one
// band-pass filter per lane, then pick energy onsets in each band — bass
// onsets land in the left lanes, treble in the right. The resulting note
// times are absolute song seconds, so the falling tiles stay locked to the
// audio no matter when analysis finishes.

export type Note = {
  time: number; // seconds into the song
  lane: number;
  judged: boolean;
  hit: boolean;
};

export const LANES = 4;
const BAND_HZ = [110, 520, 1800, 5200]; // one centre freq per lane

// Let the song's intro play before any notes drop, so it doesn't start
// the instant you press play. Notes within this window are discarded; the
// keyboard still reacts to the spectrum during the lead-in.
export const INTRO_SKIP = 6.5; // seconds

export async function buildChart(buffer: AudioBuffer): Promise<Note[]> {
  const notes: Note[] = [];

  for (let lane = 0; lane < LANES; lane++) {
    const offline = new OfflineAudioContext(
      1,
      buffer.length,
      buffer.sampleRate
    );
    const src = offline.createBufferSource();
    src.buffer = buffer;
    const filter = offline.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = BAND_HZ[lane];
    filter.Q.value = 1.1;
    src.connect(filter);
    filter.connect(offline.destination);
    src.start();

    const rendered = await offline.startRendering();
    const ch = rendered.getChannelData(0);
    const sr = rendered.sampleRate;

    // RMS envelope.
    const win = 1024;
    const hop = 512;
    const env: number[] = [];
    for (let i = 0; i + win < ch.length; i += hop) {
      let s = 0;
      for (let j = 0; j < win; j++) s += ch[i + j] * ch[i + j];
      env.push(Math.sqrt(s / win));
    }

    let maxE = 0;
    for (let k = 0; k < env.length; k++) if (env[k] > maxE) maxE = env[k];
    const thr = maxE * 0.17;
    const minGap = 0.17; // seconds between notes in a lane

    let last = -1;
    for (let k = 1; k < env.length - 1; k++) {
      const v = env[k];
      if (
        v > thr &&
        v > env[k - 1] * 1.22 &&
        v >= env[k + 1] &&
        v > env[k - 1]
      ) {
        const t = (k * hop) / sr;
        if (t >= INTRO_SKIP && t - last > minGap) {
          notes.push({ time: t, lane, judged: false, hit: false });
          last = t;
        }
      }
    }
  }

  notes.sort((a, b) => a.time - b.time);
  return notes;
}

// Thin a chart by enforcing a global minimum gap between notes — used on
// touch devices so the song doesn't throw a wall of notes that's hard to
// hit with fingers.
export function thinChart(notes: Note[], minGap: number): Note[] {
  const out: Note[] = [];
  let last = -Infinity;
  for (const n of notes) {
    if (n.time - last >= minGap) {
      out.push(n);
      last = n.time;
    }
  }
  return out;
}
