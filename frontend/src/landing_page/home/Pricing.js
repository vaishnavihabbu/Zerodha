import React from 'react';

function Pricing() {
    return (  
        <div className='container'>
            <div className='row'>
                <div className='col-4 p-5'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="https://kite-demo.zerodha.com/dashboard" style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'>

                </div>
                <div className='col-6 p-5'>
                    <div className='row'>
                        <div className='col p-2 border p-5'>
                            <h1 className='text-center mb-2 mt-2'><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p className='text-center'> Free equity delivery<br></br>
                            and direct mutual funds</p>
                        </div>
                        <div className='col p-2 border p-5'>
                            <h1 className='text-center mb-2 mt-2'><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p className='text-center'>  Intraday and
                            F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;