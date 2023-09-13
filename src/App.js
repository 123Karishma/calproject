
import { useState } from 'react';
import './App.css';

function App() {
  const[calculate ,setCalculate]=useState('')
  return (
    <div className='parents'>
      <div className='calculator'>
        <form>
        <div  className='container'>
          <input type='text' value={calculate}/>
        </div>
        <div>
          <input type='button' value="AC" onClick={e=>setCalculate("")} />
          <input type='button' value="DE" onClick={e=>setCalculate(calculate.slice(0, -1))}/>
          <input type='button' value="." onClick={e=>setCalculate(calculate+e.target.value)}/>
          <input type='button' value="/" onClick={e=>setCalculate(calculate+e.target.value)}/>
        </div>
        <div>
          <input type='button' value="7" onClick={e=>setCalculate(calculate+e.target.value)}/>
          <input type='button' value="8" onClick={e=>setCalculate(calculate+e.target.value)}/>
          <input type='button' value="9" onClick={e=>setCalculate(calculate+e.target.value)}/>
          <input type='button' value="*"  onClick={e=>setCalculate(calculate+e.target.value)}/>
        </div>
        <div>
          <input type='button' value="4" onClick={e=>setCalculate(calculate+e.target.value)}/>
          <input type='button' value="5" onClick={e=>setCalculate(calculate+e.target.value)}/>
          <input type='button' value="6" onClick={e=>setCalculate(calculate+e.target.value)}/>
          <input type='button' value="+" onClick={e=>setCalculate(calculate+e.target.value)}/>
        </div>
        <div>
          <input type='button' value="1" onClick={e=>setCalculate(calculate+e.target.value)}/>
          <input type='button' value="2" onClick={e=>setCalculate(calculate+e.target.value)}/>
          <input type='button' value="3" onClick={e=>setCalculate(calculate+e.target.value)}/>
          <input type='button' value="-" onClick={e=>setCalculate(calculate+e.target.value)}/>
        </div>
        <div>
          <input type='button' value="00" onClick={e=>setCalculate(calculate+e.target.value)}/>
          <input type='button' value="0" onClick={e=>setCalculate(calculate+e.target.value)}/>
          <input type='button' value="=" className='Buttoning' onClick={e=>setCalculate(eval(calculate))}/>
        </div>
        </form>

      </div>

    </div>
  );
}

export default App;

