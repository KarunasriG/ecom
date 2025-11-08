import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  const hideNavbar =
    window.location.pathname.includes("/login") ||
    window.location.pathname.includes("/register");

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
