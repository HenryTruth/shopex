import React from 'react'
import AddToCartBtn from './addTocartBtn'
import CartIconBtn from './cartIconBtn'
import Aux from '../../../hoc/Auxiliary'

const CartBtn = (props) => {
    return(
        <Aux>
            <AddToCartBtn
            id={props.id}
            img={props.img}
            pr={props.pr}
            cat={props.cat}
            title={props.title}
            subto={props.subtotal}
            addKart={props.addKart}
            >
                <p className="text-center my-2 font-medium md:text-xl">Add to Cart</p>
            </AddToCartBtn>
            <CartIconBtn/>
        </Aux>
    )
}

export default CartBtn