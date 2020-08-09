import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.secondary20};

  a {
    position: relative;
    padding: 15px;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: ${(props) => props.theme.colors.text};

    display: flex;
    align-items: baseline;
  }
`;

export const MenuItem = styled.ul<MenuProps>`
  list-style: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.text};
  position: relative;

  .selected {
    color: ${(props) => props.theme.colors.text};
    .icon-svg path {
      fill: ${(props) => props.theme.colors.text};
    }
  }
  & a {
    display: flex;
    justify-content: space-between;

    > svg {
      position: absolute;

      top: calc(50% - (60% / 2));
      right: 20px;
      transform: translateY(50%);
      transition: transform 0.5s;
    }

    ${(props) =>
      props.isOpen &&
      css`
        svg {
          transform: translateY(50%) rotate(-180deg);
        }
      `}
  }

  :hover {
    background: ${(props) => shade(0.2, props.theme.colors.secondary20)};
    a {
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

interface MenuProps {
  isOpen?: boolean;
  index?: number;
}

export const SubMenu = styled.ul<MenuProps>`
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
