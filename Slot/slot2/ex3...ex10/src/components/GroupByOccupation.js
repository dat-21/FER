import React from 'react';

function GroupByOccupation({ people }) {
  const grouped = people.reduce((acc, p) => {
    if (!acc[p.occupation]) acc[p.occupation] = [];
    acc[p.occupation].push(p);
    return acc;
  }, {});

  return (
    <div>
      <h3>Grouped by Occupation</h3>
      {Object.entries(grouped).map(([occupation, group]) => (
        <div key={occupation}>
          <strong>{occupation}</strong>
          <ul>
            {group.map((p, i) => (
              <li key={i}>{p.name1} - {p.age}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupByOccupation;
