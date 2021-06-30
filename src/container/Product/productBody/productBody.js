import React, {Component} from 'react'
import HeaderContent from '../../../component/Header/headerContent'
import Aux from '../../../hoc/Auxiliary'
import ProductItem from './productItem/productItem'

import Carty from '../../../assets/Group3.svg'
import axios from 'axios'
import './productBody.css'
import AuthContext from '../../../context/auth-context'
import {Link} from 'react-router-dom'


class productBody extends Component{
    state = {
        products:null,
        cat:null
    }

    static contextType = AuthContext;

    componentDidMount(){
        axios.get(`https://fakestoreapi.com/products/${this.props.selectedCat}`)
        .then(response => {
            // console.log(response.data)
            const product = response.data
            this.setState({
                products:product
            })
        })
        .then(error=>console.log(error))
    }

    // componentDidUpdate(prevProps,prevState){
    //     console.log(this.props.selectedCat)
    //     if(prevProps.selectedCat !== this.props.selectedCat){
    //             axios.get(`https://fakestoreapi.com/products/${this.props.selectedCat}`)
    //             .then(response => {
    //             // console.log(response.data)
    //             const product = response.data
    //             this.setState({
    //                 products:product
    //             })
    //         })
    //         .then(error=>console.log(error))

    //     }
    // }

    

    render(){
        let productItem = null

        if(this.state.products){
            productItem = (
                this.state.products.map(product => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        image={product.image}
                        cart={this.context.addCart}
                        click={this.props.clicked}
                    />
                )
            )
                
            )
        }
        return(
            <Aux>
                <HeaderContent
                selected={this.props.selectedCat}
                />
                <div className="grid grid-cols-2 productBody lg:mx-20 xl:mx-32">
                    {productItem}
                </div>
                <div className="flex justify-center">
                    <figure className="p-2">
                        <Link to="/cart"><img src={Carty} alt="carty"/></Link>
                    </figure>
                </div>
            </Aux>
        )
    }
}

export default productBody