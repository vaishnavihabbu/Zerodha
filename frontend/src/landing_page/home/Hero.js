import React from 'react';

function Hero() {
    return ( 
    <div className="container p-5">
        <div className='row text-center'>
            <img src='media/images/homeHero.png' alt="Hero Image" className="mb-5"></img>
            <h1 className="mt-5">Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className="p-2 btn btn-primary fs-5" style={{width:'20%' , margin:"0 auto"}}>Sign Up for Free</button>
        </div>
    </div>);
}

export default Hero;