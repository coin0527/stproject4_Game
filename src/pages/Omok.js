import React, { useState, useEffect, useCallback } from "react";
import "../css/Omoks.css";
import { Link } from "react-router-dom";
import {
  Wrap,
  GameBoardContainer,
  Con,
  Rule,
  Regame,
  Back,
  ModalWrapper,
  ModalContent,
} from "../css/Omoks";

const BOARD_SIZE = 15;

export const Omok = () => {
  const [board, setBoard] = useState(
    Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState("black");
  const [winner, setWinner] = useState(null);
  const [showRuleModal, setShowRuleModal] = useState(false);
  const [count, setCount] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);

  const checkWinner = useCallback(() => {
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        if (board[i][j] !== null) {
          if (
            checkDirection(i, j, 1, 0) ||
            checkDirection(i, j, 0, 1) ||
            checkDirection(i, j, 1, 1) ||
            checkDirection(i, j, 1, -1)
          ) {
            setWinner(board[i][j]);
            return;
          }
        }
      }
    }
  }, [board]);

  useEffect(() => {
    if (gameStarted) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      checkWinner();

      if (winner) {
        alert(`${winner}님이 승리하셨습니다!`);
        clearInterval(timer);
      }

      return () => {
        clearInterval(timer);
      };
    }
  }, [board, checkWinner, winner, gameStarted]);

  useEffect(() => {
    if (count === 0) {
      alert("30초를 모두 사용하셨습니다. 랜덤한 위치에 돌이 배치됩니다.");
      handleRandomMove();
      setCount(30); // 시간 초기화
    }
  }, [count, gameStarted]);

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
    if (!gameStarted) {
      setGameStarted(true); // 겜 시작
    }

    if (board[row][col] === null && !winner) {
      const newBoard = [...board];
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
      setCount(30); // 오목돌을 놓을 때마다 카운트 초기화
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
    window.location.reload(); // 리겜
  }

  function openRuleModal() {
    setShowRuleModal(true); //오픈
  }

  function closeRuleModal() {
    setShowRuleModal(false); //닫기
  }

  function handleRandomMove() {
    const randomRow = Math.floor(Math.random() * BOARD_SIZE);
    const randomCol = Math.floor(Math.random() * BOARD_SIZE);

    if (board[randomRow][randomCol] === null) {
      const newBoard = [...board];
      newBoard[randomRow][randomCol] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
    } else {
      handleRandomMove();
    }
  }

  return (
    <>
      <Con>
        <Rule onClick={openRuleModal}> Rule </Rule>
        <Regame onClick={handleRegame}> 다시하기 </Regame>
        <Link to="/">
          <Back> 뒤로가기 </Back>
        </Link>
      </Con>
      {showRuleModal && (
        <ModalWrapper onClick={closeRuleModal}>
          <ModalContent>
            <h2>Rule</h2>
            <p>- 선공권은 항상 흑돌이 가진다.</p>
            <p>- 상대방보다 먼저 자신의 돌 5개를 이으면 되는 간단한 룰</p>
            <p>- 상대방이 둔 배치칸에는 둘 수 없음.</p>
            <p>
              - 단, 돌이 6개 이상 이어지는 구간에는 돌을 놓을 수 없고 제한시간
              30초를 넘기면 랜덤한 곳에 돌이 배치된다.
            </p>
          </ModalContent>
        </ModalWrapper>
      )}
      <Wrap count={count}>
        <div className="App">
          <h1>오목</h1>
          <h4> {count} </h4>
          <GameBoardContainer>
            <div className="game-board">{renderBoard()}</div>
          </GameBoardContainer>
          <h3
            style={{
              marginTop: "20px",
              fontSize: "20px",
              fontWeight: "600",
              color: "black",
            }}
          >
            {winner ? <p>승자: {winner}</p> : <p>Player: {currentPlayer}</p>}
          </h3>
        </div>
      </Wrap>
    </>
  );
};
