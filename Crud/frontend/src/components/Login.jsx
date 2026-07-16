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

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res =await API.post("/auth/login", info, {
        withCredentials: true,
      });
      console.log(res.data);
      if (res.data) {
        console.log(res.data.token);
      }
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
