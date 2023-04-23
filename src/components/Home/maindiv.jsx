import React from "react";
import sms from '../../assets/sms.svg';
import image from '../../assets/image1.png';
import image3 from '../../assets/image3.png';
import image2 from '../../assets/image2.png';

const Maindiv =()=>{
    return(
        <div className="grid place-items-center">
            <div className="text-[36px] text-center w-[636px] text-[#023047]">
                <h4>Stay in touch with your customers wherever they are</h4>
            </div>
            <div className="grid grid-cols-4 gap-8 m-20">
                 <div className="shadow md:shadow-lg py-8 px-4 rounded md:rounded-lg md:border-gray-200 w-[300]">
                    <img src={sms} alt="" />
                    <h5 className="font-bold text-sm pt-6">Email Marketing</h5>
                    <p className="w-[250px] text-sm">Deliver valuable content straight to your audience’s inboxes</p>
                 </div>
                 <div className="shadow md:shadow-lg py-8 px-4 rounded md:rounded-lg md:border-gray-200 w-[300px] ">
                    <img src={image } alt=""  />
                    <h5 className="font-bold text-sm pt-4">Text Messaging</h5>
                    <p className="w-[300px] text-sm">Reach your prospects on their mobile phones while they’re on the go</p>
                 </div>
                 <div className="shadow md:shadow-lg py-8 px-4 rounded md:rounded-lg md:border-gray-200 w-[300px] ">
                    <img src={image3} alt=""  className=""/>
                    <h5 className="font-bold text-sm pt-4">Chatbots</h5>
                    <p className="w-[280px] text-sm">Use chatbots to connect with your audience in real time</p>
                 </div>
                 <div className="shadow md:shadow-lg py-8 px-4 rounded md:rounded-lg md:border-gray-200 ">
                    <img src={image2} alt="" />
                    <h5 className="font-bold text-sm pt-8">Web Push</h5>
                    <p className="w-[270px] text-sm">Connect with your subscribers, no matter what they’re doing online</p>
                 </div>
            </div>
        </div>
    )
};
export default Maindiv