import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence pitch for "A Day of One-Line Pitches".
// The whole entry is this single sentence: it speaks straight to a friend
// who has never coded, names the easy first step in plain words, and ends
// on the payoff — their idea, real by tonight.
const PITCH =
  "You've already got the idea — just tell make.fun what app you want in plain words, and its AI agent builds it while you watch: no code, no risk, and your first app could be real by tonight.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
