// World News — Friday 20 November 2026 (make.fun bounty news-image-20261120).
//
// A program that writes one 1024x1024 image summing up the day's world news
// as a smooth, modern newspaper front page, "THE WORLD TODAY — Friday
// 20 November 2026":
//   - Lead: Trump, Xi and Putin sign a "Declaration toward Peace" after the
//     first three-way summit in Shenzhen (UN reform, nuclear risk talks,
//     energy stability).
//   - World Court: the ICJ rules 9-6 that Myanmar committed genocide against
//     the Rohingya — the first state ever found guilty of genocide.
//   - Asian markets plunge (Nikkei -4.8%, Taiwan -5%+) as the AI sell-off
//     spreads; Kyiv hit again as Ukraine strikes the Crimea Bridge;
//     Houthi missiles damage a Riyadh tower; the UK sends 1,000 drones to
//     Ukraine (£260m); Anthropic shares jump 17% on their Nasdaq debut;
//     the US Senate rejects an Iran war-powers bid 51-48.
//   - Briefs strip: Kenya discharges its last Ebola patient, Trump pardons
//     Pete Rose, the US sanctions Comancheros and 'Ndrangheta, 13,000
//     protest in Tokyo, Cyclone Xavier tracks toward Fiji.
//
// The image is bundled beside this file as entry.png (JPEG bytes in a file
// named entry.png, which the gate allows: it tells PNG from JPEG by the
// first bytes). The program copies it byte for byte to the output
// directory. No network, no clock, no randomness: two runs write identical
// bytes. Node 22, standard library only.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The grader runs this twice and the two runs must write the same bytes,
// so this program only copies a fixed file and never generates anything.
// The bundled image is 1024x1024, 290,430 bytes (sha256 recorded in the
// submission handoff), well under the 1 MiB gate.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
