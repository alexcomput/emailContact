import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: ${(props) => props.theme.colors.secondary70};
  box-shadow: 0px 0px 4px ${(props) => props.theme.colors.secondary80};
  height: 60px;
  border: 0;
  padding: 0 16px;
  text-transform: capitalize;

  font-size: 2rem;
  line-height: 2.7rem;
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  margin-top: 40px;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => shade(0.2, props.theme.colors.secondary70)};
  }
`;
