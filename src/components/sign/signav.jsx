import React from "react";
import sendlogo from '../../assets/sendlogo.svg';
import navsearch from '../../assets/navsearch.svg';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import classing from '../sign/signav.module.css';


const Signav =()=>{

   const[isOpen, SetIsOpen] = useState(false);
   const ShowSideBar = () =>SetIsOpen(!isOpen);
    return(
        <div className={classing.header}>
            
           <div>
             <Link to="/">
                <img src={sendlogo} alt="" />
                </Link>
            </div>
            <div className="">
            <nav  className="">
                    <ul>
                        <li>
                            <Link to="/">Products </Link></li>
                        <li><Link to="/">Resources</Link></li>
                        <li><Link to="/">Inspiration</Link></li>
                        <li><Link>Pricing</Link></li>
                    </ul>
                    <img src={navsearch} alt="" />
                    <button>
                        <Link to="/">Login</Link></button>
                    <button>
                    <Link to="/Signup">Sign-up</Link></button>
                </nav> 
            </div>
             
        </div>
    )
};

export default Signav