import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
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
      <ul className="nav" col-6>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            href="#"
            to="/About"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" to="/Jobs">
            Marketplace
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" to="/Request">
            New Request
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" to="/Profile">
            My Profile
          </Link>
        </li>
      </ul>

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
