import React, { Component} from 'react';
import classes from './backdrop.module.css';


class Backdrop extends Component{
    // const style = {
    //     background:'rgba(0,0,0,0.6)'
    // }

    state = {
        class: classes.Backdrop
    }
    
    pusherMan = () => {
        this.setState({class: classes.Close});
    }

    functionClick = () => {
        this.pusherMan();
        this.props.clicked()
    }
    
    render(){
        return(
            <div className={this.state.class}>
                <div
                    className={this.state.class}
                    onClick={this.functionClick}
                >
                </div>
                <div>{this.props.children}</div>
            </div>
        )
    }
    
}

export default Backdrop;