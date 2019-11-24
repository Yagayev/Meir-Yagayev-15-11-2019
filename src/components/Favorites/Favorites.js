import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import FavoriteLocation from '../FavoriteLocation/FavoriteLocation'
import CardDeck from 'react-bootstrap/CardDeck'

import FavoritesActions from './actions';

class Favorites extends React.Component{


  render() {
    return (
      <div className="FiveDay">
        
        <CardDeck>
        {this.props.favorite_locations.keySeq().map((key, idx) => {
          let name = this.props.favorite_locations.get(key)
          return (<FavoriteLocation loacation_key={key} 
                                    id={idx} 
                                    key={"fav"+key} 
                                    clickHandler={()=>this.props.setLocationHandler(name, key)}
                                    details={this.props.favorite_results.get(key)}
                                    getWeatherHandler={()=>this.props.getFavoriteWeatherHandler(key)}
                                    name={name}/>)})}
        </CardDeck>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    setLocationHandler: (name, key) =>{
      dispatch(FavoritesActions.setLocationAction(name, key));
    },
    getFavoriteWeatherHandler(key){
      dispatch(FavoritesActions.loadFavoriteWeather(key));
    }
    

  }
}

const mapStateToProps = (state) => {
  return {
    favorite_locations: state['favorites'].get('favorite_locations'),
    favorite_results: state['favorites'].get('favorite_results'),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);