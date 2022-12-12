import React from "react"
import { OptionToSelect, Select } from "../select/style"

export function SelectTech({ register }) {
    return(
        <Select {...register("status")}>
            <OptionToSelect value="">Selecione o status</OptionToSelect>
            <OptionToSelect value="Iniciante">Iniciante</OptionToSelect>
            <OptionToSelect value="Intermediário">Intermediário</OptionToSelect>
            <OptionToSelect value="Avançado">Avançado</OptionToSelect>            
        </Select>
    )
}