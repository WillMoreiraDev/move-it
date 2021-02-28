import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #DCDDE0;
    --text: #666666;
    --text-highlight: #B3B9FF;
    --title: #2E384d;
    --red: #E83F5B;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
  }

  body {
    background: var(--background);
    color: #666;

  }

  body, input, textarea, button {
    font: 400 1rem/1 "Inter";
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    width: 100%;
    height: 100vh;
    max-width: 960px;
    margin: 0 auto;
    padding: 2.5rem 0px;
  }
`
