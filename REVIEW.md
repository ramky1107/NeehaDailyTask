# Project Next Horizon — proposed dashboard update (for your approval)

Nothing in the project folder has been changed yet. The proposal is a working copy of the dashboard:

    C:\Users\HP\AppData\Local\Temp\claude\D--Personal-Code-githubRepo-NeehaDailyTask\14940c81-83f7-4f77-9005-45d587546f21\scratchpad\preview\index.html

Open it in a browser to review it as the steering committee would see it.

## 1. What is in the proposal

- **Phase 1:** 16 experiments from the Notion board (P1-01 to P1-16).
- **Phase 2:** 15 experiments from New Experiments_v2 (P2-01 to P2-15), each with its implementation timeline and the Phase 1 experiment it builds on.
- **Status:** taken from the Notion "Current Status" column, the 29 Oct results doc and the 27 Oct transcript. No experiment is marked Needs Attention; that is your call.
- **Results:** the 29 Oct geo-fence and Kurla self-checkout numbers, plus the figures reported in meetings (trial room, app checkout, styling, QR discovery, gifting).
- **Meetings:** 14 entries, 7 Jul to 27 Oct (summary, highlights, decisions, risks).
- **Actionables:** 24 open items as of 27 Oct, with due dates only where one was stated or implied (e.g. "next meeting" = 3 Nov).
- **Team:** 11 people. **Stores:** 7 (R City, Indiranagar, Viviana, Phoenix Kurla, Jaipur Pacific Mall, JP Nagar, plus "Network").

## 2. Code changes (app.js)

- Results can be a list of bullet points as well as one sentence.
- Phase 2 cards show the implementation timeline (Immediate / Dependent / Deferred).
- Experiments with no metrics show "Not defined yet" instead of an empty list.
- The Actionables page shows **Pending** items by default. Completed items stay in the data and can be seen with the filter, as you described.

## 3. Please confirm or correct

1. **P1-11 Personal shopper → "On Hold".** Notion says "Not started", but on 27 Oct Altamas said the project is paused pending direction. | not started
2. **P2-03 VM for product QR, owner.** The sheet says Hemanth; in meetings the work is done by Jigisha and Varun Babji. | Varun babji
3. **Phase 2 marked In Progress:** P2-02 landing page (in development), P2-03 product-QR VM, P2-13 composite funnel, P2-14 self-checkout VM, P2-15 intent-based discovery (in design). The rest are Not Started. | Phase-2 are yet to start. none of them have started yet 
4. **P2-11 CCTV analytics.** A POC with Agrex, Aurify and Recurrent ran in Aug–Sep, but it hasn't come up since 18 Aug. I set it to Not Started. Is it still running?
5. **Kiosk go-live.** The Notion board says Kurla and Jaipur went live in the 3rd week of Oct. On 27 Oct Shariq said Jaipur goes live "tomorrow" (28 Oct). I wrote "live at both stores in Oct". | what shariq said is right
6. **Team roles** are inferred from the meetings (e.g. Nish as "Chair, weekly review"). Please correct titles if you want formal designations. Nish as chair , amit and varun are also supporting chair, I, myself, Neeharika is Program manager, remaining are experiment owners.
7. **Geo-fence results.** I used the 29 Oct doc. On 27 Oct Malavika verbally said "₹10 Cr / ₹7 Cr", which looks like a slip for ₹10 lakh / ₹7 lakh, consistent with the doc.| you are right

## 4. Earlier action items with no clear close-out (please mark each Done or Still open)

Not on the dashboard yet. Anything you mark "Still open" will be added.

| # | Raised | Item | Owner |
|---|--------|------|-------|
| 1 | 18 Aug | Self-checkout incrementality: 3 store clusters, pre/post, conversion correlation; present at SteerCo | Hemanth | done
| 2 | 15 Sep | Share last 3 months' app self-checkout funnel data and a one-page summary of issues (tech / customer / staff) | Hemanth | done
| 3 | 15 Sep | Build Adobe self-checkout funnel dashboard for Hemanth | Malavika | done
| 4 | 25 Aug | Assign someone in Hemanth's team to monitor the in-store express checkout funnel and alerts | Hemanth | still open
| 5 | 6 Oct | Kiosk bug: cancelled transaction still sends "thank you / e-bill" SMS | Shariq | done
| 6 | 13 Oct | Kiosk: staff override for open/multiple-MRP items (instead of sending customers to the till) | Shariq | done
| 7 | 8 Sep | Get the vendor's trial-room session logic and variables; validate the 2-minute session rule | Shariq | done
| 8 | 6 Oct | Add takeaways and statistical confidence to the trial-room SteerCo slides | Shariq, Neeharika | done
| 9 | 22 Sep | Exclude geo "detections" caused by entrance QR scans from notification attribution | Malavika | done
| 10 | 15 Sep | Mall-store diagram (floor + neighbouring stores) when a geo notification is tapped | Malavika | still open
| 11 | 11 Aug | First-cut in-store PDP design (with Rohit and Swapnil) | Malavika | done
| 12 | 15 Sep | Experiment-wise VM update for the customer-journey experiment; app development dependencies | Hemanth, Varun Babji | still open
| 13 | 18 Aug | Share the CCTV POC findings and recommend a vendor | Shariq | done
| 14 | 8 Sep | Assign owners for the new experiments and complete the template (team, effort, timeline) | Neeharika, Varun R., Amit | done
| 15 | 28 Jul | Set up the secure project AI assistant (recordings, results) | Varun R., Neeharika | done
| 16 | 1 Sep | SteerCo with Suraj: was it held? (the 27 Oct call suggests a fresh update is still to be scheduled) | Neeharika, Amit | done
| 17 | 13 Oct | Second Wi-Fi POC with Tata: the Notion board says JP Nagar; is the store confirmed and the cost agreed? | Malavika | done

## 5. Housekeeping (CLAUDE.md layout)

CLAUDE.md expects `transcripts/YYYY-MM-DD.txt` and `docs/`. After approval I can:
- save each transcript's text as `transcripts/2026-07-07.txt` … `2026-10-27.txt` (meeting entries already point there), and
- copy the two experiment spreadsheets and the 29 Oct results doc into `docs/`.

The original `.docx` files in `material/` would stay as they are. | ok
