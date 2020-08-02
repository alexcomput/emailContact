import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const PainelA = styled.div`
  width: 100%;
  max-width: 200px;
  background: #4b8f8c;
  padding: 27px 0;

  .favorite {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Header = styled.header`
  padding: 10px;
`;

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

export const Avatar = styled.div`
  position: relative;
  height: 57px;
  border-bottom: 2px solid;

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

    cursor: pointer;
    text-decoration: none;
    position: absolute;

    ::after {
      content: '';
      height: 15px;
      width: 15px;
      bottom: -4px;
      right: 0;
      position: absolute;
      background: #c5979d;
      border-radius: 50%;
    }
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
