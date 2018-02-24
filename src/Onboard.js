import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

import { createStudent, createEducator, writeStudentData, writeEducatorData } from './api';

const Wrap = styled.div`
  display: flex;
`

const Panel = styled.div`
  width: 50%;
`


class Onboard extends Component {
  registerAsEducator = async () => {
    // const response = await createStudent();
    // Cookies.set('id', response.key);
    // Cookies.set('accountType', 'students');
    // this.props.onComplete({ id: key, accountType: 'educators' });
  }
  registerAsParent = async () => {
    const response = await createStudent();
    debugger;
    Cookies.set('id', key);
    Cookies.set('accountType', 'students');
    writeStudentData({ id: key });
    this.props.onComplete({ id: key, accountType: 'students' });
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