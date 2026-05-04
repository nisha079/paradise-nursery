import React from "react";

const products = [
  { id: 1, name: "Aloe Vera", price: 200 },
  { id: 2, name: "Snake Plant", price: 300 },
  { id: 3, name: "Peace Lily", price: 250 },
];

function ProductList() {
  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
