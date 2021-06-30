import React from 'react'
import searchscope from '../../../assets/searhscope.svg'
import SearchBtn from '../../UI/searchBtn/searchBtn'
import Aux from '../../../hoc/Auxiliary'


const searchbar = (props) => {
    const style={
        border:'0.1px solid grey',
        
    }

    
    return(
       <Aux>
            <form className="flex mt-5 sm:mx-auto" >
            <div className="w-auto flex rounded-md" style={style}>
                <img src={searchscope} alt="search" className="p-0 ml-2 w-6" />
                <input placeholder="SEARCH PRODUCT AND CATEGORIES" value={props.search} className="mr-auto ml-2 outline-none text-xs pt-1 placeholder-black h-7 rounded-md col-span-2 md:w-72 lg:w-80 xl:96 w-56 placeholder-opacity-30 outline-none" id='searchBar' onChange={props.bind}/>
            </div>
            <SearchBtn
            dropdown={props.dropdown}
            />
        </form>
        
       </Aux>
    )
}

export default searchbar