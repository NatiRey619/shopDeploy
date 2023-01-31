import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "@mui/material";
import MyContext from "../../MyContext";

const SingleProductView = () => {
  const { data } = useContext(MyContext);
  const [singleProduct, setSingleProduct] = useState({});
  const params = useParams();
  //   console.log(params);
  //dynamic product ID
  console.log(params);
  return (
    <div>
      <Card variant="outlined">{params.productId}</Card>
    </div>
  );
};

export default SingleProductView;
