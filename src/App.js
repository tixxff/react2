import React, {Component} from 'react';
import axios from 'axios';
import {Loading} from './component/Loading';


class App extends Component{
  state = {
    users : [],
    loading: true
  }


  componentDidMount(){
    setTimeout(() => {
      axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response => {
        this.setState({
        users: response.data.results,
        loading: false
      })
    }) 
    },100)

}

    render(){
      return(
      <div>
        { (!this.state.loading) ? this.state.users.map(user =>  //([true]) ? todo true : todo false;
          <div>
            <div>{user.name.first}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
          </div>
        ): <Loading message="Loading..." title="title"><h1>กรุณารอสักครู</h1>่ </Loading>
        
    }
      </div>
    )  
 
  }
}


export default App;
