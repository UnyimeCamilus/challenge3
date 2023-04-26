import React from "react";
import sendlogo from "../assets/sendlogo.svg"
import navsearch from "../assets/navsearch.svg"

const Halfnav =()=>{
    return(
        <div>
            <div className="flex bg-[#FB8500] w-[45%] relative justify-center gap-40 shadow md:shadow-lg p-8 items-stretch md:items-center  ">
                <img src={sendlogo} alt="" />
                <nav className="flex absolute bg-white right-0 top-[70px] w-full px-[60px] py-2">
                    <ul className="flex gap-5 pl-5">
                        <li>Products</li>
                        <li>Resources</li>
                        <li>Inspiration</li>
                        <li>Pricing</li>
                        
                    </ul>
                <img src={navsearch} alt="" />
                <button>Login</button>
                <button>Sign-up</button>
                </nav>
            </div>
        </div>
    )
};
export default Halfnav