import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { createStudent } from './api';

const Wrap = styled.div`
  display: flex;
`

const Panel = styled.div`
  width: 50%;
`


class Onboard extends Component {
  registerAsEducator = () => {
    this.props.onComplete();
  }
  registerAsParent = async () => {
    const response = await createStudent();
    debugger;
    this.props.onComplete();
  }


  render() { 
    return (
      <div>
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
    )
  }
}
 
export default Onboard;