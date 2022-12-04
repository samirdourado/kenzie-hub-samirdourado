import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { LogAndRegisterBg } from "../../components/containersLoginRegister/style"
import { Input } from "../../components/inputs"
import { MainContainer } from "../../components/mainContainer/style"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./loginSchema"
import { Button } from "../../components/buttons"
import { useState } from "react"

export function LoginPage({setUser, loginUser}) {
    const [loading, setLoading] =useState(false)

    const navigate = useNavigate()

    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(loginSchema)
    })

    const submit = (eventLoginData) => {
        loginUser(eventLoginData, setLoading)
        reset()        
    }

    return(
        <MainContainer>
                <div>
                    <p>Kenzie Hub</p>
                </div>
            <LogAndRegisterBg>
                <div>
                    <h3>Login</h3>
                </div>

                <form noValidate onSubmit={handleSubmit(submit)}>
                <Input type="email" id="email" label="E-mail: " placeholder="Digite aqui seu email" register={register("email")} disabled={loading}/>
                {errors.email && <p>{errors.email.message}</p>}

                <Input type="password" id="password" label="Senha: " placeholder="Crie uma senha" register={register("password")} disabled={loading}/>
                {errors.password && <p>{errors.password.message}</p>}

                
                <Button text={"Entrar"} type={"submit"} disabled={loading}>{loading ? "Entrando" : "Entrar"}</Button>
                </form>
                <div>
                    <Link to="/register">Cadastre-se</Link>
                    
                </div>
            </LogAndRegisterBg>
            
        </MainContainer>
    )
}