import React from 'react'
import { Typography } from '@mui/material'
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";


function Profile() {
    const { translations } = useContext(LanguageContext);
    const { darkMode } = useContext(DarkModeContext);

    const profileWriteC = darkMode ? "#adbccf" : "#1f2937";
    const navInfoC = darkMode ? "#9288c9" : "#4338ca";
    const personalWriteC = darkMode ? "#e4e3e4" : "#6b7280";
    const tagBgC = darkMode ? "#2d2b55" : "#eef2ff";
    const tagTextC = darkMode ? "#cfcbff" : "#3730a3";
    const certBorderC = darkMode ? "#3a3a5c" : "#e5e7eb";
    const certBgC = darkMode ? "#1e1e2f" : "#f9fafb";

    const certifications = [
        { title: translations.cert1Title, issuer: translations.cert1Issuer, date: translations.cert1Date, id: translations.cert1Id, skills: translations.cert1Skills },
        { title: translations.cert2Title, issuer: translations.cert2Issuer, date: translations.cert2Date, id: translations.cert2Id },
        { title: translations.cert3Title, issuer: translations.cert3Issuer, date: translations.cert3Date, id: translations.cert3Id },
        { title: translations.cert4Title, issuer: translations.cert4Issuer, date: translations.cert4Date, id: translations.cert4Id, skills: translations.cert4Skills },
        { title: translations.cert5Title, issuer: translations.cert5Issuer, date: translations.cert5Date, id: translations.cert5Id, skills: translations.cert5Skills },
        { title: translations.cert6Title, issuer: translations.cert6Issuer, date: translations.cert6Date, id: translations.cert6Id, skills: translations.cert6Skills },
    ];


    return (
        <section>
            <header>
                <Typography variant='h3' sx={{ color: profileWriteC }}>
                    Profile
                </Typography>
            </header>

            <br />

            <section>
                <div style={{ display: "flex" }}>
                    <Typography variant='h5' sx={{ color: navInfoC }}>{translations.profile}</Typography>

                </div>
                <br />
                <article style={{ display: "flex", justifyContent: "space-between" }}>

                    <div style={{ color: personalWriteC, display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>{translations.dateOfBirth}</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>{translations.cityOfResidence}</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>{translations.educationLevel}</Typography><br />
                        <Typography sx={{ fontWeight: "bold" }}>{translations.preferredRole}</Typography>
                    </div>

                    <div style={{ color: personalWriteC, display: "flex", flexDirection: "column", gap: "10px", marginRight: "50px", width: "250px" }}>
                        <Typography>{translations.dateOfBirthAnsw}</Typography>
                        <Typography>{translations.cityOfResidenceAnsw}</Typography>
                        <Typography>{translations.educationLevelAnsw}</Typography>
                        <Typography sx={{ marginTop: "10px" }}>{translations.preferredRoleAnsw}</Typography>
                    </div>

                    <div style={{ color: personalWriteC, marginRight: "20px", marginTop: "-70px", width: "605px" }}>
                        <Typography variant='h5' sx={{ color: navInfoC }}>{translations.profileAboutMe}</Typography><br />
                        {translations.profileAboutMeAnsw}
                    </div>

                </article>
                <br />
                <br />
                <hr style={{ border: "1px solid gray" }} />
                <br />
                <br />

                {/* ── Deneyim / Experience ── */}
                <div>
                    <Typography variant='h5' sx={{ color: navInfoC }}>{translations.experience}</Typography>
                    <br />
                    <div style={{ color: personalWriteC }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.05rem" }}>{translations.expTitle}</Typography>
                        <Typography sx={{ color: tagTextC }}>{translations.expCompany}</Typography>
                        <Typography sx={{ fontSize: "0.85rem", marginTop: "4px" }}>{translations.expDate}</Typography>
                    </div>
                </div>
                <br />
                <hr style={{ border: "1px solid gray" }} />
                <br />
                <br />

                {/* ── Eğitim / Education ── */}
                <div>
                    <Typography variant='h5' sx={{ color: navInfoC }}>{translations.education}</Typography>
                    <br />
                    <div style={{ color: personalWriteC }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.05rem" }}>{translations.eduSchool}</Typography>
                        <Typography>{translations.eduDegree}</Typography>
                        <Typography sx={{ fontSize: "0.85rem", marginTop: "4px" }}>{translations.eduDate}</Typography>
                        <Typography sx={{ marginTop: "8px", fontStyle: "italic" }}>{translations.eduDesc}</Typography>
                    </div>
                </div>
                <br />
                <hr style={{ border: "1px solid gray" }} />
                <br />
                <br />

                {/* ── Sertifikalar / Certifications ── */}
                <div>
                    <Typography variant='h5' sx={{ color: navInfoC }}>{translations.certifications}</Typography>
                    <br />
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        {certifications.map((cert, index) => (
                            <div key={index} style={{
                                color: personalWriteC,
                                border: `1px solid ${certBorderC}`,
                                borderRadius: "8px",
                                padding: "16px",
                                backgroundColor: certBgC
                            }}>
                                <Typography sx={{ fontWeight: "bold", fontSize: "1.05rem" }}>{cert.title}</Typography>
                                <Typography sx={{ color: tagTextC }}>{cert.issuer}  •  {cert.date}</Typography>
                                <Typography sx={{ fontSize: "0.8rem", marginTop: "4px" }}>
                                    {translations.credIdLabel}: {cert.id}
                                </Typography>
                                {cert.skills && (
                                    <div style={{ marginTop: "8px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                        {cert.skills.split(", ").map((skill, i) => (
                                            <span key={i} style={{
                                                backgroundColor: tagBgC,
                                                color: tagTextC,
                                                padding: "2px 10px",
                                                borderRadius: "12px",
                                                fontSize: "0.75rem",
                                                fontWeight: 500
                                            }}>{skill}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <hr style={{ border: "1px solid gray" }} />
                <br />
                <br />

                {/* ── Yetenekler / All Skills (Tags) ── */}
                <div>
                    <Typography variant='h5' sx={{ color: navInfoC }}>{translations.allSkills}</Typography>
                    <br />
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {translations.toolsList && translations.toolsList.split(", ").map((skill, i) => (
                            <span key={i} style={{
                                backgroundColor: tagBgC,
                                color: tagTextC,
                                padding: "4px 14px",
                                borderRadius: "14px",
                                fontSize: "0.85rem",
                                fontWeight: 600
                            }}>{skill}</span>
                        ))}
                    </div>
                </div>
                <br />
                <hr style={{ border: "1px solid gray" }} />
                <br />
                <br />

                {/* ── Sektör Bilgisi / Industry Knowledge ── */}
                <div>
                    <Typography variant='h5' sx={{ color: navInfoC }}>{translations.industryKnowledge}</Typography>
                    <br />
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {translations.industryList && translations.industryList.split(", ").map((item, i) => (
                            <span key={i} style={{
                                backgroundColor: tagBgC,
                                color: tagTextC,
                                padding: "4px 14px",
                                borderRadius: "14px",
                                fontSize: "0.85rem",
                                fontWeight: 600
                            }}>{item}</span>
                        ))}
                    </div>
                </div>
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

