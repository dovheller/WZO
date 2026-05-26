// Screen 1 — Public Community Board / Kiosk (bilingual)
const KioskScreen = () => {
  const tx = useTx();

  const events = [
    { d: "29", mHe: "מאי", mEn: "MAY", t: tx("ימי שישי 11:00", "Friday · 11:00"),
      he: { name: "שיעור פרשת השבוע עם הרב אליעזר ויינברג", sub: "אולם הקטן · פתוח לכלל הקהילה" },
      en: { name: "Weekly Parasha class with Rabbi E. Weinberg", sub: "Small Hall · Open to all" } },
    { d: "30", mHe: "מאי", mEn: "MAY", t: tx("שבת 09:30", "Saturday · 09:30"),
      he: { name: "בר מצווה — דניאל הלוי", sub: "תפילת שחרית חגיגית · קידוש בעקבותיה" },
      en: { name: "Bar Mitzvah — Daniel Halevi", sub: "Festive Shacharit · Kiddush to follow" } },
    { d: "01", mHe: "יוני", mEn: "JUN", t: tx("ראשון 20:00", "Sunday · 20:00"),
      he: { name: "ערב נשים — הכנות לקבלת התורה", sub: "בית רחל פיירשטיין ע\"ה · מקום מוגבל" },
      en: { name: "Women's evening — preparing for Shavuot", sub: "Beit Rachel Feuerstein z\"l · Limited seats" } },
    { d: "02", mHe: "יוני", mEn: "JUN", t: tx("שני 19:30", "Monday · 19:30"),
      he: { name: "אזכרה לזכרו של ר' משה בן אברהם זצ\"ל", sub: "מלאת שלושים יום · אולם ההספדים" },
      en: { name: "Memorial — R. Moshe ben Avraham z\"l", sub: "Shloshim service · Memorial Hall" } },
    { d: "03", mHe: "יוני", mEn: "JUN", t: tx("שלישי 18:00", "Tuesday · 18:00"),
      he: { name: "שיעור מסכת ברכות — דף יומי", sub: "עם הרב יוסי שטרן · בית המדרש" },
      en: { name: "Daf Yomi — Tractate Berakhot", sub: "With Rabbi Yossi Stern · Beit Midrash" } },
  ];

  const businesses = [
    { he: { n: "ד\"ר רחל אביטל", t: "רופאת ילדים" }, en: { n: "Dr. Rachel Avital", t: "Pediatrician" }, icon: <I.Heart /> },
    { he: { n: "אברהם שניידר", t: "עורך דין נדל\"ן" }, en: { n: "Abraham Schneider", t: "Real-estate attorney" }, icon: <I.Bag /> },
    { he: { n: "מטבח חמדה — קייטרינג", t: "כשרות מהדרין" }, en: { n: "Chemda Kitchen — Catering", t: "Glatt kosher" }, icon: <I.Store /> },
    { he: { n: "מוסך הלוי ובניו", t: "שירות לרכב" }, en: { n: "Halevi & Sons Garage", t: "Auto service" }, icon: <I.Wrench /> },
    { he: { n: "מירי כהן — מורה פרטית", t: "אנגלית · מתמטיקה" }, en: { n: "Miri Cohen — Private tutor", t: "English · Math" }, icon: <I.Book /> },
    { he: { n: "טיש & טיש", t: "אדריכלות פנים" }, en: { n: "Tisch & Tisch", t: "Interior architecture" }, icon: <I.Sparkles /> },
  ];

  const tickerItems = tx(
    [
      "ההרשמה לקייטנת \"כנפיים\" של תשפ\"ו נפתחה — מקומות מוגבלים",
      "תודה לכל מי שתרם השבוע למבצע מזון לפסח · גויסו 14,800$",
      "מועדון הצעירים מתחדש: כל מוצאי שבת ב-21:00",
      "ועדת התפילה מחפשת מתנדבים לכבד את החזנות בימים נוראים",
    ],
    [
      "Registration for the 5786 \"Kanafayim\" summer camp is now open — limited spots",
      "Thank you to everyone who contributed this week to the Pesach food drive · $14,800 raised",
      "Youth Club relaunches every Saturday night at 21:00",
      "The Tefilla committee seeks volunteers to lead davening for the High Holidays",
    ]
  );

  return (
    <section className="screen" data-screen-label={tx("01 לוח קהילתי", "01 Community Board")}>
      <div className="section-eyebrow">{tx("מסך 1 · תצוגת קיוסק ציבורית", "Screen 1 · Public kiosk view")}</div>
      <div className="kiosk">
        <div className="kiosk-hero">
          <I.HalfStar className="magen-corner" style={{ color: "#A7E3F6", top: -30, insetInlineEnd: -30 }} />
          <div className="kiosk-hero-grid">
            <div className="kiosk-community">
              <div className="crest"><I.StarOfDavid width="34" height="34" /></div>
              <div>
                <div className="name">{tx("קהילת אהבת ישראל", "Ahavat Yisrael Community")}</div>
                <div className="place">{tx("גולדרס גרין · לונדון, אנגליה", "Golders Green · London, UK")}</div>
              </div>
            </div>
            <div className="kiosk-parasha">
              <div className="label">{tx("פרשת השבוע", "This week's parasha")}</div>
              <div className="name">{tx("בְּהַעֲלֹתְךָ", "Beha'alotcha")}</div>
              <div className="hebdate">{tx("י\"ז סיון תשפ\"ו · 30.5.2026", "17 Sivan 5786 · 30 May 2026")}</div>
            </div>
            <div className="kiosk-shabbat">
              <div className="row">
                <div className="label"><I.Candle /> {tx("כניסת שבת", "Candle lighting")}</div>
                <div className="time">20:51</div>
              </div>
              <div className="row">
                <div className="label"><I.Clock /> {tx("צאת השבת", "Havdalah")}</div>
                <div className="time">22:18</div>
              </div>
              <div className="row">
                <div className="label"><I.Pin /> {tx("זמני לונדון N11", "London N11 zmanim")}</div>
                <div className="time" style={{ fontSize: 13, fontWeight: 600, color: "#A7E3F6" }}>
                  {tx("גמרא 22:50", "R\"T 22:50")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="kiosk-body">
          <div className="kiosk-col">
            <h2 className="kiosk-section-title">
              <span className="underline-cyan"></span>
              {tx("אירועים קרובים בקהילה", "Upcoming community events")}
            </h2>
            <div>
              {events.map((e, i) => {
                const txt = tx(e.he, e.en);
                return (
                  <div className="event-row" key={i}>
                    <div className="event-date">
                      <div className="d">{e.d}</div>
                      <div className="m">{tx(e.mHe, e.mEn)}</div>
                    </div>
                    <div className="event-meta">
                      <p className="name">{txt.name}</p>
                      <p className="sub">{txt.sub}</p>
                    </div>
                    <div className="event-action">
                      <div className="event-time">{e.t}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="kiosk-col">
            <h2 className="kiosk-section-title">
              <span className="underline-cyan"></span>
              {tx("קידוש השבת הבאה", "This Shabbat's Kiddush")}
            </h2>
            <div className="kiddush-card">
              <div className="icon-wrap"><I.Kiddush /></div>
              <div>
                <div className="label">{tx("בְּחָסוּת", "SPONSORED BY")}</div>
                <div className="who">{tx("משפחת רוזנברג", "The Rosenberg Family")}</div>
                <div className="occasion">{tx("לרגל הולדת הנכד הראשון · מזל טוב!", "On the birth of their first grandchild · Mazal Tov!")}</div>
              </div>
            </div>

            <h2 className="kiosk-section-title" style={{ marginTop: 22 }}>
              <span className="underline-cyan"></span>
              {tx("לוח עסקי הקהילה", "Community business directory")}
            </h2>
            <div className="business-grid">
              {businesses.map((b, i) => {
                const t = tx(b.he, b.en);
                return (
                  <div className="business-card" key={i}>
                    <div className="biz-icon">{b.icon}</div>
                    <div>
                      <div className="biz-name">{t.n}</div>
                      <div className="biz-trade">{t.t}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="ticker">
          <span className="badge">{tx("מבזקים", "BREAKING")}</span>
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
