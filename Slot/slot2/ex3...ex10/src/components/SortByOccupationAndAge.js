import React from 'react';

function SortByOccupationAndAge({ people }) {
  const sortedPeople = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });

  return (
    <div>
      <h3>Sorted by Occupation & Age</h3>
      <ul>
        {sortedPeople.map((p, i) => (
          <li key={i}>
            {p.name1} - {p.occupation} - {p.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortByOccupationAndAge;
