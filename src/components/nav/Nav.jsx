import React from "react";
import { FaTruckMoving } from 'react-icons/fa'; 
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';
import { BsBagCheck } from 'react-icons/bs';
import logo from"../../assests/img/logo.svg"
import "../nav/nav.css"
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import {  BiMenu, BiX } from 'react-icons/bi';
const Nav=({searchbtn})=>{
    const [search , Setsearch]=useState()
    const { loginWithRedirect,logout,user, isAuthenticated, } = useAuth0();
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <div className="free">
       
            <div className="icon">
            <FaTruckMoving /> 
            </div>
             <p>
        free shiping when shopping upto
        $1000</p>
    </div>
        <div className="main-header">

            <div className="container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                
                <div className="icon">
                    {
                        isAuthenticated&&
                        (
                             <div className="account">
                        <div className="user-icon">
                             <AiOutlineUser />
                        </div>
                        <p>hello, {user.name}</p>
                    </div>
                        )
                    }
                   
                    <div className="second-icons">
                        
                        <Link to="/cart" className="link"><BsBagCheck /></Link>    
 
                    </div>
                    
                    
                </div>
            </div>

        </div>

        <div className="header">
            {/* <div className="container">

                <div className="Nav">

                      <ul>
                    <li>
                        <Link to="/" className="lnk active">Home</Link>
                    </li>
                    <li>
                        <Link to="/product" className="lnk">Product</Link>
                    </li>
                    <li>
                        <Link to="/About" className="lnk">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact" className="lnk">Contact</Link>
                    </li>
                    
                </ul>
                </div>
              

                <div className="auth">
                    {
                        isAuthenticated?
                         <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><BiLogOut /></button>
                        :
                        <button onClick={()=>loginWithRedirect()}><BiLogIn /></button>
                    }
                    
                    
                    
                    
                </div>
            </div> */}

<div className="container">
      <div className="nav-header">
      

        <button className="burger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BiX size={30} /> : <BiMenu size={30} />}
        </button>
      </div>

      <div className={`Nav ${isOpen ? 'show' : ''}`}>
        <ul>
          <li><Link to="/" className="lnk active">Home</Link></li>
          <li><Link to="/product" className="lnk">Product</Link></li>
          <li><Link to="/About" className="lnk">About</Link></li>
          <li><Link to="/Contact" className="lnk">Contact</Link></li>
        </ul>
      </div>

      <div className="auth">
        {
          isAuthenticated ? (
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              <BiLogOut />
            </button>
          ) : (
            <button onClick={() => loginWithRedirect()}>
              <BiLogIn />
            </button>
          )
        }
      </div>
    </div>
        </div>
        </>
    )
    
}

export default Nav