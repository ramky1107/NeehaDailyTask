(function () {
  const D = window.DASHBOARD_DATA;
  const view = document.getElementById("view");
  const today = new Date().toISOString().slice(0, 10);

  const EXP_STATUSES = ["Completed", "In Progress", "Needs Attention", "On Hold", "Not Started"];
  const STATUS_COLORS = {
    Completed: "var(--green)",
    "In Progress": "var(--blue)",
    "Needs Attention": "var(--red)",
    "On Hold": "var(--purple)",
    "Not Started": "var(--grey)",
  };

  // UI state for the Experiments and Actionables tabs
  // Actionables default to pending items; completed ones stay in the data for the record.
  const state = { phase: "All", actView: "week", actStatus: "Pending", actSearch: "" };

  // ---------- helpers ----------
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const slug = (s) => s.toLowerCase().replace(/\s+/g, "-");
  const pill = (s) => `<span class="pill s-${slug(s)}">${esc(s)}</span>`;
  const fmtDate = (d) =>
    d ? new Date(d + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "—";
  const expById = (id) => D.experiments.find((e) => e.id === id);
  const expName = (id) => (id ? (expById(id)?.name ?? id) : "General");
  const storeName = (id) => D.stores.find((s) => s.id === id)?.name ?? id;
  const countBy = (arr, fn) => arr.reduce((m, x) => ((m[fn(x)] = (m[fn(x)] || 0) + 1), m), {});
  const groupBy = (arr, fn) => arr.reduce((m, x) => ((m[fn(x)] ||= []).push(x), m), {});
  // Results may be a string or a list of bullet lines.
  const resultsHtml = (r, none) =>
    !r || (Array.isArray(r) && !r.length)
      ? `<span class="muted">${none}</span>`
      : Array.isArray(r) ? `<ul>${r.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : esc(r);

  // "Overdue" is derived so the data file never goes stale on its own.
  const actStatus = (a) => (a.status !== "Completed" && a.dueDate && a.dueDate < today ? "Overdue" : a.status);
  const isPending = (a) => a.status !== "Completed";

  // ---------- views ----------
  function home() {
    const exps = D.experiments;
    const acts = D.actionables;
    const byStatus = countBy(exps, (e) => e.status);
    const pending = acts.filter(isPending);
    const overdue = acts.filter((a) => actStatus(a) === "Overdue");
    const current = exps.filter((e) => e.phase === D.meta.currentPhase);
    const done = acts.length - pending.length;

    const kpi = (label, value, hint = "", warn = false) =>
      `<div class="card kpi${warn ? " warn" : ""}"><div class="label">${label}</div><div class="value">${value}</div><div class="hint">${hint}</div></div>`;

    const stack = EXP_STATUSES.filter((s) => byStatus[s])
      .map((s) => `<span style="width:${(byStatus[s] / exps.length) * 100}%;background:${STATUS_COLORS[s]}" title="${s}: ${byStatus[s]}"></span>`)
      .join("");
    const legend = EXP_STATUSES.map(
      (s) => `<span><i style="background:${STATUS_COLORS[s]}"></i>${s} <b>${byStatus[s] || 0}</b></span>`
    ).join("");

    const phases = Object.entries(groupBy(exps, (e) => e.phase))
      .map(([p, list]) => {
        const c = countBy(list, (e) => e.status);
        return `<li><span><b>${esc(p)}</b> <span class="muted">· ${list.length} experiments</span></span>
          <span>${EXP_STATUSES.filter((s) => c[s]).map((s) => `${pill(s)} ${c[s]}`).join(" ")}</span></li>`;
      })
      .join("");

    const attention = exps.filter((e) => e.status === "Needs Attention" || e.status === "On Hold");
    const upcoming = pending
      .filter((a) => a.dueDate)
      .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
      .slice(0, 6);
    const latest = [...D.meetings].sort((a, b) => b.date.localeCompare(a.date))[0];
    const ownerLoad = Object.entries(countBy(pending, (a) => a.owner)).sort((a, b) => b[1] - a[1]);

    return `
      <h1>${esc(D.meta.projectName)}</h1>
      <p class="lead">${esc(D.meta.description)}</p>

      <div class="grid kpis">
        ${kpi("Experiments", exps.length, `${Object.keys(groupBy(exps, (e) => e.phase)).length} phases`)}
        ${kpi(`In ${esc(D.meta.currentPhase)}`, current.length, "current phase")}
        ${kpi("Pilot stores", D.stores.length, "Pantaloons")}
        ${kpi("Team members", D.team.length)}
        ${kpi("Actionables", acts.length, `${done} completed`)}
        ${kpi("Pending", pending.length, "open + in progress")}
        ${kpi("Overdue", overdue.length, "past due date", overdue.length > 0)}
      </div>

      <div class="grid two">
        <div class="card">
          <h2>Experiment status</h2>
          <div class="stack">${stack}</div>
          <div class="legend">${legend}</div>
          <div class="section-label">By phase</div>
          <ul class="list">${phases}</ul>
        </div>
        <div class="card">
          <h2>Needs attention</h2>
          ${
            attention.length
              ? `<ul class="list">${attention
                  .map((e) => `<li><span><b>${esc(e.name)}</b><br><span class="muted small">${esc(e.statusDetail)}</span></span>${pill(e.status)}</li>`)
                  .join("")}</ul>`
              : `<div class="empty">No experiments flagged.</div>`
          }
        </div>
      </div>

      <div class="grid two">
        <div class="card">
          <h2>Upcoming & overdue deadlines</h2>
          ${
            upcoming.length
              ? `<ul class="list">${upcoming
                  .map((a) => `<li><span>${esc(a.title)}<br><span class="muted small">${esc(a.owner)} · ${esc(expName(a.experimentId))}</span></span>
                     <span style="text-align:right">${pill(actStatus(a))}<br><span class="small muted">${fmtDate(a.dueDate)}</span></span></li>`)
                  .join("")}</ul>`
              : `<div class="empty">No dated actionables pending.</div>`
          }
        </div>
        <div class="card">
          <h2>Latest meeting${latest ? ` · ${fmtDate(latest.date)}` : ""}</h2>
          ${
            latest
              ? `<p>${esc(latest.summary)}</p>${
                  latest.highlights?.length ? `<ul>${latest.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""
                }<a href="#meetings">All meetings →</a>`
              : `<div class="empty">No meeting transcripts processed yet.</div>`
          }
          <div class="section-label">Pending actionables by owner</div>
          ${
            ownerLoad.length
              ? `<ul class="list">${ownerLoad.map(([o, n]) => `<li><span>${esc(o)}</span><b>${n}</b></li>`).join("")}</ul>`
              : `<div class="empty">None.</div>`
          }
        </div>
      </div>`;
  }

  function experiments() {
    const phases = ["All", ...new Set(D.experiments.map((e) => e.phase))];
    const list = D.experiments.filter((e) => state.phase === "All" || e.phase === state.phase);

    const card = (e) => {
      const acts = D.actionables.filter((a) => a.experimentId === e.id);
      const open = acts.filter(isPending);
      return `
        <div class="card exp">
          <div class="exp-head">
            <div><div class="exp-id">${esc(e.id)} · ${esc(e.phase)}${e.timeline ? ` · ${esc(e.timeline)}` : ""}</div><h3>${esc(e.name)}</h3></div>
            ${pill(e.status)}
          </div>
          <div class="muted">${esc(e.description)}</div>
          <dl class="meta">
            <dt>Owner</dt><dd>${esc(e.owner)}</dd>
            <dt>Stores</dt><dd>${e.stores.map((s) => esc(storeName(s))).join(", ") || "—"}</dd>
            ${e.linkedTo?.length ? `<dt>Linked to</dt><dd>${e.linkedTo.map((id) => esc(expName(id))).join(", ")}</dd>` : ""}
          </dl>
          <div class="section-label">Current status</div>
          <div class="status-box">${esc(e.statusDetail || "—")}</div>
          <div class="section-label">Metrics measured</div>
          ${e.metrics.length ? `<ul>${e.metrics.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>` : `<div class="empty">Not defined yet</div>`}
          <div class="section-label">Pending actionables (${open.length})</div>
          ${
            open.length
              ? `<ul>${open.map((a) => `<li>${esc(a.title)} <span class="muted small">— ${esc(a.owner)}, ${fmtDate(a.dueDate)}</span> ${pill(actStatus(a))}</li>`).join("")}</ul>`
              : `<div class="empty">None</div>`
          }
          <div class="section-label">Results</div>
          <div>${resultsHtml(e.results, "No results yet")}</div>
        </div>`;
    };

    return `
      <h1>Experiments</h1>
      <p class="lead">Owner, metrics, status, pending actionables and results for each experiment.</p>
      <div class="toolbar">
        <div class="seg" data-key="phase">
          ${phases.map((p) => `<button data-val="${esc(p)}" class="${state.phase === p ? "active" : ""}">${esc(p)}</button>`).join("")}
        </div>
        <span class="muted">${list.length} shown</span>
      </div>
      <div class="grid exp-grid">${list.map(card).join("")}</div>`;
  }

  function actionables() {
    const q = state.actSearch.toLowerCase();
    const rows = D.actionables.filter(
      (a) =>
        (state.actStatus === "All" ||
          (state.actStatus === "Pending" ? isPending(a) : actStatus(a) === state.actStatus)) &&
        (!q || [a.title, a.summary, a.owner, expName(a.experimentId)].join(" ").toLowerCase().includes(q))
    );

    const keyFn = { week: (a) => a.week, owner: (a) => a.owner, experiment: (a) => expName(a.experimentId) }[state.actView];
    const groups = Object.entries(groupBy(rows, keyFn)).sort(([a], [b]) =>
      state.actView === "week" ? b.localeCompare(a) : a.localeCompare(b)
    );
    const label = (k) => (state.actView === "week" ? `Week of ${fmtDate(k)}` : esc(k));

    // Hide the column that is already the group heading.
    const cols = [
      ["Action item", (a) => `<b>${esc(a.title)}</b><div class="muted small">${esc(a.summary)}</div>`],
      ["Experiment", (a) => esc(expName(a.experimentId)), "experiment"],
      ["Owner", (a) => esc(a.owner), "owner"],
      ["Raised", (a) => fmtDate(a.week), "week"],
      ["Due", (a) => fmtDate(a.dueDate)],
      ["Status", (a) => pill(actStatus(a))],
    ].filter((c) => c[2] !== state.actView);

    const table = (list) => `
      <div class="card"><div class="table-wrap"><table>
        <thead><tr>${cols.map((c) => `<th>${c[0]}</th>`).join("")}</tr></thead>
        <tbody>${list.map((a) => `<tr>${cols.map((c) => `<td>${c[1](a)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div></div>`;

    const statuses = ["Pending", "Open", "In Progress", "Overdue", "Completed", "All"];
    return `
      <h1>Actionables</h1>
      <p class="lead">Action items from the weekly meetings, grouped by week, owner or experiment.</p>
      <div class="toolbar">
        <div class="seg" data-key="actView">
          ${[["week", "Week-wise"], ["owner", "Owner-wise"], ["experiment", "Experiment-wise"]]
            .map(([v, l]) => `<button data-val="${v}" class="${state.actView === v ? "active" : ""}">${l}</button>`)
            .join("")}
        </div>
        <select id="actStatus">${statuses.map((s) => `<option ${state.actStatus === s ? "selected" : ""}>${s}</option>`).join("")}</select>
        <input type="search" id="actSearch" placeholder="Search…" value="${esc(state.actSearch)}" />
        <span class="muted">${rows.length} of ${D.actionables.length}</span>
      </div>
      ${
        groups.length
          ? groups
              .map(([k, list]) => {
                const c = countBy(list, actStatus);
                return `<div class="group">
                  <h3 class="group-title">${label(k)} <span class="muted small">${list.length} items</span>
                    ${Object.entries(c).map(([s, n]) => `${pill(s)} ${n}`).join(" ")}</h3>
                  ${table(list)}
                </div>`;
              })
              .join("")
          : `<div class="card empty">No actionables match.</div>`
      }`;
  }

  function results() {
    const withResults = D.experiments.filter((e) => e.results);
    const completed = D.experiments.filter((e) => e.status === "Completed");
    return `
      <h1>Results</h1>
      <p class="lead">Outcomes reported for each experiment.</p>
      <div class="grid kpis">
        <div class="card kpi"><div class="label">Completed</div><div class="value">${completed.length}</div></div>
        <div class="card kpi"><div class="label">With results</div><div class="value">${withResults.length}</div></div>
        <div class="card kpi"><div class="label">Awaiting results</div><div class="value">${D.experiments.length - withResults.length}</div></div>
      </div>
      <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Experiment</th><th>Phase</th><th>Owner</th><th>Status</th><th>Metrics</th><th>Results</th></tr></thead>
        <tbody>${D.experiments
          .map(
            (e) => `<tr>
              <td><b>${esc(e.name)}</b><div class="muted small">${esc(e.id)}</div></td>
              <td>${esc(e.phase)}</td><td>${esc(e.owner)}</td><td>${pill(e.status)}</td>
              <td class="small">${e.metrics.map(esc).join("<br>")}</td>
              <td>${resultsHtml(e.results, "—")}</td></tr>`
          )
          .join("")}</tbody>
      </table></div></div>`;
  }

  function meetings() {
    const list = [...D.meetings].sort((a, b) => b.date.localeCompare(a.date));
    const section = (title, items) =>
      items?.length ? `<div class="section-label">${title}</div><ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : "";
    return `
      <h1>Meetings</h1>
      <p class="lead">Summaries of the weekly meetings, newest first.</p>
      ${
        list.length
          ? list
              .map((m) => {
                const acts = D.actionables.filter((a) => a.week === m.date);
                return `<div class="card meeting">
                  <h2>${fmtDate(m.date)} <span class="muted small">${esc(m.source || "")}</span></h2>
                  <p>${esc(m.summary)}</p>
                  ${section("Highlights", m.highlights)}
                  ${section("Decisions", m.decisions)}
                  ${section("Risks / blockers", m.risks)}
                  ${section(`Actionables raised (${acts.length})`, acts.map((a) => `${a.title} — ${a.owner}`))}
                </div>`;
              })
              .join("")
          : `<div class="card empty">No meeting transcripts processed yet.</div>`
      }`;
  }

  // ---------- routing ----------
  const routes = { home, experiments, actionables, results, meetings };

  function render() {
    const route = location.hash.slice(1) || "home";
    view.innerHTML = (routes[route] || home)();
    document.querySelectorAll("#tabs a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + route));
  }

  view.addEventListener("click", (e) => {
    const btn = e.target.closest(".seg button");
    if (!btn) return;
    state[btn.parentElement.dataset.key] = btn.dataset.val;
    render();
  });
  view.addEventListener("change", (e) => {
    if (e.target.id === "actStatus") { state.actStatus = e.target.value; render(); }
  });
  view.addEventListener("input", (e) => {
    if (e.target.id !== "actSearch") return;
    state.actSearch = e.target.value;
    render();
    const input = document.getElementById("actSearch");
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  });

  document.getElementById("projectName").textContent = D.meta.projectName;
  document.getElementById("lastUpdated").textContent =
    `Updated ${fmtDate(D.meta.lastUpdated)}` + (D.meta.lastMeeting ? ` · Last meeting ${fmtDate(D.meta.lastMeeting)}` : "");
  document.getElementById("sampleBanner").hidden = !D.meta.isSampleData;
  document.title = D.meta.projectName;

  window.addEventListener("hashchange", render);
  render();
})();
