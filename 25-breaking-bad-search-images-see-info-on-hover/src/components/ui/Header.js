import React from "react";
import logo from "../../img/logo.png";
export const Header = () => {
  return (
    <div>
      {/* center class makes it flexbox and sorts vertically and horizontally as center */}
      <header className="center">
        <img src={logo} alt="" />
      </header>
    </div>
  );
};
