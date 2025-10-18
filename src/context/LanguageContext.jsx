/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import tr from "../locales/tr.json";
import en from "../locales/en.json";
import { useLocalStorage } from "../hook/useLocalStorage";


export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {


    const [lang, setLang] = useLocalStorage("site-language", "en");
    const translations = lang === "tr" ? tr : en;

    const toggleLanguage = () => {
        setLang(prev => (prev === "tr" ? "en" : "tr"));
    };

    return (

        <LanguageContext.Provider value={{ lang, translations, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};