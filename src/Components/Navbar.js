import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CreateContext } from "./UserContext";
import './navbar.css'
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials=true

function Navbar(){
// const {loggedin,setLoggedin} = useContext(CreateContext)
const [id,setId] = useState('')
const navigate = useNavigate();
const [loggedin,setLoggedin] =useState(true)
// Get JWT token from cookie


useEffect(()=>{
    if(loggedin){
       async function getData(){
            let response = await axios.get('https://full-server-iamst316.onrender.com/protected',{
                withCredentials:true
            })
            let name = response.data
            console.log(response.data)
            setId(name)
            // navigate('/user')
        }
        getData()
    }
},[loggedin])

async function logout(){
    let data = await axios.post('https://full-server-iamst316.onrender.com/logout',{
        withCredentials:true
    })
    alert("Want to Logout!");
    navigate('/')
    console.log(data.data)
}
return(
    <>
    <div className="nav-container">
        <div className="head-logo-container">
            <h1 className="head-logo">
            LAUNDRY
            </h1>
        </div>
        <div className="tail-logo-container">
            <p className="tail1-logo">Home</p>
            <p className="tail1-logo">Pricing</p>
            <p className="tail1-logo">Career</p>
           { id ?<p className="tail-logo" onClick={logout}>{id}</p>:<p className="tail-logo">Sign In</p>}
        </div>
    </div>
    </>
)
}

export default Navbar
