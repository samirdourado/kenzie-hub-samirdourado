import React from "react"
import { FieldSet, InputField, LabelToInput } from "./style"

export function Input({type, id, label, placeholder, register, userTech }) {
    return(
        <FieldSet>
            <LabelToInput htmlFor={id}> {label} </LabelToInput>
            <InputField id={id} type={type} placeholder={placeholder} {...register} />
        </FieldSet>
    )
}

export function InputEdit({type, id, label, placeholder, register, userTech }) {
    return(
        <FieldSet>
            <LabelToInput htmlFor={id}> {label} </LabelToInput>
            <InputField id={id} type={type} placeholder={placeholder} value={userTech.title} {...register} />
        </FieldSet>
    )
}