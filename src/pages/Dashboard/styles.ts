import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const PainelA = styled.div``;

export const AvatarTable = styled.div`
  position: relative;
  height: 57px;

  a {
    text-decoration: none;
    border: 2px solid #2c365e;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    font-size: 16px;
    border-radius: 50%;
    height: 45px;
    width: 45px;
  }
`;

export const PainelB = styled.div`
  flex: 1;

  padding: 40px;
  background: #c5979d;

  input,
  button {
    height: 30px;
    width: auto;
    margin: 5px;
  }

  .checkbox {
    height: 30px;
    width: auto;
    background: transparent;
  }
  .button-menu {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  form {
    display: flex;
    flex-direction: column;

    svg {
      color: #fff;
    }
  }

  div {
    display: flex;
  }
`;
