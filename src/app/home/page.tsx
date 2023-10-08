import { Box, Typography } from "@mui/material"
import Image from "next/image"
import HeroBanner from '../../images/AftermathRaidHeroImage.png';


const INTRODUCTION_MESSAGE = `Aftermath is a high skill, tight-knit clan, looking for like-minded players.` + 
`All of our members are 18+, and we like to keep an active community on Discord.`

const HomePage = () => {
  return (
    <>
        <Image src={HeroBanner} alt="Hero Banner of Aftermath Members in Game" height={200} style={{ borderRadius: '10px'}} />
        <Box sx={{ padding: '20px'}}>
            <Typography variant="h5" color="secondary.dark">{INTRODUCTION_MESSAGE}</Typography>
        </Box>
    </>
  )
}

export default HomePage