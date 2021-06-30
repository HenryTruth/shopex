import React from 'react'
import minus from '../../../assets/minus.svg'

const decrementBtn = () => {
    return(
        <div className="w-10 m-2 h-8 flex justify-center rounded-sm shadow-xl" style={{background:'#E89C14'}}>
            <img src={minus} alt="" className="pr-2 ml-2 "/>
        </div>
    )
}

export default decrementBtn