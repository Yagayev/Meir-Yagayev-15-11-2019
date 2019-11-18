import React from 'react';
import Card from 'react-bootstrap/Card'
import '../../App.css';



class FavoriteLocation extends React.Component{
    componentDidMount(){
        // TODO this.props.loadWeatherHandler(this.props.id, this.props.loacation_key)
    }

    render(){
        return (
            <Card bg="light" border="secondary" className="Favorite-card" onClick={this.props.clickHandler}>
                <Card.Header>
                {this.props.name}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                    {this.props.loacation_key}
                    </Card.Text>
                </Card.Body>
                

            </Card>
        )
    }
}

export default FavoriteLocation;
