import "./App.css";
import { Home, Bubbles, Draftdigital } from "./containers";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Bubbles />
      <Draftdigital />
      <Footer />
    </div>
  );
}

export default App;
