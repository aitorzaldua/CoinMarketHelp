import "./App.css";
import { Home, Bubbles, Markets, Draftdigital } from "./containers";
import { Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Home />
      <Bubbles />
      <Markets />
      <Draftdigital />
      <Footer />
    </div>
  );
}

export default App;
