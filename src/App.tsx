import React, {useState, useRef} from "react";
import { reduceEachLeadingCommentRange } from "typescript";
import "./App.css";
import AppleLogo from "./applePixels.png";
import Monitor from "./oldMonitor.png";
import useInterval from "./useInterval";

const canvasX = 1000;
const canvasY = 1000;
const initialSnake = [[4,10], [4,10]];
const initialApple = [14,10];
const scale = 50;
const timeDelay = 100;

function App() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState(initialSnake);
  const [apple, setApple] = useState(initialApple);
  const [direction, setDirection] = useState([0, -1]);
  const [delay, setDelay] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useInterval(() => runGame(), delay )

  function checkCollision(head: number[]) {
    for (let i = 0; i < head.length; i++) {
      if(head[i] < 0 || head[i] * scale >= canvasX) return true
    }
    for(const s of snake) {
      if(head[0] === s[0] && head[1] === s[1]) return true
    }
    return false
  }


  function changeDirection(e: React.KeyboardEvent<HTMLDivElement>) {
    switch (e.key)
  }



  function appleAte(newSnake: number[][]) {
    let coord = apple.map(() => Math.floor(Math.random() * canvasX / scale))
    if(newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = coord
      setScore(score + 1)
      setApple(newApple)
      return true
    }
    return false
  }


  function runGame() {
    const newSnake = [...snake]
    const newSnakeHead = [newSnake[0][0] + direction[0], newSnake[0][1] = direction[1]]
    newSnake.unshift(newSnakeHead)
    if(checkCollision(newSnakeHead)) {
      setDelay(null)
      setGameOver(true)
      handleSetScore()
    }
    if(!appleAte(newSnake)) {
      newSnake.pop()
    }
    setSnake(newSnake)
  }

  return (
    <div onKeyDown={(e) => changeDirection(e) }>
      <img src={AppleLogo} alt="fruit" width="30" />
      <img src={Monitor} alt="fruit" width="30" />
      <canvas className="playArea" ref={canvasRef} width={`${canvasX}px`} height={`${canvasY}px`} />
      {gameOver && <div className="gameOver">Game Over</div>}
      <button onClick={play} className="playButton">Play</button>
      <div className="scoreBox">
        <h2>Score: {score}</h2>
        <h2>High Score: {localStorage.getItem("snakeScore")}</h2>
      </div>
    </div>
  )
}

export default App;
