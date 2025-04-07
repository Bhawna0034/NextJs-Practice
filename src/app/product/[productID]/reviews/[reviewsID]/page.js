import React from 'react'

const ReviewDetails = async({params}) => {
   const {reviewsID} = await params;
   const {productID} = await params;
  return (
    <div>
      Review {reviewsID} for Product {productID}
    </div>
  )
}

export default ReviewDetails
