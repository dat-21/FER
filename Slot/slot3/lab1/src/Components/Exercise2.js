import React from "react";

const Exercise2 = ({ employees }) => (
  <ul>
    {employees.map((e, i) => (
      <li key={e.id || i}>
        {e.name} - {e.department}
      </li>
    ))}
  </ul>
);

export default Exercise2;
