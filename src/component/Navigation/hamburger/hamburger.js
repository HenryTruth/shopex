import React  from 'react'
import hamburgericon from '../../../assets/Hambur.svg'

const hamburger = (props) => {
    return(
        <img src={hamburgericon} alt="dd" className="w-12 mt-5 md:hidden"
        onClick={props.click}
        />
    )
}

export default hamburger