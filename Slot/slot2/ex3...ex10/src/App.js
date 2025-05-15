import ListPeople from './components/ListPeople';
import './App.css';
import FirstTeenager from './components/FirstTeenager';

function App() {

  const obj = [
    {
      name1: "Alice",
      age: 18,
      occupation: "student"
    },
    {
      name1: "Bob",
      age: 20,
      occupation: "student"
    },
    {
      name1: "Charlie",
      age: 28,
      occupation: "Software engineer"
    },
    {
      name1: "Diana",
      age: 32,
      occupation: "Doctor"
    },
    {
      name1: "Ethan",
      age: 25,
      occupation: "Graphic Designer"
    },
    {
      name1: "Fiona",
      age: 22,
      occupation: "Marketing Specialist"
    },
    {
      name1: "George",
      age: 30,
      occupation: "Project Manager"
    }
  ]
  
  return (
    <div className="App">
      <ListPeople object={obj} />
      {/* <FirstTeenager/> */}
    </div>
  );
}

export default App;
