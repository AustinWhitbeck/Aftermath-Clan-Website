import {  Box, Stack, Typography } from "@mui/material"
import { Metadata } from "next"

type Requirement = {
  headerText: string;
  contentText: string;
  id: number
}

const requirements: Requirement[] = [
  {
    headerText: `Day 1 Raid Completion`,
    contentText: `(KF/VoG require Regicide/Tempo's Edge, while a contest clear is acceptable for Vow/Root`,
    id: 1,
  },
  {
    headerText: `Trio Flawless Raid`,
    contentText: `The point of this is to be challenging, so we won't accept runs with cheeses that remove the challenge.` + 
    `Notably, queenswalk must be done legit for Trio Petra's to count.`,
    id: 2,
  },
  {
    headerText: `4 of 7 Flawless Raids`,
    contentText: `Let us know which you have completed and we can work on getting you up to 7 when you join our roster if you haven't already.`,
    id: 3,
  },
  {
    headerText: `Solo Flawless Dungeon Credit - Get 6 Points`,
    contentText: `Solo Flawless Duality worth two, any other SF dungeon and solo Duality worth one each.`,
    id: 4,
  },
]

export const metadata: Metadata = {
  title: 'Recruiting - Aftermath',
  description: 'Aftermath Clan How to Join - Recruitment',
}

const RecruitingPage = () => {
  return (
        <Stack sx={{ padding: '5px', gap: '10px', overflowY: 'auto', height: '100%'}}>
          {requirements.map((requirement) => {
            const { headerText, contentText, id } = requirement;
            return (
              <Stack key={id} sx={{ padding: '10px', border: '2px solid', borderRadius: '4px', borderColor: 'secondary.dark', backgroundColor: 'primary.main'}}>
                <Typography variant="subtitle2" sx={{ fontSize: '22px', color: 'secondary.light'}}>{headerText}</Typography>
                <Typography variant="subtitle1" sx={{ color: 'secondary.main'}}>{contentText}</Typography>
              </Stack>
            )
          })}
          <Stack sx={{ height: '100%', justifyContent: 'flex-end'}}>
            <Typography variant="body1" sx={{ color: 'secondary.dark'}}>{`*If you meet these requirements, please reach out to one of our admins on Discord: jcollins, astrophy1sical, (placeholder for Xel)  `} </Typography>
          </Stack>
        </Stack>
  )
}

export default RecruitingPage