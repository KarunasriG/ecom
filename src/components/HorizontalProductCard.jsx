const HorizontalProductCard = ({ product }) => {
  return (
    <>
      <div className="w-2/3 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex relative mb-6">
        <div className="w-1/2 h-full overflow-hidden mr-5">
          <img className="w-full" src={product.images[0]} alt="product image" />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <div className="text-[18px]">
            <h2>{product.title}</h2>

            <p>${product.price}</p>
          </div>

          <div className="text-xl">
            <span>Quantity:</span>
            <button className="mx-2">-</button>
            <span className="mx-2">1</span>
            <button className="mx-2">+</button>
          </div>

          <div className="flex mb-4">
            <button className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 hover:shadow-md hover:scale-105 transition-all mr-4 rounded">
              Remove from to Cart
            </button>
            <button className="border-green-500 border text-green-500  px-4 py-2 hover:shadow-md hover:scale-105 transition-all mr-4 rounded">
              {" "}
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalProductCard;
