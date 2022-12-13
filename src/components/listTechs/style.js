import styled from "styled-components"

export const ListTechHolder = styled.ul`
    width: 100%;
    background-color: var(--grey3);
    padding: 22px 2vw;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 4px;
`

export const ListTechItem = styled.li`
    width: 100%;
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: var(--grey4);
    border-radius: 4px;
    transition: transform 0.5s;

    &:hover {
        background-color: var(--grey2);
        transform: scale(1.02);
    }
`

export const ListTechAction = styled.div`
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;    
`