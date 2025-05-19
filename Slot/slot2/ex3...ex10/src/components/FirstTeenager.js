import React from 'react';

function FirstTeenager({ people = [] }) {
  const firstTeenager = people.find(p => p.age >= 13 && p.age <= 19);

  return (
    <div>
      First Teenager: {firstTeenager ? firstTeenager.name1 : 'Not found'}
    </div>
  );
}
export default FirstTeenager;
