import React from 'react';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import workintech from "../images/wrkntch.png";
import Button from '@mui/material/Button';

function Projects() {
    return (
        <section> {/* Ana bölüm  */}
            <header>
                <Typography variant='h3'>
                    Projects
                </Typography>
            </header>


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
                    <Typography variant='h5' sx={{ color: "#4338ca" }}>About Me</Typography>
                    <Typography fontSize={10} sx={{ color: "#6b7280" }}>Excepteur sint occaecat cupidatat non proident, <br />
                        sunt in culpa qui officia deserunt mollit anim id est <br /> laborum.
                    </Typography>

                    <nav style={{ display: "flex", gap: "5px" }}>
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
                        <a href="https://seinfeldquotes.com" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> Github </a>
                        <a href="https://seinfeldquotes.com" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> Github </a>
                    </footer>

                </article>

                <article style={{ display: "flex", flexDirection: "column", width: "280px" }}> {/*  2. Kart */}
                    <Avatar
                        alt="Emirkan Ülker"
                        src={workintech}
                        sx={{
                            width: 280,
                            height: 180,
                            borderRadius: 0
                        }} />
                    <Typography variant='h5' sx={{ color: "#4338ca" }}>About Me</Typography>
                    <Typography fontSize={10} sx={{ color: "#6b7280" }}>Excepteur sint occaecat cupidatat non proident, <br />
                        sunt in culpa qui officia deserunt mollit anim id est <br /> laborum.
                    </Typography>

                    <nav style={{ display: "flex", gap: "5px" }}>
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
                        <a href="https://seinfeldquotes.com" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> Github </a>
                        <a href="https://seinfeldquotes.com" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> Github </a>

                    </footer>
                </article>

                <article style={{ display: "flex", flexDirection: "column", width: "280px" }}> {/* 3. Kart */}
                    <Avatar
                        alt="Emirkan Ülker"
                        src={workintech}
                        sx={{
                            width: 280,
                            height: 180,
                            borderRadius: 0
                        }} />
                    <Typography variant='h5' sx={{ color: "#4338ca" }}>About Me</Typography>
                    <Typography fontSize={10} sx={{ color: "#6b7280" }}>Excepteur sint occaecat cupidatat non proident, <br />
                        sunt in culpa qui officia deserunt mollit anim id est <br /> laborum.
                    </Typography>
                    <nav style={{ display: "flex", gap: "5px" }}>
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
                        <a href="https://seinfeldquotes.com" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> Github </a>
                        <a href="https://seinfeldquotes.com" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> Github </a>

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
