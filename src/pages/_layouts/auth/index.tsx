import React from 'react';

import { Container } from './styles';

interface toggleProps {
  toggleTheme?(): void;
}

const Default: React.FC<toggleProps> = ({ toggleTheme, children }) => {
  return <>{children}</>;
};

export default Default;
