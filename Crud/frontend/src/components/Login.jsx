import { useState } from "react";
import { API } from "../api/axios";

export const Login = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const res = API.post("/auth/login", info);
      console.log("USer logged in successfully");
    } catch (error) {
      alert(message);
    }
  };
  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};
