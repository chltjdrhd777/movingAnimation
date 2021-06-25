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
import {
  container,
  main,
  contents,
  contesnts_details,
  image_group,
} from "components/HomeMain/e.homemain";

function HomeMain() {
  return (
    <>
      {/* 컴포넌트의 최상단은 가장 큰 메인 태그가 존재합니다 */}
      <main className={main}>
        {/* 내부에 하나의 컨테이너를 두는 것은 관습인 것 같습니다 */}
        <section className={container}>
          {/* contents를 담는 태그는 article을 이용합니다 */}
          <article className={contents}>
            {/* content는 다양합니다. 그런데 그 중에서도 특히 detail만 다루기 위해 태그로 감쌌습니다 */}
            <div className={contesnts_details}>
              <h1>Time tarvel to the future</h1>
              <p>
                If you want to meet your future, please check this site and see
                what you want, what you want to be, and what you eagerly hope to
                get
              </p>

              {/* 이 폼은 특정 기능을 담당하고, 변화가 빈번히 생기므로 따로 추출합니다 */}
              <ArticleFormMain />

              {/* nav 아이콘들입니다. 하지만 그 크기가 작은 리스트라서, 클래스를 따로 지정했습니다 */}
              <nav>
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
              </nav>
            </div>

            {/* 가장 큰 컨테이너에는 css를 inline으로 주지만, 자식들은 scss를 이용합니다*/}
            <div className={image_group}>
              <img src={banner5} alt="" className="hue-rotate" />
              <img src={banner4} alt="" className="hue-rotate" />
            </div>
          </article>
        </section>

        <img src={liq1} alt="" className="blob" />
        <img src={liq2} alt="" className="blob" />
        <img src={liq3} alt="" className="blob" />
        <img src={liq6} alt="" className="blob" />
      </main>
    </>
  );
}

export default HomeMain;
