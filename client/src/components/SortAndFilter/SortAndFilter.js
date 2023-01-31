import Products from "../Products/Products";
import React, { useEffect, useState } from "react";
import { categories } from "../data/data";

const SortAndFilter = ({ label, categories, onFilterChange = () => {} }) => {
  return (
    <div className="collection-sort">
      <label>{label}</label>
      <select onChange={onFilterChange}>
        <option value={"All products"}>All Products</option>
        {categories.map((option2, index) => (
          <option key={index} value={option2}>
            {option2}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortAndFilter;
