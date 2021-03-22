import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
