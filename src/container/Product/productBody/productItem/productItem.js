import React from 'react'
// import shirt1 from '../../../../assets/SHIRT1.svg'

const productItem = (props) => {
    return(
        <div className="bg-white mx-5 my-10 min-h-0 border-2 border-solid grid justify-items-center text-center rounded-t-xl shadow-md 2xl:w-56 cursor-pointer
        ">
            <figure className="h-48 min-w-full m-1 mt-2 " onClick={() => props.click(props.id, props.image, props.category, props.title, props.price,)} style={{backgroundImage:`url(${props.image})`, backgroundSize:'100%', backgroundRepeat:'no-repeat', objectFit:'cover', backgroundPosition:'center'}}>
                {/* <img src={props.image} alt="shirt1"/> */}
            </figure>
            <p className="font-semibold uppercase">{props.category}</p>
            <h1 className="text-xs mx-2 my-1">{props.title}</h1>
            <p className="my-1 font-xl"><span  style={{color:'#E19017'}} className="font-bold">$</span>{props.price}</p>
            <button className="w-16 h-8 rounded-t-lg text-2xl font-bold" style={{background:'#050515', color:'#E19017',outline:'none'}} onClick={() => props.cart(props.id,props.image,props.category,props.title,props.price)}>+</button>
        </div>       
    )
}


export default productItem      