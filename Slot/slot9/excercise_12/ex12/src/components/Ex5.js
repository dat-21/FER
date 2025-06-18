import React, { useState } from "react";

function ColorSwitcher() {
  const [color, setColor] = useState("white");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <select onChange={handleColorChange}>
        <option value="white">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div
        style={{ backgroundColor: color, height: "100px", width: "100px" }}
      />
    </div>
  );
}

export default ColorSwitcher;
