import { Inter } from 'next/font/google'
import ThemeRegistry from '../providers/ThemeRegistery'
import { Box } from '@mui/material'
import NavigationMenu from '../components/NavigationMenu'

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
          <Box sx={{ display: 'flex', height: '100vh'}}>
            <NavigationMenu />
            <Box sx={{ flexGrow: 1, height: '100%' }}>
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
        </body>
    </html>
  )
}
