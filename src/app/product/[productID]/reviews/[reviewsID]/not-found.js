"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const NotFound = () => {
    const pathName = usePathname();
    const productID = pathName.split("/")[2];
    const reviewID = pathName.split("/")[4];
  return (
    <div>
      Review {reviewID} not Found for products {productID}
    </div>
  )
}

export default  NotFound
