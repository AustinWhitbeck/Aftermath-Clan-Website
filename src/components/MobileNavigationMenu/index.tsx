import { Box, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import  AftermathLogo  from '../../images/Aftermath_Icon.png';


const MobileNavigationMenu = () => {
  return (
    <Box sx={{ 
            display: 'none', 
            [`@media screen and (max-width: 650px)`]: {
                width: '100%', 
                height: '40px', 
                backgroundColor: 'primary.dark', 
                display: 'flex', 
            }, 
        }}>
        <Link href="/home" passHref style={{ textDecoration: 'none', marginBottom: '10px'}}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
              <Image src={AftermathLogo} alt="Aftermath Logo" height={30} width={30} style={{ borderRadius: '50px'}} />
              <Typography variant="h3" sx={{ fontSize: '24px', color: 'white' }}>Aftermath</Typography>
          </Box>
        </Link>
    </Box>
  )
}

export default MobileNavigationMenu