import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-zinc-100 py-2 border-s-zinc-200 fixed w-full z-10 top-0'>
        <div className='container flex items-center justify-center'>
            <Link href="/"><Image src="/logo.png" alt='logo' height="40" width="40"/></Link>
        </div>
    </div>
  )
}

export default NavBar