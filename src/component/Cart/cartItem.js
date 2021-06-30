import React, {Component}  from 'react'
import AuthContext from '../../context/auth-context'

import Aux from '../../hoc/Auxiliary'

class CartItem extends Component{
    state={
        quan:1,
        totalQuanPrice:this.props.subtotal,
    }
    static contextType = AuthContext

    inQuantityHandler = () =>{
        this.context.quantity = this.context.quantity + this.state.quan
        let inres = this.state.quan

        inres = inres + 1
        this.setState({
            quan:inres
        })

        let result = this.context.quantity * this.props.price

        this.setState({
            totalQuanPrice:result
        })
        

        this.props.res(this.props.price)

        
    }

    deQuantityHandler = () =>{
        if(this.state.quan >= 1){
            let deres = this.state.quan

            if(deres>= 1){
                deres = deres - 1
            }
            this.setState({
                quan:deres
            })

                       
            let subtractTotal = this.state.totalQuanPrice

            subtractTotal = subtractTotal - this.props.price


            this.setState({
                totalQuanPrice:subtractTotal
            })

            this.props.subres(this.props.price.toFixed(2))
        }
    }

    render(){
        return(
            <Aux>
            <div className="flex text-xs mt-5 justify-center my-10" style={{background:'#F5F4FF'}}>
                <figure className="h-48 w-44 m-1 mt-2" style={{backgroundImage:`url(${this.props.image})`, backgroundSize:'100%', backgroundRepeat:'no-repeat', objectFit:'cover', backgroundPosition:'center'}}>
                </figure>
                <div className="grid grid-cols-4">
                    <div className="m-1 text-center">
                        <p>{this.props.title.slice(0,20) + ' ....'}</p>
                    </div>
                    <div className="m-1 border-r-2 border-l-2 border-gray-500 text-center">
                        <p>Quantity</p>
                        <p className="mt-2 text-center mx-auto">{
                            this.state.quan
                        }</p>
                        <button onClick={() => this.inQuantityHandler()} className="h-5 w-5 rounded-sm mt-4 m-2 outline-none" style={{background:'#E89C14', outline:'none'}}>+</button>
                        <button onClick={() => this.deQuantityHandler()} className="h-5 w-5 rounded-sm mt-4 m-2 outline-none" style={{background:'#E89C14', outline:'none'}}>-</button>
                    </div>
                    <div className="m-1 text-center">
                        <p>Unit Price</p>
                        <p className="mt-2 text-center">${this.props.price.toFixed(2)}</p>
                    </div>
                    <div className="m-1 border-r-2 border-l-2 border-gray-500 text-center">
                        <p>Sub Total</p>
                        <p className="mt-2 text-center">${this.state.totalQuanPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            </Aux>
        )

    }
}

export default CartItem

// 