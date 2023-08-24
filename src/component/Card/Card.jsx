import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "./Card.css"
import { Link } from 'react-router-dom';

const Card = ({Element}) => {

    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false);
        },1500);
    },[])

  return (
        <>
        {
             isLoading
             ?
             <div  className='cards'>
                 <SkeletonTheme color="#202020" highlightColor="#444">
                         <Skeleton height={300}  duration={2} />
                 </SkeletonTheme>
             </div>
             :
             <Link to={`/movie/${Element.id}`} style={{textDecoration:"none",color:"white"}}> 
             <div className="cards">
                 <img src={Element?Element.thumbnail:""} alt="" className="cards_img" />
                 <div className="cards_overlay">
                     <div className="card_title">{Element?Element.title:""}</div>   
                     <div className="card_price">{Element?Element.price:""}$</div>   
                     <div className="card_description">{Element?Element.description:""}</div>
                     <div className="card_category">TYPE : {Element?Element.category:""}</div>

                 </div>
             </div>
              
             </Link>
        }
        
        </>
  )
}

export default Card