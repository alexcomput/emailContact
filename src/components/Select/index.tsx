import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';

import { useField } from '@unform/core';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

const Select: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#64358c',
      fontSize: '17px',
      lineHeight: '23px',
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.selectProps.menuColor,
      padding: 10,
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      fontWeight: 600,
      fontSize: '17px',
      lineHheight: '23px',
      textAlign: 'center',
      color: '#B6B8D6',
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#64358c',
      border: state.isFocused ? 0 : 0,
      borderBottom: state.isFocused ? '2px solid #64358C' : '2px solid #B6B8D6',
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
        border: state.isFocused ? 0 : 0,
        borderBottom: '2px solid #64358C',
      },
      borderRadius: '0px',
      background: 'transparent',
      test: provided,
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = 1;
      const cssInput = {
        fontWeight: '600',
        fontSize: '17px',
        lineHeight: '23px',
      };
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition, ...cssInput };
    },
  };

  return (
    <ReactSelect
      defaultValue={defaultValue}
      ref={selectRef}
      styles={customStyles}
      maxMenuHeight={100}
      placeholder="Selecione sua franquia"
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: '#B6B8D6',
          primary50: '#DDE2EE',
          primary: '#64358c',
          dangerLight: '#fff',
        },
      })}
      {...rest}
    />
  );
};

export default Select;
