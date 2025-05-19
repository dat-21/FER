import React from 'react';

function OldestAndYoungest({ people }) {
  if (people.length === 0) return <div>No data</div>;

  let oldest = people[0];
  let youngest = people[0];

  for (const person of people) {
    if (person.age > oldest.age) oldest = person;
    if (person.age < youngest.age) youngest = person;
  }

  return (
    <div>
      <h3>Oldest and Youngest</h3>
      <p><strong>Oldest:</strong> {oldest.name1} ({oldest.age})</p>
      <p><strong>Youngest:</strong> {youngest.name1} ({youngest.age})</p>
    </div>
  );
}

export default OldestAndYoungest;
