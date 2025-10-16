import React from 'react'
import { Typography } from '@mui/material'

function Profile() {
    return (
        <div>


            <Typography variant='h3'>
                Profile
            </Typography>
            <br />
            <div style={{ display: "flex" }}>
                <Typography variant='h5' sx={{ color: "#4338ca" }}>Profile</Typography>

            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>Doğum Tarihi</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>İkamet Şehri</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>Eğitim Durumu</Typography><br />
                    <Typography sx={{ fontWeight: "bold" }}>Tercih Ettiği Rol</Typography>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginRight: "50px" }}>
                    <Typography>30.03.2001</Typography>
                    <Typography>Adana</Typography>
                    <Typography>Önlisans, <br />Bilgisayar Programcılığı</Typography>
                    <Typography sx={{ marginTop: "10px" }}>Full-Stack</Typography>
                </div>

                <div style={{ marginRight: "20px", marginTop: "-70px", width: "605px" }}>
                    <Typography variant='h5' sx={{ color: "#4338ca" }}>About Me</Typography>
                    <br />
                    Merhaba kendim hakkında kısaca bahsetmek istiyorum. Programlamaya olan ilgim küçüklüğümden başladı 14-15
                    yaşlarımda scriptlere çok ilgi duyuyordum
                    daha sonra C# diline yönelerek temellerimi atmıştım ve bir script yayınlayıp ara vermiştim.

                    Şu anda kendimi front-end developer kısmına dahil ediyorum. İlerleyen süreçte back-end asıl ilgim olan kısma da giriş yapacağıma emin olabilirsiniz.
                </div>

            </div>
            <br />
            <br />
            <hr style={{ border: "1px solid gray" }} />
            <br />
            <br />

        </div >
    )
}

export default Profile
