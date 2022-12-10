import styled from "styled-components"


export const ListTechHolder = styled.ul`
    width: 100%;
    background-color: var(--grey3);
    padding: 22px 2vw;
    display: flex;
    flex-direction: column;
    gap: 16px;
    /* transition: 0.8s ease-out; */
`


export const ListTechItem = styled.li`
    width: 100%;
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: var(--grey4);

    &:hover {
        background-color: var(--grey2);
        transition: 0.3s ease-out;
    }
    

`

export const ListTechAction = styled.div`
    width: 100%;
    max-width: 130px;
    display: flex;
    gap: 10px;
    align-items: center;
    /* background-color: aquamarine; */
`