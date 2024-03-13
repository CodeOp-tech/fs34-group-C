import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Request from "./pages/Request";
import Jobs from "./pages/Jobs";
import Details from "./pages/Details";
import Categories from "./pages/Categories";
import Chatbox from "./pages/Chatbox";
import Page404 from "./pages/Page404";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/request" element={<Request />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/details" element={<Details />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/chatbox" element={<Chatbox />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
