import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import FavoriteLocation from '../FavoriteLocation/FavoriteLocation'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'

import FavoritesActions from './actions';

class Favorites extends React.Component{
  componentDidMount() {
    this.props.loadFavoritesHandler();
  };

  render() {
    console.log("here")

    return (
      <div className="FiveDay">
        
        <CardDeck>
        {this.props.favorite_locations.map( (res, idx) => {

          return (<FavoriteLocation loacation_key={res} id={idx} key={"fav"+idx}/>)})}
  
        </CardDeck>
                
        
  
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadFavoritesHandler: () => {
      dispatch(FavoritesActions.loadFavoritesAction());
    }
    

  }
}

const mapStateToProps = (state) => {
  return {
    favorite_locations: state['favorites'].get('favorite_locations'),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);