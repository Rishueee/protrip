import React from "react";
import { Link } from "react-router-dom";




function Home() {
  return (
    <>  
      <div className='route'>
   <Link to="/" style={{textDecoration:"none", color:"white"}}>KALVIUM❤️</Link>
        <div className='ab'>
      <Link to="/about" style={{textDecoration:"none", color:"white"}}>ABOUT</Link>
      <br /> <br />
      <Link to="/contact" style={{textDecoration:"none", color:"white"}}>Registration Form</Link>
      </div>
    </div>
    <h3>HOME</h3>

    </>
    
 
  )
}

export default Home
