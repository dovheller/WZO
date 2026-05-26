// Screen 2 — Member View (personal)
const MemberScreen = () => {
  const [registered, setRegistered] = React.useState({ 1: true, 3: false, 2: false, 4: false });

  const toggle = (i) => setRegistered((r) => ({ ...r, [i]: !r[i] }));

  const events = [
    { id: 1, name: "סעודה שלישית — \"שלוש סעודות עם הרב\"", when: "שבת, 30.5 · 19:45", tag: "שיעור" },
    { id: 2, name: "ערב התרמה — \"בונים מקווה חדש\"", when: "מוצ\"ש, 30.5 · 21:30", tag: "מבצע מיוחד" },
    { id: 3, name: "פיקניק קהילתי — שבועות בפארק", when: "ראשון, 1.6 · 11:00–15:00", tag: "משפחות" },
    { id: 4, name: "שיעור גמרא לנשים — \"דרכי שלום\"", when: "שלישי, 3.6 · 20:30", tag: "שיעור" },
  ];

  const history = [
    { what: "השתתפת בשיעור פרשת השבוע", when: "ערב שבת, 23.5 · עם הרב ויינברג", tags: [{ t: "שיעור", c: "tag" }] },
    { what: "תרמת לקרן החסד של הקהילה — £180", when: "שלישי, 19.5 · קבלה נשלחה לדוא\"ל", tags: [{ t: "תרומה", c: "tag-success" }] },
    { what: "הזמנת מקום לסעודת ליל הסדר הקהילתית", when: "ראשון, 3.5 · 4 מקומות", tags: [{ t: "אירוע", c: "tag-cyan" }] },
    { what: "התנדבת בערב חלוקת חבילות לפסח", when: "רביעי, 1.4 · 3.5 שעות", tags: [{ t: "התנדבות", c: "tag-mustard" }] },
    { what: "אישרת רישום הילדים לקייטנת \"כנפיים\"", when: "שני, 16.3 · שני ילדים", tags: [{ t: "ילדים", c: "tag" }] },
  ];

  return (
    <section className="screen" data-screen-label="02 מסך החבר">
      <div className="section-eyebrow">מסך 2 · תצוגת חבר קהילה</div>
      <div className="member-wrap">
        <aside className="member-side">
          <div className="member-card-hero">
            <I.HalfStar className="magen-corner" style={{ color: "#A7E3F6", top: -30, left: -30 }} />
            <div className="avatar">י"ה</div>
            <div className="hi">ערב טוב</div>
            <div className="name">יונתן הירש</div>
            <div className="role">חבר מן המניין · מאז 2018</div>
            <div className="stats-row">
              <div className="stat">
                <div className="n">47</div>
                <div className="l">אירועים השנה</div>
              </div>
              <div className="stat">
                <div className="n">12</div>
                <div className="l">תרומות</div>
              </div>
              <div className="stat">
                <div className="n">3</div>
                <div className="l">התנדבויות</div>
              </div>
            </div>
          </div>

          <div className="alert-amber">
            <div className="label"><I.Bell /> תרומה ממתינה לתשלום</div>
            <div className="amount">£180.00</div>
            <div className="what">התחייבות לקרן בית הכנסת מערב ראש השנה. תוקף הלינק עד 15.6.</div>
            <button className="btn btn-primary">
              <I.Coins /> שלמו עכשיו בלחיצה
            </button>
          </div>

          <div className="quick-links">
            <a href="#"><I.Calendar /> תפילות והזמנים שלי <span className="arrow"><I.Arrow /></span></a>
            <a href="#"><I.Heart /> תרומות והתחייבויות <span className="arrow"><I.Arrow /></span></a>
            <a href="#"><I.Book /> חוגים ושיעורים <span className="arrow"><I.Arrow /></span></a>
            <a href="#"><I.User /> פרטים אישיים <span className="arrow"><I.Arrow /></span></a>
          </div>
        </aside>

        <main className="member-main">
          <div className="greet-band">
            <div className="greet-text">
              <div className="big">שלום יונתן, ברוך בואך 👋</div>
              <div className="small">שני אירועים נוספו לחישוב שלך השבוע · יש לך התראה אחת לטיפול.</div>
            </div>
            <div className="time-pill">
              <I.Clock /> י"ז סיון תשפ"ו · 18:42
            </div>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "var(--c-blue-deep)", margin: 0 }}>
                אירועים שמומלצים עבורך
              </h3>
              <a href="#" style={{ color: "var(--c-blue)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>כל האירועים ←</a>
            </div>
            <div className="event-grid">
              {events.map((e) => (
                <div key={e.id} className={"member-event " + (registered[e.id] ? "registered" : "")}>
                  <div className="top">
                    <div>
                      <p className="ev-name">{e.name}</p>
                      <div className="ev-when"><I.Clock /> {e.when}</div>
                    </div>
                    <span className="tag tag-cyan">{e.tag}</span>
                  </div>
                  <div className="ev-actions">
                    {registered[e.id] ? (
                      <button className="btn btn-ghost btn-sm" onClick={() => toggle(e.id)}>
                        <I.Check /> נרשמת — בטל
                      </button>
                    ) : (
                      <button className="btn btn-primary btn-sm" onClick={() => toggle(e.id)}>
                        <I.Plus /> הרשמו אותי
                      </button>
                    )}
                    <button className="btn btn-ghost btn-sm">פרטים</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="history-list">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--c-blue-deep)", margin: 0 }}>
                ההשתתפות שלי בקהילה
              </h3>
              <span className="help-note"><I.Clock /> 90 הימים האחרונים</span>
            </div>
            {history.map((h, i) => (
              <div className="history-row" key={i}>
                <div><div className="dot"></div></div>
                <div>
                  <div className="what">{h.what}</div>
                  <div className="when">{h.when}</div>
                </div>
                <div className="tag-row">
                  {h.tags.map((t, j) => <span key={j} className={"tag " + t.c}>{t.t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

window.MemberScreen = MemberScreen;
