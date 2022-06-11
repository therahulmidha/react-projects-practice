import React from "react";
import spinner from "../../img/spinner.gif";

export const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: " 40px auto", display: "block" }}
        // Width and margin set to make it appear on center of screen
      />
    </div>
  );
};