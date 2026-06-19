import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Shopping Cart
        </h1>

        <Link
          to="/"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          ← Back to Products
        </Link>
      </div>

      <h2 className="text-2xl font-semibold mb-6">
        Total Items: {items.length}
      </h2>

      {items.length === 0 ? (
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h3 className="text-xl text-gray-500">
            Your Cart is Empty 🛒
          </h3>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md flex justify-between items-center"
            >
              <p className="text-xl font-medium">
                {item.name}
              </p>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}   