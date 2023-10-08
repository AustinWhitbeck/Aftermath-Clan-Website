import { Box, Grid, Stack, Typography } from "@mui/material";
import { Metadata } from "next"
import Image from "next/image";
import AftermathLogo from '../../images/Aftermath_Icon.png';

export const MemberBox = ({ name }: { name: string}) => {
  return(
         <Box sx={{ backgroundColor: 'secondary.dark', width: '100%', borderRadius: '4px', padding: '10px', display: 'flex', gap: '10px'}}>
            <Image src={AftermathLogo} alt="Aftermath Logo" height={40} width={40} style={{ borderRadius: '50px'}} />
            <Typography variant="subtitle1" sx={{ color: 'secondary.light', fontSize: '24px', textTransform: 'uppercase'}}>{name}</Typography>
          </Box>
  )
}

type ClanMember = {
  name: string;
  role: string;
}

const founders: ClanMember[] = [
  {
    name: 'jcollins',
    role: 'founder',
  }
];

const admins: ClanMember[] = [
  {
    name: 'Astro',
    role: 'admin',
  },
  {
    name: 'Xeltonic',
    role: 'admin',
  },
];

const members: ClanMember[] = [
  {
    name: 'S7',
    role: 'member',
  },
  {
    name: 'in0rgan1c',
    role: 'member',
  },
  {
    name: 'TopherMcBum',
    role: 'member',
  },
  {
    name: 'Brixtonhartly',
    role: 'member',
  },
  {
    name: 'Nixolus',
    role: 'member',
  },
  {
    name: 'Froggie081',
    role: 'member',
  },
  {
    name: 'Duke',
    role: 'member',
  },
  {
    name: 'rey',
    role: 'member',
  },
];


export const metadata: Metadata = {
  title: 'Roster - Aftermath',
  description: 'Aftermath Clan Members on Roster',
}

const RosterPage = () => {
  return (
    <Stack sx={{ gap: '30px'}}>
      <Stack sx={{ gap: '10px'}}>
        <Box sx={{ backgroundColor: 'primary.main', padding: '5px' }}>
          <Typography variant="h4" sx={{ color: 'secondary.light'}}>Founder</Typography>
        </Box>
        <Grid container spacing={2}>
          {founders.map((founder, index) => {
            return(
              <Grid item xs={6} key={`${index}-founder`}>
                <MemberBox name={founder.name} />
              </Grid>
            )
          })}
        </Grid>
      </Stack>
      <Stack sx={{ gap: '10px'}}>
        <Box sx={{ backgroundColor: 'primary.main', padding: '5px' }}>
          <Typography variant="h4" sx={{ color: 'secondary.light'}}>Admin</Typography>
        </Box>
        <Grid container spacing={2}>
          {admins.map((admin, index) => {
            return(
              <Grid item xs={6} key={`${index}-founder`}>
                <MemberBox name={admin.name} />
              </Grid>
            )
          })}
        </Grid>
      </Stack>
      <Stack sx={{ gap: '10px'}}>
        <Box sx={{ backgroundColor: 'primary.main', padding: '5px' }}>
          <Typography variant="h4" sx={{ color: 'secondary.light'}}>Member</Typography>
        </Box>
        <Grid container spacing={2}>
          {members.map((member, index) => {
            return(
              <Grid item xs={6} key={`${index}-founder`}>
                <MemberBox name={member.name} />
              </Grid>
            )
          })}
        </Grid>
      </Stack>
    </Stack>
  )
}

export default RosterPage