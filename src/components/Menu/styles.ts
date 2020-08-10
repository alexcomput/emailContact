import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  align-items: center;
`;

export const MenuItem = styled.li<MenuProps>`
  width: 100%;

  list-style: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  .selected {
    color: ${(props) => props.theme.colors.text};
    .icon-svg path {
      fill: ${(props) => props.theme.colors.text};
    }
  }

  & a {
    align-items: center;
    height: 5rem;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: 300ms;
    display: flex;

    :hover {
      filter: grayscale(0%) opacity(1);
      /* background: ${(props) => props.theme.colors.secondary30}; */
      color: ${(props) => props.theme.colors.textSecondary};
    }
  
    .link-text {
      display: none;
      margin-left: 1rem;
    }
    .nav-link svg {
      margin: 0 1.5rem;
    }

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
