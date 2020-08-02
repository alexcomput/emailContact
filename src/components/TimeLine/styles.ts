import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  margin: 40px 0;
  position: relative;

  ::after {
    content: '';
    background: linear-gradient(
      90deg,
      #ff5100 0%,
      rgba(255, 81, 0, 0.75) 24.71%,
      rgba(255, 81, 0, 0.34) 59.2%,
      rgba(255, 81, 0, 0.19) 98.84%
    );
    height: 4px;
    width: 100%;
    position: absolute;
  }
`;
