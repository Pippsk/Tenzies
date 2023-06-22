import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
    </div>
  );
};

export default Header;
