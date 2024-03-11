import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Request from "./pages/Request";
import Jobs from "./pages/Jobs";
import Details from "./pages/Details";
import Categories from "./pages/Categories";
import Chatbox from "./pages/Chatbox";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Registration" element={<Registration />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Request" element={<Request />}></Route>
        <Route path="/Jobs" element={<Jobs />}></Route>
        <Route path="/Details" element={<Details />}></Route>
        <Route path="/Categories" element={<Categories />}></Route>
        <Route path="/Chatbox" element={<Chatbox />}></Route>
      </Routes>
    </>
  );
}

export default App;
