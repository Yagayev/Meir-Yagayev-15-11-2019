import React from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import '../../App.css';
import AppActions from './actions';
import FiveDay from '../FiveDay/FiveDay'
import Favorites from '../Favorites/Favorites'


class App extends React.Component{
  render(){
    return (
      <div>
        <div className="App">
          <button onClick={this.props.setTelAvivEventHandler}
          >Tel Aviv</button>
          <button onClick={this.props.setHelsinkiEventHandler}
          >Helsinki</button>
          <button onClick={this.props.redirectToFiveDayHandler}
          >5 days forecast</button>
          <button onClick={this.props.redirectToFavooritesHandler}
          >Favorites</button>
        </div>
        {this.props.redirect_to_favourites&&<Favorites/>}
        {!this.props.redirect_to_favourites&&<FiveDay/>}
        
       

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
    },
    redirectToFavooritesHandler: ()=>{
      dispatch(AppActions.redirectToFavorites());
    },
    redirectToFiveDayHandler: ()=>{
      dispatch(AppActions.redirectToFiveDay());
    },

  }
}

const mapStateToProps = (state) => {
  return {
    redirect_to_favourites: state['app'].get('redirect_to_favourites'),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
