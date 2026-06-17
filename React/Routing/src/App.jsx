import Hero from "./components/HeroPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Info from "./components/Info";
import About from "./components/About";
import { createContext } from "react";
import { Creates } from "./components/CraeteContext";
// export const Creates = createContext();
function App() {
  const data = {
    name: "Vivek",
    role: "SDE",
  };
  return (
    <>
      <Creates.Provider value={data}>
       
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="Info" element={<Info />} />
          </Routes>
          <Hero />
        </BrowserRouter>
      </Creates.Provider>
    </>
  );
}

export default App;
