import styled from "styled-components"

export const BackdropModal = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    position: fixed;
    top:0;
    left:0;
    align-items: center;
    justify-content: center;
    display: none;
    display: flex;     
`

export const ModalHolder = styled.div`
    width: 100%;    
    min-width: 296px;
    max-width: 396px;
    background-color: var(--grey3);
    margin: 0 10px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ModalTitle = styled.div`
    width: 100%;
    height: 50px;
    min-width: 296px;
    max-width: 396px;
    background-color: var(--grey2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`

export const ModalBody = styled.form`
    width: 100%;
    min-width: 296px;
    max-width: 396px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 24px 10px 32px 10px;

    :nth-last-child() {
        margin-bottom: 20px;
    }
`