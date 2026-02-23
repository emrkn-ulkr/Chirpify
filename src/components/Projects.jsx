import React from 'react';
import { Typography, Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import workintech from "../images/cv.png";
import Button from '@mui/material/Button';
import yaziRengiBulmaOyunu from "../images/yaziRengi.png";
import pizzaUyg from "../images/pizzaUyg.png";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";


function Projects() {


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
            <section className="projects-grid"> {/* İç bölümler */}

                <article className="project-card">  {/* 1. Kart  */}
                    <Avatar
                        alt="Emirkan Ülker"
                        src={workintech}
                        sx={{
                            width: "100%",          // genişlik
                            height: { xs: 200, sm: 180 },         // yükseklik // kareye yakın görünüm
                            borderRadius: 0
                        }} />
                    <Typography variant='h5' sx={{ color: navInfoC }}>CV Sayfam</Typography>
                    <br />
                    <Typography fontSize={{ xs: 12, md: 10 }} sx={{ color: projectsWriteC }}>{translations.project_1}
                    </Typography>

                    <nav className="project-tags">
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

                    <footer className="project-links">
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
                            href="https://chirpify-two.vercel.app"
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

                <article className="project-card"> {/*  2. Kart */}
                    <Avatar
                        alt="Emirkan Ülker"
                        src={yaziRengiBulmaOyunu}
                        sx={{
                            width: "100%",
                            height: { xs: 200, sm: 180 },
                            borderRadius: 0
                        }} />
                    <Typography variant='h5' sx={{ color: navInfoC }}>Yazı Rengini Bulma</Typography>
                    <br />
                    <Typography fontSize={{ xs: 12, md: 10 }} sx={{ color: projectsWriteC }}>{translations.project_2}
                    </Typography>

                    <nav className="project-tags">
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

                    <footer className="project-links">
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

                <article className="project-card"> {/* 3. Kart */}
                    <Avatar
                        alt="Emirkan Ülker"
                        src={pizzaUyg}
                        sx={{
                            width: "100%",
                            height: { xs: 200, sm: 180 },
                            borderRadius: 0
                        }} />
                    <Typography variant='h5' sx={{ color: navInfoC }}>Web Pizza</Typography>
                    <br />
                    <Typography fontSize={{ xs: 12, md: 10 }} sx={{ color: projectsWriteC }}>{translations.project_3}
                    </Typography>
                    <nav className="project-tags">
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

                    <footer className="project-links">
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
                            href="https://fsweb-s8-challenge-pizza-git-main-emirkans-projects.vercel.app"
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
