import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-size: 45%;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;
