import styled, { css, keyframes } from 'styled-components';

import Tooltip from '../Tooltip';

interface containerProps {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean;
}

const appearFromLeft = keyframes`
  from {
    top: 15;
  }
  to {
    top: 0px;
  }
`;

export const Container = styled.div<containerProps>`

    background: ${(props) => props.theme.colors.background};
    padding: 16px;
    color: ${(props) => props.theme.colors.secondary};
    position: relative;
    padding: 2px;

  ${(props) =>
    props.isError &&
    css`
      border-color: ${props.theme.colors.secondary50};
    `}

    ${(props) =>
      props.isFocused &&
      css`
        color: ${props.theme.colors.secondary70};
        border-color: ${props.theme.colors.secondary70};
      `}

    ${(props) =>
      props.isFilled &&
      css`
        color: ${props.theme.colors.secondary70};
      `}


    input {

      background: transparent;
      flex: 1;
      border: 0;
      border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.texThird};
      font-weight: 600;
      font-size: 1.7rem;
      line-height: 2.3rem;
      text-align: start;
      margin-top: 56px;
      width: 100%;
      height: 100%;
      padding: 0px 0 7px 4px;

      &:hover {
          border-bottom: 2px solid ${(props) => props.theme.colors.secondary70};
      }

      &::placeholder {
          color: ${(props) => props.theme.colors.text};
      }
    }

    label {
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      pointer-events: none;

      span {
          font-weight: 600;
        font-size: 1.7rem;
        line-height: 2.3rem;
        text-align: center;
        display: flex;
        align-items: center;
      }

      span svg {
        margin-bottom: 0;
        margin-right: 18px;
      }

  }

  .content-name{
    position:absolute;
    bottom: 16px;
    left: 0;
    transition: all 0.3s ease;

    ${(props) =>
      props.isFilled &&
      css`
        transform: translateY(-150%);
        svg {
          color: ${props.theme.colors.primary};
        }
      `}


    ${(props) =>
      props.isFocused &&
      css`
        transform: translateY(-150%);
      `}
  }

`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-top: 6px;
  display: flex;

  svg {
    margin: 0;
    margin-right: 4px;
  }

  strong {
    font-size: 14px;
    color: ${(props) => props.theme.colors.secondary70};
    line-height: 16px;
  }

  span {
    background: ${(props) => props.theme.colors.secondary70};
    color: ${(props) => props.theme.colors.text};

    &::before {
      border-color: ${(props) => props.theme.colors.secondary70} transparent;
    }
  }
`;
