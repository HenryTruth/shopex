import React, {useContext}  from 'react'
import CartItem from './cartItem'
import AuthContext from '../../context/auth-context'

const CartBasket = (props) =>{
    const authContext = useContext(AuthContext)
    return(
        authContext.cartProduct.map(item => (
            <AuthContext.Provider key={item.id} value={{quantity:item.quantity}}>
                <CartItem
                    key={item.id}
                    image={item.img}
                    category={item.category}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    subtotal={item.subtotal}
                    res={props.sum}
                    subres={props.sub}
                />
            </AuthContext.Provider>
        ))
    )

}

export default CartBasket