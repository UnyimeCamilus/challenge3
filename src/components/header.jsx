import React from "react";
import sendlogo from "../assets/sendlogo.svg"
import navsearch from "../assets/navsearch.svg"
import { useState } from "react";
import { Link } from "react-router-dom"
import { GrClose } from "react-icons/gr";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () =>{
    const [mobileIcon, setMobileIcon] = useState(false);
  const mobileHandler = () => {
    setMobileIcon((prev) => !prev);
  };
    return(
        <div>
            <div className="flex bg-[#FB8500] justify-center gap-40 shadow md:shadow-lg p-8 items-stretch md:items-center  fixed w-full">
                <Link to="/">
                <img src={sendlogo} alt="" />
                </Link>
                            <div onClick={mobileHandler} className="block md:hidden">
                    {mobileIcon ? (
                    <GrClose className="text-[30px]" />
                    ) : (
                    <HiOutlineMenuAlt3 className="text-[30px]" />
                    )}
                </div>
                {mobileIcon && (
                <nav className="grid absolute bg-white right-0 top-[70px] w-full px-[60px] py-2">
                    <ul className="grid gap-5 pl-5">
                        <li>
                            <Link to="/">Products </Link></li>
                        <li><Link to="/">Resources</Link></li>
                        <li><Link to="/">Inspiration</Link></li>
                        <li><Link>Pricing</Link></li>
                    </ul>
                    <img src={navsearch} alt="" />
                    <button className="border border-gray-600 p-1 w-20 text-[#fff] hover:bg-[#023047] font-bold">
                        <Link to="/Login">Login</Link></button>
                    <button className="border border-gray-600 p-1 w-20 text-[#fff] hover:bg-[#023047] font-bold">
                    <Link to="/Signup">Sign-up</Link></button>
                </nav> 
                    )}
                <nav className="hidden justify-center items-center md:flex ">
                    <ul className="flex gap-5 pl-5">
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