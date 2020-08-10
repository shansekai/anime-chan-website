import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    body,html{
        height: 100%;
        background: ${(props) => props.theme.colors.bg};
    }
`
export default GlobalStyles
