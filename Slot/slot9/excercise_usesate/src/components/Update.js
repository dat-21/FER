import { useState } from "react";

function Update() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [updatedName, setUpdatedName] = useState(null);
  const [updatedAge, setUpdatedAge] = useState(null);

  const handleClick = () => {
    setUpdatedName(name);
    setUpdatedAge(age);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>My name is {updatedName !== null ? updatedName : "not updated yet"}</p>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>My age is: {updatedAge !== null ? updatedAge : "not updated yet"}</p>

      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default Update;
