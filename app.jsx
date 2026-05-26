// Top-level app shell — bilingual
const Shell = () => {
  const tx = useTx();
  const { lang, setLang } = useLang();
  const [tab, setTab] = React.useState("kiosk");

  // Reflect language on <html> so dir-aware CSS works
  React.useEffect(() => {
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const tabs = [
    { id: "kiosk", icon: <I.Board />, he: "לוח קהילתי", en: "Community Board" },
    { id: "member", icon: <I.User />, he: "מסך החבר", en: "Member View" },
    { id: "admin", icon: <I.Settings />, he: "ניהול קהילה", en: "Admin" },
    { id: "super", icon: <I.Globe />, he: "מסך-העל · WZO", en: "Super-Admin · WZO" },
  ];

  const tenant = {
    kiosk: { he: { n: "קהילת אהבת ישראל", w: "לונדון" }, en: { n: "Ahavat Yisrael", w: "London" } },
    member: { he: { n: "קהילת אהבת ישראל", w: "לונדון" }, en: { n: "Ahavat Yisrael", w: "London" } },
    admin: { he: { n: "קהילת אהבת ישראל", w: "לונדון" }, en: { n: "Ahavat Yisrael", w: "London" } },
    super: { he: { n: "כל הקהילות", w: "רשת WZO גלובלית" }, en: { n: "All communities", w: "Global WZO network" } },
  }[tab];

  const t = tx(tenant.he, tenant.en);

  return (
    <div className="app-shell">
      <header className="app-topbar">
        <div className="topbar-inner">
          <div className="brand-mark">
            <div className="star">
              <I.StarOfDavid width="22" height="22" />
            </div>
            <div className="text-block">
              <div className="he">ההסתדרות הציונית העולמית</div>
              <div className="en">World Zionist Organization</div>
            </div>
          </div>
          <div className="product-name">
            {tx("קֶשֶׁר · ", "Kesher · ")}<span>{tx("CRM קהילתי", "Community CRM")}</span>
          </div>

          <nav className="tabs" role="tablist">
            {tabs.map((tb) => (
              <button
                key={tb.id}
                role="tab"
                aria-selected={tab === tb.id}
                className={"tab " + (tab === tb.id ? "active" : "")}
                onClick={() => setTab(tb.id)}
              >
                <span className="tab-icon">{tb.icon}</span>
                <span>{tx(tb.he, tb.en)}</span>
              </button>
            ))}
          </nav>

          <div className="topbar-right">
            <div className="lang-toggle" role="group" aria-label="Language">
              <button
                className={lang === "he" ? "active" : ""}
                onClick={() => setLang("he")}
                aria-pressed={lang === "he"}
              >עברית</button>
              <button
                className={lang === "en" ? "active" : ""}
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
              >English</button>
            </div>
            <div className="tenant-switcher">
              <span className="dot"></span>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                <span style={{ fontSize: 12.5 }}>{t.n}</span>
                <span style={{ fontSize: 11, color: "var(--c-text-muted)", fontWeight: 500 }}>{t.w}</span>
              </div>
              <I.Arrow style={{ transform: "rotate(-90deg)" }} />
            </div>
            <button className="icon-btn" aria-label={tx("התראות", "Notifications")}>
              <I.Bell />
              <span className="pip"></span>
            </button>
          </div>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        {tab === "kiosk" && <KioskScreen />}
        {tab === "member" && <MemberScreen />}
        {tab === "admin" && <AdminScreen />}
        {tab === "super" && <SuperAdminScreen />}
      </main>

      <footer className="app-footer">
        <div className="left">
          <span className="pill">{tx("אב-טיפוס · DEMO", "PROTOTYPE · DEMO")}</span>
          <span>
            {tx(
              "קֶשֶׁר — מערכת CRM קהילתית של ההסתדרות הציונית העולמית · Multi-Tenant על תשתית אחת",
              "Kesher — Community CRM by the World Zionist Organization · Multi-tenant on a single platform"
            )}
          </span>
        </div>
        <div>
          {tx(
            "המערכת תושק כדו-לשונית · עברית 🇮🇱 / English 🇬🇧 · RTL ↔ LTR מלא",
            "Launching bilingual · Hebrew 🇮🇱 / English 🇬🇧 · Full RTL ↔ LTR support"
          )}
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  const [lang, setLang] = React.useState("he");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Shell />
    </LangContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
