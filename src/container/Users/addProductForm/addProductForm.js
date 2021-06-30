import React from 'react'
import './addProduct.css'
const addProductForm = (props) => {

    return(
        <div className="grid bg-white mt-14">
            <form className="justify-self-center border-lg min-h-0 w-auto w-1/4 self-center my-auto rounded-sm mt-28 shadow-lg border-2">
                <h2 className="text-center text-2xl m-5">Add a Product</h2>
                <div>
                    <div className="m-2 mx-6">
                        <label className="text-lg">Title</label><br/>
                        <input className="py-1.5 rounded-sm my-2 signup w-full px-2 addProduct" style={{border:'.1px solid grey'}}/>
                    </div>
                    <div className="m-2 mx-6">
                        <label className="text-lg">Price</label><br/>
                        <input className="py-1.5 rounded-sm my-2 signup w-full px-2 addProduct" style={{border:'.1px solid grey'}}/>
                    </div>
                    <div className="m-2 mx-6">
                        <label className="text-lg">Description</label><br/>
                        <input className="py-1.5 rounded-sm my-2 signup w-full px-2 addProduct" style={{border:'.1px solid grey'}}/>
                    </div>
                    <div className="m-2 mx-6">
                        <label className="text-lg">Image</label><br/>
                        <input className="py-1.5 rounded-sm my-2 signup w-full px-2 addProduct" style={{border:'.1px solid grey'}}/>
                    </div>
                    <div className="m-2 mx-6">
                        <label className="text-lg">Category</label><br/>
                        <input className="py-1.5 rounded-sm my-2 signup w-full px-2 addProduct" type="password" style={{border:'.1px solid grey'}}/>
                    </div>
                </div>
                <button className="grid justify-items-center mx-auto px-7 py-2 m-2 text-lg my-5 rounded-md shadow-sm" style={{backgroundColor:'#F4A335'}}>Add Product</button>
            </form>
        </div>
    )
}

export default addProductForm