import Hero from "./components/HeroPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Info from "./components/Info";
import About from "./components/About";
function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="Info" element={<Info />} />
        </Routes>
      <Hero />
      </BrowserRouter>
    </>
  );
}

export default App;
