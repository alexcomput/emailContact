import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, 285px));
  max-width: 100%;
  padding-left: 130px;
  /*grid-template-columns: repeat(3, 295px); */
  grid-template-rows: 270px 270px;

  grid-gap: 45px;
  align-items: center;
  place-content: center;
  background: #dde2ee;
`;
