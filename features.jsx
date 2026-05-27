// New v2 feature components — Gemach, Avot u-Vanim, Points & Raffles, Aliyot, Business admin
// Used by both AdminScreen and MemberScreen

// ============================================================
// 1) גמ"ח / מציאון — Gemach (community lending library)
// ============================================================
const GEMACH_ITEMS = [
  { he: { n: "מקדחה מקצועית Bosch GBH", c: "כלי עבודה" }, en: { n: "Bosch GBH professional drill", c: "Tools" },
    owner_he: "משפ' שטרן", owner_en: "Stern family", status: "loan",
    to_he: "משפ' לוי", to_en: "Levi family", until: "3.6", icon: "Wrench" },
  { he: { n: "12 כיסאות מתקפלים", c: "ריהוט אירוע" }, en: { n: "12 folding chairs", c: "Event furniture" },
    owner_he: "בית הכנסת", owner_en: "Beit Knesset", status: "loan",
    to_he: "משפ' רוזנברג", to_en: "Rosenberg family", until: "1.6", icon: "Store2" },
  { he: { n: "עגלת תינוק (Doona)", c: "ילדים" }, en: { n: "Stroller (Doona)", c: "Kids" },
    owner_he: "משפ' פלדמן", owner_en: "Feldman family", status: "free", icon: "Family" },
  { he: { n: "סיר ענק 50 ליטר", c: "מטבח לאירועים" }, en: { n: "50L industrial pot", c: "Event kitchen" },
    owner_he: "מטבח הקהילה", owner_en: "Community kitchen", status: "free", icon: "Store" },
  { he: { n: "ערכת קישוטים לסוכה", c: "חגים" }, en: { n: "Sukkah decoration kit", c: "Festivals" },
    owner_he: "משפ' כהן", owner_en: "Cohen family", status: "wanted", reqs: 3, icon: "Sparkles" },
  { he: { n: "ספרי קריאה לילדים (קומיקס)", c: "ספריה" }, en: { n: "Kids' comic books", c: "Library" },
    owner_he: "ספריית הקהילה", owner_en: "Community library", status: "free", icon: "Book" },
  { he: { n: "צילייה / שולחן עיסוי לדם הברית", c: "ברית" }, en: { n: "Brit Milah pillow & cushion", c: "Brit" },
    owner_he: "משפ' אבוטבול", owner_en: "Abutbul family", status: "loan",
    to_he: "משפ' שמש", to_en: "Shemesh family", until: "4.6", icon: "Heart" },
  { he: { n: "מצלמת DSLR Canon", c: "אירועים" }, en: { n: "Canon DSLR camera", c: "Events" },
    owner_he: "מירי כהן", owner_en: "Miri Cohen", status: "wanted", reqs: 1, icon: "Sparkles" },
];

const GemachAdmin = () => {
  const tx = useTx();
  const [tab, setTab] = React.useState("all");
  const counts = {
    all: GEMACH_ITEMS.length,
    free: GEMACH_ITEMS.filter(i => i.status === "free").length,
    loan: GEMACH_ITEMS.filter(i => i.status === "loan").length,
    wanted: GEMACH_ITEMS.filter(i => i.status === "wanted").length,
  };
  const filtered = tab === "all" ? GEMACH_ITEMS : GEMACH_ITEMS.filter(i => i.status === tab);

  return (
    <div>
      <div className="admin-section-eyebrow">
        <I.Handshake /> {tx("שיתוף וקהילה", "Sharing & community")}
      </div>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: "var(--c-blue-deep)", margin: "0 0 6px" }}>
        {tx("גמ\"ח ומציאון דיגיטלי", "Gemach & community lending")}
      </h2>
      <p style={{ fontSize: 14, color: "var(--c-text-muted)", margin: "0 0 18px", maxWidth: 720 }}>
        {tx(
          "מי משאיל מה, מי מבקש, ומתי הפריט חוזר. כל הקהילה רואה את אותו לוח — מקדחה, סיר ענק, או עגלת תינוק.",
          "Who's lending what, who's asking, when each item comes back. The whole community sees one board — drill, stockpot, or stroller."
        )}
      </p>

      <div className="feat-card">
        <div className="feat-card-head">
          <div>
            <h3>{tx("פריטי הקהילה", "Community items")}</h3>
            <div className="sub">{tx("נכון לעכשיו · עודכן לפני 3 דק'", "Up to date · refreshed 3 min ago")}</div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <div className="seg-tabs">
              <button className={tab === "all" ? "active" : ""} onClick={() => setTab("all")}>{tx("הכל", "All")} <span className="c">{counts.all}</span></button>
              <button className={tab === "free" ? "active" : ""} onClick={() => setTab("free")}>{tx("זמין", "Available")} <span className="c">{counts.free}</span></button>
              <button className={tab === "loan" ? "active" : ""} onClick={() => setTab("loan")}>{tx("מושאל", "On loan")} <span className="c">{counts.loan}</span></button>
              <button className={tab === "wanted" ? "active" : ""} onClick={() => setTab("wanted")}>{tx("מבוקש", "Wanted")} <span className="c">{counts.wanted}</span></button>
            </div>
            <button className="btn btn-ghost btn-sm"><I.Filter /> {tx("סינון", "Filter")}</button>
            <button className="btn btn-primary btn-sm"><I.Plus /> {tx("הוסיפו פריט", "Add item")}</button>
          </div>
        </div>

        <table className="gemach-table">
          <thead>
            <tr>
              <th>{tx("פריט", "Item")}</th>
              <th>{tx("בעלים", "Owner")}</th>
              <th>{tx("סטטוס", "Status")}</th>
              <th>{tx("מבקש / חזרה", "Requester / due")}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((it, i) => {
              const t = tx(it.he, it.en);
              const Ico = I[it.icon] || I.Sparkles;
              return (
                <tr key={i}>
                  <td>
                    <div className="gemach-item">
                      <div className="icn"><Ico /></div>
                      <div>
                        <div className="n">{t.n}</div>
                        <div className="s">{t.c}</div>
                      </div>
                    </div>
                  </td>
                  <td>{tx(it.owner_he, it.owner_en)}</td>
                  <td>
                    {it.status === "free" && <span className="tag tag-success">{tx("זמין להשאלה", "Available")}</span>}
                    {it.status === "loan" && <span className="tag tag-amber">{tx("מושאל", "On loan")}</span>}
                    {it.status === "wanted" && <span className="tag tag-cyan">{tx(`מבוקש (${it.reqs})`, `Wanted (${it.reqs})`)}</span>}
                  </td>
                  <td style={{ fontSize: 12.5, color: "var(--c-text)" }}>
                    {it.status === "loan" && <span>{tx(it.to_he, it.to_en)} · <span style={{ color: "var(--c-text-muted)" }}>{tx("חזרה ", "due ")}{it.until}</span></span>}
                    {it.status === "wanted" && <span style={{ color: "var(--c-text-muted)" }}>{tx("רשימת המתנה", "Waitlist")}</span>}
                    {it.status === "free" && <span style={{ color: "var(--c-text-muted)" }}>—</span>}
                  </td>
                  <td style={{ textAlign: "end" }}>
                    <button className="btn btn-ghost btn-sm">{tx("פתח", "Open")}</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Compact member-side gemach
const GemachMember = () => {
  const tx = useTx();
  return (
    <div className="member-feat-card">
      <h3>
        <span className="ico-wrap"><I.Handshake /></span>
        {tx("המציאון שלי", "My gemach")}
      </h3>
      <div className="gemach-mini">
        <span className="role">{tx("משאיל", "Lend")}</span>
        <div>
          <div className="n">{tx("מקדחה מקצועית Bosch", "Bosch professional drill")}</div>
          <div className="meta">{tx("אצל משפ' לוי · חזרה 3.6", "With Levi family · due 3 Jun")}</div>
        </div>
        <button className="btn btn-ghost btn-sm">{tx("תזכורת", "Remind")}</button>
      </div>
      <div className="gemach-mini">
        <span className="role borrowing">{tx("מבקש", "Want")}</span>
        <div>
          <div className="n">{tx("עגלת תינוק (Doona)", "Stroller (Doona)")}</div>
          <div className="meta">{tx("יש זמין — אצל משפ' פלדמן", "1 available — Feldman family")}</div>
        </div>
        <button className="btn btn-primary btn-sm">{tx("בקש", "Request")}</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, paddingTop: 10, borderTop: "1px dashed var(--c-border-soft)", fontSize: 12.5, color: "var(--c-text-muted)" }}>
        <span>{tx("48 פריטים זמינים בקהילה", "48 community items available")}</span>
        <a href="#" style={{ color: "var(--c-blue)", fontWeight: 700, textDecoration: "none" }}>{tx("לעיון בכל המציאון", "Browse all")} <I.Arrow className="lt-flip" /></a>
      </div>
    </div>
  );
};

// ============================================================
// 2) פרויקט אבות ובנים — Fathers & Sons
// ============================================================
const AVOT_PAIRS = [
  { he: { f: "יונתן הירש", s: "דניאל", note: "אבא וילד" }, en: { f: "Jonathan Hirsch", s: "Daniel" }, age: 8, att: ["P","P","P","P","P","P","A","P"], pts: 156 },
  { he: { f: "אהרון רוזנברג", s: "אריאל" }, en: { f: "Aharon Rosenberg", s: "Ariel" }, age: 10, att: ["P","P","P","A","P","P","P","P"], pts: 168 },
  { he: { f: "שמואל לוי", s: "נדב" }, en: { f: "Shmuel Levi", s: "Nadav" }, age: 7, att: ["P","P","P","P","P","P","P","P"], pts: 184 },
  { he: { f: "אבי כהן", s: "יואב" }, en: { f: "Avi Cohen", s: "Yoav" }, age: 9, att: ["P","A","P","P","A","P","P","A"], pts: 122 },
  { he: { f: "דוד שטרן", s: "איתי" }, en: { f: "David Stern", s: "Itai" }, age: 8, att: ["A","P","P","P","P","P","P","P"], pts: 148 },
  { he: { f: "ניר אבוטבול", s: "אלון" }, en: { f: "Nir Abutbul", s: "Alon" }, age: 11, att: ["P","P","P","P","P","A","P","P"], pts: 162 },
  { he: { f: "יצחק פלדמן", s: "אורי" }, en: { f: "Yitzchak Feldman", s: "Uri" }, age: 6, att: ["P","P","A","P","P","P","P","P"], pts: 144 },
  { he: { f: "מרדכי כץ", s: "יהונתן" }, en: { f: "Mordechai Katz", s: "Yehonatan" }, age: 9, att: ["P","P","P","P","P","P","P","P"], pts: 192 },
];

const AvotAdmin = () => {
  const tx = useTx();
  const weeks = ["ה' אד'","י\"ב","י\"ט","כ\"ו","ג' אייר","י' איי'","י\"ז","כ\"ד"];
  const sorted = [...AVOT_PAIRS].sort((a,b) => b.pts - a.pts);
  return (
    <div>
      <div className="admin-section-eyebrow">
        <I.Family /> {tx("חינוך ודור-הבא", "Education & next-generation")}
      </div>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: "var(--c-blue-deep)", margin: "0 0 6px" }}>
        {tx("פרויקט אבות ובנים", "Fathers & Sons program")}
      </h2>
      <p style={{ fontSize: 14, color: "var(--c-text-muted)", margin: "0 0 18px", maxWidth: 720 }}>
        {tx(
          "8 זוגות פעילים השנה. נוכחות שבועית במפגשי הלימוד בליל שישי, ניקוד מצטבר וטבלת מובילים שנחשפת בסעודת סוף הסזון.",
          "8 active pairs this year. Weekly attendance at Friday night learning, accumulated score, and a leaderboard revealed at the season-end meal."
        )}
      </p>

      <div className="avot-grid">
        <div className="feat-card">
          <div className="feat-card-head">
            <div>
              <h3>{tx("נוכחות שבועית", "Weekly attendance")}</h3>
              <div className="sub">{tx("8 שבועות אחרונים · המפגש הבא: שבת 30.5 ב-10:00", "Last 8 weeks · Next session: Sat 30 May, 10:00")}</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn btn-ghost btn-sm"><I.Plus /> {tx("רישום זוג", "Add pair")}</button>
              <button className="btn btn-primary btn-sm"><I.Check /> {tx("סמן נוכחות לשבת", "Mark this Shabbat")}</button>
            </div>
          </div>
          <div className="feat-card-pad">
            <div className="attendance-grid">
              <div className="ah pair">{tx("זוג", "Pair")}</div>
              {weeks.map((w,i) => <div key={i} className="ah">{w}</div>)}
              {AVOT_PAIRS.map((p, i) => {
                const t = tx(p.he, p.en);
                return (
                  <React.Fragment key={i}>
                    <div className="pair-name">{t.f} + {t.s}<span className="age">({p.age})</span></div>
                    {p.att.map((a, j) => (
                      <div key={j} className={"cell " + (a === "P" ? "present" : a === "A" ? "absent" : "future")}>
                        {a === "P" ? "✓" : a === "A" ? "" : ""}
                      </div>
                    ))}
                  </React.Fragment>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: 18, marginTop: 14, fontSize: 11.5, color: "var(--c-text-muted)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 12, height: 12, borderRadius: 3, background: "rgba(46,125,91,0.18)" }}></span> {tx("נוכח", "Present")}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 12, height: 12, borderRadius: 3, background: "rgba(178,58,72,0.10)" }}></span> {tx("נעדר", "Absent")}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 12, height: 12, borderRadius: 3, background: "#F4F5F8" }}></span> {tx("לא מסומן", "Unmarked")}</span>
            </div>
          </div>
        </div>

        <div className="feat-card">
          <div className="feat-card-head">
            <h3>{tx("טבלת מובילים", "Leaderboard")}</h3>
            <span className="tag tag-mustard"><I.Award /> {tx("סיום סזון: ט' תמוז", "Season ends: 9 Tammuz")}</span>
          </div>
          <div className="feat-card-pad">
            {sorted.map((p, i) => {
              const t = tx(p.he, p.en);
              return (
                <div className={"avot-leader " + (i < 3 ? "top" : "")} key={i}>
                  <div className="rank">{i + 1}</div>
                  <div className="who">{t.f} + {t.s}<span className="ages">({p.age})</span></div>
                  <div className="pts">{p.pts}<span>{tx("נק'", "pts")}</span></div>
                </div>
              );
            })}
            <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px dashed var(--c-border-soft)", fontSize: 12, color: "var(--c-text-muted)" }}>
              {tx("הפרס: ארוחת שבת זוגית למקום ראשון · ספרים לכל המשתתפים.", "Prize: Shabbat dinner for two for 1st place · books for all participants.")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AvotMember = () => {
  const tx = useTx();
  return (
    <div className="avot-mini">
      <div className="label" style={{ fontSize: 11, fontWeight: 800, color: "var(--c-success)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {tx("הזוג שלך · אבות ובנים", "Your pair · Fathers & Sons")}
      </div>
      <div className="pair-line">
        <span className="ico"><I.Family /></span>
        {tx("יונתן + דניאל הירש (8)", "Jonathan + Daniel Hirsch (8)")}
      </div>
      <div style={{ fontSize: 13, color: "var(--c-text)" }}>
        {tx("המפגש הבא: שבת 30.5 ב-10:00 · בית המדרש", "Next session: Sat 30 May, 10:00 · Beit Midrash")}
      </div>
      <div className="avot-mini-stats">
        <div className="stat"><div className="v">6</div><div className="l">{tx("שבועות רצופים", "Weeks streak")}</div></div>
        <div className="stat"><div className="v">156</div><div className="l">{tx("נקודות מצטבר", "Total points")}</div></div>
        <div className="stat"><div className="v">5</div><div className="l">{tx("מקום בטבלה", "Standing")}</div></div>
      </div>
    </div>
  );
};

// ============================================================
// 3) ניקוד והגרלות — Points & Raffles
// ============================================================
const POINT_CATS = [
  { he: { n: "חוג גמרא לנשים", det: "8 משתתפות פעילות" }, en: { n: "Women's Gemara class", det: "8 active participants" }, total: 247, icon: "Book" },
  { he: { n: "ערב נוער חודשי", det: "22 בני נוער" }, en: { n: "Monthly youth night", det: "22 teens" }, total: 1240, icon: "Bolt" },
  { he: { n: "פרויקט אבות ובנים", det: "8 זוגות" }, en: { n: "Fathers & Sons", det: "8 pairs" }, total: 890, icon: "Family" },
  { he: { n: "שיעור פרשת השבוע", det: "34 משתתפים קבועים" }, en: { n: "Weekly Parasha shiur", det: "34 regulars" }, total: 612, icon: "Scroll" },
];

const RAFFLES = [
  { he: { p: "ארוחת שבת זוגית במסעדת \"חמדה\"", d: "תרומת משפ' רוזנברג" }, en: { p: "Shabbat dinner for two at \"Chemda\"", d: "Donated by Rosenberg family" }, ends_he: "סיום: ט\"ז סיון · 12.6", ends_en: "Ends: 16 Sivan · 12 Jun", entries: 67, cost: 25 },
  { he: { p: "כרטיס לכנס ירושלים תשפ\"ז", d: "תרומה אנונימית" }, en: { p: "Ticket to Jerusalem Conference 5787", d: "Anonymous donation" }, ends_he: "סיום: ר\"ח תמוז · 30.7", ends_en: "Ends: 1 Tammuz · 30 Jul", entries: 124, cost: 50 },
  { he: { p: "סט סידור ומחזור עור עבודת יד", d: "תרומת משפ' פינקלשטיין" }, en: { p: "Leather siddur & machzor set, handmade", d: "Donated by Finkelstein family" }, ends_he: "סיום: י\"ב סיון · 8.6", ends_en: "Ends: 12 Sivan · 8 Jun", entries: 41, cost: 15 },
  { he: { p: "ערב לימוד פרטי עם הרב ויינברג", d: "תרומת הרב" }, en: { p: "Private learning evening with Rabbi Weinberg", d: "Rabbi's gift" }, ends_he: "סיום: ב' תמוז · 31.7", ends_en: "Ends: 2 Tammuz · 31 Jul", entries: 19, cost: 30 },
];

const PointsRafflesAdmin = () => {
  const tx = useTx();
  return (
    <div>
      <div className="admin-section-eyebrow">
        <I.Award /> {tx("עידוד והשתתפות", "Engagement & rewards")}
      </div>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: "var(--c-blue-deep)", margin: "0 0 6px" }}>
        {tx("חוגים, ניקוד והגרלות", "Classes, points & raffles")}
      </h2>
      <p style={{ fontSize: 14, color: "var(--c-text-muted)", margin: "0 0 18px", maxWidth: 720 }}>
        {tx(
          "כל השתתפות צוברת נקודות. כל חודש 3–5 הגרלות מאפשרות לחברים לפדות את הנקודות לחוויות אמיתיות — מבית הקהילה ולעסקים שלה.",
          "Every participation earns points. Each month 3–5 raffles let members spend points on real experiences — from the kehilla and its businesses."
        )}
      </p>

      <div className="admin-grid">
        <div className="feat-card">
          <div className="feat-card-head">
            <div>
              <h3>{tx("חוגים פעילים וניקוד מצטבר", "Active classes & accumulated points")}</h3>
              <div className="sub">{tx("סבב נוכחי · יסתיים בסוף תמוז", "Current cycle · ends end of Tammuz")}</div>
            </div>
            <button className="btn btn-ghost btn-sm"><I.Plus /> {tx("חוג חדש", "Add class")}</button>
          </div>
          <div className="feat-card-pad">
            {POINT_CATS.map((c, i) => {
              const t = tx(c.he, c.en);
              const Ico = I[c.icon] || I.Sparkles;
              return (
                <div className="cat-row" key={i}>
                  <div className="cat-name"><span className="ico"><Ico /></span>{t.n}</div>
                  <div className="cat-stat"><div className="v">{c.total.toLocaleString()}</div><div className="l">{tx("נקודות סך-הכל", "total points")}</div></div>
                  <div className="cat-stat" style={{ color: "var(--c-text-muted)", fontSize: 12.5 }}>{t.det}</div>
                  <button className="btn btn-ghost btn-sm"><I.Pencil /> {tx("ערוך", "Edit")}</button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="feat-card">
          <div className="feat-card-head">
            <div>
              <h3>{tx("הגרלות פעילות", "Active raffles")}</h3>
              <div className="sub">{tx("נדיבות הקהילה היא הדלק", "Powered by community generosity")}</div>
            </div>
            <button className="btn btn-primary btn-sm"><I.Dice /> {tx("הגרלה חדשה", "New raffle")}</button>
          </div>
          <div className="feat-card-pad">
            <div className="raffle-grid">
              {RAFFLES.map((r, i) => {
                const t = tx(r.he, r.en);
                return (
                  <div className="raffle-card" key={i}>
                    <div>
                      <div className="prize">{t.p}</div>
                      <div className="donor">{t.d}</div>
                    </div>
                    <div className="meta-row">
                      <span>{tx(r.ends_he, r.ends_en)}</span>
                      <span className="entries">{r.entries} {tx("כניסות", "entries")}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PointsRafflesMember = () => {
  const tx = useTx();
  const [entered, setEntered] = React.useState({});
  const toggle = (i) => setEntered(e => ({ ...e, [i]: !e[i] }));

  return (
    <div className="member-feat-card" style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ padding: "18px 20px 14px" }}>
        <h3 style={{ marginBottom: 14 }}>
          <span className="ico-wrap"><I.Award /></span>
          {tx("הנקודות וההגרלות שלי", "My points & raffles")}
        </h3>
        <div className="points-hero">
          <div>
            <div className="l">{tx("יתרת נקודות", "Points balance")}</div>
            <div className="v">247</div>
            <div className="breakdown">{tx("חוג גמרא · אבות ובנים · פרשת השבוע", "Gemara · Avot u-Vanim · Parasha")}</div>
          </div>
          <div className="ico-side"><I.Award width="36" height="36" /></div>
        </div>
      </div>
      <div style={{ padding: "0 20px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, color: "var(--c-blue-deep)" }}>
            {tx("הגרלות שאתה יכול להיכנס", "Raffles you can enter")}
          </div>
          <span className="help-note"><I.Dice /> {tx("הגרלה כל חודש", "Monthly")}</span>
        </div>
        <div className="raffle-grid">
          {RAFFLES.slice(0, 2).map((r, i) => {
            const t = tx(r.he, r.en);
            const isIn = !!entered[i];
            return (
              <div className="raffle-card" key={i}>
                <div>
                  <div className="prize">{t.p}</div>
                  <div className="donor">{tx(r.ends_he, r.ends_en)}</div>
                </div>
                <div className="meta-row">
                  <span style={{ color: "var(--c-amber-hover)", fontWeight: 700 }}>{r.cost} {tx("נק' לכניסה", "pts to enter")}</span>
                  <button className={"enter-btn " + (isIn ? "entered" : "")} onClick={() => toggle(i)}>
                    {isIn ? <span><I.Check /> {tx("בפנים", "Entered")}</span> : tx("כניסה", "Enter")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 4) סידור עליות לתורה — Aliyot board
// ============================================================
const ALIYOT = [
  { ord_he: "כֹּהֵן", ord_en: "Kohen", who_he: "הרב אליעזר ויינברג", who_en: "Rabbi E. Weinberg", occ_he: "כבוד הרב הקבוע", occ_en: "Standing kavod", last_he: "כל שבת", last_en: "Every Shabbat" },
  { ord_he: "לֵוִי", ord_en: "Levi", who_he: "משה כהן הלוי", who_en: "Moshe Cohen-Halevi", occ_he: "יום אזכרה לאביו ז\"ל", occ_en: "Father's yahrzeit", last_he: "12 שבועות", last_en: "12 weeks" },
  { ord_he: "שְׁלִישִׁי", ord_en: "Shlishi", who_he: "דוד שטרן", who_en: "David Stern", occ_he: "לכבוד בר המצווה של איתי", occ_en: "Itai's bar mitzvah", last_he: "9 שבועות", last_en: "9 weeks" },
  { ord_he: "רְבִיעִי", ord_en: "Revi'i", who_he: "יוסף לוי", who_en: "Yosef Levi", occ_he: "יום הולדת 60", occ_en: "60th birthday", last_he: "6 שבועות", last_en: "6 weeks" },
  { ord_he: "חֲמִישִׁי", ord_en: "Chamishi", who_he: "אברהם פרץ", who_en: "Abraham Peretz", occ_he: "אורח מארה\"ב לרגל שמחה משפחתית", occ_en: "Guest from US, family simcha", last_he: "—", last_en: "—" },
  { ord_he: "שִׁישִׁי", ord_en: "Shishi", who_he: "יצחק הלוי", who_en: "Yitzchak Halevi", occ_he: "הנחת תפילין חדשות", occ_en: "New tefillin", last_he: "14 שבועות", last_en: "14 weeks" },
  { ord_he: "שְׁבִיעִי", ord_en: "Shvi'i", who_he: "מרדכי כץ", who_en: "Mordechai Katz", occ_he: "יום אזכרה לאמו ע\"ה", occ_en: "Mother's yahrzeit", last_he: "8 שבועות", last_en: "8 weeks" },
];

const ALIYOT_QUEUE = [
  { he: "יצחק רוזן", en: "Yitzchak Rosen", gap_he: "14 שבועות מאז", gap_en: "14 wks since" },
  { he: "בנימין שניידר", en: "Benjamin Schneider", gap_he: "12 שבועות מאז", gap_en: "12 wks since" },
  { he: "אברהם גולדמן", en: "Abraham Goldman", gap_he: "11 שבועות מאז", gap_en: "11 wks since" },
  { he: "שלמה אבוטבול", en: "Shlomo Abutbul", gap_he: "10 שבועות מאז", gap_en: "10 wks since" },
  { he: "נחום פינקל", en: "Nachum Finkel", gap_he: "9 שבועות מאז", gap_en: "9 wks since" },
];

const AliyotAdmin = () => {
  const tx = useTx();
  return (
    <div>
      <div className="admin-section-eyebrow">
        <I.TorahScroll /> {tx("תפילה ובית הכנסת", "Tefilla & shul")}
      </div>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: "var(--c-blue-deep)", margin: "0 0 6px" }}>
        {tx("סידור עליות לתורה", "Aliyot la-Torah scheduling")}
      </h2>
      <p style={{ fontSize: 14, color: "var(--c-text-muted)", margin: "0 0 18px", maxWidth: 720 }}>
        {tx(
          "סידור שבועי חי. הגבאי רואה מי קיבל מתי, מי בתור הבא, ויכול לשלב הקדשות לחברים שיש להם שמחה או יום אזכרה.",
          "A living weekly board. The gabbai sees who got what when, who's next in line, and can weave in dedications for members marking a simcha or yahrzeit."
        )}
      </p>

      <div className="feat-card">
        <div className="aliyot-head">
          <div>
            <h3>{tx("שבת הקרובה · בית הכנסת הראשי", "This Shabbat · Main minyan")}</h3>
            <div className="sub">{tx("שני סדרים מקבילים — הראשי והשני · 7 עליות + מפטיר", "Two parallel minyanim — main and second · 7 aliyot + maftir")}</div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span className="parasha-tag">{tx("פרשת בְּהַעֲלֹתְךָ", "Parashat Beha'alotcha")}</span>
            <button className="btn btn-blue btn-sm"><I.Send /> {tx("פרסם לוח שבועי", "Publish board")}</button>
          </div>
        </div>

        <div className="aliyot-list">
          {ALIYOT.map((a, i) => (
            <div className="aliyot-row" key={i}>
              <div className="ord">{tx(a.ord_he, a.ord_en)}</div>
              <div>
                <div className="who">{tx(a.who_he, a.who_en)}</div>
                <div className="occ">{tx(a.occ_he, a.occ_en)}</div>
              </div>
              <div className="last">{tx("עלייה אחרונה: ", "Last aliya: ")}{tx(a.last_he, a.last_en)}</div>
              <a href="#" className="quiet-pay" title={tx("שלח תזכורת אופציונלית לתרומה בעקבות העלייה", "Send an optional donation reminder following the aliyah")}>
                <span className="dot"></span>
                {tx("תזכורת תרומה", "Donation nudge")}
              </a>
            </div>
          ))}
          <div className="aliyot-row" key="maftir">
            <div className="ord maftir">{tx("מַפְטִיר", "Maftir")}</div>
            <div>
              <div className="who">{tx("דניאל הלוי", "Daniel Halevi")}</div>
              <div className="occ">{tx("בר המצווה של דניאל · ההפטרה: \"וַתִּתְפַּלֵּל חַנָּה\"", "Daniel's bar mitzvah · Haftarah: \"VaTitpalel Channah\"")}</div>
            </div>
            <div className="last">{tx("אירוע מיוחד", "Special event")}</div>
            <a href="#" className="quiet-pay">
              <span className="dot"></span>
              {tx("תזכורת תרומה", "Donation nudge")}
            </a>
          </div>
        </div>

        <div className="queue-list">
          <h4>{tx("תור הבא לעלייה · לפי משך הזמן מאז העלייה האחרונה", "Next-up queue · by time since last aliya")}</h4>
          {ALIYOT_QUEUE.map((q, i) => (
            <div className="queue-row" key={i}>
              <span className="pos">{i + 1}</span>
              <span>{tx(q.he, q.en)}</span>
              <span className="gap">{tx(q.gap_he, q.gap_en)}</span>
            </div>
          ))}
        </div>

        <div style={{ padding: "14px 22px", borderTop: "1px solid var(--c-border-soft)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12.5, color: "var(--c-text-muted)", flexWrap: "wrap", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <I.Bell />
            {tx(
              "החיבור לגבייה הוא שקט — \"תזכורת תרומה\" שולחת לחבר הצעת תרומה אופציונלית, לא דורשת. השליטה בידיו.",
              "Payment is intentionally quiet — \"donation nudge\" sends the member a suggested, optional contribution. They decide."
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AliyotMember = () => {
  const tx = useTx();
  return (
    <div className="aliyot-mini">
      <div style={{ fontSize: 11, fontWeight: 800, color: "var(--c-amber-hover)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
        <I.TorahScroll /> {tx("עליות לתורה", "Aliyot la-Torah")}
      </div>
      <div className="row-line"><span className="l">{tx("עלייתך האחרונה", "Your last aliya")}</span><span className="v">{tx("שלישי · פרשת נשא · 23.5", "Shlishi · Parashat Naso · 23 May")}</span></div>
      <div className="row-line"><span className="l">{tx("הזדמנות הבאה — לפי תור", "Next opportunity — by queue")}</span><span className="v">{tx("בעוד ~3 שבועות", "in ~3 weeks")}</span></div>
      <div className="row-line"><span className="l">{tx("יומא דהילולא של אביך ז\"ל", "Father's yahrzeit (z\"l)")}</span><span className="v">{tx("ז' תמוז · 23.6", "7 Tammuz · 23 Jun")}</span></div>
      <div className="pay-row">
        <span className="hint">{tx("כמנהג — לתרום על העלייה (אופציונלי):", "If you wish — a donation for your aliya (optional):")}</span>
        <div className="pay-chips">
          <a href="#">£18</a>
          <a href="#">£36</a>
          <a href="#">£54</a>
          <a href="#">{tx("אחר", "Other")}</a>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 5) ניהול עסקי הקהילה (admin)
// ============================================================
const BIZ_LIST = [
  { he: { n: "ד\"ר רחל אביטל", t: "רופאת ילדים · קליניקה ביתית" }, en: { n: "Dr. Rachel Avital", t: "Pediatrician · home clinic" }, status: "app", icon: "Heart" },
  { he: { n: "אברהם שניידר", t: "עורך דין נדל\"ן ומקרקעין" }, en: { n: "Abraham Schneider", t: "Real-estate attorney" }, status: "app", icon: "Bag" },
  { he: { n: "מטבח חמדה — קייטרינג", t: "כשרות מהדרין · אירועים עד 200" }, en: { n: "Chemda Kitchen — Catering", t: "Glatt kosher · events up to 200" }, status: "app", icon: "Store" },
  { he: { n: "מוסך הלוי ובניו", t: "שירות לרכב · 25 שנה" }, en: { n: "Halevi & Sons Garage", t: "Auto service · 25 years" }, status: "app", icon: "Wrench" },
  { he: { n: "מירי כהן — מורה פרטית", t: "אנגלית · מתמטיקה · GCSE" }, en: { n: "Miri Cohen — Private tutor", t: "English · Maths · GCSE" }, status: "app", icon: "Book" },
  { he: { n: "טיש & טיש — אדריכלות פנים", t: "בתי קהילה ובתים פרטיים" }, en: { n: "Tisch & Tisch — Interior arch.", t: "Community & private homes" }, status: "app", icon: "Sparkles" },
  { he: { n: "ברוך גולן — שיפוצים", t: "מתמחה בשיפוצי מטבחים" }, en: { n: "Baruch Golan — Renovations", t: "Kitchen specialist" }, status: "pend", icon: "Wrench" },
  { he: { n: "חנה לוין — צילום אירועים", t: "ברית · בר מצווה · חתונה" }, en: { n: "Chana Levin — Event photography", t: "Brit · bar mitzvah · wedding" }, status: "pend", icon: "Sparkles" },
];

const BizAdmin = () => {
  const tx = useTx();
  const [tab, setTab] = React.useState("app");
  const counts = {
    app: BIZ_LIST.filter(b => b.status === "app").length,
    pend: BIZ_LIST.filter(b => b.status === "pend").length,
  };
  const filtered = BIZ_LIST.filter(b => b.status === tab);

  return (
    <div>
      <div className="admin-section-eyebrow">
        <I.Store2 /> {tx("פרנסה ושיתוף", "Livelihood & sharing")}
      </div>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: "var(--c-blue-deep)", margin: "0 0 6px" }}>
        {tx("ניהול לוח עסקי הקהילה", "Community business directory")}
      </h2>
      <p style={{ fontSize: 14, color: "var(--c-text-muted)", margin: "0 0 18px", maxWidth: 720 }}>
        {tx(
          "מאשרים, עורכים ומציגים את העסקים שמופיעים בקיוסק הציבורי של הקהילה. עדיפות ראשונה — עסקים של חברי הקהילה.",
          "Approve, edit, and curate the businesses shown on the community's public kiosk. Members' businesses get first priority."
        )}
      </p>

      <div className="feat-card">
        <div className="feat-card-head">
          <div>
            <h3>{tx("ספריית העסקים", "Business directory")}</h3>
            <div className="sub">{tx("מוצגים בקיוסק הציבורי · עידכון אחרון: היום בבוקר", "Shown on the public kiosk · Last updated: this morning")}</div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div className="seg-tabs">
              <button className={tab === "app" ? "active" : ""} onClick={() => setTab("app")}>{tx("מאושרים", "Approved")} <span className="c">{counts.app}</span></button>
              <button className={tab === "pend" ? "active" : ""} onClick={() => setTab("pend")}>{tx("ממתינים", "Pending")} <span className="c">{counts.pend}</span></button>
            </div>
            <button className="btn btn-primary btn-sm"><I.Plus /> {tx("עסק חדש", "Add business")}</button>
          </div>
        </div>
        <div className="feat-card-pad">
          <div className="biz-admin-grid">
            {filtered.map((b, i) => {
              const t = tx(b.he, b.en);
              const Ico = I[b.icon] || I.Store;
              return (
                <div className="biz-admin-card" key={i}>
                  <div className="ico"><Ico /></div>
                  <div>
                    <div className="n">{t.n}</div>
                    <div className="meta">{t.t}</div>
                    <div style={{ marginTop: 6 }}>
                      <span className={"tag-mini " + b.status}>{b.status === "app" ? tx("מאושר", "Approved") : tx("ממתין לאישור", "Pending review")}</span>
                    </div>
                  </div>
                  <button className="menu" title={tx("פעולות", "Actions")}><I.ChevDown /></button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

window.GemachAdmin = GemachAdmin;
window.GemachMember = GemachMember;
window.AvotAdmin = AvotAdmin;
window.AvotMember = AvotMember;
window.PointsRafflesAdmin = PointsRafflesAdmin;
window.PointsRafflesMember = PointsRafflesMember;
window.AliyotAdmin = AliyotAdmin;
window.AliyotMember = AliyotMember;
window.BizAdmin = BizAdmin;
