import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ProfileImages from "../images/me.jpeg"
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";


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

  const fontHeaderModeC = darkMode ? "#d9d9d9" : "#000000";
  const turkceyeGecC = darkMode ? "#bab2e6" : "#4731d3";
  const hireButtonC = darkMode ? "#ffffff" : "#ffffff";
  const nameColorC = darkMode ? "#9288c9" : "#4338ca";
  const headerWriteC = darkMode ? "#adbccf" : "#1f2937";
  const headerWritePrgC = darkMode ? "#e4e3e4" : "#6b7280";
  const headerFooterHireC = darkMode ? "#e1e1ff" : "#3730a3";
  const headerFooterGithubC = darkMode ? "#383838" : "#ffffff";
  const youtubeShadowC = darkMode
    ? "0 10px 22px rgba(255, 0, 0, 0.35)"
    : "0 10px 20px rgba(255, 0, 0, 0.25)";
  const topNavButtonSx = {
    color: "gray",
    textTransform: "none",
    height: "50px",
    width: { xs: "100%", sm: "120px" }
  };

  return (

    <section> { /* Ana Bölüm */}

      <header className="header-header">
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1} alignItems={{ xs: "flex-start", sm: "center" }}>
          <YellowBlueSwitch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)} />
          <Typography
            sx={{ color: fontHeaderModeC, display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px", fontSize: { xs: "0.8rem", sm: "1rem" } }}>
            {darkMode ? "LIGHT MODE" : "DARK MODE"} |
            <a href="#"
              style={{
                color: turkceyeGecC,
                cursor: "pointer"
              }} onClick={(e) => {
                e.preventDefault(); toggleLanguage();
              }}
            >{translations.toggleLanguage}</a>
          </Typography>
        </Stack>
      </header>

      <nav className="header-bar-div">
        <Avatar sx={{ backgroundColor: "#ede7f6", color: "#9575cd", transform: "rotate(30deg)", width: "45px", height: "45px" }}>
          E
        </Avatar>

        <div className="header-bar-right">
          <Button component="a"
            href="https://github.com/emrkn-ulkr"
            sx={topNavButtonSx} variant="text" >{translations.skills}</Button>

          <Button
            component="a"
            href="https://github.com/emrkn-ulkr"
            sx={topNavButtonSx} variant="text" >{translations.projects}</Button>

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
              width: { xs: "100%", sm: "120px" }  // büyük harfi kaldırmak için
            }}
          >{translations.hireMe}</Button>
        </div>
      </nav>

      <main className="header-hero-general">

        <article className="header-hero-left" >

          <div style={{ display: "flex", flexDirection: "row" }}>

            <hr style={{ width: "100px", marginTop: "15px", marginRight: "10px", color: nameColorC }} />
            <h5 style={{ color: nameColorC }}>Emirkan Ülker</h5>
          </div>


          <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", sm: "2.2rem", md: "2.5rem" }, fontWeight: "bold", color: headerWriteC, mt: 1, whiteSpace: "pre-line" }}>
            {translations.welcomeTitle}
          </Typography>
          <br />
          <Typography sx={{ color: headerWritePrgC }}>
            {translations.welcomeDesc}
          </Typography>
          <br />
          <nav className="header-social-nav">
            <Button
              component="a"
              href="mailto:emirkanulker08@gmail.com"
              target="_blank"
              sx={{
                textTransform: "none ",
                backgroundColor: headerFooterHireC,
                width: { xs: "100%", sm: "115px" },
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
                width: { xs: "100%", sm: "115px" },
                gap: "5px",
                backgroundColor: headerFooterGithubC,
                borderColor: darkMode ? "#b7b7cd" : "#3730a3"
              }}

            ><span>
                <FaGithub style={{ display: "flex", fontSize: "30px", color: darkMode ? "#e1e1ff" : "#3730a3" }} /></span>  Github
            </Button>

            <Button
              component="a"
              href="www.linkedin.com/in/emirkan-ulker-dev"
              target="_blank"
              variant="outlined"
              sx={{
                width: { xs: "100%", sm: "115px" },
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

            <Button
              component="a"
              href="https://www.youtube.com/@emir-devw"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                width: { xs: "100%", sm: "130px" },
                color: "#ffffff",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                padding: "6px 14px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #ff0033 0%, #ff4d4d 100%)",
                boxShadow: youtubeShadowC,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #d5002b 0%, #ff1f4d 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 14px 28px rgba(255, 0, 0, 0.35)"
                }
              }}
            >
              <span style={{ display: "flex", fontSize: "22px", color: "#ffffff" }}>
                <FaYoutube />
              </span>
              YouTube
            </Button>

          </nav>

        </article>

        <div className="header-hero-right">
          <Avatar
            alt="Emirkan Ülker"
            src={ProfileImages}
            sx={{
              marginTop: { xs: "8px", md: "25px" },
              marginLeft: 0,
              width: { xs: "100%", sm: 380, md: 430, lg: 475 },          // genişlik
              maxWidth: "100%",
              height: { xs: 250, sm: 290, md: 320, lg: 330 },         // yükseklik
              borderRadius: "10%", // kareye yakın görünüm
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }} />
        </div>
      </main>

      <br />


    </section >
  )
}

export default Header
