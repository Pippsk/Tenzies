import React from "react";
import "./Die.scss";
const Die = ({ value, isHold, holdDie }) => {
  const styles = { backgroundColor: isHold ? "green" : "rgb(160, 91, 91)" };
  return (
    <div className="die" style={styles} onClick={holdDie}>
      <h2>{value}</h2>
    </div>
  );
};

export default Die;
