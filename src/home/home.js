import React from "react";
import {  useHistory} from "react-router-dom";

function Home(){
    let username = localStorage.getItem("username");
    let mail  = localStorage.getItem("email");
    let history = useHistory();
    const handleLogout = () => {
		history.push("/login");
        
	};
    
    return(
        <div className="home">
        <h2 >Usernames= {username}</h2>
        <h2 >Email= {mail}</h2>
        <button type="button"  onClick={handleLogout}>logout</button>
        </div>
    )
}

export default Home;
