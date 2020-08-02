import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface toggleProps extends InputHTMLAttributes<HTMLLinkElement> {
  onPressed?: boolean;
}

const Toggle: React.FC<toggleProps> = () => {
  return (
    <Container>
      <div className="one" />
      <div className="two" />
      <div className="three" />
    </Container>
  );
};

export default Toggle;
