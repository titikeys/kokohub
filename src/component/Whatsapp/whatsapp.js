import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import "../Timer/timer.css";
import whatsaap from "../../img/whatsapp.png";

const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <a
        title="whatsapp us"
        href="https://wa.me/08102662030?text=Hello%20coach%20Sophia%20I'm%20interested%20in%20your%20free%20Affiliate%20Marketing%20Training"
        target="_blank"
      >
        <img src={whatsaap} className="whatsapp-img" alt="" />
      </a>
    </div>
  );
};

export default Whatsapp;
