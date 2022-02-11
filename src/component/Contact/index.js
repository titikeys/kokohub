import React, { useContext, useRef, useState } from "react";
import "../Contact/index.css";
import emailjs from "emailjs-com";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { BsGoogle, BsFillGeoAltFill } from "react-icons/bs";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formref = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mzndqge",
        "template_51fnjru",
        formref.current,
        "user_S87bgATa61k7qImUctb9r"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <BsTelephoneOutboundFill className="c-phone" />
              +234 8158736087
            </div>
            <div className="c-info-item">
              <BsGoogle className="c-mail" />
              Sophiaeghorieta@gmail.com
            </div>
            <div className="c-info-item">
              <BsFillGeoAltFill className="c-location" />
              +234 8158736087
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always ready for freelancing
            if the right project comes along.
          </p>
          <form ref={formref} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />

            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="7"
              placeholder="message"
              name="message"
            />
            <button className="btn btn-danger">Submit</button>
            <br />
            {done && "You have submitted succesfully thank you !!!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
