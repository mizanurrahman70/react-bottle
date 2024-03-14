import { useEffect } from "react";
import { useState } from "react";
import Glass from "./glass/Glass";
import { addTol, getLocalStroge,removeFrom } from "./Utilitis/LocalStroge";
import Card from "./Card/Card";


const Glaseses = () => {
    const [glaseses,setGlasses]=useState([])
    useEffect(()=>{
        fetch("water.json")
        .then(res=>res.json())
        .then(data=>setGlasses(data))
    },[])
    // load card from localStorage 
    useEffect(()=>{
      if(glaseses.length >0){
        const localCard=getLocalStroge()
        const saveCard=[]
      for(const card of localCard){
        const foundGlass = glaseses.find(glass => glass.id === card);
        if(foundGlass){
            saveCard.push(foundGlass)

        }
      }
      console.log(saveCard)
      setbottle(saveCard)
      }
     
    },[glaseses])
   
   const[bottle,setbottle]=useState([])
    const purcessHandle=(data)=>{
      
      const newBottle=[...bottle, data]
      setbottle(newBottle)
      addTol(data.id)
      
     
    }
    const HandleRemove=id=>{
      removeFrom(id)
      const remeing = glaseses.filter(glass => glass.id !== id);
      setGlasses(remeing)
    }

    return (
        <div>
         
          <Card bottle={bottle} HandleRemove={HandleRemove}></Card>
          <div className='grid' >
            {
                glaseses.map((glass,l)=><Glass 
                glass={glass} 
                key={l}
                purcessHandle={purcessHandle}
                >
                  
                </Glass>)
            }
          </div>
        </div>
       
    );
};

export default Glaseses;