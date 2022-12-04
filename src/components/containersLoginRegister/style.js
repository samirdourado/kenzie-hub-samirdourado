import styled from "styled-components"

export const LogAndRegisterTitleArea = styled.div`
    width: 100%;
    min-width: 296px;
    max-width: 369px;
    /* height: 150px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: blue; */

`

export const LogAndRegisterBg = styled.div`
    background-color: var(--grey3); /*aliceblue;*/
    width: 100%;
    min-width: 296px;
    max-width: 369px;
    /* height: 200px; */
    margin-top: 48px;
    border: none;
    border-radius: 4px;
    padding: 28px 22px;

    @media (max-width: 369px){
            transition: 0.8s ease-in;
        }
        
        @media (min-width: 370px){         
            transition: 0.8s ease-out;
        } 
`

