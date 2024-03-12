import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [input, setInput] = useState([
    { email: "", password: "", firstname: "", lastname: "" },
  ]);
  const [data, setData] = useState(null);

  const addUser = async () => {
    try {
      const response = await axios.post("/api/auth/register", input);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser();
      alert("You successfully registered!");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          value={input.email}
          onChange={handleChange}
          name="username"
          type="email"
          className="form-control mb-2"
          required
        />
        <input
          placeholder="password"
          value={input.password}
          onChange={handleChange}
          name="password"
          type="password"
          className="form-control mb-2"
          required
        />
        <input
          placeholder="firstname"
          value={input.firstname}
          onChange={handleChange}
          name="firstname"
          type="text"
          className="form-control mb-2"
          required
        />
        <input
          placeholder="lastname"
          value={input.lastname}
          onChange={handleChange}
          name="lastname"
          type="text"
          className="form-control mb-2"
          required
        />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}
