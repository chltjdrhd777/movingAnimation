import { css } from "@emotion/css/macro";

const header = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
`;

const nav = css`
  height: 10rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const container = css`
  max-width: 125rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const navList = css`
  display: flex;
  list-style: none;
  & .nav__item:not(:last-child) {
    margin-right: 5rem;
  }
`;

export { nav, container, header, navList };
