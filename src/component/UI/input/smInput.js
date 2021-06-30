import React from 'react'
import './input.css'

const smInput = (props) => {
    return(
        <div className="m-2">
            <label className="text-lg">{props.label}</label><br/>
            <input className="py-1.5 rounded-sm my-2 input px-2" value={props.value} style={{border:'.1px solid grey'}} onChange={props.bind}/>
        </div>
    )
}

export default smInput