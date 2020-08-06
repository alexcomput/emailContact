import styled, { css } from 'styled-components';

interface containerProps {
  isFocused: boolean;
  isVisible?: boolean;
}


export const Container = styled.input<containerProps>`
  background: ${props => props.theme.colors.secondary60};
  box-sizing: border-box;
  all: unset;
  border: 2px solid ${props => props.theme.colors.primary};
  width: 15px;
  height: 15px;
  display: inline-block;
  border-radius: 3px;
  margin-right: 5px;

  :checked {
    background-color: ${props => props.theme.colors.primary};
    width: 15px;
    height: 15px;
  }
  ${(props) =>
    props.isVisible &&
    css`
        display: none !important;
      `}
`;
