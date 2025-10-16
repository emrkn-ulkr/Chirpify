import React from 'react';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import workintech from "../images/wrkntch.png";
import Button from '@mui/material/Button';
import yaziRengiBulmaOyunu from "../images/yaziRengi.png";
import pizzaUyg from "../images/pizzaUyg.png";
function Projects() {
    return (
        <section> {/* Ana bölüm  */}
            <header>
                <Typography variant='h3'>
                    Projects
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
                    <Typography fontSize={10} sx={{ color: "#6b7280" }}>Workintech , benim yazılıma olan ilgimde asıl yol gösterici diyebilirim,
                        çünkü yazılım bilgim olmasına karşın ne yapacağımı bilemezken bana yol göstererek ayrıca bilmediğim konulardada bilgi sahibi olmamı sağlayarak
                        gerek hocaları gerek sistemli alt yapıları dolayısıyla başarılı bir süreç yaşadığımı bildirebilirim.
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
                        <a href="https://www.workintech.com.tr/" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> View Site </a>
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
                    <Typography fontSize={10} sx={{ color: "#6b7280" }}>Workintech bünyesindeyken tanıştığım 'Alihan Güzel' öğretmenimizin
                        yönlendirmesi ve talimatlarıyla
                        geliştirdiğim yazı rengi bulma oyununu takdim ederim. Bu proje geliştirdiğim ilk front-end projelerimden bir tanesi.
                        Bu projede kullandığım tüm kodları Github hesabımda açık bir şekilde paylaştım.
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
                        <a href="emrkn-ulkr.github.io" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> View Site</a>

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
                    <Typography fontSize={10} sx={{ color: "#6b7280" }}>Web Pizza , bu projem yine Workintech bünyesindeyken hazırlamış olduğum bir
                        front-end projesidir. Projede useState kavramları ve Props alma kısımlarında sıkça durarak bu konulardaki tecrübe pratiğe dökmüş bulunmaktayım.
                        İlginize sunarım , yine tüm kodlar açık bir şekilde Github hesabımda paylaştım.
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
                        <a href="https://github.com/emrkn-ulkr/fsweb-s8-challenge-pizza" style={{ color: "#3730a3", textDecoration: "underline", marginTop: "15px" }}> View Site </a>

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
