// Screen 3 — Admin / Gabbai Dashboard
const AdminScreen = () => {
  const [amount, setAmount] = React.useState("360");
  const [member, setMember] = React.useState("רוזנברג, יעקב ושירה");
  const [purpose, setPurpose] = React.useState("עליה לתורה — פרשת בהעלותך");

  const sideLinks = [
    { g: "מבט-על", items: [
      { n: "סקירה כללית", c: 0, active: true, icon: <I.Sparkles /> },
      { n: "יומן והתראות", c: 7, icon: <I.Bell /> },
    ]},
    { g: "קהילה", items: [
      { n: "אירועים", c: 14, icon: <I.Calendar /> },
      { n: "חברי הקהילה", c: 287, icon: <I.Users /> },
      { n: "תפילות ומניינים", c: 3, icon: <I.Book /> },
      { n: "תבניות הפעלה", c: 22, icon: <I.Bolt /> },
    ]},
    { g: "פיננסי", items: [
      { n: "תרומות וגבייה", c: 6, icon: <I.Coins /> },
      { n: "דוחות חודשיים", c: null, icon: <I.TrendUp /> },
    ]},
    { g: "מערכת", items: [
      { n: "הגדרות הקהילה", c: null, icon: <I.Settings /> },
    ]},
  ];

  const eventRows = [
    { name: "ערב התרמה — מקווה חדש", when: "מוצ\"ש 30.5 · 21:30", reg: 78, cap: 120, status: "פעיל", tag: "tag-amber" },
    { name: "פיקניק שבועות בפארק", when: "ראשון 1.6 · 11:00", reg: 154, cap: 200, status: "פעיל", tag: "tag-success" },
    { name: "שיעור גמרא לנשים", when: "שלישי 3.6 · 20:30", reg: 22, cap: 40, status: "פעיל", tag: "tag-success" },
    { name: "בר מצווה — דניאל הלוי", when: "שבת 30.5 · 09:30", reg: 95, cap: 110, status: "אישור משפחה", tag: "tag" },
    { name: "אזכרה ר' משה ז\"ל", when: "שני 2.6 · 19:30", reg: 41, cap: 80, status: "פעיל", tag: "tag-success" },
  ];

  const recentMembers = [
    { i: "ר\"ל", n: "רחל לוי", meta: "חברה · הצטרפה 12.3.2026", role: "ועדת חינוך" },
    { i: "א\"ש", n: "אברהם שמש", meta: "חבר · הצטרף 4.2.2026", role: "—" },
    { i: "ש\"ב", n: "שירה בן-עמי", meta: "חברה · הצטרפה 28.1.2026", role: "ועדת אירועים" },
    { i: "מ\"ק", n: "מרדכי קצנלבוגן", meta: "חבר ועד · מאז 2014", role: "גזבר" },
    { i: "ד\"פ", n: "דבורה פרנקל", meta: "חברה · הצטרפה 11.1.2026", role: "—" },
  ];

  const templates = [
    { n: "תבנית חג שבועות", m: "12 משימות · הופעל פעמיים", icon: <I.Sparkles /> },
    { n: "ערב נוער חודשי", m: "9 משימות · 14 הפעלות", icon: <I.Bolt /> },
    { n: "טקס אזכרה", m: "תפילה · הספד · קידוש", icon: <I.Candle /> },
    { n: "אירוע התרמה מובנה", m: "מטרה · גרף · לינק תשלום", icon: <I.Coins /> },
  ];

  return (
    <section className="screen" data-screen-label="03 ניהול קהילה">
      <div className="section-eyebrow">מסך 3 · מסך מנהל הקהילה (גבאי / מזכירות)</div>
      <div className="admin-wrap">
        <aside className="admin-sidebar">
          {sideLinks.map((g, i) => (
            <div className="group" key={i}>
              <div className="group-title">{g.g}</div>
              {g.items.map((it, j) => (
                <a href="#" key={j} className={it.active ? "active" : ""}>
                  {it.icon}
                  <span>{it.n}</span>
                  {it.c !== null && <span className="count">{it.c}</span>}
                </a>
              ))}
            </div>
          ))}
        </aside>

        <div className="admin-main">
          <div className="admin-header">
            <div>
              <h2>שלום הרב, בוקר טוב</h2>
              <div className="sub">קהילת אהבת ישראל, לונדון · 287 חברים פעילים · 14 אירועים השבוע</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn btn-ghost"><I.Send /> שליחת עלון</button>
              <button className="btn btn-primary"><I.Plus /> אירוע חדש</button>
            </div>
          </div>

          <div className="kpi-row">
            <div className="kpi-card feature">
              <div className="icon-corner"><I.Users /></div>
              <div className="label">חברים פעילים</div>
              <div className="value">287</div>
              <div className="delta" style={{ color: "#A7E3F6" }}><I.ArrowUp /> +12 החודש</div>
            </div>
            <div className="kpi-card">
              <div className="icon-corner"><I.Calendar /></div>
              <div className="label">אירועים בשבוע</div>
              <div className="value">14</div>
              <div className="delta"><I.ArrowUp /> 4 חדשים</div>
            </div>
            <div className="kpi-card">
              <div className="icon-corner"><I.Coins /></div>
              <div className="label">נגבה החודש</div>
              <div className="value">£24.8K</div>
              <div className="delta"><I.ArrowUp /> +18%</div>
            </div>
            <div className="kpi-card">
              <div className="icon-corner"><I.Bell /></div>
              <div className="label">התראות פתוחות</div>
              <div className="value">7</div>
              <div className="delta down">3 לטיפול היום</div>
            </div>
          </div>

          <div className="admin-grid">
            <div className="events-table">
              <div className="head">
                <h3>אירועים בשבועיים הקרובים</h3>
                <div style={{ display: "flex", gap: 6 }}>
                  <button className="btn btn-ghost btn-sm"><I.Search /> חיפוש</button>
                  <button className="btn btn-blue btn-sm"><I.Plus /> אירוע</button>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th style={{ width: "38%" }}>אירוע</th>
                    <th>מתי</th>
                    <th>הרשמות</th>
                    <th>סטטוס</th>
                  </tr>
                </thead>
                <tbody>
                  {eventRows.map((r, i) => (
                    <tr key={i}>
                      <td>
                        <div className="ev-cell">
                          <span className="n">{r.name}</span>
                          <span className="s">מארגן: ועדת אירועים</span>
                        </div>
                      </td>
                      <td>{r.when}</td>
                      <td>
                        <div className="attendance-bar">
                          <div className="bar"><div style={{ width: `${Math.round((r.reg / r.cap) * 100)}%` }}></div></div>
                          <span className="num">{r.reg}/{r.cap}</span>
                        </div>
                      </td>
                      <td><span className={"tag " + r.tag}>{r.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="donation-card">
              <h3>תרומה חדשה — הזרמה לחבר</h3>
              <p className="help">הזנת התרומה תפתח אוטומטית התראה לחבר עם לינק תשלום מאובטח.</p>

              <div className="flow-strip">
                <div className="step active"><I.Plus /> הזנת תרומה</div>
                <div className="arrow">←</div>
                <div className="step"><I.Bell /> התראה לחבר</div>
                <div className="arrow">←</div>
                <div className="step"><I.Send /> לינק תשלום</div>
                <div className="arrow">←</div>
                <div className="step"><I.Check /> סגירת מעגל</div>
              </div>

              <div className="field">
                <label>חבר קהילה</label>
                <input value={member} onChange={(e) => setMember(e.target.value)} />
              </div>
              <div className="field row2">
                <div className="field">
                  <label>סכום</label>
                  <div className="field-amount-input">
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <span className="symbol">£</span>
                  </div>
                </div>
                <div className="field">
                  <label>קטגוריה</label>
                  <select defaultValue="aliya">
                    <option value="aliya">עליה לתורה</option>
                    <option value="building">קרן בית הכנסת</option>
                    <option value="chesed">קרן חסד</option>
                    <option value="kiddush">קידוש שבת</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label>נושא / הקדשה</label>
                <input value={purpose} onChange={(e) => setPurpose(e.target.value)} />
              </div>
              <button className="btn btn-primary" style={{ width: "100%", marginTop: 6 }}>
                <I.Send /> שלחו התראה עם לינק תשלום
              </button>
              <div className="help-note" style={{ marginTop: 10, justifyContent: "center" }}>
                <I.Check /> בממוצע — נסגר תוך 38 שעות
              </div>
            </div>
          </div>

          <div className="templates-strip">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <h3>תבניות הפעלה מהירה</h3>
              <a href="#" style={{ color: "var(--c-blue)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>ספריית תבניות מלאה ←</a>
            </div>
            <div className="template-grid">
              {templates.map((t, i) => (
                <div className="template-card" key={i}>
                  <div className="icon-pill">{t.icon}</div>
                  <p className="name">{t.n}</p>
                  <div className="meta">{t.m}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="members-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
              <h3>חברים שהצטרפו לאחרונה</h3>
              <button className="btn btn-ghost btn-sm"><I.Plus /> הוספת חבר</button>
            </div>
            {recentMembers.map((m, i) => (
              <div className="member-row" key={i}>
                <div className="av">{m.i}</div>
                <div>
                  <div className="n">{m.n}</div>
                  <div className="meta">{m.meta}</div>
                </div>
                <div className="role-tag">{m.role}</div>
                <button className="btn btn-ghost btn-sm quick">פתח כרטיס</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

window.AdminScreen = AdminScreen;
