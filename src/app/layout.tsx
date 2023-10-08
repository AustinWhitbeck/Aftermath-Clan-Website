import { Inter } from 'next/font/google'
import ThemeRegistry from '../providers/ThemeRegistery'
import { Box } from '@mui/material'
import NavigationMenu from '../components/NavigationMenu'
import MobileNavigationMenu from '@/components/MobileNavigationMenu'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ height: '100%'}}>
        <ThemeRegistry>
          <Box sx={{ display: 'flex', height: '100vh',  [`@media screen and (max-width: 650px)`]: {
                // height: '100%', 
                backgroundColor: 'primary.dark', 
                display: 'flex', 
            }, }}>
            <NavigationMenu />
            <Box sx={{ flexGrow: 1, height: '100%' }}>
              <MobileNavigationMenu />
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
        </body>
    </html>
  )
}
