import styled from "styled-components";

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 10px;
  /* border: 1px solid rgba(137, 43, 226, 0.247); */
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100vw;


  .localization {
    display: flex;
    align-items: center;
    justify-content: space-between;


    #title {
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 1.5rem;
    }
  }
  .container-input {
    height: 6vh;
    width: 45vw;
    border: 1px solid rgba(137, 43, 226, 0.247);
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;

    img {
      padding-left: 5px;
      opacity: 0.4;
      cursor: no-drop;
    }

    .input {
      padding-left: 5px;
      width: 35vw;
      border: none;
      outline: none;
    }
  }
  .user{
    cursor: pointer;
  }
`;
