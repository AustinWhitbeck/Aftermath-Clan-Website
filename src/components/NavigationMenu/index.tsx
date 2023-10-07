import { Box, Stack, Typography } from "@mui/material"
import Image from "next/image"
import  AftermathLogo  from '../../images/Aftermath_Icon.png';

const NavigationMenu = () => {
  return (
    <Stack sx={{ backgroundColor: 'gray', height: '100vh', padding: '10px', width: '200px'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
            <Image src={AftermathLogo} alt="Aftermath Logo" height={30} width={30} style={{ borderRadius: '50px'}} />
            <Typography variant="h3" sx={{ fontSize: '24px', color: 'white' }}>Aftermath</Typography>
        </Box>
    </Stack>
  )
}

export default NavigationMenu