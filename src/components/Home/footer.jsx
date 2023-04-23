import React from "react";
import arrow from '../../assets/arrow.svg';
import together from '../../assets/together.svg';

const Footer =()=>{
    return(
        <div className="flex bg-[#EFEEEA] pt-36 pb-20 justify-center gap-12">
            <div>
            <h5 className="font-bold ">Products</h5>
            <div>
                <p className="text-sm ">Why Send easy?</p>
                <p className="text-sm font-medium">Product Updates</p>
                <p className="text-sm font-medium">Email Marketing</p>
                <p className="text-sm font-medium">Websites</p>
                <p className="text-sm font-medium">Transactional Email</p>
                <p className="text-sm font-medium">How we compare</p>
                <p className="text-sm font-medium">Security</p>
                <p className="text-sm font-medium">Status</p>
                <p className="text-sm font-medium">Mobile App</p>
            </div>
            </div>
            <div>
            <h5 className="font-bold ">Resources</h5>
            <div>
                <p className="text-sm font-medium">Guide and tutorials</p>
                <p className="text-sm font-medium">Marketing Tips</p>
                <p className="text-sm font-medium">Free Marketing Tools</p>
                <p className="text-sm font-medium">Marketing Glossary</p>
                <p className="text-sm font-medium">Browse by Topic</p>
                <p className="text-sm font-medium">Intergrations Directory</p>
                
            </div>
            </div>
            <div>
                <h5 className="font-bold ">Community</h5>
                <div>
                <p className="text-sm font-medium">Agencies and Freelancers</p>
                <p className="text-sm font-medium">Developers</p>
                <p className="text-sm font-medium">Events</p>
                </div>
            </div>
            <div>
                <h5 className="font-bold ">Company</h5>
                <div>
                <p className="text-sm font-medium">Our Story</p>
                <p className="text-sm font-medium">Newsroom</p>
                <p className="text-sm font-medium">Annual Report</p>
                <p className="text-sm font-medium">Careers</p>
                <p className="text-sm font-medium">Developers</p>
                <p className="text-sm font-medium">Events</p>
                </div>
            </div>
            <div>
                <h5 className="font-bold ">Help</h5>
                <div>
                <p className="text-sm font-medium">Contact Us</p>
                <p className="text-sm font-medium">Hire an Expert</p>
                </div>
            </div>

            <div>
                <h5 className="font-bold ">Send easy</h5>
                <p className="w-40">Films, podcasts, and original series that celebrate the entrepreneurial spirit.</p>
                <div className="flex gap-2 pt-4">
                <p className="font-bold ">Check it out</p>
                <img src={arrow} alt="" />
                </div>
                <div className="flex gap-2 pt-16 pb-4">
                    <img src={together} alt="" />
                    <h5 className="font-bold ">Courier</h5>
                </div>
                <p className="w-40 ">Expert insights, industry trends, and insipiring stories that help you live and work on your own terms.</p>
                <div className="flex pt-4 gap-2">
                    <p className="font-semibold ">Learn more</p>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    )
};
export default Footer