import { Typography } from '@mui/material'
import React from 'react'
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";


function Skills() {
    const { translations } = useContext(LanguageContext);
    const { darkMode } = useContext(DarkModeContext);


    const skillsWriteC = darkMode ? "#adbccf" : "#1f2937";
    const progNameColorC = darkMode ? "#9288c9" : "#4338ca";
    const progWriteC = darkMode ? "#e4e3e4" : "#6b7280";



    return (
        <section>  {/* Ana Bölüm */}

            <Typography variant='h3' sx={{ color: skillsWriteC }}>
                {translations.skills}
            </Typography>
            <br />

            <div className="skills-list">
                <div className="skills-item">
                    <Typography variant='h5' sx={{ color: progNameColorC }}>Java Script</Typography>
                    <Typography fontSize={{ xs: 12, md: 10 }} sx={{ color: progWriteC }}>{translations.javaScript}
                    </Typography>
                </div>

                <div className="skills-item">
                    <Typography variant='h5' sx={{ color: progNameColorC }}>React.Js</Typography>
                    <Typography fontSize={{ xs: 12, md: 10 }} sx={{ color: progWriteC }}>{translations.reactJs}
                    </Typography>

                </div>

                <div className="skills-item">
                    <Typography variant='h5' sx={{ color: progNameColorC }}>Java</Typography>
                    <Typography fontSize={{ xs: 12, md: 10 }} sx={{ color: progWriteC }}>{translations.Java}
                    </Typography>
                </div>

            </div>

            <br />
            <br />
            <hr style={{ border: "1px solid gray" }} />
            <br />
            <br />
        </section>
    )
}

export default Skills
