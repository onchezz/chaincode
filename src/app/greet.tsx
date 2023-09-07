'use client'

import { useEffect } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import { Button } from '@/components/ui/button'

export default function Greet() {
  useEffect(() => {
    invoke<string>('greet', { name: 'Next.js' })
      .then(console.log)
      .catch(console.error)
  }, [])

  // Necessary because we will have to use Greet as a component later.
  return (
  <>
  <div>
    <span className='place-content-center m-8'>Welcome to code space </span>
    <Button>Check ui 
    </Button>
  </div>
  </>
  )
}