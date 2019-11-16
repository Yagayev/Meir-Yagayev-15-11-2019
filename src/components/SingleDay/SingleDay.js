import React from 'react';
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

class SingleDay extends React.Component{
    render(){
        let date = new Date();
        let timeStamp = this.props.details.EpochDate;
        date.setTime(timeStamp*1000) // convert ms->s

        return (
            <div>
                <p>
                {days[date.getDay()]}: &nbsp;
                {this.props.details.Temperature.Minimum.Value}-{this.props.details.Temperature.Maximum.Value}C&nbsp; 
                {this.props.details.Day.IconPhrase}
                </p>
                

            </div>
        )
    }
}

export default SingleDay;
