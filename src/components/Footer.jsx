import React from 'react'
import { Typography, Link } from '@mui/material';
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";


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
                    <span>&#128073;</span>
                    <Link
                        href='mailto:emirkanulker08@gmail.com'
                        target="_blank"
                        title='E-posta'
                        underline="always" // alt çizgi
                        sx={{
                            color: emailC,           // mevcut renk değişkenini koruduk
                            fontWeight: 'bold',      // kalın yazı
                            '&:hover': { color: 'green' },
                            transition: 'color 0.3s' // hover olunca mor renk
                        }}
                    >
                        emirkanulker08@gmail.com
                    </Link>
                </div>

                <div style={{ display: "flex", gap: "10px", marginLeft: "673px" }}>
                    <Link
                        href="#"
                        underline="always"
                        sx={{
                            fontWeight: 'bold',
                            color: personalBlogC,
                            '&:hover': { color: 'aqua' },
                            transition: 'color 0.3s'
                        }}
                    >
                        {translations.pBlog}
                    </Link>                    <Link
                        href="https://github.com/emrkn-ulkr"
                        target="_blank"
                        title="Github"
                        underline="always"
                        sx={{
                            fontWeight: 'bold',
                            color: githubC,
                            '&:hover': { color: 'yellow' },
                            transition: 'color 0.3s'
                        }}
                    >
                        Github
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/emirkan-%C3%BClker-dev/"
                        target="_blank"
                        title="Linkedin"
                        underline="always"
                        sx={{
                            fontWeight: 'bold',
                            color: linkedinC,
                            '&:hover': { color: 'red' },
                            transition: 'color 0.3s'
                        }}
                    >
                        Linkedin
                    </Link>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
