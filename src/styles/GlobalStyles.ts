import React from 'react';
import { Global, css } from '@emotion/react';

export const GlobalStyles = () => {
  return React.createElement(Global, {
    styles: css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html, body {
        width: 100%;
        overflow-x: hidden;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000;
        color: #fff;
      }

      #root {
        width: 100%;
        min-height: 100vh;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `
  });
};