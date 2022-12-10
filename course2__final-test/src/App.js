import "./App.scss";
import Filter from "./component/Filter";
import Content from "./component/Content";
import Input from "./component/Input";
function App() {
  return (
    <div className="App">
      <nav>Sanji Todo</nav>
      <Filter />
      <Input />
      <Content />
    </div>
  );
}

export default App;
