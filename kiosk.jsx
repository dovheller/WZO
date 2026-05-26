// Screen 1 — Public Community Board / Kiosk
const KioskScreen = () => {
  const events = [
    { d: "29", m: "מאי", t: "ימי שישי 11:00", name: "שיעור פרשת השבוע עם הרב אליעזר ויינברג", sub: "אולם הקטן · פתוח לכלל הקהילה" },
    { d: "30", m: "מאי", t: "שבת 09:30", name: "בר מצווה — דניאל הלוי", sub: "תפילת שחרית חגיגית · קידוש בעקבותיה" },
    { d: "01", m: "יוני", t: "ראשון 20:00", name: "ערב נשים — הכנות לקבלת התורה", sub: "בית רחל פיירשטיין ע\"ה · מקום מוגבל" },
    { d: "02", m: "יוני", t: "שני 19:30", name: "אזכרה לזכרו של ר' משה בן אברהם זצ\"ל", sub: "מלאת שלושים יום · אולם ההספדים" },
    { d: "03", m: "יוני", t: "שלישי 18:00", name: "שיעור מסכת ברכות — דף יומי", sub: "עם הרב יוסי שטרן · בית המדרש" },
  ];

  const businesses = [
    { name: "ד\"ר רחל אביטל", trade: "רופאת ילדים", icon: <I.Heart /> },
    { name: "אברהם שניידר", trade: "עורך דין נדל\"ן", icon: <I.Bag /> },
    { name: "מטבח חמדה — קייטרינג", trade: "כשרות מהדרין", icon: <I.Store /> },
    { name: "מוסך הלוי ובניו", trade: "שירות לרכב", icon: <I.Wrench /> },
    { name: "מירי כהן — מורה פרטית", trade: "אנגלית · מתמטיקה", icon: <I.Book /> },
    { name: "טיש & טיש", trade: "אדריכלות פנים", icon: <I.Sparkles /> },
  ];

  const tickerItems = [
    "ההרשמה לקייטנת \"כנפיים\" של תשפ\"ו נפתחה — מקומות מוגבלים",
    "תודה לכל מי שתרם השבוע למבצע מזון לפסח · גויסו 14,800$",
    "מועדון הצעירים מתחדש: כל מוצאי שבת ב-21:00",
    "ועדת התפילה מחפשת מתנדבים לכבד את החזנות בימים נוראים",
  ];

  return (
    <section className="screen" data-screen-label="01 לוח קהילתי">
      <div className="section-eyebrow">מסך 1 · תצוגת קיוסק ציבורית</div>
      <div className="kiosk">
        <div className="kiosk-hero">
          <I.HalfStar className="magen-corner" style={{ color: "#A7E3F6", top: -30, left: -30 }} />
          <div className="kiosk-hero-grid">
            <div className="kiosk-community">
              <div className="crest"><I.StarOfDavid width="34" height="34" /></div>
              <div>
                <div className="name">קהילת אהבת ישראל</div>
                <div className="place">גולדרס גרין · לונדון, אנגליה</div>
              </div>
            </div>
            <div className="kiosk-parasha">
              <div className="label">פרשת השבוע</div>
              <div className="name">בְּהַעֲלֹתְךָ</div>
              <div className="hebdate">י"ז סיון תשפ"ו · 30.5.2026</div>
            </div>
            <div className="kiosk-shabbat">
              <div className="row">
                <div className="label"><I.Candle /> כניסת שבת</div>
                <div className="time">20:51</div>
              </div>
              <div className="row">
                <div className="label"><I.Clock /> צאת השבת</div>
                <div className="time">22:18</div>
              </div>
              <div className="row">
                <div className="label"><I.Pin /> זמני לונדון N11</div>
                <div className="time" style={{ fontSize: 13, fontWeight: 600, color: "#A7E3F6" }}>גמרא 22:50</div>
              </div>
            </div>
          </div>
        </div>

        <div className="kiosk-body">
          <div className="kiosk-col">
            <h2 className="kiosk-section-title">
              <span className="underline-cyan"></span>
              אירועים קרובים בקהילה
            </h2>
            <div>
              {events.map((e, i) => (
                <div className="event-row" key={i}>
                  <div className="event-date">
                    <div className="d">{e.d}</div>
                    <div className="m">{e.m}</div>
                  </div>
                  <div className="event-meta">
                    <p className="name">{e.name}</p>
                    <p className="sub">{e.sub}</p>
                  </div>
                  <div className="event-action">
                    <div className="event-time">{e.t}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="kiosk-col">
            <h2 className="kiosk-section-title">
              <span className="underline-cyan"></span>
              קידוש השבת הבאה
            </h2>
            <div className="kiddush-card">
              <div className="icon-wrap"><I.Kiddush /></div>
              <div>
                <div className="label">בְּחָסוּת</div>
                <div className="who">משפחת רוזנברג</div>
                <div className="occasion">לרגל הולדת הנכד הראשון · מזל טוב!</div>
              </div>
            </div>

            <h2 className="kiosk-section-title" style={{ marginTop: 22 }}>
              <span className="underline-cyan"></span>
              לוח עסקי הקהילה
            </h2>
            <div className="business-grid">
              {businesses.map((b, i) => (
                <div className="business-card" key={i}>
                  <div className="biz-icon">{b.icon}</div>
                  <div>
                    <div className="biz-name">{b.name}</div>
                    <div className="biz-trade">{b.trade}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ticker">
          <span className="badge">מבזקים</span>
          <div style={{ overflow: "hidden", flex: 1 }}>
            <div className="scroll">
              {[...tickerItems, ...tickerItems].map((t, i) => <span key={i}>{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.KioskScreen = KioskScreen;
