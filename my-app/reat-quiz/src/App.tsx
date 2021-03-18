
import './App.css';
import React, { useState } from 'react';

 const Game =()=>{
  return(
    <div className="game">
      <div className="game-board">
        <Board/>
      </div>
    </div>
  );
}
const Board =()=> {
  const [squaress,setsquaress] = useState(Array(9).fill(null));
  const [xIsNextt,setxIsNextt] = useState(true);
  const status:string ='Next player:' + (xIsNextt? 'X':'O');

   const Columboard =(num1:number,num2:number)=>{
    let colums=[];
    let nextnum:number = 0;
    let currennum:number= 0;
    for(let i =0;i<= num1; i++)
    {
      if(i == num2)
      {
        colums.push(
        <div className="board-row">
        {Rowboard(currennum,num2)}
        </div>)
        nextnum = num2+num2;
        currennum = num2;
      }
      if(i == nextnum)
      {
        colums.push( 
        <div className="board-row">
        {Rowboard(currennum,nextnum)}
        </div>)
         nextnum = nextnum + num2;
        currennum =currennum + num2;
      }
    }
    return colums;
  }
  const Rowboard=(num1:number,num2:number)=> {
    let rows = [];
    for(let i =0;i< num2; i++)
    {
      if(i >= num1 && i < num2)
      rows.push(renderSquare(i));
    }
    return rows;
  }
  const renderSquare=(i:number)=> {
    return (
      <Square
        onClick={() => handleClick(i)}
        value={squaress[i]}
      />
    );
  }
  const handleClick=(i:number)=>{
    const squares =squaress.slice();
    squares[i] = xIsNextt ? 'X':'O';
      setsquaress(squares)
      setxIsNextt(!xIsNextt)
  }
  return(
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {Columboard(25,5)}
      </div>
    </div>
  );
}
const Square =(props:any)=>{
  return(
    <button className="square" onClick = {props.onClick}>
      {props.value}
    </button>
  );
}
export default Game;
