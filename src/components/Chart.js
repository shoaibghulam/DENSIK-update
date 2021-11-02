import React from 'react'
import {BiBitcoin} from 'react-icons/bi';
// chart start

import { Line } from 'react-chartjs-2';
import {FaExchangeAlt} from 'react-icons/fa';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '',
      data: [12, 7, 12, 7, 12, 7],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const chartoptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

// chart end
export default function Chart() {
    return (

       <>
           <section className=" container-fluid pb-60 mt-100">
    <div className="row pb-60 mt-100">
<div className="col-md-12">

         <h1 className="crypto-char-tab-title">top Most Traded Crypto</h1>
</div>
{/* row start */}
        <div className="col-md-3 col-sm-10 mx-auto mt-4">
            <div className="chart-box">
            <div className="chart-icon bitcoin-icon">
               <BiBitcoin />
           </div>
           <span className="chart-title">BTC <FaExchangeAlt className="exchange-icon"/> <span>USA</span></span>
           <br/>
           <h3 className="chart-price">
           $20.000
           </h3>
           <div className="mt-3">
           <Line data={data} options={chartoptions} />
           </div>
            </div>
          
        </div>
        {/* row end */}
{/* row start */}
        <div className="col-md-3 col-sm-10 mx-auto mt-4">
            <div className="chart-box">
            <div className="chart-icon bitcoin-icon">
               <BiBitcoin />
           </div>
           <span className="chart-title">BTC <FaExchangeAlt className="exchange-icon"/> <span>USA</span></span>
           <br/>
           <h3 className="chart-price">
           $20.000
           </h3>
           <div className="mt-3">
           <Line data={data} options={chartoptions} />
           </div>
            </div>
          
        </div>
        {/* row end */}
{/* row start */}
        <div className="col-md-3 col-sm-10 mx-auto mt-4">
            <div className="chart-box">
            <div className="chart-icon bitcoin-icon">
               <BiBitcoin />
           </div>
           <span className="chart-title">BTC <FaExchangeAlt className="exchange-icon"/> <span>USA</span></span>
           <br/>
           <h3 className="chart-price">
           $20.000
           </h3>
           <div className="mt-3">
           <Line data={data} options={chartoptions} />
           </div>
            </div>
          
        </div>
        {/* row end */}
{/* row start */}
        <div className="col-md-3 col-sm-10 mx-auto mt-4">
            <div className="chart-box">
            <div className="chart-icon bitcoin-icon">
               <BiBitcoin />
           </div>
           <span className="chart-title">BTC <FaExchangeAlt className="exchange-icon"/> <span>USA</span></span>
           <br/>
           <h3 className="chart-price">
           $20.000
           </h3>
           <div className="mt-3">
           <Line data={data} options={chartoptions} />
           </div>
            </div>
          
        </div>
        {/* row end */}
         </div>
    </section>
    <section className="steps  pb-60 mt-50">
        <div className="container text-center mt-100">
            <h1>BUY/SELL CRYPTO FAST IN 3 EASY STEPS</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <div className="row text-center">
                <div className="col-md-4 col-10 mx-auto card-box text-center">
                    <img src="img/bitcoin.png"/>
                    <h1>Choose Currency and Amount</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="col-md-4 col-10 mx-auto card-box text-center">
                    <img src="img/step2.png"/>
                    <h1>Choose Currency and Amount</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="col-md-4 col-10 mx-auto card-box box-light text-center">
                    <img src="img/step3.png"/>
                    <h1>Choose Currency and Amount</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="col-md-12 col-10 mx-auto mt-50 text-center">

            <a className="btn-blue mt-50" href="#">See How It’s Work</a>
            </div>
        </div>

    </section>

    {/* earning box start  */}
       </>
    )
}
