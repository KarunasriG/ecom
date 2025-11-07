import { Navbar } from "../components/Navbar";
import { useState, useEffect } from "react";
import { getAllProducts } from "../api/getAllProducts";
import { ProductCard } from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      setProducts(data);
    })();
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-wrap gap-6 p-8">
          {products?.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}{" "}
        </div>
      </main>
    </>
  );
};

export default Home;
