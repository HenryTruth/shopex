import React from 'react'
import AddTocartBtn from '../UI/addToCartBtn/addTocartBtn'
import star from '../../assets/start.svg'


const thanku = () => {
    return(
        <div className='grid grid-rows-3 justify-center'>
            <div className="row-start-2 row-end-3 self-center">
                <AddTocartBtn>
                    <p className="text-sm ml-1 pt-2  font-semibold">Thank You for choosing Shopex</p> 
                </AddTocartBtn>
                <p className="text-3xl font-semibold flex justify-center">Rate Us !</p>
            </div>
            <div className="flex justify-center mt-6 mr-2 row-start-3 row-end-4">
                    <span><img src={star} alt='star1'/></span>
                    <span><img src={star} alt='star2'/></span>
                    <span><img src={star} alt='star3'/></span>
                    <span><img src={star} alt='star4'/></span>
                    <span><img src={star} alt='star5'/></span>
            </div>
        </div>
    )
}

export default thanku