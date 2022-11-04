import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";
 
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        disabled={isChecked}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <br />
      <input 
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
    </div>
  );
}

export default App;
