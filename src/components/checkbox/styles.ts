import styled, { css } from 'styled-components';

interface containerProps {
  isFocused: boolean;
  isVisible?: boolean;
}


export const Container = styled.input<containerProps>`

${(props) =>
    props.isVisible &&
    css`
      display: none !important;
    `}
`;
