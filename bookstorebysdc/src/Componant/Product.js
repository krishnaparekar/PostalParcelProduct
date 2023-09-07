import React from 'react';

const Product = ({ idx, ProductName, Product_img, Amount }) => {
  return (
    <>
      <div className="w-full max-w-xs p-4">
        <div className="bg-white border rounded-lg overflow-hidden shadow-lg h-full transform transition-transform hover:scale-110">
          <img src={Product_img} alt="Product" className="object-scale-down h-48 w-96 " />
          <div className="p-4 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-gray-800 font-semibold text-lg">{ProductName}</h2>
              <p className="text-gray-600 text-sm">{ProductName}</p>
            </div>
            <div className="mt-2">
              <span className="text-gray-800 font-semibold text-xl">Price: ₹ {Amount}</span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full mt-2">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
