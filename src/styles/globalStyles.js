import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
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

`