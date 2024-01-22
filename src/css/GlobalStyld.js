import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
        letter-spacing: -1px;
        word-break: break-all;
    }
    ul,li{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: white;
    }
`;
