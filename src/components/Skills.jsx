import { Typography } from '@mui/material'
import React from 'react'
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

function Skills() {
    const { translations } = useContext(LanguageContext);
    return (
        <section>  {/* Ana Bölüm */}

            <Typography variant='h3'>
                {translations.skills}
            </Typography>
            <br />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "300px" }}>
                    <Typography variant='h5' sx={{ color: "#4338ca" }}>Java Script</Typography>
                    <Typography fontSize={10} sx={{ color: "#6b7280" }}>{translations.javaScript}
                    </Typography>
                </div>

                <div style={{ width: "300px" }}>
                    <Typography variant='h5' sx={{ color: "#4338ca", paddingRight: "30px" }}>React.Js</Typography>
                    <Typography fontSize={10} sx={{ color: "#6b7280" }}>{translations.reactJs}
                    </Typography>

                </div>

                <div style={{ width: "300px" }}>
                    <Typography variant='h5' sx={{ color: "#4338ca", paddingRight: "220px" }}>Node.Js</Typography>
                    <Typography fontSize={10} sx={{ color: "#6b7280" }}>{translations.nodeJs}
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
