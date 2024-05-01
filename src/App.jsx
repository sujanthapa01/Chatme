import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Navigation from "./pages/Navigation";

import Comments from './pages/comments/Comments'
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Navigation/>} />
          <Route path="Comments" element={<Comments />} />
          <Route path="Login" element={<Login/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;