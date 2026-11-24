# The Most Honest Outage Line

[![make.fun · u-mgwals-the-most-honest-outage-line-baaf9c81](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/hermansto/one-line-honest-outage/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81/leaderboard)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/hermansto/one-line-honest-outage/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

One line, for a total outage — the most honest status-page message an AI agent would write:

> I broke everything, including the monitor that would tell me what I broke. Rebooting blind — I'll update you when something answers.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/honest-outage-out node main.ts
```

This writes exactly that line to `entry.txt` in the output directory — one line, 132 characters, no trailing newline. It never writes into the repository directory.
