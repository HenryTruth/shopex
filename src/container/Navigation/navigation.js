import React, {Component} from 'react'
import Searchbar from '../../component/Navigation/searchbar/searchbar'
import Hamburger from '../../component/Navigation/hamburger/hamburger'
import Logo from '../../component/Navigation/logo/logo.js'
import Profile from '../../component/Navigation/profile/profile'
import Kart from '../../component/Navigation/Kart/Kart'
import Aux from '../../hoc/Auxiliary'
import Categories from '../../component/Categories/categories'

class navigation extends Component{
    
    render(){
        return(
            <Aux>
                <nav className="flex lg:mx-32">
                    <Logo/>
                    <Hamburger
                    click={this.props.clicked}
                    shown={this.props.shown}
                    />
                    <Searchbar
                    search={this.props.search}
                    bind={this.props.bind}
                    dropdown={this.props.dropdown}
                    />
                    <Profile/>
                    <Kart/>
                    <button className="bg-red-800 px-3 mt-3 text-white shadow-sm rounded-md" onClick={this.props.logout}>Log out</button>
                </nav>
                <Categories
                displayDropdown={this.props.dropdownState}
                cate={this.props.cat}
                />
            </Aux>
        )
    }
}

export default navigation