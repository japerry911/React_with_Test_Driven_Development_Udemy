import { useState } from "react";
import "./App.css";

function App() {
  const [isRed, setIsRed] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (_event) => setIsRed(!isRed);
  const handleCheckbox = (_event) => setIsDisabled(!isDisabled);

  return (
    <div className="App">
      <button
        style={{ backgroundColor: isRed ? "red" : "blue" }}
        onClick={handleClick}
        disabled={isDisabled}
      >
        Change to {isRed ? "Blue" : "Red"}
      </button>
      <input
        type="checkbox"
        onChange={handleCheckbox}
        defaultChecked={isDisabled}
      />
    </div>
  );
}

export default App;
