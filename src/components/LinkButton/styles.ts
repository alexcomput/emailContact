import styled from 'styled-components';
import { shade } from 'polished';
import { LinkProps, Link } from 'react-router-dom';
import { LinkHTMLAttributes } from 'react';

export const Container = styled.div`
  background: transparent;
  border: 1px solid #f8f9fa;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(100, 53, 140, 0.34);

  border-radius: 50px;
  height: 60px;
  text-transform: capitalize;
  width: 100%;
  margin-top: 40px;
  transition: background-color 0.2s;
  max-width: 306px;

  a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 50px;
    text-decoration: none;

    width: 100%;
    height: 100%;
    font-size: 2rem;
    line-height: 2.7rem;
    color: #ffffff;
  }
  &:hover {
    background: ${shade(0.2, '#64358C')};
  }
`;
