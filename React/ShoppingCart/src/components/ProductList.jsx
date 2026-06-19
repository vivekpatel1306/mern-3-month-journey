import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function ProductList() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" }
  ];

  const items = useSelector(
    (state) => state.cart.items
  );

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Products
        </h1>

        <Link
          to="/cart"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          🛒 Cart ({items.length})
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div  
            key={product.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {product.name}
            </h2>

            <button
              onClick={() =>
                dispatch(addToCart(product))
              }
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}