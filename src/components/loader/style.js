import styled from "styled-components"

export const LoaderHolder = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoaderSpinner = styled.img`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .spinner {    
    animation: loading 1.5s infinite
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`