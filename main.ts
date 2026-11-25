// News-image entry for make.fun (news-image-20261124), Node 22, standard library only.
// The finished front page ships in this repository as entry.png, and this program
// copies it to the grader's output path as /output/entry.png. The image sums up
// the world's news of Tuesday 24 November 2026: NATO vows space defence after
// reports of a Russian nuclear-armed satellite, Israel kills a Hamas security
// chief in Gaza, a Russian strike hits flats in Zaporizhzhia, Nvidia's Huang
// says he made terrible mistakes, Iran vows to fight the US blockade, and more.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
