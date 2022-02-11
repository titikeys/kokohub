import React from "react";
import "../Timer/timer.css";
import "../Button/button.css";
import CountDown from "../Countdown";
import Button from "../Button/Button";
import img from "../../img/flier.png";
import img1 from "../../img/soph1.png";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

const Timer = () => {
  const hoursMinSecs = { hours: 8, minutes: 59, seconds: 59 };
  return (
    <div className="T">
      <div className="I">
        <Bounce Right delay="500">
          {" "}
          <img className="img" src={img} alt="image" />{" "}
        </Bounce>
      </div>
      <div className="C">
        <CountDown hoursMinSecs={hoursMinSecs} />
        <Zoom bottom delay="1000">
          <Button />
        </Zoom>
      </div>
      <div className="p-div">
        <h3 className="P">
          Today more than ever before, it is so important to have extra sources
          of income and to have at least one of them ONLINE.
          <br />
          <b className="B">Why? you may ask</b>
          <br />
          This is because smart people have learned having a business online is
          one of the easiest and most effective ways to create wealth and even
          if one income stream closes the online one at least must function and
          generate an income. Now let me show you this
          <b className="B"> NO-FAIL system</b> I use to generate 6 Figures
          monthly. I call this system
          <b className="B"> AFFILIATE marketing</b>.
        </h3>
      </div>
      <h2 className="H">Here's How It Works</h2>
      <h3 className="P">
        I simply recommend or talk about other someone’s product and when people
        buy, I get paid a commission of #25k. I just need to sell 10 of it to
        make #250k monthly and 24 of it to make #600k monthly. Outrageous right?
        Well there are some companies who are making it real big using affiliate
        marketing. For instance a company like Uber and taxify own no cars but
        provide car service. Airhnb owns no house but provide housing and many
        others. What this companies do to make smart money is to link people up
        to other people who provide the service and get paid a nice commission.
        Today, I want to hand you this Cash Spilling System and teachings for
        <b className="B"> FREE</b> so you too can get started with earning
        online. And in this <b className="B">FREE Training</b>, I want to hold
        you by the Hand and teach you a step by step Fail Proof Guide on how to
        start earning off Affiliate Marketing without delay.
      </h3>
      <Zoom bottom delay="1000">
        <Button />
      </Zoom>
      <div className="I-2">
        <img className="img" src={img1} alt="image" />
      </div>
      <h3 className="P P1">
        But that’s not all, in order for you to earn at least 250k monthly you
        need a badass marketing strategy. You should not miss this Training
        because with the current state of our Country, everyone needs more than
        one source of income to live Comfortably and one of the best sources to
        tap into is the Affiliate Marketing system because you not only earn big
        from the comfort of your room, you get paid every week! The best part is
        that I am willing to hold you by the hand and teach you a step by step
        Fail Proof Formula on how to get Started with earning off this lucrative
        Industry for FREE with no hidden fees attached.
        <b className="B"> CLick the 'JOIN THE MASTER CLASS NOW' BUTTON </b>
        below to join the Training as this Offer goes away after now.
      </h3>
      <Zoom bottom delay="1000">
        <Button />
      </Zoom>
    </div>
  );
};

export default Timer;

/*<div className="countdown">
    <div className="container-hour">
      <p className="hour">00</p>
      <h3>Hrs</h3>
    </div>
    :
    <div className="container-minute">
      <p className="minute">00</p>
      <h3>Mins</h3>
    </div>
    :
    <div className="container-second">
      <p className="seconds">00</p>
      <h3>Secs</h3>
    </div>
  </div>*/
