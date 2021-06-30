import React from 'react'
import pro from '../../../assets/profile.svg'
import './profile.css'
import {Link} from 'react-router-dom'


const profile = () => {
    return ( 
        <Link to="/users/dashboard">
            <img src={pro} alt="he" className="h-8 mt-5 w-14 lg:m profile"/>
        </Link>
     );
}
 
export default profile;