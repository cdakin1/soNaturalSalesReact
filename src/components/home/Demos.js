import React, { Component } from 'react';
// import {
//   ApolloClient,
//   gql,
//   graphql,
//   ApolloProvider,
// } from 'react-apollo';

const Demos = ({ data: {loading, error, demos }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }
   return <ul>
     { demos.map( demo => <li key={demo.id}>{demo.name}</li> ) }
   </ul>;
 };

export default Demos;
