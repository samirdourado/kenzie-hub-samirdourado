import { createContext, useState, useEffect, useContext } from "react"
import { apiData } from "../services/api"
import { UserContext } from "./userContext"

export const TechContext = createContext({})

export function TechProvider({ children }) {

    const getToken = localStorage.getItem("@KenzieHub")

    const { setUser, loading, setLoading, delLoading, setDelLoading } = useContext(UserContext)
    
    const [ createModal, setCreateModal ] = useState(false)
    const [ detailsModal, setDetailsModal] = useState(false)
    const [ userTech, setUserTech] = useState()

    async function createTechnology(formData) {
        
        try {
            const response = await apiData.post("users/techs", formData, {
                headers: {
                    "Authorization": `Bearer ${getToken}`
                }
            })
            setUserTech(response)
            setCreateModal(false)
        } catch (error) {
            console.log(error)            
        }
    }

    async function editTechnology(formData, id) {
        try {    
            setLoading(true)
            const response = await apiData.put(`users/techs/${id}`, formData, {
                headers: {
                    "Authorization": `Bearer ${getToken}`
                }
            })
            setUserTech(response)
            setDetailsModal(false)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    async function deleteTechnology(id) {
        try {
            setDelLoading(true)
            const response = await apiData.delete(`users/techs/${id}`, {                        
                headers: {
                    "Authorization": `Bearer ${getToken}`
                }
            })
            setUserTech(response)
            setDetailsModal(false)
        } catch (error) {
            console.log(error)
        } finally {
            setDelLoading(false)
        }
    }

    useEffect(() => {        
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
    }, [userTech])

    return(
        <TechContext.Provider value={{ 
            createTechnology, 
            editTechnology,
            deleteTechnology,
            setLoading, 
            setCreateModal,
            setDetailsModal,            
            setUserTech,
            setLoading,
            createModal, 
            detailsModal,
            userTech,
            loading,
        }}>
            { children }
        </TechContext.Provider>
    )
}