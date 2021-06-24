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

const contesnts_details = css`
  max-width: 80%;

  //? h1
  & > h1 {
    font-size: 6rem;
    color: white;
    margin-bottom: 1rem;
  }

  //? p
  & > p {
    color: #929fc5;
    margin-bottom: 2.5rem;
  }

  //? form
  & > form {
    margin-bottom: 2.5rem;

    & input {
      border: none;
      outline: none;

      border-radius: 5rem;
      padding: 2rem;
    }

    & input:nth-child(1) {
      width: calc(100% - 0.5rem);
    }

    & input:nth-child(2) {
      width: 10rem;
      background-image: linear-gradient(to right, #ff83d5, #ffccb0);
      color: white;
      cursor: pointer;
      margin-left: -10rem;

      &:hover {
        background-image: linear-gradient(to left, #ff83d5, #ffccb0);
      }
    }
  }

  & > nav {
    display: flex;

    & a {
      color: #929fc5;
      width: 3rem;
      height: 3rem;
      border: 1px solid #929fc5;
      border-radius: 50%;
      display: flex;
      &:hover {
        background-image: linear-gradient(to right, #a971ff, #00f0ff);
        color: white;
      }

      & svg {
        margin: auto;
      }
    }
  }
`;

export { container, main, contents, contesnts_details };
