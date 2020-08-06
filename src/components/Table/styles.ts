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
      text-align-last: center;
      padding: 8px;
      text-align: left;
      div {
        display: flex;
        flex-direction: column;
        text-align: left;
        line-height: 20px;
      }
    }
  }

  .td-first {
    padding: 6px;
    width: 30px;
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
  index: number;
  isFocused?: isFocusProps;
  isCheched?: opemMenuProps[];
}

interface opemMenuProps {
  status: boolean;
  index: number;
}

interface isFocusProps {
  status: boolean;
  index: number;
}

export const AvatarTable = styled.div<avatarProps>`
  background: #fff;
  color: #64358c;
  text-decoration: none;
  border: 2px solid #64358c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 16px;
  border-radius: 50%;

  ${(props) =>
    ((props.isFocused?.index === props.index && props.isFocused?.status) ||
      props.isCheched?.find(
        (checked) => checked.index === props.index && checked.status
      )) &&
    css`
      display: none !important;
    `}

width: ${(props) => `${props.width}px` || `${30}px`};
height: ${(props) => `${props.height}px` || `${30}px`};
`;
