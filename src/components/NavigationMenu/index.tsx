import { Box, Stack, Typography } from "@mui/material"
import Image from "next/image"
import  AftermathLogo  from '../../images/Aftermath_Icon.png';
import TwitterLogo from '../../images/social-media-logos/twitter_logo.png';
import BungieLogo from '../../images/social-media-logos/bungie_logo.png';
import Link from "next/link";
import NavLink, { NavLinkInfo } from "../NavLink";



const linksArray: NavLinkInfo[] = [
  {
    link: '/recruiting',
    text: 'Recruiting',
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
    link: '/contact',
    text: 'Contact',
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
      <Stack id="navigation-links-container" sx={{ height: '100%', padding: '10px', border: '2px solid', borderColor: 'primary.main', borderRadius: '4px', overflow: 'auto'}}>
        {linksArray.map((link) => <NavLink key={link.id} {...link}/> )}
        <Stack sx={{ justifyContent: 'flex-end', height: '100%'}}>
        <Typography variant="subtitle1" sx={{ color: 'primary.light'}}>Socials:</Typography>
        <Box sx={{ display: 'flex', gap: '5px'}}>
          <Link href="https://twitter.com/aftermath_clan" target="_blank" passHref>
            <Image src={TwitterLogo} alt="twitter logo" height={25} width={25} />
          </Link>
          <Link href="https://www.bungie.net/7/en/Clan/Profile/3965174" target="_blank" passHref>
            <Image src={BungieLogo} alt="twitter logo" height={25} width={25} />
          </Link>
        </Box>
      </Stack>
      </Stack>
    </Stack>
  )
}

export default NavigationMenu