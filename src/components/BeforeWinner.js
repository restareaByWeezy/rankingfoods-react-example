import React from "react";
import { StyleBox } from "./style";
import Game from "./Game";

const BeforeWinner = ({title, isChecked, displays, clickHandler}) => {
  return (
    <StyleBox>
      <div className='title'>{title}</div>
      {displays.map((d, index) => {
        return (
          <div className='food-list' key={index}>
            <input
              className='food-input'
              type='radio'
              name='foods'
              value={isChecked}
            />
            <span className='food-name'>{displays[index]} </span>
          </div>
        );
      })}
      <div className='submit-button' onClick={clickHandler}>
        다음으로
      </div>
    </StyleBox>
  );
};

export default BeforeWinner;
