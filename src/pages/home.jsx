import React from "react";
import Header from "../components/header";
import Body from "../components/Home/body";
import Maindiv from '../components/Home/maindiv';
import Footer from "../components/Home/footer";
    

const Home = ()=>{
    return(
        <div>
            <Header />
            <Body />
            <Maindiv />
            <Footer />
        </div>
    )
};
export default Home