import React from "react";
import ArticleFormMain from "./ArticleForm";
import { Link } from "react-router-dom";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import AirplayIcon from "@material-ui/icons/Airplay";
import banner5 from "images/liq-5.png";
import banner4 from "images/liq-4.png";
import liq1 from "images/liq-1.png";
import liq2 from "images/liq-2.png";
import liq3 from "images/liq-3.png";
import liq6 from "images/liq-6.png";
import { container } from "components/HomeMain/e.homemain";

function HomeMain() {
  return (
    <>
      {/* 컴포넌트의 최상단은 가장 큰 메인 태그가 존재합니다 */}
      <main className="main">
        {/* 내부에 하나의 컨테이너를 두는 것은 관습인 것 같습니다 */}
        <section className={`container ${container}`}>
          {/* contents를 담는 태그는 article을 이용합니다 */}
          <article className="content">
            {/* content는 다양합니다. 그런데 그 중에서도 특히 detail만 다루기 위해 태그로 감쌌습니다 */}
            <div className="content__details">
              <h1 className="content__title">Time tarvel to the future</h1>
              <p className="content__paragraph">
                If you want to meet your future, please check this site and see
                what you want, what you want to be, and what you eagerly hope to
                get
              </p>

              {/* 이 폼은 특정 기능을 담당하고, 변화가 빈번히 생기므로 따로 추출합니다 */}
              <ArticleFormMain />

              {/* nav 아이콘들입니다. 하지만 그 크기가 작은 리스트라서, 클래스를 따로 지정했습니다 */}
              <nav className="sm-list">
                <Link to="#">
                  <AccessAlarmIcon />
                </Link>
                <Link to="#">
                  <AccessibilityNewIcon />
                </Link>
                <Link to="#">
                  <AddLocationIcon />
                </Link>
                <Link to="#">
                  <AirplayIcon />
                </Link>

                <div className="image-group">
                  <img src={banner5} alt="" />
                  <img src={banner4} alt="" />
                </div>

                <div className="liq-group">
                  <img src={liq1} alt="" />
                  <img src={liq2} alt="" />
                  <img src={liq3} alt="" />
                  <img src={liq6} alt="" />
                </div>
              </nav>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default HomeMain;
