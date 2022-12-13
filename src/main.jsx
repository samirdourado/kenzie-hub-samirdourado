import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./contexts/userContext"
import { TechProvider } from "./contexts/techContext"
import { GlobalStyle } from "./styles/globalStyles"
import { ToastContainer } from "react-toastify"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>    
          <GlobalStyle/>  
          <App />  
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
    </BrowserRouter>
  </React.StrictMode>
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <UserProvider>
  //       <TechProvider>
  //         <App />
  //       </TechProvider>
  //     </UserProvider>
  //   </BrowserRouter>
  // </React.StrictMode>
)
