import React from 'react'
import shopex from '../../../assets/shoppy.svg'
import  './logo.css'
import {Link} from 'react-router-dom'

const logo = () =>{
    return(
        <Link to="/"><img src={shopex} alt="he" className="w-28 mt-5 ml-5 logo"/></Link>
    )
}

export default logo