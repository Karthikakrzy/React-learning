import React,  { useEffect, useState } from "react";

const User =(props)=> {
    const [planet,setPlanet] = useState("earth");
    
    //DIDMOUNT
    useEffect(()=>{
        
    console.log("compo mounting");
    //componentUnMount
    return console.log("bye bye");
    }, []);

    //DIDUPDATE
    //shouldUpdate
    useEffect(()=>{
        console.log("Planet Changed");
    },[planet]);
    
      return  (
<div>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <button onClick={()=>setPlanet("pluto")}>
        {planet}
    </button>
</div>
        );

}
export default  User;