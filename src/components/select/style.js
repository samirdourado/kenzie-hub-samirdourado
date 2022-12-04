import styled from "styled-components"

export const SelectLabel = styled.p`
    color: var(--grey0);
    font-weight: 400;
    font-size: var(--headline);
    margin-bottom: 10px;
`
export const Select = styled.select`
    width: 100%;
    height: 40px;
    border:none;
    border-radius: 4px;
    padding: 0 16px;
    margin-bottom: 3px;
    background-color: var(--grey2);
    color: var(--grey1);
    font-weight: 400;
    font-size: var(--title1);

    &&:focus:hover:active {
        border: solid 2px var(--color-primary-negative)
    }    
`
export const OptionToSelect = styled.option`
    height: 40px;
`