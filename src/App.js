
import React, { Component } from 'react';
import Container from './container/container';
import Person from './container/person';

class App extends Component {
render(){
  return (
    <div>
      <Container />
      <hr/>
      <Person/>
    </div>
    
  )
}

}


export default App;
