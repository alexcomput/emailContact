import styled, { css, keyframes } from 'styled-components';

import Tooltip from '../Tooltip';

interface containerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
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

    background: #F8F9FA; 
    padding: 16px;
    color: #B6B8D6; 
    position: relative;
    padding: 2px; 

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

    ${(props) =>
      props.isFocused &&
      css`
        color: #64358c;
        border-color: #64358c;
      `}
      
    ${(props) =>
      props.isFilled &&
      css`
        color: #64358c;
      `}


    input {

      background: transparent;
      flex: 1;
      border: 0;
      border-bottom: 2px solid #B6B8D6;
      
      font-weight: 600; 
      font-size: 1.7rem;
      line-height: 2.3rem;
      text-align: start; 
      margin-top: 56px;
      width: 100%;
      height: 100%; 
      padding: 0px 0 7px 4px; 

      &:hover {
          border-bottom: 2px solid #64358C;
      }

      &::placeholder {
          color: rgba(0, 0, 0, 0.25);
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
          color: #623f99;
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
    color: #ff5100;
    line-height: 16px;
  }

  span {
    background: #ff5100;
    color: #fff;

    &::before {
      border-color: #ff5100 transparent;
    }
  }
`;
