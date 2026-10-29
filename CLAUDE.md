# Project Next Horizon dashboard

Static dashboard with no build step. Open `index.html` in a browser.

- `data.js`: all dashboard content (meta, team, stores, experiments, actionables, meetings). Weekly updates change only this file.
- `app.js`: rendering and hash routing (`#home`, `#experiments`, `#actionables`, `#results`, `#meetings`).
- `styles.css`: styling.
- `Brand Logo.png`: logo in the top bar.
- `TRACKER.md`: status tracker the user edits between meetings (see "Tracker sync").
- `export-share.ps1`: builds `share/Project-Next-Horizon-Dashboard.html`, a single self-contained file for sharing (git-ignored).
- `transcripts/`: weekly meeting transcripts, named with the meeting date (e.g. `2026-07-07.txt`).
- `docs/`: the Phase 1/Phase 2 experiment file and the follow-on experiments file.
- `material/`: original source documents as supplied (Word/Excel).

## Weekly update workflow

1. Read the new transcript(s) in date order (the date is in the filename).
2. Draft the changes to `data.js`: a new `meetings` entry (detailed summary, highlights, decisions, risks), new or updated `actionables` (owner, linked experiment, due date, summary, status), and experiment `status` / `statusDetail` / `results` / `viz`.
3. **Show the proposed changes to the user and get their confirmation before editing `data.js`.** Never update the dashboard without approval.
4. Apply the changes and set `meta.lastUpdated` and `meta.lastMeeting`.
5. Regenerate `TRACKER.md` from `data.js` so it matches the dashboard, then run `export-share.ps1`.

## Tracker sync (between meetings)

The user edits `TRACKER.md` and asks to "sync":

1. Compare `TRACKER.md` with `data.js` and list every difference (experiment status and bullets, actionable rows, new rows with ID `new`).
2. Show the proposed changes and get confirmation, as above.
3. Apply to `data.js`, give new actionables the next `A-0xx` ID, set `meta.lastUpdated`, and update "Last synced" in `TRACKER.md`.
4. Run `export-share.ps1`, then commit and push if the user asks. The user uploads the exported file to OneDrive/SharePoint under the same name, so the shared link stays the same.

Conventions:
- Experiment status: `Completed`, `In Progress`, `Needs Attention`, `Not Started`, `On Hold`. The user decides which experiments are `Needs Attention`.
- `statusDetail` is a list of short bullets (one sentence each); don't repeat the status itself (e.g. no "Not started." bullet).
- `results` is a list of bullets. `viz` holds the charts on the Results page: `stats` (headline tiles), `bars`, `grouped` (two series), `funnel`, `trend` (with optional `targets`). Use real reported numbers only.
- Phase 1 experiments come from the Notion board, Phase 2 from the new experiments sheet. Phase 1 items handed over to Phase 2 are left out of Phase 1. Experiment IDs stay fixed once used; don't renumber.
- Only stores with `pilot: true` count as pilot stores (R City, Indiranagar, Viviana, Phoenix Kurla).
- Actionable status: `Open`, `In Progress`, `Completed`. Don't store `Overdue`; the app works it out from `dueDate`. Completed items stay in the data; the dashboard shows pending items by default.
- `actionables[].week` is the date of the meeting that raised the item.
- Set `meta.isSampleData` to `false` once real data replaces the placeholders.
- The audience is senior management and the steering committee, so keep the wording concise and factual.
- Don't publish the dashboard to public hosting (e.g. GitHub Pages); it contains internal business data.
