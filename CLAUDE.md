# Project Next Horizon dashboard

Static dashboard with no build step. Open `index.html` in a browser.

- `data.js`: all dashboard content (meta, team, stores, experiments, actionables, meetings). Weekly updates change only this file.
- `app.js`: rendering and hash routing (`#home`, `#experiments`, `#actionables`, `#results`, `#meetings`).
- `styles.css`: styling.
- `transcripts/`: weekly meeting transcripts, named with the meeting date (e.g. `2026-07-07.txt`).
- `docs/`: the Phase 1/Phase 2 experiment file and the follow-on experiments file.

## Weekly update workflow

1. Read the new transcript(s) in date order (the date is in the filename).
2. Draft the changes to `data.js`: a new `meetings` entry (detailed summary, highlights, decisions, risks), new or updated `actionables` (owner, linked experiment, due date, summary, status), and experiment `status` / `statusDetail` / `results`.
3. **Show the proposed changes to the user and get their confirmation before editing `data.js`.** Never update the dashboard without approval.
4. Apply the changes and set `meta.lastUpdated` and `meta.lastMeeting`.

Conventions:
- Experiment status: `Completed`, `In Progress`, `Needs Attention`, `Not Started`, `On Hold`.
- Actionable status: `Open`, `In Progress`, `Completed`. Don't store `Overdue`; the app works it out from `dueDate`.
- `actionables[].week` is the date of the meeting that raised the item.
- Set `meta.isSampleData` to `false` once real data replaces the placeholders.
- The audience is senior management and the steering committee, so keep the wording concise and factual.
