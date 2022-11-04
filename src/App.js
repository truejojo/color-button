import { useState } from "react";
import "./App.css";

export const replaceCamelWithSpaces = (colorName) =>
  colorName.replace(/\B([A-Z])\B/g, " $1");

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: isChecked ? "gray" : buttonColor }}
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
