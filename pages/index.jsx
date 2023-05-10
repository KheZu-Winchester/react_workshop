import React, { createContext, useContext } from 'react'
import Link from 'next/link'
import { useUsername } from '@/contexts/UsernameContext'


const Home = () => {
   const username = useUsername()
  return (
    <div>
      <h1 className=' text-lg font-bold'>
        Home
      </h1>

    <div>
      <Link href='/login'>Go login page</Link>
      <Link href='/about'>About Page</Link>
      <Link href='/contact'>contact Page</Link>
      
    </div>

    </div>
  )
}

export default Home