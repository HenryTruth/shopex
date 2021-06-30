import React, {Component} from 'react'
import { connect } from 'react-redux'
import Navheader from '../component/Header/Navheader/Navheader'
import Thanku from '../component/thankU/thanku'
import ProductBody from '../container/Product/productBody/productBody'
import Backdrop from '../component/sideDrawer/backdrop/backdrop'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import Cart from '../component/Cart/cart'
import ProfileBody from '../component/Profile/profileBody'
import SideItem from '../component/sideDrawer/Sidebar/sideitem'
import Aux from '../hoc/Auxiliary'
import AuthContext from '../context/auth-context'
import hero from '../assets/hero.svg'
import HeaderElectronic from '../component/Header/headerItems/headerItems'
import Signup from './Users/signup/authSignup'
import Dashboard from '../container/Users/dashboard/dashboard'
import AddProductForm from '../container/Users/addProductForm/addProductForm'
import * as actions from '../store/actions';


class Shopex extends Component{
    state = {
        show:false,
        cartProduct:[],
        totalPrice:0,
        id:null,
        img:hero,
        cat:null,
        title:null,
        price:0,
        quantity:1,
        subtotal:null,
        search:'',
        dropdown:false,
        categories:'',
        auth:false
    }

    // componentDidMount () {
    //     this.props.onTryAutoSignup();
    // }
    AddCategories = (category) => {

        this.setState({
            categories:category
        })

        this.setState({
            dropdown:false
        })
        console.log(this.props)

        this.props.history.push('/product/' + category)


        this.setState({
            search:''
        })
        
    }

    AddCartHandler = (id,img,cat,tit,pr) =>{
        console.log('something happended')
        const cartItem = {
            id:id,
            img:img,
            category:cat,
            title:tit,
            price:pr,
            quantity:1,
            subtotal:pr
        }

        
        let result = this.state.cartProduct.filter(item => item.id !== cartItem.id)

        result.push(cartItem)

        this.setState({
            cartProduct:result
        })

        let total = this.state.totalPrice;
        console.log(total)

        for(const i in this.state.cartProduct){
                console.log('price ', this.state.cartProduct[i].subtotal)
                total = total + this.state.cartProduct[i].subtotal
            }

        console.log('t' , total)

        this.setState({
            totalPrice:total
        })
        

        setTimeout (() => {
            console.log('[cart]', this.state.cartProduct)
        }, 1000)
        
    }
    
    sumTotalHandler = (totalquanprice) => {
        let total = this.state.totalPrice
        total = total + totalquanprice

        this.setState({
            totalPrice:total
        })

    }

    subtotalHandler = (totalquanprice) => {
        let total = this.state.totalPrice
        total = total - totalquanprice

        this.setState({
            totalPrice:total
        })

    }


    backdropHandler = () =>{
        let isShow = this.state.show;
        setTimeout(() => {
            this.setState({
                show:!isShow
            })
        }, 700)
    }

    hamburgerHandler = () =>{
        let isShow = this.state.show
        this.setState({
            show:!isShow
        })

    }

    profileHandler = (id,img,cat,tit,pr) => {
        this.props.history.push('/item/' + id)
        
        this.setState({
            id:id,
            img:img,
            cat:cat,
            title:tit,
            price:pr,
            subtotal:pr
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            search:event.target.value
        })

        this.setState({
            dropdown:true
        })
    }


    closeDropdown = (e) => {
        console.log(this.state.search, ' false')
        e.preventDefault()
        this.setState({
            dropdown:false
        })

        this.setState({
            search:''
        });
        
    }


    render(){
        let routes;
        console.log(this.props.isAuthenticated)
             routes = (
                <Switch>
                    <Route path="/users/signup"  component={Signup}/>
                    <Redirect to="/users/signup" />
                </Switch>
    
            )
        let nav = null
        if(this.props.isAuthenticated){
            routes = (
                <Aux>
                    <Navheader
                        clicked={this.hamburgerHandler}
                        shown={this.state.show}
                        search={this.state.search}
                        bind={this.nameChangedHandler}
                        dropdown={this.closeDropdown}
                        dropdownState={this.state.dropdown}
                        cat={this.AddCategories}
                        logout={this.props.onLogout}
                    />
                    <AuthContext.Provider value={{addCart:this.AddCartHandler}}>
                        <Switch>
                        <Route path="/" exact render={() => 
                            <AuthContext.Provider value={{cartProduct:this.state.cartProduct, addCart:this.AddCartHandler}}>
                                <ProductBody
                                selectedCat={this.state.categories}
                                clicked={this.profileHandler}
                                />
                            </AuthContext.Provider>}/>
                            <Route path="/users/addProductForm" exact component={AddProductForm}/>
                            <Route path="/users/dashboard" exact component={Dashboard}/>
                            <Route path="/item/:id" 
                            render={() => <ProfileBody
                            id={this.state.id}
                            image={this.state.img}
                            price={this.state.price}
                            cat={this.state.cat}
                            title={this.state.title}
                            subtotal={this.state.subtotal}
                            addToCart={this.AddCartHandler}
                            />}
                            />
                            <Route path="/product/:category" render={() => <HeaderElectronic
                            selectCat={this.state.categories}
                            clicked={this.profileHandler}
                            />}/>
                            <Route path="/cart" exact render={() => 
                            <AuthContext.Provider value={{cartProduct:this.state.cartProduct}}><Cart
                                sum={this.sumTotalHandler}
                                sub={this.subtotalHandler}
                                totalPrice={this.state.totalPrice}
                            /></AuthContext.Provider>}/>
                            <Route path="/thanku" component={Thanku}/>
                            <Redirect to="/" />
                        </Switch> 
                    </AuthContext.Provider>
                </Aux>
            )
        }
        return(
            <Aux>
                <div className="">
                    {this.state.show?<Backdrop
                    modalStuff={this.modalStuff}
                    clicked={this.backdropHandler}
                    shown={this.state.show}
                    >
                        <SideItem/>
                    </Backdrop>:null}
                    {nav}
                    <section style={{background:'#F3EFEF'}}>
                        {routes}
                    </section>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return{
        isAuthenticated: state.token !== null
    }
}


const mapDispatchToProps = dispatch => {
    return{
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
        onLogout: () => dispatch(actions.logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Shopex))