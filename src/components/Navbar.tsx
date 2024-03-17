import React from 'react'
import { Button } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between'>
        <div className='flex'>
          <h1>INVO</h1>
          
        </div>

        <Button>Download</Button>
      </nav>
    </div>
  )
}

export default Navbar