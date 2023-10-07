import { Stack } from "@mui/material";

const HomeLayout = ({ children }: {children: React.ReactNode}) => {
  return (
        <Stack sx={{ width: '100%', alignItems: 'center', padding: '20px', backgroundColor: 'primary.main'}}>{children}</Stack>
  )
}

export default HomeLayout;