import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ValidatedInput from "./ex4/ex4";
import LoginForm from "./ex5/ex5";
import FullValidationForm from "./ex6/ex6";

function App() {
  return (
    <div className="container mt-4">
      <h2>Bài 4: Validated Input</h2>
      <ValidatedInput />

      <h2 className="mt-5">Bài 5: Login Form</h2>
      <LoginForm />

      <h2 className="mt-5">Bài 6: Full Validation Form</h2>
      <FullValidationForm />
    </div>
  );
}

export default App;
