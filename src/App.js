import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
`

const Panel = styled.div`
  width: 50%;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentDidMount(){
   // Get cookie. type and id
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
  
  render() {
    return (
      <div className="App">
        <h1>Welcome to Blossom!</h1>
        I'm a
        <Wrap>
          <Panel>
            <Button onClick={this.registerAsParent}>Parent</Button>
          </Panel>
          <Panel>
            <Button onClick={this.registerAsEducator}>Educator</Button>
          </Panel>
        </Wrap>
      </div>
    );
  }
}

export default App;
