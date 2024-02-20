import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Navigation from "./pages/Navigation";
import Profile from "./pages/profile/Profile";
import Comments from './pages/comments/Comments'
import Setting from './pages/Setting'
import BackButton from "./components/BackButton/BackButton";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Navigation/>} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Comments" element={<Comments />} />
          <Route path="Setting" element={<Setting />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;