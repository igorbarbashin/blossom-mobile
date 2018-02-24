import React, { Component } from 'react';
import Cookies from 'js-cookie';

import Onboard from './Onboard';
import './App.css';

class App extends Component {
  state = {
    isRegistered: false,
    accountType: undefined,
    id: undefined,
  }

  constructor(props) {
    super(props);
  }
  componentDidMount(){
   // Get cookie. type and id
   const id = Cookies.get('id');
   const accountType = Cookies.get('accountType');

   if (id && accountType) {
     this.setState({
       isRegistered: true,
       id,
       accountType,
     })
   }
  }
  
  render() {
    const { isRegistered } = this.state;
    return (
      <div className="App">
        {!isRegistered && <Onboard onComplete={(registerData) => this.setState({ isRegistered: true, ...registerData })} />}
      </div>
    );
  }
}

export default App;
