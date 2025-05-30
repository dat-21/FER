import React from 'react'

const Excercise7 = ({employees}) => {

   const sortedEmployees = [...employees].sort((a, b) => {
    const deptCompare = a.department.localeCompare(b.department);
    if (deptCompare !== 0) return deptCompare;
    return a.name.localeCompare(b.name);
  });


  return (
    <>
        <div>Excercise7</div>
        <ul>
            {sortedEmployees.map((e) =>(
                <li key={e.id}>
                    {e.name} - {e.department}
                </li>
            ))}
        </ul>
    </>


  )
}

export default Excercise7