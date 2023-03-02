import Bulb from './components/lightswitch'
import './App.css';
import { useState } from 'react';

function App() {
  const [address, setAddress] = useState("100 Emerson Lane")
  function masterSwitch() {
    let newAddress= "100 Emerson Lane"
    if (address.includes("100")) {
      newAddress= "200 Jonestown Massacre Lane"
    }
    setAddress(newAddress)
  }
  
  return (
    <div>
      <button onClick={masterSwitch}>
        MASTER ON/OFF
      </button>
      <div class="columns">
        <div class="column">
          <Bulb mood="grouchy" address={address} />
        </div>
        <div class="column">
          <Bulb mood="sad" address={address} />
        </div>
        <div class="column">
          <Bulb mood="excited" address={address} />
        </div>
      </div>
    </div>
  );
}

export default App;