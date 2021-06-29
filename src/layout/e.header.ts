import { css } from "@emotion/css/macro";
import { device } from "emotionCSS/theme";

const header = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
`;

const container = css`
  max-width: 125rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const nav = css`
  height: 10rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & .logo {
    display: block;
    width: 8rem;
  }
`;

const navList = css`
  display: flex;
  list-style: none;
  & .nav__item {
    font-size: 1.2rem;
    text-transform: uppercase;
    transition: opcity 0.3s;
    & > a {
      color: white;
      font-size: 1.3rem;
      font-weight: 700;
    }
    &:hover {
      opacity: 0.6;
    }
  }

  & .nav__item:not(:last-child) {
    margin-right: 5rem;
  }
`;

const headerMedia = css`
  @media ${device.tablet} {
    ${`.${nav}`} {
      align-items: center;
    }
  }
`;

export { nav, container, header, navList, headerMedia };
