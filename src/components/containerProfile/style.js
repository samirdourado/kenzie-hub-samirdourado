import styled from "styled-components"

export const ContainerUserLogged = styled.section`
    width: 100%;
    min-width: 320px;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 10px;
`

export const UserNav = styled.nav`
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UserHeader = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-top: solid 2px var(--grey3);
    border-bottom: solid 2px var(--grey3);

    @media (max-width: 499px){
        flex-direction: column;
        transition: 0.8s ease-in;
        align-items: flex-start;
    }
    
    @media (min-width: 500px){
        flex-direction: row;
        transition: 0.8s ease-out;
        align-items: center;
    }
`

export const UserMain = styled.nav`
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 18px;
    align-items: flex-start;

    @media (max-width: 499px){
        /* align-items: center;  */
    }
    
    @media (min-width: 500px){
        /* align-items: flex-start; */
        transition: 0.8s ease-out;
    }
`

export const MainActionUserDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 21px;
`

export const LostNav = styled.nav`
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    @media (max-width: 815px){
        flex-direction: column;
        transition: 0.8s ease-in;
        gap: 20px;
    }
    
    @media (min-width: 816px){
        flex-direction: row;
        transition: 0.8s ease-out;
    }
`