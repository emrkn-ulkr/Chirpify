import React, { createContext, useState } from "react";
import tr from "../locales/tr.json";
import en from "../locales/en.json";


export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("tr"); // Başlangıç dili
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
