import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes></Routes>
    </Router>
  );
}

export default App;
