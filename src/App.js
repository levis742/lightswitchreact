import Switch from './components/switch'
import './App.css';
import { useState } from 'react';

function App() {
  const [masterIsOn, setMasterIsOn] = useState(false)
  function masterSwitch(){
    setMasterIsOn(!masterIsOn)
  }
  
  return (
    <div>
      <button onClick={masterSwitch}>
        MASTER ON/OFF
      </button>
      <div class="columns">
        <div class="column">
          <Switch masterIsOn={masterIsOn} />
        </div>
        <div class="column">
          <Switch masterIsOn={masterIsOn} />
        </div>
        <div class="column">
          <Switch masterIsOn={masterIsOn} />
        </div>
      </div>
    </div>
  );
}

export default App;