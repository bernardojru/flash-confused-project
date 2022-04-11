import styled from 'styled-components'

export const Navigation = styled.div `
    width: 80%;
    background-color: rgba(39, 6, 70, 0.473);
    
    height: 7vh;
    border-radius: 5px;
    color: white;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

        p{
           border-radius: 5px;
           padding: 5px 10px;
           cursor: pointer;

            :hover {
                background-color: blueviolet;
            }
        }
`