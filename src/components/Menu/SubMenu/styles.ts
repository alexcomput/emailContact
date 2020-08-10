import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface MenuProps {
  isOpen?: boolean;
  index?: number;
}

export const Container = styled.ul<MenuProps>`
  display: flex;
  flex-direction: column;
  display: none;

  ${(props) =>
    props.isOpen &&
    css`
      display: block;
    `}

  .select-sub-menu {
    background: ${(props) => props.theme.colors.secondary30};
  }
`;
