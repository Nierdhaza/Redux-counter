import React from 'react';
import '../App.css';
import { connect, Provider } from 'react-redux'
import { store } from './../reducer/reduser';



class Component extends React.Component {
  render() {
    const { value, increment, decrement } = this.props;
    console.log(value);
    return (
      <Provider store = {store}>
      <div>
        <button onClick = {increment}>+</button>
        <button onClick = {decrement}>-</button>
        <p>Number is: {value} </p>
      </div>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state: state
  }
}

const mapDispatchToProps = () => {}

export const WrappedComponent = connect(mapStateToProps)(Component);
store.subscribe(() => console.log(store.getState()))

export default Component;
