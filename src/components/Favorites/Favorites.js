import React from 'react';
import { connect } from 'react-redux';
import './Favorites.css';
import FavoriteLocation from '../FavoriteLocation/FavoriteLocation'
import CardGroup from 'react-bootstrap/CardGroup'

class Favorites extends React.Component{
  componentDidMount() {
    
  };

  render() {
    console.log("here")

    return (
      <div className="FiveDay">
        
        <CardGroup>
        {this.props.favorite_locations.map( (res, idx) => {

          return (<FavoriteLocation loacation_key={res} id={idx} key={"fav"+idx}/>)})}
  
        </CardGroup>
                
        
  
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    

  }
}

const mapStateToProps = (state) => {
  return {
    favorite_locations: state['favorites'].get('favorite_locations'),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);