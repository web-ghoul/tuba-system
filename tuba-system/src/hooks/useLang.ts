import { useTranslation } from "react-i18next";

const useLang = () => {
  const { i18n } = useTranslation();
  const langStorage = `${process.env.REACT_APP_LANG_STORAGE}`
  
  const applyHtmlAttributes = (lang: string) => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.remove(lang==='ar'?'en':'ar')
    document.body.classList.add(lang)
  };

  const handleGetLang=()=>{
    return i18n.language
  }

  const handleChangeLang = () => {
    let lang = localStorage.getItem(langStorage);
    if (lang === "en") {
      lang = "ar";
    } else {
      lang = "en";
    }
    localStorage.setItem(langStorage, lang);
    i18n.changeLanguage(lang);
    applyHtmlAttributes(lang);
  };

  const handleSetLang = () => {
    let lang = localStorage.getItem(langStorage);
    if (!lang) {
      lang = "ar";
      localStorage.setItem(langStorage, lang);
    }
    i18n.changeLanguage(lang);
    applyHtmlAttributes(lang);
  };

  return { handleChangeLang, handleSetLang ,handleGetLang};
};

export default useLang;
