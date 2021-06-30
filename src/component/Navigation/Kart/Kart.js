import React from 'react';
import Kart from '../../../assets/Kart.svg'
import './Kart.css'
import {Link} from 'react-router-dom'

const cart = () => {
    return (
        <Link to="/cart"><img src={Kart} alt="kart" className="w-14 h-8 mt-5 mx-auto lg:ml-0 lg:mr-12 Kart"/></Link>
    );
}
 
export default cart;