import { css } from "@emotion/css/macro";
import spiral from "images/bg-pat.png";

const main = css`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, #3b4679, #2b3153);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: 100vh;
    background-image: url(${spiral});
    background-size: cover;
    opacity: 0.6;
    z-index: -1;
  }
`;

const container = css``;

const contents = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export { container, main, contents };
