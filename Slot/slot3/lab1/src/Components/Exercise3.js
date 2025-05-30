import React from 'react'

const style = {
  color: 'red',
  backgroundColor: 'black',
  fontSize: '20px',
  textAlign: 'center',
}


const Exercise3 = ({employees}) => (
  <table style={style}>
        <thead>
          <tr>
            <th>ID/Index</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
)

export default Exercise3