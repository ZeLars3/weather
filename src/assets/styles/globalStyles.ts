import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;

    &::-webkit-scrollbar {
      width: 11px;
    }

    &::-webkit-scrollbar-track {
      background: white;
    }

    &::-webkit-scrollbar-thumb {
      background: #434343 0% 0% no-repeat padding-box;
      border-radius: 8px;
    }
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Rubik', sans-serif;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`
