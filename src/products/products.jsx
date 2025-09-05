import React from "react";

const products = [
  { id: 1, name: "Product 1", price: "$10" },
  { id: 2, name: "Product 2", price: "$15" },
  { id: 3, name: "Product 3", price: "$20" },
  { id: 4, name: "Product 4", price: "$25" }
];

function Products() {
  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
