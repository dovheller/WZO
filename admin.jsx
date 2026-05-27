// Screen 3 — Admin / Gabbai Dashboard (bilingual) — v2 with sidebar nav + new feature views
const AdminScreen = () => {
  const tx = useTx();
  const { lang } = useLang();
  const [section, setSection] = React.useState("dashboard");

  const [amount, setAmount] = React.useState("360");
  const [member, setMember] = React.useState(tx("רוזנברג, יעקב ושירה", "Rosenberg, Yaakov & Shira"));
  const [purpose, setPurpose] = React.useState(tx("עליה לתורה — פרשת בהעלותך", "Aliyah la-Torah — Parashat Beha'alotcha"));

  React.useEffect(() => {
    setMember(tx("רוזנברג, יעקב ושירה", "Rosenberg, Yaakov & Shira"));
    setPurpose(tx("עליה לתורה — פרשת בהעלותך", "Aliyah la-Torah — Parashat Beha'alotcha"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const sideLinks = [
    { gHe: "מבט-על", gEn: "Overview", items: [
      { id: "dashboard", he: "סקירה כללית", en: "Dashboard", c: 0, icon: <I.Sparkles /> },
      { id: "alerts", he: "יומן והתראות", en: "Journal & alerts", c: 7, icon: <I.Bell /> },
    ]},
    { gHe: "קהילה", gEn: "Community", items: [
      { id: "events", he: "אירועים", en: "Events", c: 14, icon: <I.Calendar /> },
      { id: "members", he: "חברי הקהילה", en: "Members", c: 287, icon: <I.Users /> },
      { id: "tefilla", he: "תפילות ומניינים", en: "Tefillot & minyanim", c: 3, icon: <I.Book /> },
    ]},
    { gHe: "פעילות חדשה", gEn: "Programs", items: [
      { id: "aliyot", he: "סידור עליות", en: "Aliyot board", c: 8, icon: <I.TorahScroll /> },
      { id: "gemach", he: "גמ\"ח ומציאון", en: "Gemach", c: 48, icon: <I.Handshake /> },
      { id: "avot", he: "אבות ובנים", en: "Avot u-Vanim", c: 8, icon: <I.Family /> },
      { id: "points", he: "חוגים והגרלות", en: "Classes & raffles", c: 4, icon: <I.Award /> },
      { id: "biz", he: "לוח עסקים", en: "Business directory", c: 8, icon: <I.Store2 /> },
    ]},
    { gHe: "פיננסי", gEn: "Finance", items: [
      { id: "fin", he: "תרומות וגבייה", en: "Donations & dues", c: 6, icon: <I.Coins /> },
      { id: "reports", he: "דוחות חודשיים", en: "Monthly reports", c: null, icon: <I.TrendUp /> },
    ]},
    { gHe: "מערכת", gEn: "System", items: [
      { id: "settings", he: "הגדרות הקהילה", en: "Community settings", c: null, icon: <I.Settings /> },
    ]},
  ];

  const eventRows = [
    { he: { n: "ערב התרמה — מקווה חדש", w: "מוצ\"ש 30.5 · 21:30", s: "פעיל" },
      en: { n: "Fundraiser — new Mikveh", w: "Sat night 30 May · 21:30", s: "Active" },
      reg: 78, cap: 120, tag: "tag-amber" },
    { he: { n: "פיקניק שבועות בפארק", w: "ראשון 1.6 · 11:00", s: "פעיל" },
      en: { n: "Shavuot picnic in the park", w: "Sun 1 Jun · 11:00", s: "Active" },
      reg: 154, cap: 200, tag: "tag-success" },
    { he: { n: "שיעור גמרא לנשים", w: "שלישי 3.6 · 20:30", s: "פעיל" },
      en: { n: "Women's Gemara class", w: "Tue 3 Jun · 20:30", s: "Active" },
      reg: 22, cap: 40, tag: "tag-success" },
    { he: { n: "בר מצווה — דניאל הלוי", w: "שבת 30.5 · 09:30", s: "אישור משפחה" },
      en: { n: "Bar Mitzvah — Daniel Halevi", w: "Sat 30 May · 09:30", s: "Family approval" },
      reg: 95, cap: 110, tag: "tag" },
    { he: { n: "אזכרה ר' משה ז\"ל", w: "שני 2.6 · 19:30", s: "פעיל" },
      en: { n: "Memorial R. Moshe z\"l", w: "Mon 2 Jun · 19:30", s: "Active" },
      reg: 41, cap: 80, tag: "tag-success" },
  ];

  const recentMembers = [
    { he: { i: "ר\"ל", n: "רחל לוי", m: "חברה · הצטרפה 12.3.2026", r: "ועדת חינוך" },
      en: { i: "RL", n: "Rachel Levi", m: "Member · Joined 12 Mar 2026", r: "Education committee" } },
    { he: { i: "א\"ש", n: "אברהם שמש", m: "חבר · הצטרף 4.2.2026", r: "—" },
      en: { i: "AS", n: "Abraham Shemesh", m: "Member · Joined 4 Feb 2026", r: "—" } },
    { he: { i: "ש\"ב", n: "שירה בן-עמי", m: "חברה · הצטרפה 28.1.2026", r: "ועדת אירועים" },
      en: { i: "SB", n: "Shira Ben-Ami", m: "Member · Joined 28 Jan 2026", r: "Events committee" } },
    { he: { i: "מ\"ק", n: "מרדכי קצנלבוגן", m: "חבר ועד · מאז 2014", r: "גזבר" },
      en: { i: "MK", n: "Mordechai Katzenelbogen", m: "Board member · Since 2014", r: "Treasurer" } },
    { he: { i: "ד\"פ", n: "דבורה פרנקל", m: "חברה · הצטרפה 11.1.2026", r: "—" },
      en: { i: "DF", n: "Devorah Frankel", m: "Member · Joined 11 Jan 2026", r: "—" } },
  ];

  const templates = [
    { he: { n: "תבנית חג שבועות", m: "12 משימות · הופעל פעמיים" },
      en: { n: "Shavuot template", m: "12 tasks · Run twice" }, icon: <I.Sparkles /> },
    { he: { n: "ערב נוער חודשי", m: "9 משימות · 14 הפעלות" },
      en: { n: "Monthly youth night", m: "9 tasks · 14 runs" }, icon: <I.Bolt /> },
    { he: { n: "טקס אזכרה", m: "תפילה · הספד · קידוש" },
      en: { n: "Memorial service", m: "Tefillah · Eulogy · Kiddush" }, icon: <I.Candle /> },
    { he: { n: "אירוע התרמה מובנה", m: "מטרה · גרף · לינק תשלום" },
      en: { n: "Structured fundraiser", m: "Goal · Chart · Payment link" }, icon: <I.Coins /> },
  ];

  // ---- DASHBOARD VIEW (the original) ----
  const Dashboard = () => (
    <React.Fragment>
      <div className="admin-header">
        <div>
          <h2>{tx("שלום הרב, בוקר טוב", "Good morning, Rabbi")}</h2>
          <div className="sub">
            {tx(
              "קהילת אהבת ישראל, לונדון · 287 חברים פעילים · 14 אירועים השבוע",
              "Ahavat Yisrael Community, London · 287 active members · 14 events this week"
            )}
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn btn-ghost"><I.Send /> {tx("שליחת עלון", "Send newsletter")}</button>
          <button className="btn btn-primary"><I.Plus /> {tx("אירוע חדש", "New event")}</button>
        </div>
      </div>

      <div className="kpi-row">
        <div className="kpi-card feature">
          <div className="icon-corner"><I.Users /></div>
          <div className="label">{tx("חברים פעילים", "Active members")}</div>
          <div className="value">287</div>
          <div className="delta" style={{ color: "#A7E3F6" }}><I.ArrowUp /> {tx("+12 החודש", "+12 this month")}</div>
        </div>
        <div className="kpi-card">
          <div className="icon-corner"><I.Calendar /></div>
          <div className="label">{tx("אירועים בשבוע", "Events this week")}</div>
          <div className="value">14</div>
          <div className="delta"><I.ArrowUp /> {tx("4 חדשים", "4 new")}</div>
        </div>
        <div className="kpi-card">
          <div className="icon-corner"><I.Handshake /></div>
          <div className="label">{tx("פעיל במציאון", "Items in gemach")}</div>
          <div className="value">48</div>
          <div className="delta"><I.ArrowUp /> +6</div>
        </div>
        <div className="kpi-card">
          <div className="icon-corner"><I.Bell /></div>
          <div className="label">{tx("התראות פתוחות", "Open alerts")}</div>
          <div className="value">7</div>
          <div className="delta down">{tx("3 לטיפול היום", "3 due today")}</div>
        </div>
      </div>

      <div className="admin-grid">
        <div className="events-table">
          <div className="head">
            <h3>{tx("אירועים בשבועיים הקרובים", "Events in the next 2 weeks")}</h3>
            <div style={{ display: "flex", gap: 6 }}>
              <button className="btn btn-ghost btn-sm"><I.Search /> {tx("חיפוש", "Search")}</button>
              <button className="btn btn-blue btn-sm"><I.Plus /> {tx("אירוע", "Event")}</button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th style={{ width: "38%" }}>{tx("אירוע", "Event")}</th>
                <th>{tx("מתי", "When")}</th>
                <th>{tx("הרשמות", "Registrations")}</th>
                <th>{tx("סטטוס", "Status")}</th>
              </tr>
            </thead>
            <tbody>
              {eventRows.map((r, i) => {
                const t = tx(r.he, r.en);
                return (
                  <tr key={i}>
                    <td>
                      <div className="ev-cell">
                        <span className="n">{t.n}</span>
                        <span className="s">{tx("מארגן: ועדת אירועים", "Organizer: Events committee")}</span>
                      </div>
                    </td>
                    <td>{t.w}</td>
                    <td>
                      <div className="attendance-bar">
                        <div className="bar"><div style={{ width: `${Math.round((r.reg / r.cap) * 100)}%` }}></div></div>
                        <span className="num">{r.reg}/{r.cap}</span>
                      </div>
                    </td>
                    <td><span className={"tag " + r.tag}>{t.s}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="donation-card">
          <h3>{tx("תרומה חדשה — הזרמה לחבר", "New donation — push to member")}</h3>
          <p className="help">
            {tx(
              "הזנת התרומה תפתח אוטומטית התראה לחבר עם לינק תשלום מאובטח.",
              "Submitting will auto-trigger a member alert with a secure payment link."
            )}
          </p>

          <div className="flow-strip">
            <div className="step active"><I.Plus /> {tx("הזנת תרומה", "Enter")}</div>
            <div className="arrow">→</div>
            <div className="step"><I.Bell /> {tx("התראה לחבר", "Notify")}</div>
            <div className="arrow">→</div>
            <div className="step"><I.Send /> {tx("לינק תשלום", "Pay link")}</div>
            <div className="arrow">→</div>
            <div className="step"><I.Check /> {tx("סגירת מעגל", "Confirm")}</div>
          </div>

          <div className="field">
            <label>{tx("חבר קהילה", "Community member")}</label>
            <input value={member} onChange={(e) => setMember(e.target.value)} />
          </div>
          <div className="field row2">
            <div className="field">
              <label>{tx("סכום", "Amount")}</label>
              <div className="field-amount-input">
                <input value={amount} onChange={(e) => setAmount(e.target.value)} />
                <span className="symbol">£</span>
              </div>
            </div>
            <div className="field">
              <label>{tx("קטגוריה", "Category")}</label>
              <select defaultValue="aliya">
                <option value="aliya">{tx("עליה לתורה", "Aliyah la-Torah")}</option>
                <option value="building">{tx("קרן בית הכנסת", "Shul Building Fund")}</option>
                <option value="chesed">{tx("קרן חסד", "Chesed Fund")}</option>
                <option value="kiddush">{tx("קידוש שבת", "Shabbat Kiddush")}</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label>{tx("נושא / הקדשה", "Dedication / occasion")}</label>
            <input value={purpose} onChange={(e) => setPurpose(e.target.value)} />
          </div>
          <button className="btn btn-primary" style={{ width: "100%", marginTop: 6 }}>
            <I.Send /> {tx("שלחו התראה עם לינק תשלום", "Send alert with payment link")}
          </button>
          <div className="help-note" style={{ marginTop: 10, justifyContent: "center" }}>
            <I.Check /> {tx("בממוצע — נסגר תוך 38 שעות", "Average — closed within 38 hours")}
          </div>
        </div>
      </div>

      <div className="templates-strip">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h3>{tx("תבניות הפעלה מהירה", "Quick activation templates")}</h3>
          <a href="#" style={{ color: "var(--c-blue)", fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
            {tx("ספריית תבניות מלאה", "Full template library")} <I.Arrow className="lt-flip" />
          </a>
        </div>
        <div className="template-grid">
          {templates.map((t, i) => {
            const txt = tx(t.he, t.en);
            return (
              <div className="template-card" key={i}>
                <div className="icon-pill">{t.icon}</div>
                <p className="name">{txt.n}</p>
                <div className="meta">{txt.m}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="members-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
          <h3>{tx("חברים שהצטרפו לאחרונה", "Recently joined members")}</h3>
          <button className="btn btn-ghost btn-sm"><I.Plus /> {tx("הוספת חבר", "Add member")}</button>
        </div>
        {recentMembers.map((m, i) => {
          const t = tx(m.he, m.en);
          return (
            <div className="member-row" key={i}>
              <div className="av">{t.i}</div>
              <div>
                <div className="n">{t.n}</div>
                <div className="meta">{t.m}</div>
              </div>
              <div className="role-tag">{t.r}</div>
              <button className="btn btn-ghost btn-sm quick">{tx("פתח כרטיס", "Open card")}</button>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );

  return (
    <section className="screen" data-screen-label={tx("03 ניהול קהילה", "03 Community admin")}>
      <div className="section-eyebrow">
        {tx("מסך 3 · מסך מנהל הקהילה (גבאי / מזכירות)", "Screen 3 · Community admin (Gabbai / office)")}
      </div>
      <div className="admin-wrap">
        <aside className="admin-sidebar">
          {sideLinks.map((g, i) => (
            <div className="group" key={i}>
              <div className="group-title">{tx(g.gHe, g.gEn)}</div>
              {g.items.map((it, j) => (
                <a href="#" key={j}
                   className={section === it.id ? "active" : ""}
                   onClick={(e) => { e.preventDefault(); setSection(it.id); }}>
                  {it.icon}
                  <span>{tx(it.he, it.en)}</span>
                  {it.c !== null && it.c !== 0 && <span className="count">{it.c}</span>}
                </a>
              ))}
            </div>
          ))}
        </aside>

        <div className="admin-main">
          {section === "dashboard" && <Dashboard />}
          {section === "aliyot" && <AliyotAdmin />}
          {section === "gemach" && <GemachAdmin />}
          {section === "avot" && <AvotAdmin />}
          {section === "points" && <PointsRafflesAdmin />}
          {section === "biz" && <BizAdmin />}
          {section !== "dashboard" && section !== "aliyot" && section !== "gemach" && section !== "avot" && section !== "points" && section !== "biz" && (
            <div style={{ background: "#fff", border: "1px dashed var(--c-border)", borderRadius: "var(--r-lg)", padding: "60px 28px", textAlign: "center", color: "var(--c-text-muted)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "var(--c-blue-deep)", marginBottom: 6 }}>
                {tx("המסך הזה בהכנה", "This view is in preparation")}
              </div>
              <div style={{ fontSize: 14 }}>
                {tx("בדמו הנוכחי הוטענו: סקירה, סידור עליות, גמ\"ח, אבות ובנים, חוגים והגרלות, ולוח עסקים.",
                    "The current demo loads: Dashboard, Aliyot, Gemach, Avot u-Vanim, Classes & raffles, and Business directory.")}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

window.AdminScreen = AdminScreen;
