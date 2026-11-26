// Funniest Lost Sock Status Update — program/v1 entry.
// Writes one status update, in the voice of a lost sock, to /output/entry.txt.
// Deterministic: a fixed string, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

// Revised (was 189 chars, over the 120 gate): cut the day-47 framing, the
// lint children and the "never texted" tail. The joke is tighter now — the
// sock is not lost at all, it remarried under the sofa, and the sting lands
// in the last few words: its pair moved on in a week.
const LINE =
  "I'm not lost. I'm under the sofa, married to a dust bunny, raising lint. My pair moved on in a week.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
