import "./App.css";
import { Home, Bubbles, Markets } from "./containers";
import { Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Home />
      <Bubbles />
      <Markets />
      <Footer />
    </div>
  );
}

export default App;
