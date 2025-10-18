/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";


export const DarkModeContext = createContext();


export const DarkModeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useLocalStorage("site-theme", false);

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "#252128" : "#FFFFFF";
    }, [darkMode]);

    return (

        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};