import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card mb-3" style={{ height: '100%' }}> {/* Allow card to stretch */}
      <img
        className="card-img-top"
        src={product.image}
        alt={product.title}
        style={{ height: '150px', objectFit: 'contain' }} // Adjust image size
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{product.title}</h5> {/* Truncate title if too long */}
        <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          ${product.price}
        </p>
        <p className="text-warning">Rating: {product.rating?.rate || 'N/A'}</p>
        
      </div>
    </div>
  );
}

export default ProductCard;
