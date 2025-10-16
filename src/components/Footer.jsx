import React from 'react'
import { Typography } from '@mui/material';

function Footer() {
    return (
        <footer> { /* Ana Bölüm */}
            <header>
                <Typography variant='h3' >Let's work together on <br />your next product. </Typography>

            </header>
            <br />
            <nav style={{ display: "flex" }}>
                <div>
                    <span>&#128073;</span>  <a href='mailto:emirkanulker08@gmail.com' title='E-posta' style={{ color: "#af0c48", fontWeight: "bold", textDecoration: "underline" }}>emirkanulker08@gmail.com</a>
                </div>

                <div style={{ display: "flex", gap: "10px", marginLeft: "670px" }}>
                    <a href='#' style={{ fontWeight: "bold" }}>Personal Blog</a>
                    <a href='https://github.com/emrkn-ulkr' title='Github' style={{ fontWeight: "bold", color: "#00ab6b" }}>Github</a>
                    <a href='https://www.linkedin.com/in/emirkan-%C3%BClker-dev/' title='Linkedin' style={{ fontWeight: "bold", color: "#0077b5" }}>Linkedin</a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
