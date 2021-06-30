import React from 'react'
import './searchBtn.css'

const searchBtn = (props) => {
    const style = {
        background:'#F5B10D',
        outline:'none'
    }
    return(
        <button style={style} className="ml-5 px-3 rounded-md shadow-xl searchBtn outline-none"  onClick={props.dropdown}>
            Search
        </button>
    )
}

export default searchBtn