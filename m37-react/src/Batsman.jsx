import { useState } from "react";

export default function Batsman() {
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState(0);
  const [countFours, setCountFours] = useState(0);
  const [countSixes, setCountSixes] = useState(0);

  const handleDotBall = () => {
    setBalls(balls + 1);
  };
  const handleRunOne = () => {
    setScore(score + 1);
    setBalls(balls + 1);
  };
  const handleRunTwo = () => {
    setScore(score + 2);
    setBalls(balls + 1);
  };
  const handleRunThree = () => {
    setScore(score + 3);
    setBalls(balls + 1);
  };
  const handleRunFour = () => {
    setScore(score + 4);
    setBalls(balls + 1);
    setCountFours(countFours + 1);
  };
  const handleRunSix = () => {
    setScore(score + 6);
    setBalls(balls + 1);
    setCountSixes(countSixes + 1);
  };

  return (
    <div>
      <h2>Player: Bangla Batsman</h2>
      <h3>
        Score: {score} off {balls} balls (4s: {countFours}, 6s: {countSixes})
      </h3>
      <p>Strike Rate: {balls > 0 ? ((score / balls) * 100).toFixed(2) : 0} </p>
      <button onClick={handleDotBall}>A Dot</button>
      <button onClick={handleRunOne}>Single</button>
      <button onClick={handleRunTwo}>2 Runs</button>
      <button onClick={handleRunThree}>3 Runs</button>
      <button onClick={handleRunFour}>Four</button>
      <button onClick={handleRunSix}>Sixer</button>
      {
        <>
          {score >= 50 ? <h3 style={{ color: "blue" }}>Half Century!!</h3> : null}
          {score >= 100 ? <h2 style={{ color: "green" }}>Century!!</h2> : null}
        </>
      }
    </div>
  );
}
