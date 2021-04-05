import React, { useState } from 'react'

const TrafficLight = () => {

    const [redLight, setRedLight] = useState("");
    const [yellowLight, setYellowLight] = useState("");
    const [greenLight, setGreenLight] = useState("");

    const lightSelected = (e) => {

        if(e.target.classList.contains('red')) {
            setRedLight("selected");
            setYellowLight("");
            setGreenLight("");
        }
        if(e.target.classList.contains('yellow')) {
            setRedLight("");
            setYellowLight("selected");
            setGreenLight("");
        }
        if(e.target.classList.contains('green')) {
            setRedLight("");
            setYellowLight("");
            setGreenLight("selected");
        }
    }

    return (
        <div className="container">
            <div 
                className={`light red ${redLight}`}
                onClick={ e => lightSelected(e) }
            ></div>
            <div 
                className={`light yellow ${yellowLight}`}
                onClick={ e => lightSelected(e) }
            ></div>
            <div 
                className={`light green ${greenLight}`}
                onClick={ e => lightSelected(e) }
            ></div>
        </div>
    )
}

export default TrafficLight;