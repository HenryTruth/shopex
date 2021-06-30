import React from 'react'
import './headerImage.css'

const headerContent = (props) => {
    return (
        <div className="grid grid-cols-1 mt-5 lg:h-96" style={{background:'#B5B3C1'}}>
            <div className='flex lg:justify-self-center'>
                <figure className="headerImage">
                    {props.children}
                </figure>
                <div className="self-center">
                    <h1 className="xm:text-xl sm:text-2xl  sm:mb-2 md:text-3xl font-semibold lg:text-4xl xl:text-5xl 2xl:text-6xl">MEN VINTAGE <br/>SHIRT</h1>
                    <div className="text-white text-center rounded-md w-24 sm:w-32 md:w-36 h-8 sm:h-10 lg:h-12 grid" style={{background:'#070717'}}>
                        <p style={{color:'#C5C1E2'}} className="text-lg sm:text-xl self-center lg:text-2xl"><span style={{color:'#E19017'}}>#</span>10,000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default headerContent