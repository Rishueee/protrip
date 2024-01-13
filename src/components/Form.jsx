import { Link } from 'react-router-dom'
import React, { useState } from "react";
import "./Form.css"


function Contact() {
    const [firstName, setFirstName] = useState("");
  
    const [lastName, setLastName] = useState("");
    
    const [contact, setContact] = useState("");
    
    const [email, setEmail] = useState("");
    
    const [register, setregsitration] = useState("");
    
    const [notregistered, ifnotregistered] = useState({
      firstName: "",lastName: "",email: "",contact: "",
    });
  
    const ifchanged = (e) => {
      const { name, value } = e.target;
    
      if (name === "firstName") {
        setFirstName(value);
      } else if (name === "lastName") {
        setLastName(value);
      } else if (name === "contact") {
        setContact(value);
      } else {
        setEmail(value);
      }
    };
  
    const data = (e) => {
      e.preventDefault();
      const err = {};
  
      if (firstName === "") {
        err.firstName = "First name is required";
      }
     
      if (lastName === "") {
        err.lastName = "Last name is required";
      }
      
      if (email === "") {
        err.email = "Email is required";
      }
      
      if (contact === "") {
        err.contact = "Contact is required";
      
      } else if (contact.length !== 10) {
        err.contact = "Characters must be of 10 digits";
      }
  
      if (Object.keys(err).length === 0) {
        setregsitration("Registration Successful!!");
       
        ifnotregistered({
          firstName: "",lastName: "",email: "",contact: "",
        });
      
        setFirstName("");setLastName("");setEmail("");setContact("");
      } else {
        setregsitration("");
        ifnotregistered(err);
      }}
  return (
    <>
     <div className="container">
        <div className='route'>
        <Link to="/" style={{textDecoration:"none", color:"white"}}>KALVIUM❤️</Link>
        <div className='ab'>
      <Link to="/about" style={{textDecoration:"none", color:"white"}}>ABOUT</Link>
      <br /> <br />
      <Link to="/contact" style={{textDecoration:"none", color:"white"}}>Registration Form</Link>
      </div>
    </div>
    <form onSubmit={data}>
        <p className="regitered">{register}</p>
        <div className="data">
          <input className="inputfeild" type="text" placeholder="First Name" onChange={ifchanged} name="firstName" value={firstName}/>
      
          <span>{notregistered.firstName}</span>
        </div>
       
       
        <div className="data">
        <input className="inputfeild" type="text" placeholder="Last Name" onChange={ifchanged} name="lastName" value={lastName}/>
          <span>{notregistered.lastName}</span>
      
        </div>
        
        <div className="data">
        <input className="inputfeild" type="email" placeholder="Enter Your Email" onChange={ifchanged} name="email" value={email}/>
          <span>{notregistered.email}</span>
        </div>
        
        <div className="data">
        <input className="inputfeild" type="number" placeholder="Enter Your Number" onChange={ifchanged} name="contact" value={contact}/>
          <span>{notregistered.contact}</span>
        </div>
        
        <div>
          <button className="submit" type="submit">Submit</button>
        </div>
      </form>
      </div>
    </>
  
  )
}

export default Contact