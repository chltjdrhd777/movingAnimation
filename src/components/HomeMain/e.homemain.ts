import { css } from "@emotion/css/macro";
import spiral from "images/bg-pat.png";
import { keyframes } from "@emotion/react/macro";

//!anmation
const moveUp = keyframes`
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(2rem);
  }
`;

const moveDown = keyframes`
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(-2rem);
  }
`;

const hueRoate = keyframes`
  from {
    filter:hue-rotate(0);
  }
  to{
    filter:hue-rotate(360deg);
  }
`;

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

  & > img[class~="blob"] {
    position: absolute;
    z-index: -1;
    animation: ${hueRoate} 2s infinite alternate;
  }

  //? position abolute 상태이면 justify-content:center 이 제대로 먹히지 않는다
  //? 따라서, 각각에 대해서 중앙정렬을 해야 할 경우, left에 50%를 주고, transform으로 반대속성을 줘서 정렬한다
  & > img[class~="blob"]:nth-of-type(1) {
    top: -11rem;
    left: 50%;
    transform: translateX(-50%);
  }

  & > img[class~="blob"]:nth-of-type(2) {
    top: 15rem;
    left: -17rem;
  }

  & > img[class~="blob"]:nth-of-type(3) {
    right: 5rem;
    bottom: -24rem;
  }

  & > img[class~="blob"]:nth-of-type(4) {
    left: -21rem;
    bottom: -17rem;
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

      &:nth-child(1) {
        width: calc(100% - 0.5rem);
      }

      &:nth-child(2) {
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
  }

  //? nav
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

const image_group = css`
  text-align: center;
  position: relative;
  animation: ${hueRoate} 2s infinite alternate;

  & > img:nth-of-type(1) {
    animation: ${moveUp} 2s infinite alternate;
  }

  & > img:nth-of-type(2) {
    position: absolute;
    top: 2.5rem;
    left: -1rem;
    z-index: 10;
    animation: ${moveDown} 2s infinite alternate;
  }
`;

export { container, main, contents, contesnts_details, image_group };
