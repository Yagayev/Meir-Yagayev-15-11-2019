import React from 'react';
import Card from 'react-bootstrap/Card'

let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


class SingleDay extends React.Component{
    render(){
        let date = new Date();
        let timeStamp = this.props.details.EpochDate;
        date.setTime(timeStamp*1000) // convert ms->s

        return (
            <Card bg="light" border="secondary">
                <Card.Header>
                {days[date.getDay()]}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                    {this.props.details.Temperature.Minimum.Value}-{this.props.details.Temperature.Maximum.Value}°C
                    <br/> 
                    {this.props.details.Day.IconPhrase}
                    </Card.Text>
                </Card.Body>
                

            </Card>
        )
    }
}

export default SingleDay;
