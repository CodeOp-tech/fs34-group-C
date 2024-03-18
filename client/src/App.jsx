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
import AuthContext from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  function signIn() {
    setIsLoggedIn(true);
  }

  function signOut() {
    setIsLoggedIn(false);
  }

  const authObject = {
    isLoggedIn,
    signIn,
    signOut,
  };
  return (
    <>
      <AuthContext.Provider value={authObject}>
        <div className="wrapper">
          <NavBar />
          <div></div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />


          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/request"
            element={
              <RequireAuth>
                <Request />
              </RequireAuth>
            }
          />
          <Route path="/jobs" element={<Jobs />} />
          
          <Route
            path="/jobs/:id"
            element={
              <RequireAuth>
                <Details />
              </RequireAuth>
            }
          />
          <Route
            path="/categories"
            element={
              <RequireAuth>
                <Categories />
              </RequireAuth>
            }
          />
          <Route
            path="/chatbox"
            element={
              <RequireAuth>
                <Chatbox />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </AuthContext.Provider>

            

  );
}

export default App;
