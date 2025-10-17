import React from 'react'
import { Typography } from '@mui/material'
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
function Profile() {
    const { translations } = useContext(LanguageContext);

    return (
        <section>
            <header>
                <Typography variant='h3'>
                    Profile
                </Typography>
            </header>

            <br />

            <section>
                <div style={{ display: "flex" }}>
                    <Typography variant='h5' sx={{ color: "#4338ca" }}>{translations.profile}</Typography>

                </div>
                <br />
                <article style={{ display: "flex", justifyContent: "space-between" }}>

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>{translations.dateOfBirth}</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>{translations.cityOfResidence}</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>{translations.educationLevel}</Typography><br />
                        <Typography sx={{ fontWeight: "bold" }}>{translations.preferredRole}</Typography>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginRight: "50px", width: "250px" }}>
                        <Typography>{translations.dateOfBirthAnsw}</Typography>
                        <Typography>{translations.cityOfResidenceAnsw}</Typography>
                        <Typography>{translations.educationLevelAnsw}</Typography>
                        <Typography sx={{ marginTop: "10px" }}>{translations.preferredRoleAnsw}</Typography>
                    </div>

                    <div style={{ marginRight: "20px", marginTop: "-70px", width: "605px" }}>
                        <Typography variant='h5' sx={{ color: "#4338ca" }}>{translations.profileAboutMe}</Typography>
                        {translations.profileAboutMeAnsw}
                    </div>

                </article>
                <br />
                <br />
                <hr style={{ border: "1px solid gray" }} />
                <br />
                <br />

            </section>

        </section >
    )
}

export default Profile
