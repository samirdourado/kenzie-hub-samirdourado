import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { Loader } from "../components/loader"
import { UserContext } from "../contexts/userContext"

export function ProtectedRout() {

    const { user } = useContext(UserContext)
    
    return(        
        <>        
        { user ? <Outlet/> : <Navigate to={"/"} />}        
        </>
    )
}