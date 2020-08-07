import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.table`
  background: ${(props) => props.theme.colors.background};
  border-collapse: collapse;
  color: ${(props) => props.theme.colors.textSecondary};

  tr {
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
    :hover {
      background: ${(props) => shade(0.2, props.theme.colors.background)};
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
  .place-content-end {
    place-content: flex-end;
  }

  .flex {
    display: flex;
  }

  .td-first {
    padding: 6px;
    width: 6.5rem;

    .avatar-checkbox {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        margin: 0;
        justify-content: center;
        align-items: center;
        display: flex;
        transition: all 0.1s ease-in-out;
        position: absolute;
      }
    }
  }
  .checkbox {
    width: 20px;
    height: 20px;
  }

  .text-subject {
    color: ${(props) => props.theme.colors.primary};
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
