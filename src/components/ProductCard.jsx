import { AddShoppingCart } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addToCart, removeFromCart } from "../slice/cartSlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "../slice/favoriteItemsSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favoriteItems.items);

  if (cartItems) console.log("Cart Items:", cartItems.length);

  const [isFavorited, setIsFavorited] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const handleAddToWishlist = () => {
    console.log("Product added to wishlist:", product);
    if (isFavorited) {
      dispatch(removeFromFavorites(product.id));
      setIsFavorited(false);
      return;
    }
    dispatch(addToFavorites(product));
    setIsFavorited(true);
  };

  const handleAddToCart = () => {
    console.log("Product added to cart:", product);
    if (isInCart) {
      dispatch(removeFromCart(product.id));
      setIsInCart(false);
      return;
    }
    dispatch(addToCart(product));
    setIsInCart(true);
  };
  return (
    <div className="w-64 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col relative">
      <div className="w-full h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          src={product.images[0]}
          alt="shoes"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>

        <div className="text-gray-600">
          <p className="text-base font-medium mt-1">Rs {product.price} </p>
        </div>

        <button
          onClick={handleAddToWishlist}
          className="mt-3 flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 active:scale-95 transition-all"
        >
          {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          Add To Wishlist
        </button>
        <button
          onClick={handleAddToCart}
          className="mt-3 flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 active:scale-95 transition-all"
        >
          {isInCart ? <AddShoppingCart /> : <ShoppingCartIcon />}
          Add To Cart
        </button>
      </div>
    </div>
  );
};
