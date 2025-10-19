import React, { useEffect } from 'react';
import { Typography, Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import workintech from "../images/wrkntch.png";
import Button from '@mui/material/Button';
import yaziRengiBulmaOyunu from "../images/yaziRengi.png";
import pizzaUyg from "../images/pizzaUyg.png";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { fakeUser } from "../assets/data.js";
import axios from 'axios';


function Projects() {


    useEffect(() => {
        const sendData = async () => {
            try {
                const response = await axios.post("https://reqres.in/api/workintech", fakeUser);
                console.log("API'ye veri gönderildi:", response.data);
            } catch (err) {
                console.log("API Hata Mesajı:", err.message);
            }
        };
        sendData();
    }, [])


    const { translations } = useContext(LanguageContext);
    const { darkMode } = useContext(DarkModeContext);

    const projectsNameWriteC = darkMode ? "#adbccf" : "#1f2937";
    const navInfoC = darkMode ? "#cfcbff" : "#4338ca";
    const projectsWriteC = darkMode ? "#e4e3e4" : "#6b7280";
    const footerWriteC = darkMode ? " #e1e1ff" : "#3730a3";



    return (
        <section> {/* Ana bölüm  */}
            <header>
                <Typography variant='h3' sx={{ color: projectsNameWriteC }}>
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
                    <Typography variant='h5' sx={{ color: navInfoC }}>Workintech</Typography>
                    <br />
                    <Typography fontSize={10} sx={{ color: projectsWriteC }}>{translations.project_1}
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
                        <Link
                            href="https://github.com/emrkn-ulkr"
                            target="_blank"
                            underline="always"  // alt çizgi
                            sx={{
                                mt: 2, fontWeight: 'bold', color: footerWriteC, '&:hover': { color: '#9238c7' },
                                transition: 'color 0.3s'
                            }}
                        >
                            Github
                        </Link>
                        <Link
                            href="https://www.workintech.com.tr/"
                            target="_blank"
                            underline="always" // alt çizgi
                            sx={{
                                color: footerWriteC,
                                mt: 2,               // margin-top: 16px (Tailwind mt-4 ≈ 16px)
                                fontWeight: 'bold',
                                '&:hover': { color: '#2ed177' },
                                transition: 'color 0.3s' // hover efekti
                            }}
                        >
                            {translations.viewSite}
                        </Link>
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
                    <Typography variant='h5' sx={{ color: navInfoC }}>Yazı Rengini Bulma</Typography>
                    <br />
                    <Typography fontSize={10} sx={{ color: projectsWriteC }}>{translations.project_2}
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
                        <Link
                            href="https://github.com/emrkn-ulkr/emrkn-ulkr.github.io"
                            target="_blank"
                            underline="always"  // alt çizgi
                            sx={{
                                mt: 2, fontWeight: 'bold', color: footerWriteC, '&:hover': { color: '#9238c7' },
                                transition: 'color 0.3s'
                            }}
                        >
                            Github
                        </Link>
                        <Link
                            href="https://emrkn-ulkr.github.io/"
                            target="_blank"
                            underline="always" // alt çizgi
                            sx={{
                                color: footerWriteC,
                                mt: 2,               // margin-top: 16px (Tailwind mt-4 ≈ 16px)
                                fontWeight: 'bold',
                                '&:hover': { color: '#2ed177' },
                                transition: 'color 0.3s' // hover efekti
                            }}
                        >
                            {translations.viewSite}
                        </Link>

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
                    <Typography variant='h5' sx={{ color: navInfoC }}>Web Pizza</Typography>
                    <br />
                    <Typography fontSize={10} sx={{ color: projectsWriteC }}>{translations.project_3}
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
                        <Link
                            href="https://github.com/emrkn-ulkr"
                            target="_blank"
                            underline="always"  // alt çizgi
                            sx={{
                                mt: 2, fontWeight: 'bold', color: footerWriteC, '&:hover': { color: '#9238c7' },
                                transition: 'color 0.3s'
                            }}
                        >
                            Github
                        </Link>
                        <Link
                            href="https://github.com/emrkn-ulkr/fsweb-s8-challenge-pizza"
                            target="_blank"
                            underline="always" // alt çizgi
                            sx={{
                                color: footerWriteC,
                                mt: 2,               // margin-top: 16px (Tailwind mt-4 ≈ 16px)
                                fontWeight: 'bold',
                                '&:hover': { color: '#2ed177' },
                                transition: 'color 0.3s' // hover efekti
                            }}
                        >
                            {translations.viewSite}
                        </Link>

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
