import React from "react";
import { notFound } from "next/navigation";

const ReviewDetails = async ({ params }) => {
  const { reviewsID } = await params;
  const { productID } = await params;

  if (parseInt (reviewsID > 1000)) {
    notFound();
  }
  return (
    <div>
      Review {reviewsID} for Product {productID}
    </div>
  );
};

export default ReviewDetails;
