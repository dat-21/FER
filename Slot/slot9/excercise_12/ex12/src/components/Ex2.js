import React, { useState } from "react";

function ControlledInput() {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button onClick={() => setValue(inputValue)}>Submit</button>
      <p>Input text: {value}</p>
    </div>
  );
}

export default ControlledInput;
