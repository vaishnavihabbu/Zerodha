import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';
function Homepage() {
    return ( <>
    
    <Hero></Hero> 
    <Awards></Awards>
    <Stats></Stats>
    <Pricing></Pricing>
    <Education></Education>
    <OpenAccount></OpenAccount>
    <Footer></Footer>
    </>);
}

export default Homepage;