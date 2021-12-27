import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #1DB954;
        --secondary-color: #6c757d;
        --background-dark-color: #374d3f;
        --border-color: #0e662d;
        --color-white: white;
        --background-light-color: #F1F1F1;
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        //---- CONTACT STYLES ----//

    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat','Martel', sans-serif;
        list-style: none;
        text-decoration: none;
        font-size: 1.2rem;
    }
    body{
        background-color: var(--background-dark-color);
        color: var(--white-color);
    }
    a{
        font-family: inherit;
        color: inherit;
        font-size: inherit;
    }
    h1,h2,h3,h4,h5{
        font-weight:700;
    }
}
    
    `;
export default GlobalStyle;
