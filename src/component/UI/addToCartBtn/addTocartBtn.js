import React from 'react'

const addTocartBtn = (props) => {
    return(
            <button style={{background:'#E89C14', outline:'none'}} className="mx-2 my-14 w-52 sm:w-72 md:w-80 lg:w-96 md:h-12 h-10 rounded-lg shadow-2xl" onClick={() => props.addKart(props.id,props.img,props.cat,props.title,props.pr)}>
                {props.children}
            </button>
    )
}

export default addTocartBtn

// this.AddCartHandler(id,img,cat,tit,pr)