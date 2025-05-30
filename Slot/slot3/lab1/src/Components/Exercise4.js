import React from "react";

const averageAge = (...ages) => {
  if (ages.length === 0) return 0;
  const total = ages.reduce((sum, age) => sum + age, 0);
  return (total / ages.length).toFixed(2); //lay 2 don vi
};

const Exercise4 = ({ employees }) => {
  const ages = employees.map(e => e.age); 
  const avg = averageAge(...ages);        

  return (
    <div>
      <h3> Average Age</h3>
      <p>Average Age: {avg}</p>
    </div>
  );
};

export default Exercise4;
