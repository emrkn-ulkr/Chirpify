// src/context/DarkModeContext.jsx (GÜNCELLENMİŞ İÇERİK - Aynı İsimler Korundu) 🔄
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect } from "react"; // useState kaldırıldı
import { useLocalStorage } from "../hook/useLocalStorage"; // ⬅️ useLocalStorage eklendi!

// 1️⃣ Context oluşturuyoruz
export const DarkModeContext = createContext();

// 2️⃣ Sağlayıcı (Provider) bileşen
export const DarkModeProvider = ({ children }) => {
    // 💡 TEK SATIRDA ÇÖZÜM: useState yerine useLocalStorage kullanıldı.
    // İSİMLER KORUNDU: [darkMode, setDarkMode]
    const [darkMode, setDarkMode] = useLocalStorage("site-theme", false);
    // false: Varsayılan olarak açık (light) tema

    // Arka plan rengini değiştir (useEffect eskisi gibi korundu)
    useEffect(() => {
        // Not: Genellikle buraya CSS sınıfı eklenip çıkarılır.
        // Ancak isteğiniz üzerine mevcut kodunuzdaki style ayarı korunmuştur.
        document.body.style.backgroundColor = darkMode ? "#252128" : "#FFFFFF";
    }, [darkMode]);

    return (
        // Context değerleri eskisi gibi: { darkMode, setDarkMode }
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};