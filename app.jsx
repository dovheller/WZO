// Top-level app shell
const App = () => {
  const [tab, setTab] = React.useState("kiosk");

  const tabs = [
    { id: "kiosk", icon: <I.Board />, label: "לוח קהילתי" },
    { id: "member", icon: <I.User />, label: "מסך החבר" },
    { id: "admin", icon: <I.Settings />, label: "ניהול קהילה" },
    { id: "super", icon: <I.Globe />, label: "מסך-העל · WZO" },
  ];

  const tenant = {
    kiosk: { name: "קהילת אהבת ישראל", where: "לונדון" },
    member: { name: "קהילת אהבת ישראל", where: "לונדון" },
    admin: { name: "קהילת אהבת ישראל", where: "לונדון" },
    super: { name: "כל הקהילות", where: "רשת WZO גלובלית" },
  }[tab];

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
          <div className="product-name">קֶשֶׁר · <span>CRM קהילתי</span></div>

          <nav className="tabs" role="tablist">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                className={"tab " + (tab === t.id ? "active" : "")}
                onClick={() => setTab(t.id)}
              >
                <span className="tab-icon">{t.icon}</span>
                <span>{t.label}</span>
              </button>
            ))}
          </nav>

          <div className="topbar-right">
            <div className="tenant-switcher">
              <span className="dot"></span>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                <span style={{ fontSize: 12.5 }}>{tenant.name}</span>
                <span style={{ fontSize: 11, color: "var(--c-text-muted)", fontWeight: 500 }}>{tenant.where}</span>
              </div>
              <I.Arrow style={{ transform: "rotate(-90deg)" }} />
            </div>
            <button className="icon-btn" aria-label="התראות">
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
          <span className="pill">אב-טיפוס · DEMO</span>
          <span>קֶשֶׁר — מערכת CRM קהילתית של ההסתדרות הציונית העולמית · Multi-Tenant על תשתית אחת</span>
        </div>
        <div>
          המערכת תושק כדו-לשונית · עברית 🇮🇱 / English 🇬🇧 · RTL ↔ LTR מלא
        </div>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
