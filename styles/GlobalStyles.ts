'use client';

import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: ${theme.color.BLACK}
  }
  
  body,
  input,
  select,
  textarea,
  button {
    font-family: 'Pretendard', system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body:has([role="dialog"]) {
    overflow: hidden;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    outline: none;
    color: ${theme.color.BLACK};
  }

  a:hover, a:active, a:visited {
    text-decoration: none;
  }

  input:disabled {
    background: none;
    cursor: not-allowed;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }
  
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;

    border: 0;
    outline: 0;
    border-collapse: collapse;
    
    font-size: 100%;
    
    background: transparent;
    
    vertical-align: baseline;
  }

  *.hidden {
    position: absolute;
    overflow: hidden;

    width: 1px;
    height: 1px;
    margin: 0;
    padding: 0;
    
    border: 0;
    
    white-space: nowrap;
    
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
  }
`;

export default GlobalStyle;
