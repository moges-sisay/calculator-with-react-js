import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  // Update display with the value of the clicked button
  const handleClick = (value) => {
    setDisplay(display + value);
  };

  // Calculate the result based on the display's content
  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  // Clear the display
  const clearDisplay = () => {
    setDisplay('');
  };

  // Delete the last character from the display
  const deleteLast = () => {
    setDisplay(display.slice(0, -1));
  };

  // Handle advanced mathematical operations
  const handleAdvancedOperation = (operation) => {
    try {
      let value = parseFloat(display);
      let result = '';
      switch (operation) {
        case 'log':
          result = Math.log10(value);
          break;
        case 'ln':
          result = Math.log(value);
          break;
        case 'sqrt':
          result = Math.sqrt(value);
          break;
        case 'square':
          result = Math.pow(value, 2);
          break;
        case 'cbrt':
          result = Math.cbrt(value);
          break;
        case 'exp':
          result = Math.exp(value);
          break;
        case 'abs':
          result = Math.abs(value);
          break;
        case 'sin':
          result = Math.sin(value);
          break;
        case 'cos':
          result = Math.cos(value);
          break;
        case 'tan':
          result = Math.tan(value);
          break;
        case 'inverse':
          result = 1 / value;
          break;
        default:
          break;
      }
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  // Render the calculator structure
  return (
    <div className="calculator-container">
      <div className="calculator">
        <input type="text" value={display} readOnly placeholder="0" className="display" />

        <div className="buttons">
          <button onClick={clearDisplay} className="new">AC</button>
          <button onClick={deleteLast} className="new">DEL</button>
          <button onClick={() => handleAdvancedOperation('log')} className="new">LOG</button>
          <button onClick={() => handleAdvancedOperation('exp')} className="new">e^x</button>
          <button onClick={() => setDisplay(new Date().toLocaleString())} className="date">Date</button>

          <button onClick={() => handleClick('(')} className="new">(</button>
          <button onClick={() => handleClick(')')} className="new">)</button>
          <button onClick={() => handleAdvancedOperation('cbrt')} className="new">³√</button>
          <button onClick={() => handleAdvancedOperation('tan')} className="new">tan</button>
          <button onClick={() => handleAdvancedOperation('cos')} className="new">cos</button>

          <button onClick={() => handleAdvancedOperation('sin')} className="new">sin</button>
          <button onClick={() => handleAdvancedOperation('square')} className="new">x²</button>
          <button onClick={() => handleAdvancedOperation('sqrt')} className="new">√</button>
          <button onClick={() => handleAdvancedOperation('ln')} className="new">ln</button>
          <button onClick={() => handleClick('/')} className="ope">/</button>

          <button onClick={() => handleClick('7')} className="num">7</button>
          <button onClick={() => handleClick('8')} className="num">8</button>
          <button onClick={() => handleClick('9')} className="num">9</button>
          <button onClick={() => handleAdvancedOperation('abs')} className="num">|x|</button>
          <button onClick={() => handleClick('*')} className="ope">*</button>

          <button onClick={() => handleClick('4')} className="num">4</button>
          <button onClick={() => handleClick('5')} className="num">5</button>
          <button onClick={() => handleClick('6')} className="num">6</button>
          <button onClick={() => handleClick('3.14')} className="num">π</button>
          <button onClick={() => handleClick('-')} className="ope">-</button>

          <button onClick={() => handleClick('1')} className="num">1</button>
          <button onClick={() => handleClick('2')} className="num">2</button>
          <button onClick={() => handleClick('3')} className="num">3</button>
          <button onClick={() => handleClick('%')} className="num">%</button>
          <button onClick={() => handleClick('+')} className="ope">+</button>

          <button onClick={() => handleClick('0')} className="num">0</button>
          <button onClick={() => handleClick('.')} className="num">.</button>
          <button onClick={() => handleAdvancedOperation('inverse')} className="num">1/x</button>
          <button onClick={calculateResult} className="equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
