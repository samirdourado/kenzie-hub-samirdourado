import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { Button } from "../../components/buttons"

export function DashBoardPage({user, logoutUser, userStoraged}) {
    
    const loggedUser = JSON.parse(userStoraged)
    
    // console.log(user.user)
    // console.log(userStoraged)
    // console.log(loggedUser.user)

    return(
        
        <div>
            <nav>
                <p>Kenzie Hub</p>
                <Button logoutUser={logoutUser} text="Sair"/>
            </nav>
            {
                loggedUser.user ? (
                <>
                    <header>
                        <p>Olá {loggedUser.user.name}</p>
                        <p>Olá {loggedUser.user.course_module}</p>
                    </header>
                    <main>
                        <p>Que pena! Estamos em desenvolvimento.</p>
                        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                    </main>
                </>
            ) : (
                <>
                    <p>Sessão expirada</p>
                    <Link to="/">Faça o Login</Link>
                </>
                )
            }


        </div>
        
    )
}