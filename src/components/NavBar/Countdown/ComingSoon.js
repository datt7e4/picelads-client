import React from "react";
import Timer from "../Countdown/Timer";
import "../Error/Error.css";

const ComingSoon = ({ page }) => {
  return (
    <div className="App">
      <div className="container">
        <h1>
          {page}
          <br />
          Coming Soon
        </h1>
        <Timer />
      </div>
    </div>
  );
};
export default ComingSoon;
