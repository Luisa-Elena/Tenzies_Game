import React from "react"
import "../style.css"
import d1 from "../dice_img/dice-1.jpg"
import d2 from "../dice_img/dice-2.jpg"
import d3 from "../dice_img/dice-3.jpg"
import d4 from "../dice_img/dice-4.jpg"
import d5 from "../dice_img/dice-5.jpg"
import d6 from "../dice_img/dice-6.jpg"

export default function Die(props) {

    const diceImgArray = [d1,d2,d3,d4,d5,d6]

    const styles = {
        backgroundColor: props.isHeld===true ? "#59E391" : "#F5F5F5"
    }

    return(
        <div className="die" style={styles} onClick={props.handleClick}>
            <img className="die_img" src={diceImgArray[props.value-1]}></img>
        </div>
    )
}