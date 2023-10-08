import { Box, Stack, Typography } from "@mui/material"

const RecruitingLayout = ({ children }: { children: React.ReactNode}) => {
  return (
        <Stack sx={{ backgroundColor: 'primary.light', padding: '10px', height: '100%' }}>
            <Box sx={{ backgroundColor: 'text.secondary', borderRadius: '4px'}}>
                <Typography variant="h2" sx={{ color: 'primary.dark', fontWeight: 700, textAlign: 'center'}}>Looking to join our roster?</Typography>
            </Box>
            <Typography variant="h3">Requirements:</Typography>
            <Typography variant="subtitle1"><i>{`(You are required to have 3/4 of qualifications below)`}</i></Typography>
            <Stack sx={{ padding: '20px', overflow: 'auto', height: '100%'}}>
                {children}
            </Stack>
        </Stack>
  )
}

export default RecruitingLayout