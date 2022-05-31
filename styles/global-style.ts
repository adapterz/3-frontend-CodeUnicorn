import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
    .active {
    color: white;
    background-color: #193a90;
  }
`;
