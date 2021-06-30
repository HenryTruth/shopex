import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Shopex from './container/shopex'


class App extends Component{

  render(){
    return(
      <BrowserRouter>
          <div className="min-h-0">
              <Shopex/>
          </div>
      </BrowserRouter>
    )
  }
}


export default App;