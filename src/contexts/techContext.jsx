import { createContext, useState, useEffect, useContext } from "react"
import { apiData } from "../services/api"
import { toast, ToastContainer } from "react-toastify"
import { UserContext } from "./userContext"

export const TechContext = createContext({})

export function TechProvider({ children }) {

    const { user, setUser, } = useContext(UserContext)
    // console.log(user)
    const [loading, setLoading] = useState(false)
    const [ createModal, setCreateModal ] = useState(false)
    const [ detailsModal, setDetailsModal] = useState(false)
    // const [ userTech, setUserTech] =useState({})
    // console.log(userTech)

    function handleOpenModal(event) {
        event.preventDefault()
        setCreateModal(true)
    }

    function handleCloseModal(event) {
        event.preventDefault()
        setCreateModal(false)    
    }

    function handleDetailsOpen(event) {
        event.preventDefault()
        setDetailsModal(true)
    }
    
    function handleDetailsClose(event) {
        event.preventDefault()
        setDetailsModal(false)
    }



    async function createTechnology(formData) {
        console.log(formData)
        const getToken = JSON.parse(localStorage.getItem("@KenzieHub"))
        console.log(getToken)

        
        
        try {           
            const response = await apiData.post("users/techs", formData, {
                        headers: {
                            "Authorization": `Bearer ${getToken}`
                        }
                    })
            console.log(response)
            // handleCloseModal()
        } catch (error) {
            console.log(error)            
        }
    }


    async function editTechnology(id, formData) {
        console.log(id, formData)
        const getToken = JSON.parse(localStorage.getItem("@KenzieHub"))
        // console.log(getToken)
        
        try {           
            const response = await apiData.post(`users/techs${id}`, formData, {
                        headers: {
                            "Authorization": `Bearer ${getToken}`
                        }
                    })
            console.log(response)
            // handleCloseModal()
        } catch (error) {
            console.log(error)            
        }
    }

    function deleteTechnology(id) {
        console.log(id)
        const removedItem = user.techs.filter(tech => tech.id !== id)
        setUser(removedItem)
    }

    return(
        <TechContext.Provider value={{ 
            createTechnology, 
            editTechnology,
            deleteTechnology,
            setLoading, 
            handleOpenModal,
            createModal, 
            detailsModal,
            setDetailsModal,
            handleCloseModal, 
            handleDetailsOpen, 
            handleDetailsClose }}>
            { children }
        </TechContext.Provider>
    )

}