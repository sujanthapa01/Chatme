import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Navigation from "./pages/Navigation";
import Profile from "./pages/profile/Profile";
import Comments from './pages/comments/Comments'
import Login from "./pages/Login";
import BackButton from "./components/BackButton/BackButton";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Navigation/>} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Comments" element={<Comments />} />
          <Route path="Login" element={<Login/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;