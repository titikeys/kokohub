import React from "react";
import "../About/about.css";
import about from "../../img/pexels.jpg";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <Slide Left delay="1500">
            <img src={about} alt="" className="a-img" />
          </Slide>
        </div>
      </div>
      <div className="a-right">
        <LightSpeed Right delay="500">
          {" "}
          <h1 className="a-title">About Me</h1>
        </LightSpeed>
        <p className="a-sub"></p>
        <p className="a-desc">
          I am a pharmacist, a web-developer, Video Editing expert and an
          Emerging Business Coach, Having generated multiple 6 figures online, i
          am set out to teach smart solpreneurs how to start and scale to
          earning minimum 6 figures annually from their respective business.
          Provide a platform through training and bring to awareness available,
          relevant and updated skills needed to add value and succeed in your
          marketplace
        </p>
        <a
          href="https://wa.me/08102662030?text=Hello%20coach%20Sophia%20I'm%20interested%20in%20your%20free%20Affiliate%20Marketing%20Training"
          target="_blank"
        >
          <Bounce Bottom delay="2000">
            {" "}
            <button className="btn btn-danger">Learn More</button>
          </Bounce>
        </a>
      </div>
    </div>
  );
};

export default About;
