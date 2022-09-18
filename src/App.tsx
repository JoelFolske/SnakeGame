import React, {useState, useRef} from "react";
import "./App.css";
import AppleLogo from "./applePixels.png";
import Monitor from "./oldMonitor.png";

const canvasX = 1000;
const canvasy = 1000;
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



  return (
    <div>
      <img src={AppleLogo} alt="fruit" width="30" />
      <img src={Monitor} alt="fruit" width="30" />
    </div>
  )
}

export default App;
