import { Typography } from '@mui/material'
import React from 'react'
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";


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

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "300px" }}>
                    <Typography variant='h5' sx={{ color: progNameColorC }}>Java Script</Typography>
                    <Typography fontSize={10} sx={{ color: progWriteC }}>{translations.javaScript}
                    </Typography>
                </div>

                <div style={{ width: "300px" }}>
                    <Typography variant='h5' sx={{ color: progNameColorC, paddingRight: "30px" }}>React.Js</Typography>
                    <Typography fontSize={10} sx={{ color: progWriteC }}>{translations.reactJs}
                    </Typography>

                </div>

                <div style={{ width: "300px" }}>
                    <Typography variant='h5' sx={{ color: progNameColorC, paddingRight: "220px" }}>Node.Js</Typography>
                    <Typography fontSize={10} sx={{ color: progWriteC }}>{translations.nodeJs}
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
