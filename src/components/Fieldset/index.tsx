import React, { FieldsetHTMLAttributes } from 'react';

import { Container } from './styles';

type fieldSetProps = FieldsetHTMLAttributes<HTMLFieldSetElement>;

const FieldSet: React.FC<fieldSetProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default FieldSet;
