import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #2B193D; /* 2B193D    2C365E  484D6D 4B8F8C C5979D */
    color: #2B193D; 
    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Nunito', serif;
    font-size: 1.4rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 300;
  }

  button {
    cursor:pointer;
  }

  @media (max-width: 768px){
    html {
      font-size: 50%;
    }
  }
`;
