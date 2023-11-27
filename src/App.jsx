import Slider from "react-slick";

import Bas_desktop from "../src/assets/bas_desktop.svg";
import Bas_mobile from "../src/assets/bas_mobile.svg";
import Bas_tablet from "../src/assets/bas_tablet.svg";
import FB_desktop from "../src/assets/fb_desktop.svg";
import FB_mobile from "../src/assets/fb_mobile.svg";
import FB_tablet from "../src/assets/fb_tablet.svg";

import "./App.scss";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <body>
        <article className="athlets_container">
          <div className="header">
            <header>
              <h1 className="main_header">ATHLETS</h1>
            </header>
          </div>
          <div className="sub_header-1">
            <section>
              <div className="sub_header--wrapper">
                <div className="sub_header--li">01</div>
                <h3 className="sub_header">CONNECTION</h3>
              </div>
              <p className="paragraph">
                Connect with coaches directly, you can ping coaches to view
                profile.
              </p>
            </section>
          </div>
          <div className="sub_header-2">
            <section>
              <div className="sub_header--wrapper">
                <div className="sub_header--li">02</div>
                <h3 className="sub_header">COLLABORATION</h3>
              </div>
              <p className="paragraph">
                Work with other student athletes to increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </p>
            </section>
          </div>
          <div className="sub_header-3">
            <section>
              <div className="sub_header--wrapper">
                <div className="sub_header--li">03</div>
                <h3 className="sub_header">GROWTH</h3>
              </div>
              <p className="paragraph">
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc
              </p>
            </section>
          </div>
          <div className="img_container">
            <figure className="image-1">
              <picture>
                <source media="(min-width:1401px)" srcSet={FB_desktop} />
                <source media="(min-width:671px)" srcSet={FB_tablet} />
                <img src={FB_mobile} alt="football player" />
              </picture>
            </figure>
          </div>
          <div className="image-2"></div>
          <div className="image-3"></div>
          <div className="slider_wrapper">
            <Slider {...settings}>
              <div className="sub_header-slide">
                <section>
                  <div className="sub_header-slide--wrapper">
                    <div className="sub_header-slide--li">01</div>
                    <h3 className="sub_header">CONNECTION</h3>
                  </div>
                  <div className="paragraph_wrapper">
                    <p className="paragraph">
                      Connect with coaches directly, you can ping coaches to
                      view profile.
                    </p>
                  </div>
                </section>
              </div>
              <div className="sub_header-slide">
                <section>
                  <div className="sub_header-slide--wrapper">
                    <div className="sub_header-slide--li">02</div>
                    <h3 className="sub_header">COLLABORATION</h3>
                  </div>
                  <div className="paragraph_wrapper">
                    <p className="paragraph">
                      Work with other student athletes to increase visability.
                      When you share and like other players videos it will
                      increase your visability as a player. This is the team
                      work aspect to Surface 1.
                    </p>
                  </div>
                </section>
              </div>
              <div className="sub_header-slide">
                <section>
                  <div className="sub_header-slide--wrapper">
                    <div className="sub_header-slide--li">03</div>
                    <h3 className="sub_header">GROWTH</h3>
                  </div>
                  <div className="paragraph_wrapper">
                    <p className="paragraph">
                      Resources and tools for you to get better as a student
                      Athelte. Access to training classes, tutor sessions, etc
                    </p>
                  </div>
                </section>
              </div>
            </Slider>
          </div>
        </article>
        <article className="player_container">
          <div className="header">
            <header>
              <h1 className="main_header">PLAYERS</h1>
            </header>
          </div>
          <div className="sub_header-1">
            <section>
              <div className="sub_header--wrapper">
                <div className="sub_header--li">01</div>
                <h3 className="sub_header">CONNECTION</h3>
              </div>
              <p className="paragraph">
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </p>
            </section>
          </div>
          <div className="sub_header-2">
            <section>
              <div className="sub_header--wrapper">
                <div className="sub_header--li">02</div>
                <h3 className="sub_header">COLLABORATION</h3>
              </div>
              <p className="paragraph">
                Work with recruiter to increase your chances of finding talented
                athlete.
              </p>
            </section>
          </div>
          <div className="sub_header-3">
            <section>
              <div className="sub_header--wrapper">
                <div className="sub_header--li">03</div>
                <h3 className="sub_header">GROWTH</h3>
              </div>
              <p className="paragraph">
                Save your time, recruit proper athlets for your team.
              </p>
            </section>
          </div>
          <div className="img_container">
            <figure className="image-1">
              <picture className="img_container">
                <source media="(min-width:1401px)" srcSet={Bas_desktop} />
                <source media="(min-width:671px)" srcSet={Bas_tablet} />
                <img src={Bas_mobile} alt="basketball player" />
              </picture>
            </figure>
          </div>
          <div className="image-2"></div>
          <div className="image-3"></div>
          <div className="slider_wrapper">
            <Slider {...settings}>
              <div className="sub_header-slide">
                <section>
                  <div className="sub_header-slide--wrapper">
                    <div className="sub_header-slide--li">01</div>
                    <h3 className="sub_header">CONNECTION</h3>
                  </div>
                  <div className="paragraph_wrapper">
                    <p className="paragraph">
                      Connect with talented athlete directly, you can watch
                      their skills through video showreels directly from Surface
                      1.
                    </p>
                  </div>
                </section>
              </div>
              <div className="sub_header-slide">
                <section>
                  <div className="sub_header-slide--wrapper">
                    <div className="sub_header-slide--li">02</div>
                    <h3 className="sub_header">COLLABORATION</h3>
                  </div>
                  <div className="paragraph_wrapper">
                    <p className="paragraph">
                      Work with recruiter to increase your chances of finding
                      talented athlete.
                    </p>
                  </div>
                </section>
              </div>
              <div className="sub_header-slide">
                <section>
                  <div className="sub_header-slide--wrapper">
                    <div className="sub_header-slide--li">03</div>
                    <h3 className="sub_header">GROWTH</h3>
                  </div>
                  <div className="paragraph_wrapper">
                    <p className="paragraph">
                      Save your time, recruit proper athlets for your team.
                    </p>
                  </div>
                </section>
              </div>
            </Slider>
          </div>
        </article>
      </body>
    </>
  );
}

export default App;
