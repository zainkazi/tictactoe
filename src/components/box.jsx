import React from "react";
import "./box.css";

const Box = (props) => {
  return (
    <button
      disabled={props.currentBox.disabler}
      onClick={() => props.onButtonClick(props.currentBox)}
      className="box"
    >
      {props.currentBox.value}
    </button>
  );
};

export default Box;
