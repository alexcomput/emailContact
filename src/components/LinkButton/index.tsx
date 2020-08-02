import React, { LinkHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { Container } from './styles';

interface linkButtonProps extends LinkProps {
  to: string;
}

const LinkButton: React.FC<linkButtonProps> = ({ children, to }) => {
  return (
    <Container>
      <Link to={to}>{children}</Link>
    </Container>
  );
};

export default LinkButton;
