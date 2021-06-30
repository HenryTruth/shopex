import React,{Component} from 'react'
import CartBasket from './cartBasket'
import CartBtn from '../UI/cartBtn/cartBtn'
import AuthContext from '../../context/auth-context'
import { withRouter } from 'react-router-dom'


class Cart extends Component{

    static contextType = AuthContext

    keepShopingButtonHandler = () =>{
        this.props.history.push('/')
    }

    checkoutButtonHandler = () =>{
        this.props.history.push('/thanku')
    }

    render(){
        return(
            <div className="flex flex-col mt-10 sm:mx-32 lg:mx-72">
                    <CartBasket
                    sum={this.props.sum}
                    sub={this.props.sub}
                    />
                <div className="mx-auto my-5">
                    <p className="">Total ${this.props.totalPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-center">
                    <CartBtn
                    clicked={this.keepShopingButtonHandler}
                    >
                        Keep Shoping
                    </CartBtn>
                    <CartBtn
                    clicked={this.checkoutButtonHandler}>
                        Checkout
                    </CartBtn>
                </div>
            </div>
        )
    }
    
}

export default withRouter(Cart)