import { Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";

function App() {
  return (
    <div>
     
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/home">Home</Link> | 
        <Link to="/menu">Menu</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;