import styled from "styled-components"

export const FieldSet = styled.fieldset`
    border:none;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 69px;
`
export const LabelToInput = styled.label`
    color: var(--grey0);
    font-weight: 400;
    font-size: var(--headline);
    margin-bottom: 10px;
`
export const InputField = styled.input`
    width: 100%;
    height: 40px;
    border:none;
    border-radius: 4px;
    padding: 0 16px;    
    background-color: var(--grey2);
    color: var(--grey1);
    font-weight: 400;
    font-size: var(--title1);
`