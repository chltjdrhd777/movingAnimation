import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import logo from "images/logo.png";
import { container, nav, header, navList } from "layout/e.header";

function Header({ children }: PropsWithChildren<{}>) {
  return (
    <>
      {/* 가장 큰 컴포넌트 단위를 나누십시오 (header) */}
      <header className={`header ${header}`}>
        {/* 그 내부에는 하나의 container을 지정해 두는 것이 관습인 것 같습니다 */}
        <section className={`container ${container}`}>
          {/* 내부는 기능별로 나누십시오 = 현재는 nav가 헤더에서의 주 역할이 되고 있습니다 */}
          <nav className={`nav ${nav}`}>
            <Link to="/" className="logo__box">
              <img src={logo} alt="" />
            </Link>

            {/* 보통 리스트에는 클래스 이름을 __list로, 아이템은 __item으로 붙여씁니다 */}
            <ul className={`nav__list ${navList}`}>
              <li className="nav__item">
                <Link to="/About">About</Link>
              </li>

              <li className="nav__item">
                <Link to="/Case Study">Case Study</Link>
              </li>

              <li className="nav__item">
                <Link to="/FAQ">FAQ</Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      {children}
    </>
  );
}

export default Header;
