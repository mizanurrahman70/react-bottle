import { useState } from 'react';
import './Glass.css'

const Glass= ({glass,purcessHandle}) => {
    const {img,name ,price}=glass
    
    const [position,setPosition]=useState(false)
    const btnHandle=()=>{
        setPosition(!position)
    }
    return (
        <div className={`div ${position?'bg': 'orange'}`} >
            <img className='img' src={img} alt="" />
            <h2>Name :{name}</h2>
            <h3>Price:{price}</h3>
            <button onClick={btnHandle}>Purcess</button><br />
            <button onClick={()=>purcessHandle(glass)}>Click me</button>
           
        </div>
    );
};

export default Glass;