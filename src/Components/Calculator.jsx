import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const Clear = () => {
    setResult("");
  };
  const backSpace = () => {
    setResult(result.slice(0, -1));
  };

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const Calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className="Container">
      <form>
        <input type="text" value={result} />
      </form>

      <div className="Keypad">
        <button onClick={Clear}>Clear</button>
        <button onClick={backSpace}>C</button>
        <button name="÷" onClick={handleClick}>
          &divide;
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" onClick={handleClick}>
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick}>
          &ndash;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button name="=" id="result" onClick={Calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
