import React from 'react';

import { Container } from './styles';

interface TootipProps {
  title: string;
  className?: string;
}
const Tooltip: React.FC<TootipProps> = ({ title, className, children }) => (
  <Container className={className}>
    {children}
    <strong>{title}</strong>
    <span>{title}</span>
  </Container>
);

export default Tooltip;
