import React from "react";
import MyContext from "../../MyContext";
import { useContext } from "react";
import { useEffect } from "react";
import "./Admin.css"; //
import ApiAddProduct from "../AdminPageActions/ApiAddProduct";

const Admin = () => {
  return (
    <div className="allProducts">
      <ApiAddProduct />
    </div>
  );
};

export default Admin;
