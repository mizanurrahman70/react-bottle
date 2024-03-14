import React from 'react';
import './Card.css'
const Card = ({bottle,HandleRemove}) => {
    

    return (
        <div><h1>Product:{bottle.length}</h1> 
        <div className='flex'>
            
            {
                bottle.map(bottle=><div > <img className='size' src={bottle.img} alt="" />
                <h3>price:{bottle.price}</h3>
                <button onClick={()=>HandleRemove(bottle.id)}>remove</button> </div>)
            }

        </div>
        </div>
    );
};

export default Card;