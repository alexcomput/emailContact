import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 10px 0;
  padding-top: 30px;
  position: relative;

  time {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 139.4%;
    text-transform: uppercase;
    color: #29273f;
  }

  p {
    margin-left: 4px;
    font-weight: bold;
    font-size: 22px;
    line-height: 120.4%;
    color: #29273f;
    margin-top: 28px;

    & + p {
      margin-top: 9px;
      font-weight: 300;
      font-size: 15px;
      line-height: 138.4%;
      color: #3b3b3b;
    }
  }

  .timeline-item-content {
    max-width: 70%;
  }

  .circle {
    position: absolute;
    content: '';
    background: #623f99;
    flex: none;
    align-self: center;
    width: 12px;
    height: 12px;
    top: -14px;
    z-index: 2;
    border-radius: 50%;

    ::after {
      content: '';
      height: 45px;
      width: 45px;
      position: absolute;
      background: rgba(98, 63, 153, 0.28);
      left: calc(50% - 22px);
      bottom: calc(50% - 22px);
      border-radius: 50%;
    }
  }
`;

export const Footer = styled.div`
  margin-top: 4px;
  text-align: end;

  svg {
    height: 15px;
    width: 15px;
    color: #b6b8d6;
    margin-right: 6px;
  }

  a {
    text-decoration: none;
    color: #623f99;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
  }
`;
