import React from 'react';

import { Container } from './styles';
import SubMenuItem from './MenuItem';

export interface subMenuItemProps {
  name: string;
  id?: string;
  isSelect: boolean;
}

export interface subMenusProps {
  subMenus: subMenuItemProps[];
  isOpen?: boolean;
}

const MenuItem: React.FC<subMenusProps> = ({
  subMenus,
  isOpen,
  children,
  ...rest
}) => {
  return (
    <Container className="sub-menu-bloc" isOpen={isOpen} {...rest}>
      {subMenus.map((subMenu, index) => {
        return <SubMenuItem id={subMenu.id} name={subMenu.name} key={index} />;
      })}
      {children}
    </Container>
  );
};

export default MenuItem;
