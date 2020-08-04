import React from 'react';

import { Link } from 'react-router-dom';
import { FiMoreVertical } from 'react-icons/fi';
import { Container, Avatar } from './styles';

import Menu from '../Menu';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <Link to="#/"> OA</Link>
      </Avatar>
      <div className="favorite">
        <div>
          Favorito
          <FiMoreVertical size={15} />
        </div>
        <strong>30</strong>
      </div>
      <Menu />
    </Container>
  );
};

export default Header;
