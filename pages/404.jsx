import React,{useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Head from 'next/head'

function Unknown() {
    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)

    },[])
    return (
        <>
        <Head>
            <title>404 | Ninja List</title>
        </Head>
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>The page cannot be found</h2>
            
                <p>Go to the  <Link href='/'><a>Homepage</a></Link>
                </p>
        </div>
        </>
    )
}

export default Unknown
