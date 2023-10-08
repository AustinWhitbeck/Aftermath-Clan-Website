import { Button } from '@mui/material';
import Link from 'next/link'
import React from 'react'

export type NavLinkInfo = {
    link: string;
    text: string;
    id: number;
}

const NavLink = ({ link, text}: NavLinkInfo) => {
  return (
    <Link href={link} passHref style={{ textTransform: 'none'}}>
       <Button 
            variant="text" 
            sx={{ 
                fontSize: '16px',
                textTransform: 'none',
                color: 'secondary.main', 
                '&:hover': {
                    color: 'secondary.light', 
                },
            }}
        >
            {text}
       </Button>
    </Link>
  )
}

export default NavLink