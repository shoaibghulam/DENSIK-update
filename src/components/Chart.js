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
 

    {/* earning box start  */}
       </>
    )
}
