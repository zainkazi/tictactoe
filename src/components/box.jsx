import React from "react";

const Box = (props) => {
  return (
    <button
      disabled={props.currentBox.disabler}
      onClick={() => props.onButtonClick(props.currentBox)}
      className="btn btn-primary btn-lg m-1"
    >
      {props.currentBox.value}
    </button>
  );
};

export default Box;
