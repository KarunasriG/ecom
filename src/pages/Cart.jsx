import { useSelector } from "react-redux";
import HorizontalProductCard from "../components/HorizontalProductCard";
import PriceDetails from "../components/PriceDetails";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8 justify-between">
        {/* LEFT: Product List */}
        <div className="flex-1 flex flex-col items-center gap-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty. Let’s add some products 🥳</p>
          ) : (
            cartItems.map((item) => (
              <HorizontalProductCard key={item.id} product={item} />
            ))
          )}
        </div>

        {/* RIGHT: Price Details */}
        {cartItems.length > 0 && (
          <div className="w-full lg:w-1/3 self-start">
            <PriceDetails />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
