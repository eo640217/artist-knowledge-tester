import React from "react";
import Homeview from "./views/Homeview";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homeview />} />
      </Routes>
    </Router>
  );
};

export default App;
