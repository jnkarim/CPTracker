import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import logo2 from "../assets/codechef.png";
import logo1 from "../assets/codeforces.png";
import "../index.css"; // Ensure your CSS file is correctly imported

const Homepage = () => {
  const navigate = useNavigate();

  const navigateToUrl = (url) => {
    window.open(url, "_blank"); // Opens the URL in a new tab
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
    <div className="homepage">
      <div className="bio animated fadeIn">
        <h1>
          One place for all your{" "}
          <span
            className="highlight"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            coding platform
          </span>{" "}
          needs!
        </h1>
      </div>

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
              style={{ padding: "10px 20px", marginTop: "45px" }}
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
              style={{ padding: "10px 20px", marginTop: "45px" }}
            >
              Visit CodeChef
            </button>
          </div>
        </div>
      </Slider>

      <div className="bio animated fadeIn">
        <h1>
          <span
            className="highlight"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Discover
          </span>{" "}
          the perfect <br /> coding competition for you!
        </h1>

        <h2
          style={{
            color: "black",
            paddingTop: "60px",
            fontWeight: "300",
            fontSize: "36px", // Adjust font size to be more visible and stylish
            fontFamily: "'Pacifico', cursive",
          }}
        >
          Filter contests based on various criteria and view contest details
          such as remaining time, duration, and more..!
        </h2>
      </div>

      <div className="contest-box animated zoomIn">
        <h2 style={{ marginBottom: "30px" }}>Upcoming Contests</h2>
        <p
          style={{ fontSize: "17px", marginBottom: "20px", lineHeight: "1.3" }}
        >
          Stay updated with upcoming coding contests and challenges from various
          platforms.
        </p>
        <button
          style={{
            fontSize: "16px",
            padding: "12px 24px",
            backgroundColor: "black",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease", // Smooth transition effect
          }}
          onClick={() => navigate("/contest")}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2e0080")} // Change background color on hover
          onMouseOut={(e) => (e.target.style.backgroundColor = "black")} // Revert to original background color on mouse out
        >
          Explore Contests
        </button>
      </div>

      <div className="footer animated fadeIn">
        <p>All rights are reserved &copy;CPTracker</p>
      </div>
    </div>
  );
};

export default Homepage;
