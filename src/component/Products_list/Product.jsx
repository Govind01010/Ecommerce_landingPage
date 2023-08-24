import React, {  useState } from 'react'
import Card from '../Card/Card';
import "./Products.css"

const Product = ({data}) => {

  
    
  return (
    <div className='wrapper'>
        {
            data && data.map((Element,index)=>{
                return(
                  <Card
                    key={index}
                    Element={Element}
                  />
                )
            })
        }
    </div>
  )
}

export default Product;
