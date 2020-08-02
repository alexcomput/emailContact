import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #623f99;
  box-shadow: 0px 0px 4px rgba(100, 53, 140, 0.34);
  height: 60px;
  border: 0;
  padding: 0 16px;
  text-transform: capitalize;

  font-size: 2rem;
  line-height: 2.7rem;
  color: #ffffff;
  width: 100%;
  margin-top: 40px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#64358C')};
  }
`;
