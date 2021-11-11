import React from 'react';
import { StyleBox  } from './style';
import Game from './Game';

const Winner = ({startGame}) => {
    const restartGame = () => {
        startGame()
    }


    return (
        <StyleBox>
            <div className='title'>승자</div>
            <div>승자는 winner 입니다.</div>
            <div className='submit-button' onClick={restartGame}>처음으로</div>
        </StyleBox>
    );
};

export default Winner;