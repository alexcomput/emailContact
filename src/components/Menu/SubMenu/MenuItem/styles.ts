import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.li`
  position: relative;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => shade(0.2, props.theme.colors.text)};
  background: ${(props) => shade(0.2, props.theme.colors.secondary30)};

  display: none;
  align-items: baseline;

  a {
    padding: 15px 15px 15px 20px;

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  :hover {
    background: ${(props) => shade(0.2, props.theme.colors.primary)};
    color: ${(props) => shade(0.2, props.theme.colors.text)};

    ::after {
      content: '';
      width: 3px;
      height: 100%;
      background: ${(props) => shade(0.2, props.theme.colors.secondary50)};
      position: absolute;
      top: 0;

      left: 0;
    }
  }
`;
