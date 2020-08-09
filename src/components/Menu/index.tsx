import React, { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCaretUp } from 'react-icons/fa';
import api from '../../services/api';

import { Container, SubMenu, MenuItem } from './styles';
import SubMenuItem, { menuItemSubmenuProps } from './MenuItem';

interface menuProps {
  name: string;
  id?: string;
  subMenus: menuItemSubmenuProps[];
  isOpen: boolean;
}

const SideBar: React.FC = () => {
  const [menus, setMenu] = useState<menuProps[]>([]);

  useEffect(() => {
    api
      .get('menus')
      .then((response) => {
        setMenu(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleOpenMenu = useCallback(
    (menuSelect: menuProps) => {
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

  return (
    <Container>
      {menus.map((menu, index: number) => {
        return (
          <MenuItem key={index} isOpen={menu.isOpen}>
            <NavLink
              to="#"
              activeClassName="selected"
              onClick={() => handleOpenMenu(menu)}
            >
              <span>{menu.name}</span>
              <FaCaretUp />
            </NavLink>
            {menu.subMenus && (
              <SubMenu isOpen={menu.isOpen} index={index}>
                {menu.subMenus.map((subMenu, indexSub: number) => {
                  const idSub = indexSub;
                  return (
                    <SubMenuItem
                      id={subMenu.id}
                      name={subMenu.name}
                      key={idSub}
                    />
                  );
                })}
              </SubMenu>
            )}
          </MenuItem>
        );
      })}
    </Container>
  );
};

export default SideBar;
