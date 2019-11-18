import React from 'react';
import { connect } from 'react-redux';
import {InputText} from 'primereact/inputtext';
import Button from 'react-bootstrap/Button'
import SearchActions from './actions'
import { ListGroup} from 'react-bootstrap';


class Search extends React.Component{
  componentDidMount() {
    
  };

  componentDidUpdate(prevProps) {

  }

  render() {
    return (
      
      <div>
        <br/>
        <InputText value={this.props.search_term} onChange={this.props.updateSearchTermHandler} placeholder="Search"/>
        <br/>
        <Button variant="primary" size="sm" onClick={()=>{this.props.submitSearchHandler(this.props.search_term)}}>Search</Button>
        <ListGroup>
          {this.props.results.map((res, idx) => {

              return(
                  <ListGroup.Item action
                                  variant="light"
                                  onClick={()=>this.props.setLocationHandler(res.LocalizedName, res.Key)}
                                  key={"search"+idx}>

                      {res.LocalizedName}
                  </ListGroup.Item>
              )
          })}
        </ListGroup>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchTermHandler: (e)=>{
      dispatch(SearchActions.updateSearchTermAction(e.target.value));
    },
    submitSearchHandler: (search_term) =>{
      if(search_term&&search_term!==""){
        dispatch(SearchActions.submitSearchAction(search_term));
      }
      
    },
    setLocationHandler: (name, key) =>{
      dispatch(SearchActions.setLocationAction(name, key));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    search_term: state['search'].get('search_term'),
    results: state['search'].get('results'),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);