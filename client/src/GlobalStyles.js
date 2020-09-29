import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Raleway', sans-serif;
    background-color: #F5F7F8;
  }

  h1 {
    margin: 40px 0 20px;
    color: #1A91DA;
  }

  h2 {
    text-align: center;
  }

  h3 {
    text-align: center;
    margin-bottom: 10px;
  }

  a {
    margin: 0 20px;
    padding-bottom: 5px;
    color: #1A91DA;
    font-size: 1.2em;
    font-weight: 700;
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`;
