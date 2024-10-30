import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-sm rounded-md p-2 flex flex-col items-center text-center h-32"> 
      <img
        src={product.image}
        alt={product.title}
        className="h-20 w-20 object-contain mb-1" 
      />
      <h2 className="text-xs font-semibold line-clamp-2">{product.title}</h2> 
      <p className="text-gray-700 text-xs mt-1">${product.price}</p> 
      <p className="text-yellow-500 text-xs">Rating: {product.rating?.rate || 'N/A'}</p> 
    </div>
  );
}

export default ProductCard;