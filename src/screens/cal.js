import React,{useState}  from "react";
//import './App.css';

function Cal() {
  const [result,setResult]=useState("");
 
  const clickHandler=(event)=>{
    setResult(result.concat (event.target.value))
  }
  const clearDisplay=()=>{
      setResult("");
  }
  const calculate=()=>{
    setResult(eval(result).toString());
  }
//  const  clearClick=()=>{
//     setResult({input:(0)});
//  }
   return  (
    <div>Calculator Application
      <div className="container">
      <div class="calculator card">
     <input type="text" class="calculator-screen z-depth-1" value={result} disabled />
     <div class="calculator-keys">
       <div className="btn">
  <button type="button" onClick={clickHandler} class="operator btn btn-info" value="+">+</button>
  <button type="button" onClick={clickHandler} class="operator btn btn-info" value="-">-</button>
  <button type="button" onClick={clickHandler} class="operator btn btn-info" value="*">&times;</button>
  <button type="button" onClick={clickHandler}class="operator btn btn-info" value="/">&divide;</button>
  </div>

  <div className="btns">
 

  <button type="button" onClick={clickHandler} value="7" class="btn btn-light waves-effect m-1">7</button>
  <button type="button" onClick={clickHandler} value="8" class="btn btn-light waves-effect">8</button>
  <button type="button"  onClick={clickHandler} value="9" class="btn btn-light waves-effect m-1">9</button>

  </div>
  <div className="btns">

  <button type="button" onClick={clickHandler} value="4" class="btn btn-light waves-effect m-1">4</button>
  <button type="button"  onClick={clickHandler}value="5" class="btn btn-light waves-effect">5</button>
  <button type="button" onClick={clickHandler} value="6" class="btn btn-light waves-effect m-1">6</button>
  </div>

  <div className="btns">

  <button type="button" onClick={clickHandler} value="1" class="btn btn-light waves-effect m-1">1</button>
  <button type="button" onClick={clickHandler} value="2" class="btn btn-light waves-effect">2</button>
  <button type="button"  onClick={clickHandler} value="3" class="btn btn-light waves-effect m-1">3</button>
  </div>

  <div className="btns m-1">

  <button type="button" onClick={clickHandler}  value="0" class="btn btn-light waves-effect m-1">0</button>
  <button type="button" onClick={clickHandler} class="decimal function btn btn-secondary  " value="." >.</button>
  <button type="button" onClick={clearDisplay} class="all-clear function btn btn-danger btn-sm m-1" value="all-clear">AC</button>

  <button type="button" onClick={calculate} class="equal-sign operator btn btn-default " value="=">=</button>
  </div>
  
</div>
</div>
      </div>
    </div>
    )
}

export default Cal