import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
Link
export const About = () => {
  const router = useRouter()
  return (
    <div>
      about
      <div>
      
      <button onClick={()=>{
        router.back()
      }} className='px-3 py-2 bg-zinc-900 text-white'>Back</button>
      </div>
    </div>
  )
}
export default About;