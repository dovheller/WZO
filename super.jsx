// Screen 4 — WZO Network Super-Admin
const SuperAdminScreen = () => {
  // Lat/Lng → percentage on a Mercator-ish strip from y=75°N to y=-55°S
  const latLngTo = (lat, lng) => ({
    left: ((lng + 180) / 360) * 100,
    top: ((75 - lat) / 130) * 100,
  });

  const pins = [
    { city: "ירושלים", country: "ישראל · מטה", lat: 31.78, lng: 35.22, members: 412, large: true },
    { city: "ניו יורק", country: "ארה\"ב", lat: 40.71, lng: -74.0, members: 824, large: true },
    { city: "לונדון", country: "אנגליה", lat: 51.5, lng: -0.13, members: 287, large: true },
    { city: "מלבורן", country: "אוסטרליה", lat: -37.81, lng: 144.96, members: 196, large: true },
    { city: "בואנוס איירס", country: "ארגנטינה", lat: -34.61, lng: -58.38, members: 174 },
    { city: "מקסיקו סיטי", country: "מקסיקו", lat: 19.43, lng: -99.13, members: 142 },
    { city: "טורונטו", country: "קנדה", lat: 43.65, lng: -79.38, members: 224 },
    { city: "מנצ'סטר", country: "אנגליה", lat: 53.48, lng: -2.24, members: 96 },
    { city: "אנטוורפן", country: "בלגיה", lat: 51.22, lng: 4.40, members: 112 },
    { city: "ז'נבה", country: "שווייץ", lat: 46.20, lng: 6.14, members: 74 },
    { city: "פריז", country: "צרפת", lat: 48.85, lng: 2.35, members: 318 },
    { city: "מילאנו", country: "איטליה", lat: 45.46, lng: 9.19, members: 88 },
    { city: "ברלין", country: "גרמניה", lat: 52.52, lng: 13.40, members: 134 },
    { city: "וינה", country: "אוסטריה", lat: 48.21, lng: 16.37, members: 92 },
    { city: "מוסקבה", country: "רוסיה", lat: 55.75, lng: 37.62, members: 168 },
    { city: "סאו פאולו", country: "ברזיל", lat: -23.55, lng: -46.63, members: 246 },
    { city: "יוהנסבורג", country: "דרא\"פ", lat: -26.20, lng: 28.04, members: 158 },
    { city: "סידני", country: "אוסטרליה", lat: -33.87, lng: 151.21, members: 184 },
    { city: "מומבאי", country: "הודו", lat: 19.08, lng: 72.88, members: 38 },
    { city: "לוס אנג'לס", country: "ארה\"ב", lat: 34.05, lng: -118.24, members: 312 },
    { city: "מיאמי", country: "ארה\"ב", lat: 25.76, lng: -80.19, members: 142 },
    { city: "שיקגו", country: "ארה\"ב", lat: 41.88, lng: -87.63, members: 188 },
  ];

  const leaders = [
    { rank: 1, n: "קהילת אהבת ישראל", loc: "לונדון · אנגליה", v: "+38%", l: "צמיחה" },
    { rank: 2, n: "אור החיים", loc: "מלבורן · אוסטרליה", v: "94%", l: "מילוי אירועים" },
    { rank: 3, n: "בית יעקב", loc: "מקסיקו סיטי", v: "318", l: "אינטראקציות שבוע" },
    { rank: 4, n: "תפארת ישראל", loc: "יוהנסבורג", v: "1.4K", l: "תורמים פעילים" },
    { rank: 5, n: "נחלת אבות", loc: "טורונטו · קנדה", v: "12", l: "אירועים החודש" },
  ];

  const activity = [
    { t: "קהילת בית יעקב (מקסיקו) שיגרה התראת תרומה ל-46 חברים", time: "לפני 4 דק'", c: "amber", icon: <I.Coins /> },
    { t: "אהבת ישראל (לונדון) פתחה אירוע: 'ערב התרמה — מקווה חדש'", time: "לפני 12 דק'", c: "", icon: <I.Calendar /> },
    { t: "הצטרפו 14 חברים חדשים לקהילה בסאו פאולו", time: "לפני 28 דק'", c: "cyan", icon: <I.Users /> },
    { t: "תבנית 'חג שבועות' הופעלה ע\"י 7 קהילות במקביל", time: "לפני שעה", c: "", icon: <I.Bolt /> },
    { t: "ההסתדרות שיגרה עדכון מערכת לכל הרשת · v2.4.1", time: "לפני 3 שעות", c: "", icon: <I.Settings /> },
  ];

  return (
    <section className="screen" data-screen-label="04 מסך-העל">
      <div className="section-eyebrow">מסך 4 · מסך-העל של ההסתדרות הציונית העולמית</div>

      <div className="super-hero">
        <I.HalfStar className="magen-corner" style={{ color: "#A7E3F6", top: -40, left: -40, width: 280, height: 280 }} />
        <div className="row1">
          <div>
            <div className="eyebrow">
              <span className="dot"></span>
              מבט-על · רשת הקהילות העולמית
            </div>
            <h1>284 קהילות. עולם אחד.</h1>
            <p className="sub">תמונת מצב חיה של כל הקהילות היהודיות המנוהלות תחת תשתית ההסתדרות — מהבית לבית, מהיבשת ליבשת.</p>
          </div>
          <div className="time-block">
            <div className="now">06:42 GMT</div>
            <div className="where">ירושלים · 09:42 שעון מקומי</div>
          </div>
        </div>

        <div className="super-kpi-row">
          <div className="super-kpi">
            <div className="label">קהילות פעילות</div>
            <div className="value">284</div>
            <div className="delta"><I.ArrowUp /> +6 הצטרפו החודש</div>
          </div>
          <div className="super-kpi">
            <div className="label">אינטראקציות החודש</div>
            <div className="value">412K</div>
            <div className="delta"><I.ArrowUp /> +24% מול אשתקד</div>
          </div>
          <div className="super-kpi amber">
            <div className="label">אירועים פעילים ברגע זה</div>
            <div className="value">1,847</div>
            <div className="delta">ב-72 ערים</div>
          </div>
          <div className="super-kpi">
            <div className="label">חברים ברשת</div>
            <div className="value">38.4K</div>
            <div className="delta"><I.ArrowUp /> +1,240 השבוע</div>
          </div>
        </div>
      </div>

      <div className="super-grid">
        <div className="map-card">
          <div className="map-head">
            <div>
              <h3>הרשת על המפה</h3>
              <div style={{ fontSize: 12.5, color: "var(--c-text-muted)", marginTop: 2 }}>22 קהילות הראשיות מוצגות · לחיצה לכניסה</div>
            </div>
            <div className="legend">
              <span className="swatch"><span className="d" style={{ background: "var(--c-blue)" }}></span> מרכזי-על (200+ חברים)</span>
              <span className="swatch"><span className="d" style={{ background: "var(--c-amber)" }}></span> קהילה פעילה</span>
            </div>
          </div>
          <div className="world-stage">
            <div className="world-grid"></div>
            {/* Continent labels */}
            <span className="continent-label" style={{ top: "16%", left: "20%" }}>NORTH AMERICA</span>
            <span className="continent-label" style={{ top: "68%", left: "30%" }}>SOUTH AMERICA</span>
            <span className="continent-label" style={{ top: "10%", left: "48%" }}>EUROPE</span>
            <span className="continent-label" style={{ top: "60%", left: "52%" }}>AFRICA</span>
            <span className="continent-label" style={{ top: "28%", left: "70%" }}>ASIA</span>
            <span className="continent-label" style={{ top: "82%", left: "84%" }}>OCEANIA</span>

            {pins.map((p, i) => {
              const pos = latLngTo(p.lat, p.lng);
              return (
                <div
                  key={i}
                  className={"pin " + (p.large ? "large" : "")}
                  style={{ left: pos.left + "%", top: pos.top + "%" }}
                  title={`${p.city} · ${p.members} חברים`}
                >
                  <span className="glow"></span>
                  <span className="dot"></span>
                  {p.large && <span className="label">{p.city}</span>}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="leader-card">
            <h3>קהילות מובילות החודש</h3>
            {leaders.map((l) => (
              <div className={"leader-row " + (l.rank <= 3 ? "top" : "")} key={l.rank}>
                <div className="rank">{l.rank}</div>
                <div className="info">
                  <div className="n">{l.n}</div>
                  <div className="loc">{l.loc}</div>
                </div>
                <div className="metric">
                  <div className="v">{l.v}</div>
                  <div className="l">{l.l}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="activity-feed">
            <h3>פעילות חיה ברשת</h3>
            {activity.map((a, i) => (
              <div className="act-row" key={i}>
                <div className={"ico " + a.c}>{a.icon}</div>
                <div className="text">{a.t}</div>
                <div className="time">{a.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

window.SuperAdminScreen = SuperAdminScreen;
