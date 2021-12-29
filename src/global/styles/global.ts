import { createGlobalStyle } from "styled-components";

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

    img {
        max-width: 100% !important;
    }

    @font-face {
        font-family: 'Graphik-Regular';
        src: url('/fonts/graphik/Graphik-Regular.woff2') format('woff2'),
            url('/fonts/graphik/Graphik-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: block;
    }
        @font-face {
        font-family: 'Graphik-Medium';
        src: url('/fonts/graphik/Graphik-Medium.woff2') format('woff2'),
            url('/fonts/graphik/Graphik-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: block;
    }
        @font-face {
        font-family: 'Eina-Regular';
        src: url('/fonts/eina/Eina01-Regular.woff2') format('woff2'),
            url('/fonts/eina/Eina01-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: block;
    }
        @font-face {
        font-family: 'Eina-Semibold';
        src: url('/fonts/eina/Eina01-SemiBold.woff2') format('woff2'),
            url('/fonts/eina/Eina01-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: block;
    }
`;
