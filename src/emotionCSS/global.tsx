import React from "react";
import { Global, css } from "@emotion/react";
import { calcRem } from "emotionCSS/theme";

const globalCSS = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: ${calcRem(10)};
  }

  body {
    font-size: ${calcRem(26)};
    font-family: "Montserrat", sans-serif;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }
`;

function GlobalStyle() {
  return <Global styles={globalCSS} />;
}

export default GlobalStyle;
