/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

// 1️⃣ Context oluşturuyoruz
export const DarkModeContext = createContext();

// 2️⃣ Sağlayıcı (Provider) bileşen
export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    // Arka plan rengini değiştir
    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "#252128" : "#FFFFFF";
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};