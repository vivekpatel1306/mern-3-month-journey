import { useState } from "react";
import { API } from "../api/axios";
export const Register = () => { 
  const [info, setInfo] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      API.post("/auth/register", info);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </>
  );
};
