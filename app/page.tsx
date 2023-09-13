'use client'
import Link from 'next/link'
import Greet from './greet/greet'
import { NavigationMenu,NavigationMenuItem, } from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <NavigationMenu>
  <NavigationMenuItem>
  <Greet/>
</NavigationMenuItem>
</NavigationMenu>
      

    </main>
  )
}