import { Box, Stack, Typography } from '@mui/material'


type TitleLayoutWrapperProps = {
    titleText: string;
    children: React.ReactNode;
}
const TitleLayoutWrapper = ({titleText, children}: TitleLayoutWrapperProps) => {
  return (
            <Stack sx={{ backgroundColor: 'primary.light', padding: '10px', height: '100%' }}>
                <Box sx={{ backgroundColor: 'text.secondary', borderRadius: '4px'}}>
                    <Typography variant="h1" sx={{ color: 'primary.dark', fontWeight: 700, textAlign: 'center'}}>{titleText}</Typography>
                </Box>
                <Stack sx={{ padding: '20px', overflow: 'auto', height: '100%'}}>
                    {children}
                </Stack>
            </Stack>
  )
}

export default TitleLayoutWrapper;