import React from 'react';
import WrappedComponent from './component/component'
import { store, incNumber, decNumber } from './reducer/reduser';

class App extends React.Component {
  render() {
    return (
    <WrappedComponent 
     value = {store.getState()}
     increment = {() => store.dispatch(incNumber)}
     decrement = {() => store.dispatch(decNumber)}
     />
    );
  }
}




export default App;
