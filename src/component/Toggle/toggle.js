import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./toggle.css";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <div className="flipswitch">
        <input
          type="checkbox"
          name="flipswitch"
          className="flipswitch-cb"
          id="fs"
          onClick={handleClick}
        />
        <label className="flipswitch-label" for="fs">
          <div className="flipswitch-inner"></div>
          <div className="flipswitch-switch"></div>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
