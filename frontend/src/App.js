import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products") // Adjust API endpoint as needed
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>E-Commerce Store</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <img src={product.image} alt={product.name} width="100" />
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default App;

