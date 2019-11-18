import React from 'react';
import Card from 'react-bootstrap/Card'
import '../../App.css';



class FavoriteLocation extends React.Component{
    componentDidMount() {
        this.props.getWeatherHandler();
      };

    render(){
        return (
            <Card bg="light" border="secondary" className="Favorite-card" onClick={this.props.clickHandler}>
                <Card.Header>
                {this.props.name}
                </Card.Header>
                <Card.Body>
                {this.props.details&&(<Card.Text>
                    {this.props.details.WeatherText}
                    <br/>
                    {this.props.details.Temperature.Metric.Value}°C
                    </Card.Text>)}
                </Card.Body>
                

            </Card>
        )
    }
}

export default FavoriteLocation;
