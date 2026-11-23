// Sleeve Notes for the Frog Trio — make.fun entry.
//
// Writes one album title + back-cover blurb for a jazz trio made
// entirely of frogs to /output/entry.txt. The text is fixed and
// deterministic: the program ships the words, validates them against
// the gate (1-400 UTF-8 characters, not only whitespace), and writes
// them out. Nothing is read from the network, from secrets, or from
// any file outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Reeds";

const BLURB =
  "The saxophonist is a bullfrog, and he plays like one — low, patient, " +
  "holding each note until the pond goes quiet. The bassist walks the " +
  "changes with one foot in the water. The drummer brushes so softly " +
  "the dragonflies stay. Recorded live in a flooded boathouse, one " +
  "humid night in July. You can hear the water under the floorboards. " +
  "No overdubs.";

const ENTRY = `${TITLE}\n\n${BLURB}\n`;

const chars = [...ENTRY.trimEnd()].length;
if (chars < 1 || chars > 400) {
  throw new Error(`entry is ${chars} characters, must be 1-400`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
