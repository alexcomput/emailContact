import React, { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import api from '../../services/api';

import { Container, SubMenu, MenuItem } from './styles';
import SubMenuItem, { menuItemSubmenuProps } from './MenuItem';

interface menuProps {
  name: string;
  id?: string;
  subMenus: menuItemSubmenuProps[];
}

interface opemMenuProps {
  status: boolean;
  index: number;
}

const SideBar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<opemMenuProps[]>([]);

  const [menus, setMenu] = useState<menuProps[]>([]);

  const data = useEffect(() => {
    const menusData = api
      .get('menus')
      .then((response) => {
        setMenu(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleOpemMenu = useCallback(
    (index: number) => {
      setOpenMenu([]);

      if (!(openMenu.length && openMenu[0].index === index)) {
        setOpenMenu([{ index, status: true }]);
      }
    },
    [openMenu]
  );

  return (
    <Container>
      {menus.map((menu, index: number) => {
        return (
          <MenuItem key={index} onClick={() => handleOpemMenu(index)}>
            <NavLink to="#" activeClassName="selected">
              <span>{menu.name}</span>
            </NavLink>
            {menu.subMenus && (
              <SubMenu isOpen={openMenu[0]} index={index}>
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
