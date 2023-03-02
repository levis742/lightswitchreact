import React, {useState} from 'react'
import './index.css'

function Bulb (props) {
  const lightswitch = document.getElementById("lightswitch")
  const lightbulb = document.getElementById("lightbulb")
  function toggleLight(){
    const isOn = lightbulb.src.includes("on")
    console.log("is this on?", isOn)
    if(isOn){
        lightbulb.src = "./light_off.jpg"
        lightswitch.className = "lightswitch-off"
        lightswitch.innerText = "OFF"
    } else {
        lightbulb.src = "./light_on.png"
        lightswitch.className = "lightswitch-on"
        lightswitch.innerText = "ON"
    }
}

  return (
    <div>
      <img src="./light_off.jpg" class="lightbulb" id="lightbulb" />
      {/* <p>
        my dog is {adjective} {props.mood}
      </p> */}
      {/* <p>
        {props.address}
      </p> */}
      <button onClick={toggleLight}>
        ON/OFF
      </button>
      <script>
        type="text/javascript" src="./index.js">
      </script>
    </div>
  )
}

export default Bulb
