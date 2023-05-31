import React from "react";


import Banner from "../components/Banner";
import Footer  from "../components/Footer";
import Nav from "../components/Navbar";

import { Feature } from "../components/XenexOfferSec";
import { Step } from "../components/Step";
import FeaturedSec from "../components/FeaturedSec";
import Hero from "../components/Hero";
import FAQ from "./FAQ";



const Home = () => {

  return (
    <div className=''>
         
         <Hero/>
         <FeaturedSec/>
         <Step/> 
         <FAQ/>
         
        
          
         
    </div>
  );
};

export default Home;
