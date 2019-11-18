import React from 'react';
import Button from 'react-bootstrap/Button';

class FavIcon extends React.Component{

    render(){
        let text = '☆'
        if(this.props.isFaveorite){
            text = '★'
        }
        return (<Button variant="light" onClick={this.props.flipFavoriteStatusHandler}>{text}</Button>)
    }
}

export default FavIcon;