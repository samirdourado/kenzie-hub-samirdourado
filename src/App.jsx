import { GlobalStyle } from "./styles/globalStyles"
import { RoutesCentral } from "./RoutesCentral"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { UserProvider } from "./contexts/userContext"
import { TechProvider } from "./contexts/techContext"

function App() { 
  return (      
      <UserProvider>
        <TechProvider>
          <RoutesCentral/>
        </TechProvider>
      </UserProvider>
  )
}
export default App