import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --green: #60CBB0;
        --gray1: #F5F5F5;
        --gray2: #858C9F;
        --gray3: #545C6B;
        --gray4: #212229;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Nunito', sans-serif;
        ::-webkit-scrollbar {
            width: 7px;               
        }
        ::-webkit-scrollbar-track {
            /* background: var(--gray3); */
            border-radius: 20px;    
        }
        ::-webkit-scrollbar-thumb {
        /* background-color: var(--secondary-color);    */
            border-radius: 20px;
        }
    }
    
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        border: 0;
        font-size: 100%;
    }
    
    ol, ul {
    	list-style: none;
    }

    .App {
        /* max-width: 1500px; */
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }

    button {
        font-family: inherit;
    }

    button:hover {
        cursor: pointer;
    }
`;

export default GlobalStyle;
