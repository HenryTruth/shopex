import React from 'react'
import Carty from '../../../assets/Carty.svg'
const CartIconBtn = (props) => {
    return(
        <button style={{background:'#E89C14'}} className="mx-2 my-14 w-12 rounded-lg shadow-2xl" >
                <img src={Carty} alt="" className="m-auto my-3"/>
        </button>
    )
}

export default CartIconBtn