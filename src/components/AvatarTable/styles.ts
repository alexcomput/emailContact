import styled, { css } from 'styled-components';

export interface avatarProps {
  height?: number;
  width?: number;
  index: number;
  isFocused?: boolean;
  isVisible?: boolean;
}

interface openMenuProps {
  status: boolean;
  index: number;
}

interface isFocusProps {
  status: boolean;
  index: number;
}

export const Container = styled.div<avatarProps>`
   
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  border: 2px solid ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 16px;
  border-radius: 50%;
  transition: visibility .1s ease-in-out;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: 83ms;

  ${(props) =>
    (props.isFocused || props.isVisible) &&
    css`
      visibility: hidden;
    `}

  width: ${(props) => `${props.width}px` || `${30}px`};
  height: ${(props) => `${props.height}px` || `${30}px`};

`;
