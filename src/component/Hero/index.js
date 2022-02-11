import React from "react";
import soph from "../../img/soph.png";
import "../Hero/index.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";

const HeroSection = () => {
  return (
    <>
      <div className="show">
        <h1 className="h">
          THE SUCCESSFUL SYSTEM ON HOW TO MAKE <mark>100 - 300K</mark> MONTHLY
        </h1>
        <p className="p1">
          Do You Know You Can Start Your Own Online Business WITH VERY LITTLE
          CAPITAL And Just YOUR SMARTPHONE
        </p>
        <p className="p2">JOIN OUR FREE MASTERCLASS TO KNOW HOW.</p>
      </div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <Flip top delay="500">
              {" "}
              <h2 className="i-intro">hello my name is</h2>{" "}
            </Flip>
            <Rotate Bottom Left delay="1000">
              {" "}
              <h1 className="i-name">Sophia Eughorieta</h1>
            </Rotate>
            <div className="i-desc">I am a Professional</div>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web developer</div>
                <div className="i-title-item">Affiliate Marketer</div>
                <div className="i-title-item">Pharmacist</div>
                <div className="i-title-item">Writer</div>
                <div className="i-title-item">Web developer</div>
              </div>
            </div>
          </div>
        </div>

        <div className="i-right">
          <div className="i-bg"></div>
          <Fade right delay="2000">
            <img src={soph} alt="" className="i-img" />
          </Fade>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
