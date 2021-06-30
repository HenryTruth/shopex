import React, {Component} from 'react'
import Aux from '../../../hoc/Auxiliary'
import avatar from '../../../assets/avatar.svg'
import shirt from '../../../assets/SHIRT2.svg'
import del from '../../../assets/delete.svg'
import Carty from '../../../assets/Group3.svg'
import {Link} from 'react-router-dom'

class dashboard extends Component{
    componentDidMount(){

    }

    render(){
        return(
            <Aux>
                <div className="bg-white my-10 mx-20 grid grid-cols-2 shadow-md">
                    <div>
                        <p className="m-5 text-xl">Welcome Truth</p>
                        <figure className="ml-5 w-28 py-10">
                            <img src={avatar} alt="avatar"/>
                        </figure>
                    </div>
                    <div className="justify-self-end">
                        <li className="mt-10">
                            <Link to="/users/addProductForm"  className="justify-self-end  px-1.5 py-2 mr-28 text-sm rounded-md" style={{background:'#F4A335'}}>Add Product</Link>
                        </li>
                    </div>
                </div>
                <div  style={{background:'#F3EFEF'}}>
                    <p className="text-center py-5 font-semibold text-xl">My Product</p>
                    <div className="grid grid-cols-2 productBody lg:mx-20 xl:mx-32">
                    <div className="bg-white border-2 border-solid mx-5 my-10 min-h-0 grid justify-items-center text-center rounded-t-xl shadow-md 2xl:w-56 cursor-pointer
                        ">
                            <figure className="h-48 min-w-full m-1 mt-2" style={{backgroundImage:`url(${shirt})`, backgroundSize:'100%', backgroundRepeat:'no-repeat', objectFit:'cover', backgroundPosition:'center'}}>
                                {/* <img src={props.image} alt="shirt1"/> */}
                            </figure>
                            <p className="font-semibold uppercase">Men clothings</p>
                            <h1 className="text-xs mx-2 my-1">lorem ipsum dolor</h1>
                            <p className="my-1 font-xl"><span  style={{color:'#E19017'}} className="font-bold">$</span>1000</p>
                            <div className="flex my-3">
                                <figure className="w-9 mt-1 mr-7">
                                    <img src={del} alt="del"/>
                                </figure>
                                <button className="w-8 rounded-t-lg text-xl h-8 font-bold" style={{background:'#050515', color:'#E19017',outline:'none'}}>+</button>
                            </div>
                        </div>
                        <div className="bg-white mx-5 my-10 border-2 border-solid min-h-0 grid justify-items-center text-center rounded-t-xl shadow-md 2xl:w-56 cursor-pointer
                        ">
                            <figure className="h-48 min-w-full m-1 mt-2" style={{backgroundImage:`url(${shirt})`, backgroundSize:'100%', backgroundRepeat:'no-repeat', objectFit:'cover', backgroundPosition:'center'}}>
                                {/* <img src={props.image} alt="shirt1"/> */}
                            </figure>
                            <p className="font-semibold uppercase">Men clothings</p>
                            <h1 className="text-xs mx-2 my-1">lorem ipsum dolor</h1>
                            <p className="my-1 font-xl"><span  style={{color:'#E19017'}} className="font-bold">$</span>1000</p>
                            <div className="flex my-3">
                                <figure className="w-9 mt-1 mr-7">
                                    <img src={del} alt="del"/>
                                </figure>
                                <button className="w-8 rounded-t-lg text-xl h-8 font-bold" style={{background:'#050515', color:'#E19017',outline:'none'}}>+</button>
                            </div>
                        </div>
                        <div className="bg-white mx-5 border-2 border-solid my-10 min-h-0 grid justify-items-center text-center rounded-t-xl shadow-md 2xl:w-56 cursor-pointer
                        ">
                            <figure className="h-48 min-w-full m-1 mt-2" style={{backgroundImage:`url(${shirt})`, backgroundSize:'100%', backgroundRepeat:'no-repeat', objectFit:'cover', backgroundPosition:'center'}}>
                                {/* <img src={props.image} alt="shirt1"/> */}
                            </figure>
                            <p className="font-semibold uppercase">Men clothings</p>
                            <h1 className="text-xs mx-2 my-1">lorem ipsum dolor</h1>
                            <p className="my-1 font-xl"><span  style={{color:'#E19017'}} className="font-bold">$</span>1000</p>
                            <div className="flex my-3">
                                <figure className="w-9 mt-1 mr-7">
                                    <img src={del} alt="del"/>
                                </figure>
                                <button className="w-8 rounded-t-lg text-xl h-8 font-bold" style={{background:'#050515', color:'#E19017',outline:'none'}}>+</button>
                            </div>
                        </div>
                    </div>
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

export default dashboard