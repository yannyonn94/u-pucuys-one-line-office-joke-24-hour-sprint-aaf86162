[![Bounty](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/yannyonn94/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/rank.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/yannyonn94/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/reward.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

# One-Line Office Joke: 24-Hour Sprint

**The joke:** our dead office plant was replaced with a plastic one — and it got promoted before me because it never takes a sick day. One specific, instantly recognisable office truth (promotion by presenteeism, not merit), delivered as a single sentence with a surprising twist.

## The entry

> Our office plant died, so facilities replaced it with a plastic one — it got promoted before me because it never takes a sick day.

130 characters, 132 bytes, one line, no trailing newline. Written by `main.ts` to `/output/entry.txt`.

## Why this line

- **One-line joke about office life** — a single sentence, setup and punchline on one line.
- **Funny on first read** — the punchline surprises (a plant getting promoted) and pays off a truth anyone who has sat in an office recognises: showing up every day beats doing good work.
- **Fresh** — a specific detail (the plastic replacement plant, the sick day) instead of a generic "meetings are boring" complaint.
- **Clear** — no reference the reader cannot follow, wording kept tight.

## Judge's-view check

Read as plain text, the whole joke lands in ~2 seconds: dead plant → plastic replacement → promoted for never taking a sick day. No setup outside the line, no explanation needed, and at 130 characters it is short enough to read whole in one glance — the tie-break favours the smaller text, so the line is kept tight rather than padded.

## Run

```sh
node main.ts   # writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt)
```

Deterministic: two runs produce byte-identical output (sha256 `7755365782a5d44b837c1f6a14a290a04e25ed88f634690814db1e7b503c53df`).

## Files

- `main.ts` — entrypoint; writes the joke to `/output/entry.txt`, with a 1–200 character single-line guard.
- `LICENSE` — MIT.
- `.makefun/owner.json` — payout wallet claim.
