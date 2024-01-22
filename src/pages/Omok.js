import React, { useState, useEffect, useCallback } from "react";
// import "./css/Omok.css";

const BOARD_SIZE = 15;

export const Omok = () => {
  const [board, setBoard] = useState(
    Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState("black");
  const [winner, setWinner] = useState(null);

  // Memoized checkWinner using useCallback
  const checkWinner = useCallback(() => {
    // Check for a winner (omok)
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        if (board[i][j] !== null) {
          if (
            checkDirection(i, j, 1, 0) || // 가로
            checkDirection(i, j, 0, 1) || // 세로
            checkDirection(i, j, 1, 1) || // 대각선 (우측하향)
            checkDirection(i, j, 1, -1) // 대각선 (우측상향)
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

    // Check in the positive direction
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

    // Check in the negative direction
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

  return (
    <div className="App">
      <h1>오목 게임</h1>
      {winner ? <p>승자: {winner}</p> : <p>현재 플레이어: {currentPlayer}</p>}
      <div className="game-board">{renderBoard()}</div>
    </div>
  );
};
