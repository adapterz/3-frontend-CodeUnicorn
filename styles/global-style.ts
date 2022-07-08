import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        font-family: 'Roboto';
        font-style: normal;
        overflow-x: hidden;
    }

    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: black;
    }
`;
