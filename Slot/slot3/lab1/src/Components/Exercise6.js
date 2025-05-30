import React from 'react'

const Exercise6 = ({employees}) => {

    //Filter and display IT department employees
    const FilterIT = employees.filter(e => e.department === "IT");
  return (
    <>
    <div>Exercise6</div>
    <ul>
        {FilterIT.map((e) => (
            <li key = {e.id}> 
            {e.name} is default department IT 
            </li>
        ))}
    </ul>
  </>
  )
}

export default Exercise6