import React, {Component} from 'react'
import Input from '../../../component/UI/input/input'
class Login extends Component{
    state = {
        others:{
            username:{
                value:''
            },
            password:{
                value:''
            }
        }
    }

    otherInputChangeHandler = (event, label) => {
        const other = {
            ...this.state.others,
            [label]:{
                ...this.state.others[label],
                value:event.target.value
            }
        }

        this.setState({
            others:other
        })
    }

    render(){

        const otherArr = []

        for(let key in this.state.others){
            otherArr.push({
                id:key,
                formName:this.state.others[key]
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

        return(
            <div className="grid bg-white ">
                <form className="justify-self-center border-lg min-h-0 w-auto w-1/4 self-center my-auto rounded-sm mt-28 shadow-lg border-2">
                    <h2 className="text-center text-2xl m-5">Log in</h2>
                    <div className="">
                        {otherInput}
                    </div>
                    <p className="text-center">Don't have an account? <span className="underline text-sm" style={{color:"#844C00"}}>Sign up</span></p>
                    <button className="grid justify-items-center mx-auto px-7 py-2 m-2 text-lg my-5 rounded-md shadow-sm" style={{backgroundColor:'#F4A335'}}>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login