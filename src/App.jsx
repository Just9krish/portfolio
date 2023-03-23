import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
