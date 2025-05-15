import React from 'react'

function ListPeople({ object }) {
    
    return (
      <>
    <div>
          <ul>
            {object.map((person, index) => (
            <li key={index}> Name: {person.name1}, Age: {person.age}, Occupation: {person.occupation}  </li>
            ))}
          </ul>
            </div>
            

            <h2>List of People</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {object.map((person, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{person.name1}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
            </table>
          
      </>

  )
}

export default ListPeople