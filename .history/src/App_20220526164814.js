import "./App.css";
import { Home, Bubbles, Draftdigital } from "./containers";
import { Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Home />
      <Bubbles />
      <Draftdigital />
      <Footer />
    </div>
  );
}

export default App;
