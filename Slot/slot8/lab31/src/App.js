import "./App.css";
import CardInfo from "./AboutMe";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomCard from "./CustomCard";
import TopCard from "./TopCard";
import Header from "./TopCard";
import Info from "./ex5";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <CardInfo /> */}
      <CustomCard />
      <Info />
    </div>
  );
}

export default App;
