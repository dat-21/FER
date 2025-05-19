import React from 'react';

function AllAreTeenagers({ people = [] }) {
  const teenagers = people.filter(p => p.age >= 13 && p.age <= 19);

  return (
    <div>
      <h2>All Teenagers:</h2>
      {teenagers.length > 0 ? (
        <ul>
          {teenagers.map((person, index) => (
            <li key={index}>
              Name: {person.name1}, Age: {person.age}
            </li>
          ))}
        </ul>
      ) : (
        <p>No teenagers found.</p>
      )}
    </div>
  );
}

export default AllAreTeenagers;
