import styled from "styled-components"

export const ButtonConfirm = styled.button`
    cursor: pointer;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: 1px solid var(--color-primary-negative);
    background-color: var(--color-primary-negative);    
    color: var(--grey1);
    font-weight: 500;
    font-size: var(--title1);
    outline: none;

    &&:hover {
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--grey0);
        transition: 0.8s ease-out
    }
`

export const ButtonLogout = styled.button`
    cursor: pointer;
    width: 100%;
    max-width: 56px;
    height: 32px;
    border-radius: 4px;
    border: none;
    background-color: var(--grey3);    
    color: var(--grey1);
    font-weight: 500;
    font-size: var(--title1);
    outline: none;
`

export const LinkRef = styled.link`
    cursor: pointer;
    background-color: var(--grey2);
    border: none;
    border-radius: 4px;        
    font-weight: 600;
    font-size: var(--headline);
    color: var(--grey0);

    @media (max-width: 369px){
        padding: 12px 26px;
        transition: 0.8s ease-in;
    }
    
    @media (min-width: 370px){
        padding: 15px 16px;            
        transition: 0.8s ease-out;
    }
`

export const ButtonAdd = styled.button`
    cursor: pointer;
    width: 100%;
    max-width: 32px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid var(--grey3);
    background-color: var(--grey3);    
    color: var(--grey1);
    font-weight: 500;
    font-size: var(--title1);
    outline: none;
    
    

    &&:hover {
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--grey0);
        transition: 0.8s ease-out
    }
`

export const ButtonSub = styled.button`
    cursor: pointer;
    width: 95%;
    height: 48px;
    border-radius: 4px;
    border: 1px solid var(--grey2);
    background-color: var(--grey2);    
    color: var(--grey1);
    font-weight: 500;
    font-size: var(--title1);
    outline: none;
    /* margin: 0 5px 20px 5px; */
    margin-bottom: 20px;

    &&:hover {
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--grey0);
        transition: 0.8s ease-out
    }
`

