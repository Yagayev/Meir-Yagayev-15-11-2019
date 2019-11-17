import React from 'react';
import { connect } from 'react-redux';
import './FiveDay.css';
import SingleDay from '../SingleDay/SingleDay'
import CardGroup from 'react-bootstrap/CardGroup'

class FiveDay extends React.Component{
  componentDidMount() {
  };

  render() {
    return (
      <div className="FiveDay">
        
        <h3>{this.props.location_name}</h3>
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
    

  }
}

const mapStateToProps = (state) => {
  return {
    location_name: state['five_day_forcast'].get('location_name'),
    location_key: state['five_day_forcast'].get('location_key'),
    results: state['five_day_forcast'].get('results'),
    is_favourite: state['five_day_forcast'].get('is_favourite'),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiveDay);