import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import AppActions from './actions';
import FiveDay from '../FiveDay/FiveDay';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';
import Toast from 'react-bootstrap/Toast'

class App extends React.Component{
  render(){
    return (
      <div>
        <div className="App">
          <button onClick={this.props.redirectToFiveDayHandler}
          >5 days forecast</button>
          <button onClick={this.props.redirectToFavooritesHandler}
          >Favorites</button>

        {this.props.redirect_to_favourites&&<Favorites/>}
        {!this.props.redirect_to_favourites&&<FiveDay/>}
        <Search className="App"/>
        </div>
        
        <Toast className="Toast" show={this.props.error} onClose={this.props.clearErrorHandler}>
          <Toast.Header>
            <strong>Error</strong>
          </Toast.Header>
          <Toast.Body>{this.props.error_msg}</Toast.Body>
        </Toast>
        
       

      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    redirectToFavooritesHandler: ()=>{
      dispatch(AppActions.redirectToFavorites());
    },
    redirectToFiveDayHandler: ()=>{
      dispatch(AppActions.redirectToFiveDay());
    },
    clearErrorHandler: ()=>{
      dispatch(AppActions.clearErrorAction());
    }

  }
}

const mapStateToProps = (state) => {
  return {
    redirect_to_favourites: state['app'].get('redirect_to_favourites'),
    error: state['app'].get('error'),
    error_msg: state['app'].get('error_msg'),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
