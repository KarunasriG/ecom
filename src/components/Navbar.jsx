import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4 shadow-md bg-gray-900 text-white">
        <div>
          <h1 className="text-3xl font-bold">ShowNow</h1>
        </div>
        <nav className="flex gap-2 ">
          <span>
            {" "}
            <FavoriteIcon sx={{ fontSize: 30 }} />
          </span>
          <span>
            {" "}
            <AddShoppingCartIcon sx={{ fontSize: 30 }} />
          </span>
          <span>
            {" "}
            <AccountCircleIcon sx={{ fontSize: 30 }} />{" "}
          </span>
        </nav>
      </header>
    </>
  );
};
