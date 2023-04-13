import React, { useState } from 'react'
import'./App.css';
const App = () => {
 let [inputText , setInputText] = useState('');
 let [answer,setAnswer] = useState('');

  const handleClick =(e)=>{
        let clickbut = e.target;
        let value = clickbut.innerHTML;
        setInputText(inputText + value);
  }
  const handleCal = (e)=>{
     let ans = eval(inputText);
     setInputText(ans);
  }
  const handleClear = (e)=>{
      setInputText('');
  }

  return (
    <div className='container'>
      <input type='text' value={inputText} className='input' />  <br/>
      <div className='button-container'>
      
    <button onClick={handleClear}>C</button>
    <button onClick={handleClick}>/</button>
    <button onClick={handleClick}>*</button>
    <button onClick={handleClick}>-</button>
    <button onClick={handleClick}>7</button>
    <button onClick={handleClick}>8</button>
    <button onClick={handleClick}>9</button>
    <button onClick={handleClick}>+</button>
    <button onClick={handleClick}>4</button>
    <button onClick={handleClick}>5</button>
    <button onClick={handleClick}>6</button>
    <button onClick={handleClick}>1</button>
    <button onClick={handleClick}>2</button>
    <button onClick={handleClick}>3</button>
      <button onClick={handleCal}>=</button>
    <button onClick={handleClick}>0</button>
    <button onClick={handleClick}>.</button>
    </div>
    </div>
  );
}
                                            
export default App;
