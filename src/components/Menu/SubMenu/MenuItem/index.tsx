import React, { HTMLAttributes, useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { Container } from './styles';
import api from '../../../../services/api';

export interface menuItemSubMenuProps {
  id: string;
  name: string;
}

interface menuItemProps extends HTMLAttributes<HTMLLIElement> {
  name: string;
}

const MenuItem: React.FC<menuItemProps> = ({ id, name, children, ...rest }) => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    api.get(`items/${id}`).then((response) => {
      setCount(response.data.subMenuItems.length);
    });
  }, [id]);
  return (
    <Container className="sub-menu-none" {...rest}>
      <NavLink to={`/dashboard/${id}`}>
        {name} <span>{count}</span>
      </NavLink>
      {children}
    </Container>
  );
};

export default MenuItem;
