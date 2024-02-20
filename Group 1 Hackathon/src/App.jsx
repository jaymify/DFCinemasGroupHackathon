import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import WhatsOn from "./pages/WhatsOn";
import Navbar from "./components/Navbar";
import SocialIcons from "./components/SocialIcons";

function App() {
  return (

    <Router>
      <div className="navbar-parent">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/WhatsOn" element={<WhatsOn />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <SocialIcons />
    </Router>

  );
};

export default App;
