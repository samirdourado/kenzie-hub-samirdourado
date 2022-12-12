import React, { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import { OptionToSelect, Select } from "./style"

export function SelectField({ register }) {
    const { loading } = useContext(UserContext)
    return(
        <Select {...register("course_module")} disabled={loading}>
            <OptionToSelect value="">Escolha um módulo</OptionToSelect>
            <OptionToSelect value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</OptionToSelect>
            <OptionToSelect value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</OptionToSelect>
            <OptionToSelect value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</OptionToSelect>
            <OptionToSelect value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</OptionToSelect>
        </Select>
    )
}