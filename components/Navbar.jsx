import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
    return (
        <>
        <nav>
            <div className="logo">
               <Image src="/logoNinja.png" width={128} height={77}  alt="Ninja Logo"/>
            </div>

            <Link href="/">
                <a>Home</a>
            </Link>

            <Link href="/about">
                <a>About</a>
            </Link>

            <Link href="/ninjas">
                <a>Ninja Listing</a>
            </Link>
            
        </nav>
        </>
    )
}

export default Navbar
