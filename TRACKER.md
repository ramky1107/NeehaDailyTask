# Project Next Horizon — status tracker

Edit this file whenever something changes, then ask Claude to **sync** the dashboard.

How to edit:
- **Experiments:** change the `Status:` line and add, edit or delete the bullets under it. Each bullet is one line on the dashboard.
- **Status values:** Completed, In Progress, Needs Attention, Not Started, On Hold.
- **Actionables:** edit a row's Status (Open, In Progress, Completed), Due (YYYY-MM-DD) or Notes. Add a row with ID `new` for a new item. Completed items drop off the dashboard's default view but stay on record.
- **Results and numbers:** write them as bullets under the experiment; Claude will update the charts.

Last synced: 2026-10-30

## Phase 1 experiments

### P1-01 — App-based identification (geo-fencing)
Owner: Malavika Goli
Status: In Progress
- Live at R City and Indiranagar since 27 Jul.
- A/B testing of notifications is live (14–22 Oct read-out below); to run 2–3 more weeks before network scale-up.
- Cart and wishlist 'available in store' notifications are live.
- Open issues: the old '200 m away' message is still being sent, and the geo-fence exit event is inflating CleverTap cost.

### P1-02 — Wi-Fi setup in stores
Owner: Malavika Goli
Status: In Progress
- R City (Vodafone, free POC): access points installed and Wi-Fi working; branded login page and OTP flow next.
- The API that passes authenticated mobile numbers and store codes to the CRM is ready, with vendor hand-over this week.
- Tata pilot moved from Indiranagar to JP Nagar on Hemanth's recommendation; Tata to visit on CRM integration.

### P1-04 — QR-based location and customer identification
Owner: Jigisha Patel, Rohit Indumukhi
Status: In Progress
- 48 QR codes placed at R City for product discovery.
- Next: improve the products shown on the listing page, and link QR scans to purchases so scanners who buy can be identified.

### P1-05 — Highlight gift-worthy products with targeted VM
Owner: Jigisha Patel
Status: In Progress
- Live in kidswear and handbags at R City since 5 Sep (sectional signage).
- Following the store walk-through, the girls' and boys' section QRs will point to separate gifting pages; new QR codes go to VM for reprint.

### P1-06 — Product discovery using QR codes
Owner: Rohit Indumukhi
Status: In Progress
- 48 touchpoints at R City; extended to Puja stores (26 windows, 22 entrance pop shops, 6 gifting, 22 trend spots) and 140 festive windows nationally.
- QR URL updates now part of the VM SOP.
- New collection landing-page UI in development, live by end Dec.
- App session counts differ between Adobe and Adjust; under review.

### P1-07 — RFID trial room tracking
Owner: Shariq Haroon
Status: In Progress
- Live at Viviana Mall since the first week of Sep in 2 of 6 women's ethnic trial rooms (vendor solution, data only, no screens).
- Automated POS linking pending; a manual link was used for the first read-out.
- Next: deploy own RFID hardware and software instead of the vendor's, and cover more trial rooms.

### P1-08 — RFID product analytics
Owner: Shariq Haroon
Status: In Progress
- Live at Viviana with P1-07.
- Assortment views built (try-ons vs conversion by option and size).
- Data is still too thin for conclusions.
- Vikrant suggested matching it against the hits/average/misses (HAM) profile.

### P1-09 — Self-checkout via kiosk (RFID)
Owner: Shariq Haroon
Status: In Progress
- New RFID kiosk journey (phase 1) live at Phoenix Kurla since 23–24 Oct; Jaipur Pacific Mall go-live 28 Oct.
- RFID read time cut from 3–4 s to about 1.5 s.
- Phase 2 (Nov) adds credit notes, gift vouchers, employee discount, saved cards, Insignia day-0 cap and on-screen UPI QR.
- Loyalty integration follows.
- Funnel metrics and device alerts still to be built.

### P1-10 — Self-checkout via app
Owner: Hemanth Gollavilli, Rohit Indumukhi
Status: In Progress
- Partially live.
- No new development; adoption is driven by staff nudges and VM.
- Store staff nudging gives 10–12% app checkout at R City.
- Larger self-checkout signage being developed with VM.

### P1-11 — Personal shopper assistant for Insignia members
Owner: Altamas Khan
Status: Not Started
- Research complete (Shoppers Stop First Citizen Black; 2019 internal pilot).
- Needs trained styling staff and training support, and the brand direction is towards self-serve stores; direction needed from the core team.

### P1-12 — Customer surveys to optimise in-store digital engagement
Owner: Hemanth Gollavilli
Status: Completed
- Surveys complete; customer journey improvements and store-layout interventions identified.
- The interventions based on customer intent are yet to be taken up.

### P1-13 — Staff-assisted styling
Owner: Hemanth Gollavilli
Status: In Progress
- Live.
- Evaluating the checkout mix of full looks.
- Staff attrition at R City is the main constraint.

### P1-14 — Staff-assisted online order placement
Owner: Hemanth Gollavilli
Status: In Progress
- Live, but not yet measurable because staff recommend it verbally.

### P1-15 — Navigation inside the store through better signage
Owner: Varun Babji
Status: In Progress
- Many VM items for Hemanth's, Rohit's and Malavika's experiments are still pending.
- Touchpoint-wise review of R City communications due at the next meeting.

### P1-16 — EPC > EAN feature for QR scanning
Owner: Jigisha Patel, Malavika Goli
Status: In Progress
- Live since the first week of Oct.
- App fix for slow or failed scans deployed 27 Oct; m-site fix pending; paid QR-reader option being costed.
- Product-tag QR signage drafted, on hold until scanning works reliably.

## Phase 2 experiments

### P2-01 — Single order, multi-channel fulfilment via app
Owner: Shariq Haroon, Malavika Goli
Status: Not Started
- To be planned with the December kiosk and trial-room roadmap.

### P2-02 — Intelligent landing page with looks and collections
Owner: Rohit Indumukhi
Status: Not Started
- Groundwork: landing-page design signed off end Sep; UI development under way, due end Dec.

### P2-03 — VM for product QR consideration (all products)
Owner: Varun Babji
Status: Not Started
- Groundwork: product-tag QR signage drafted by VM; to be printed once scanning works reliably.

### P2-04 — In-store PDP
Owner: Malavika Goli
Status: Not Started

### P2-05 — Virtual try-on on the app
Owner: Shariq Haroon
Status: Not Started
- Deferred.

### P2-06 — Tech-assisted styling for staff on Now app
Owner: TBD
Status: Not Started
- Owner to be assigned.

### P2-07 — Appointment handling on Now app
Owner: TBD
Status: Not Started
- Depends on P1-11 (personal shopper, not started).
- Owner to be assigned.

### P2-08 — RFID trial room MVP: request size or colour
Owner: Shariq Haroon
Status: Not Started
- Planned as a later phase of the in-house smart trial room build.

### P2-09 — RFID trial room operational alerts on Now app
Owner: TBD
Status: Not Started
- Owner to be assigned.

### P2-10 — RFID trial room to purchase
Owner: Shariq Haroon
Status: Not Started
- Decision (29 Sep) to build the smart trial room in-house on the kiosk stack rather than use the vendor's screens; target after kiosk phase 2.

### P2-11 — CCTV analytics and heat mapping
Owner: Parasa Neeharika
Status: Not Started
- POC with Agrex, Aurify and Recurrent completed; findings shared.

### P2-12 — Wi-Fi journeys and customer acquisition
Owner: Jigisha Patel
Status: Not Started
- Depends on P1-02.
- Wi-Fi journey plan being drafted.

### P2-13 — Composite in-store customer funnel
Owner: Parasa Neeharika
Status: Not Started
- Groundwork: in-store and express checkout funnel dashboards available in CleverTap.

### P2-14 — VM for customer-led adoption of self-checkout
Owner: Hemanth Gollavilli
Status: Not Started
- Groundwork: larger self-checkout standees in development with VM; Kurla runs audio announcements and a ticker pointing to the kiosks.

### P2-15 — Consumer intent-based discovery
Owner: Rohit Indumukhi
Status: Not Started
- Groundwork: store-entry intent page UI at design stage.

## Actionables

| ID | Action item | Experiment | Owner | Raised | Due | Status | Notes |
|----|-------------|------------|-------|--------|-----|--------|-------|
| A-001 | Track kiosk vs app self-checkout daily and weekly | P1-09 | Shariq Haroon | 2026-10-27 | 2026-11-03 | Open | Compare kiosk and app self-checkout share with previous periods; build the full funnel incl. time to complete and help requests. |
| A-002 | Device-down diagnostics and staff escalation for kiosks | P1-09 | Shariq Haroon | 2026-10-27 |  | Open | Kiosk alerts HO when a device is down and shows customers another kiosk; staff help button to escalate faults. |
| A-003 | Deliver kiosk phase 2 release | P1-09 | Shariq Haroon | 2026-10-27 | 2026-11-30 | In Progress | Credit notes, PT credits, gift vouchers, employee discount, saved cards, Insignia day-0 cap, on-screen UPI QR, upsell offer, return fixes. |
| A-004 | Align kiosk rollout plan for the next ~10 stores with Vikrant | P1-09 | Shariq Haroon | 2026-10-27 |  | Open | Staged rollout (10, then 50 stores); validate each release at Kurla or R City first. |
| A-005 | Plan December release: in-house smart trial room and multi-fulfilment | P2-10 | Shariq Haroon | 2026-10-27 |  | Open | Build trial-room screens on the kiosk stack; scope single-order multi-channel fulfilment. |
| A-006 | Deploy own RFID hardware in more Viviana trial rooms | P1-07 | Shariq Haroon | 2026-10-27 |  | Open | Replace the vendor setup with in-house hardware and software; cover the remaining 4 trial rooms for fuller data. |
| A-007 | Resolve Adobe vs Adjust QR session mismatch | P1-06 | Varun Rajwade, Rohit Indumukhi | 2026-10-27 | 2026-11-03 | Open | Adjust shows about 250 app sessions vs 46 in Adobe for the same QRs; deep-dive and report next week. |
| A-008 | Agree store-staff role in driving QR use | P1-06 | Rohit Indumukhi, Hemanth Gollavilli | 2026-10-27 |  | Open | Staff to point customers to QRs where useful, without artificial scan targets. |
| A-009 | Share per-store QR numbers and where QRs work | P1-06 | Rohit Indumukhi | 2026-10-27 |  | Open | Per-store view of national window QR visits; insight on contexts that drive scans (e.g. festive windows). |
| A-010 | Set up CleverTap funnels and cohorts for QR scanners | P1-06 | Varun Rajwade, Rohit Indumukhi | 2026-10-27 |  | Open | Self-service dashboards and cohorts so scan data is available without manual pulls. |
| A-011 | Run geo A/B test 2–3 more weeks and compute confidence | P1-01 | Malavika Goli | 2026-10-27 | 2026-11-17 | In Progress | First week: 25 vs 8 conversions. Add statistical confidence; if it holds, prepare network scale-up. |
| A-012 | Add purchase breakdown up to 5 hours to geo results | P1-01 | Malavika Goli | 2026-10-27 | 2026-11-03 | Open | Purchases and value within 5 hours of the notification. |
| A-013 | Replace the old '200 m away' notification | P1-01 | Malavika Goli | 2026-10-27 | 2026-11-03 | Open | Load the finalised notification content in CleverTap with Lakshmi; the old message is still being sent. |
| A-014 | Fix geo-fence exit event before scaling | P1-01 | Malavika Goli, Parasa Neeharika | 2026-10-13 |  | Open | Exit events are abnormally high; 400-store cost ₹8.13 L/yr as-is vs about ₹61k corrected. Consider disabling the event server-side. |
| A-015 | Fix product-tag QR scanning on m-site; review cost of paid QR reader | P1-16 | Malavika Goli | 2026-10-27 |  | In Progress | App fix deployed 27 Oct; test a larger QR size; compare free vs paid reader. |
| A-016 | Branded Wi-Fi login and CRM hand-over at R City | P1-02 | Malavika Goli | 2026-10-27 |  | In Progress | Vodafone to build the Pantaloons-branded login and OTP flow; CRM API walkthrough this week. |
| A-017 | Share Wi-Fi journey plan and campaign ideas | P2-12 | Malavika Goli | 2026-10-13 | 2026-10-16 | Open | Written plan across the journey: login page, signage, notifications, use of AP-zone data; review with Varun. |
| A-018 | Pull gifting QR scan numbers from CleverTap | P1-05 | Jigisha Patel | 2026-10-27 | 2026-11-03 | Open | Jigisha has CleverTap access; share scans and funnel with the group. |
| A-019 | Point girls' and boys' gifting QRs to separate pages | P1-05 | Jigisha Patel, Varun Babji | 2026-10-27 |  | Open | Generate new QR codes with the right filters; VM to reprint (about a day). |
| A-020 | Finalise product-tag QR signage | P2-03 | Varun Babji, Jigisha Patel | 2026-10-27 |  | Open | Add scanner icon and app-download QR; test with customers; print only once scanning works. |
| A-021 | Touchpoint review of R City communications | P1-15 | Varun Babji | 2026-10-27 | 2026-11-03 | Open | Deck of what is live at each touchpoint, to rework low-traction messaging. |
| A-022 | Decide direction for Insignia personal shopper | P1-11 | Altamas Khan | 2026-10-27 |  | Open | Follow-up with Nish on what to offer Insignia members, given staffing and brand constraints. |
| A-023 | Schedule project update with Suraj | General | Parasa Neeharika | 2026-10-27 |  | Completed | Book via Suraj's calendar; update the SteerCo deck with the geo A/B and kiosk results. |
| A-024 | Re-engage marketing support with Puneet | General | Varun Rajwade | 2026-10-27 |  | Completed | Marketing-owned items (notification content, CleverTap campaigns) have stalled. |
| A-025 | Assign an owner to monitor the in-store express checkout funnel | P1-10 | Hemanth Gollavilli | 2026-08-25 |  | Open | Someone in Hemanth's team to watch drop-offs, errors and alerts, as the e-com team does for online checkout. |
| A-026 | Mall-store diagram for geo notification tap | P1-01 | Malavika Goli | 2026-09-15 |  | Open | For mall stores (R City), show floor and neighbouring stores instead of a map; Google Maps for high-street stores. |
| A-027 | Experiment-wise VM plan for the customer-journey experiment | P1-15 | Hemanth Gollavilli, Varun Babji | 2026-09-15 |  | Open | Separate VM interventions by experiment and confirm the app development they depend on. |
