import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';

interface toggleProps extends InputHTMLAttributes<HTMLLinkElement> {
  onPressed?: boolean;
}
export const Container = styled.div<toggleProps>`
  width: 23px;
  height: 23px;
  position: relative;
  top: 22px;
  right: 0;

  margin-inline-start: auto;
  margin-right: 17px;
  margin-top: 21px;
  margin-bottom: 39px;

  .one {
    width: 1.3rem;
  }

  .two {
    width: 2.3rem;
  }

  .three {
    width: 1.8rem;
  }

  div {
    background: #f8f9fa;
    border-radius: 5.75px;
    height: 2px;
    width: 100%;
    margin: 5px auto auto 0;
  }
`;
