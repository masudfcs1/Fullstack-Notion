import React from 'react'
import Logo from './logo'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'


const Footer = () => {
  return (
    <div className=' flex items-center w-full p-6 bg-background z-50 '>
      <Logo />
      <div className=' flex w-full justify-between md:justify-end gap-x-2 items-center md:ml-auto text-muted-foreground '>
        <Button variant='ghost' size='sm' > Privacy Policy </Button>
        <Button variant='ghost' size='sm' > Terms & Conditions </Button>
      </div>
    </div>
  )
}

export default Footer