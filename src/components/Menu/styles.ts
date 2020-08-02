import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    position: relative;
    padding: 15px;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #b6b8d6;

    display: flex;
    align-items: baseline;
  }
`;

export const MenuItem = styled.ul`
  list-style: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #b6b8d6;
  position: relative;

  .selected {
    color: #ffffff;
    .icon-svg path {
      fill: #ffffff;
    }
  }

  :hover {
    background: ${shade(0.2, '#2d6360')};
    a {
      color: #ffffff;
    }
  }
`;

interface OpemMenuProps {
  status: boolean;
  index: number;
}

interface MenuProps {
  isOpen?: OpemMenuProps;
  index: number;
}

export const SubMenu = styled.ul<MenuProps>`
  display: flex;
  flex-direction: column;
  display: none;

  ${(props) =>
    props.isOpen?.index === props.index &&
    props.isOpen.status &&
    css`
      display: block;
    `}

  .select-sub-menu {
    background: #623f99;
  }
`;
