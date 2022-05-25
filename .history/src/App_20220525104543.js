import "./App.css";
import { Home } from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
