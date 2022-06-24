import React from "react";

function Home(){
    let mail = localStorage.getItem("user")
    
    return(
        <p>email= {mail}</p>
    )
}

export default Home;