import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* :root{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;

    --primary-dark: #13329E;
    --gold-light: #D9B44E;
    --gold-dark: #B08C28;
} */
    .light-theme{
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #ff7675;
        --background-dark-color: #F1F1F1;
        --background-dark-grey: #D9D9D9;
        --border-color: #cbced8;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #151515;
        --font-light-color: #313131;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #E4E4E4;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;

        --primary-dark: #13329E;
        --gold-light: #B08C28;
        --gold-dark: #B08C28;
    }
    .dark-theme{
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;

        --primary-dark: #13329E;
        --gold-light: #D9B44E;
        --gold-dark: #B08C28;
    }
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        font-size: 1.2rem;
        list-style: none;
        text-decoration: none;
        /* font-family: 'Lobster Two', cursive; */
        font-family: 'Nunito', sans-serif;
        
    }
    body{
        background-color: var(--background-dark-color);
        scroll-behavior: smooth;
        h1{
            font-size: 2.5rem;
            font-weight: 400;
            .arrow-right{
               font-size: 3rem;
               padding-left: 1rem; 
            }
            span{
                font-size: 2.5rem;
                .arrow-right{
                    font-size: 3rem;
                    padding-left: 1rem;
                }
            }
        }
        h6{
            color: var(--white-color);
            font-weight: 400;
            font-size: 1.5rem;
            padding-bottom: .35rem;
        }
        .desc-text {
            color: var(--white-color);
            font-size: 1.75rem;
            font-weight: 500;
            margin-bottom: 2rem;
            border-left: 2.5px solid var(--primary-color-light);
            padding-left: 1rem;
            span{
                font-weight: 700;
                font-family: 'Lobster Two', cursive;
                font-size: 1.75rem;
                letter-spacing: 2px;
                color: var(--gold-dark);
            }
        }
    }
`;

export default GlobalStyles;
