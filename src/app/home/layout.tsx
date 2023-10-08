import { Box, Stack, Typography } from "@mui/material";
import AftermathLogo from '../../images/Aftermath_Icon.png';
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: 'Home - Aftermath',
  description: 'Aftermath Clan Homepage',
}

const HomeLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <Stack sx={{ height: '100%'}}>
        <Stack sx={{  backgroundColor: 'primary.main', padding: '10px'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                <Image src={AftermathLogo} alt="Aftermath Logo" height={80} width={80} style={{ borderRadius: '100px'}} />
                <Typography variant="h1" sx={{  color: 'white' }}>Aftermath</Typography>
            </Box>
            <Typography variant="h4" sx={{ color: 'secondary.main', textAlign: 'center'}}>{`"It's what we do."`}</Typography>
        </Stack>
        <Stack sx={{ width: '100%', height: '100%', alignItems: 'center', padding: '20px', backgroundColor: 'primary.light', overflow: 'auto' }}>{children}</Stack>
    </Stack>
  )
}

export default HomeLayout;