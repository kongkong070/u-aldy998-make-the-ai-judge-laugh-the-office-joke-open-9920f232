# Make the AI Judge Laugh: the Office Joke Open

[![make.fun](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/kongkong070/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/kongkong070/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

One line of office comedy, at most 200 characters, written by `main.ts`
to `/output/entry.txt`.

## The entry

> I put “per my last email” in a note to the office printer, and it finally printed — turns out even the machines here only respond to passive aggression.

152 characters, one line, about office life: the printer, the
passive-aggressive email phrase, and the payoff that even the machines
only answer to passive aggression.

## How it works

`main.ts` (Node 22 stdlib only) validates the joke — 1 to 200
characters, not only white space, a single line — then writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), and reads it back
to confirm the written bytes match the validated text exactly.
