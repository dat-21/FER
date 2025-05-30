import './App.css';
import Exercise1 from './Components/Exercise1';
import Exercise2 from './Components/Exercise2';
import Exercise4 from './Components/Exercise4';
import Exercise3 from './Components/Exercise3';
import Exercise5 from './Components/Exercise5';
import Exercise6 from './Components/Exercise6';
import Exercise7 from './Components/Exercise7';
import Exercise8 from './Components/Exercise8';

function App() {
 const employee = {id: 0, name: "John Doe", age: 30, department: "IT" };

 const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { id: 4, name: "Ann", department: "Finance", age: 22 },
  { id: 5, name: "Elisabeth", department: "HR", age: 16 }
];

  return (
    <div className="App">
    ex1: <Exercise1 employee={employee} />,
    ex2: <Exercise2 employees={employees} />,
    ex3: <Exercise3 employees={employees} />,
    ex4: <Exercise4 employees={employees} />,
    ex5: <Exercise5 employees={employees} />,
    ex6: <Exercise6 employees={employees}/>,
    ex7: <Exercise7 employees={employees}/>,
    ex8: <Exercise8 employees={employees}/>
    </div>
  );
}

export default App;
