import styled from "styled-components"

export const LogAndRegisterTitleArea = styled.div`
    width: 100%;
    min-width: 296px;
    max-width: 369px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogAndRegisterBg = styled.div`
    background-color: var(--grey3);
    width: 100%;
    min-width: 296px;
    max-width: 369px;
    margin-top: 48px;
    border: none;
    border-radius: 4px;

    @media (max-width: 369px){
        transition: 0.8s ease-in;
        padding: 28px 12px;
    }
        
    @media (min-width: 370px){         
        transition: 0.8s ease-out;
        padding: 28px 20px;
    } 
`

export const LogAndRegisterHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
`

export const LogAndRegisterFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    align-items: center;
`