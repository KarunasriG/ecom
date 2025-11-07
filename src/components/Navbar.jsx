import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4 shadow-md bg-gray-900 text-white">
        <div>
          <h1 className="text-3xl font-bold">
            <Link to="/">ShopNow</Link>
          </h1>
        </div>
        <nav className="flex gap-2 ">
          <Link to="/">
            {" "}
            <FavoriteIcon sx={{ fontSize: 30 }} />{" "}
          </Link>
          <Link to="/cart">
            {" "}
            <AddShoppingCartIcon sx={{ fontSize: 30 }} />{" "}
          </Link>
          <span>
            {" "}
            <AccountCircleIcon sx={{ fontSize: 30 }} />{" "}
          </span>
        </nav>
      </header>
    </>
  );
};
