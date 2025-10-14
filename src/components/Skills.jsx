import { Typography } from '@mui/material'
import React from 'react'


function Skills() {
    return (
        <div>

            <Typography variant='h3'>
                Skills
            </Typography>
            <br />
            <div className='skills-lang-bar' style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant='h5' sx={{ color: "#4338ca" }}>Java Script</Typography>
                <Typography variant='h5' sx={{ color: "#4338ca", paddingRight: "30px" }}>React.Js</Typography>
                <Typography variant='h5' sx={{ color: "#4338ca", paddingRight: "220px" }}>Node.Js</Typography>
            </div>
            <br />
            <div className='skills-lang-paragraph' style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography fontSize={10} sx={{ color: "#6b7280" }}>Excepteur sint occaecat cupidatat non proident, <br />
                    sunt in culpa qui officia deserunt mollit anim id est <br /> laborum.
                </Typography>

                <Typography fontSize={10} sx={{ color: "#6b7280" }}>Excepteur sint occaecat cupidatat non proident, <br />
                    sunt in culpa qui officia deserunt mollit anim id est <br /> laborum.
                </Typography>

                <Typography fontSize={10} sx={{ color: "#6b7280" }}>Excepteur sint occaecat cupidatat non proident, <br />
                    sunt in culpa qui officia deserunt mollit anim id est <br /> laborum.
                </Typography>
            </div>
            <br />
            <br />
            <hr style={{ border: "1px solid gray" }} />
            <br />
            <br />
        </div>
    )
}

export default Skills
