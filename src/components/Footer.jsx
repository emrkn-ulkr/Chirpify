import React from 'react'
import { Typography } from '@mui/material';
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";


function Footer() {
    const { translations } = useContext(LanguageContext);
    const { darkMode } = useContext(DarkModeContext);


    const projectsNameWriteC = darkMode ? "#adbccf" : "#1f2937";
    const emailC = darkMode ? "#cfcbff" : "#af0c48";
    const personalBlogC = darkMode ? "#e1e1ff" : "#0a0a14";
    const githubC = darkMode ? "#17d18b" : "#00ab6b";
    const linkedinC = darkMode ? "#0ba6f6" : "#0077b5";
    return (
        <footer style={{ backgroundColor: darkMode ? "#141414" : "white" }}> { /* Ana Bölüm */}
            <header>
                <Typography style={{ whiteSpace: 'pre-line', color: projectsNameWriteC, marginLeft: "350px" }} variant='h3' >{translations.workFooterTgthr} </Typography>

            </header>
            <br />
            <nav style={{ display: "flex" }}>
                <div style={{ marginLeft: "350px" }}>
                    <span>&#128073;</span>  <a href='mailto:emirkanulker08@gmail.com' target="_blank" title='E-posta' style={{ color: emailC, fontWeight: "bold", textDecoration: "underline" }}>emirkanulker08@gmail.com</a>
                </div>

                <div style={{ display: "flex", gap: "10px", marginLeft: "673px" }}>
                    <a href='#' style={{ fontWeight: "bold", color: personalBlogC }}>{translations.pBlog}</a>
                    <a href='https://github.com/emrkn-ulkr' target="_blank" title='Github' style={{ fontWeight: "bold", color: githubC }}>Github</a>
                    <a href='https://www.linkedin.com/in/emirkan-%C3%BClker-dev/' target="_blank" title='Linkedin' style={{ fontWeight: "bold", color: linkedinC }}>Linkedin</a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
