import React from 'react'

const cartBtn = (props) => {
    return(
        <button className="w-36 h-11 m-2 mr-1 text-center pt-2 rounded-lg text-1xl shadow-2xl outline-none" onClick={props.clicked} style={{background:'#E89C14', outline:'none'}}>
            <p className="mb-1">{props.children}</p>
            {/* <p className="mb-1">Add to Cart</p> */}
        </button>
    )
}

// img={props.image}
// id={props.id}
//                 pr={props.price}
//                 cat={props.cat}
//                 titl={props.tit}
//                 pri={props.price}
//                 subto={props.subtotal}
export default cartBtn

// this.AddCartHandler(id,img,cat,tit,pr)