import React, { useEffect, useState } from "react";
import Box from "./box";
import "./box.css";

const Board = () => {
  let commonValue = "";
  const [flag, setFlag] = useState(true);
  const [boxes, setBoxes] = useState([
    { id: 1, value: commonValue, disabler: false },
    { id: 2, value: commonValue, disabler: false },
    { id: 3, value: commonValue, disabler: false },
    { id: 100, value: "useless", disabler: false },
    { id: 4, value: commonValue, disabler: false },
    { id: 5, value: commonValue, disabler: false },
    { id: 6, value: commonValue, disabler: false },
    { id: 200, value: "useless", disabler: false },
    { id: 7, value: commonValue, disabler: false },
    { id: 8, value: commonValue, disabler: false },
    { id: 9, value: commonValue, disabler: false },
  ]);

  const handleClick = (currentBox) => {
    const newBoxes = [...boxes];
    const index = newBoxes.indexOf(currentBox);
    if (flag === true) {
      newBoxes[index].value = "O";
    } else {
      newBoxes[index].value = "X";
    }
    newBoxes[index].disabler = true;
    setFlag(!flag);
    setBoxes(newBoxes);
  };

  // const handleWinner = () => {
  //   const disabledBoxes = [...boxes];
  //   const newDisabledBoxes = disabledBoxes.map((box) => {
  //     box.disabler = false;
  //   });
  //   setBoxes(newDisabledBoxes);
  // };

  useEffect(() => {
    if (
      (boxes[0].value === boxes[1].value &&
        boxes[1].value === boxes[2].value &&
        boxes[2].value !== "[-]") ||
      (boxes[4].value === boxes[5].value &&
        boxes[5].value === boxes[6].value &&
        boxes[5].value !== "[-]") ||
      (boxes[8].value === boxes[9].value &&
        boxes[9].value === boxes[10].value &&
        boxes[10].value !== "[-]") ||
      (boxes[0].value === boxes[4].value &&
        boxes[4].value === boxes[8].value &&
        boxes[8].value !== "[-]") ||
      (boxes[1].value === boxes[5].value &&
        boxes[5].value === boxes[9].value &&
        boxes[9].value !== "[-]") ||
      (boxes[2].value === boxes[6].value &&
        boxes[6].value === boxes[10].value &&
        boxes[10].value !== "[-]") ||
      (boxes[0].value === boxes[5].value &&
        boxes[5].value === boxes[10].value &&
        boxes[10].value !== "[-]") ||
      (boxes[2].value === boxes[5].value &&
        boxes[5].value === boxes[8].value &&
        boxes[5].value !== "[-]")
    ) {
      //handleWinner();
      if (flag === true) {
        console.log(boxes);
        console.log("X has won.");
      } else {
        console.log(boxes);
        console.log("O has won");
      }
    }
  }, [boxes, flag]);

  return (
    <div className="game">
      <div className="play-button">Play</div>
      <div className="board">
        {boxes.map((box) => {
          if (box.id % 100 === 0) {
            return <br key={box.id} />;
          }
          return (
            <Box
              key={box.id}
              onButtonClick={handleClick}
              currentBox={box}
              boxValue={box.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
