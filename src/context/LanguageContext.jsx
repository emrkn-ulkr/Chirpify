// src/context/LanguageContext.jsx (GÜNCELLENMİŞ İÇERİK - Aynı İsimler Korundu) 🔄
/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from "react"; // useContext kullanmadığımız için kaldırıldı
import tr from "../locales/tr.json";
import en from "../locales/en.json";
import { useLocalStorage } from "../hook/useLocalStorage"; // ⬅️ useLocalStorage eklendi!


export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // 💡 TEK SATIRDA ÇÖZÜM: useState yerine useLocalStorage kullanıldı.
    // İSİMLER KORUNDU: [lang, setLang]
    const [lang, setLang] = useLocalStorage("site-language", "en"); // 'en' varsayılan dil

    // lang değişkeni hemen üstte tanımlandığı için sorunsuz çalışır.
    const translations = lang === "tr" ? tr : en;

    // toggleLanguage fonksiyonu artık setLang'i çağırıyor, bu da LocalStorage'ı güncelliyor.
    const toggleLanguage = () => {
        setLang(prev => (prev === "tr" ? "en" : "tr"));
    };

    return (
        // Context değerleri eskisi gibi: { lang, translations, toggleLanguage }
        <LanguageContext.Provider value={{ lang, translations, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};