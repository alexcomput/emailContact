import styled, { css } from 'styled-components';

export const Container = styled.header`
  padding: 10px;
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

interface avatarProps {
  isOpen: boolean;
}
export const Avatar = styled.div<avatarProps>`
  position: relative;
  height: 57px;
  border-bottom: 2px solid;
  padding-left: 5px;

  button {
    text-decoration: none;
    border: 2px solid #2c365e;
    display: flex;
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

  ul {
    z-index: 13;
    background: #fff;
    position: relative;
    padding: 30px 10px 10px 10px;
    width: 100%;
    top: 40px;
    list-style: none;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    height: 50px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        background-color: #ffffff;
        border: 1px solid #dadce0;
        border-radius: 4px;
        padding: 13px 49px;
      }
    }
  }
`;
