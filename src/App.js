import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componenrs/home/Home";
import './App.css';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}
