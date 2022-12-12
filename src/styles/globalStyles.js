import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Inter", sans-serif;
        text-decoration: none;
    }

    :root {
        --color-primary: #ff577f;
        --color-primary-focus: #ff427F;
        --color-primary-negative: #59323F;

        --grey0: #F8F9FA;
        --grey1: #868e96;
        --grey2: #343b41;
        --grey3: #212529;
        --grey4: #121214;

        --success: #3FE864;
        --negative: #E83F5B

        --title1: 1rem; /*16px;*/
        --title2:  1rem; /*16px;*/
        --title3: 1rem; /*16px;*/
        --headline: 0.75rem; /*12px;*/
        --headlineBold: 0.75rem; /*12px;*/
        --headlineItalic: 0.75rem; /*12px;*/

        --font-family: "Inter", sans-serif;
    }

    body {
        background-color: var(--grey4)
    }

    a {
        cursor: pointer;
        background-color: var(--grey3);
        background-color: var(--grey1);
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
    } 
    
    .spinner {    
    animation: loading 1.5s infinite
    }

    @keyframes loading {
        0% {
            transform: rotateY(0deg);
        }

        100% {
            transform: rotateY(360deg);
        }
    }
`