import React, { Component } from 'react';
import DemoForm from './DemoForm';
import Demos from './Demos'
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
} from 'react-apollo';
const client = new ApolloClient();

const demosQuery = gql`
   query DemosQuery {
     demos {
       id
       name
     }
   }
 `;
 
const DemosWithData = graphql(demosQuery)(Demos);
class Home extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="home">
          <DemoForm />
          <DemosWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default Home;
