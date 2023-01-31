import React from "react";
import "./Product-Image.css";
import { Link } from "react-router-dom";
import ProductInfo from "./Product-Info";

import SingleProductView from "../pages/SingleProductView";

const ProductImage = ({ ImageLink, productId }) => {
  return (
    <div className="product-image">
      <Link to={`/products/${productId}`}>
        <img onClick={(e) => console.log(e.target.value)} src={ImageLink} />
      </Link>
    </div>
  );
};

export default ProductImage;
