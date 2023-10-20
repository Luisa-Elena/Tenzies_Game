import React from "react"

export default function Timer(props) {

    const [seconds, setSeconds] = React.useState(0)
    const [timerOn, setTimerOn] = React.useState(false)

    React. useEffect(() => {
        let interval = null
        if(timerOn) {
            interval = setInterval(() => {
                setSeconds(prev => prev+1)
            }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timerOn])

    React.useEffect(() => {
        if(props.tenzies) {
            setTimerOn(false)
            props.setNumSeconds(seconds)
        } else {
            setSeconds(0)
        }
    }, [props.tenzies])

    React.useEffect(() => {
        if(props.firstClick===1) {
            setTimerOn(true)
        }
    }, [props.firstClick])

    function Display() {
        //if(!props.tenzies) {
            if(seconds!=0) {
                return <p className="info">Seconds passed: {seconds}</p>
            } else {
                return <p className="info">Seconds passed: 0</p>
            }
        //}
    }

    return (
        <div className="timer">
            <Display />
        </div>
    )
}