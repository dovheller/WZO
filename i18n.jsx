// Lightweight i18n — context + hook
const LangContext = React.createContext({ lang: "he", setLang: () => {} });

const useLang = () => React.useContext(LangContext);

// tx(hebrew, english) → returns the right string for current lang
const useTx = () => {
  const { lang } = useLang();
  return (he, en) => (lang === "he" ? he : en);
};

window.LangContext = LangContext;
window.useLang = useLang;
window.useTx = useTx;
