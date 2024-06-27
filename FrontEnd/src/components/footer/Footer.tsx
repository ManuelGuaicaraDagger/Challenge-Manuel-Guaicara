import { Grid, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    return (
        <Grid container justifyContent="center" flexDirection="column" alignItems="center" marginTop={10}>
        <Grid item>
            <Typography>Copyright © Manuel Guaicara</Typography>
        </Grid>
        <Grid item>
            <a href="https://github.com/ManuelGuaicaraDagger" target="_blank">
            <GitHubIcon sx={{width: '40px', height: "40px"}}/>
            </a>
            <a href="https://www.linkedin.com/in/manuel-alejandro-guaicara-dagger-784a06194/" target="_blank">
            <LinkedInIcon sx={{width: '40px', height: "40px"}} />
            </a>
        </Grid>
        </Grid>
    )
}

export default Footer