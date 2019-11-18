import React from 'react';
import Card from 'react-bootstrap/Card'



class FavoriteLocation extends React.Component{
    componentDidMount(){
        // TODO this.props.loadWeatherHandler(this.props.id, this.props.loacation_key)
    }

    render(){
        return (
            <Card bg="light" border="secondary">
                <Card.Header>
                {this.props.id}
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
