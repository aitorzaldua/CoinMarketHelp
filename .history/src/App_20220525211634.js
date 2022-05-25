import "./App.css";
import { Home, Bubbles } from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Bubbles />
    </div>
  );
}

export default App;
