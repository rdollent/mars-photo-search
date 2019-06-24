import React from 'react';
// need connect function to be able to connect to store from Provider
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { getUserQuery } from '../../../api/queries/queries.js';

// , getAuthorsQuery, addBookMutation, getBooksQuery } 

import * as actions from '../actions/actions';

class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.submitInput = this.submitInput.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.props.submitNewInput(event.target.value);
    }

    submitInput(e) {
        e.preventDefault();
        console.log(this.state);
        // fetch
        // fetch('https://data.nasa.gov/resource/gh4g-9sfh.json', {
        //     method: 'GET'
        //     })
        //     .then(res => res.json())
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch(err => {
        //         throw new Error(err);
        //     });

        const data = this.props.getUserQuery({
            variables: {
                username: 'hi'
            }
        }).user;
        // const data = this.props.getUserQuery.user;
        console.log('users are ', data);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitInput}>
                    <input type="text" name="search" id="searchBar" onChange={this.handleInput}/>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.input;
    
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewInput: (input) => {
            dispatch(actions.addInput(input))
        }
    }
};
  

const Container = connect(mapStateToProps, mapDispatchToProps)(Search);

// export default Search;

export default compose(
    // graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    // graphql(addBookMutation, { name: "addBookMutation" }),
    graphql(getUserQuery, { name: "getUserQuery" })
)(Container);



// module.exports = Container;