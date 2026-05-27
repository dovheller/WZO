// Screen 2 — Member View (bilingual)
const MemberScreen = () => {
  const tx = useTx();
  const [registered, setRegistered] = React.useState({ 1: true, 3: false, 2: false, 4: false });
  const toggle = (i) => setRegistered((r) => ({ ...r, [i]: !r[i] }));

  const events = [
    { id: 1, he: { name: "סעודה שלישית — \"שלוש סעודות עם הרב\"", when: "שבת, 30.5 · 19:45", tag: "שיעור" },
              en: { name: "Seudat Shlishit — \"Three Meals with the Rabbi\"", when: "Sat, 30 May · 19:45", tag: "Class" } },
    { id: 2, he: { name: "ערב התרמה — \"בונים מקווה חדש\"", when: "מוצ\"ש, 30.5 · 21:30", tag: "מבצע מיוחד" },
              en: { name: "Fundraiser — \"Building the new Mikveh\"", when: "Sat night, 30 May · 21:30", tag: "Campaign" } },
    { id: 3, he: { name: "פיקניק קהילתי — שבועות בפארק", when: "ראשון, 1.6 · 11:00–15:00", tag: "משפחות" },
              en: { name: "Community picnic — Shavuot in the park", when: "Sun, 1 Jun · 11:00–15:00", tag: "Families" } },
    { id: 4, he: { name: "שיעור גמרא לנשים — \"דרכי שלום\"", when: "שלישי, 3.6 · 20:30", tag: "שיעור" },
              en: { name: "Women's Gemara class — \"Darchei Shalom\"", when: "Tue, 3 Jun · 20:30", tag: "Class" } },
  ];

  const history = [
    { he: { w: "השתתפת בשיעור פרשת השבוע", n: "ערב שבת, 23.5 · עם הרב ויינברג" },
      en: { w: "You attended the Weekly Parasha class", n: "Erev Shabbat, 23 May · with Rabbi Weinberg" },
      tags: [{ he: "שיעור", en: "Class", c: "tag" }] },
    { he: { w: "תרמת לקרן החסד של הקהילה — £180", n: "שלישי, 19.5 · קבלה נשלחה לדוא\"ל" },
      en: { w: "You donated to the community Chesed fund — £180", n: "Tue, 19 May · Receipt emailed" },
      tags: [{ he: "תרומה", en: "Donation", c: "tag-success" }] },
    { he: { w: "הזמנת מקום לסעודת ליל הסדר הקהילתית", n: "ראשון, 3.5 · 4 מקומות" },
      en: { w: "You reserved seats for the community Seder", n: "Sun, 3 May · 4 seats" },
      tags: [{ he: "אירוע", en: "Event", c: "tag-cyan" }] },
    { he: { w: "התנדבת בערב חלוקת חבילות לפסח", n: "רביעי, 1.4 · 3.5 שעות" },
      en: { w: "You volunteered for the Pesach packages drive", n: "Wed, 1 Apr · 3.5 hours" },
      tags: [{ he: "התנדבות", en: "Volunteer", c: "tag-mustard" }] },
    { he: { w: "אישרת רישום הילדים לקייטנת \"כנפיים\"", n: "שני, 16.3 · שני ילדים" },
      en: { w: "You enrolled your children in the \"Kanafayim\" camp", n: "Mon, 16 Mar · 2 children" },
      tags: [{ he: "ילדים", en: "Kids", c: "tag" }] },
  ];

  return (
    <section className="screen" data-screen-label={tx("02 מסך החבר", "02 Member view")}>
      <div className="section-eyebrow">{tx("מסך 2 · תצוגת חבר קהילה", "Screen 2 · Community member view")}</div>
      <div className="member-wrap">
        <aside className="member-side">
          <div className="member-card-hero">
            <I.HalfStar className="magen-corner" style={{ color: "#A7E3F6", top: -30, insetInlineEnd: -30 }} />
            <div className="avatar">{tx("י\"ה", "JH")}</div>
            <div className="hi">{tx("ערב טוב", "GOOD EVENING")}</div>
            <div className="name">{tx("יונתן הירש", "Jonathan Hirsch")}</div>
            <div className="role">{tx("חבר מן המניין · מאז 2018", "Full member · Since 2018")}</div>
            <div className="stats-row">
              <div className="stat">
                <div className="n">47</div>
                <div className="l">{tx("אירועים השנה", "Events this year")}</div>
              </div>
              <div className="stat">
                <div className="n">12</div>
                <div className="l">{tx("תרומות", "Donations")}</div>
              </div>
              <div className="stat">
                <div className="n">3</div>
                <div className="l">{tx("התנדבויות", "Volunteer acts")}</div>
              </div>
            </div>
          </div>

          <div className="alert-amber">
            <div className="label"><I.Bell /> {tx("תרומה ממתינה לתשלום", "Donation awaiting payment")}</div>
            <div className="amount">£180.00</div>
            <div className="what">
              {tx(
                "התחייבות לקרן בית הכנסת מערב ראש השנה. תוקף הלינק עד 15.6.",
                "Pledge to the Shul Building Fund from Rosh Hashana eve. Link valid until 15 Jun."
              )}
            </div>
            <button className="btn btn-primary">
              <I.Coins /> {tx("שלמו עכשיו בלחיצה", "Pay now in one click")}
            </button>
          </div>

          <div className="quick-links">
            <a href="#"><I.Calendar /> {tx("תפילות והזמנים שלי", "My tefillot & zmanim")} <span className="arrow"><I.Arrow /></span></a>
            <a href="#"><I.Heart /> {tx("תרומות והתחייבויות", "Donations & pledges")} <span className="arrow"><I.Arrow /></span></a>
            <a href="#"><I.Book /> {tx("חוגים ושיעורים", "Classes & shiurim")} <span className="arrow"><I.Arrow /></span></a>
            <a href="#"><I.User /> {tx("פרטים אישיים", "Personal details")} <span className="arrow"><I.Arrow /></span></a>
          </div>
        </aside>

        <main className="member-main">
          <div className="greet-band">
            <div className="greet-text">
              <div className="big">{tx("שלום יונתן, ברוך בואך 👋", "Hi Jonathan, welcome back 👋")}</div>
              <div className="small">
                {tx(
                  "שני אירועים נוספו לחישוב שלך השבוע · יש לך התראה אחת לטיפול.",
                  "Two new events have been added for you this week · One alert needs your attention."
                )}
              </div>
            </div>
            <div className="time-pill">
              <I.Clock /> {tx("י\"ז סיון תשפ\"ו · 18:42", "17 Sivan 5786 · 18:42")}
            </div>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "var(--c-blue-deep)", margin: 0 }}>
                {tx("אירועים שמומלצים עבורך", "Events recommended for you")}
              </h3>
              <a href="#" style={{ color: "var(--c-blue)", fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                {tx("כל האירועים", "All events")} <I.Arrow className="lt-flip" />
              </a>
            </div>
            <div className="event-grid">
              {events.map((e) => {
                const t = tx(e.he, e.en);
                return (
                  <div key={e.id} className={"member-event " + (registered[e.id] ? "registered" : "")}>
                    <div className="top">
                      <div>
                        <p className="ev-name">{t.name}</p>
                        <div className="ev-when"><I.Clock /> {t.when}</div>
                      </div>
                      <span className="tag tag-cyan">{t.tag}</span>
                    </div>
                    <div className="ev-actions">
                      {registered[e.id] ? (
                        <button className="btn btn-ghost btn-sm" onClick={() => toggle(e.id)}>
                          <I.Check /> {tx("נרשמת — בטל", "Registered — cancel")}
                        </button>
                      ) : (
                        <button className="btn btn-primary btn-sm" onClick={() => toggle(e.id)}>
                          <I.Plus /> {tx("הרשמו אותי", "Register me")}
                        </button>
                      )}
                      <button className="btn btn-ghost btn-sm">{tx("פרטים", "Details")}</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="member-feat-grid">
            <AliyotMember />
            <AvotMember />
            <GemachMember />
            <PointsRafflesMember />
          </div>

          <div className="history-list">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--c-blue-deep)", margin: 0 }}>
                {tx("ההשתתפות שלי בקהילה", "My community activity")}
              </h3>
              <span className="help-note"><I.Clock /> {tx("90 הימים האחרונים", "Last 90 days")}</span>
            </div>
            {history.map((h, i) => {
              const t = tx(h.he, h.en);
              return (
                <div className="history-row" key={i}>
                  <div><div className="dot"></div></div>
                  <div>
                    <div className="what">{t.w}</div>
                    <div className="when">{t.n}</div>
                  </div>
                  <div className="tag-row">
                    {h.tags.map((tg, j) => <span key={j} className={"tag " + tg.c}>{tx(tg.he, tg.en)}</span>)}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </section>
  );
};

window.MemberScreen = MemberScreen;
