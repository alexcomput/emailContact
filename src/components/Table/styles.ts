import styled, { css } from 'styled-components';

export const Container = styled.table`
  background: #333;
  border-collapse: collapse;
  color: #d0d7d3;

  tr {
    border-bottom: 2px solid #f5f5f5;

    :hover {
      background: #000000;
      text-align: left;
    }

    th,
    td {
      div {
        display: flex;
        flex-direction: column;
        text-align: left;
        line-height: 20px;
      }
      padding: 8px;
      text-align: left;
    }
  }

  .checkbox {
    width: 20px;
    height: 20px;
  }

  .text-subject {
    color: #34bfbf;
  }
  .time-users {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .circle-users {
    display: flex;
    flex-direction: row;
    place-content: center;
  }
`;

interface avatarProps {
  height?: number;
  width?: number;
  isFocused?: boolean;
}

export const AvatarTable = styled.div<avatarProps>`
  text-decoration: none;
  border: 2px solid #fff;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 16px;
  border-radius: 50%;
  display: none;
  
  ${(props) =>
    props.isFocused &&
    css`
      display: none;
    `}
       
  width: ${(props) => `${props.width}px` || `${30}px`};
  height: ${(props) => `${props.height}px` || `${30}px`};
`;
