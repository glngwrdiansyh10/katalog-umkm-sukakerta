import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="glass-panel overflow-hidden transition-transform duration-300 hover:-translate-y-1" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ height: '160px', overflow: 'hidden' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="img-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div style={{ padding: '1rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>{product.name}</h3>
        <p className="text-gradient" style={{ fontWeight: '700', fontSize: '1.125rem' }}>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
