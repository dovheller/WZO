// Screen 4 — WZO Network Super-Admin (bilingual)
const SuperAdminScreen = () => {
  const tx = useTx();

  const latLngTo = (lat, lng) => ({
    left: ((lng + 180) / 360) * 100,
    top: ((75 - lat) / 130) * 100,
  });

  const pins = [
    { he: "ירושלים", en: "Jerusalem", country_he: "ישראל · מטה", country_en: "Israel · HQ", lat: 31.78, lng: 35.22, large: true },
    { he: "ניו יורק", en: "New York", country_he: "ארה\"ב", country_en: "USA", lat: 40.71, lng: -74.0, large: true },
    { he: "לונדון", en: "London", country_he: "אנגליה", country_en: "UK", lat: 51.5, lng: -0.13, large: true },
    { he: "מלבורן", en: "Melbourne", country_he: "אוסטרליה", country_en: "Australia", lat: -37.81, lng: 144.96, large: true },
    { he: "בואנוס איירס", en: "Buenos Aires", country_he: "ארגנטינה", country_en: "Argentina", lat: -34.61, lng: -58.38 },
    { he: "מקסיקו סיטי", en: "Mexico City", country_he: "מקסיקו", country_en: "Mexico", lat: 19.43, lng: -99.13 },
    { he: "טורונטו", en: "Toronto", country_he: "קנדה", country_en: "Canada", lat: 43.65, lng: -79.38 },
    { he: "מנצ'סטר", en: "Manchester", country_he: "אנגליה", country_en: "UK", lat: 53.48, lng: -2.24 },
    { he: "אנטוורפן", en: "Antwerp", country_he: "בלגיה", country_en: "Belgium", lat: 51.22, lng: 4.40 },
    { he: "ז'נבה", en: "Geneva", country_he: "שווייץ", country_en: "Switzerland", lat: 46.20, lng: 6.14 },
    { he: "פריז", en: "Paris", country_he: "צרפת", country_en: "France", lat: 48.85, lng: 2.35 },
    { he: "מילאנו", en: "Milan", country_he: "איטליה", country_en: "Italy", lat: 45.46, lng: 9.19 },
    { he: "ברלין", en: "Berlin", country_he: "גרמניה", country_en: "Germany", lat: 52.52, lng: 13.40 },
    { he: "וינה", en: "Vienna", country_he: "אוסטריה", country_en: "Austria", lat: 48.21, lng: 16.37 },
    { he: "מוסקבה", en: "Moscow", country_he: "רוסיה", country_en: "Russia", lat: 55.75, lng: 37.62 },
    { he: "סאו פאולו", en: "São Paulo", country_he: "ברזיל", country_en: "Brazil", lat: -23.55, lng: -46.63 },
    { he: "יוהנסבורג", en: "Johannesburg", country_he: "דרא\"פ", country_en: "South Africa", lat: -26.20, lng: 28.04 },
    { he: "סידני", en: "Sydney", country_he: "אוסטרליה", country_en: "Australia", lat: -33.87, lng: 151.21 },
    { he: "מומבאי", en: "Mumbai", country_he: "הודו", country_en: "India", lat: 19.08, lng: 72.88 },
    { he: "לוס אנג'לס", en: "Los Angeles", country_he: "ארה\"ב", country_en: "USA", lat: 34.05, lng: -118.24 },
    { he: "מיאמי", en: "Miami", country_he: "ארה\"ב", country_en: "USA", lat: 25.76, lng: -80.19 },
    { he: "שיקגו", en: "Chicago", country_he: "ארה\"ב", country_en: "USA", lat: 41.88, lng: -87.63 },
  ];

  const leaders = [
    { rank: 1, he: { n: "קהילת אהבת ישראל", loc: "לונדון · אנגליה", v: "+38%", l: "צמיחה" },
                en: { n: "Ahavat Yisrael", loc: "London · UK", v: "+38%", l: "Growth" } },
    { rank: 2, he: { n: "אור החיים", loc: "מלבורן · אוסטרליה", v: "94%", l: "מילוי אירועים" },
                en: { n: "Or Ha-Chayim", loc: "Melbourne · Australia", v: "94%", l: "Event fill-rate" } },
    { rank: 3, he: { n: "בית יעקב", loc: "מקסיקו סיטי", v: "318", l: "אינטראקציות שבוע" },
                en: { n: "Beit Yaakov", loc: "Mexico City", v: "318", l: "Weekly interactions" } },
    { rank: 4, he: { n: "תפארת ישראל", loc: "יוהנסבורג", v: "1.4K", l: "תורמים פעילים" },
                en: { n: "Tiferet Yisrael", loc: "Johannesburg", v: "1.4K", l: "Active donors" } },
    { rank: 5, he: { n: "נחלת אבות", loc: "טורונטו · קנדה", v: "12", l: "אירועים החודש" },
                en: { n: "Nachalat Avot", loc: "Toronto · Canada", v: "12", l: "Events this month" } },
  ];

  const activity = [
    { he: "קהילת בית יעקב (מקסיקו) שיגרה התראת תרומה ל-46 חברים",
      en: "Beit Yaakov (Mexico) sent a donation alert to 46 members",
      time_he: "לפני 4 דק'", time_en: "4 min ago", c: "amber", icon: <I.Coins /> },
    { he: "אהבת ישראל (לונדון) פתחה אירוע: 'ערב התרמה — מקווה חדש'",
      en: "Ahavat Yisrael (London) opened an event: \"New Mikveh Fundraiser\"",
      time_he: "לפני 12 דק'", time_en: "12 min ago", c: "", icon: <I.Calendar /> },
    { he: "הצטרפו 14 חברים חדשים לקהילה בסאו פאולו",
      en: "14 new members joined the São Paulo community",
      time_he: "לפני 28 דק'", time_en: "28 min ago", c: "cyan", icon: <I.Users /> },
    { he: "תבנית 'חג שבועות' הופעלה ע\"י 7 קהילות במקביל",
      en: "\"Shavuot\" template activated by 7 communities in parallel",
      time_he: "לפני שעה", time_en: "1 hour ago", c: "", icon: <I.Bolt /> },
    { he: "המחלקה שיגרה עדכון מערכת לכל הרשת · v2.4.1",
      en: "The Department pushed a system update to the entire network · v2.4.1",
      time_he: "לפני 3 שעות", time_en: "3 hours ago", c: "", icon: <I.Settings /> },
  ];

  return (
    <section className="screen" data-screen-label={tx("04 מסך-העל", "04 Super-admin")}>
      <div className="section-eyebrow">
        {tx("מסך 4 · מסך-העל של המחלקה לגיוס משאבים וחיזוק הקשר עם קהילות בתפוצות", "Screen 4 · Diaspora Department — network super-admin")}
      </div>

      <div className="super-hero">
        <I.HalfStar className="magen-corner" style={{ color: "#A7E3F6", top: -40, insetInlineEnd: -40, width: 280, height: 280 }} />
        <div className="row1">
          <div>
            <div className="eyebrow">
              <span className="dot"></span>
              {tx("מבט-על · רשת הקהילות העולמית", "Network overview · global communities")}
            </div>
            <h1>{tx("284 קהילות. עולם אחד.", "284 communities. One world.")}</h1>
            <p className="sub">
              {tx(
                "תמונת מצב חיה של כל הקהילות המנוהלות תחת תשתית המחלקה — מהבית לבית, מהיבשת ליבשת.",
                "A live snapshot of every community managed on the Department platform — home to home, continent to continent."
              )}
            </p>
          </div>
          <div className="time-block">
            <div className="now">06:42 GMT</div>
            <div className="where">{tx("ירושלים · 09:42 שעון מקומי", "Jerusalem · 09:42 local time")}</div>
          </div>
        </div>

        <div className="super-kpi-row">
          <div className="super-kpi">
            <div className="label">{tx("קהילות פעילות", "Active communities")}</div>
            <div className="value">284</div>
            <div className="delta"><I.ArrowUp /> {tx("+6 הצטרפו החודש", "+6 joined this month")}</div>
          </div>
          <div className="super-kpi">
            <div className="label">{tx("אינטראקציות החודש", "Interactions this month")}</div>
            <div className="value">412K</div>
            <div className="delta"><I.ArrowUp /> {tx("+24% מול אשתקד", "+24% YoY")}</div>
          </div>
          <div className="super-kpi amber">
            <div className="label">{tx("אירועים פעילים ברגע זה", "Live events right now")}</div>
            <div className="value">1,847</div>
            <div className="delta">{tx("ב-72 ערים", "across 72 cities")}</div>
          </div>
          <div className="super-kpi">
            <div className="label">{tx("חברים ברשת", "Members on the network")}</div>
            <div className="value">38.4K</div>
            <div className="delta"><I.ArrowUp /> {tx("+1,240 השבוע", "+1,240 this week")}</div>
          </div>
        </div>
      </div>

      <div className="super-grid">
        <div className="map-card">
          <div className="map-head">
            <div>
              <h3>{tx("הרשת על המפה", "The network, mapped")}</h3>
              <div style={{ fontSize: 12.5, color: "var(--c-text-muted)", marginTop: 2 }}>
                {tx("22 קהילות הראשיות מוצגות · לחיצה לכניסה", "22 lead communities shown · click to enter")}
              </div>
            </div>
            <div className="legend">
              <span className="swatch"><span className="d" style={{ background: "var(--c-blue)" }}></span> {tx("מרכזי-על (200+ חברים)", "Hub (200+ members)")}</span>
              <span className="swatch"><span className="d" style={{ background: "var(--c-amber)" }}></span> {tx("קהילה פעילה", "Active community")}</span>
            </div>
          </div>
          <div className="world-stage">
            <div className="world-grid"></div>
            <span className="continent-label" style={{ top: "16%", left: "20%" }}>{tx("צפ' אמריקה", "NORTH AMERICA")}</span>
            <span className="continent-label" style={{ top: "68%", left: "30%" }}>{tx("דר' אמריקה", "SOUTH AMERICA")}</span>
            <span className="continent-label" style={{ top: "10%", left: "48%" }}>{tx("אירופה", "EUROPE")}</span>
            <span className="continent-label" style={{ top: "60%", left: "52%" }}>{tx("אפריקה", "AFRICA")}</span>
            <span className="continent-label" style={{ top: "28%", left: "70%" }}>{tx("אסיה", "ASIA")}</span>
            <span className="continent-label" style={{ top: "82%", left: "84%" }}>{tx("אוקיאניה", "OCEANIA")}</span>

            {pins.map((p, i) => {
              const pos = latLngTo(p.lat, p.lng);
              const city = tx(p.he, p.en);
              return (
                <div
                  key={i}
                  className={"pin " + (p.large ? "large" : "")}
                  style={{ left: pos.left + "%", top: pos.top + "%" }}
                  title={city}
                >
                  <span className="glow"></span>
                  <span className="dot"></span>
                  {p.large && <span className="label">{city}</span>}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="leader-card">
            <h3>{tx("קהילות מובילות החודש", "Top communities this month")}</h3>
            {leaders.map((l) => {
              const t = tx(l.he, l.en);
              return (
                <div className={"leader-row " + (l.rank <= 3 ? "top" : "")} key={l.rank}>
                  <div className="rank">{l.rank}</div>
                  <div className="info">
                    <div className="n">{t.n}</div>
                    <div className="loc">{t.loc}</div>
                  </div>
                  <div className="metric">
                    <div className="v">{t.v}</div>
                    <div className="l">{t.l}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="activity-feed">
            <h3>{tx("פעילות חיה ברשת", "Live network activity")}</h3>
            {activity.map((a, i) => (
              <div className="act-row" key={i}>
                <div className={"ico " + a.c}>{a.icon}</div>
                <div className="text">{tx(a.he, a.en)}</div>
                <div className="time">{tx(a.time_he, a.time_en)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

window.SuperAdminScreen = SuperAdminScreen;
