import "./App.css";
import ControlledInput from "./components/Ex2";
import ToggleVisibility from "./components/Ex3";
import Counter from "./components/Ex1";
import TodoList from "./components/Ex4";
import ColorSwitcher from "./components/Ex5";
import SearchFilter from "./components/Ex6";
import DragAndDrop from "./components/Ex7";

function App() {
  return (
    <div className="App">
      <h1>React Hook Exercises</h1>
      <h1>ex1</h1>
      <Counter />
      <h1>ex2</h1>
      <ControlledInput />
      <h1>ex3</h1>
      <ToggleVisibility />
      <h1>ex4</h1>
      <TodoList />
      <h1>ex5</h1>
      <ColorSwitcher />
      <h1>ex6</h1>
      <SearchFilter />
      <h1>ex7</h1>
      <DragAndDrop />
    </div>
  );
}

export default App;
