import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 100%;
        box-sizing: border-box;
        border: none;
    }

    html, body {
        height: 100%;
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.colors.tertiary};
            border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
            background-color: ${({ theme }) => theme.colors.secondary};
        }
        font-size: 100%;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        height: 100vh;
        background: ${({ theme }) => theme.colors.white};

        font-family: 'Graphik-Regular';
    }

    @media screen and (max-width: 500px) {
        body {
            background-image: unset;
        }
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
`;
