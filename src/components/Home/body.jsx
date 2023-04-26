import React from "react";
import message from '../../assets/message.svg'
import manposty from '../../assets/manposty.svg'

const Body = () =>{
    return(
        <div className="bg-[#FB8500] flex justify-center p-8 ">
            <div className="pt-[120px]">
                <h3 className="font-medium text-[#fff] text-5xl mb-4 w-96">
                    Accelerate sales and grow your business with send easy</h3>
                <p className="text-[#fff] mb-4 w-96">
                    Get all of the email marketing, CRM, and automation tools 
                    you need for increased profits,
                    better workflows and happier customers</p>
                <div className="flex gap-2">
                    <button className="border border-[#023047] text-[#fff] hover:bg-[#023047] p-2 rounded w-32">Sign Up</button>
                    <div className="flex border border-[#023047] text-[#fff] hover:bg-[#023047] p-2 rounded w-48">
                        <img src={message} alt="" />
                        <button >
                         Sign in with Google</button>
                    </div>
                </div> 
            </div>
            <div>
                <img src={manposty} alt="" />
            </div>
        </div>
    )
};

export default Body