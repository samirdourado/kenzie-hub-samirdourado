import { useState } from "react"

import { GlobalStyle } from "./styles/globalStyles"
import { RoutesCentral } from "./RoutesCentral"
import "react-toastify/dist/ReactToastify.css"
import { apiData } from "./services/api"
import { toast, ToastContainer } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"



function App() {
  const userStoraged = localStorage.getItem("@KenzieHub")

  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  async function registerNewUser(formData, setLoading) {        
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

  async function loginUser(formData, setLoading) {
    try {
        setLoading(true)
        const response = await apiData.post(`sessions`, formData)
        // console.log(response)
        localStorage.setItem("@KenzieHub", JSON.stringify(response.data.token))
        toast.success("Login efetuado")
        setUser(response.data.user)
        navigate("/dashboard")
        // getLoggedUserData()
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
 
  return (
    <>
      <RoutesCentral 
        user={user} 
        setUser={setUser} 
        registerNewUser={registerNewUser} 
        loginUser={loginUser} 
        logoutUser={logoutUser} 
        userStoraged={userStoraged}
        // getLoggedUserData={getLoggedUserData}
      />

      <GlobalStyle/>
      
      <ToastContainer
        position="top-right"
        autoClose={1235}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />      
    </>
  )
}
export default App