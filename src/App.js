import React, { Component } from 'react';
import './App.css';
import Onboard from './Onboard';

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
  }
  
  render() {
    const { isRegistered } = this.state;
    return (
      <div className="App">
        {!isRegistered && <Onboard onComplete={() => this.setState({ isRegistered: true })} />}
      </div>
    );
  }
}

export default App;
