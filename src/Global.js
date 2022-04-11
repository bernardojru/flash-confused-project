import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Open+Sans:ital,wght@1,300&display=swap');

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100vw;
            background-color: #eee;
            font-family: "Nunito", sans-serif;
            /* background: linear-gradient(-90deg, #0dccff, #4760ff); */

        } 
   }
`