import React from 'react';

const Exercise8 = ({ employees }) => {
  // 1. Nhóm nhân viên theo phòng ban
  const grouped = employees.reduce((acc, emp) => {
    if (!acc[emp.department]) {
      acc[emp.department] = [];
    }
    acc[emp.department].push(emp);
    return acc;
  }, {});

  return (
    <div>
      <h2>Grouped Employees</h2>
      {Object.entries(grouped).map(([department, emps]) => (
        <div key={department}>
          <h3>{department}</h3>
          <ul>
            {emps.map(emp => (
              <li key={emp.id}>{emp.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Exercise8;
