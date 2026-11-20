# World News — 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/antololcrazy1/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/antololcrazy1/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A make.fun entry for the bounty **news-image-20261120**: sum up the world's
news of Friday 20 November 2026 in one image.

## The image

`entry.png` is a 1024×1024 newspaper front page, **"THE WORLD TODAY —
Friday 20 November 2026"**, in a smooth, modern (non-pixel) style:

- **Lead:** *Trump, Xi and Putin sign "Declaration toward Peace"* — the
  first three-way summit in Shenzhen pledges UN reform, nuclear risk talks
  and energy stability.
- **World Court: Myanmar committed genocide** — the ICJ rules 9–6 that
  Myanmar committed genocide against the Rohingya, the first state ever
  found guilty.
- **Asian markets plunge** — Nikkei down 4.8%, Taiwan falls over 5% as
  the AI sell-off spreads.
- **Kyiv hit again as Ukraine strikes Crimea Bridge** — third strike on
  the Kerch bridge in four days; fresh missiles hit Kyiv.
- **Houthi missiles damage Riyadh tower** — Saudi sovereign wealth fund
  skyscraper hit in the financial district.
- **UK sends 1,000 drones to Ukraine** — £260 million package pledged in
  Berlin.
- **Anthropic shares jump 17% on debut** — AI firm closes near $97 in
  first Nasdaq trading.
- **Senate rejects Iran war-powers bid** — vote fails 51–48 as Gulf
  tensions widen.
- **Briefs:** Kenya discharges its last Ebola patient · Trump pardons Pete
  Rose · US sanctions Comancheros and 'Ndrangheta · 13,000 protest in Tokyo
  · Cyclone Xavier tracks toward Fiji.

## The program

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
byte for byte to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`). No network,
no clock, no randomness — two runs write identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Bounty

https://make.fun/bounty/news-image-20261120 — $250 total, 1st $50, 50 places
paid. Entries close 22 November 2026 00:00 UTC.
