import React from 'react'
import Navigation from '../../../container/Navigation/navigation'
const Navheader = (props) => {
    return (
        <header>
            <Navigation
            clicked={props.clicked}
            shown={props.shown}
            search={props.search}
            bind={props.bind}
            dropdown={props.Dropdown}
            dropdownState={props.dropdownState}
            cat={props.cat}
            logout={props.logout}
            />
        </header>
    )
}

export default Navheader