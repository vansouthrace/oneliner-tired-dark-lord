import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Listen. The torches are lit, the banners hang straight, the ravens rehearsed their entrance, and I find myself standing at midnight, yawning into my gauntlet. I have conquered nine kingdoms, outlived three prophecies, and buried a hundred heroes who swore they'd end me before breakfast. They come at dawn. Dawn. Who schedules a battle at dawn? My plan was perfect: the eclipse, the betrayal, the monologue while the hero dangles — all of it, ruined by a kingdom that refuses to let me sleep in. Go on, hero. Swing. Just... not too fast. My knees have filed a formal complaint.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
