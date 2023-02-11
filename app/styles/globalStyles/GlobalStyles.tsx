import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

     *,*::after,*::before {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-box-sizing:border-box; 
        -ms-box-sizing:border-box;
     }
`;

export default GlobalStyle;
