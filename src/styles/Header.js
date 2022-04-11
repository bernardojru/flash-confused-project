import styled from "styled-components";

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  padding: 10px;
  border-bottom: 1px solid rgba(137, 43, 226, 0.247);
  margin-bottom: 10px;
  width: 100vw;

  #title {
    color: rgba(39, 6, 70, 0.473);
    font-size: 1.5rem;
  }
  .container-input {
    height: 5vh;
    width: 60vw;
    border: 1px solid rgba(137, 43, 226, 0.247);
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;

    img {
      opacity: 0.4;
      cursor: no-drop;
    }

    .input {
      width: 55vw;
      border: none;
      outline: none;
    }
  }
`;
