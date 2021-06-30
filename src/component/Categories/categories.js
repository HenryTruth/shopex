import React from 'react'
import './categories.css'

const categories = (props) => {

    let hidden = 'hidden'
    
    if(props.displayDropdown === true){
         hidden = null
    }
    return(
        <div className={`flex flex-col min-h-0  shadow-lg  w-64 ml-8 2xl:w-96 ${hidden}  categories`}>
            <span className="shadow-sm mx-5 my-2 text-sm cursor-pointer" onClick={() => props.cate('electronics')}>Electronic</span>
            <span className="shadow-sm mx-5 my-2 text-sm cursor-pointer" onClick={() => props.cate('jewelery')}>Jewelries</span>
            <span className="shadow-sm mx-5 my-2 text-sm cursor-pointer" onClick={() => props.cate('menclothing')}>Men Wear</span>
            <span className="shadow-sm mx-5 my-2 text-sm cursor-pointer" onClick={() => props.cate('womenclothing')}>Women Wear</span>
        </div>
    )
}

export default categories