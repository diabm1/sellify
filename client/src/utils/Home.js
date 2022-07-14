import React from "react";
import Shop from "../pages/Shop";

function Home() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
            <Shop></Shop>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}
export default Home;