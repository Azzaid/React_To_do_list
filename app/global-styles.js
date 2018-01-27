import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: rgb(48, 48, 48);
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }
`;
