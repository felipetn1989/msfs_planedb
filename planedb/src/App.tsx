// react router

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// page components

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Planes from "./components/pages/Planes";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planes" element={<Planes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
