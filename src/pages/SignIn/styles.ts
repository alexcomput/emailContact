import styled, { keyframes } from 'styled-components';

/* import SigninBackgroundImg from '../../assets/logni-backgound.png'; */

import { shade } from 'polished';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(+50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearRotation = keyframes`
  from {
    transform: rotate(45deg)
  }
  to {
    transform: rotate(-45deg)
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  flex: 1;
  background-size: 70% 100%;
  background: #f8f9fa;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
  align-items: center;

  width: 55%;
  /*max-width: 700px; */

  header {
    margin: 0 0 0;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .ponts-right {
    position: absolute;
    top: 0;
    right: 0;
  }

  form {
    animation: ${appearFromLeft} 1s;

    max-width: 500px;
    width: 375px;
    text-align: left;

    img {
      margin-bottom: 55px;
    }

    h1 {
      text-align: center;
      font-size: 4rem;
      line-height: 5.5rem;
      font-weight: bold;
      color: #623f99;
      font-style: normal;
      margin-bottom: 20px;
    }

    strong {
      font-size: 18px;
      line-height: 25px;
      color: #3b3b3b;
      font-style: normal;
      font-weight: normal;
    }

    fieldset {
      margin-top: 30px;
    }

    .field {
      text-align: start;
      flex: 1;
      display: flex;
      flex-direction: column;

      /*label {
        margin-bottom: 24px;
        font-style: normal;
        font-weight: 300;
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 5px;
      }*/
    }

    .group-checkbox {
      flex: 1;
      display: flex;

      .checkbox {
        left: 0px;
        top: 1px;
        background: #ffffff;
        /* Space Cadet */
        box-sizing: border-box;
        all: unset;
        border: 2px solid #b6b8d6;
        width: 15px;
        height: 15px;
        display: inline-block;
        border-radius: 3px;
        margin-right: 5px;
      }

      label {
        color: #3b3b3b;
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 1.9rem;

        input:checked {
          background-color: #64358c;
          width: 15px;
          height: 15px;
        }
      }
    }

    a {
      flex: 1;
      text-align: end;
      font-size: 1.4rem;
      line-height: 1.9rem;
      color: #64358c;
      text-decoration: none;
      transition: color 0.2s;
      text-decoration-line: underline;

      &:hover {
        color: ${shade(0.2, '#64358C')};
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  /* 
  animation: ${appearRotation} 1s; */

  /* bottom: 0px;
  background-size: 70% 100%; */

  /* background: url() no-repeat center; */
  
  background-size: 45%;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;


  div{
    display: flex;
    flex-direction: column;
    align-items: start;
    
    .logo {
      margin-left: 40px;
      margin-top: 39px;
    }

    .pontLeft{
      position: absolute;
      top: 115px;
      left: 0;
      height: 6.0rem;
    }
    .user-computer {
      height: 52.4rem
    }

  } 
  .topRight {
    align-self: start;
  }  

  .bottomLeft {
    left: 0;
    bottom: 0;   
  }  
`;
