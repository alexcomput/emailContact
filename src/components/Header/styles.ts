import styled from 'styled-components';

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

export const Avatar = styled.div`
  position: relative;
  height: 57px;
  border-bottom: 2px solid;
  padding-left: 5px;

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
