// react router

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// page components

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
