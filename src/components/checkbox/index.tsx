import React, { InputHTMLAttributes, useState, useCallback } from 'react';

import { Container } from './styles';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isVisible?: boolean;
}

const Checkbox: React.FC<inputProps> = ({
  name,
  isVisible,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);


  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);


  return (
    <Container isVisible={isVisible} isFocused={isFocused} {...rest} >

    </Container>
  );
};

export default Checkbox;
