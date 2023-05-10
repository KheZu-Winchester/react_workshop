import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Login = () => {
    const router = useRouter()
    const onLoginClick =async()=>{
        console.log('this');
        await router.push('/dashboard')
    }

    useEffect(()=>{
        router.prefetch('/dashboard')
    })
  return (
    <div>login
        <button onClick={onLoginClick}>Login</button>
        <button>Logout</button>
    </div> 
  )
}

export default Login;