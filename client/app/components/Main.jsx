import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Search from 'Search';
// const Results = require('Results');


// apollo client setup
const client = new ApolloClient({
    uri:  'https://mars-photo-search-rdollent.c9users.io/graphql' || 'http://localhost:3000/graphql'
});

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <div id='main'>
                    <Search/>
                </div>
            </ApolloProvider>
        );
    }
}

// module.exports = Main;

// cannot mix import with module.exports
export default Main;
