import React from 'react';

import { Wrapper } from './styles';

import NavBar from '../../../components/NavBar';

const Default: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      {children}
    </Wrapper>
  );
};

export default Default;
