import React, { useState, useEffect } from 'react';

import { FiMoreVertical } from 'react-icons/fi';
import intl from 'react-intl-universal';
import { Container, Avatar } from './styles';
import Menu, { menuItemProps } from '../Menu';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

const NavBar: React.FC = ({ children }) => {
  const [menus, setMenu] = useState<menuItemProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { singOut } = useAuth();

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
        <div className="display-none">
          {intl.get('favorite.title')}
          <FiMoreVertical size={15} />
        </div>
        <strong>30</strong>
      </div>

      <Menu menus={menus} setMenu={setMenu} />
    </Container>
  );
};

export default NavBar;
