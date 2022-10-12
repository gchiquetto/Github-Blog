import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }

    body{
        background-color: ${(props) => props.theme['base-background']};
        -webkit-font-smoothing: antialiased;
        color: ${(props) => props.theme['base-text']}
    }

    body, input-security, button, textarea{
        font: 400 1rem 'Nunito', sans-serif;
        line-height: 160%;
    }

    @media (max-width: 480px){
        html{
            font-size:82.5%
        }
    }
`
