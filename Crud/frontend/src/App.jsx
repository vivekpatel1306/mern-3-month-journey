import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import { Home } from "./components/Home";
import { AllTodos } from "./components/Todos";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="notes" element={<AllTodos />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
