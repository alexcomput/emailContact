import styled, { css } from 'styled-components';

interface objectIntemProps {
  posiction: number;
}
export const Container = styled.div<objectIntemProps>`
  height: 186px; ;

  h1 {
    font-weight: bold;
    font-size: 35px;
    line-height: 139.4%;
    color: #623f99;
    margin: 0;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 139.4%;
    color: #000000;

    & + p {
      font-weight: 300;
      font-size: 15px;
      line-height: 139.4%;
      color: #623f99;
    }
  }

  .body-objective{
    position: relative;
    
    img{
      position: absolute;
      top: 0;
      left: -49px;
    }
  }

  ${(props) =>
    props.posiction === 0 &&
    css`
      grid-row: span 2;
    `}

  ${(props) =>
    props.posiction === 1 &&
    css`
      align-self: end;
    `}

  ${(props) =>
    props.posiction === 2 &&
    css`
      align-self: center;
    `}

  ${(props) =>
    props.posiction === 3 &&
    css`
      align-self: start;
    `}
  ${(props) =>
    props.posiction === 4 &&
    css`
      align-self: center;
    `}
    

  .card-ocjetive1 {
  }

  .card-ocjetive2 {
    order: 3;
  }
  .card-ocjetive3 {
    order: 3;
  }
  .card-ocjetive4 {
    order: 5;
  }
`;
