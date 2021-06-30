import React, {Component} from 'react';
import Input from '../../../component/UI/input/input'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import * as actions from '../../../store/actions';


class Signup extends Component{
    state={
        name:{
            email:{
                value:''
            },
            password:{
                value:''
            },
        },
    }

    otherInputChangeHandler = (event, label) => {
        const name = {
        ...this.state.name,
        [label]:{
            ...this.state.name[label],
            value:event.target.value
        }
    }

    this.setState({
        name:name
    })
    }

    SubmitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.name.email, this.state.name.password)
        // const name = {
        //     ...this.state.name,
        //     email:{
        //         ...this.state.name['email'],
        //         value:''
        //     },
        //     password:{
        //         ...this.state.name['password'],
        //         value:''
        //     }
        // }

        // this.setState({
        //     name:name
        // })
    }

    render(){

        const otherArr = []

        for(let key in this.state.name){
            otherArr.push({
                id:key,
                formName:this.state.name[key]
            })
        }


        let otherInput = otherArr.map( formElement => (
            <Input
                key={formElement.id}
                label={formElement.id}
                value={formElement.formName.value}
                bind={(event) => this.otherInputChangeHandler(event,formElement.id)}
            />
        ))

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        // let lowerform = <p className="text-center">Already have an account? <span className="underline text-sm" style={{color:"#844C00"}}>Log in</span></p>
        
        // if(!this.props.Signup){
        //     lowerform = <p className="text-center">Dont have an account? <span className="underline text-sm" style={{color:"#844C00"}}>Sign in</span></p>
        // }

        
        return(
            <div className="grid bg-white ">
                {authRedirect}
                <form className="justify-self-center border-lg min-h-0 w-auto self-center my-auto rounded-sm mt-28 shadow-lg border-2">
                    <h2 className="text-center text-2xl m-5">Signup</h2>
                    <div className="flex mx-5">
                        {/* {nameInput} */}
                    </div>
                    {otherInput}
                    <button className="grid justify-items-center mx-auto px-7 py-2 m-2 text-lg my-5 rounded-md shadow-sm" onClick={this.SubmitHandler} style={{backgroundColor:'#F4A335'}}>Signup</button>
                </form>
            </div>
        )
    };
};
const mapStateToProps = state =>{
    return{
        loading:state.loading,
        error:state.error,
        isAuthenticated: state.token !== null,
        Signup:state.isSignup,
        authRedirectPath:state.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth:(email, password) => dispatch(actions.auth(email,password)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);