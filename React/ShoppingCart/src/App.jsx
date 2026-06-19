import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
      {/* <ProductList /> */}
      {/* <Cart /> */}
    </>
  );
}