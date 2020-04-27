import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body,
html,
#root {
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
  height: 100%;
  width: 100%;
}
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
}
button:focus,
input:focus {
  outline: none;
}
@media screen and (min-width: 600px) {
  body {
    font-size: 18px;
  }
}
@media screen and (min-width: 900px) {
  body {
    font-size: 20px;
  }
}

`;
