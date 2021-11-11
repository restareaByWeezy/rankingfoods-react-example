import React from "react";
import styled from "styled-components";
import Game from './components/Game';

const Template = styled.div`
  margin: auto;
  width: 500px;
  height: 700px;

  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.1);
  border-radius: 44px;
`;

const Title = styled.h1`
  position: relative;
  width: 292px;
  height: 53px;
  margin: 0;
  padding-left: 64px;
  padding-right: 144px;
  padding-top: 75px;
  padding-bottom: 60px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: 0.015em;

  color: #000000;
`;

const Inputs = styled.div `
  
`

const Button = styled.button`
  display: flex;
  margin: 100% auto;
  margin-bottom: 54px;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  width: 400px;
  height: 70px;

  background: #000000;
  border-radius: 8px;

  font-size: 32px;
  line-height: 39px;

  text-align: center;
  letter-spacing: 0.015em;

  color: #ffffff;
`;

const App = () => {
  return (
    <Game></Game>
  );
};

export default App;
