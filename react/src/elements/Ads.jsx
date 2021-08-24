import React from 'react';
import '../css-pack/Work.css';
import advert from '../images/sale.gif'
import dp from '../images/xyz.png'

export default class Ads extends React.Component {
    render(){
        return(
            <header>
                 <div className="Ads-memo">
                    <img src={advert} alt="display-ads"/>
                 </div> 
                 <img src={dp} className="dp"/>
                 <div className="Address">
                 <p>XYZ Stores New York</p>
                 <p>31 Hawk Drive,Village of New Paltz</p>
                 <p>NY-12561 | United States</p>
                 </div>
            </header>
        )
    }
}