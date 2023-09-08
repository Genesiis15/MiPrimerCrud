
import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App () {

    return (
        <section className="App">
     <TwitterFollowCard    userName="midudev" > 
        <h1>Hola</h1>
        Miguel Angel Duran 
     </TwitterFollowCard>

     
       
     <TwitterFollowCard  initialIsFollowing userName="pheralb" > 

        Pablo Hernandez  
    </TwitterFollowCard>

       

   
        </section>
    )
    
}
