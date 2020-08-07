import styled, { css } from 'styled-components';

export const Container = styled.header`
  padding: 10px;
  width: 100%;
  max-width: 200px;
  background: ${(props) => props.theme.colors.secondary20};
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
    border: 2px solid ${(props) => props.theme.colors.primary};
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
      background: ${(props) => props.theme.colors.secondary50};
      border-radius: 50%;
    }
  }

  ul {
    z-index: 13;
    background: ${(props) => props.theme.colors.background};
    position: relative;
    padding: 30px 10px 10px 10px;
    width: 100%;
    top: 40px;
    list-style: none;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    height: 100px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        background-color: ${(props) => props.theme.colors.background};
        border: 1px solid ${(props) => props.theme.colors.primary};
        border-radius: 4px;
        padding: 13px 49px;
      }
    }
  }
`;
