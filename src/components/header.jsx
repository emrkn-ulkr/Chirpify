import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ProfileImages from "../images/profile.jpg"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



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
        backgroundColor: "#0000cc",
      },
    },
  },
}));

function Header() {
  return (

    <section> { /* Ana Bölüm */}

      <header className="header-header">
        <Stack direction="row" spacing={1} alignItems="center">
          <YellowBlueSwitch defaultChecked />
          <Typography>DARK MODE | <span className="text-blue-800">TÜRKÇE</span>'YE GEÇ </Typography>
        </Stack>
      </header>
      <br />

      <nav className="header-bar-div">
        <Avatar sx={{ backgroundColor: "#ede7f6", color: "#9575cd", transform: "rotate(30deg)", width: "45px", height: "45px" }}>
          A
        </Avatar>
        <br />
        <br />
        <br />

        <div className="header-bar-right">
          <Button sx={{
            color: "gray",
            textTransform: "none",
            height: "50px",
            width: "120px"
          }} variant="text" >Skills</Button>

          <Button sx={{
            color: "gray",
            textTransform: "none",
            height: "50px",
            width: "120px"
          }} variant="text" >Projects</Button>

          <Button
            variant="outlined"
            sx={{
              color: "#3730a3",       // yazı rengi
              borderColor: "#3730a3", // çerçeve rengi
              textTransform: "none",
              height: "50px",
              width: "120px"  // büyük harfi kaldırmak için
            }}
          >Hire Me</Button>
        </div>
      </nav>

      <main className="header-hero-general">

        <article className="header-hero-left" >

          <div style={{ display: "flex", flexDirection: "row" }}>

            <hr style={{ width: "100px", marginTop: "15px", marginRight: "10px", color: "blue" }} />
            <h5 style={{ color: "blue" }}>Emirkan Ülker</h5>
            <br />
          </div>


          <Typography variant="h2" sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "black", mt: 1 }}>
            Cretive thinker<br /> Minimalism lover
          </Typography>
          <br />
          <Typography sx={{ color: "gray" }}>
            Hi, I'm Emirkan. I'm a full-stack developer. If you are looking for a <br />
            Developer who to craft solid and scalable frontend products with <br />
            great user experiences. Let's shake hands with me.
          </Typography>
          <br />
          <nav style={{ display: "flex", gap: "10px" }}>
            <Button
              sx={{
                textTransform: "none ",
                backgroundColor: "#3730a3",
                width: "115px"
              }}
              variant="contained">
              Hire Me</Button>

            <Button
              variant="outlined"
              sx={{
                color: "#3730a3",       // yazı rengi
                borderColor: "#3730a3", // çerçeve rengi
                textTransform: "none",
                width: "115px",
                gap: "5px"

              }}

            ><span><FaGithub style={{ display: "flex", fontSize: "30px" }} /></span>  Github</Button>

            <Button
              variant="outlined"
              sx={{
                width: "115px",
                color: "#3730a3",
                borderColor: "#3730a3",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                padding: "6px 14px", // buton iç boşluğu
              }}
            >
              <span style={{ display: "flex", fontSize: "30px" }}>
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