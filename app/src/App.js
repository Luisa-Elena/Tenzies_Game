import React from "react"
import "./style.css"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import Timer from "./components/Timer"

export default function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [numRolls, setNumRolls] = React.useState(0)
  const [numSeconds, setNumSeconds] = React.useState(0)
  const [time, setTime] = React.useState(JSON.parse(localStorage.getItem("time")) || 0)
  const [firstClick, setFirstClick] = React.useState(0)
  
  React.useEffect(() => {
    if((time===0 || numSeconds < time) && (numSeconds!=0)) {
      setTime(numSeconds)
      localStorage.setItem("time",JSON.stringify(numSeconds))
    }
  }, [numSeconds])

  console.log(time);

  React.useEffect(() => {
    let ok=1;
    let value=dice[0].value

    for(let i=0; i<dice.length; i++) {
        if(dice[i].isHeld===false || dice[i].value!==value) {
            ok=0
            break
        }
    }
    if(ok===1) {
        setTenzies(true)
        // console.log("You won!")
    }
  }, [dice])

  function allNewDice() {
    const diceArray = []
    for(let i=0; i<10; i++) {
      const die = {randomNumber: 0, isHeld: false, id: nanoid()}
      die.randomNumber = Math.floor(Math.random()*6) + 1
      diceArray.push(die)
    }
    return diceArray
  }

  const dieElements = dice.map(item => {
    return <Die 
      value={item.randomNumber} 
      isHeld={item.isHeld}
      handleClick={() => holdDice(item.id)}
      />
  })

  function holdDice(id) {
    setDice(prev => prev.map(item => {
      if(item.id===id) {
        return {...item, isHeld: !item.isHeld}
      } else {
        return item
      }
    }))
    setFirstClick(1)
  }

  function rollDice() {
      setDice(prev => prev.map(item => {
        return item.isHeld===true
          ? item
          : {...item, randomNumber: Math.floor(Math.random()*6) + 1}
      }))
    setNumRolls(prev => prev+1)
  }

  function NewGame() {
    setDice(allNewDice())
    setTenzies(false)
    setFirstClick(0)
    setNumRolls(0)
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <div className="frame">
        <div className="main_container">
          <div className="title">Tenzies</div>
          { tenzies
            ? <div className="info">You won in {numRolls} rolls and {numSeconds} seconds!</div>
            : <div className="info">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</div>
          }
          { time!==0 
            ? <p className="stored_data">Your best time: {time} seconds</p>
            : <p className="stored_data">No best time recorded yet</p>
          }
          <div className="dice_container">
            {dieElements}
          </div>
          { !tenzies
            ? <button className="button" onClick={rollDice}>Roll</button>
            : <button className="button" onClick={NewGame}>New Game</button>
          }
          <Timer firstClick={firstClick} tenzies={tenzies} setNumSeconds={setNumSeconds}/>
        </div>
      </div>
    </main>
  )
}