import React from 'react'
import  HeaderImage from './headerImage'
import hero from '../../assets/hero.svg'

const headerContent = () => {
    return(
        <HeaderImage>
            <img src={hero} alt="hero" className="lg:pt-3"/>
        </HeaderImage>
    )
}

export default headerContent