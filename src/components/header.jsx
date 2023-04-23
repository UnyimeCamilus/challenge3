import React from "react";
import sendlogo from "../assets/sendlogo.svg"
import navsearch from "../assets/navsearch.svg"
import { Link } from "react-router-dom"
const Header = () =>{
    return(
        <div>
            <div className="flex bg-[#FB8500] justify-center gap-32 p-8 ">
                <img src={sendlogo} alt="" />
                <nav className="flex gap-8 ">
                    <ul className="text-[#fff] flex gap-8 font-bold">
                        <li>
                            <Link to="/">Products </Link></li>
                        <li><Link to="/">Resources</Link></li>
                        <li><Link to="/">Inspiration</Link></li>
                        <li><Link>Pricing</Link></li>
                    </ul>
                    <img src={navsearch} alt="" />
                    <button className="border border-gray-600 p-1 w-20 text-[#fff] hover:bg-[#023047] font-bold">
                        <Link to="/">Login</Link></button>
                    <button className="border border-gray-600 p-1 w-20 text-[#fff] hover:bg-[#023047] font-bold">
                    <Link to="/Signup">Sign-up</Link></button>
                </nav> 
            </div>
        </div>
    );
};
export default Header