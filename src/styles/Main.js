import styled from 'styled-components';

export const MainConst = styled.div `
    /* width: 100vw; */
    margin: 30px;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 100px;
    text-align: center;

    .icon-menu {
        margin: auto;
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: center;

        .icon {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
        }
    }
    .start-button {
        color: white;
        background-color: blueviolet;
        width: 400px;
        height: 10vh;
        margin:0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        cursor: pointer;
    }
    .destaques {
        font-size: 2rem;
    }
    .container-img {
        display: grid;
        gap: 30px;

        img {
            width: 400px;
        }
    }
    
`