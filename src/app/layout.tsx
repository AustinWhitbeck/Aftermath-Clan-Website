import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from '../providers/ThemeRegistery'
import { Box } from '@mui/material'
import NavigationMenu from '../components/NavigationMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home - Aftermath',
  description: 'Aftermath Clan Homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <ThemeRegistry>
          <Box sx={{ display: 'flex'}}>
            <NavigationMenu />
            {children}
          </Box>
        </ThemeRegistry>
        </body>
    </html>
  )
}
