import { createContext, useState, useEffect } from "react"
import { apiData } from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

export const UserContext = createContext({})

export function UserProvider({ children }) {

    const userStoraged = localStorage.getItem("@KenzieHub")
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    // const [userLogged, setUserLogged] = useState([])

    const navigate = useNavigate()

    async function registerNewUser(formData) {        
        try {
            setLoading(true)
            const response = await apiData.post(`users`, formData)
            toast.success("Conta criada com sucesso")
            navigate("/")
        } catch (error) {
            console.log(error)
            toast.error("Ops! Algo deu errado")
        } finally {
            setLoading(false)
        }
    }

    async function loginUser(formData) {
        try {
            setLoading(true)
            const response = await apiData.post(`sessions`, formData)
            localStorage.setItem("@KenzieHub", JSON.stringify(response.data.token))
            toast.success("Login efetuado")
            setUser(response.data.user)

            navigate("/dashboard")
        } catch (error) {
            console.log(error)
            console.log(error.response.data)
            toast.error("Ops! Algo deu errado")
        } finally {
            setLoading(false)
        }
    }

    function logoutUser() {
        localStorage.removeItem("@KenzieHub")
        setUser(null)
        navigate("/")
    }
    
    useEffect(() => {
        const getToken = JSON.parse(localStorage.getItem("@KenzieHub"))
        
        if (getToken) {
            const getApi = async () => {
                try {
                    setLoading(true)
                    const response = await apiData.get("profile", {
                        headers: {
                            "Authorization": `Bearer ${getToken}`
                        }
                    })
                    setUser(response.data)

                    } catch (error) {
                        console.log(error)
                    } finally {
                        setLoading(false)
                    }
                }
            getApi()
        }
    }, [])
    

    return(
        <UserContext.Provider value={{ user, setUser, loginUser, logoutUser, registerNewUser  }}>
            { children }
        </UserContext.Provider>
    )
}