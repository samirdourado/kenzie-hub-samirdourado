import styled from "styled-components"


export const Logo = styled.p`
    color: var(--color-primary);
    width: 100%;
    height: 100%;
    min-width: 98px;
    min-height: 17px;
    max-width: 122px;
    max-height: 21px;
    font-weight: 700;
    font-size: var(--title1);    
`

export const Title = styled.h3`
    text-align: center;
    color: var(--grey0);
    font-weight: 700;    

    @media (max-width: 369px){
        font-size: 14px;
        line-height: 22px;
        transition: 0.8s ease-in;
    }
        
    @media (min-width: 370px){
        font-size: 18px;
        line-height: 28px;
        transition: 0.8s ease-out;
    } 
`

export const TitleSub = styled.p`
    text-align: center;
    color: var(--grey1);
    font-weight: 400;

    @media (max-width: 369px){
        font-size: 9.6px;
        line-height: 22px;
        transition: 0.8s ease-in;
    }
        
    @media (min-width: 370px){
        font-size: var(--headline);
        line-height: 17.6px;
        transition: 0.8s ease-out;
    } 
`