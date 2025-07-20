import ListPeople from "./components/ListPeople";
import "./App.css";
import FirstTeenager from "./components/FirstTeenager";
import AllAreTeenagers from "./components/AllAreTeenagers";
import GroupByOccupation from "./components/GroupByOccupation";
import OldestAndYoungest from "./components/OldestAndYoungest";
import AverageAgeByOccupation from "./components/AverageAgeByOccupation";
import SortByOccupationAndAge from "./components/SortByOccupationAndAge";

function App() {
  const obj = [
    { name1: "Alice", age: 18, occupation: "student" },
    { name1: "Bob", age: 20, occupation: "student" },
    { name1: "Charlie", age: 28, occupation: "Software engineer" },
    { name1: "Diana", age: 32, occupation: "Doctor" },
    { name1: "Ethan", age: 25, occupation: "Graphic Designer" },
    { name1: "Fiona", age: 22, occupation: "Marketing Specialist" },
    { name1: "George", age: 30, occupation: "Project Manager" },
  ];

  return (
    <div className="App">
      {/* Truyền prop "object" cho ListPeople */}
      <ListPeople object={obj} />

      {/* Truyền prop "people" cho FirstTeenager */}
      <FirstTeenager people={obj} />

      {/* Có thể bỏ dòng này nếu không cần hiển thị lại danh sách */}
      {/* <ListPeople object={obj} /> */}

      {/* Truyền prop "people" cho AllAreTeenagers */}
      <AllAreTeenagers people={obj} />

      <GroupByOccupation people={obj} />

      <OldestAndYoungest people={obj} />

      <AverageAgeByOccupation people={obj} />

      <SortByOccupationAndAge people={obj} />
    </div>
  );
}

export default App;
