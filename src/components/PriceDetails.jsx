const PriceDetails = () => {
  return (
    <div className="border p-4 rounded-lg w-full  max-w-md ">
      <h2 className="text-lg font-semibold mb-4">Price Details</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>$100</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>$10</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax</span>
        <span>$5</span>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>$115</span>
      </div>
    </div>
  );
};

export default PriceDetails;
