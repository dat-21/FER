import React from 'react';

function AverageAgeByOccupation({ people }) {
  const occupationMap = {};

  for (const p of people) {
    if (!occupationMap[p.occupation]) {
      occupationMap[p.occupation] = { totalAge: 0, count: 0 };
    }
    occupationMap[p.occupation].totalAge += p.age;
    occupationMap[p.occupation].count++;
  }

  const averages = Object.entries(occupationMap).map(([occupation, data]) => ({
    occupation,
    averageAge: (data.totalAge / data.count).toFixed(2),
  }));

  return (
    <div>
      <h3>Average Age by Occupation</h3>
      <ul>
        {averages.map((item, i) => (
          <li key={i}>
            {item.occupation}: {item.averageAge}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;
