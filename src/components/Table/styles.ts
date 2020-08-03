import styled from 'styled-components';

export const Container = styled.table`
  background: #ffff;
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
