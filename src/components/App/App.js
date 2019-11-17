import React from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import '../../App.css';
import AppActions from './actions';
import FiveDay from '../FiveDay/FiveDay'

class App extends React.Component{
  render(){
    return (
      <div>
        <div className="App">
          <button onClick={this.props.setTelAvivEventHandler}
          >Tel Aviv</button>
          <button onClick={this.props.setHelsinkiEventHandler}
          >Helsinki</button>
        </div>

        <FiveDay/>

      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setTelAvivEventHandler: ()=>{
      dispatch(AppActions.setTelAvivAction());
    },
    setHelsinkiEventHandler: ()=>{
      dispatch(AppActions.setHelsinkiAction());
    }

  }
}

const mapStateToProps = (state) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
