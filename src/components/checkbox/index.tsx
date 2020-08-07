import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';

import { Container } from './styles';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isVisible?: boolean;
}

const Checkbox: React.FC<inputProps> = ({ name, isVisible, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container
      name={name}
      ref={inputRef}
      type="Checkbox"
      isVisible={isVisible}
      isFocused={isFocused}
      {...rest}
    />
  );
};

export default Checkbox;
