import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

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
    <div>

      <div className="header-header">
        <Stack direction="row" spacing={1} alignItems="center">
          <YellowBlueSwitch defaultChecked />
          <Typography>DARK MODE | <span className="text-blue-800">TÜRKÇE</span>'YE GEÇ </Typography>
        </Stack>
      </div>
      <br />

      <div className="header-bar-div">
        <div>Profil İconu</div>

        <div className="header-bar-right">
          <div>Skills</div>
          <div>Projects</div>
          <div>Hire Me</div>
        </div>

      </div>

    </div>
  )
}

export default Header