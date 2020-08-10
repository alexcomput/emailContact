import React, { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCaretUp } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

import { Container, MenuItem } from './styles';
import SubMenu, { subMenuItemProps } from './SubMenu';

export interface menuItemProps {
  name: string;
  id?: string;
  subMenus?: subMenuItemProps[];
  isOpen: boolean;
}

export interface menusProps {
  menus: menuItemProps[];
  setMenu(menus: menuItemProps[]): void;
}

const Menu: React.FC<menusProps> = ({ menus, setMenu }) => {
  const handleOpenMenu = useCallback(
    (menuSelect: menuItemProps) => {
      setMenu(
        menus.map((data) => {
          if (menuSelect.id === data.id || data.isOpen) {
            data.isOpen = !data.isOpen;
          }
          return data;
        })
      );
    },
    [menus]
  );
  // key={index}
  return (
    <Container>
      {menus.map((menu, index: number) => {
        return (
          <MenuItem isOpen={menu.isOpen}>
            <NavLink
              to="#"
              activeClassName="selected"
              onClick={() => handleOpenMenu(menu)}
            >
              <FaCaretUp className="nav-link" />

              <span className="link-text">{menu.name}</span>
            </NavLink>
            {menu.subMenus && (
              <SubMenu subMenus={menu.subMenus} isOpen={menu.isOpen} />
            )}
          </MenuItem>
        );
      })}
    </Container>
  );
};

export default Menu;
