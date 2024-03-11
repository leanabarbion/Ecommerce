import React, { useState } from "react";
import inventory from "./data/inventory.json"; // Adjust the path as necessary

const ProductList = ({ onAddToCart }) => {
  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(inventory.map((product) => product.category)),
  ];

  // Adjusted filter logic for product name and selected category
  const filteredProducts = inventory.filter((product) => {
    const filterMatch = product.name
      .toLowerCase()
      .includes(filter.toLowerCase());
    const categoryMatch =
      selectedCategory === "All" ? true : product.category === selectedCategory;
    return filterMatch && categoryMatch;
  });

  return (
    <div className="mb-3">
      <div className="input-group">
        <select
          className="form-select"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">
                  <small className="text-muted">{product.category}</small>
                </p>
                <button
                  onClick={() => onAddToCart(product)}
                  className="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
