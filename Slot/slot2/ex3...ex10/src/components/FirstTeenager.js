import React from 'react'

function FirstTeenager(object) {
    const firstTeenager = object.find(p => p.age >= 13 && p.age <= 19);
    
  return (
      <div>FirstTeenager: {firstTeenager.name1 }</div>
  )
}

export default FirstTeenager