import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.fieldset`
  min-inline-size: auto;
  border: 0;

  & + fieldset {
    margin-top: 20px;
  }
`;
