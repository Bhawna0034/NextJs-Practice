import React from "react";

const ProductDetails = async ({ params }) => {
    const {productID} = await params;
  return <div>Product {productID} Details</div>;
};

export default ProductDetails;
