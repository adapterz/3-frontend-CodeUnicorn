import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    #__next {
        @media screen and (min-width: 0px) and (max-width: 400px) {
        width: 1400px;
        }
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
