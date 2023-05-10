import { createContext, useContext, useState } from "react"

const UsernameContext = createContext({
    username : '',
    changeUsername : (name) =>{

    } 
}) 

export const useUsername= ()=>{
    
    const {username,setUsername} = useContext(UsernameContext)
    return {
        username,
        setUsername
    }
}
export const UsernameContextProvider = ({children})=>{
    const [username,setUsername] = useState('default')
    const changeUsername = (name) => setUsername(name)
    const value = {
        username,setUsername
    }
    return (
        <UsernameContext.Provider value={value}>
            {children}
        </UsernameContext.Provider>
    )
}
