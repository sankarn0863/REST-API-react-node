import React from 'react';
import '../css-pack/Work.css';
import Ads from '../elements/Ads'
import Dis from '../elements/Display'
import Inp from '../elements/Input'

export default class Work extends React.Component {
    render(){
        return(
            <header>
               <div className="Work">
               <div className="Navbar">
                    <ul>
                        <li></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">About</a></li>
                        
                    </ul>
 
                   </div>

                   <div className="coloumn1">
                       <Ads/>
                   </div>
                     
                   <div className="coloumn2">
                        <Dis/>
                    </div>  
                    <div className="coloumn3">
                        <Inp/>
                    </div>              
               </div>
            </header>
        )
    }
}
