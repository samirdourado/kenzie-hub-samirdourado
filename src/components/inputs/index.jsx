import React from "react"
import { FieldSet, InputField, LabelToInput } from "./style"

export function Input({type, id, label, placeholder, register,  }) {
    return(
        <FieldSet>
            <LabelToInput htmlFor={id}> {label} </LabelToInput>
            <InputField id={id} type={type} placeholder={placeholder} {...register}/>
        </FieldSet>
    )
}