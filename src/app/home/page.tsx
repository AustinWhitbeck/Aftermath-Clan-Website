import { Box, Typography } from "@mui/material"
import { Metadata } from "next"
import Image from "next/image"
import HeroBanner from '../../images/AftermathRaidHeroImage.png';
import AftermathLogo from '../../images/Aftermath_Icon.png';

export const metadata: Metadata = {
  title: 'Home - Aftermath',
  description: 'Aftermath Clan Homepage',
}

const INTRODUCTION_MESSAGE = `Aftermath is a high skill, tight-knit clan, looking for like-minded players.` + 
`All of our members are 18+, and we like to keep an active community on Discord.`

const HomePage = () => {
  return (
    <>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Image src={AftermathLogo} alt="Aftermath Logo" height={80} width={80} style={{ borderRadius: '100px'}} />
            <Typography variant="h1" sx={{ textTransform: 'uppercase'}}>Aftermath</Typography>
        </Box>
        <Image src={HeroBanner} alt="Hero Banner of Aftermath Members in Game" height={200} style={{ borderRadius: '10px'}} />
        <Box sx={{ padding: '20px'}}>
            <Typography variant="subtitle2">{INTRODUCTION_MESSAGE}</Typography>
        </Box>
    </>
  )
}

export default HomePage