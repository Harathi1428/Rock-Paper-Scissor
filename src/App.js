import {useState,useEffect} from "react";
import './App.css';

function App() {
  const choices=['rock','paper','scissor'];
  const [userChoice,setUserChoice]=useState("rock");
  const [computerChoice,setComputerChoice]=useState("rock");
  const [userScore,setUserScore]=useState(0);
  const [computerScore,setComputerScore]=useState(0);
  const [gameOver,setGameOver]=useState(false);
  const [finalResult,setFinalResult]=useState("");
  const [maxScore, setMaxScore] = useState(5); 

  const handleClick=(choice)=>{
    setUserChoice(choice);
    generateComputerChoice();
  }
  const generateComputerChoice=()=>{
    const ch=choices[Math.floor(Math.random()*choices.length)];
    setComputerChoice(ch);
  }
  const handleMaxScore=(event)=>{
setMaxScore(Number(event.target.value));
  }
const reset=()=>{
  window.location.reload();
}
useEffect(()=>{
  const str=userChoice+computerChoice
  if (userScore<=maxScore && computerScore<=maxScore)
  {
  if (str==="rockscissor"||str==="scissorpaper"||str==="paperrock")
  {
     const us=userScore+1;
     setUserScore(us);
     if (us===maxScore)
  {
     setFinalResult("you won");
     setGameOver(true);
    }}
if (str==="rockpaper"||str==="paperscissor"||str==="scissorrock")
{
  const cs=computerScore+1;
  setComputerScore(cs);
  if (cs===maxScore)
  {
    setFinalResult("you lost");
    setGameOver(true);  

  }
  }
}},[userChoice,computerChoice]);

  return (
    <section className="main">
    <div className="App">
      <div className="heading">rock-paper-scissor</div>
      <div className="dropdown">
          <select className="maxScore"  onChange={handleMaxScore} value={maxScore}>
            <option  className="val" value="3">3</option>
            <option className="val" value="5">5</option>
            <option className="val" value="7">7</option>
            <option className="val" value="10">10</option>
            <option className="val" value="12">12</option>
            <option  className="val" value="15">15</option>
          </select>
        </div>
      <div className="score">
        <h2>user-score:{userScore}</h2>
        <h2>computer-score:{computerScore}</h2>
      </div>
      <div className="choice">
        <div className="userchoice">
<img className="user-img"  alt ="user hand" src={`../images/${userChoice}.png`}/>
        </div>
        <div className="computerchoice">
        <img className="computer-img"  alt ="computer hand" src={`../images/${computerChoice}.png`}/>
        </div>
      </div>
      <div className="btns">
        {choices.map((choice,index)=>(
          <button className="btn" key={index} onClick={()=>handleClick(choice)}>{choice}</button>
        ))}
      </div>
   <div className="restart">
      { gameOver &&
<div className="result" style={{ backgroundColor:finalResult === "you won" ? "green" : "red" }}>
        <h3>final result : {finalResult}</h3>
        <button className="reset-btn" onClick={()=>reset()}>restart game..?</button>
</div>}
    </div>
    </div>
    </section>
  );
}

export default App;
