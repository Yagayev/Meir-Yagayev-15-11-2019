import React from 'react';
import { connect } from 'react-redux';
import './FiveDay.css';
import SingleDay from '../SingleDay/SingleDay'
import CardGroup from 'react-bootstrap/CardGroup'
import FavIcon from '../FavIcon/FavIcon'

import FiveDayActions from './actions'

class FiveDay extends React.Component{
  componentDidMount() {
    
  };

  render() {
    let is_favourite = this.props.favorite_locations.includes(this.props.location_key);
    return (
      
      <div className="FiveDay">
        <p>{String(this.props.favorite_locations)}</p>
        <h3>
          {this.props.location_name}
          {this.props.location_name!==""&&(<FavIcon isFaveorite={is_favourite} 
                                                    flipFavoriteStatusHandler={()=>this.props.flipFavoriteStatusHandler(is_favourite, this.props.location_key)}/>)}
        </h3>
        <CardGroup>
        {this.props.results && this.props.results.DailyForecasts.map( (res, idx) => {
          return (<SingleDay details={res} key={idx}/>)})}
  
        </CardGroup>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    flipFavoriteStatusHandler: (is_favourite, location_key)=>{
      dispatch(FiveDayActions.flipFavoriteStatusAction(is_favourite, location_key));
    },

  }
}

const mapStateToProps = (state) => {
  // let location_key = state['five_day_forcast'].get('location_key');
  // let favorite_locations = state['favorites'].get('favorite_locations');

  return {
    location_name: state['five_day_forcast'].get('location_name'),
    location_key: state['five_day_forcast'].get('location_key'),
    results: state['five_day_forcast'].get('results'),
    // is_favourite: favorite_locations.includes(location_key),
    favorite_locations: state['favorites'].get('favorite_locations'),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiveDay);