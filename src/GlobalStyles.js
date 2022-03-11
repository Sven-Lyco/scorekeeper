import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Patrick Hand', cursive;
    font-size: 112.5%;
    line-height: 1.5;
  }
  
  h1 {
    background-color: #444;
    color: whitesmoke;
    text-align: center;
    margin: 0;
    width: 100%;
  }
  h2 {
    margin:0;
    padding:0;
  }
`;
