import React from 'react'
import star from '../../assets/start.svg'
// import hero from '../../assets/hero.svg'
import IncrementBtn from '../UI/crementBtn/incrementBtn'
import DecrementBtn from '../UI/crementBtn/decrementBtn'
import CartBtn from '../UI/addToCartBtn/CartBtn'


const profileBody = (props) => {
    return(
        <div>
            <div className="m-5">
                <p className="text-2xl text-center font-semibold ">Lorem Ipsum dolor</p>
                <div className="flex justify-start mt-3 md:justify-center">
                    <span><img src={star} alt='star1'/></span>
                    <span><img src={star} alt='star2'/></span>
                    <span><img src={star} alt='star3'/></span>
                    <span><img src={star} alt='star4'/></span>
                    <span><img src={star} alt='star5'/></span>
                    <p className="text-xs mt-2 ml-10 font-bold">(100000 rating)</p>
                </div>
            </div>
            <div className="flex md:justify-center mx-5  my-10 md:mx-20 lg:mx-32" style={{background:'#F5F4FF'}}>
                <div className="w-96">
                    <img src={props.image} alt='hero' className=""/>
                </div>
                <div className="mt-20 mr-5">
                    <p className="text-xl font-semibold xm:text-2xl sm:text-3xl md:text-4xl">${props.price}</p>
                    <p className="line-through text-sm  sm:text-2xl md:text-3xl font-semibold" style={{color:'#BD1F33'}}>$10,000<br/> <span style={{color:'#E89C14'}}>(-30%)</span></p>
                </div>
            </div>
            <div className="flex justify-center m-2">
                <span className="m-2 w-8 h-6 text-center" style={{background:'#C4C2CC'}}>44</span>
                <span className="m-2 w-8 h-6 text-center" style={{background:'#C4C2CC'}}>43</span>
                <span className="m-2 w-8 h-6 text-center" style={{background:'#C4C2CC'}}>45</span>
                <span className="m-2 w-8 h-6 text-center" style={{background:'#C4C2CC'}}>50</span>
                <span className="m-2 w-8 h-6 text-center" style={{background:'#C4C2CC'}}>51</span>
                <span className="m-2 w-8 h-6 text-center" style={{background:'#C4C2CC'}}>52</span>
                <span className="m-2 w-8 h-6 text-center" style={{background:'#C4C2CC'}}>53</span>
            </div>
            <div className="flex justify-center mt-10">
                <IncrementBtn/>
                <span className="mt-3">4</span>
                <DecrementBtn/>
            </div>
            <div className="flex justify-center">
                <CartBtn
                id={props.id}
                img={props.image}
                pr={props.price}
                cat={props.cat}
                title={props.title}
                pri={props.price}
                subto={props.subtotal}
                addKart={props.addToCart}
                />
            </div>
        </div>
    )
}

export default profileBody