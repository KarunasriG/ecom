import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="border-b py-4">
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
