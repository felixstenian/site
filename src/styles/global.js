import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /** Importando fonte */
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  /** Reset */
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  /** Ocupando altura máxima da tela */

  html, body, #root {
    height: 100%
  }

  /** Deixando fontes mais definidas */

  body {
    
    -webkit-font-smoothing: antialiased;
  }

  /** Adicionando fonte */

  body, input, button {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }

  /** Resetando links */

  a {
    text-decoration: none;
  }

  /** Resetando listas */

  ul {
    list-style: none;
  }

  /** Alterando cursor do mouse */

  button {
    cursor: pointer;
  }

`;
