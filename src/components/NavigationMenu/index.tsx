import { Box, Stack, Typography } from "@mui/material"
import Image from "next/image"
import  AftermathLogo  from '../../images/Aftermath_Icon.png';
import Link from "next/link";
import NavLink, { NavLinkInfo } from "../NavLink";



const linksArray: NavLinkInfo[] = [
  {
    link: '/contact',
    text: 'Contact',
    id: 1,
  },
  {
    link: '/roster',
    text: 'Roster',
    id: 2,
  },
  {
    link: '/achievements',
    text: 'Achievements',
    id: 3,
  },
  {
    link: '/recruiting',
    text: 'Recruiting',
    id: 4,
  },
];

const NavigationMenu = () => {
  return (
    <Stack sx={{  height: '100vh', padding: '10px', minWidth: '200px', backgroundColor: 'primary.dark'}}>
      <Box sx={{ border: '2px solid', borderRadius: '5px', borderColor: 'secondary.main', padding: '10px', marginBottom: '10px'}}>
        <Link href="/home" passHref style={{ textDecoration: 'none', marginBottom: '10px'}}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
              <Image src={AftermathLogo} alt="Aftermath Logo" height={30} width={30} style={{ borderRadius: '50px'}} />
              <Typography variant="h3" sx={{ fontSize: '24px', color: 'white' }}>Aftermath</Typography>
          </Box>
        </Link>
      </Box>
      <Stack id="navigation-links-container" sx={{ height: '100%', padding: '10px', border: '2px solid', borderColor: 'primary.main', borderRadius: '4px'}}>
        {linksArray.map((link) => <NavLink key={link.id} {...link}/> )}
      </Stack>
    </Stack>
  )
}

export default NavigationMenu