import { useState } from 'react'
import Bulb from '../bulb'

function Switch (props) {
  const [ isOn, setIsOn ] = useState(false)
  function flipSwitch() {
     setIsOn(!isOn)   
  }
  return (
    <>
      <Bulb lightIsOn={isOn} masterIsOn={props.masterIsOn} />
      <button onClick={flipSwitch}>
        OFF/ON
      </button>
    </>
  )
}

export default Switch