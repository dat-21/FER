import React from "react";

const Exercise5 = ({ employees }) => {
  return (
    <div>
      <h3> Employee Dropdown</h3>
      <select>
        {employees.map((e, i) => (
          <option key={e.id || i}>{e.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Exercise5;
