import React from 'react'

export default function Products({newcard,product_name}) {

    console.log("card====>",newcard);
    console.log("card===>",product_name);
  return (
    <div className='box'>{newcard.product_name}</div>
  )
}
