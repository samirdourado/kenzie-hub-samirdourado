import { Link } from "react-router-dom"

export function NotFoundPage() {
    return(
        <>
            <h1>perdeu-se</h1>
            <Link to={"/"}>Voltar</Link>
        </>
    )
}