import React, { HTMLAttributes, useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { Container } from './styles';
import api from '../../../services/api';

export interface menuItemSubmenuProps {
  id: string;
  name: string;
}

interface menuItemProps extends HTMLAttributes<HTMLLIElement> {
  name: string;
}

const MenuItem: React.FC<menuItemProps> = ({ id, name, children, ...rest }) => {
  const [count, setCount] = useState(null);

  const data = useEffect(() => {
    api.get(`items/${id}`).then((response) => {
      setCount(response.data.subMenuItems.length);
    });
  }, []);
  return (
    <Container {...rest}>
      <NavLink to={`/dashboard/${id}`}>
        {name} <span>{count}</span>
      </NavLink>
      {children}
    </Container>
  );
};

export default MenuItem;
