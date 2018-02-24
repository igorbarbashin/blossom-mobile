import React, { Component } from 'react';
import Cookies from 'js-cookie';

import Onboard from './Onboard';
import EducatorProfile from './EducatorProfile';
import './App.css';

class App extends Component {
  state = {
    isRegistered: false,
    accountType: undefined,
    id: undefined,
    isEditingProfile: false,
    isViewingCards: false,
    isAddingCard: false,
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
    const { isRegistered, accountType, isEditingProfile } = this.state;
    const isEducator = accountType === 'educators';

    return (
      <div className="App">
        {!isRegistered && <Onboard onComplete={(registerData) => this.setState({ isRegistered: true, ...registerData, isEditingProfile: true })} />}
        {isEditingProfile && isEducator && <EducatorProfile onComplete={() => this.setState({ isEditingProfile: false, isViewingCards: true })} />}
      </div>
    );
  }
}

export default App;
