import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ProfileImages from "../images/profile.jpg"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./DarkModeContext";


// 🟡 Top sarı, 🔵 arka plan mavi

const YellowBlueSwitch = styled(Switch)(({ theme }) => ({
  width: 34,                // track genişliği (px)
  height: 20,               // track yüksekliği (px)
  padding: 0,
  display: "flex",

  /* === Temel (base) thumb (top) stili === */
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#FFFFFF", // kapalı halde beyaz ⚪
    transition: theme.transitions.create(["background-color", "transform"], {
      duration: 200,
    }),
  },

  /* === Temel (base) track (iz) stili === */
  "& .MuiSwitch-track": {
    borderRadius: 20,
    opacity: 1,
    backgroundColor: "#3B82F6", // track her zaman mavi 🔵
    boxSizing: "border-box",
  },

  /* === SwitchBase ve checked durumu (daha özgül selectorlar) === */
  "& .MuiSwitch-switchBase": {
    padding: 3,
    "&.Mui-checked": {
      transform: "translateX(14px)", // top sağa kayma (translateX değeri boyuta göre ayarlandı)
      /* Önemli: checked durumunda thumb sarı olmasını kesinleştiren özgül selector */
      "& .MuiSwitch-thumb": {
        backgroundColor: "#FFFF00", // açık halde sarı 🌕
      },
      /* Track yine açık halde de sabit mavi kalacak */
      "& + .MuiSwitch-track": {
        backgroundColor: "#4731d3",
      },
    },
  },
}));

function Header() {
  const { translations, toggleLanguage } = useContext(LanguageContext);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#252128" : "#FFFFFF";
  }, [darkMode]);

  const fontHeaderModeC = darkMode ? "#d9d9d9" : "#000000";
  const turkceyeGecC = darkMode ? "#bab2e6" : "#4731d3";
  const hireButtonC = darkMode ? "#ffffff" : "#ffffff";
  const nameColorC = darkMode ? "#9288c9" : "#4338ca";
  const headerWriteC = darkMode ? "#adbccf" : "#1f2937";
  const headerWritePrgC = darkMode ? "#e4e3e4" : "#6b7280";
  const headerFooterHireC = darkMode ? "#e1e1ff" : "#3730a3";
  const headerFooterGithubC = darkMode ? "#383838" : "#ffffff";

  return (

    <section> { /* Ana Bölüm */}

      <header className="header-header">
        <Stack direction="row" spacing={1} alignItems="center">
          <YellowBlueSwitch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)} />
          <Typography
            sx={{ color: fontHeaderModeC }}>
            {darkMode ? "LIGHT MODE" : "DARK MODE"} |
            <a href="#"
              style={{
                color: turkceyeGecC,
                cursor: "pointer"
              }} onClick={(e) => {
                e.preventDefault(); toggleLanguage();
              }}
            >{translations.toggleLanguage}</a> </Typography>
        </Stack>
      </header>
      <br />

      <nav className="header-bar-div">
        <Avatar sx={{ backgroundColor: "#ede7f6", color: "#9575cd", transform: "rotate(30deg)", width: "45px", height: "45px" }}>
          E
        </Avatar>
        <br />
        <br />
        <br />

        <div className="header-bar-right">
          <Button component="a"
            href="https://github.com/emrkn-ulkr"
            sx={{
              color: "gray",
              textTransform: "none",
              height: "50px",
              width: "120px"
            }} variant="text" >{translations.skills}</Button>

          <Button
            component="a"
            href="https://github.com/emrkn-ulkr"
            sx={{
              color: "gray",
              textTransform: "none",
              height: "50px",
              width: "120px"
            }} variant="text" >{translations.projects}</Button>

          <Button
            component="a"
            href="mailto:emirkanulker08@gmail.com"
            target="_blank"
            variant="outlined"
            sx={{
              color: "#3730a3",
              backgroundColor: hireButtonC,       // yazı rengi
              borderColor: "#3730a3", // çerçeve rengi
              textTransform: "none",
              height: "50px",
              width: "120px"  // büyük harfi kaldırmak için
            }}
          >{translations.hireMe}</Button>
        </div>
      </nav>

      <main className="header-hero-general">

        <article className="header-hero-left" >

          <div style={{ display: "flex", flexDirection: "row" }}>

            <hr style={{ width: "100px", marginTop: "15px", marginRight: "10px", color: nameColorC }} />
            <h5 style={{ color: nameColorC }}>Emirkan Ülker</h5>
            <br />
          </div>


          <Typography variant="h2" sx={{ fontSize: "2.5rem", fontWeight: "bold", color: headerWriteC, mt: 1 }}>
            {translations.welcomeTitle}
          </Typography>
          <br />
          <Typography sx={{ color: headerWritePrgC }}>
            {translations.welcomeDesc}
          </Typography>
          <br />
          <nav style={{ display: "flex", gap: "10px" }}>
            <Button
              component="a"
              href="mailto:emirkanulker08@gmail.com"
              target="_blank"
              sx={{
                textTransform: "none ",
                backgroundColor: headerFooterHireC,
                width: "115px",
                color: darkMode ? "#000000" : "#e6e5f3"
              }}
              variant="contained">
              {translations.hireMe}</Button>

            <Button
              component="a"
              href="https://github.com/emrkn-ulkr"
              target="_blank"
              variant="outlined"
              sx={{
                color: darkMode ? "#e1e1ff" : "#3730a3",       // yazı rengi // çerçeve rengi
                textTransform: "none",
                width: "115px",
                gap: "5px",
                backgroundColor: headerFooterGithubC,
                borderColor: darkMode ? "#b7b7cd" : "#3730a3"
              }}

            ><span>
                <FaGithub style={{ display: "flex", fontSize: "30px", color: darkMode ? "#e1e1ff" : "#3730a3" }} /></span>  Github
            </Button>

            <Button
              component="a"
              href="https://www.linkedin.com/in/emirkan-%C3%BClker-dev/"
              target="_blank"
              variant="outlined"
              sx={{
                width: "115px",
                color: darkMode ? "#e1e1ff" : "#3730a3",
                borderColor: darkMode ? "#b7b7cd" : "#3730a3",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                padding: "6px 14px", // buton iç boşluğu
                backgroundColor: headerFooterGithubC,

              }}
            >
              <span style={{ display: "flex", fontSize: "30px", color: darkMode ? "#e1e1ff" : "#3730a3" }}>
                <FaLinkedinIn />
              </span>
              Linkedin
            </Button>

          </nav>

        </article>

        <div className="header-hero-right">
          <Avatar
            alt="Emirkan Ülker"
            src={ProfileImages}
            sx={{
              marginTop: "25px",
              marginLeft: "200px",
              width: 475,          // genişlik
              height: 330,         // yükseklik
              borderRadius: "10%", // kareye yakın görünüm
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }} />
        </div>
      </main>

      <br />
      <br />
      <br />


    </section >
  )
}

export default Header