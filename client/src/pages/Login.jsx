import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async () => {
    try {
      const { data } = await axios("/api/auth/login", {
        method: "POST",
        data: credentials,
      });
      localStorage.setItem("token", data.token);
      alert("Logged in");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <input
          value={email}
          onChange={handleChange}
          name="email"
          type="email"
          className="form-control mb-2"
        />
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          className="form-control mb-2"
        />
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-primary" onClick={login}>
            Log in
          </button>
        </div>
      </div>
      <div className="mt-2">
        Not registered yet? Click here to <Link to="/register">Register</Link>
      </div>
      {/* {isLoggedIn ? (
        <div className="text-center p-4">
          <div className="alert">You are logged in</div>
        </div>
      ) : (
        <div className="text-center p-4">
          <div className="mt-2">
            Not registered yet? Click here to{" "}
            <Link to="/register">Register</Link>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Login;
