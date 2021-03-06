import React, { useState } from 'react';

import { FiMoreVertical } from 'react-icons/fi';
import intl from 'react-intl-universal';
import { Container, Avatar } from './styles';
import { useAuth } from '../../hooks/auth';

import NavBar from '../NavBar';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { singOut } = useAuth();
  // const { toggleTheme } = useTheme();

  return (
    <Container>
      <Avatar isOpen={isOpen}>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          OA
        </button>
        <ul>
          <li>
            <button type="button" onClick={() => singOut()}>
              {intl.get('logout')}
            </button>
          </li>
        </ul>
      </Avatar>
      <div className="favorite">
        <div>
          {intl.get('favorite.title')}
          <FiMoreVertical size={15} />
        </div>
        <strong>30</strong>
      </div>
      <NavBar />
    </Container>
  );
};

export default Header;
