import React from 'react'

const sideitem = (props) => {
    const style = {
        background:'#050515',
        zIndex:'999'
    }

    const color ={
        color:'#E19017'
    }

    return(
        <div className='h-full w-1/2 z-20 absolute' style={style}>
            <h2 style={color} className="pt-16 text-center text-xl">CATEGORIES</h2>
            <ul>
                <li className="text-white mt-8 ml-8 text-sm">
                    <a  href="cmc">ELECTRONICS</a>
                </li>
                <li className="text-white mt-3 ml-8 text-sm">
                    <a  href="mss">WOMEN WEAR</a>
                </li>
                <li className="text-white mt-3 ml-8 text-sm">
                    <a  href="ss">MEN WEAR</a>
                </li>
                <li className="text-white mt-3 ml-8 text-sm">
                    <a  href="ss">JEWELRIES</a>
                </li>
            </ul>
        </div>
    )
}

export default sideitem