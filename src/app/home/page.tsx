import { Box, Stack, Typography } from "@mui/material"
import Image from "next/image"
import HeroBanner from '../../images/AftermathRaidHeroImage.png';


const INTRODUCTION_MESSAGE = `Aftermath is a high skill, tight-knit clan, looking for like-minded players. ` + 
`All of our members are 18+, and we like to keep an active community on Discord.`

const HomePage = () => {
  return (
    <Stack sx={{ height: '100%'}}>
        <Image src={HeroBanner} alt="Hero Banner of Aftermath Members in Game" height={200} style={{ borderRadius: '10px'}} />
        <Box sx={{ padding: '20px'}}>
            <Typography variant="subtitle2" color="secondary.dark" sx={{ textOverflow: 'clip'}}>{INTRODUCTION_MESSAGE}</Typography>
        </Box>
    </Stack>
  )
}

export default HomePage