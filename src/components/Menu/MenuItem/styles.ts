import styled from 'styled-components';

import { shade, lighten } from 'polished';

export const Container = styled.li`
  position: relative;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #b6b8d6;

  display: flex;
  align-items: baseline;

  a {
    padding: 15px 15px 15px 20px;

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  :hover {
    background: ${lighten(0.2, '#4b8f8c')};
    color: #36445a;
    ::after {
      content: '';
      width: 3px;
      height: 100%;
      background: #ff5100;
      position: absolute;
      top: 0;

      left: 0;
    }
  }
`;
