import styled from 'styled-components'

export const Load = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #222;
        .loader-wrapper {
            width: 100px;
            height: 100px;

            .loader {
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                border: 10px solid #162534;
                border-top-color: #4bc8eb;
                border-bottom-color: #f13a8f;
                border-radius: 50%;
                animation: rotate 5s linear infinite;
            }
            .loader .loader-inner {
                border-top-color: #36f372;
                border-bottom-color: #fff;
                animation-duration: 2.5s;
            }
            @keyframes rotate {
                0% {
                    transform: scale(1) rotate(360deg);
                }
                50% {
                    transform: scale(.8) rotate(-360deg);
                }
            }
        }
`