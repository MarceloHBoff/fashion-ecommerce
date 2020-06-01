import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 800px) {
      font-size: 50%;
    }
  }

  body {
    background-color: #eee;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', serif;
  }

  button {
    cursor: pointer;
    border: 0;
    background: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
