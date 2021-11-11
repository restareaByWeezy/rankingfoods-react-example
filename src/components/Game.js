import { render } from '@testing-library/react';
import React, { useState, useEffect } from "react";
import Winner from './Winner';
import BeforeWinner from './BeforeWinner';

const Game = () => {
  const items = ["떡볶이", "순대", "김밥", "라면"];

  const [isFinished, setIsFinished] = useState(false)
  const [foods, setFoods] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  const [isChecked, setIschecked] = useState([]);
  const [title, setTitle] = useState('4강')


  const startGame = useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setFoods(items);
    setDisplays([items[0], items[1]]);
  }, []);


  const clickHandler = food => () => {
    if (foods.length <= 2) {
      if (winners.length === 0) {
        //승자
        setTitle('승자')
        setDisplays([food]);
        setIsFinished(true)
      } else {
        //2강
        let updatedFood = [...winners, food];
        setTitle('2강')
        setFoods(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (foods.length > 2) {
      //승자 배열에 추가
      setWinners([...winners, food]);
      //4강의 2경기 화면에 랜더링
      setDisplays([foods[2], foods[3]]);
      //다 한거는 잘라주기
      setFoods(foods.slice(2));
    }
  };


  console.log(title)

  if(isFinished) {
    return <Winner startGame={startGame}></Winner>
  } else return <BeforeWinner title={title} isChecked={isChecked} displays={displays} clickHandler={clickHandler}></BeforeWinner>
};

export default Game;
