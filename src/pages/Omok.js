import React, { useState, useEffect, useCallback } from "react";
import "../css/Omoks.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BOARD_SIZE = 15;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const GameBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Con = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 75%;
  margin: 0 auto;
`;
const Rule = styled.button`
  width: 100px;
  height: 30px;
  border-top: none;
  border-left: none;
  background-color: none;
  border-radius: 10px;
  cursor: pointer;
`;
const Regame = styled.button`
  width: 100px;
  height: 30px;
  border-top: none;
  border-left: none;
  background-color: none;
  border-radius: 10px;
  cursor: pointer;
`;
const Back = styled.button`
  width: 100px;
  height: 30px;
  border-top: none;
  border-left: none;
  background-color: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const Omok = () => {
  const [board, setBoard] = useState(
    Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState("black");
  const [winner, setWinner] = useState(null);

  const checkWinner = useCallback(() => {
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        if (board[i][j] !== null) {
          if (
            checkDirection(i, j, 1, 0) || // 가로
            checkDirection(i, j, 0, 1) || // 세로
            checkDirection(i, j, 1, 1) || // 대각선 (우하)
            checkDirection(i, j, 1, -1) // 대각선 (우상)
          ) {
            setWinner(board[i][j]);
            return;
          }
        }
      }
    }
  }, [board]);

  useEffect(() => {
    checkWinner();
  }, [board, checkWinner]);

  function checkDirection(row, col, rowIncrement, colIncrement) {
    const color = board[row][col];
    let count = 1;

    for (let i = 1; i < 5; i++) {
      const newRow = row + i * rowIncrement;
      const newCol = col + i * colIncrement;
      if (
        newRow < 0 ||
        newRow >= BOARD_SIZE ||
        newCol < 0 ||
        newCol >= BOARD_SIZE ||
        board[newRow][newCol] !== color
      ) {
        break;
      }
      count++;
    }

    for (let i = 1; i < 5; i++) {
      const newRow = row - i * rowIncrement;
      const newCol = col - i * colIncrement;
      if (
        newRow < 0 ||
        newRow >= BOARD_SIZE ||
        newCol < 0 ||
        newCol >= BOARD_SIZE ||
        board[newRow][newCol] !== color
      ) {
        break;
      }
      count++;
    }

    return count >= 5;
  }

  function handleClick(row, col) {
    if (board[row][col] === null && !winner) {
      const newBoard = [...board];
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
    }
  }

  function renderBoard() {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} className="board-row">
        {row.map((cell, colIndex) => (
          <div
            key={colIndex}
            className={`board-cell ${cell}`}
            onClick={() => handleClick(rowIndex, colIndex)}
          />
        ))}
      </div>
    ));
  }

  function handleRegame() {
    window.location.reload(); //리겜
  }

  return (
    <>
      <Con>
        <Rule> Rule </Rule>

        <Regame onClick={handleRegame}> 다시하기 </Regame>

        <Link to="/">
          <Back> 뒤로가기 </Back>
        </Link>
      </Con>
      <Wrap>
        <div className="App">
          <h1>오목</h1>
          <GameBoardContainer>
            <div className="game-board">{renderBoard()}</div>
          </GameBoardContainer>
          <h3
            style={{
              marginTop: "20px",
              fontSize: "20px",
              fontWeight: "600",
              color: currentPlayer === "black" ? "black" : "white",
            }}
          >
            {winner ? <p>승자: {winner}</p> : <p>Player: {currentPlayer}</p>}
          </h3>
        </div>
      </Wrap>
    </>
  );
};
