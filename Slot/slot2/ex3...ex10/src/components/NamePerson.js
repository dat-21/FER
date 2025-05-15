import React from 'react'

function NamePerson() {
  const objects = [
    {
      name1: "Alice",
      age: 18,
      occupation: "student"
    },
    {
      name1: "Bob",
      age: 20,
      occupation: "student"
    },
    {
      name1: "Charlie",
      age: 28,
      occupation: "Software engineer"
    }
    ]
  return (
         <div>
          <ul>
            {objects.map((person, index) => (
            <li key={index}> Name: {person.name1}, Age: {person.age}, Occupation: {person.occupation}  </li>
            ))}
          </ul>
        </div>
    )
}

export default NamePerson