import React from 'react';

import { Container, avatarProps } from './styles';

const Avatar: React.FC<avatarProps> = ({ children, ...rest }) => (
  <Container {...rest} >
    {children}
  </Container >
);

export default Avatar;
