import React from 'react';

function Education() {
    return ( 
        <div className="container p-5">
        <div className='row p-5'>
            <div className='col-6 p-5'>
                <img src='media/images/education.svg'></img>
            </div>
            <div className='col-6 p-5'>
                <h1 className='mb-4 fs-2'>Free and open market education</h1>
                <p className='mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a className='mb-4' href="" style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                <p className='mb-4 mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
     );
}

export default Education;