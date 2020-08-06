import React, { useCallback, useState } from 'react';

import { FiMoreVertical } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Avatar } from './styles';
import { useAuth } from '../../hooks/auth';

import Menu from '../Menu';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { singOut } = useAuth();

  const handleLogout = useCallback(async () => {
    console.log(1);
    await singOut();
  }, [singOut]);

  return (
    <Container>
      <Avatar isOpen={isOpen}>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          OA
        </button>
        <ul>
          <li>
            <button type="button" onClick={handleLogout}>
              Sair
            </button>
          </li>
        </ul>
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
