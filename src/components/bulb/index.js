import React, {useState} from 'react'
import './index.css'

function Bulb (props) {
  
  const lightIsOn = props.masterIsOn || (!props.masterIsOn && props.lightIsOn)
  const file = lightIsOn ? './light_on.png' : './light_off.jpg'
  return (
    <div>
      <img src={file} class="lightbulb" id="lightbulb" />

    </div>
  )
}

export default Bulb
