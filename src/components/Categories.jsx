import React from "react";

const Categories = ({ categories, onCategoryChange }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className="btn"
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
