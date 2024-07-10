import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import logo2 from "../assets/codechef.png";
import logo1 from "../assets/codeforces.png";
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const navigateToUrl = (url) => {
    window.open(url, "_blank");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="section1">
        <div className="bio animated fadeIn">
          <h1 className="bio-heading">
            One place for all your{" "}
            <span className="highlight">CODING PLATFORM</span> needs!
          </h1>
        </div>
      </div>

      <div className="half1"></div>
      <div className="half2">
        <div className="bio animated fadeIn">
          <h1 className="half2-heading">
            <span>Discover & Explore</span>
          </h1>
          <h2>
            Embark on an elevated coding and development journey with CPTracker,
            your ultimate companion in competitive programming excellence. Dive
            into a world where every line of code counts, supported by intuitive
            tools and insightful analytics.
          </h2>
          <button className="half2-login" onClick={() => navigate("/login")}>
            Log In
          </button>
        </div>
        <svg className="wave" viewBox="0 0 1440 320">
          <path
            fill="#02132d"
            fillOpacity="1"
            d="M0,192L60,186.7C120,181,240,171,360,149.3C480,128,600,96,720,106.7C840,117,960,171,1080,181.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="content-sec2">Check Contests</div>

      <div className="section2">
        <Slider {...sliderSettings} className="platform-slider">
          <div className="platform-box codeforces-box animated slideInLeft">
            <div className="box-content">
              <h2>Codeforces</h2>
              <img src={logo1} alt="Codeforces Logo" className="logo" />
              <p>
                Online competitive programming platform with a global community
                and regular contests.
              </p>
              <button
                onClick={() => navigateToUrl("https://codeforces.com/")}
                className="platform-button"
              >
                Visit Codeforces
              </button>
            </div>
          </div>

          <div className="platform-box codechef-box animated slideInRight">
            <div className="box-content">
              <h2>CodeChef</h2>
              <img src={logo2} alt="CodeChef Logo" className="logo" />
              <p>
                Competitive programming platform featuring coding contests and
                challenges.
              </p>
              <button
                onClick={() => navigateToUrl("https://www.codechef.com/")}
                className="platform-button"
              >
                Visit CodeChef
              </button>
            </div>
          </div>
        </Slider>
      </div>

      <div className="section3">
        <div className="bio animated fadeIn">
          <h2 className="bio-subheading">
            Filter contests based on various criteria and view <br></br>contest
            details such as remaining time, duration, and more..
          </h2>
        </div>

        <div className="contest-box animated zoomIn">
          <h2 className="contest-heading">Upcoming Contests</h2>
          <p className="contest-description">
            Stay updated with upcoming coding contests and challenges from
            various platforms.
          </p>
          <button
            className="contest-button"
            onClick={() => navigate("/contest")}
          >
            Explore Contests
          </button>
        </div>
      </div>

      <div className="footer animated fadeIn">
        <p>All rights are reserved &copy;CPTracker</p>
      </div>
    </div>
  );
};

export default Homepage;
