import styled, { css, keyframes } from 'styled-components';

import { shade } from 'polished';

import iconHome from '../../assets/icones/Home.svg';
import iconInfo from '../../assets/icones/info.svg';
import iconGroup from '../../assets/icones/Group.svg';
import iconNews from '../../assets/icones/News.svg';

interface ContainerProps {
  isOpen?: boolean;
}

export const Container = styled.header`
  width: 55px;
  left: 0;
  z-index: 10;
  height: 100%;
  position: fixed;
  background: #3f3a5f;
  border-radius: 0px 6px 6px 0px;
  transition: 0.5s;

  :hover {
    width: 196px;
  }
`;

export const Contatent = styled.nav`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.li<ContainerProps>`
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
    background: ${shade(0.2, '#29273F')};
    a {
      color: #ffffff;

      .icon-svg path {
        fill: #ffffff;
      }
    }

    ::after {
      content: '';
      width: 3px;
      height: 100%;
      background: #ff5100;
      position: absolute;
      top: 0;
    }
  }

  img {
    margin-right: 15px;
  }

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
    .icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-size: cover;
      margin-right: 20px;

      .icon-home path {
        fill: #b6b8d6;
      }
    }

    > svg {
      position: absolute;

      top: 14px;
      right: 20px;
      transform: translateY(50%);
      transition: transform 0.4s;
    }

    ${(props) =>
      props.isOpen &&
      css`
        > svg {
          transform: translateY(50%) rotate(-180deg);
        }
      `}
  }
`;

export const SubMenu = styled.ul<ContainerProps>`
  position: static;
  display: none;
  transition: 0.3s;
  ${(props) =>
    props.isOpen &&
    css`
      display: block;
    `}

  .select-sub-menu {
    background: #623f99;
  }
`;

export const SubMenuItem = styled.li`
  a {
    padding-left: 55px;

    :hover {
      background: #623f99;
    }
  }
`;
