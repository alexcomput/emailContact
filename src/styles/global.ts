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
    background: ${(props) =>
      props.theme.colors
        .background}; /* 2B193D    2C365E  484D6D 4B8F8C C5979D */
    color: ${(props) => props.theme.colors.text};
    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Nunito', serif;
    font-size: 1.4rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 300;
  }

  body::-webkit-scrollbar{
    width: 0.25rem;
  }

  body::-webkit-scrollbar-track {
    background: #1e1e24;
  }
  button {
    cursor:pointer;
  }

  @media (max-width: 768px){
    html {
      font-size: 50%;
    }
  }
  .translate-img{
    position: absolute;
    right: 50%;
    a {
      margin: 10px;
    }
  }
  .switch-component{
    position: absolute !important;
    right: 30px;
    top: 5px;
  }
`;
