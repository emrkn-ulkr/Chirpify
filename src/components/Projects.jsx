import React from 'react';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import workintech from "../images/wrkntch.png";
import Button from '@mui/material/Button';
import yaziRengiBulmaOyunu from "../images/yaziRengi.png";
import pizzaUyg from "../images/pizzaUyg.png";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

function Projects() {
    const { translations } = useContext(LanguageContext);

    return (
        <section> {/* Ana bölüm  */}
            <header>
                <Typography variant='h3'>
                    {translations.projects}
                </Typography>
            </header>

            <br />
            <section style={{ display: "flex", justifyContent: "space-between", gap: "100px" }}> {/* İç bölümler */}

                <article style={{ display: "flex", flexDirection: "column", width: "280px" }}>  {/* 1. Kart  */}
                    <Avatar
                        alt="Emirkan Ülker"
                        src={workintech}
                        sx={{
                            width: 280,          // genişlik
                            height: 180,         // yükseklik // kareye yakın görünüm
                            borderRadius: 0
                        }} />
                    <Typography variant='h5' sx={{ color: "#4338ca" }}>Workintech</Typography>
                    <br />
                    <Typography fontSize={10} sx={{ color: "#6b7280" }}>{translations.project_1}
                    </Typography>

                    <nav style={{ display: "flex", gap: "5px", marginTop: "15px" }}>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "#3730a3",       // yazı rengi
                                borderColor: "#3730a3", // çerçeve rengi
                                textTransform: "none",
                                height: "25px",
                                width: "75px"  // büyük harfi kaldırmak için
                            }}
                        >react</Button>

                        <Button
                            variant="outlined"
                            sx={{
                                color: "#3730a3",       // yazı rengi
                                borderColor: "#3730a3", // çerçeve rengi
                                textTransform: "none",
                                height: "25px",
                                width: "75px"  // büyük harfi kaldırmak için
                            }}
                        >redux</Button>

                        <Button
                            variant="outlined"
                            sx={{
                                color: "#3730a3",       // yazı rengi
                                borderColor: "#3730a3", // çerçeve rengi
                                textTransform: "none",
                                height: "25px",
                                width: "75px"  // büyük harfi kaldırmak için
                            }}
                        >axios</Button>
                    </nav>

                    <footer style={{ display: "flex", justifyContent: "space-between" }}>
                        <a href="https://github.com/emrkn-ulkr" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> Github </a>
                        <a href="https://www.workintech.com.tr/" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> {translations.viewSite} </a>
                    </footer>

                </article>

                <article style={{ display: "flex", flexDirection: "column", width: "280px" }}> {/*  2. Kart */}
                    <Avatar
                        alt="Emirkan Ülker"
                        src={yaziRengiBulmaOyunu}
                        sx={{
                            width: 280,
                            height: 180,
                            borderRadius: 0
                        }} />
                    <Typography variant='h5' sx={{ color: "#4338ca" }}>Yazı Rengini Bulma</Typography>
                    <br />
                    <Typography fontSize={10} sx={{ color: "#6b7280" }}>{translations.project_2}
                    </Typography>

                    <nav style={{ display: "flex", gap: "5px", marginTop: "15px" }}>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "#3730a3",
                                borderColor: "#3730a3",
                                textTransform: "none",
                                height: "25px",
                                width: "75px"
                            }}
                        >react</Button>

                        <Button
                            variant="outlined"
                            sx={{
                                color: "#3730a3",
                                borderColor: "#3730a3",
                                textTransform: "none",
                                height: "25px",
                                width: "75px"
                            }}
                        >redux</Button>

                        <Button
                            variant="outlined"
                            sx={{
                                color: "#3730a3",
                                borderColor: "#3730a3",
                                textTransform: "none",
                                height: "25px",
                                width: "75px"
                            }}
                        >axios</Button>
                    </nav>

                    <footer style={{ display: "flex", justifyContent: "space-between" }}>
                        <a href="https://github.com/emrkn-ulkr" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> Github </a>
                        <a href="emrkn-ulkr.github.io" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> {translations.viewSite}</a>

                    </footer>
                </article>

                <article style={{ display: "flex", flexDirection: "column", width: "280px" }}> {/* 3. Kart */}
                    <Avatar
                        alt="Emirkan Ülker"
                        src={pizzaUyg}
                        sx={{
                            width: 280,
                            height: 180,
                            borderRadius: 0
                        }} />
                    <Typography variant='h5' sx={{ color: "#4338ca" }}>Web Pizza</Typography>
                    <br />
                    <Typography fontSize={10} sx={{ color: "#6b7280" }}>{translations.project_3}
                    </Typography>
                    <nav style={{ display: "flex", gap: "5px", marginTop: "15px" }}>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "#3730a3",
                                borderColor: "#3730a3",
                                textTransform: "none",
                                height: "25px",
                                width: "75px"
                            }}
                        >react</Button>

                        <Button
                            variant="outlined"
                            sx={{
                                color: "#3730a3",
                                borderColor: "#3730a3",
                                textTransform: "none",
                                height: "25px",
                                width: "75px"
                            }}
                        >redux</Button>

                        <Button
                            variant="outlined"
                            sx={{
                                color: "#3730a3",
                                borderColor: "#3730a3",
                                textTransform: "none",
                                height: "25px",
                                width: "75px"
                            }}
                        >axios</Button>
                    </nav>

                    <footer style={{ display: "flex", justifyContent: "space-between" }}>
                        <a href="https://github.com/emrkn-ulkr" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> Github </a>
                        <a href="https://github.com/emrkn-ulkr/fsweb-s8-challenge-pizza" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> {translations.viewSite} </a>

                    </footer>

                </article>

            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
        </section>

    )
}

export default Projects
